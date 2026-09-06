import { supabase } from "./supabaseClient";

export async function POST(request) {
  try {
    const { name, email, phone, message  } = await request.json();
    
    if (!message || !name) {
      return Response.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    if (!supabase) {
      return Response.json(
        {
          error:
            "Supabase is not configured yet. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env.local — see README.md.",
        },
        { status: 500 }
      );
    }

    const { error } = await supabase
      .from("Portfolio_Contact_Form")
      .insert([{ name, email, phone, message }]);

    if (error) throw error;

    return Response.json({ ok: true });
  } catch (err) {
    console.error("submit-Form error:", err);
    return Response.json(
      { error: "Failed to save to Supabase." },
      { status: 500 }
    );
  }
}