import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Meal from './src/models/meals';

declare global {
  type RootParamList = {
    Categories: undefined;
    CategoryMeals: { categoryId: string, categoryTitle: string };
    MealDetail: { meal: Meal };
  }

  type FavStack = {
    Favorite: undefined;
    MealDetail: { meal: Meal };
  }

  type DrawerList = {
    Filters: undefined;
    MealsFav: undefined;
  }

  type BottomTabList = {
    Meals: undefined;
    Favorites: undefined;
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

  type FavoriteScreenProps = {
    navigation: NativeStackNavigationProp<FavStack, "Favorite">;
    route: RouteProp<FavStack, "Favorite">
  }

  type MealDetailFavScreenProps = {
    navigation: NativeStackNavigationProp<FavStack, "MealDetail">;
    route: RouteProp<FavStack, "MealDetail">;
  };
}

