import React,{Component} from 'react';
import { View,Text,TouchableOpacity,TextInput,Alert,StyleSheet } from 'react-native';
import styles,{colors} from '../../styles/style'
import Inputs from '../Inputs'
import BoldText from '../BoldText'
import Img from '../Images'
import propTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../Button'
import SpinnerIndicator from '../SpinnerIndicator'
import lib from '../../lib/lib'
import SocialShare from './SocialShare'

export default class PaymentAndOrder extends Component{
    constructor(props){
        super(props)
        this.state={
            cart:true,
            payment:true,
            order:true,
            place:false,
            actve:'payment'
        }
    }

    render(){
        return(
            <View style = {myStyles.bigcont}>
                <View style={[myStyles.bigcont,{alignItems:'center',justifyContent:'center' ,backgroundColor:'rgba(0,0,0,.05)'}]}>
                    <Text style={myStyles.textCheckout}>Checkout</Text>
                    <View style={{justifyContent:'space-around',height:50,alignSelf:'stretch',paddingLeft:30,paddingRight:30,paddingTop:30}}>
                        <View style = {myStyles.conta}>
                        {   (this.state.cart && this.state.payment)?
                            <Icon   name = "checkbox-marked-circle" 
                                    size = {25} 
                                    color = {colors.a} />:
                            <Icon   name = "checkbox-blank-circle-outline" 
                                        size = {25} 
                                        color = {colors.a} />
                        }
                            
                            <Text style = {[myStyles.line,(this.state.cart && this.state.payment)?{backgroundColor:colors.a}:{backgroundColor:'rgba(0,0,0,.2)'}]}></Text>
                            {   (this.state.cart && this.state.payment && this.state.order)?
                                <Icon   name = "checkbox-marked-circle" 
                                        size = {25} 
                                        color = {colors.a} />:
                                (this.state.cart && this.state.payment)?
                                <Icon   name = "checkbox-blank-circle-outline" 
                                        size = {25} 
                                        color = {colors.a} />:
                                <Icon   name = "circle" 
                                        size = {25} 
                                        color = {'rgba(0,0,0,.2)'} />

                            }
                            
                            <Text style = {[myStyles.line,(this.state.cart && this.state.payment && this.state.order)?{backgroundColor:colors.a}:{backgroundColor:'rgba(0,0,0,.2)'}]}></Text>
                            {   (this.state.cart && this.state.payment && this.state.order && this.state.place)?
                                    <Icon   name = "checkbox-marked-circle" 
                                            size = {25} 
                                            color = {colors.a} />:
                                (this.state.cart && this.state.payment && this.state.order )?
                                    <Icon   name = "checkbox-blank-circle-outline" 
                                            size = {25} 
                                            color = {colors.a} />:
                                    <Icon   name = "circle" 
                                            size = {25} 
                                            color = {'rgba(0,0,0,.2)'} />

                            }
                        </View>
                        <View style={[myStyles.tabnameCont,{marginLeft:-10,marginRight:-10,marginTop:30}]}>
                            <Text style={[myStyles.textCheckout,(this.state.actve==='cart')?{color:colors.a}:{color:'rgba(0,0,0,.5)'}]}>Cart</Text>
                            <Text style={[myStyles.textCheckout,(this.state.actve==='payment')?{color:colors.a}:{color:'rgba(0,0,0,.5)'}]}>Payment</Text>
                            <Text style={[myStyles.textCheckout,(this.state.actve==='order')?{color:colors.a}:{color:'rgba(0,0,0,.5)'}]}>Order</Text>
                        </View>
                    </View>
                </View>
                <View style = {{flex:3}}></View>
                <View style = {{flex:1}}></View>
            </View>
        )
    }
}


const myStyles = StyleSheet.create({
    bigcont:{
        flex:1,
    },
    conta:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        flex:1,
        height:2,
        marginLeft:-5,
        marginRight:-5,
        backgroundColor:'black'
    },
    textCheckout:{
        fontFamily:'Comfortaa-Regular',
        fontSize:14,
        color:'rgba(0,0,0,.5)'
    },
    tabnameCont:{
       // width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})