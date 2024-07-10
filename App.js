import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const handlPress = () => console.log("Text pressed");

  // console.log(Dimensions.get("screen"));
  console.log(useDeviceOrientation());

  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "50%", height: 70 }}
      ></View>
      {/* <Text numberOfLines={1} onPress={handlPress}>
        Hello World!
      </Text>
      <Button
        title="Alert Button"
        onPress={() =>
          Alert.alert("My title", "My message", [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
            },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
      />
      <Button
        title="Prompt Button"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/seed/picsum/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: Platform.OS === "android" ? StatusBar.curentHeight : 0,
  },
});
