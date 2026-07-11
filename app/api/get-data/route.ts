import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Force the dashboard data fetcher to look into the exact same file as our intake form
    const filePath = path.join(process.cwd(), 'data', 'leads.json');
    
    // If no submissions have been made yet, return an empty list gracefully instead of crashing
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    
    const fileData = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json(fileData ? JSON.parse(fileData) : []);
  } catch (error) {
    console.error("Dashboard database read error:", error);
    return NextResponse.json({ error: 'Failed to read tracking data.' }, { status: 500 });
  }
}