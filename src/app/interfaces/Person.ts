export type PersonDescription = {
  description1: string;
  description2: string;
  description3: string;
};

type Person = {
  entity_uuid: string;
  name: string;
  descriptions: PersonDescription[];
  places_of_birth: string[];
  nat: string;
  score: number;
};

export default Person;
