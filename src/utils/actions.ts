'use server';

import { redirect } from 'next/navigation';
import prisma from './db';

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString();
  const brandId = formData.get('brandId')?.toString();
  const description = formData.get('description')?.toString();
  const location = formData.get('location')?.toString();
  const price = formData.get('price')?.toString();

  if (!modelId || !brandId || !description || !location || !price) {
    return;
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
      price: parseInt(price),
      location: location,
    },
  });

  redirect('/');
};
