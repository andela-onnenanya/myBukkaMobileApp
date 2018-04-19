import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../styles/style";
import propTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";

const RateButton = ({ evnt, colour, rating, arrow }) => (
  <TouchableOpacity style={styles.container} onPress={evnt}>
    <Text style={[styles.rate]} numberOfLines={1}>
      {rating}
    </Text>
    <Text style={styles.textIcon}>
      <Icon name={arrow || "keyboard-arrow-right"} size={20} color={colour} />
    </Text>
  </TouchableOpacity>
);

RateButton.propTypes = {
  evnt: propTypes.func.isRequired,
  colour: propTypes.string.isRequired,
  rating: propTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.a,
    borderRadius: 20,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    width: 100,
    justifyContent: "space-between"
  },

  rate: {
    color: colors.a,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Comfortaa-Regular"
  },
  textIcon: {
    textAlign: "center",
    fontFamily: "Comfortaa-Bold",
    marginLeft: 5
  }
});

export default RateButton;
