import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const MealDetailScreen = ({ route, navigation }: MealDetailScreenProps) => {
  return (
    <ScrollView>
      <Image source={{ uri: route.params.meal.imageUrl }} style={styles.img} />
      <Text style={{ fontSize: 24, textAlign: "center" }}>
        {route.params.meal.title}
      </Text>
      <View style={styles.inner}>
        {route.params.meal.steps.map((v, i) => (
          <Text style={{ fontSize: 16, marginVertical: 2 }} key={i + 1}>
            {i + 1}. {v}
          </Text>
        ))}
      </View>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.navigate("Categories");
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inner: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});

export default MealDetailScreen;
