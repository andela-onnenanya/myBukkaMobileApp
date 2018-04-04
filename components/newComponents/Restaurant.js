import React from 'react'
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput ,StyleSheet} from 'react-native'
import {colors} from '../../styles/style'
import * as Animatable from 'react-native-animatable'
import african from '../../assets/images/cuisines/african.png' 
import * as cuisineImages from '../../assets/images/cuisines/cuisineImages'
import lib from '../../lib/lib'
import propTypes from 'prop-types'
import Dimensions from 'Dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Restaurant = ({evnt,rating,name,cuisine,dist,img,active,number}) =>(
    <TouchableOpacity style={styles.container} onPress={evnt}>
        <View style={styles.topCont}>
            <View style={styles.imageCont}>
                <Image source={{uri:img}}
                       style={styles.aspectrat}/>
            </View>
            <View style={styles.nameCont}>
                <Text style={[styles.name,(active===number)?{color:colors.a}:{color:colors.c}]}>{name}</Text>
            </View>
            <View style={styles.moreInfo}>
                <Text style={styles.info}>{cuisine}</Text>
            </View>
        </View>
        <View style={styles.cuisineInfo}>
            <Text style={[styles.score,styles.name,styles.distance,(active===number)?{color:colors.a,borderColor:colors.a}:{color:colors.c,borderColor:colors.c}]}>
                {dist+" km"}
            </Text>
            <Text style={[styles.name,{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
                {
                    lib.starred(rating).map((val,key)=>
                    <Icon   name = "star" 
                            key = {key}
                            size = {12} 
                            color = {(active===number)?colors.a:colors.c} />
                )
                }
                {
                    lib.starred(5-rating).map((val,key)=>
                    <Icon   name = "star-border" 
                            size = {12} 
                            key = {key}
                            color = {(active===number)?colors.a:colors.c} />
                )

                }
            </Text>
        </View>
    </TouchableOpacity>
)

export default Restaurant

Restaurant.propTypes={
    evnt:propTypes.func.isRequired,
    rating:propTypes.number.isRequired,
    name:propTypes.string.isRequired,
    cuisine:propTypes.string.isRequired,
    dist:propTypes.number.isRequired,
    img:propTypes.string.isRequired,
    active:propTypes.number.isRequired,
    number:propTypes.number.isRequired
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:Dimensions.get('window').width/2.2-20,
        height:Dimensions.get('window').height/4,
        padding:10,
        borderRadius:5,
        shadowColor:'#000000',
        shadowOpacity: .1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 3,
        marginLeft:10,
        alignSelf:'center'
    },
    aspectrat:{
        width:'70%',
        height:'100%'
    },
    distance:{
        padding:3, 
        paddingLeft:5,
        paddingRight:5, 
        fontSize:10
    },
    name:{
        color:colors.a,
        fontSize:12,
        fontFamily:'Comfortaa-Regular',
    },
    info:{
        color:'rgba(0,0,0,.5)',
        fontSize:10,
        fontFamily:'Comfortaa-Bold',
        marginRight:5
    },
    cuisineInfo:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    score:{
        borderColor:colors.a,
        color:colors.a,
        borderWidth:1,
        padding:0,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5
    },
    moreInfo:{
        flex:1,
        flexDirection:'row'
    },
    nameCont:{
        flex:1
    },
    imageCont:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5
    },
    topCont:{
        flex:4,
        borderBottomColor:'rgba(0,0,0,.1)',
        borderBottomWidth:StyleSheet.hairlineWidth
    }
})