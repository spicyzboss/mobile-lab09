import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation, route }: FavoriteScreenProps) => {
  const favMeals = MEALS.filter(v => v.id === "m1" || v.id === "m2");

  return <MealList navigation={navigation} meals={favMeals} />
};

export default FavoritesScreen;
