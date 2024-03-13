"use server";

import { Resend } from "resend";
import { validatedString } from "@/lib/utils";
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validatedString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validatedString(message, 5000)) {
    return { error: "Invalid message" };
  }
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "reyadmousa@outlook.com",
      subject: "message from contact form",
      text: message as string,
      reply_to: senderEmail as string,
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to send email" };
  }
};
