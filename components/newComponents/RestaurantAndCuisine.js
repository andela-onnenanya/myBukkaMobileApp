import React from "react";
import { View, Text, Image } from "react-native";
import { colors } from "../../styles/style";
import * as Animatable from "react-native-animatable";
import Position from "./Position";
import HeaderMenu from "./HeaderMenu";
import Cuisines from "./Cuisines";
import Rate from "./Rate";
import Restaurants from "./Restaurants";
import Map from "../Map";
import lib from "../../lib/lib";
import Sidebar from "./Sidebar";
import Dimensions from "Dimensions";

export default class RestaurantAndCuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: null,
      menu: false,
      counter: false
    };

    this.onChangeCuisine = this.onChangeCuisine.bind(this);
    this.onPressMenu = this.onPressMenu.bind(this);
    this.setcuisine - this.setcuisine.bind(this);
  }
  componentDidMount() {
    this.setcuisine(this.props.screenProps.chef);
  }
  setcuisine(src) {
    const { chefAndCuisine } = src;
    if (Object.keys(chefAndCuisine).length) {
      if (!this.state.cuisine) {
        initialCuisine = Object.keys(chefAndCuisine)[0];
        this.setState({ cuisine: initialCuisine });
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.chef !== this.props.screenProps.chef) {
      this.setcuisine(nextProps.screenProps.chef);
    }
  }
  onChangeCuisine(cuisine) {
    this.setState({ cuisine });
    console.log(cuisine);
  }

  onPressMenu() {
    this.setState({
      menu: !this.state.menu,
      counter: true
    });
  }

  render() {
    const { chef, address, user } = this.props.screenProps;
    const { cuisine, menu, counter } = this.state;
    const { routeName } = this.props.navigation.state;
    return (
      <View style={{ backgroundColor: "white", flex: 1, position: "relative" }}>
        <View style={{ height: 20 }} />
        <Animatable.View
          style={[
            { flex: 1, zIndex: 2 },
            menu ? { marginLeft: -Dimensions.get("window").width / 4 * 4 } : {}
          ]}
          animation={menu ? "fadeInRightBig" : counter ? "fadeInLeftBig" : ""}
        >
          <View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                alignItems: "stretch",
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
                zIndex: 2
              }
            ]}
          >
            <Position
              location={address.Location}
              evnt={() =>
                this.props.navigation.navigate("changedeliverylocation")
              }
            />
            <HeaderMenu
              searchEvnt={() =>
                this.props.navigation.navigate("findfoodorchef")
              }
              menuEvnt={this.onPressMenu}
            />
          </View>
          <View style={{ flex: 2 }}>
            {Object.keys(chef.chefAndCuisine) ? (
              <Cuisines
                chefAndCuisine={chef.chefAndCuisine}
                onChangeCuisine={this.onChangeCuisine}
                fetching={!chef.fetched_chefAndCuisine}
              />
            ) : null}
          </View>
        </Animatable.View>
        <View style={{ flex: 2 }} />
        <Animatable.View
          style={[
            { flex: 2 },
            menu
              ? {
                  left: -Dimensions.get("window").width / 4 * 3,
                  right: Dimensions.get("window").width / 4 * 3
                }
              : {}
          ]}
          animation={menu ? "fadeInRightBig" : counter ? "fadeInLeftBig" : ""}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Rate evnt={() => console.log("evnt")} />
          </View>
          <View style={{ flex: 4, justifyContent: "center" }}>
            {Object.keys(chef.chefAndCuisine) ? (
              <Restaurants
                chef={chef}
                cuisine={cuisine}
                fetching={!chef.fetched_chefAndCuisine}
                navigation={this.props.navigation}
              />
            ) : null}
          </View>
        </Animatable.View>
        <Animatable.View
          style={[
            {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: -1
            }
            //menu?{left:-Dimensions.get('window').width/4*1,right:Dimensions.get('window').width/4*1}:{}
          ]}
          //animation={menu?'fadeInLeft':'fadeInRight'}
        >
          {
            <Map
              cluster={true}
              region={address.region}
              chefsLocation={
                Object.keys(chef.chefAndCuisine).length && cuisine
                  ? lib.chefLocationByCuisine(cuisine)
                  : null
              }
            />
          }
          {chef.error ? (
            <View
              style={{
                height: 50,
                bottom: 0,
                backgroundColor: colors.a,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Comfortaa-Bold",
                  fontSize: 16
                }}
              >
                {chef.error.response
                  ? chef.error.response.data
                  : chef.error.message}
              </Text>
            </View>
          ) : null}
        </Animatable.View>
        {
          <View
            style={[
              {
                position: "absolute",
                top: 0,
                bottom: 0,
                left:
                  Dimensions.get("window").width +
                  Dimensions.get("window").width * 1 / 4,
                right: -Dimensions.get("window").width,
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,.2)"
              },
              menu ? { left: 0, right: 0 } : {}
            ]}
          >
            <Sidebar
              imageUrl={this.props.screenProps.user.user.profile_photo}
              name={
                lib.format(user.user.first_name) +
                " " +
                lib.format(user.user.last_name)
              }
              homeEvt={() =>
                routeName === "shop"
                  ? this.onPressMenu()
                  : (this.props.navigation.navigate("shop"), this.onPressMenu())
              }
              profileEvnt={() =>
                routeName === "profile"
                  ? this.onPressMenu()
                  : (this.props.navigation.navigate("profile"),
                    this.onPressMenu())
              }
              paymentEvnt={() =>
                routeName === "pay"
                  ? this.onPressMenu()
                  : (this.props.navigation.navigate("pay"), this.onPressMenu())
              }
              orderHistoryEvnt={() =>
                routeName === "history"
                  ? this.onPressMenu()
                  : (this.props.navigation.navigate("history"),
                    this.onPressMenu())
              }
              helpEvnt={() => this.props.navigation.navigate("shop")}
              logOutEvnt={() => lib.signout()}
              menuEvnt={this.onPressMenu}
              switche={menu}
              counter={counter}
            />
          </View>
        }
      </View>
    );
  }
}
