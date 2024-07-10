import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlPress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlPress}>
        Hello World!
      </Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
