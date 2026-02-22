import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const leadSchema = z.object({
  email: z.string().email(),
  company_name: z.string().min(1),
  clarity_score: z.number().min(0).max(100),
  recommended_next_step: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = leadSchema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEAD_INBOX_EMAIL;
    const from = process.env.FROM_EMAIL;

    if (!resendApiKey || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "email_not_configured", message: "Email capture is not configured yet." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const subject = `New Camber audit lead: ${input.company_name}`;
    const html = `
      <h2>New Operational Clarity Audit Lead</h2>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Company:</strong> ${input.company_name}</p>
      <p><strong>Clarity score:</strong> ${input.clarity_score}</p>
      <p><strong>Recommended next step:</strong> ${input.recommended_next_step}</p>
    `;

    await resend.emails.send({
      from,
      to,
      subject,
      html,
      text: [
        "New Operational Clarity Audit Lead",
        `Email: ${input.email}`,
        `Company: ${input.company_name}`,
        `Clarity score: ${input.clarity_score}`,
        `Recommended next step: ${input.recommended_next_step}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "invalid_lead_request", details: error.flatten() }, { status: 400 });
    }

    console.error("lead_capture_failed", error);
    return NextResponse.json({ ok: false, error: "lead_capture_failed" }, { status: 502 });
  }
}
