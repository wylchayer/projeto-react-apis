import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const useRequestListPokemonsInitial = () => {
  const [pokemonsListInitial, setPokemonsListInitial] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pokemonPerPage, setPokemonPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(150 / pokemonPerPage);

  useEffect(() => {
    getListPokemonsInitial();
  }, []);

  useEffect(() => {
    getListPokemonsInitial();
  }, [currentPage]);

  useEffect(() => {
    getListPokemonsInitial();
  }, [pokemonPerPage]);

  const getListPokemonsInitial = async () => {
    setIsLoading(true);
    try {
      const respUrls = await axios.get(
        `${BASE_URL}pokemon?limit=${pokemonPerPage}&offset=${
          currentPage * pokemonPerPage
        }`
      );
      const respPokemon = await axios.all(
        respUrls.data.results.map((url) => axios.get(url.url))
      );
      setPokemonsListInitial(respPokemon.map((pokemon) => pokemon.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return {
    pokemonsListInitial,
    isLoading,
    isError,
    setCurrentPage,
    totalPages,
    pokemonPerPage,
    setPokemonPerPage,
  };
};

export const useRequestListPokemon = (idsPokemons) => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pokemonPerPage, setPokemonPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(pokemonsList.length / pokemonPerPage);
  const startIndex = currentPage * pokemonPerPage;
  const endIndex = startIndex + pokemonPerPage;
  const pokemonsView = pokemonsList.slice(startIndex, endIndex);

  useEffect(() => {
    getListPokemons();
  }, [idsPokemons]);

  const getListPokemons = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.all(
        idsPokemons.map((idPokemon) =>
          axios.get(`${BASE_URL}pokemon/${idPokemon}`)
        )
      );
      setPokemonsList(resp.map((pokemon) => pokemon.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return {
    pokemonsView,
    isLoading,
    isError,
    setCurrentPage,
    totalPages,
    pokemonPerPage,
    setPokemonPerPage,
  };
};

export const useRequestPokemon = (idPokemon) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    axios
      .get(`${BASE_URL}pokemon/${idPokemon}`)
      .then((resp) => setPokemon(resp.data))
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error.response);
      });
  };

  return { pokemon, isLoading, isError };
};
