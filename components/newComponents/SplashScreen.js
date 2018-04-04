import React from 'react';
import styles,{colors} from '../../styles/style'
import * as Animatable from 'react-native-animatable'
import { WaveIndicator } from 'react-native-indicators';

export default class splashScreen extends React.Component {
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
      <Animatable.View style={[{
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:colors.a,
                              }]}
                        //iterationCount={"infinite"}
                        animation={(this.state.splash)? null:"fadeOut"}
                        >
              <WaveIndicator color='white' size={70} waveFactor={0.7}/>
           
      </Animatable.View>
    );
  }
}
