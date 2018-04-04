import React,{Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native'
import {colors} from '../../styles/style'
import Dimensions from 'Dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MenuUnswipped from './MenuUnswipped'
import MenuSwipped from './MenuSwipped'
import Swipeable from 'react-native-swipeable'

class Menu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Swipeable  style ={styles.cont} 
                        onRef={ref => this.swipeable = ref}
                        rightContent = {
                        <MenuSwipped/>}
                        rightActionActivationDistance={Dimensions.get('window').height*8/11/4}
                        onRightActionRelease={()=>console.log('Hi')}>
                <MenuUnswipped  name = {'Rainbow Burrito Bowl'}
                                description = {'React Native comes with an amazing animation library called Animated. To use it with an icon, simply create an animated component with this line: const AnimatedIcon = Animated.createAnimatedComponent(Icon)'}
                                imageUrl = {'https://res.cloudinary.com/bukka/image/upload/v1459090972/chefmenu/custom:1459088741794bees/menufxthree/menu.jpg'}
                                cost = {500}/>
            </Swipeable>
        )
    }
}

export default Menu

const styles=StyleSheet.create({
    cont:{
        height:Dimensions.get('window').height*8/11/4,
        width:Dimensions.get('window').width,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        margin:10,
        marginLeft:0,
        marginRight:0,
        shadowColor:'#000000',
        shadowOpacity: .2,
        shadowOffset: {
            width: 1,
            height: 2
        },
        elevation: 3,
        backgroundColor : "#0000"
    }
})