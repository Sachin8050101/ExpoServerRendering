"use server";

import { Text } from "react-native";

export default async function renderInfo({ name }) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const json = await res.json();
  console.log("json-->>>>>>>", json);

  return <Text>Hello, {JSON.stringify(json)}!</Text>;
}
