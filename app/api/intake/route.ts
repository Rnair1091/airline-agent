import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient'; // Adjusted to relative path for compilation safety

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Destructured 'airline' alongside the standard form parameters
    const { travelerName, phone, email, pnr, sector, authorized, airline } = body;

    // 1. Validation check
    if (!travelerName || !phone || !email || !pnr || !sector) {
      return NextResponse.json(
        { error: 'All contact and flight details are mandatory.' },
        { status: 400 }
      );
    }

    // 2. Insert into Supabase database with dynamic airline attribution
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          traveler_name: travelerName,
          phone: phone,
          email: email,
          pnr: pnr,
          sector: sector,
          authorized: authorized || false,
          airline: airline || 'General Desk' // Saves the specific carrier name, defaults to main desk if empty
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error.message);
      return NextResponse.json(
        { error: 'Database transaction failed.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Request submitted successfully!', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('System error:', error);
    return NextResponse.json(
      { error: 'Internal system error processing request.' },
      { status: 500 }
    );
  }
}