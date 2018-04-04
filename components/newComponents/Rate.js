import React,{Component} from 'react'
import { Text,TouchableOpacity,StyleSheet,ScrollView,View } from 'react-native'
import {colors} from '../../styles/style'
import propTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RateButton from './RateButton'

class Rate extends Component {

    constructor(props){
        super(props)
        this.state={
            show:false,
            rating:'Top Rated'
        }
    }


    render(){
    return(
        <View  style={styles.container}>
            <RateButton evnt = {()=>this.setState({show:!this.state.show})}
                        colour = {colors.a}
                        rating = {this.state.rating}
                        arrow = {(this.state.show)?"keyboard-arrow-right":"keyboard-arrow-down"}/>
        {   (this.state.show)?
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false} >
                <RateButton evnt = {()=>this.setState({
                                                        rating:'Distance',
                                                        show:false
                                                    })}
                    colour = {'transparent'}
                    rating = {'Distance'}/>
                <RateButton evnt = {()=>this.setState({
                                                        rating:'Ratings',
                                                        show:false
                                                    })}
                    colour = {'transparent'}
                    rating = {'Ratings'}/>
                
            </ScrollView>:
            null
        }
        </View>
    )
    }
}

Rate.propTypes={
    evnt:propTypes.func.isRequired
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default Rate