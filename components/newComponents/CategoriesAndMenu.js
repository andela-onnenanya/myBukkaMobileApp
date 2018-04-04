import React,{Component} from 'react'
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native'
import {colors} from '../../styles/style'
import * as Animatable from 'react-native-animatable'
import { WaveIndicator } from 'react-native-indicators'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Position from './Position'
import HeaderMenu from './HeaderMenu'
//import african from '../../assets/images/cuisines/african.png' 
import Cuisines from './Cuisines'
import Rate from './Rate'
import Restaurants from './Restaurants'
import Map from '../Map'
import Categories from './Categories'
import Menu from './Menu'
import MenuSwipped from './MenuSwipped'

class CategoriesAndMenu extends Component{
    constructor(props){
        super(props)
        this.state={
          splash: true,
        }
        this.set=this.set.bind(this)
      }
    
      set(val){
        console.log(this.state)
        this.setState({ splash: false });
        clearTimeout(val);
        console.log(this.state)
      }
    componentDidMount() {
      let setter=setTimeout(()=>this.set(setter), 5000)
    }
      
      render() {
        return (
          //(this.state.fontLoaded)?
          //<Root store={store}/>:
         // null
          //<New store={store} />
          <View style={{backgroundColor:'white',flex:1,position:'relative'}}>
              <View style={{height:20}}></View>
              <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'stretch',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                  <Position location={'Mahim West'}
                            evnt={()=>console.info('Yeh!!')}/>
                  <HeaderMenu searchEvnt={()=>console.info('yh!!')}
                              menuEvnt={()=>console.log('yh!!')}/>
                </View>
              </View>
              <View style={{flex:2,marginLeft:10,borderTopColor:'rgba(0,0,0,.1)',borderTopWidth:1}}>
                    <View style={{flex:.8,justifyContent:'flex-end'}}>
                        <Text style={{fontFamily:'Comfortaa-Bold',fontSize:17}}>Categories  &bull;  100</Text>
                    </View>
                    
                    <Categories/>
              </View>
              <View style={{flex:8,position:'relative'}}>
                <ScrollView  style={{flex:1}} showsVerticalScrollIndicator={false} >
                    <Menu/>
                    <Menu/>
                    <Menu/>
                    <Menu/>
                    <Menu/>
                </ScrollView>
              </View>
          </View>
        );
      }
    }
    
export default CategoriesAndMenu