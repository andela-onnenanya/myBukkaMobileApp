import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import ProceedToCheckout from "../ProceedToCheckOut";
import Pay from "../Pay";
import CardDetails from "../CardDetails";

const Menu = StackNavigator({
  proceedtocheckout: {
    screen: ProceedToCheckout,
    navigationOptions: {
      header: false
    }
  },
  pay: {
    screen: Pay,
    navigationOptions: {
      header: false
    }
  },
  CardDetails: {
    screen: CardDetails,
    navigationOptions: {
      header: false
    }
  }
});

class Checkout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return <Menu screenProps={this.props.store} />;
  }
}

export default Checkout;
