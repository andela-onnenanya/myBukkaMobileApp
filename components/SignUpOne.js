import React from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import propTypes from 'prop-types'
import Button from './Button'
import storage from '../data_Container/store'
import Img from './Images'
import lib from '../lib/lib'
import rsc from '../lib/resources'

//console.log(storage.getState())

export default class SignUpOne extends React.Component {
  constructor(props){
    super(props)
    this.state={
      displayInputLabel:false,
      email:'',
      password:'',
      repeatPassword:'',
      firstName:'',
      lastName:'',
      mobile:'',
      page:false
    }
    this.NavigatePage=this.NavigatePage.bind(this)
  }
NavigatePage(){
  this.setState((prevState)=>({page:!prevState.page}))
} 
  render() {
    return (
            <ScrollView style={{paddingLeft:10,paddingRight:10}}>
                  <Inputs text="Email address"
                          isPassword={false}
                          onChangeText={this.props.email}
                          value={this.props.value.email}/>
                  <Inputs text="Password"
                          isPassword={true}
                          onChangeText={this.props.password}
                          value={this.props.value.password}/>
                  <Inputs text="Repeat Password"
                          isPassword={true}
                          onChangeText={this.props.repeatPassword}
                          value={this.props.value.repeatPassword}/>  
            </ScrollView>
                
    );
  }
}
