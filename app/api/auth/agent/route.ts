import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // The server checks the credentials safely hidden away from the user's browser
    if (username === 'admin' && password === 'password123') {
      // Return a successful response to the frontend
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials. Access denied to operational workspace.' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Network delay encountered. Please verify inputs or contact dispatch.' },
      { status: 500 }
    );
  }
}