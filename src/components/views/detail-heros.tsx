import { useLocation, useNavigate } from "react-router";
import { useGetSuperHero } from "../../services/superhero";

const HeroDetail = (): React.ReactElement => {
  const location = useLocation();
  const heroProps = location.state as any;
  const navigate = useNavigate();

  const { data: superHerosDetail } = useGetSuperHero(heroProps.id);

  return (
    <div className="grid grid-cols-11 laptop:space-x-32 tablet:space-x-32 mobile:grid-cols-1">
      <div className="col-span-3 h-96 w-80 p-4 col-start-1 mobile:col-span-1">
        <img
          className="relative w-full h-full mt-2 shadow-sm rounded-md desktop:ml-10 laptop:ml-10"
          alt="hero-img"
          src={superHerosDetail?.images.md}
        />
      </div>
      <div className="col-span-8 h-96 w-8/12 border rounded-md shadow-sm p-4 mt-4 space-x-4 mobile:col-span-1 mobile:w-73 mobile:p-3 mobile:ml-2 mobile:flex mobile:justify-center mobile:h-72">
        <div>
          <button
            className="h-12 w-36 p-2 rounded-md border bg-purple-700 text-white font-rounded font-medium"
            onClick={() =>
              navigate("/biography", {
                state: { biography: superHerosDetail?.biography },
              })
            }
          >
            Biography
          </button>
          <button
            className="h-12 w-36 p-2 rounded-md border bg-purple-700 text-white font-rounded font-medium"
            onClick={() =>
              navigate("/work", { state: { work: superHerosDetail?.work } })
            }
          >
            Work
          </button>
          <button
            className="h-12 w-36 p-2 rounded-md border bg-purple-700 text-white font-rounded font-medium"
            onClick={() =>
              navigate("/appearance", {
                state: { appearance: superHerosDetail?.appearance },
              })
            }
          >
            Appearance
          </button>
          <button
            className="h-12 w-36 p-2 rounded-md border bg-purple-700 text-white font-rounded font-medium"
            onClick={() =>
              navigate("/powerstats", {
                state: { powerstats: superHerosDetail?.powerstats },
              })
            }
          >
            Powerstats
          </button>
          <button
            className="h-12 w-36 p-2 rounded-md border bg-purple-700 text-white font-rounded font-medium"
            onClick={() =>
              navigate("/connections", {
                state: { connections: superHerosDetail?.connections },
              })
            }
          >
            Connections
          </button>
        </div>
        <div className="mt-10 space-y-2">
          <h1 className="text-xl font-rounded font-bold text-purple-400">
            Nombre
          </h1>
          <p>{superHerosDetail?.name}</p>
          <h1 className="text-xl font-rounded font-bold text-purple-400">
            Slug
          </h1>
          <p>{superHerosDetail?.slug}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
