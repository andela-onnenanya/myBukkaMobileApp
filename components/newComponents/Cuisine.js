import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../../styles/style";
import * as cuisineImages from "../../assets/images/cuisines/cuisineImages";
import lib from "../../lib/lib";
import propTypes from "prop-types";
import Dimensions from "Dimensions";

const Cuisine = ({ cui, evnt, number, active }) => (
  <TouchableOpacity style={styles.container} onPress={evnt}>
    <Image
      source={cuisineImages[lib.lowercaseAndJoin(cui)]}
      style={styles.imageStyle}
    />
    <Text
      numberOfLines={1}
      style={[
        styles.name,
        number === active ? { color: colors.a } : { color: "black" }
      ]}
    >
      {lib.format(cui)}
    </Text>
  </TouchableOpacity>
);

Cuisine.propTypes = {
  cui: propTypes.string.isRequired,
  evnt: propTypes.func.isRequired
};

export default Cuisine;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: Dimensions.get("window").height / 11,
    width: Dimensions.get("window").width / 3.8,
    marginLeft: 10,
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3
  },
  imageStyle: {
    height: 25,
    width: 25
  },
  name: {
    marginTop: 5,
    fontFamily: "Comfortaa-Regular",
    fontSize: 10
  }
});
