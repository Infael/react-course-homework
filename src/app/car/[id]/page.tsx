import Card from '@/components/Card';
import prisma from '@/utils/db';

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  });
  return car;
};

const CardDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id);

  return (
    <Card>
      <div className="flex flex-row justify-between">
        <h2 className="text-xl">{`${car?.brand.name} - ${car?.model.name}`}</h2>
        <p>{car?.price ? `${car.price} kč` : 'by arrangement'}</p>
      </div>
      <br />
      <p>Location: {car?.location ?? 'not specified'}</p>
      <p>Color: {car?.color ?? 'not specified'}</p>
      <p>Year: {car?.year ?? 'not specified'}</p>
      {car?.description && (
        <>
          <br />
          <hr />
          <br />
          <p>{car?.description}</p>
        </>
      )}
    </Card>
  );
};

export default CardDetailPage;
