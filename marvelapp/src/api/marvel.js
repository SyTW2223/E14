import axios from "axios";
import {ENV} from "../utils/constants";

export const getCharacters = () => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  const url = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a`;
  return axios.get(url);
};

export const get3RandomCharacters = () => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  let min = 1;
  let max = 99;
  let random_value = Math.random() * (max - min) + min;
  const url = `https://gateway.marvel.com/v1/public/characters?offset=${random_value}&limit=3&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a`;
  return axios.get(url);
};

export const getCharactersByName = (value) => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  const url = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a&nameStartsWith=${value}`;
  return axios.get(url);
};

export const getCharactersById = (value) => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  const url = `https://gateway.marvel.com/v1/public/characters/${value}?limit=1&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a`;
  return axios.get(url);
};

export const getComics = () => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  const url = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a`;
  return axios.get(url);
};

export const get3RandomComics = () => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  let min = 1;
  let max = 99;
  let random_value = Math.random() * (max - min) + min;
  const url = `https://gateway.marvel.com/v1/public/comics?offset=${random_value}&limit=3&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a`;
  return axios.get(url);
};

export const getComicsbyId = (value) => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  const url = `https://gateway.marvel.com/v1/public/comics/${value}?limit=1&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a`;
  return axios.get(url);
};

export const getComicsbyTitle = (value) => {
  //const url = `${API_BASE_URL}/v1/public/characters?ts=1&apikey=${ENV.MARVEL_PUBLIC_KEY}&hash=${ENV.MARVEL_HASH}`;
  const url = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=b5e1ee4e561ec0224a594912716ad175&hash=6e7943c7f421e1cdc4194b4a161ad67a&titleStartsWith=${value}`;
  return axios.get(url);
  //https://gateway.marvel.com:443/v1/public/comics?title=Marvel&apikey=b5e1ee4e561ec0224a594912716ad175
};
