import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";

const SUPERHERO_ENDPOINT = "https://akabab.github.io/superhero-api/api/id/";

type SuperHeroAttr = {
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

const useGetSuperHero = (id: number): UseQueryResult<SuperHeroAttr> => {
  return useQuery(["HERO_DETAIL", id], async () => {
    const response = await axios.get<SuperHeroAttr>(
      `${SUPERHERO_ENDPOINT}${id}.json`
    );

    return response.data;
  });
};

export { useGetSuperHero };

export type { SuperHeroAttr };
