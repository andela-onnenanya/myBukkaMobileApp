import React,{Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import {colors} from '../../styles/style'
import Dimensions from 'Dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import propTypes from 'prop-types'

class  MenuUnswipped extends Component{ 
    constructor(props){
        super(props)
        this.state={
            quantity:1
        }
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
    }
    add(){
        this.setState({quantity:this.state.quantity+1})
        }
    
    subtract(){
        if(this.state.quantity>1)
        this.setState({quantity:this.state.quantity-1})    
    }
    
    
    render(){ 
        return(
    <TouchableOpacity style={[styles.cont]}>
        <View style={styles.imageCont}>
            <Image  source = {{uri:this.props.imageUrl}}
                    style = {styles.imageStyle}/>
        </View>
        <View style={styles.textCont}>
            <Text   numberOfLines={1}
                    style={styles.name}>{this.props.name}</Text>
            <Text numberOfLines={2} 
                  style={styles.discription}>
                {this.props.description}
            </Text>
            <Text numberOfLines={1}
                  style={styles.amount}>
                ₦{this.props.cost*this.state.quantity}
            </Text>
        </View>
        <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={this.add} >
                <Icon   name = "add"
                        size = {18} 
                        color = {'rgba(0,0,0,.2)'} />
            </TouchableOpacity>
            <Text numberOfLines={1}
                  style={styles.quant}>
                  {this.state.quantity}
            </Text>
            <TouchableOpacity onPress={this.subtract} >
            <Icon   name = "remove"
                    size = {18} 
                    color = {'rgba(0,0,0,.2)'} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
    )
    }
}

MenuUnswipped.propTypes={
    name:propTypes.string.isRequired,
    description:propTypes.string.isRequired,
    imageUrl:propTypes.string.isRequired,
    cost:propTypes.number.isRequired
}

export default MenuUnswipped


const styles=StyleSheet.create({
    cont:{
        backgroundColor:'white',
        height:Dimensions.get('window').height*8/11/4,
        width:'100%',
        flexDirection:'row',
        borderTopRightRadius:5,
        borderBottomRightRadius:5
    },
    imageCont:{
        flex:4,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    imageStyle:{
        height:Dimensions.get('window').height*8/11/4,
        width:Dimensions.get('window').height*8/11/4, 
    },
    textCont:{
        justifyContent:'space-around',
        flex:6,
        paddingLeft:10,
        paddingRight:10
    },
    name:{
        fontFamily:'Comfortaa-Bold',
        fontSize:16
    },
    discription:{
        fontFamily:'Comfortaa-Bold',
        fontSize:12,
        color:'rgba(0,0,0,.2)'
    },
    amount:{
        fontFamily:'Comfortaa-Bold',
        fontSize:16,
        color:colors.a
    },
    buttonStyle:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    quant:{
        fontFamily:'Comfortaa-Bold',
        fontSize:18
    }
})