import React, { Component } from "react";
import { WebView, View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";

const MyWeb = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 20, backgroundColor: "white" }} />
      <View
        style={[
          {
            height: 50,
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 15,
            paddingRight: 15,
            flexDirection: "row",
            backgroundColor: "white"
          }
        ]}
      >
        <TouchableOpacity onPress={() => navigation.state.params.back()}>
          <Icon name="close" size={25} color={colors.a} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="keyboard-arrow-down" size={25} color="transparent" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="close" size={25} color="transparent" />
        </TouchableOpacity>
      </View>
      <WebView source={{ uri: navigation.state.params.uri }} />
    </View>
  );
};
export default MyWeb;
