import nodemailer from "nodemailer";

const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: username,
    pass: password,
  },
});

export const mailOptions = () => {
  return {
    from: username,
    to: username,
  };
};
