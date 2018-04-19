import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Card from "../Card";
import CardDetail from "./CardDetail";
import lib from "../../lib/lib";
import Button from "../Button";
import { colors } from "../../styles/style";
import CardFlipSide from "./CardFlipSide";
import * as Animatable from "react-native-animatable";

class CardSetUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: null,
      cardHolder: null,
      expires: null,
      CVC: null,
      isCardNumber: true,
      isCardHolder: false,
      isExpires: false,
      isCVC: false,
      otp: null
    };
    this.cardNumberFocus = this.cardNumberFocus.bind(this);
    this.cardHolderFocus = this.cardHolderFocus.bind(this);
    this.expiresFocus = this.expiresFocus.bind(this);
    this.cvcFocus = this.cvcFocus.bind(this);
    this.myButton = this.myButton.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  cardNumberFocus() {
    this.setState({
      isCardNumber: true,
      isCardHolder: false,
      isExpires: false,
      isCVC: false
    });
  }

  cardHolderFocus() {
    this.setState({
      isCardNumber: false,
      isCardHolder: true,
      isExpires: false,
      isCVC: false
    });
  }

  expiresFocus() {
    this.setState({
      isCardNumber: false,
      isCardHolder: false,
      isExpires: true,
      isCVC: false
    });
  }

  cvcFocus() {
    this.setState({
      isCardNumber: false,
      isCardHolder: false,
      isExpires: false,
      isCVC: true
    });
  }

  myButton(label, onPress) {
    return (
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={onPress}
      >
        <Text style={{ color: "white", fontSize: 22 }}>{label}</Text>
      </TouchableOpacity>
    );
  }
  onSave() {
    const { cardNumber, cardHolder, expires, CVC } = this.state;
    if (cardNumber === "") {
      alert("Please provide a valid card number");
    } else if (expires === "") {
      alert("Please provide a valid expiry date");
    } else if (CVC === "") {
      alert("Please provide a valid CVV");
    } else {
      let expi = [...expires],
        YY,
        MM;
      YY = expi.splice(expi.length - 2, 2).join("");
      MM = expi.join("");
      console.log(YY, MM);
      lib.addcard(cardNumber, CVC, MM, YY);
    }
  }

  render() {
    const { isCardNumber, isCardHolder, isExpires, isCVC } = this.state;
    const {
      time_to_reauthenticate,
      reauthentication,
      fetching_addcard
    } = this.props.screenProps.user;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <View style={{ minWidth: 200, minHeight: 200 }}>
            {isCVC ? (
              <Animatable.View
                animation={"flipInY"}
                easing="ease-in"
                iterationCount={1}
              >
                <CardFlipSide CVC={this.state.CVC} />
              </Animatable.View>
            ) : (
              <Animatable.View
                animation={"flipInX"}
                easing="ease-out"
                iterationCount={1}
              >
                <Card
                  cardNumber={
                    this.state.cardNumber
                      ? lib.segment(this.state.cardNumber, 4, "-")
                      : this.state.cardNumber
                  }
                  cardHolder={this.state.cardHolder}
                  expires={
                    this.state.expires
                      ? lib.segment(this.state.expires, 2, "/")
                      : this.state.expires
                  }
                  CVC={this.state.CVC}
                />
              </Animatable.View>
            )}
          </View>
        </View>
        <View style={{ flex: 1.5, justifyContent: "center" }}>
          {time_to_reauthenticate.is_time_to_reauthenticate ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CardDetail
                width={250}
                label={time_to_reauthenticate.response}
                value={this.state.otp}
                autoFocus={true}
                onFocus={() => console.log("verifying")}
                onSubmitEditing={() => console.log("verifying")}
                refe={input => (this.verifyingText = input)}
                evnt={otp => this.setState({ otp })}
                keyboardType={"phone-pad"}
              />
            </ScrollView>
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CardDetail
                width={250}
                label={"CARD NUMBER"}
                value={this.state.cardNumber}
                autoFocus={this.state.cardNumber ? false : true}
                onFocus={this.cardNumberFocus}
                onSubmitEditing={() => this.secondText.focus()}
                refe={input => (this.firstText = input)}
                evnt={cardNumber => this.setState({ cardNumber })}
                keyboardType={"phone-pad"}
              />

              <CardDetail
                width={250}
                label={"CARD HOLDER"}
                refe={input => (this.secondText = input)}
                value={this.state.cardHolder}
                onFocus={this.cardHolderFocus}
                onSubmitEditing={() => this.thirdText.focus()}
                evnt={cardHolder => this.setState({ cardHolder })}
              />

              <CardDetail
                width={100}
                label={"EXPIRES"}
                value={this.state.expires}
                refe={input => (this.thirdText = input)}
                onSubmitEditing={() => this.fourthText.focus()}
                evnt={expires => this.setState({ expires })}
                onFocus={this.expiresFocus}
                keyboardType={"phone-pad"}
              />

              <CardDetail
                width={100}
                label={"CVC"}
                value={this.state.CVC}
                refe={input => (this.fourthText = input)}
                evnt={CVC => this.setState({ CVC })}
                onFocus={this.cvcFocus}
                keyboardType={"phone-pad"}
              />
            </ScrollView>
          )}
        </View>

        {time_to_reauthenticate.is_time_to_reauthenticate ? (
          <View
            style={{
              flex: 0.7,
              flexDirection: "row",
              backgroundColor: colors.a,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {this.myButton(
              reauthentication.fetching ? "verifying" : "Send",
              () => lib.sendOtp(this.state.otp, this.props.navigation.goBack)
            )}
          </View>
        ) : isCardNumber ? (
          <View
            style={{
              flex: 0.7,
              flexDirection: "row",
              backgroundColor: colors.a,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {this.myButton("Next", () => this.secondText.focus())}
          </View>
        ) : isCardHolder ? (
          <View
            style={{
              flex: 0.7,
              flexDirection: "row",
              backgroundColor: colors.a,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {this.myButton("Back", () => this.firstText.focus())}
            {this.myButton("Next", () => this.thirdText.focus())}
          </View>
        ) : isExpires ? (
          <View
            style={{
              flex: 0.7,
              flexDirection: "row",
              backgroundColor: colors.a,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {this.myButton("Back", () => this.secondText.focus())}
            {this.myButton("Next", () => this.fourthText.focus())}
          </View>
        ) : (
          <View
            style={{
              flex: 0.7,
              flexDirection: "row",
              backgroundColor: colors.a,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {this.myButton(
              fetching_addcard
                ? "verifying.."
                : time_to_reauthenticate.fetching
                  ? "verifying.."
                  : "Done",
              () => this.onSave()
            )}
          </View>
        )}

        <View style={{ flex: 3 }} />
      </View>
    );
  }
}

export default CardSetUp;
