import React,{Component} from 'react'
import Map from '../Map'
import Icon from './Markers'
import { View,Text } from 'react-native'
import lib from '../../lib/lib'


class Locate extends Component{
    constructor(props){
        super(props)
        this.state={
            street:null
        }
        this.onLocate=this.onLocate.bind(this)
    }

    onLocate(street){
        (street || this.state.street )?
        this.setState({street},console.log(this.state.street)):
        null

        
    }

    render(){
    return (
        <View   style={{
                    position:'absolute',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                    }}>
            <Icon user={true} style={{zIndex:1}}/>
            {
                
                <View style={[{zIndex:1,width:120,backgroundColor:'rgba(255,255,255,1)',padding:10},(this.state.street)?{opacity:1}:{opacity:0}]}>
                    <Text style={{fontSize:14,textAlign:'center',fontFamily:'Comfortaa-Bold',fontWeight:'bold'}}>Deliver To</Text>
                    
                    <Text   style={{fontSize:12,textAlign:'center',fontFamily:'Comfortaa-Regular'}}
                            numberOfLines={1} >{(this.state.street)?lib.stripCountry(this.state.street):null}</Text>
                </View>
            }
            
            <Map    style = {{position:'absolute',left:0,right:0,bottom:0,top:0}}
                    locate = {true}
                    onLocate = {this.onLocate}
                    />
        </View>
    )
}
}


export default Locate