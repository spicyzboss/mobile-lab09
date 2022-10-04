import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import CategoryMealsScreen from "./src/screens/CategoryMealsScreen";
import MealDetailScreen from "./src/screens/MealDetailScreen";

const MealsNavigator = createNativeStackNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        }}
        initialRouteName="Categories"
      >
        <MealsNavigator.Screen
          name="Categories"
          component={CategoriesScreen}
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
    </NavigationContainer>
  );
}
