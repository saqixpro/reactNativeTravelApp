import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";
import { styles } from "../styles/styles";

export default function SmallButton({ icon, text, onPress, style, color }) {
  if (icon) {
    return (
      <>
        <TouchableOpacity onPress={onPress} style={[styles.smallButton, style]}>
          <AntDesign
            style={{ color, textAlign: "right" }}
            name={icon}
            size={24}
          />
        </TouchableOpacity>
      </>
    );
  } else if (text) {
    return (
      <>
        <TouchableOpacity onPress={onPress} style={[styles.smallButton, style]}>
          <Text style={{ color: "white", fontSize: 26 }}>{text}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
