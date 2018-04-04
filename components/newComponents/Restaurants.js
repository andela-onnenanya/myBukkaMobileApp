import React,{Component} from 'react'
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput ,StyleSheet} from 'react-native'
import {colors} from '../../styles/style'
import Restaurant from './Restaurant' 

class Restaurants extends Component{
    constructor(props){
        super(props)
        this.state={
            key:0
        }
        this.onHandleSelect=this.onHandleSelect.bind(this)
    }

    onHandleSelect(key){
        this.setState({key},
            ()=>console.log(key)
        )
    }

    render (){
        return(
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
            {[0,0,0,0,0].map((val,key)=>
                <Restaurant evnt = {()=>this.onHandleSelect(key)}
                            key = {key}
                            active = {this.state.key}
                            number = {key}
                            rating = {3}
                            name = {'Stacks And Racks'}
                            cuisine = {'African'}
                            dist = {0.5}
                            img = {'https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg'} />
            )  
            }
            </ScrollView>
        )
    }
}

export default Restaurants