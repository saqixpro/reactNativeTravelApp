import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

export default function CarouselCard({ header, data, onPress }) {
  return (
    <>
      <View style={styles.carouselCard}>
        <View style={styles.carouselHeader}>
          <Text style={styles.carouselHeaderText}>{header}</Text>
          <View style={styles.carouselHeaderIndicator}></View>
        </View>
        <View style={styles.carouselBody}>
          <Text style={styles.carouselData}>{data}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 10,
            left: 0,
            width: "100%",
          }}
        >
          <TouchableOpacity style={styles.carouselButton}>
            <LinearGradient
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
              colors={["#FA0", "#A50"]}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Book Now!</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
