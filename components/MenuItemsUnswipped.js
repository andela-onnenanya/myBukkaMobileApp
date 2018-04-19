import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Img from "./Images";
import styles from "../styles/style";
import propTypes from "prop-types";
import Dimensions from "Dimensions";
import lib from "../lib/lib";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      clicked: false
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const { clicked } = this.state;
    const { history } = this.props;
    return (
      <TouchableOpacity
        style={[{ width: "100%" }]}
        onPress={this.onPressButton}
      >
        <View
          style={[
            styles.containerg,
            {
              flex: 1,
              height: Dimensions.get("window").height * 5 / 8 * 1 / 4 - 10,
              position: "relative",
              borderBottomWidth: 0
            }
          ]}
        >
          <View style={styles.flexb}>
            <Text
              style={[
                styles.texta,
                { fontFamily: "Comfortaa-Bold", fontSize: 14 }
              ]}
              numberOfLines={1}
            >
              {this.props.foodName}
            </Text>
            <Text style={[styles.textb, { fontSize: 14 }]}>
              {"\u2022"}
              <Text style={[{ fontSize: 12, fontFamily: "Comfortaa-Bold" }]}>
                {this.props.cuisine}
              </Text>
            </Text>
            <Text
              style={[
                styles.textc,
                {
                  fontSize: 14,
                  fontWeight: "700",
                  fontFamily: "Comfortaa-Bold"
                }
              ]}
            >
              ₦{this.props.foodPrice}
            </Text>
          </View>
          <Img
            source={{ uri: this.props.foodImg }}
            style={[styles.imagea, { width: 70, height: 70, borderRadius: 35 }]}
          />
        </View>
        {clicked
          ? history.map((element, key) => (
              <View
                style={[
                  { flexDirection: "row", padding: 10, borderBottomWidth: 1 },
                  clicked
                    ? { borderBottomColor: "rgba(0,0,0,.3)" }
                    : { borderBottomColor: "rgba(0,0,0,0)" }
                ]}
                key={key}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Comfortaa-Bold",
                      fontSize: 14,
                      color: "rgba(0,0,0,.5)"
                    }}
                    numberOfLines={1}
                  >
                    {lib.format(element.itemName)}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Comfortaa-Bold",
                      fontSize: 14,
                      textAlign: "center",
                      color: "rgba(0,0,0,.5)"
                    }}
                    numberOfLines={1}
                  >
                    {element.itemQuantity}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Comfortaa-Bold",
                      fontSize: 14,
                      textAlign: "right",
                      color: "rgba(0,0,0,.5)"
                    }}
                    numberOfLines={1}
                  >
                    ₦{element.amount}
                  </Text>
                </View>
              </View>
            ))
          : null}
      </TouchableOpacity>
    );
  }
}

MenuItem.propTypes = {
  foodName: propTypes.string.isRequired,
  foodPrice: propTypes.number.isRequired,
  cuisine: propTypes.string.isRequired,
  foodImg: propTypes.string.isRequired,
  onUserPress: propTypes.func.isRequired
};
