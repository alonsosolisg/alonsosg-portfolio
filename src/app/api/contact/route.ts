import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../../../config/nodemailer";

export async function POST(request: NextRequest) {
  if (!request.body) {
    return NextResponse.next();
  }
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    await transporter.sendMail({
      subject: `Contact portfolio: ${name} reached out`,
      text: `Contact portfolio: ${name} reached out`,
      html: `<p>${message}</p><a href="mailto:${email}">Reply to: ${email}</a>`,
      from: "alonso@storedevlabs.com",
      to: "alonso@storedevlabs.com",
    });
    return NextResponse.json({ message: "Message sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Message not sent" });
  }
}
