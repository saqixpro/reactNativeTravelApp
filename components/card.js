import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/styles";
import { Text, Image, View } from "react-native";

export default function Card({ title, description, image, location, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cardImage}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 20 }}
              source={image}
            />
          </View>
          <View style={{ flex: 0.6, marginHorizontal: 12, overflow: "hidden" }}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardLocation}>{location}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
