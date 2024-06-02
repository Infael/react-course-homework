import db from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import { URL } from 'url';

export const GET = async (request: NextRequest) => {
  // for testing purposes await for 2 seconds
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // for testing purposes return an error
  // return NextResponse.error();

  const url = new URL(request.nextUrl.href);
  const params = url.searchParams;

  let model = params.get('model') ?? undefined;
  let brand = params.get('brand') ?? undefined;
  let location = params.get('location') ?? undefined;

  if (model === '') {
    model = undefined;
  }
  if (brand === '') {
    brand = undefined;
  }
  if (location === '') {
    location = undefined;
  }

  console.log({ model, brand, location });

  const data = await db.car.findMany({
    include: {
      brand: true,
      model: true,
    },
    where: {
      brand: {
        name: brand,
      },
      model: {
        name: model,
      },
      location: location,
    },
  });

  return NextResponse.json({ data });
};
