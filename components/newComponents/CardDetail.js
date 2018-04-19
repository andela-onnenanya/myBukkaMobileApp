import React from "react";
import { View, Text, TextInput } from "react-native";
import propTypes from "prop-types";

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      autoFocus: this.props.autoFocus
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.autoFocus !== nextProps.autoFocus) {
      this.setState({ autoFocus: nextProps.autoFocus });
    }
  }

  render() {
    const {
        width,
        label,
        evnt,
        value,
        onSubmitEditing,
        refe,
        autoFocus,
        keyboardType,
        onFocus,
        profile,
        profileEdit
      } = this.props,
      { isFocused } = this.state;

    return (
      <View
        style={[
          { alignSelf: "center", marginLeft: 20 },
          profile || profileEdit ? { marginBottom: 10 } : {}
        ]}
      >
        <Text
          style={[
            {
              fontFamily: "Comfortaa-Bold",
              fontSize: 12,
              color: "rgba(0,0,0,.6)",
              marginBottom: 10
            },
            profile || profileEdit ? { marginBottom: -5, fontSize: 14 } : {}
          ]}
        >
          {label}
        </Text>
        <TextInput
          style={[
            { height: 50, fontFamily: "Comfortaa-Bold", fontSize: 20 },
            isFocused
              ? { color: "rgba(0,0,0,1)" }
              : { color: "rgba(0,0,0,.5)" },
            width ? { width: width } : {},
            profile ? { color: "rgba(0,0,0,1)", fontSize: 18 } : {},
            profileEdit
              ? {
                  fontSize: 16,
                  borderBottomColor: "rgba(0,0,0,.4)",
                  borderBottomWidth: 1
                }
              : {}
          ]}
          value={value ? value : ""}
          onChangeText={evnt}
          autoFocus={autoFocus}
          ref={refe}
          onFocus={() => this.setState({ isFocused: true }, onFocus)}
          onBlur={() => this.setState({ isFocused: false })}
          onSubmitEditing={() =>
            this.setState({ isFocused: false }, onSubmitEditing)
          }
          blurOnSubmit={false}
          keyboardType={keyboardType ? keyboardType : "default"}
          autoCorrect={false}
          editable={profile ? false : true}
        />
      </View>
    );
  }
}

export default CardDetail;

CardDetail.propTypes = {
  width: propTypes.number.isRequired,
  label: propTypes.string.isRequired,
  evnt: propTypes.func.isRequired,
  autoFocus: propTypes.bool,
  onEndEditing: propTypes.func,
  refe: propTypes.func.isRequired
};
