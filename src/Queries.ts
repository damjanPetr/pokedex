import { gql } from "@apollo/client";

export const getPokemon = gql`
  query Pokemon($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      height
      weight
      base_experience
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
