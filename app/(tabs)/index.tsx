import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import renderInfo from "../components";

export default function HomeScreen() {
  const [tabCount, setTabCount] = React.useState(0);
  const onPress = () => {
    setTabCount((prev) => prev + 1);
  };
  return (
    <React.Suspense
      fallback={
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      }
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {renderInfo({ name: "World" })}
        <Text>{tabCount}</Text>
        <Pressable onPress={onPress}>
          <Text>{"Increase Value "}</Text>
        </Pressable>
      </View>
    </React.Suspense>
  );
}
