import { useLocation } from "react-router";

const Work = (): React.ReactElement => {
  const location = useLocation();
  const workProps = location.state as any;

  return (
    <div className="flex justify-center mobile:block mobile:justify-start">
      <div className="h-auto w-8/12 border rounded-md shadow-sm p-6 m-6 mt-4 space-x-4  mobile:w-73 mobile:p-3 mobile:ml-2 mobile:block mobile:justify-center mobile:h-72 ">
        <div className="flex justify-center">
          <h1 className="font-rounded font-bold text-4xl text-purple-600">
            Trabajo
          </h1>
        </div>
        <div className="mt-10 space-y-3 ">
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Ocupación
            </p>
            <p>
              {workProps?.work.occupation
                ? workProps?.work.occupation
                : "No disponible"}
            </p>
          </div>
          <div>
            <p className="text-xl font-rounded font-bold text-purple-400">
              Base
            </p>

            <p>
              {workProps?.work.base ? workProps?.work.base : "No disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
