import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import { styles } from "../styles/styles";
import Input from "../components/Input";
import ImageButton from "../components/ImageButton";
import Animated, { Easing } from "react-native-reanimated";

const { height } = Dimensions.get("screen");

export default class MainScreen extends Component {
  state = {
    alignment: new Animated.Value(height),
  };

  componentDidMount() {
    this.AnimateHeader();
  }

  AnimateHeader = () => {
    Animated.timing(this.state.alignment, {
      toValue: 200,
      duration: 700,
      easing: Easing.back(),
      useNativeDriver: true,
    }).start();
  };

  toCategory = (image, title, slogan) => {
    this.props.navigation.navigate("Luxury", {
      image,
      title,
      slogan,
    });
  };

  render() {
    const AnimatedHeader = {
      height: this.state.alignment,
    };

    return (
      <View>
        <Animated.View style={[styles.header, AnimatedHeader]}>
          <View style={{ flex: 0.6, paddingTop: 20 }}>
            <Text style={styles.headerText}>Find Your Next trip!</Text>
          </View>
          <View style={{ flex: 0.35, paddingTop: 20, alignItems: "flex-end" }}>
            <Image
              source={require("../assets/images/img.jpg")}
              style={styles.headerImage}
            />
          </View>
        </Animated.View>
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Input placeholder="Search" />
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/1.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory(
                    require("../assets/images/1.jpg"),
                    "Luxury",
                    "Stunning Places"
                  )
                }
                title="Luxury"
                description="Stunning Places"
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/2.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory(
                    require("../assets/images/2.jpg"),
                    "Family",
                    "Love Everywhere"
                  )
                }
                title="Family"
                description="Love Everywhere"
              />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/3.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory(
                    require("../assets/images/3.jpg"),
                    "Backpacking",
                    "Enjoy Every Moment"
                  )
                }
                title="Backpacking"
                description="Enjoy Every Moment"
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/4.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory(
                    require("../assets/images/4.jpg"),
                    "Trending",
                    "Just Go Now"
                  )
                }
                title="Trending"
                description="Just Go Now"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
