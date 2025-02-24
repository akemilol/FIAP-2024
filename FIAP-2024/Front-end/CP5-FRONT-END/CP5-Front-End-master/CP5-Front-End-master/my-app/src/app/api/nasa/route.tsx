import { NextResponse } from 'next/server';

const apiKey = 'DoO5o1GYjlFVKQVxglsMrM3iCmhMP3q2YSDeX4VD';
const nasaApodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export async function GET() {
  try {
    const response = await fetch(nasaApodUrl);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch NASA APOD' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}