import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Category from "./Category";
import lib from "../../lib/lib";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: -1
    };
    this.onhandleSelect = this.onhandleSelect.bind(this);
  }

  onhandleSelect(key, val) {
    this.setState({ key }, () => this.props.click(val));
  }

  render() {
    const { categ } = this.props;
    return (
      <ScrollView
        style={[styles.cont]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Category
          number={-1}
          active={this.state.key}
          key={-1}
          evnt={() => this.onhandleSelect(-1, "all")}
          categ={lib.format("all")}
        />
        {categ.map((val, key) => (
          <Category
            number={key}
            active={this.state.key}
            key={key}
            evnt={() => this.onhandleSelect(key, val)}
            categ={lib.format(val)}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1
  }
});
