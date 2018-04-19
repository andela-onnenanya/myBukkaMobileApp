import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Cuisine from "./Cuisine";
import lib from "../../lib/lib";

class Cuisines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    };
    this.onhandleClick = this.onhandleClick.bind(this);
  }
  onhandleClick(key, val) {
    this.setState({ key }, this.props.onChangeCuisine(val));
  }
  render() {
    const { chefAndCuisine, fetching } = this.props;
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {fetching
          ? null
          : Object.keys(chefAndCuisine).map((val, key) => (
              <Cuisine
                cui={lib.format(val)}
                evnt={() => this.onhandleClick(key, val)}
                key={key}
                number={key}
                active={this.state.key}
              />
            ))}
      </ScrollView>
    );
  }
}

export default Cuisines;
