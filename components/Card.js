import React, { Component } from "react";
import { View, Text } from "react-native";
import propTypes from "prop-types";
import Img from "./Images";
import lib from "../lib/lib";
import rsc from "../lib/resources";
import Dimensions from "Dimensions";

export default class CardComponent extends Component {
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
    const wit = Dimensions.get("window").width;
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
        />
        <View
          style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <View>
            <Text
              style={{
                color: "rgba(255,255,255,.8)",
                fontSize: 8,
                marginBottom: 5,
                letterSpacing: 2
              }}
            >
              CARD NUMBER
            </Text>
            <Text
              style={[
                {
                  color: "rgba(255,255,255,.8)",
                  fontSize: 14,
                  fontWeight: "bold"
                },
                wit <= 320 ? { fontSize: 12 } : { fontSize: 14 }
              ]}
            >
              {cardNumber || this.state.cardNumber}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Img
              style={{ width: 55.17, height: 40 }}
              source={{ uri: rsc.cardicon }}
            />
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
            <Text
              style={{
                color: "rgba(255,255,255,.8)",
                fontSize: 8,
                marginBottom: 5,
                letterSpacing: 2
              }}
            >
              CARD HOLDER
            </Text>
            <Text
              style={[
                {
                  color: "rgba(255,255,255,.8)",
                  fontWeight: "bold"
                },
                wit <= 320 ? { fontSize: 12 } : { fontSize: 14 }
              ]}
            >
              {cardHolder || this.state.cardHolder}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              minWidth: 100,
              paddingRight: 20
            }}
          >
            <View>
              <Text
                style={{
                  color: "rgba(255,255,255,.8)",
                  fontSize: 8,
                  marginBottom: 5,
                  letterSpacing: 2
                }}
              >
                EXPIRES
              </Text>
              <Text
                style={[
                  {
                    color: "rgba(255,255,255,.8)",
                    fontSize: 14,
                    fontWeight: "bold"
                  },
                  wit <= 320 ? { fontSize: 12 } : { fontSize: 14 }
                ]}
              >
                {expires || this.state.expires}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

CardComponent.propTypes = {
  cardNumber: propTypes.string,
  cardHolder: propTypes.string,
  expires: propTypes.string,
  CVC: propTypes.string,
  style: propTypes.object
};
