import styled, { keyframes } from 'styled-components';
// import { lighten } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #f6d93c;

  max-width: 450px;
  line-height: 56px;

  margin-top: 30px;
  margin-bottom: 5px;

  span#pokestyle {
    color: #d7352e;
  }

  span#apistyle {
    color: #2078f9;
  }

  img {
    width: 50px;
    margin-top: 2px;
  }
`;

// Inside container are: PokeballImage + InputPokemonAme
export const Container = styled.div`
  max-width: 530px;

  img {
    opacity: 0.8;
    z-index: -1;
    width: 75px;
  }
`;
// Create the keyframes
const rotate = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;

  position: relative;
  left: 117px;
`;

export const ApiLink = styled.h2`
  color: #f1f1f1;
  text-align: center;
  margin-bottom: 20px;
`;


interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 20px;
  max-width: 750px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border: 1px solid

  div {
    display: flex;
    align-items: center;
  }

  input {
    height: 70px;
    padding: 0 10px;
    border: 1px solid #f83f37;
    border-radius: 5px;
    opacity: 0.8;
    color: #000;

    /* settings to display entrance animatation after click on the pokeball*/
    width: 130px;
    background: none;

    &:hover {
      cursor: pointer;
      background: #f83f37;
      border: 1px solid #f1f1f1;
    }

    transition: background ease 0.6s;
    transition: width linear 1s;

    &:focus {
      width: 400px;
      opacity: 1;
      z-index: 2;
      background: #f83f37;
      color: #f1f1f1;

      ::placeholder {
        color: #f1f1f1;
      }
    }

    &&::placeholder {
      color: #000;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #ff0000;
    opacity: 0.83;
    z-index: 4;
    border-radius: 0 5px 5px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
    }

    img {
      position: absolute;
      width: 222px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ce3030;
  margin-top: 8px;
`;

export const Pokemons = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #eee;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    transition: all linear 0.2s;
    &:hover {
      background: #ddd;
      transform: scale(1.01);

      svg {
        background: #eee;
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #a8a8B3;
      }
    }

    svg {
      margin-left: auto;
      border-radius: 50%;
    }
  }
`;


export const Footer = styled.footer`
  margin-top: 200px;
  text-align: center;
`;

export const Credits = styled.p`
  font-size: 13px;
  margin-top: 5px;
`;

