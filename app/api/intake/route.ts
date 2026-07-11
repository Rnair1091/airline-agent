import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the absolute path to our custom local CRM database file
const CRM_DB_PATH = path.join(process.cwd(), 'data', 'leads.json');

export async function POST(req: NextRequest) {
  try {
    // 1. Extract the new contact fields and core identifiers from the payload
    const body = await req.json();
    const { travelerName, phone, email, pnr, sector, authorized } = body;

    // 2. Server-side Protection Checks (Never trust client-side inputs alone)
    if (!travelerName || !pnr || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required coordination metrics.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid backend email structural format.' }, { status: 400 });
    }

    const cleanPhone = phone.replace(/[\s()+\-\.]/g, '');
    if (cleanPhone.length < 7 || cleanPhone.length > 15 || /^(\d)\1+$/.test(cleanPhone)) {
      return NextResponse.json({ error: 'Contact phone validation failure.' }, { status: 400 });
    }

    // 3. Read existing data from our custom local CRM file
    let leads = [];
    if (fs.existsSync(CRM_DB_PATH)) {
      const fileData = fs.readFileSync(CRM_DB_PATH, 'utf8');
      leads = fileData ? JSON.parse(fileData) : [];
    } else {
      // Ensure the 'data' directory exists if this is a fresh setup
      const dirPath = path.dirname(CRM_DB_PATH);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    }

    // 4. Structure the complete entry including our newly added contact metrics
    const newLead = {
      id: `lead_${Date.now()}`,
      travelerName: travelerName.trim(),
      phone: cleanPhone,
      email: email.trim().toLowerCase(),
      pnr: pnr.trim().toUpperCase(),
      sector,
      authorized,
      status: 'Pending Assignment', // Baseline dashboard status indicator
      createdAt: new Date().toISOString()
    };

    // 5. Append the updated profile to our local dataset and write it back to disk
    leads.push(newLead);
    fs.writeFileSync(CRM_DB_PATH, JSON.stringify(leads, null, 2), 'utf8');

    console.log('CRM Local DB Synced Successfully:', newLead);

    return NextResponse.json({ 
      success: true, 
      message: 'Intake synchronized seamlessly with operational control centers.' 
    });

  } catch (error) {
    console.error('CRM Intake Sync Error:', error);
    return NextResponse.json(
      { error: 'Internal operational desk disruption error.' },
      { status: 500 }
    );
  }
}