import React, { Component } from "react";
import { View, Text } from "react-native";
import propTypes from "prop-types";
import Button from "./Button";
import lib from "../lib/lib";
import Card from "./Card";
import CheckBox from "react-native-check-box";
import ColorCard from "./ColorCard";

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accept: false,
      btn: "Pay"
    };
    this.pay = this.pay.bind(this);
  }

  pay() {
    if (!this.state.accept) {
      alert("You must accept our terms and conditions to proceed");
    } else if (!this.props.screenProps.user.lastCardDigits) {
      this.props.navigation.navigate("addcard");
    } else {
      lib.amountofitems()
        ? this.setState(
            { btn: "Checking Your Balance" },
            lib.checkBalance(
              parseInt(this.props.screenProps.cart.total, 10),
              this.props.navigation.goBack
            )
          )
        : alert("Sorry! There are no items in cart");
      //this.props.navigation.navigate('')
    }
  }

  render() {
    const {
      orderstatus_fetching,
      orderstatus_fetched
    } = this.props.screenProps.user;
    const { btn } = this.state;
    return (
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: "white",
          position: "relative"
        }}
      >
        <View style={{ flex: 1.5, position: "relative", paddingTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Card style={{ margin: 0, height: "90%", width: "85%" }} />
            <ColorCard />
          </View>
          <View style={{ flex: 0.6 }} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20
          }}
        >
          <Text style={{ color: "rgba(0,0,0,.2)" }}>-OR-</Text>
          <Button
            text="Add A New Card"
            textColor={[{ color: "#000" }]}
            event={() => this.props.navigation.navigate("addcard")}
            button={[
              {
                backgroundColor: "#F2F2F2",
                width: 135,
                height: 27,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                shadowColor: "#000000",
                shadowRadius: 5,
                shadowOpacity: 0.5,
                shadowOffset: {
                  width: 0,
                  height: 1
                }
              }
            ]}
          />
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <CheckBox
              style={{ borderColor: "#C4D1DC", flex: 1 }}
              onClick={() => this.setState({ accept: !this.state.accept })}
              isChecked={this.state.accept}
              rightText="I accept the Terms and Conditions and have read the Privacy Policy"
              checkBoxColor="#74D12D"
              rightTextStyle={{ color: "#E0E0E0", fontSize: 8 }}
            />
          </View>

          <Button
            text={
              orderstatus_fetching
                ? "Contacting Chef"
                : orderstatus_fetched
                  ? "Pay"
                  : btn
            }
            textColor={[{ color: "#fff" }]}
            event={this.pay}
            button={[
              {
                backgroundColor: "#5CBC5C",
                padding: 10,
                height: 35,
                minWidth: 80,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                shadowColor: "#000000",
                shadowRadius: 5,
                shadowOpacity: 0.5,
                shadowOffset: {
                  width: 0,
                  height: 1
                }
              }
            ]}
          />
        </View>
        {orderstatus_fetched ? (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#5CBC5C",
              opacity: 0.5,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa-Bold",
                  margin: 15,
                  fontSize: 18,
                  color: "white",
                  opacity: 1,
                  zIndex: 2
                }}
              >
                Your Order is on the way!
              </Text>
              <Button
                text="Continue Shopping"
                textColor={[{ color: "#5CBC5C", fontFamily: "Comfortaa-Bold" }]}
                event={() => this.props.navigation.navigate("shop")}
                button={[
                  {
                    backgroundColor: "#F2F2F2",
                    height: 27,
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    shadowColor: "#000000",
                    shadowRadius: 5,
                    shadowOpacity: 0.5,
                    shadowOffset: {
                      width: 0,
                      height: 1
                    },
                    zIndex: 2,
                    paddingLeft: 10,
                    paddingRight: 10,
                    opacity: 1
                  }
                ]}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

export default Pay;

Pay.propTypes = {
  screenProps: propTypes.object.isRequired
};
