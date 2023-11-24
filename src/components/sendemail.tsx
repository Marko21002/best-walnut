"use server";
import { Resend } from "resend";

export async function sendmail(name: string, email: string, phone: string) {
  const resend = new Resend("re_QT8hi2rY_GfN6MZZozNBoZ4scZsEESeCt");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "gufmark669@gmail.com",
    subject: "Hello World",
    html: `form Submited by  ${name} Email: ${email}, Phone: ${phone}`,
  });
}
