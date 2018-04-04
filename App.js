import React from 'react';
import { View,Text,TouchableOpacity,Animated,Image,Easing,ScrollView,TextInput } from 'react-native';
import styles,{colors} from './styles/style'
import Inputs from './components/Inputs'
import MenuIconButton from './components/MenuIconButton'
import BoldText from './components/BoldText'
import rsc from './lib/resources'
import Img from './components/Images'
import KitchenDetails from './components/KitchenDetails'
import MenuNavigation from './components/MenuNavigations'
import SpinnerIndicator from './components/SpinnerIndicator'
import MenuItem from './components/MenuItems'
import propTypes from 'prop-types'
import MenuItemsSwipped from './components/MenuItemsSwipped'
import MenuItemsUnswipped from './components/MenuItemsUnswipped'
import Swipeable from 'react-native-swipeable'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './components/Button'
import MoreItemInfo from './components/MoreItemInfo'
import store from './data_Container/store'
import lib from './lib/lib'
import Root from './components/navigator/Navigation'
import { Font } from 'expo'
import * as Animatable from 'react-native-animatable'
//import New from './components/ShopContainer'
//import New from './components/Pay'
//import New from './components/ChefAndMenu'
//import PaymentAndOrder from './components/newComponents/PaymentAndOrder'
import New from './components/ProceedToCheckOut'
//import New from './components/Chef'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from 'react-native-indicators'
import SplashScreen from './components/newComponents/SplashScreen'
import RestaurantAndCuisine from './components/newComponents/RestaurantAndCuisine'
import CategoriesAndMenu from './components/newComponents/CategoriesAndMenu'
import Search from './components/newComponents/Search'
//import New from './components/newComponents/MoreItemInfo'
import Locate from './components/newComponents/Locate'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fontLoaded: false,
    }
  }


  async componentDidMount() {
    await Font.loadAsync({
      'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
      'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
      'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  
  render() {
    return (
      //(this.state.fontLoaded)?
      //<Root store={store}/>:
     // null
      //<New store={store} />
      //<SplashScreen/>
      
      //<RestaurantAndCuisine/>:
      //<CategoriesAndMenu/>:
      /*<New  navigation ={ {state:{params:{
            imgsrc:'https://res.cloudinary.com/bukka/image/upload/v1459089132/chefmenu/custom:1459088741794bees/menufxone/menu.jpg',
            foodPrice:500,
            cuisine:'Continental',
            foodName:'Rice and Beans',
            evnt:()=>console.log('hey!!')
      }}}}
      screenProps={{store:{cart:{cart:{}}}}}/>:*/
      (this.state.fontLoaded)?
      //<PaymentAndOrder/>:
      /*<New screenProps={{
        cart:{
          cart:{'Rice and Beans':{
                                price:3500,
                                cuisine:'continental',
                                quantity:5
                              }}},
        chef:{
          yourChef:{
            cuisine:'continental'
          }
        }
    }} />:*/
      //<Search/>:
      //<RestaurantAndCuisine/>:
      <Locate/>:
      null
    );
  }
}
