import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";

const Back = ({ navigate, color }) => {
  return (
    <View style={{ paddingTop: 10 }}>
      <View
        style={[
          {
            height: 50,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "white"
          }
        ]}
      >
        <TouchableOpacity onPress={() => navigate()}>
          <Icon
            name="keyboard-backspace"
            size={25}
            color={color ? color : colors.a}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="keyboard-arrow-down" size={25} color="transparent" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="close" size={25} color="transparent" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Back;
