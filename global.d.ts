import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Meal from './src/models/meals';

declare global {
  type RootParamList = {
    Categories: undefined;
    CategoryMeals: { categoryId: string, categoryTitle: string };
    MealDetail: { meal: Meal };
  }

  type CategoriesScreenProps = {
    navigation: NativeStackNavigationProp<RootParamList, "Categories">;
  };

  type CategoryMealsScreenProps = {
    navigation: NativeStackNavigationProp<RootParamList, "CategoryMeals">;
    route: RouteProp<RootParamList, 'CategoryMeals'>;
  };

  type MealDetailScreenProps = {
    navigation: NativeStackNavigationProp<RootParamList, "MealDetail">;
    route: RouteProp<RootParamList, "MealDetail">;
  };
}

