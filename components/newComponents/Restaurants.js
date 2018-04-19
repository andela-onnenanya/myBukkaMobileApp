import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import Restaurant from "./Restaurant";
import lib from "../../lib/lib";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    };
    this.onHandleSelect = this.onHandleSelect.bind(this);
  }

  onHandleSelect(key, val) {
    this.setState({ key }, () => {
      lib.updatechefbycuisine(val);
      this.props.navigation.navigate("yourchef");
    });
  }

  render() {
    const { chef, cuisine, fetching } = this.props;
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ flex: 1 }}
      >
        {Object.keys(chef.chefAndCuisine).length &&
        cuisine &&
        chef.chefAndCuisine[cuisine]
          ? chef.chefAndCuisine[cuisine].map((val, key) => (
              <Restaurant
                evnt={() => this.onHandleSelect(key, val)}
                key={key}
                active={this.state.key}
                number={key}
                rating={Math.trunc(val.rating_overall)}
                name={val.username}
                cuisine={lib.format(val.cuisine)}
                dist={lib.roundUp(val.distance)}
                img={val.profile_photo}
              />
            ))
          : null}
      </ScrollView>
    );
  }
}

export default Restaurants;
