import React,{Component} from 'react'
import {View,ScrollView,StyleSheet,Text,Image} from 'react-native'
import {colors} from '../../styles/style'
import propTypes from 'prop-types'
import Category from './Category'
import lib from '../../lib/lib'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import rsc from '../../lib/resources'
import GooglePlacesSearch from './GooglePlaceSearch'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:20}}></View>
                <View style={{height:40,paddingRight:10,paddingLeft:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Icon   name = "arrow-left" 
                                size = {25} 
                                color = {colors.c} />
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Image  source={{uri:'https://res.cloudinary.com/bukka/image/upload/v1459091493/custom:1459088741794bees/profile_image.jpg'}}
                                    style={{
                                        width:30,
                                        height:30,
                                        borderRadius:15
                                    }}/>
                            <Text style={{fontWeight: 'bold',fontFamily:'Comfortaa-Bold',fontSize:16}} > For Ibukun</Text>
                            <Icon   name = "chevron-down" 
                                    size = {25} 
                                    color = {colors.c} />
                        </View>
                        <Icon   name = "keyboard-backspace" 
                                size = {12} 
                                color = {'white'} />
                    </View>
                </View>
                <View style={{backgroundColor:'white',flex:1}}>
                    < GooglePlacesSearch/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
      container:{
          backgroundColor:'white'
      },
      textInputContainer: {
        width: '100%',
        backgroundColor:'white',
        borderBottomColor:'white',
        shadowColor:'#000000',
        shadowOpacity: .1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 3,
      },
      textInput:{
        fontFamily:'Comfortaa-Regular',
        fontSize:14
      },
      description: {
        fontWeight: 'bold',
        fontFamily:'Comfortaa-Bold',
        fontSize:14
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      },
      powered:{
        height:2,
        width:2
      }
})