import { useLocation } from "react-router";

const Biography = (): React.ReactElement => {
  const location = useLocation();
  const biographyProps = location.state as any;

  return (
    <div className="flex justify-center">
      <div className="h-auto w-8/12 border rounded-md shadow-sm p-6 m-6 mt-4 space-x-4 mobile:w-73 mobile:p-3 mobile:ml-2 mobile:block mobile:justify-center ">
        <div className="flex justify-center">
          <h1 className="font-rounded font-bold text-4xl text-purple-600">
            Biografia
          </h1>
        </div>
        <div className="mt-10 space-y-3 ">
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Nombre completo
            </p>
            <p>
              {biographyProps?.biography.fullName
                ? biographyProps?.biography.fullName
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Alter egos
            </p>

            {biographyProps.biography.alteregos
              ? biographyProps.biography.alteregos.map((alterEgo: string) => (
                  <p key={alterEgo}>{alterEgo}</p>
                ))
              : "No disponible"}
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Aliases
            </p>
            {biographyProps.biography.aliases
              ? biographyProps.biography.aliases.map((aliases: string) => (
                  <p key={aliases}>{aliases}</p>
                ))
              : "No disponible"}
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Lugar de nacimiento
            </p>
            <p>
              {biographyProps.biography.placeOfBirth
                ? biographyProps.biography.placeOfBirth
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Primera aparición
            </p>
            <p>
              {biographyProps.biography.firstAppearance
                ? biographyProps.biography.firstAppearance
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Editorial
            </p>
            <p>
              {biographyProps.biography.publisher
                ? biographyProps.biography.publisher
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Alineamiento
            </p>
            <p>
              {biographyProps.biography.alignment
                ? biographyProps.biography.alignment
                : "No disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
