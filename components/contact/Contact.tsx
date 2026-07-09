"use client";
import { useActionState } from "react";
import './contact.css'

async function handleFormSubmit(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
        return { success: false, error: "All fields are required." };
    }

    // Simulate remote network processing latency
    await new Promise((res) => setTimeout(res, 1200));
    return { success: true, error: null };
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

            <form className="contact-form">

                <div className="form-group">
                    <input type="text" id="name" required placeholder=" " />
                    <label htmlFor="name">ENTER YOUR NAME*</label>
                </div>

                <div className="form-group">
                    <input type="email" id="email" required placeholder=" " />
                    <label htmlFor="email">ENTER YOUR EMAIL*</label>
                </div>

                <div className="form-group">
                    <input type="tel" id="phone" placeholder=" " />
                    <label htmlFor="phone">PHONE NUMBER</label>
                </div>

                <div className="form-group">
                    <textarea id="message" rows={4} required placeholder=" "></textarea>
                    <label htmlFor="message">YOUR MESSAGE*</label>
                </div>

                <div className="submit-btn-container">
                    <button type="submit" className="contact-submit-btn">SUBMIT</button>
                </div>

            </form>
        </section>

    );
}