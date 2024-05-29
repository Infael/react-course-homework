import Card from './Card';
import SelectInput from './input/SelectInput';
import TextInput from './input/TextInput';
import { Brand, CarModel } from '@prisma/client';

interface CarSearchFormProps {
  models: CarModel[];
  brands: Brand[];

  onSearch: (data: { location: string; model: string; brand: string }) => void;
}

const CarSearchForm = ({ models, brands, onSearch }: CarSearchFormProps) => {
  return (
    <Card>
      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.target as HTMLFormElement);
          console.log(data.get('model'));
          onSearch({
            location: data.get('location') as string,
            model: data.get('model') as string,
            brand: data.get('brand') as string,
          });
        }}
      >
        <TextInput label="Location" name="location" />
        <SelectInput
          label="model"
          name="model"
          items={[
            { label: '', value: '' },
            ...models.map((model) => ({
              label: model.name,
              value: model.name,
            })),
          ]}
        />
        <SelectInput
          label="Brand"
          name="brand"
          items={[
            { value: '', label: '' },
            ...brands.map((brand) => ({
              label: brand.name,
              value: brand.name,
            })),
          ]}
        />
        <button type="submit" className="btn mt-4">
          Search
        </button>
      </form>
    </Card>
  );
};

export default CarSearchForm;
