import { useLocation } from "react-router";

const Appearance = (): React.ReactElement => {
  const location = useLocation();
  const appearanceProps = location.state as any;
  return (
    <div className="flex justify-center">
      <div className="h-auto w-8/12 border rounded-md shadow-sm p-6 m-6 mt-4 space-x-4 mobile:w-73 mobile:p-3 mobile:ml-2 mobile:block mobile:justify-center ">
        <div className="flex justify-center">
          <h1 className="font-rounded font-bold text-4xl text-purple-600">
            Apariencia
          </h1>
        </div>
        <div className="mt-10 space-y-3 ">
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Genero
            </p>
            <p>
              {appearanceProps?.appearance.gender
                ? appearanceProps?.appearance.gender
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Raza
            </p>
            <p>
              {appearanceProps?.appearance.race
                ? appearanceProps?.appearance.race
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Altura
            </p>

            {appearanceProps.appearance.height
              ? appearanceProps.appearance.height.map((height: string) => (
                  <p key={height}>{height}</p>
                ))
              : "No disponible"}
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Peso
            </p>
            {appearanceProps.appearance.weight
              ? appearanceProps.appearance.weight.map((weight: string) => (
                  <p key={weight}>{weight}</p>
                ))
              : "No disponible"}
          </div>

          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Color de ojos
            </p>
            <p>
              {appearanceProps.appearance.eyeColor
                ? appearanceProps.appearance.eyeColor
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Color de cabello
            </p>
            <p>
              {appearanceProps.appearance.hairColor
                ? appearanceProps.appearance.hairColor
                : "No disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
