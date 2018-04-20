import React from "react";
import styles, { colors } from "../../styles/style";
import * as Animatable from "react-native-animatable";
import { WaveIndicator } from "react-native-indicators";
import lib from "../../lib/lib";

export default class splashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };

    this.set = this.set.bind(this);
    this.switch = this.switch.bind(this);
  }

  set(val) {
    this.setState({ splash: false });
    //clearTimeout(val);
  }
  componentDidMount() {
    if (!this.props.screenProps.address.Located) {
      lib.getRegion();
    }
  }
  switch(store) {
    store.user.isAuthenticated
      ? this.props.navigation.navigate("shop")
      : this.props.navigation.navigate("signin");
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.screenProps.address.Located) {
      if (nextProps.screenProps.address.Location) {
        this.set();
        this.switch(nextProps.screenProps);
        //let setter = setTimeout(()=>{this.set(setter),this.switch(nextProps)}, 1000)
      }
    }
  }

  render() {
    return (
      //(this.state.fontLoaded)?
      //<Root store={store}/>:
      // null
      //<New store={store} />
      <Animatable.View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.a
          }
        ]}
        //iterationCount={"infinite"}
        animation={this.state.splash ? null : "fadeOut"}
      >
        <WaveIndicator color="white" size={70} waveFactor={0.7} />
      </Animatable.View>
    );
  }
}
