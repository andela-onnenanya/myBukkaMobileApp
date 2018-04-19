import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import MenuList from "./MenuList";
import Chef from "../Chef";

const ChefMenuList = StackNavigator({
  chef: {
    screen: Chef,
    navigationOptions: {
      header: false
    }
  },
  menulist: {
    screen: MenuList,
    navigationOptions: {
      header: false
    }
  }
});

class ChefAndMenu extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return <ChefMenuList screenProps={this.props} />;
  }
}

export default ChefAndMenu;
