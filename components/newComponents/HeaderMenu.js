import React from "react";
import { View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/style";
import propTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";

const HeaderMenu = ({ searchEvnt, menuEvnt, ismenu, show }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={searchEvnt} style={{ marginRight: 10 }}>
      <Icon name="search" size={25} color={ismenu ? "transparent" : colors.c} />
    </TouchableOpacity>

    <TouchableOpacity onPress={menuEvnt} style={{ marginRight: 10 }}>
      <Icon
        name="format-list-bulleted"
        size={25}
        color={ismenu && show ? "transparent" : colors.c}
        onPress={menuEvnt}
      />
    </TouchableOpacity>
  </View>
);

HeaderMenu.propTypes = {
  searchEvnt: propTypes.func.isRequired,
  menuEvnt: propTypes.func.isRequired
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    minWidth: 60
  }
};

export default HeaderMenu;
