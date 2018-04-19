import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import propTypes from "prop-types";
import Img from "../Images";
import Icon from "react-native-vector-icons/MaterialIcons";
import { hologram } from "../../assets/images/card/cardImages";

export default class CardFlipSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "XXXX-XXXX-XXXX-XXXX",
      cardHolder: "XXXX XXXX",
      expires: "XX/XX",
      CVC: "XXX"
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.props = nextProps;
    }
  }
  render() {
    const { cardNumber, cardHolder, expires, CVC } = this.props;
    return (
      <View
        style={[
          {
            padding: 20,
            backgroundColor: "#465361",
            margin: 17,
            borderRadius: 5,
            shadowColor: "#000000",
            shadowRadius: 5,
            shadowOpacity: 0.2,
            shadowOffset: {
              width: 0,
              height: 15
            }
          },
          { ...this.props.style }
        ]}
      >
        <View
          style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <View
            style={{
              flex: 1,
              height: 40,
              backgroundColor: "black",
              marginLeft: -17,
              marginRight: -17
            }}
          />
        </View>
        <View
          style={{
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <View style={{ flex: 1, height: 40, backgroundColor: "white" }}>
            <View style={{ backgroundColor: "rgba(255,255,0,.2)", flex: 1 }} />
            <View style={{ backgroundColor: "rgba(128,0,128,.1)", flex: 1 }} />
            <View style={{ backgroundColor: "rgba(255,255,0,.2)", flex: 1 }} />
            <View style={{ backgroundColor: "rgba(128,0,128,.1)", flex: 1 }} />
            <View style={{ backgroundColor: "rgba(255,255,0,.2)", flex: 1 }} />
            <View style={{ backgroundColor: "rgba(128,0,128,.1)", flex: 1 }} />
          </View>
          <View
            style={{
              width: 50,
              height: 35,
              backgroundColor: "white",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "rgba(0,0,0,.8)",
                fontSize: 14,
                fontWeight: "bold",
                alignSelf: "center"
              }}
            >
              {CVC || this.state.CVC}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View>
            <Img style={{ width: 55.17, height: 42 }} source={hologram} />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              minWidth: 100,
              paddingRight: 20
            }}
          >
            <View>
              <Text
                style={{
                  color: "rgba(255,255,255,0)",
                  fontSize: 8,
                  marginBottom: 5,
                  letterSpacing: 2
                }}
              >
                EXPIRES
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0)",
                  fontSize: 14,
                  fontWeight: "bold"
                }}
              >
                {expires || this.state.expires}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "rgba(255,255,255,0)",
                  fontSize: 8,
                  marginBottom: 5,
                  letterSpacing: 2
                }}
              >
                CVC
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0)",
                  fontSize: 14,
                  fontWeight: "bold"
                }}
              >
                {CVC || this.state.CVC}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

CardFlipSide.propTypes = {
  cardNumber: propTypes.string,
  cardHolder: propTypes.string,
  expires: propTypes.string,
  CVC: propTypes.string,
  style: propTypes.object
};
