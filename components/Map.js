import React from 'react'
import { MapView } from 'expo'
import Geocoder from 'react-native-geocoding'
import rsc from '../lib/resources'
import lib from '../lib/lib'
import Icon from './newComponents/Markers'

export default class Map extends React.Component {
    constructor(props){
        super(props)
        this.state={
            latlng:{
                latitude: 6.556088584481325,
                longitude: 3.362153358757496,
                latitudeDelta: 0.018001154790275642,
                longitudeDelta: 0.010187029838562012
                    },
             address:'', 
             loadtimes:0        
        }
        console.log(props)
        this.onRegChange = this.onRegChange.bind(this)
        this.getAddress = this.getAddress.bind(this)
    }

    onRegChange(region){
        const reg={
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: 0.018001154790275642,
            longitudeDelta: 0.010187029838562012
        }
        this.setState({latlng:reg},this.getAddress())
       console.log(region)
        //this.getAddress()
    }
    getAddress(){
        this.props.onLocate?this.props.onLocate(null):null
        
        const {latitude,longitude}=this.state.latlng
        Geocoder.setApiKey(rsc.googleApiKey)

        Geocoder.getFromLatLng(latitude, longitude)
        .then(
            json => {
              var address_component = json.results[0].address_components[0];
              let loc=json.results[0].formatted_address.split(",")[0].split(" "),newloc=[]
              for(let _=1;_<loc.length;_++){
                  newloc.push(loc[_])
              }
             let _loc = json.results[0].formatted_address.split(",")
             _loc[0]=newloc.join(" ")
             this.setState({address:_loc.join('')})
            },
            error => {
              alert(error);
            }
          )
        .then(()=>{
        })
        .then(()=>{
            (this.props.onLocate)?
                this.props.onLocate(this.state.address):
                null
        })
        .catch((e)=>console.log(e))
    }
    componentWillMount(){
        //navigator.geolocation.watchPosition((position) => {
        navigator.geolocation.getCurrentPosition((position) => {
            let latlng = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.018001154790275642,
                longitudeDelta: 0.010187029838562012,
            }
            if(this.state.loadtimes<1){
                this.setState({
                    latlng
                })
                this.getAddress()
            }
          });
    }
    
  render() {
    const{ region,cluster,onLocate,locate,chefsLocation } = this.props
    return (
      <MapView
        provider = { MapView.PROVIDER_GOOGLE }
        style={[{ flex: 1 },{...this.props.style}]}
        region={region}
        customMapStyle = { cluster? mapStyleA:mapStyleB }
        //liteMode={true}
        //onRegionChange = {this.props.onLocate?this.props.onLocate(null):null}
        mapPadding={{ top: 0, right: 0, bottom: 100, left: 0 }}
        //onRegionChangeComplete = {(e)=>console.log(e)}
        onRegionChangeComplete = {onLocate? this.onRegChange:null}
        showsUserLocation = {cluster? false: true}
        userLocationAnnotationTitle = {'Me'}
        initialRegion = {region}
        followsUserLocation = {locate?true:false}
        showsMyLocationButton = {locate?true:false}
        //showsMyLocationButton ={{margin:20}}
        showsPointsOfInterest = {locate?true:false}
      > 
        {
            (!locate)?
                <MapView.Marker
                        coordinate={region}
                        >
                        <Icon user={true}/>
                </MapView.Marker>:
                null
        }
        
        
        {(cluster && chefsLocation !==null)?
        chefsLocation.map((result,key) => (
            <MapView.Marker
                key={key}
                coordinate={ result.region }
                title={result.restaurant}
                description={result.restaurant}
                >
                <Icon restaurant={result.restaurant}/>
            </MapView.Marker>
            )):
            null
        }
      </MapView>
    );
  }
}



const mapStyleA=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]


  const mapStyleB=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "weight": 2.5
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]