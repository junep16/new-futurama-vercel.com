export interface Character {
    name: {
        first: string, 
        middle: string, 
        last: string
    },
    images: [
        {main: string}
    ],
    gender: string, 
    species: string, 
    homePlanet: string, 
    occupation: string, 
    sayings: Array<string>, 
    id: number, 
    age: string,
  }