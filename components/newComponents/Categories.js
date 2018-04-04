import React,{Component} from 'react'
import {ScrollView,StyleSheet} from 'react-native'
import {colors} from '../../styles/style'
import propTypes from 'prop-types'
import Category from './Category'
import lib from '../../lib/lib'

export default class Categories extends Component{
    constructor(props){
        super(props)
        this.state ={
            key:0
        }
        this.onhandleSelect = this.onhandleSelect.bind(this)
        }

        onhandleSelect(key){
            this.setState({key},()=>console.log(key))
        }

        render (){
            return(
                <ScrollView style={[styles.cont]} 
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false} >  
                                {
                                    ['continental','African','Italian','french','fast food'].map((val,key)=>
                                    <Category number = {key}
                                              active = {this.state.key}
                                              key = {key}
                                              evnt = {()=>this.onhandleSelect(key)}
                                              categ = {lib.format(val)}/>
                                )
                                } 
                </ScrollView>
                
            )
        }
}

const styles = StyleSheet.create({
    cont:{
        flex:1
    }
})
