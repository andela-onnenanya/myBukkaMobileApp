import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icono from "react-native-vector-icons/Entypo";
import propTypes from "prop-types";

const SidebarMenu = ({ onClick, iconname, menuname, logout, other }) => (
  <TouchableOpacity
    style={[
      { flexDirection: "row" },
      logout ? { alignItems: "center" } : { alignItems: "flex-end" }
    ]}
    onPress={onClick}
  >
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      {logout ? (
        <Icono name={iconname} size={24} color={colors.a} />
      ) : (
        <Icon name={iconname} size={22} color={other ? colors.a : colors.b} />
      )}
    </View>
    <Text
      style={{
        color: "black",
        fontFamily: "Comfortaa-Bold",
        fontSize: 15
      }}
    >
      {menuname}
    </Text>
  </TouchableOpacity>
);

SidebarMenu.propTypes = {
  onClick: propTypes.func.isRequired,
  iconname: propTypes.string.isRequired,
  menuname: propTypes.string.isRequired
};

export default SidebarMenu;
