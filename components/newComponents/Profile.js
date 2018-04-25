import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { colors } from "../../styles/style";
import SidebarMenu from "./SidebarMenu";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dimensions from "Dimensions";
import CardDetail from "./CardDetail";
import lib from "../../lib/lib";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: lib.format(props.screenProps.user.user.first_name),
      last_name: lib.format(props.screenProps.user.user.last_name),
      mobile: props.screenProps.user.user.mobile,
      editable: false
    };
    this.onStartEdit = this.onStartEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.onBasket = this.onBasket.bind(this);
  }
  onStartEdit() {
    this.setState({ editable: true });
  }
  onSaveEdit() {
    this.setState({ editable: false }, () => {
      lib.updateuser({ ...this.state, editable: undefined }),
        console.log(this.state);
    });
  }
  onBasket() {
    !lib.amountofitems()
      ? alert("Sorry,There are no items in cart!")
      : this.props.navigation.navigate("checkout");
  }

  render() {
    const { last_name, mobile, first_name, editable } = this.state;
    const { email, profile_photo } = this.props.screenProps.user.user;
    return (
      <View style={{ flex: 1, position: "relative" }}>
        <View
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <View style={{ flex: 1, backgroundColor: colors.a }} />
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ paddingTop: 30, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <SidebarMenu
              onClick={() => this.props.navigation.goBack()}
              iconname={"arrow-back"}
              menuname={""}
            />
            <View>
              <Text
                style={{
                  fontFamily: "Comfortaa-Bold",
                  fontSize: 17,
                  color: colors.b
                }}
              >
                Profile
              </Text>
            </View>
            <SidebarMenu
              onClick={this.onBasket}
              iconname={"shopping-basket"}
              menuname={""}
            />
          </View>
        </View>
        <View style={{ flex: 10, paddingLeft: "7%", paddingRight: "7%" }}>
          <View style={{ flex: 1, backgroundColor: colors.b }}>
            <View
              style={[
                { flex: 1, zIndex: 1 },
                editable ? { flex: 0, height: 20 } : {}
              ]}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1
                }}
              >
                {editable ? null : (
                  <Image
                    source={{ uri: profile_photo }}
                    style={{
                      width: Dimensions.get("window").height * 8 / 11 / 4,
                      height: Dimensions.get("window").height * 8 / 11 / 4,
                      borderRadius:
                        Dimensions.get("window").height * 8 / 11 / 8,
                      marginBottom: 5
                    }}
                  />
                )}
                {editable ? null : (
                  <Text style={{ color: "rgba(0,0,0,.5)" }}>{email}</Text>
                )}
                {editable ? (
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      backgroundColor: colors.a,
                      padding: 7,
                      borderRadius: 5,
                      bottom: -30,
                      right: 10,
                      zIndex: 1
                    }}
                    onPress={this.onSaveEdit}
                  >
                    <Text
                      style={{
                        fontFamily: "Comfortaa-Bold",
                        fontSize: 17,
                        color: colors.b
                      }}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      backgroundColor: colors.a,
                      padding: 7,
                      borderRadius: 22,
                      bottom: -30,
                      right: 10,
                      zIndex: 1
                    }}
                    onPress={this.onStartEdit}
                  >
                    <Icon name={"edit"} size={30} color={colors.b} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <KeyboardAvoidingView
              style={{ flex: 2, backgroundColor: colors.b }}
              behavior="padding"
              enabled
            >
              <ScrollView
                style={{
                  flex: 1,
                  paddingTop: 50,
                  paddingLeft: 20,
                  paddingRight: 20
                }}
              >
                <CardDetail
                  width={
                    Dimensions.get("window").width -
                    Dimensions.get("window").width * 30 / 100
                  }
                  label={"First Name"}
                  refe={input => (this.firstText = input)}
                  value={first_name}
                  focus={editable ? true : false}
                  profile={editable ? false : true}
                  profileEdit={editable}
                  onSubmitEditing={() => this.secondText.focus()}
                  evnt={first_name => this.setState({ first_name })}
                />

                <CardDetail
                  width={
                    Dimensions.get("window").width -
                    Dimensions.get("window").width * 30 / 100
                  }
                  label={"Last Name"}
                  refe={input => (this.secondText = input)}
                  value={last_name}
                  profile={editable ? false : true}
                  profileEdit={editable}
                  onSubmitEditing={() => this.thirdText.focus()}
                  evnt={last_name => this.setState({ last_name })}
                />

                <CardDetail
                  width={
                    Dimensions.get("window").width -
                    Dimensions.get("window").width * 30 / 100
                  }
                  label={"Mobile"}
                  refe={input => (this.thirdText = input)}
                  value={mobile}
                  profile={editable ? false : true}
                  profileEdit={editable}
                  onSubmitEditing={() => console.log("Yh!")}
                  evnt={mobile => this.setState({ mobile })}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    );
  }
}
