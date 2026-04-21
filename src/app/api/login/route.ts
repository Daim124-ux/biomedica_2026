import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const validAccounts = [
      { email: 'sromek35@gmail.com', password: 'L1jrIj59Vy73' },
      { email: 'marzenka_ns@o2.pl', password: 'L1jrIj59Vy73' }
    ];

    const isValid = validAccounts.some(acc => acc.email === email && acc.password === password);

    if (isValid) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('auth_token', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });
      return response;
    } else {
      return NextResponse.json({ error: 'Nieprawidłowe dane logowania' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Wystąpił błąd' }, { status: 500 });
  }
}
