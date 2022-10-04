import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meals";

const CategoryMealsScreen = ({
  navigation,
  route,
}: CategoryMealsScreenProps) => {
  const renderMealItem: ListRenderItem<Meal> = (
    itemData: ListRenderItemInfo<Meal>
  ) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.push("MealDetail", { meal: itemData.item });
        }}
      />
    );
  };

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
