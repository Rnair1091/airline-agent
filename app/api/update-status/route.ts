import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Lead ID and status are required.' },
        { status: 400 }
      );
    }

    // Update the status column in the Supabase 'leads' table for the matching ID
    const { data, error } = await supabase
      .from('leads')
      .update({ status: status })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase update status error:', error.message);
      return NextResponse.json(
        { error: 'Database transaction failed.' },
        { status: 500 }
      );
    }

    console.log(`Successfully updated lead ${id} to ${status} in Supabase`);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Update status system error:", error);
    return NextResponse.json(
      { error: 'Internal system error updating status.' },
      { status: 500 }
    );
  }
}