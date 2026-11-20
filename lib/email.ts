import { z } from "zod";

type NotificationEmail = {
  subject: string;
  text: string;
  replyTo: string;
};

const recipientsSchema = z.array(z.string().trim().email()).min(1);

export async function sendNotificationEmail({
  subject,
  text,
  replyTo,
}: NotificationEmail) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const parsedRecipients = recipientsSchema.safeParse(
    process.env.NOTIFICATION_EMAIL_TO?.split(",") ?? [],
  );

  if (!apiKey || !from) {
    const missingVariables = [
      !apiKey && "RESEND_API_KEY",
      !from && "RESEND_FROM_EMAIL",
    ].filter(Boolean);

    throw new Error(
      `Missing email configuration: ${missingVariables.join(", ")}`,
    );
  }

  if (!parsedRecipients.success) {
    throw new Error(
      "Invalid NOTIFICATION_EMAIL_TO: provide comma-separated email addresses",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "dipact-website/1.0",
    },
    body: JSON.stringify({
      from,
      to: parsedRecipients.data,
      reply_to: replyTo,
      subject,
      text,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Resend request failed with status ${response.status}`);
  }
}
