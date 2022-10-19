import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const MealsNavigator = createNativeStackNavigator<RootParamList>();
const FavNavigator = createNativeStackNavigator<FavStack>();
const MealsFavTabNavigator = createBottomTabNavigator<BottomTabList>();
const DrawerNavigator = createDrawerNavigator<DrawerList>();

function MyTab() {
  return (
    <MealsFavTabNavigator.Navigator initialRouteName="Meals">
      <MealsFavTabNavigator.Screen
        name="Meals"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hamburger" size={size} color={color} />
          ),
        }}
      />
      <MealsFavTabNavigator.Screen
        name="Favorites"
        component={FavStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </MealsFavTabNavigator.Navigator>
  );
}

function FavStackNavigator() {
  return (
    <FavNavigator.Navigator>
      <FavNavigator.Screen name="Favorite" component={FavoritesScreen} />
      <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </FavNavigator.Navigator>
  );
}

function MainNavigator() {
  return (
    <MealsNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
      initialRouteName="Categories"
    >
      <MealsNavigator.Screen
        name="Categories"
        component={MyTab}
        options={{ title: "Meal Categories" }}
      />
      <MealsNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }: CategoryMealsScreenProps) => ({
          title: route.params.categoryTitle,
        })}
      />
      <MealsNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }: MealDetailScreenProps) => ({
          title: route.params.meal.title,
        })}
      />
    </MealsNavigator.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen name="MealsFav" component={MainNavigator} />
        <DrawerNavigator.Screen name="Filters" component={FiltersScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
}
