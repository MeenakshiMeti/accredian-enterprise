import { NextResponse } from "next/server";

// In-memory store for demo purposes only.
// In production this would write to a database (e.g. Postgres, Firebase, Airtable)
// or forward to a CRM webhook.
let leads = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, teamSize } = body;

    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      name,
      email,
      company,
      teamSize,
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);
    console.log("New lead captured:", lead);

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

export async function GET() {
  // Lets you sanity-check captured leads during local dev at /api/lead
  return NextResponse.json({ leads });
}
