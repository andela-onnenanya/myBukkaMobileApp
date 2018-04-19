import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import ShopContainer from '../ShopContainer'
import MenuFood from '../Menu'
import MoreItemInfo from '../MoreItemInfo'

const Menu = StackNavigator({
    menu:{
      screen: MenuFood,
      navigationOptions:{
        header: false,
      }
    },
    moreiteminfo: { 
      screen: MoreItemInfo,
      navigationOptions: {
        header: false,
      }
     }
  })

  
class  MenuList extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  
  render() {
    return( 
      <Menu screenProps={this.props.screenProps} />
    )
  }
}

export default MenuList