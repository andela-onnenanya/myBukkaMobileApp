import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../styles/style";
import lib from "../../lib/lib";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import propTypes from "prop-types";
import UserIcon from "react-native-vector-icons/Entypo";

const Markers = ({ user, restaurant, style }) =>
  user ? (
    <View style={[styles.container, { ...style }]}>
      <UserIcon name={"location-pin"} size={25} color={colors.a} />
    </View>
  ) : (
    <View>
      <Text style={styles.moreInfo}>{restaurant}</Text>
      <View style={styles.containerb}>
        <Icon name={"circle"} size={10} color={"rgb(246, 147, 35)"} />
      </View>
    </View>
  );

export default Markers;

Markers.propTypes = {
  restaurant: propTypes.string,
  user: propTypes.bool
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 10
    },
    elevation: 3
  },
  containerb: {
    borderColor: colors.b,
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 6
  },
  moreInfo: {
    fontFamily: "Comfortaa-Regular",
    fontSize: 8
  }
});
