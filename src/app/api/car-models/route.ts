import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await db.carModel.findMany();

  return NextResponse.json({ data });
};
