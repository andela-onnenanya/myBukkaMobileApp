import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { colors } from "../../styles/style";
import SidebarMenu from "./SidebarMenu";
import lib from "../../lib/lib";
import Mu from "../MenuItemsUnswipped";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActive: true,
      pastActive: false,
      allhistory: [],
      itemcount: 0,
      currenthistory: [],
      paginatedhistory: []
    };
    this.onCurrent = this.onCurrent.bind(this);
    this.onPast = this.onPast.bind(this);
    this.onBasket = this.onBasket.bind(this);
    this.paginate = this.paginate.bind(this);
  }
  onCurrent() {
    this.setState({
      currentActive: true,
      pastActive: false
    });
  }
  onPast() {
    this.setState({
      currentActive: false,
      pastActive: true
    });
  }
  onBasket() {
    !lib.amountofitems()
      ? alert("Sorry,There are no items in cart!")
      : this.props.navigation.navigate("checkout");
  }

  componentDidMount() {
    lib.orderhistory();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.user.fetched_orderhistory) {
      if (
        nextProps.screenProps.user.orderhistory !==
        this.props.screenProps.user.orderhistory
      ) {
        this.setState({
          allhistory: nextProps.screenProps.user.orderhistory,
          paginatedhistory: nextProps.screenProps.user.orderhistory.slice(0, 6),
          itemcount: 6
        });
      }
    }
  }

  paginate() {
    const { itemcount, allhistory } = this.state;
    let newcount = itemcount + 6;
    if (itemcount === allhistory.length) {
      null;
    } else if (newcount < allhistory.length) {
      this.setState({
        paginatedhistory: allhistory.slice(0, newcount),
        itemcount: newcount
      });
    } else if (newcount > allhistory.length) {
      this.setState({
        paginatedhistory: allhistory,
        itemcount: allhistory.length
      });
    } else {
      this.setState({
        paginatedhistory: allhistory,
        itemcount: allhistory.length
      });
    }
  }

  render() {
    console.log(this.state);
    const {
      currentActive,
      pastActive,
      paginatedhistory,
      currenthistory
    } = this.state;
    const {
      orderhistory,
      fetching_orderhistory,
      fetched_orderhistory
    } = this.props.screenProps.user;

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
                Order History
              </Text>
            </View>
            <SidebarMenu
              onClick={this.onBasket}
              iconname={"shopping-basket"}
              menuname={""}
            />
          </View>
        </View>
        <View style={{ flex: 5, paddingLeft: "7%", paddingRight: "7%" }}>
          <View style={{ flex: 1, backgroundColor: colors.b }}>
            <View style={{ height: 50, flexDirection: "row" }}>
              <TouchableOpacity
                style={[
                  {
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    borderBottomWidth: 1
                  },
                  currentActive
                    ? { borderBottomColor: colors.a }
                    : { borderBottomColor: "rgba(0,0,0,.2)" }
                ]}
                onPress={this.onCurrent}
              >
                <Text
                  style={{
                    fontFamily: "Comfortaa-Bold",
                    fontSize: 15,
                    color: colors.c
                  }}
                >
                  Current Orders
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    borderBottomColor: "rgba(0,0,0,.2)",
                    borderBottomWidth: 1
                  },
                  pastActive
                    ? { borderBottomColor: colors.a }
                    : { borderBottomColor: "rgba(0,0,0,.2)" }
                ]}
                onPress={this.onPast}
              >
                <Text
                  style={{
                    fontFamily: "Comfortaa-Bold",
                    fontSize: 15,
                    color: colors.c
                  }}
                >
                  Past Orders
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ flex: 1 }}
              pagingEnabled={true}
              snapToAlignment="start"
              decelerationRate={0}
              onScroll={this.paginate}
              scrollEventThrottle={0}
              showsVerticalScrollIndicator={false}
            >
              {currentActive ? (
                fetched_orderhistory ? (
                  <View style={{ alignItems: "center" }}>
                    {currenthistory.map((val, key) => (
                      <Mu
                        name="Efo Riro And Rice"
                        description="One portion of Edikinkong Soup"
                        imageUrl="https://res.cloudinary.com/bukka/image/upload/v1517950343/chefmenu/custom:1517948041129n-tyce/menufxeight/menu.jpg"
                        cost={400}
                        onClick={() => console.log("Hey!")}
                        add={() => console.log("Hey!")}
                        subtract={() => console.log("Hey!")}
                        quantity={1}
                        history={true}
                      />
                    ))}
                  </View>
                ) : null
              ) : pastActive ? (
                <View style={{ alignItems: "center" }}>
                  {paginatedhistory.map((val, key) => (
                    <Mu
                      foodName={Object.keys(val)[0]}
                      foodPrice={val.total}
                      key={key}
                      cuisine={val[Object.keys(val)[0]][0].paymentStatus}
                      foodImg={val[Object.keys(val)[0]][0].chefImage}
                      onUserPress={() => console.log("Hey!")}
                      history={val[Object.keys(val)[0]]}
                    />
                  ))}
                </View>
              ) : null}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default OrderHistory;
