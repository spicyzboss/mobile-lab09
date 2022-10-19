import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, View, StyleSheet, ListRenderItem, ListRenderItemInfo } from "react-native";
import Meal from "../models/meals";
import MealItem from "./MealItem";

type MealListProps = {
  navigation: NativeStackNavigationProp<FavStack, "Favorite">;
  meals: Meal[];
}

const MealList = ({ navigation, meals }: MealListProps) => {
  const renderMealItem: ListRenderItem<Meal> = (itemData: ListRenderItemInfo<Meal>) => {
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

  return (
    <View style={styles.list}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
