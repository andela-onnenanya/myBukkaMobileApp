import React,{Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native'
import {colors} from '../../styles/style'
import Dimensions from 'Dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MenuSwipped = () =>(
    <View style={styles.parent}>
        <View style={styles.cont}>
            <Icon   name = "shopping-basket"
                    size = {40} 
                    color = {colors.b} />
        </View>
        <View style={styles.conta}>

        </View>
    </View>
)

export default MenuSwipped

const styles = StyleSheet.create({
    cont:{
        backgroundColor:colors.a,
        height:Dimensions.get('window').height*8/11/4,
        width:Dimensions.get('window').height*8/11/4,
        justifyContent:'center',
        alignItems:'center'
    },
    conta:{
        flex:1,
        backgroundColor:colors.a
    },
    parent:{
        flex:1,
        flexDirection:'row'
    }
})