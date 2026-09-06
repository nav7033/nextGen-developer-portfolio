"use client";
import { useActionState } from "react";
import './contact.css'

async function handleFormSubmit(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!name || !email || !message) {
        return { success: false, error: "All fields are required." };
    }

    try {
        const res = await fetch("/api/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message }),
        });

        if (!res.ok) {
            return { success: false, error: "Failed to submit form." };
        }

        return { success: true, error: null };
    } catch (err) {
        console.error("Contact form submission error:", err);
        return { success: false, error: "Failed to submit form." };
    }
}

export default function Contact() {
    const [state, formAction, isPending] = useActionState(handleFormSubmit, { success: false, error: null });

    return (
        <section id="contact" className="contact-section-container">
            <div className="contact-header-box">
                <h2 className="contact-title">CONTACT</h2>
            </div>

            <p className="contact-intro-text">
                Have an opportunity or a project in mind? Drop me a message and let's discuss how we can build your next full-stack application.
            </p>

            <form className="contact-form" action={formAction}>

                <div className="form-group">
                    <input type="text" id="name" name="name" required placeholder=" " />
                    <label htmlFor="name">ENTER YOUR NAME*</label>
                </div>

                <div className="form-group">
                    <input type="email" id="email" name="email" required placeholder=" " />
                    <label htmlFor="email">ENTER YOUR EMAIL*</label>
                </div>

                <div className="form-group">
                    <input type="tel" id="phone" name="phone" placeholder=" " />
                    <label htmlFor="phone">PHONE NUMBER</label>
                </div>

                <div className="form-group">
                    <textarea id="message" name="message" rows={4} required placeholder=" "></textarea>
                    <label htmlFor="message">YOUR MESSAGE*</label>
                </div>

                <div className="submit-btn-container">
                    <button type="submit" className="contact-submit-btn" disabled={isPending}>
                        {isPending ? "SENDING..." : "SUBMIT"}
                    </button>
                </div>

                {state.error && (
                    <p className="form-error" role="alert">{state.error}</p>
                )}
                {state.success && (
                    <p className="form-success" role="status">Thanks! Your message has been sent.</p>
                )}

            </form>
        </section>
    );
}