import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID is required.' },
        { status: 400 }
      );
    }

    // Convert string ID to a clean integer number to match the Supabase column type correctly
    const numericId = parseInt(id, 10);

    // Execute the deletion directly inside your Supabase 'leads' table
    const { data, error } = await supabase
      .from('leads')
      .delete()
      .eq('id', numericId)
      .select();

    if (error) {
      console.error('Supabase delete error:', error.message);
      return NextResponse.json(
        { error: 'Database transaction failed.' },
        { status: 500 }
      );
    }

    console.log(`Successfully deleted lead ${numericId} from Supabase`);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Delete route system error:", error);
    return NextResponse.json(
      { error: 'Internal system error processing deletion.' },
      { status: 500 }
    );
  }
}