import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { id } = await request.json(); // Switch from index to unique id
    const filePath = path.join(process.cwd(), 'data', 'leads.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found.' }, { status: 404 });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    let leads = JSON.parse(fileData);

    // Filter out the item matching the specific ID
    const updatedLeads = leads.filter((lead: any) => lead.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(updatedLeads, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete.' }, { status: 500 });
  }
}