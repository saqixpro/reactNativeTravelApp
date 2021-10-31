# React Native Travel App by Dope Programming

<p float="left">
<img src="https://i.ibb.co/DpM6jK3/Screenshot-2021-11-01-at-2-32-16-AM.png" alt="alt text" width="200">
<img src="https://i.ibb.co/2S6t0Sq/Screenshot-2021-11-01-at-2-32-22-AM.png" alt="alt text" width="200">
<img src="https://i.ibb.co/Gvnwq58/Screenshot-2021-11-01-at-2-32-29-AM.png" alt="alt text" width="200">
</p>

## Full Tutorial for this project is available

Part 1
https://www.youtube.com/watch?v=lALR7S0zQ3A

Part 2
https://www.youtube.com/watch?v=G63VQ9jX5z4

Part 3
https://www.youtube.com/watch?v=Mc6xpbSmLzU

Part 4
https://www.youtube.com/watch?v=YewA7CeSeCA

Checkout Dope Programming Youtube Channel for More Interesting Tutorials about React Native and Other JavaScript Frameworks 😎

Some Important Changes Were Done After the Tutorial

> 1. Upgraded the project from expo sdk 37 to expo sdk 43 for supporting iOS 15 and onwards.
> 2. Upgraded React Navigation from v5.x to v6.x.
> 3. Unlocked all four categories on the home screen
> 4. Fixed the slider on details screen

#### For Supporting React Navigation v6.x I changed the following source code

> App.js

React Navigation v6.x has a new Native Stack module that replaces the Stack Navigator, In order to add it to the project i've made the following changes

### Before

```javascript
...
import { createStackNavigator } from "@react-navigation/stack";
...
const { Navigation, Screen } = createStackNavigator();
...
```

### After

```javascript
...
import { createNativeStackNavigator } from "@react-navigation/native-stack";
...
const { Navigation, Screen } = createNativeStackNavigator();
...
```

## Unlocked All Categories on Home Screen

> mainScreen.js

Previosuly (in the tutorial also) it was only one category working for the demo, now all the categories have been unlocked, I've made the following changes in the code to achieve it

### Before

```javascript
...
<ImageButton title="Luxury" description="Stunning Places" />
...
```

### After

I create method in the component which is call with the OnPress event of the ImageButton component, the method carries image, title and slogan onto the next screen which is then displayed on that screen.

```javascript
...
navigateTo = (image, title, slogan) => {
    this.props.navigation.navigate("Luxury", {image, title, slogan});
}

...
 <ImageButton
    onPress={() =>
        this.toCategory(require("../assets/images/1.jpg"),"Luxury","Stunning Places")}
        title="Luxury"
        description="Stunning Places"
        />
...
```

> luxury.js

The data is received in the route params of the navigation and in order to handle it within this component i've made the following adjustments.

### Before

```javascript
...
<ImageBackground
            source={require("../assets/images/1.jpg")}
            style={styles.backgroundImage}
          >
            <View style={styles.textView}>
              <Text style={styles.title}>
                Luxury
              </Text>
              <Text style={styles.description}>
                Stunning Places
              </Text>
            </View>
          </ImageBackground>
...
```

### After

The data we sent earlier is can be used in the following way
See <a href="https://reactnavigation.org/docs/params">React Navigation Official Guide for Passing Routes</a> for more info

```javascript
    ...
    <ImageBackground
            source={this.props.route.params.image}
            style={styles.backgroundImage}
          >
            <View style={styles.textView}>
              <Text style={styles.title}>
                {this.props.route?.params?.title}
              </Text>
              <Text style={styles.description}>
                {this.props.route?.params.slogan}
              </Text>
            </View>
          </ImageBackground>
    ...
```

## Fixed the slider on details screen

The slider was not working as expected so it was corrected to work smooth and fast. To achieve that the following changes were made

> styles/styles.js

The style for the carousel card item was modified to make it fit the screen width

### Before

```javascript
    export const styles = StyleSheet.create({
        ...
        carouselCard: {
        marginHorizontal: 10,
        width: width - width / 5,
        height: height / 3,
    },
        ...
    })
```

### After

```javascript
    export const styles = StyleSheet.create({
        ...
        carouselCard: {
        width: width,
        height: height / 3,
    },
        ...
    })
```

> screens/details.js

### Before

```javascript
    ...
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={300}
        contentOffset={{ x: 300 }}
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
    ...
```

### After

```javascript
    ...
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
    ...
```

That's all ;)
