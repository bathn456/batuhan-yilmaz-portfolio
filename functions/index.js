const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure email transport (use Gmail or your preferred service)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ybatu42@gmail.com", // Your email
        pass: functions.config().gmail.password, // App password (set via firebase functions:config:set gmail.password="your-app-password")
    },
});

// Contact form submission handler
exports.sendContactEmail = functions.https.onCall(async (data, context) => {
    const { name, email, subject, message } = data;

    // Validate input
    if (!name || !email || !subject || !message) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            "Missing required fields",
        );
    }

    // Email options
    const mailOptions = {
        from: "ybatu42@gmail.com",
        to: "ybatu42@gmail.com", // Your email to receive messages
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new functions.https.HttpsError(
            "internal",
            "Failed to send email",
        );
    }
});
