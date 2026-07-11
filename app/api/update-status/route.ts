import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { id, status } = await request.json(); // Switch from index to unique id
    const filePath = path.join(process.cwd(), 'data', 'leads.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    let leads = JSON.parse(fileData);

    // Find the record index by its unique string ID
    const leadIndex = leads.findIndex((lead: any) => lead.id === id);

    if (leadIndex !== -1) {
      leads[leadIndex].status = status;
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf8');
      console.log(`Successfully updated lead ${id} to ${status}`);
      return NextResponse.json({ success: true });
    } else {
      console.error(`Lead ID ${id} not found in database.`);
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }
  } catch (error) {
    console.error("Update status error:", error);
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}