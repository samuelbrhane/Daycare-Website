const nodemailer = require("nodemailer");
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "1addismaya@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "1addismaya@gmail.com",
      to: "1addismaya@gmail.com",
      subject: `New message from the website.`,
      html: `
            <div>
                <h3>Parent Name: ${data.parentName}</h3>
                <h3>Parent Email address: ${data.parentEmail}</h1>
                <h3>Parent Phone Number: ${data.parentPhone}</h3>
                <h3>Child Name: ${data.childName}</h3>
                <h3>Child Age: ${data.childAge}</h3>
                <h4>Comment: ${data.comment}</h4>
            </div>
            `,
    });

    return res.status(200).json({ message: "Message sent." });
  }
  res.status(400).json({ message: "Bad Request" });
};

export default handler;
