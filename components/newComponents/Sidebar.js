import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";
import SidebarMenu from "./SidebarMenu";
import propTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import HeaderMenu from "./HeaderMenu";
import Dimensions from "Dimensions";

const wit = Dimensions.get("window").width;

const Sidebar = ({
  imageUrl,
  name,
  homeEvt,
  profileEvnt,
  paymentEvnt,
  orderHistoryEvnt,
  helpEvnt,
  logOutEvnt,
  menuEvnt,
  switche,
  counter
}) => (
  <Animatable.View
    style={{
      flex: 1,
      flexDirection: "row",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 2
    }}
    animation={switche ? "fadeInRightBig" : counter ? "fadeInLeftBig" : ""}
    ease={""}
  >
    <TouchableOpacity
      style={{ flex: 1, paddingTop: 29, zIndex: 2 }}
      onPress={menuEvnt}
    >
      <Animatable.View
        style={[
          {
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "flex-start",
            paddingLeft: 10,
            paddingRight: 10,
            zIndex: 2
          }
        ]}
        animation="fadeIn"
        ease={""}
      >
        <HeaderMenu
          searchEvnt={() => console.log("Hey!")}
          menuEvnt={menuEvnt}
          ismenu={true}
          show={!switche}
        />
      </Animatable.View>
    </TouchableOpacity>
    <View style={{ flex: 3, zIndex: 2 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.a,
          position: "relative",
          zIndex: 2,
          justifyContent: "center",
          paddingLeft: 20
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: "Comfortaa-Regular",
              fontSize: 15
            }}
          >
            Welcome
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: "Comfortaa-Bold",
              fontSize: 17,
              maxWidth: "55%"
            }}
            numberOfLines={1}
          >
            {name},
          </Text>
        </View>
        <View
          style={[
            {
              width: 100,
              height: 100,
              position: "absolute",
              bottom: -50,
              right: 25,
              backgroundColor: "white",
              zIndex: 2,
              borderRadius: 50,
              backgroundColor: "rgba(0,0,0,.1)",
              borderColor: "white",
              borderWidth: 2
            },
            wit <= 320
              ? {
                  width: 80,
                  height: 80,
                  borderRadius: 40
                }
              : {}
          ]}
        >
          <Image
            source={{ uri: imageUrl }}
            style={[
              {
                width: 98,
                height: 98,
                borderRadius: 49
              },
              wit <= 320
                ? {
                    width: 78,
                    height: 78,
                    borderRadius: 39
                  }
                : {}
            ]}
          />
        </View>
      </View>
      <View
        style={{ flex: 4, paddingTop: 50, zIndex: 1, backgroundColor: "white" }}
      >
        <View style={{ flex: 2, justifyContent: "space-between", zIndex: 2 }}>
          <SidebarMenu
            onClick={homeEvt}
            iconname={"home"}
            menuname={"Home"}
            other={true}
          />
          <SidebarMenu
            onClick={profileEvnt}
            iconname={"person-outline"}
            menuname={"My Profile"}
            other={true}
          />
          <SidebarMenu
            onClick={paymentEvnt}
            iconname={"credit-card"}
            menuname={"Payment"}
            other={true}
          />
          <SidebarMenu
            onClick={orderHistoryEvnt}
            iconname={"query-builder"}
            menuname={"Order History"}
            other={true}
          />
          <SidebarMenu
            onClick={helpEvnt}
            iconname={"help"}
            menuname={"Help"}
            other={true}
          />
        </View>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
          <View
            style={{
              flex: 1,
              borderColor: "rgba(0,0,0,.2)",
              borderTopWidth: 1
            }}
          >
            <View style={{ marginLeft: -10, marginTop: 20 }}>
              <SidebarMenu
                onClick={logOutEvnt}
                iconname={"arrow-bold-left"}
                menuname={"Logout"}
                logout={true}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  </Animatable.View>
);

export default Sidebar;

Sidebar.propTypes = {
  imageUrl: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  homeEvt: propTypes.func.isRequired,
  profileEvnt: propTypes.func.isRequired,
  paymentEvnt: propTypes.func.isRequired,
  orderHistoryEvnt: propTypes.func.isRequired,
  helpEvnt: propTypes.func.isRequired,
  logOutEvnt: propTypes.func.isRequired,
  menuEvnt: propTypes.func.isRequired
};
