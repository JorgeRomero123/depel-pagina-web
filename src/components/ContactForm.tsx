"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ status: "loading", message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setForm({
          status: "success",
          message: "Mensaje enviado correctamente. Le responderemos pronto.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setForm({
          status: "error",
          message: "Hubo un error al enviar el mensaje. Intente de nuevo.",
        });
      }
    } catch {
      setForm({
        status: "error",
        message: "Error de conexión. Intente de nuevo o escríbanos por WhatsApp.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-neutral-dark mb-1.5"
          >
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-neutral-border px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-muted/60 focus:outline-none focus:border-primary transition-colors"
            placeholder="Su nombre completo"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-neutral-dark mb-1.5"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-neutral-border px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-muted/60 focus:outline-none focus:border-primary transition-colors"
            placeholder="correo@empresa.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-neutral-dark mb-1.5"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-neutral-border px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-muted/60 focus:outline-none focus:border-primary transition-colors"
            placeholder="(777) 000 0000"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-neutral-dark mb-1.5"
          >
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full border border-neutral-border px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-muted/60 focus:outline-none focus:border-primary transition-colors"
            placeholder="Nombre de su empresa"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-neutral-dark mb-1.5"
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-neutral-border px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-muted/60 focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Describa brevemente su proyecto o necesidad"
        />
      </div>

      {form.status === "success" && (
        <p className="text-sm text-secondary font-medium">{form.message}</p>
      )}
      {form.status === "error" && (
        <p className="text-sm text-red-600 font-medium">{form.message}</p>
      )}

      <button
        type="submit"
        disabled={form.status === "loading"}
        className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-accent-alt disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {form.status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
