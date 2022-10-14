import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";

const SUPERHEROS_ENDPOINT =
  "https://akabab.github.io/superhero-api/api/all.json";

type SuperHerosAttr = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string[];
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};

const useGetSuperHeros = (): UseQueryResult<Array<SuperHerosAttr>> => {
  return useQuery(["HEROS_LIST"], async () => {
    const response = await axios.get<Array<SuperHerosAttr>>(
      `${SUPERHEROS_ENDPOINT}`
    );

    return response.data;
  });
};

export { useGetSuperHeros };

export type { SuperHerosAttr };
