import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #f6d93c;

  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: none;
    border-radius: 5px 0 0 5px;

    &&::placeholder {
      color: #a8a8b3;
    }

    transition: background ease 0.6s;

    &:focus {
      background: #177bc3;
      color: #f1f1f1;
      ::placeholder {
        color: #f1f1f1;

      }
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #f13d35;
    border-radius: 0 5px 5px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.15, '#f13d35')};
    }
  }
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
