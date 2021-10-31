import React, { Component } from "react";
import {
  View,
  Animated,
  ImageBackground,
  Dimensions,
  Easing,
  Text,
} from "react-native";
import SmallButton from "../components/smallButton";
import { styles } from "../styles/details";
import { ScrollView } from "react-native-gesture-handler";
import CarouselCard from "../components/carouselCard";

const { width, height } = Dimensions.get("screen");

export default class Details extends Component {
  state = {
    data: {},
    liked: false,
    alignment: new Animated.Value(height),
  };

  setInitialState = () => this.setState({ data: this.props.route.params.card });

  animateAlignment = () =>
    Animated.timing(this.state.alignment, {
      toValue: height / 1.7,
      duration: 800,
      easing: Easing.back(),
      useNativeDriver: false,
    }).start();

  initializeTheUI = async () => {
    await this.setInitialState();
    this.animateAlignment();
  };

  componentDidMount() {
    this.initializeTheUI();
  }

  render() {
    const AnimatedBackground = {
      height: this.state.alignment,
    };
    return (
      <View>
        <Animated.View style={AnimatedBackground}>
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
            }}
            source={
              this.state.data.image
                ? this.state.data.image
                : require("../assets/images/1.jpg")
            }
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 80 }}>
                <View
                  style={{
                    flex: 0.9,
                    justifyContent: "flex-start",
                    marginLeft: 20,
                  }}
                >
                  <SmallButton
                    text="x"
                    onPress={() => this.props.navigation.navigate("Luxury")}
                  />
                </View>
                <View
                  style={{
                    flex: 0.2,
                    justifyContent: "flex-end",
                  }}
                >
                  <SmallButton
                    icon={this.state.liked ? "heart" : "hearto"}
                    color={this.state.liked ? "red" : "white"}
                    onPress={() => this.setState({ liked: !this.state.liked })}
                  />
                </View>
              </View>
              <View style={styles.textView}>
                <Text style={styles.title}>{this.state.data.title}</Text>
                <Text style={styles.location}>{this.state.data.location}</Text>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
        <View style={styles.carousel}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={300}
            pagingEnabled={true}
          >
            <CarouselCard
              header="Reservation Information"
              data={this.state.data.paymentInfo}
            />
            <CarouselCard
              header="Description"
              data={this.state.data.detailedDescription}
            />
            <CarouselCard
              header="Information"
              data={this.state.data.information}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
