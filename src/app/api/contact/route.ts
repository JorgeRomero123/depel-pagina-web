import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos." },
        { status: 400 }
      );
    }

    // For now, log the submission. Replace with Resend or other
    // email service when API key is configured.
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "DEPEL Website <noreply@depel.com.mx>",
    //   to: "jonathan.depel@gmail.com",
    //   subject: `Nuevo contacto: ${name} - ${company || "Sin empresa"}`,
    //   text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No proporcionado"}\nEmpresa: ${company || "No proporcionada"}\n\nMensaje:\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
