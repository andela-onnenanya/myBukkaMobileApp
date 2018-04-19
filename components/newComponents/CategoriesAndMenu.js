import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import Position from "./Position";
import Categories from "./Categories";
import Menu from "./Menu";
import FloatingCart from "./FloatingCart";
import lib from "../../lib/lib";
import Dimensions from "Dimensions";
import Sidebar from "./Sidebar";
import HeaderMenu from "./HeaderMenu";

class CategoriesAndMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menum: false,
      counter: false,
      menu: null,
      chefinstruction: "",
      cart: this.props.screenProps.cart.cart,
      quantity: 1,
      cartInfo: {
        cart: {},
        total: 0.0
      },
      loading: false,
      typing: false
    };

    this.onPressMenu = this.onPressMenu.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.onhandleClick = this.onhandleClick.bind(this);
  }

  componentDidMount() {
    let categ = [];
    if (Object.keys(this.props.screenProps.chef.yourChef)) {
      this.props.screenProps.chef.yourChef.menu.forEach(val => {
        if (val.visibility) categ.push(val);
      });

      this.props.screenProps.chef.fetched_chefsInYourArea
        ? !this.state.menu
          ? this.setState({ menu: categ })
          : null
        : null;
    }
  }
  onhandleClick(val) {
    let categ = [];
    this.props.screenProps.chef.yourChef.menu.forEach(val => {
      if (val.visibility) categ.push(val);
    });

    val === "all"
      ? this.setState({ menu: categ })
      : this.setState({
          menu: this.props.screenProps.chef.menuCategories[`${val}`]
        });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.screenProps.cart !== nextProps.screenProps.cart) {
      this.setState({ cart: nextProps.screenProps.cart.cart });
    }
  }
  async addToCart(value, _Q) {
    if (Object.keys(this.state.cart).length) {
      var _ = Object.keys(this.state.cart)[0];

      if (
        this.props.screenProps.chef.yourChef.uid !==
        this.state.cart[`${_}`].chef
      ) {
        //Alert.alert('Sorry! You can only shop from one chef at a time')
        Alert.alert(
          "Whoops!",
          "You can only shop from one chef at a time.Click Yes to clear cart and continue shopping with new chef Or click No to keep items in cart",
          [
            {
              text: "Yes",
              onPress: () => {
                lib.clear_Cart(), alert("cart cleared!");
              },
              style: "destructive"
            },
            { text: "No", onPress: () => console.log("Cancel Pressed") }
          ]
        );
        return {};
        //this.props.navigation.goBack()
      }
    }

    var name = value.menu,
      price = parseInt(value.price, 10),
      quantity = parseInt(_Q, 10),
      totalCost = price * quantity;
    (desc = value.desc),
      (hour = value.hour),
      (min = value.min),
      (chef = this.props.screenProps.chef.yourChef.uid),
      (chefinstruction = this.state.chefinstruction);

    if (this.state.cart.hasOwnProperty(name)) {
      let newQuantity = this.state.cart[name].quantity + quantity,
        newTotalcost = price * newQuantity,
        cartUpdate = {};
      cartUpdate[name] = {
        price: price,
        quantity: newQuantity,
        totalCost: newTotalcost,
        chefinstruction: chefinstruction,
        desc: desc,
        hour: hour,
        min: min,
        chef: chef
      };

      await this.setState({
        cartInfo: {
          ...this.state.cartInfo,
          cart: {
            ...this.state.cart,
            ...this.state.cartInfo.cart,
            ...cartUpdate
          }
        }
      });

      let total = Object.keys(this.state.cartInfo.cart)
        .map((val, key) => this.state.cartInfo.cart[val].totalCost)
        .reduce((sum, value) => sum + value, 0.0)
        .toFixed(2);

      await this.setState({
        cartInfo: {
          ...this.state.cartInfo,
          total
        }
      });

      lib.updateCart({
        cart: this.state.cartInfo.cart,
        total: this.state.cartInfo.total
      });
    }

    if (!this.state.cart.hasOwnProperty(name)) {
      let newCart = {};
      newCart[name] = {
        price: price,
        quantity: quantity,
        totalCost: totalCost,
        chefinstruction: chefinstruction,
        desc: desc,
        hour: hour,
        min: min,
        chef: chef
      };

      await this.setState({
        cartInfo: {
          ...this.state.cartInfo,
          cart: {
            ...this.state.cart,
            ...this.state.cartInfo.cart,
            ...newCart
          }
        }
      });

      let total = await Object.keys(this.state.cartInfo.cart)
        .map((val, key) => this.state.cartInfo.cart[val].totalCost)
        .reduce((sum, value) => sum + value, 0)
        .toFixed(2);

      await this.setState({
        cartInfo: {
          ...this.state.cartInfo,
          total
        }
      });

      lib.updateCart({
        cart: this.state.cartInfo.cart,
        total: this.state.cartInfo.total
      });
    }
    //console.log(this.state)
  }
  onPressMenu() {
    this.setState({
      menum: !this.state.menum,
      counter: true
    });
  }
  render() {
    const { chef, address, cart, user } = this.props.screenProps;
    const { cuisine, menum, counter } = this.state;
    const { routeName } = this.props.navigation.state;

    return (
      <View style={{ backgroundColor: "white", flex: 1, position: "relative" }}>
        <View style={{ height: 20 }} />
        <Animatable.View
          style={[
            { flex: 1, zIndex: 2 },
            menum ? { marginLeft: -Dimensions.get("window").width / 4 * 4 } : {}
          ]}
          animation={menum ? "fadeInRightBig" : counter ? "fadeInLeftBig" : ""}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 10
            }}
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
        </Animatable.View>
        <Animatable.View
          style={[
            { flex: 2, zIndex: 2 },
            menum ? { marginLeft: -Dimensions.get("window").width / 4 * 4 } : {}
          ]}
          animation={menum ? "fadeInRightBig" : counter ? "fadeInLeftBig" : ""}
        >
          <View
            style={{
              flex: 2,
              paddingLeft: 10,
              borderTopColor: "rgba(0,0,0,.1)",
              borderTopWidth: 1
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "flex-end" }}>
              <Text style={{ fontFamily: "Comfortaa-Bold", fontSize: 17 }}>
                Categories &bull; {chef.menuCategoriesKeys.length + 1}
              </Text>
            </View>
            {Object.keys(this.props.screenProps.chef.yourChef) ? (
              <Categories
                categ={chef.menuCategoriesKeys}
                click={_ => this.onhandleClick(_)}
              />
            ) : null}
          </View>
        </Animatable.View>
        <View style={[{ zIndex: 2, flex: 8, position: "relative" }]}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {Object.keys(this.props.screenProps.chef.yourChef)
              ? this.state.menu
                ? this.state.menu.map((val, key) => (
                    <Menu
                      menu={val}
                      key={key}
                      cart={cart}
                      chef={chef.yourChef}
                      onSwipeEvnt={this.addToCart}
                      onClickEvnt={() =>
                        this.props.navigation.navigate("more", val)
                      }
                    />
                  ))
                : null
              : null}
          </ScrollView>
        </View>
        {Object.keys(cart.cart).length ? (
          <FloatingCart
            quantity={lib.amountofitems()}
            cost={cart.total}
            evnt={() => this.props.navigation.navigate("checkout")}
          />
        ) : null}
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
              menum ? { left: 0, right: 0 } : {}
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
              switche={menum}
              counter={counter}
            />
          </View>
        }
      </View>
    );
  }
}

export default CategoriesAndMenu;
