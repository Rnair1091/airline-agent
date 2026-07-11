import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase using the PUBLIC anon key. 
// This respects the RLS policies you configured.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! 
);

export async function GET() {
  try {
    // Fetch all records from the 'leads' table
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Map the Supabase column names to match the names your dashboard expects
    const formattedData = (data || []).map((item) => ({
      id: item.id,
      createdAt: item.created_at,
      travelerName: item.traveler_name,
      phone: item.phone,
      email: item.email,
      pnr: item.pnr,
      sector: item.sector,
      status: item.status || 'Pending Assignment'
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Dashboard database read error:", error);
    return NextResponse.json({ error: 'Failed to read tracking data.' }, { status: 500 });
  }
}