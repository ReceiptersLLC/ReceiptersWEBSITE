import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { lng: string; ns: string } }
) {
  try {
    const { lng, ns } = params;
    
    // Validate language and namespace
    const supportedLanguages = ['en', 'fr', 'sw', 'de'];
    const supportedNamespaces = ['common'];
    
    if (!supportedLanguages.includes(lng) || !supportedNamespaces.includes(ns)) {
      return NextResponse.json({ error: 'Invalid language or namespace' }, { status: 400 });
    }

    // Read the translation file
    const filePath = path.join(process.cwd(), 'public', 'locales', lng, `${ns}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Translation file not found' }, { status: 404 });
    }

    const translations = fs.readFileSync(filePath, 'utf8');
    const parsedTranslations = JSON.parse(translations);

    return NextResponse.json(parsedTranslations, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error loading translation:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
