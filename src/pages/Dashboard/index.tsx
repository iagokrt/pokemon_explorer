import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Title, Form, Pokemons } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="GitHub _Explorer" />
      <Title>Explore for pokemons on PokeApi World!</Title>

      <Form action="">
        <input placeholder="Digite aqui o nome de seus pokemons favoritos" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Pokemons>
        <a href="test">
          <img src="https://avatars2.githubusercontent.com/u/39284755?s=460&u=2a36b0d922e814e7960338ee8cf2b930b84f3209&v=4" alt="iagokrt"/>
          <div>
            <strong>pikachu</strong>
            <p>small description</p>
            <p>male or female tags</p>
            <p>poke Type tag</p>
          </div>

          <FiChevronRight size={20} color="#000"/>
        </a>

        <a href="test">
          <img src="https://avatars2.githubusercontent.com/u/39284755?s=460&u=2a36b0d922e814e7960338ee8cf2b930b84f3209&v=4" alt="iagokrt"/>
          <div>
            <strong>pikachu</strong>
            <p>small description</p>
            <p>male or female tags</p>
            <p>poke Type tag</p>
          </div>

          <FiChevronRight size={20} color="#000"/>
        </a>

        <a href="test">
          <img src="https://avatars2.githubusercontent.com/u/39284755?s=460&u=2a36b0d922e814e7960338ee8cf2b930b84f3209&v=4" alt="iagokrt"/>
          <div>
            <strong>pikachu</strong>
            <p>small description</p>
            <p>male or female tags</p>
            <p>poke Type tag</p>
          </div>

          <FiChevronRight size={20} color="#000"/>
        </a>

      </Pokemons>
    </>
  )
};

export default Dashboard;
