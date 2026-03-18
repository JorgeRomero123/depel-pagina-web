import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos." },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured, send email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM || "DEPEL Website <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "jonathan.depel@gmail.com",
        replyTo: email,
        subject: `Nuevo contacto: ${name}${company ? ` - ${company}` : ""}`,
        text: [
          `Nombre: ${name}`,
          `Email: ${email}`,
          `Teléfono: ${phone || "No proporcionado"}`,
          `Empresa: ${company || "No proporcionada"}`,
          "",
          "Mensaje:",
          message,
        ].join("\n"),
      });
    } else {
      // Fallback: log to console in development
      console.log("Contact form submission (no RESEND_API_KEY):", {
        name,
        email,
        phone,
        company,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
