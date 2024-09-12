import { NextRequest, NextResponse } from 'next/server';
import redisClient from '../../../lib/redis';

export async function POST(req: NextRequest) {
    const { key, value } = await req.json();

    if (!key || !value) {
        return NextResponse.json({ message: 'Key and value must be provided.' }, { status: 400 });
    }

    // Your logic to set data in Redis
    await redisClient.set(key, value);
    return NextResponse.json({ message: 'Data stored in Redis' });
}