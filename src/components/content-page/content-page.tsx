import { useNavigate } from "react-router";
import { useGetSuperHeros } from "../../services/superheros";

const ContentPage = (): React.ReactElement => {
  const { data: superHerosList } = useGetSuperHeros();
  const navigate = useNavigate();

  const HandleClickImage = (id: number) => {
    navigate(`/${id}`, {
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 mobile:grid-cols-4 mobile:gap-1">
      {superHerosList?.map((hero: any) => (
        <div
          key={hero.id}
          className="relative col-span-2 h-80 shadow-sm rounded-md mobile:col-span-2 tablet:col-span-4 laptop:col-span-3 mobile:h-64"
        >
          <img
            className="relative w-full h-full shadow-sm rounded-md mt-2"
            alt="insurers-logo"
            src={hero.images.md}
            onClick={() => HandleClickImage(hero.id)}
          />
          <p className="absolute text-lg font-rounded font-semibold text-white bottom-14 left-6">
            {hero.name}
          </p>
          <p className="absolute text-base font-rounded font-normal text-white bottom-10 left-6">
            {hero.name}
          </p>
          <p className="absolute text-base font-rounded font-normal text-white bottom-6 left-6">
            {hero.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContentPage;
