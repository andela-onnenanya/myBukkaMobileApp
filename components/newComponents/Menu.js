import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import Dimensions from "Dimensions";
import MenuUnswipped from "./MenuUnswipped";
import MenuSwipped from "./MenuSwipped";
import Swipeable from "react-native-swipeable";
import lib from "../../lib/lib";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }
  add() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  subtract() {
    if (this.state.quantity > 1)
      this.setState({ quantity: this.state.quantity - 1 });
  }

  render() {
    const { menu, onSwipeEvnt, onClickEvnt } = this.props;
    const { quantity } = this.state;
    const image =
      "https://res.cloudinary.com/www-mybukka-com/image/upload/v1517936047/niklas-rhose-14304_iuneus.jpg";

    return (
      <Swipeable
        style={styles.cont}
        onRef={ref => (this.swipeable = ref)}
        rightContent={<MenuSwipped />}
        //rightActionActivationDistance={Dimensions.get('window').height*8/11/4}
        onRightActionRelease={() => onSwipeEvnt(menu, this.state.quantity)}
      >
        <MenuUnswipped
          name={menu.menu}
          description={menu.desc}
          imageUrl={menu.image || image}
          cost={menu.price}
          onClick={onClickEvnt}
          quantity={quantity}
          add={this.add}
          subtract={this.subtract}
        />
      </Swipeable>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  cont: {
    height: Dimensions.get("window").height * 8 / 11 / 4,
    width: Dimensions.get("window").width,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    margin: 10,
    marginLeft: 0,
    marginRight: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 2
    },
    elevation: 3,
    backgroundColor: "#0000"
  }
});
