import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import SignUp from "../SignUp";
import { connect } from "react-redux";
import { mapStateToProps } from "../../lib/resources";
import SignIn from "../SignIn";
import SplashScreen from "../newComponents/SplashScreen";
import * as Animatable from "react-native-animatable";
import RestaurantAndCuisine from "../newComponents/RestaurantAndCuisine";
import ChangeDeliveryLocation from "../newComponents/ChangeDeliveryLocation";
import Search from "../newComponents/Search";
import Menu from "../newComponents/CategoriesAndMenu";
import MoreItemInfo from "../newComponents/MoreItemInfo";
import ProceedToCheckOut from "../../components/ProceedToCheckOut";
import Pay from "../../components/Pay";
import CardSetUp from "../newComponents/CardSetUp";
import Sidebar from "../newComponents/Sidebar";
import Profile from "../newComponents/Profile";
import Orderhistory from "../newComponents/OrderHistory";
import MyWeb from "../newComponents/web";

const SplashNavigation = StackNavigator({
  splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: false
    }
  }
});

const AuthenticationNavigation = StackNavigator({
  signin: {
    screen: SignIn,
    navigationOptions: {
      header: false
    }
  },
  signup: {
    screen: SignUp,
    navigationOptions: {
      header: false
    }
  }
});

const ShopNavigation = StackNavigator({
  shop: {
    screen: RestaurantAndCuisine,
    navigationOptions: {
      header: false
    }
  },
  changedeliverylocation: {
    screen: ChangeDeliveryLocation,
    navigationOptions: {
      header: false
    }
  },
  findfoodorchef: {
    screen: Search,
    navigationOptions: {
      header: false
    }
  },
  yourchef: {
    screen: Menu,
    navigationOptions: {
      header: false
    }
  },
  more: {
    screen: MoreItemInfo,
    navigationOptions: {
      header: false
    }
  },
  checkout: {
    screen: ProceedToCheckOut,
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
  addcard: {
    screen: CardSetUp,
    navigationOptions: {
      header: false
    }
  },
  drawer: {
    screen: Sidebar,
    navigationOptions: {
      header: false
    }
  },
  profile: {
    screen: Profile,
    navigationOptions: {
      header: false
    }
  },
  history: {
    screen: Orderhistory,
    navigationOptions: {
      header: false
    }
  },
  web: {
    screen: MyWeb,
    navigationOptions: {
      header: false
    }
  }
});

class Root extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
  }

  render() {
    const { user, address, chef } = this.props;
    return !address.Located ? (
      <SplashNavigation screenProps={this.props} />
    ) : !user.isAuthenticated ? (
      <Animatable.View animation="fadeIn" style={myStyles.fullScreen}>
        <AuthenticationNavigation screenProps={this.props} />
      </Animatable.View>
    ) : chef.fetched_chefAndCuisine ? (
      <ShopNavigation screenProps={this.props} />
    ) : (
      <ShopNavigation screenProps={this.props} />
    );
  }
}

export default connect(mapStateToProps)(Root);

const myStyles = StyleSheet.create({
  fullScreen: {
    flex: 1
  }
});
