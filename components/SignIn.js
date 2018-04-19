import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles, { colors } from "../styles/style";
import Inputs from "./Inputs";
import Button from "./Button";
import Img from "./Images";
import lib from "../lib/lib";
import rsc from "../lib/resources";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      switchScreen: false
    };
    this.onLogin = this.onLogin.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onLogin() {
    if (this.state.email === "") {
      alert("Email field cannot be empty");
    } else if (this.state.password === "") {
      alert("Email field cannot be empty");
    } else {
      const { email, password } = this.state;

      lib.signin(email.toLowerCase(), password);
    }
  }

  onSend() {
    if (this.state.email === "") {
      alert("Email field cannot be empty");
    } else {
      const { email } = this.state.email;
      lib.forgotPassword(email);
    }
  }

  render() {
    const { user } = this.props.screenProps;
    return (
      <View style={[styles.container, { backgroundColor: colors.a }]}>
        <View style={{ flex: 1 }} />
        <View
          style={{
            flex: 5,
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "space-around"
          }}
        >
          <Img
            source={{ uri: rsc.logo }}
            style={[{ width: 200, height: 75, marginBottom: 10 }]}
            onLoadStart={e => this.setState({ loading: true })}
            onLoad={e => this.setState({ loading: false })}
          />
          <ScrollView style={{ width: "100%" }}>
            {this.state.switchScreen ? (
              <View>
                <Inputs
                  text="Email address"
                  isPassword={false}
                  onChangeText={email => this.setState(() => ({ email }))}
                  value={this.state.email}
                />
              </View>
            ) : (
              <View>
                <Inputs
                  text="Email address"
                  isPassword={false}
                  onChangeText={email => this.setState(() => ({ email }))}
                  value={this.state.email}
                />
                <Inputs
                  text="Password"
                  isPassword={true}
                  onChangeText={password => this.setState(() => ({ password }))}
                  value={this.state.password}
                />
              </View>
            )}

            <TouchableOpacity
              onPress={() =>
                this.setState(prevState => ({
                  switchScreen: !prevState.switchScreen
                }))
              }
            >
              <Text
                style={{
                  paddingLeft: 5,
                  color: "rgba(255, 255, 255,1)",
                  textAlign: "right",
                  color: "#F69322",
                  fontFamily: "Comfortaa-Regular"
                }}
              >
                {this.state.switchScreen ? "Sign In?" : "Forgot Password?"}
              </Text>
            </TouchableOpacity>
          </ScrollView>
          {this.state.switchScreen ? (
            <Button
              text="Send"
              textColor={[{ color: colors.a, fontFamily: "Comfortaa-Bold" }]}
              event={this.onSend}
              button={[
                {
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  margin: 0,
                  shadowColor: "#000000",
                  shadowRadius: 5,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 0,
                    height: 1
                  }
                },
                styles.button__Widec,
                styles.button__Long
              ]}
            />
          ) : (
            <Button
              text={
                user.fetching && !user.isAuthenticated
                  ? "Please wait.."
                  : "Sign In"
              }
              textColor={[{ color: colors.a, fontFamily: "Comfortaa-Bold" }]}
              event={
                user.fetching && !user.isAuthenticated
                  ? () => alert("signing in")
                  : this.onLogin
              }
              button={[
                {
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  margin: 0,
                  shadowColor: "#000000",
                  shadowRadius: 5,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 0,
                    height: 1
                  }
                },
                styles.button__Widec,
                styles.button__Long
              ]}
            />
          )}
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                color: "rgba(255, 255, 255,.6)",
                fontFamily: "Comfortaa-Regular"
              }}
            >
              Don't have an Account?
              <TouchableOpacity
                style={{ width: 75, height: 13 }}
                onPress={() => this.props.navigation.navigate("signup")}
              >
                <Text
                  style={{
                    paddingLeft: 5,
                    color: "rgba(255, 255, 255,1)",
                    fontFamily: "Comfortaa-Regular",
                    fontWeight: "bold"
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        {
          //(!this.props.screenProps.user.error)? alert(this.props.screenProps.user.error):null
        }
      </View>
    );
  }
}
