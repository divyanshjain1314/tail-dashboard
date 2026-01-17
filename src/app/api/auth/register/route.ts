import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const newUser = await req.json();
    const filePath = path.join(process.cwd(), 'src/data/users.json');

    const data = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(data);

    if (users.find((u: any) => u.email === newUser.email)) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const updatedUsers = [...users, { ...newUser, id: Date.now() }];
    await fs.writeFile(filePath, JSON.stringify(updatedUsers, null, 2));

    return NextResponse.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error saving user' }, { status: 500 });
  }
}