import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet
} from "react-native";
import styles, { colors } from "../../styles/style";
import BoldText from "../BoldText";
import Img from "../Images";
import propTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from "../Button";
import lib from "../../lib/lib";
import SocialShare from "./SocialShare";

export default class MoreItemInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      quantity: 1,
      chefinstruction: "",
      cart: this.props.screenProps.cart.cart,
      cartInfo: {
        cart: {},
        total: 0.0
      },
      loading: false,
      typing: false
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {}

  add() {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  }

  subtract() {
    if (this.state.quantity > 1)
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
  }

  async addToCart(e) {
    e.stopPropagation();
    e.preventDefault();
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

        this.props.navigation.goBack();
        //return{}
      }
    }
    const params = this.props.navigation.state.params;

    var name = params.menu,
      price = parseInt(params.price, 10),
      quantity = parseInt(this.state.quantity, 10),
      totalCost = price * quantity;
    (desc = params.desc),
      (hour = params.hour),
      (min = params.min),
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
    this.props.navigation.goBack();
    //console.log(this.state)
  }
  render() {
    const {
      image,
      price,
      menu,
      desc,
      min,
      hour
    } = this.props.navigation.state.params;

    const { currentCuisine } = this.props.screenProps.chef;

    const url =
      "https://mybukka.com/restaurant/" +
      this.props.screenProps.chef.yourChef.uid;

    return (
      <View style={[styles.containerk, myStyle.parentCont]}>
        <View style={[styles.containerl, myStyle.buttonCont, { top: 30 }]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="close" size={25} color={colors.a} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="keyboard-arrow-down" size={25} color="transparent" />
          </TouchableOpacity>
          {<SocialShare message={desc} title={menu + "on Bukka"} url={url} />}
        </View>
        <View style={[styles.all_width, styles.all_height]}>
          <View style={[styles.flexc, styles.positiona, myStyle.imageCont]}>
            <Img
              source={{ uri: image }}
              style={[styles.all_width, styles.all_height, { padding: 0 }]}
              onLoadStart={e => this.setState({ loading: true })}
              onLoad={e => this.setState({ loading: false })}
            />
          </View>
          <View style={[styles.flexc, styles.topa]}>
            <View
              style={[
                styles.flexc,
                styles.flexd,
                myStyle.moreInfo,
                this.state.typing ? { display: "none" } : { display: "flex" }
              ]}
            >
              <View style={[styles.topb]}>
                <BoldText
                  deco={[styles.texte, myStyle.foodNameText]}
                  text={menu}
                />
                <BoldText
                  deco={[styles.textf, myStyle.cuisineCont]}
                  text={"\u2022" + currentCuisine}
                />
              </View>
              <View style={myStyle.detailsCont}>
                <Text style={myStyle.detailsText} numberOfLines={3}>
                  {desc}
                </Text>
                <Text
                  style={myStyle.etd}
                >{`Expected time of delivery is ${hour} hour ${min} mins`}</Text>
              </View>
            </View>
            <View />
            <View style={[styles.containerm]}>
              <View style={myStyle.specialIns}>
                <BoldText
                  text="Special Instructions"
                  deco={[styles.textg, myStyle.myText]}
                />
                <TextInput
                  style={[styles.textInputa, myStyle.myText]}
                  onFocus={() => this.setState({ typing: true })}
                  onBlur={() => this.setState({ typing: false })}
                  value={this.state.chefinstruction}
                  onChangeText={chefinstruction =>
                    this.setState({ chefinstruction })
                  }
                  placeholder="Add note (extra sauce, no onion etc.)"
                />
              </View>
              <View style={myStyle.addbuttonCont}>
                <View style={styles.containern}>
                  <TouchableOpacity style={myStyle.touchadd} onPress={this.add}>
                    <Icon name="add" size={20} color="#900" />
                  </TouchableOpacity>
                  <Text style={[styles.textd, myStyle.myText]}>
                    {this.state.quantity}
                  </Text>
                  <TouchableOpacity
                    style={myStyle.touchadd}
                    onPress={this.subtract}
                  >
                    <Icon name="remove" size={20} color="#900" />
                  </TouchableOpacity>
                </View>
                <Button
                  button={[
                    styles.button,
                    styles.button__Wideb,
                    styles.button_short,
                    styles.button__a
                  ]}
                  event={this.addToCart}
                  textColor={[styles.textColorb]}
                  text={`Add ${this.state.quantity} to cart ${"₦" +
                    price * this.state.quantity}`}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

MoreItemInfo.propTypes = {
  navigation: propTypes.object.isRequired
};

var myStyle = StyleSheet.create({
  parentCont: {
    flex: 1,
    position: "relative"
  },
  buttonCont: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 20,
    zIndex: 1
  },
  imageCont: {
    marginLeft: -10,
    marginRight: -10
  },
  moreInfo: {
    justifyContent: "flex-start"
  },
  foodNameText: {
    fontSize: 20,
    fontFamily: "Comfortaa-Bold"
  },
  cuisineCont: {
    fontSize: 14,
    fontFamily: "Comfortaa-Regular"
  },
  detailsCont: {
    marginTop: 5
  },
  detailsText: {
    fontSize: 14,
    fontFamily: "Comfortaa-Regular",
    marginBottom: 5
  },
  etd: {
    fontSize: 14,
    fontFamily: "Comfortaa-Regular",
    marginBottom: 5,
    color: colors.a
  },
  specialIns: {
    alignSelf: "stretch",
    marginBottom: 10
  },
  myText: {
    fontFamily: "Comfortaa-Regular",
    fontSize: 14
  },
  addbuttonCont: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 10
  },
  touchadd: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.a,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
});
