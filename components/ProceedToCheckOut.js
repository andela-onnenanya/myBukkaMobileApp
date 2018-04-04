import React,{Component} from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput,StyleSheet } from 'react-native';
import styles,{colors} from '../styles/style'
import Inputs from './Inputs'
import propTypes from 'prop-types'
import Button from './Button'
import storage from '../data_Container/store'
import Img from './Images'
import lib from '../lib/lib'
import Icon from 'react-native-vector-icons/Entypo'
import CommonContainer from './CommonContainer'
import rsc from '../lib/resources'
import Card from './Card'
import CheckBox from 'react-native-check-box'
import CardDetails from './CardDetails'
import Map from './Map'
import MenuNavigation from './MenuNavigations'
import MenuIconButton from './MenuIconButton'
import Dimensions from 'Dimensions'
import {connect} from 'react-redux'
import {mapStateToProps} from '../lib/resources'
import SpinnerIndicator from './SpinnerIndicator'
import * as Animatable from 'react-native-animatable'
import  CuisineItems from './CuisineItems'
import CartItem from './CartItem'

class ProceedToCheckOut extends Component{
    constructor(props){
        super(props)
        this.state={
            deliveryInfo:'',
            moveUp:false
        }
        this.proceed=this.proceed.bind(this)
    }
    proceed(){
        lib.savedeliveryinfo(this.state.deliveryInfo)
        this.props.navigation.navigate('pay')
    }

    render(){
        const {cart,chef} = this.props.screenProps
        return(
            <View style={{flex:1,padding:10,paddingTop:30,backgroundColor:'white'}} >
                <ScrollView style={{flex:1}}>
                {
                    Object.keys(cart.cart).map((val,key)=>
                    <CartItem   foodname={val}
                                key={key}
                                price={cart.cart[val].price}
                                cuisine={chef.yourChef.cuisine}
                                quantity={cart.cart[val].quantity}/>
                )
                }

                </ScrollView>
                <View style={[{paddingTop:10,paddingBottom:10},this.state.moveUp?{flex:2}:{flex:1}]}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={[{fontWeight:'700',marginBottom:5},myStyles.myTexta]}>Delivery Tips</Text>
                        <View style={{flexDirection:'row'}}>
                            <TextInput  placeholder={'Add note(flat no,room no. etc)'} 
                                        onChangeText={(deliveryInfo)=>this.setState({deliveryInfo})} 
                                        style={[{borderWidth:1,borderColor:'rgba(0,0,0,.1)',padding:5,borderRadius:5,flex:1},myStyles.myText]}
                                        onFocus = {()=>this.setState({moveUp:true})}
                                        onBlur = {()=>this.setState({moveUp:false})}
                                        ></TextInput>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:20}}>
                                <Icon name="location-pin" size={24} color="#900"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',paddingLeft:50,paddingRight:50}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={[myStyles.myText,{fontSize:12,color:'rgba(0,0,0,.2)'}]}>SUBTOTAL:</Text>
                            <Text style={[myStyles.myText,{fontSize:12,color:'rgba(0,0,0,.2)'}]}>{cart.total}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={[myStyles.myText,{fontSize:12,color:'rgba(0,0,0,.2)'}]}>DISCOUNT:</Text>
                            <Text style={[myStyles.myText,{fontSize:12,color:'rgba(0,0,0,.2)'}]}>₦000</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                            <Text style={[myStyles.myTexta,{fontSize:18,color:'#900'}]}>TOTAL</Text>
                            <Text style={[myStyles.myTexta,{fontSize:18,color:'#900'}]}>₦{cart.total}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                            <Text style={[{fontSize:18,color:'#fff'},myStyles.myTexta]}>TOTAL</Text>
                            <Text style={{fontSize:18,color:'#fff'}}>00000</Text>
                        </View>
                    </View>
                    <View style={{flex:.5,justifyContent:'flex-start',alignItems:'center'}}>
                        <Button text="Proceed To Checkout"
                                textColor={[{color:'#fff'},myStyles.myTexta]}
                                event={this.proceed}
                                button={[{backgroundColor:colors.a,width:175,height:35,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',margin:0,shadowColor:'#000000',shadowRadius: 5,
                                shadowOpacity: .1,shadowOffset: {
                                    width: 0,
                                    height: 1
                                }}]}/>
                    </View>

                </View>
            </View>
        )
    }
}

export default ProceedToCheckOut

ProceedToCheckOut.propTypes={
    screenProps:propTypes.object.isRequired
}

const myStyles=StyleSheet.create({
    myText:{
        fontFamily:'Comfortaa-Regular',
        fontSize:14
    },
    myTexta:{
        fontFamily:'Comfortaa-Bold',
        fontSize:14
    }
})