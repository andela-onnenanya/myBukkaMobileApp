import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput
} from "react-native";
import { colors } from "../../styles/style";
import lib from "../../lib/lib";
import GooglePlacesSearch from "./GooglePlaceSearch";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icono from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import Restaurant from "./Restaurant";
import Rate from "./Rate";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      mostpreferred: null,
      rating: null,
      Nearest: null,
      key: 0,
      chefs: null
    };
    this.search = this.search.bind(this);
    this.onHandleSelect = this.onHandleSelect.bind(this);
  }
  search(val) {
    let chefs = lib.search(val);
    this.setState({ chefs });
  }
  onHandleSelect(val) {
    lib.updatechefbycuisine(val);
    this.props.navigation.navigate("yourchef");
  }
  componentDidMount() {
    this.props.screenProps.chef.fetched_chefsInYourArea
      ? !this.state.chefs
        ? this.setState({ chefs: this.props.screenProps.chef.chefsInYourArea })
        : null
      : null;
  }

  render() {
    const { chef, user } = this.props.screenProps;
    const { deliveryLocation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ height: 40 }} />
        <View style={{ height: 40, paddingRight: 10, paddingLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Icono
              name="keyboard-backspace"
              size={25}
              color={colors.c}
              onPress={() => this.props.navigation.goBack()}
            />
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }
              ]}
            >
              <Image
                source={{
                  uri: user.user.profile_photo
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontFamily: "Comfortaa-Bold",
                  fontSize: 16
                }}
              >
                {" "}
                For {" " + lib.format(user.user.first_name)}
              </Text>
              <Icon name="chevron-down" size={25} color={colors.c} />
            </View>
            <Icon name="keyboard-backspace" size={12} color={"white"} />
          </View>
        </View>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          {deliveryLocation ? (
            <GooglePlacesSearch
              fetching={
                chef.fetching_chefAndCuisine && !chef.fetched_chefsInYourArea
              }
              back={() => this.props.navigation.navigate("shop")}
            />
          ) : (
            <View style={[{ flex: 1 }]}>
              <View
                style={[
                  style.textInputContainer,
                  {
                    borderTopColor: "rgba(0,0,0,.2)",
                    borderBottomColor: "rgba(0,0,0,.2)",
                    borderTopWidth: StyleSheet.hairlineWidth,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    height: 45,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 10,
                    paddingRight: 10
                  }
                ]}
              >
                <View>
                  <Icono name="search" size={25} color={colors.c} />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "stretch",
                    justifyContent: "center"
                  }}
                >
                  <TextInput
                    style={[
                      {
                        height: "100%",
                        width: "100%",
                        alignSelf: "stretch",
                        paddingLeft: 20
                      },
                      style.textInput
                    ]}
                    onChangeText={text => this.search(text)}
                    placeholderTextColor="rgba(0,0,0,.5)"
                    placeholder={"Search Food or Restaurant"}
                  />
                </View>
              </View>
              <View style={{ height: 50, paddingLeft: 10 }}>
                <Rate evnt={() => console.log("Hey!")} />
              </View>
              <ScrollView>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingTop: 0
                  }}
                >
                  {this.state.chefs
                    ? this.state.chefs.map((val, key) => (
                        <View
                          style={{
                            width: "45%",
                            margin: 5,
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                          key={key}
                        >
                          <Restaurant
                            evnt={() => this.onHandleSelect(val)}
                            myStyle={{ marginLeft: 0 }}
                            active={-1}
                            number={key}
                            rating={Math.trunc(val.rating_overall)}
                            name={lib.format(val.username)}
                            cuisine={lib.format(val.cuisine)}
                            dist={lib.roundUp(val.distance)}
                            img={val.profile_photo}
                          />
                        </View>
                      ))
                    : null}
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  textInputContainer: {
    width: "100%",
    backgroundColor: "white",
    borderBottomColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3
  },
  textInput: {
    fontFamily: "Comfortaa-Regular",
    fontSize: 14
  },
  description: {
    fontWeight: "bold",
    fontFamily: "Comfortaa-Bold",
    fontSize: 14
  },
  predefinedPlacesDescription: {
    color: "#1faadb"
  },
  powered: {
    height: 2,
    width: 2
  }
});
