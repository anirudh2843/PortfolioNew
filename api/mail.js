import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Message from ${name}: ${subject}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 30px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 8px; border: 1px solid #ddd;">
                <tr>
                  <td align="center" style="padding: 20px; background: #1a73e8; color: #fff; font-size: 22px; font-weight: bold; border-radius: 8px 8px 0 0;">
                    📬 New Portfolio Message
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; font-size: 16px; color: #333;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong><br/>${message}</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 20px;">
                    <a href="mailto:${email}" 
                      style="display:inline-block; padding:12px 24px; background:#1a73e8; color:#fff; text-decoration:none; font-size:16px; border-radius:5px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 15px; font-size: 12px; color: #888; border-top: 1px solid #ddd;">
                    This message was sent from your portfolio contact form.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Mail Error:", error);
    return res.status(500).json({ error: "Failed to send message", details: error.message });
  }
}
