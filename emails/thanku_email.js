// thankyou_email.js (or .ts)
export default function thankyou_email({ name, email, message }) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Your Message</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
                .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                .header { text-align: center; background-color: #007bff; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { padding: 20px; color: #333333; line-height: 1.6; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #777777; border-top: 1px solid #eeeeee; }
                .highlight { background-color: #e9f7ff; padding: 10px; border-left: 4px solid #007bff; margin: 20px 0; }
                @media (max-width: 600px) { .container { margin: 10px; padding: 10px; } }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You for Contacting Us!</h1>
                </div>
                <div class="content">
                    <p>Hi ${name},</p>
                    <p>Thank you for reaching out! We've received your message and appreciate you taking the time to connect with us. Here's a quick summary of what you sent:</p>
                    <div class="highlight">
                        <strong>Your Message:</strong><br>
                        ${message}
                    </div>
                    <p>We'll review your inquiry and get back to you at <strong>${email}</strong> as soon as possible, typically within 24-48 hours. If you have any additional details, feel free to reply to this email.</p>
                    <p>In the meantime, feel free to explore more on our website or follow us for updates.</p>
                    <p>Best regards,<br>
                    Rahul Adepawar<br>
                    Software Developer<br>
                </div>
                <div class="footer">
                    <p>This is an automated response. Please do not reply directly to this email.</p>
                    <p>&copy; 2023 [Your Company]. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}
