import React,{Component} from 'react'
import {View} from 'react-native'
import Search from './Search'

class ChangeDeliveryLocation extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
    return(
        <Search deliveryLocation={true} 
                screenProps={this.props.screenProps} 
                navigation={this.props.navigation} />
    
    )
    }
}

export default ChangeDeliveryLocation