import React,{Component} from 'react'
import {View,ScrollView,StyleSheet,Text} from 'react-native'
import {colors} from '../../styles/style'
import lib from '../../lib/lib'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import rsc from '../../lib/resources'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import Dimensions from 'Dimensions'

const GooglePlaceSearch = () =>(
    <GooglePlacesAutocomplete
                    placeholder='Delivery Location'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    }}
                    
                    getDefaultValue={() => ''}
                    
                    query={{
                      // available options: https://developers.google.com/places/web-service/autocomplete
                      key: rsc.googleApiKey,
                      language: 'en', // language of the results
                    }}
                    
                    styles={style}
                    
                    currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GooglePlacesSearchQuery={{
                      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                      rankby: 'distance'
                    }}
                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    renderLeftButton={()  => <View style={{justifyContent:'center',alignItems:'flex-start',paddingLeft:10}}>
                                                    <Icon       name = "location-on" 
                                                                size = {25} 
                                                                color = {colors.c} />
                                             </View>}
                    renderRightButton={()=><Animatable.Text animation="myFancyAnimation" ease={'ease-in'} iterationCount="infinite" style={{position:'absolute',backgroundColor:'black',height:2,width:50,bottom:0}}>
                                            </Animatable.Text>
                                            }
                    />

                    
)
Animatable.initializeRegistryWithDefinitions({
    myFancyAnimation: {
        0: {
            translateX: Dimensions.get('window').width,
          },
        0.25:{
            translateX: Dimensions.get('window').width/2,
        },
        0.5: {
            translateX: 0,
        },
        0.75:{
            translateX: (Dimensions.get('window').width)/2,
        },
        0.85:{
            translateX: (Dimensions.get('window').width)*3/4,
            scaleX:.5
        },
        1:{
            translateX: Dimensions.get('window').width,
            scaleX:0.3
        }

    }
  });

const style = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:10,
        position:'relative'
    },
    textInputContainer: {
      width: '100%',
      backgroundColor:'white',
      shadowColor:'#000000',
      shadowOpacity: .1,
      shadowOffset: {
          width: 0,
          height: 2
      },
      elevation: 3,
      borderColor:'white',
      paddingRight:0
    },
    textInput:{
      fontFamily:'Comfortaa-Regular',
      fontSize:14
    },
    description: {
      fontWeight: 'bold',
      fontFamily:'Comfortaa-Bold',
      fontSize:14
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
    powered:{
      height:2,
      width:2
    }
})

export default GooglePlaceSearch