"use server"

import { Resend } from "resend" // Example: using Resend for email sending

interface SendEmailState {
  success: boolean
  message: string
}

// Initialize Resend client (replace with your actual API key from environment variables)
// For a real application, you would use process.env.RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY || "re_YOUR_RESEND_API_KEY")

export async function sendContactEmail(prevState: SendEmailState, formData: FormData): Promise<SendEmailState> {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return { success: false, message: "All fields are required." }
  }

  // Simulate email sending for v0 preview
  console.log("Attempting to send email with the following details:")
  console.log(`From: ${firstName} ${lastName} <${email}>`)
  console.log(`Subject: ${subject}`)
  console.log(`Message: ${message}`)

  try {
    // In a real application, you would use an email sending service like Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'onboarding@resend.dev', // Replace with your verified sender email
    //   to: 'venkataswathi74@gmail.com', // Your email address to receive messages
    //   subject: `Portfolio Contact: ${subject}`,
    //   html: `<p><strong>From:</strong> ${firstName} ${lastName} (${email})</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message}</p>`,
    // });

    // if (error) {
    //   console.error('Resend error:', error);
    //   return { success: false, message: 'Failed to send message. Please try again later.' };
    // }

    // Simulate success after a delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
