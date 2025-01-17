const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Import the CORS middleware
const app = express();
app.use(cors());             // Enable CORS for all routes





// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle email sending
app.post("/send-email", async (req, res) => {
    const { name, email, subject, message,mobilenumber } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: "souravshakya951@gmail.com", // Your Gmail address
            pass: "ejaegdweseaqqfqb",     // Your App Password
        },
    });

    // User Email
    const userMail = {
        from: `"Portfolio Website" <Saurav Kumar>`,
        to: email, // Replace with your own email
        subject: `Web Development`,
        text: `Hi ${name}\nGreeting From Saurav Kumar.\n We recieved your message successfully.\n We will contact you soon...\n \n \n Have a nice day!`,
    };
//Mail Message To Myself
const selfMail = {
    from: `"Portfolio Website" <${name}>`,
    to: `Souravshakya951@gmail.com`, // Replace with your own email
    subject: `Web Development`,
    text: `UserName:${name}\nMobileNumber:${mobilenumber}\n Message: ${message}`,
};

    // Send the email
    try {
        await transporter.sendMail(userMail);
        await transporter.sendMail(selfMail);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
