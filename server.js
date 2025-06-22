const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Fix: Parse form data
app.use(cors());

// Email Config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "amanmonga9721@gmail.com", // Your email
        pass: "rmfr rhoe vldq ojbe", // ⚠ Use environment variables for safety
    },
});

app.post("/send-email", async (req, res) => {
    console.log("📩 Received Form Data:", req.body); // Debugging

    const { firstName, lastName, email, mobile, city, description } = req.body;

    const mailOptions = {
        from: "amanmonga9721@gmail.com",
        to: "amanmonga9721@gmail.com", // Receiver email
        subject: "New Form Submission",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${mobile}\nCity: ${city}\nDetails: ${description}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent Successfully!");
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("❌ Error Sending Email:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
