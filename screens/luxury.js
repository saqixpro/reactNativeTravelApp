import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  Animated,
  Easing,
} from "react-native";
import { styles } from "../styles/luxury";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/card";

const { width, height } = Dimensions.get("screen");

export default class Luxury extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
  };

  AnimateUI = () => {
    Animated.sequence([
      Animated.timing(this.state.alignment, {
        toValue: height / 3,
        duration: 800,
        easing: Easing.back(),
      }),
      Animated.timing(this.state.cardAlignment, {
        toValue: 0,
        duration: 700,
        easing: Easing.ease,
      }),
    ]).start();
  };

  componentDidMount() {
    this.AnimateUI();
  }

  render() {
    const AnimatedBackground = {
      height: this.state.alignment,
    };

    const AnimatedCards = {
      transform: [
        {
          translateX: this.state.cardAlignment,
        },
      ],
    };

    return (
      <View>
        <Animated.View style={[{ width: width }, AnimatedBackground]}>
          <ImageBackground
            source={require("../assets/images/1.jpg")}
            style={styles.backgroundImage}
          >
            <View style={styles.textView}>
              <Text style={styles.title}>Luxury</Text>
              <Text style={styles.description}>Stunning Places</Text>
            </View>
          </ImageBackground>
        </Animated.View>
        <Animated.View style={[styles.cardView, AnimatedCards]}>
          <ScrollView>
            <Card
              title="Treasure Island"
              location="Cocoa Land - Maldives"
              description="Amongst The Many Stunning Lands in Maldives"
              image={require("../assets/images/2.jpg")}
            />
            <Card
              title="Like Heaven"
              location="Yosemite National Park - California"
              description="Excellent Place To Visit"
              image={require("../assets/images/3.jpg")}
            />
            <Card
              title="Sweet Paradise"
              location="Mamomnth Lakes - California"
              description="The Place For Photography, Calm, Meditation and To Enjoy Life!"
              image={require("../assets/images/1.jpg")}
            />
            <Card
              title="Paradise On Earth"
              location="Jammu And Kashmir - India"
              description="Exciting Views of Snow Capped Mountains, Glaciers and Greenery!"
              image={require("../assets/images/4.jpg")}
            />
          </ScrollView>
        </Animated.View>
      </View>
    );
  }
}
