import CarList from '@/components/CarList';
import CarSearchForm from '@/components/CarSearchForm';
import prisma from '@/utils/db';

const getCars = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  });

  return cars;
};

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany();
  return brands;
};

const fetchModels = async () => {
  const models = await prisma.carModel.findMany();
  return models;
};

const Home = async () => {
  const cars = await getCars();
  const brands = await fetchBrands();
  const models = await fetchModels();

  return (
    <>
      <CarSearchForm models={models} brands={brands} />
      <CarList cars={cars} />
    </>
  );
};

export default Home;
