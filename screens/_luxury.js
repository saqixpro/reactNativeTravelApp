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
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/card";

const { width, height } = Dimensions.get("screen");

export default class Luxury extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
    cards: [
      {
        title: "Treasure Island",
        location: "Cocoa Land - Maldives",
        description: "Amongst The Many Stunning Lands in Maldives",
        image: require("../assets/images/2.jpg"),
      },
      {
        title: "Like Heaven",
        location: "Yosemite National Park - California",
        image: require("../assets/images/3.jpg"),
      },
      {
        title: "Sweet Paradise",
        description: "The Place For Photography, Calm!",
        image: require("../assets/images/1.jpg"),
      },
      {
        title: "Paradise On Earth",
        location: "Jammu And Kashmir - India",
        description: "Exciting Views of Snow Capped Mountains",
        image: require("../assets/images/4.jpg"),
      },
    ],
  };

  AnimateUI = () => {
    Animated.sequence([
      Animated.timing(this.state.alignment, {
        toValue: height / 3,
        duration: 800,
        easing: Easing.back(),
        useNativeDriver: true,
      }),
      Animated.timing(this.state.cardAlignment, {
        toValue: 0,
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  componentDidMount() {
    this.AnimateUI();
  }

  handlePress = (id) => {
    // Find The Item By ID
    const card = this.state.cards.find((item) => item.id === id);

    // Navigate To Details Screen With The Card Data

    this.props.navigation.navigate("Details", { card });
  };

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
          <FlatList
            data={this.state.cards}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                image={item.image}
                location={item.location}
                description={item.description}
                onPress={() => this.handlePress(item.id)}
              />
            )}
          />
        </Animated.View>
      </View>
    );
  }
}
