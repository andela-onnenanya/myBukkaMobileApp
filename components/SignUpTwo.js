import React from "react";
import { View, Text, ScrollView } from "react-native";
import Inputs from "./Inputs";

export default class SignUpOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInputLabel: false,
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
      mobile: "",
      page: false
    };
    this.NavigatePage = this.NavigatePage.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  NavigatePage() {
    this.setState(prevState => ({ page: !prevState.page }));
  }
  onSignUp() {
    let signUpDetails = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      mobile: this.state.mobile,
      isCustomer: true,
      isChef: false
    };
    console.log(signUpDetails);
    lib.signup(signUpDetails);
  }

  render() {
    return (
      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Inputs
          text="First name"
          isPassword={false}
          onChangeText={this.props.firstName}
          value={this.props.value.firstName}
        />
        <Inputs
          text="Last name"
          isPassword={false}
          onChangeText={this.props.lastName}
          value={this.props.value.firstName}
        />
        <Inputs
          text="080x xxx xxxx "
          disc="Mobile"
          isPassword={false}
          onChangeText={this.props.mobile}
          value={this.props.value.mobile}
        />
      </ScrollView>
    );
  }
}
