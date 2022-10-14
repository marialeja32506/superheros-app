import { useLocation } from "react-router";

const PowerStats = (): React.ReactElement => {
  const location = useLocation();
  const powerstatsProps = location.state as any;

  return (
    <div className="flex justify-center mobile:block mobile:justify-start">
      <div className="h-auto w-8/12 border rounded-md shadow-sm p-6 m-6 mt-4 space-x-4  mobile:w-73 mobile:p-3 mobile:ml-2 mobile:block mobile:justify-center mobile:h-72 ">
        <div className="flex justify-center">
          <h1 className="font-rounded font-bold text-4xl text-purple-600">
            Powerstats
          </h1>
        </div>
        <div className="mt-10 space-y-3 ">
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Inteligencia
            </p>
            <p>
              {powerstatsProps?.powerstats.occupation
                ? powerstatsProps?.powerstats.occupation
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Fuerza
            </p>

            <p>
              {powerstatsProps?.powerstats.strength
                ? powerstatsProps?.powerstats.strength
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Velocidad
            </p>

            <p>
              {powerstatsProps?.powerstats.speed
                ? powerstatsProps?.powerstats.speed
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Durabilidad
            </p>

            <p>
              {powerstatsProps?.powerstats.durability
                ? powerstatsProps?.powerstats.durability
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Poder
            </p>

            <p>
              {powerstatsProps?.powerstats.power
                ? powerstatsProps?.powerstats.power
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Combate
            </p>

            <p>
              {powerstatsProps?.powerstats.combat
                ? powerstatsProps?.powerstats.combat
                : "No disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerStats;
