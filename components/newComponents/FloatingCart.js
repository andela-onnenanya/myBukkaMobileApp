import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../styles/style";
import * as Animatable from "react-native-animatable";

const FloatingCart = ({ quantity, cost, evnt }) => (
  <Animatable.View
    style={{
      //position:'absolute',
      height: 50,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.a,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }}
    animation={"fadeInUpBig"}
  >
    <View>
      <Text
        style={{ fontFamily: "Comfortaa-Bold", fontSize: 16, color: "white" }}
      >
        ₦{cost}
      </Text>
    </View>
    <TouchableOpacity onPress={evnt}>
      <Text
        style={{ fontFamily: "Comfortaa-Bold", fontSize: 20, color: "white" }}
      >
        CHECK OUT
      </Text>
    </TouchableOpacity>
    <View
      style={{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "white",
        padding: 5
      }}
    >
      <Text
        style={{ fontFamily: "Comfortaa-Bold", fontSize: 16, color: "white" }}
      >
        {quantity}
      </Text>
    </View>
  </Animatable.View>
);

export default FloatingCart;
