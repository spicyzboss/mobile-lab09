import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderGridItem: ListRenderItem<Category> = (
    itemData: ListRenderItemInfo<Category>
  ) => (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        navigation.push("CategoryMeals", {
          categoryId: itemData.item.id,
          categoryTitle: itemData.item.title,
        });
      }}
    />
  );

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default CategoriesScreen;
