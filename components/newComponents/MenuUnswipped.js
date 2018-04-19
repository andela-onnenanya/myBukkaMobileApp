import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../styles/style";
import Dimensions from "Dimensions";
import Icon from "react-native-vector-icons/MaterialIcons";
import propTypes from "prop-types";

const MenuUnswipped = ({
  quantity,
  imageUrl,
  name,
  description,
  cost,
  onClick,
  add,
  subtract,
  history
}) => (
  <TouchableOpacity
    style={[styles.cont, history ? styles.shad : null]}
    onPress={onClick}
  >
    <View style={styles.imageCont}>
      <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
    </View>
    <View
      style={[
        styles.textCont,
        history ? { paddingLeft: 20 } : { paddingLeft: 0 }
      ]}
    >
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
      <Text numberOfLines={2} style={styles.discription}>
        {description}
      </Text>
      <Text numberOfLines={1} style={styles.amount}>
        ₦{cost * quantity}
      </Text>
    </View>
    <View style={styles.buttonStyle}>
      <TouchableOpacity onPress={add}>
        <Icon
          name="add"
          size={18}
          color={history ? "white" : "rgba(0,0,0,.2)"}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.quant}>
        {quantity}
      </Text>
      <TouchableOpacity onPress={subtract}>
        <Icon
          name="remove"
          size={18}
          color={history ? "white" : "rgba(0,0,0,.2)"}
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

MenuUnswipped.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  cost: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
  add: propTypes.func.isRequired,
  subtract: propTypes.func.isRequired
};

export default MenuUnswipped;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 8 / 11 / 4,
    width: "100%",
    flexDirection: "row",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  shad: {
    height: Dimensions.get("window").height * 8 / 11 / 4,
    width: "100%",
    width:
      Dimensions.get("window").width -
      Dimensions.get("window").width * 16 / 100,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 2
    },
    elevation: 3,
    backgroundColor: "#fff"
  },
  imageCont: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  imageStyle: {
    height: Dimensions.get("window").height * 8 / 11 / 4,
    width: Dimensions.get("window").height * 8 / 11 / 4
  },
  textCont: {
    justifyContent: "space-around",
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  name: {
    fontFamily: "Comfortaa-Bold",
    fontSize: 16
  },
  discription: {
    fontFamily: "Comfortaa-Bold",
    fontSize: 12,
    color: "rgba(0,0,0,.2)"
  },
  amount: {
    fontFamily: "Comfortaa-Bold",
    fontSize: 16,
    color: colors.a
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  quant: {
    fontFamily: "Comfortaa-Bold",
    fontSize: 18
  }
});
