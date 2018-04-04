import React ,{Component}from 'react'
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput ,StyleSheet} from 'react-native'
import {colors} from '../../styles/style'
import * as Animatable from 'react-native-animatable'
import Cuisine from './Cuisine'

class Cuisines extends Component{
    constructor(props){
        super(props)
        this.state={
            key:0
        }
        this.onhandleClick=this.onhandleClick.bind(this)
    }
    onhandleClick(key){
        this.setState({key},
            ()=>console.log(key)
        )
    }
    render(){
        return (
            <ScrollView showsHorizontalScrollIndicator={false}
                        horizontal={true}> 
                {
                    [0,0,0,0,0].map((val,key)=>
                    <Cuisine cui = {'home made'}
                             evnt = {()=>this.onhandleClick(key)}
                             key = {key}
                             number = {key}
                             active = {this.state.key}/>
                )
                }

            </ScrollView>
        )
    }
}


export default Cuisines 