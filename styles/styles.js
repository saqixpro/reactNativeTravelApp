import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 45,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: width / 1.1,
    padding: 8,
    marginTop: 10,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
  },

  input: {
    color: "#000",
    marginLeft: 40,
    padding: 10,
  },

  imageContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  imageView: {
    width: width / 2.4,
    height: height / 3.5,
    marginHorizontal: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  imageButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "30%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginVertical: 3,
    color: "white",
    textAlign: "center",
  },

  card: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.1,
    marginHorizontal: 20,
    borderRadius: 20,

    height: height / 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },

  cardLocation: {
    fontSize: 11.5,
    color: "#777",
    marginLeft: 10,
  },

  cardDescription: {
    fontSize: 12,
    marginVertical: 8,
    marginLeft: 10,
  },

  cardImage: {
    flex: 0.3,
  },

  smallButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselCard: {
    width: width,
    height: height / 3,
  },
  carouselHeader: {
    alignItems: "center",
  },
  carouselHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  carouselHeaderIndicator: {
    marginVertical: 10,
    backgroundColor: "#A50",
    width: 70,
    height: 5,
    borderRadius: 50,
  },
  carouselBody: {
    padding: 20,
  },
  carouselData: {
    textAlign: "justify",
    fontSize: 16,
  },
  carouselButton: {
    width: width / 1.5,
    height: 50,
  },
});
