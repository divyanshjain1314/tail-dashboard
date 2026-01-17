import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const filePath = path.join(process.cwd(), 'src/data/users.json');
        const data = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(data);

        const user = users.find((u: any) => u.email === body.email && u.password === body.password);

        if (user) {
            return NextResponse.json({ success: true, user });
        } else {
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}