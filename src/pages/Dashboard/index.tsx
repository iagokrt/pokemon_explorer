import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import PokeIcon from '../../assets/pokeball.svg';
//import Heart from '../../assets/heart.svg';
import PokeBall from '../../assets/ballInput.svg';

import { Title, ApiLink, Container, Rotate, Form, Pokemons, Footer, Credits } from './styles';

interface PokeRequest {
  name: string;
  sprites: { front_default: string, front_female: string },
  //gender: { id: number, name: string },
  //nature: {id: number, name: string } // todo add nature.hates_flavor and nature.likes_flavor
  // todo types.
  // todo species.
  //types: []
}


const Dashboard: React.FC = () => {
  const [newPoke, setNewPoke] = useState('');
  const [pokemons, setPokemons] = useState<PokeRequest[]>([]);

  async function handleAddPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<PokeRequest>(`/pokemon/${newPoke}`);

    const pokemon = response.data;

    setPokemons([...pokemons, pokemon]);
    setNewPoke('');
  }

  return (
    <>
      <ApiLink>This App is consuming: https://pokeapi.co/ </ApiLink>

      <Title>Explore for <span id="pokestyle">pokemons</span> on Poke<span id="apistyle">Api</span> World!</Title>
      <span><i><b>Procure</b> pokemons usando a PokeBola</i></span> <br /><br />
      <span><i><b>Clique</b> no botão GOTCHA!</i></span>


      <Form onSubmit={handleAddPokemon}>
        <Container>
            <Rotate><img id="pokeballFinder" src={PokeBall} alt="type pokemon name" /></Rotate>
          <input
          value={newPoke}
          onChange={(e) => setNewPoke(e.target.value)}
          placeholder="find pokemons!" />
        </Container>
        <button type="submit">
            <img id="poke-logo" src={PokeIcon} alt="pokemon _Explorer" />
        </button>
      </Form>

      <Pokemons>
      {pokemons.map(pokemon => (
            <a key={pokemon.name} href="test">
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <div>
              <strong>{pokemon.name}</strong>
              <p>{pokemon.name}</p>
            </div>

            <FiChevronRight size={20} color="#000"/>
          </a>
        ))}
      </Pokemons>

      <Footer>
        <span>Credits:</span>
        <br />
        <Credits>
        Ícones feitos por <a href="https://www.flaticon.com/br/autores/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
        </Credits>
        <Credits>
        API utilizada: PokeApi <a href="https://pokeapi.co/docs/v2.html/">check out the docs!</a>
        </Credits>
        <Credits>
        Design and Code: iago Carneiro <a href="https://github.com/iagokrt">check out my GitHub!</a>
        </Credits>
      </Footer>
    </>
  )
};

export default Dashboard;
