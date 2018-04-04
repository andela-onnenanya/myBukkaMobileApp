import React from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native'
import {colors} from '../../styles/style'
import propTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Position =({location,evnt})=>(
    <TouchableOpacity   style={styles.container}
                        onPress={evnt}>
        <Text style={styles.textLocation}>
            {location}
        </Text>
        <Text style={styles.textIcon}>
            <Icon   name="keyboard-arrow-down" 
                    size={20} 
                    color={colors.c}/>  
        </Text>
   </TouchableOpacity>
)

Position.propTypes={
    location:propTypes.string.isRequired,
    evnt:propTypes.func.isRequired
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    textLocation:{
        textAlign:'center',
        fontSize:24,
        fontFamily:'Comfortaa-Bold'
    },
    textIcon:{
        textAlign:'center',
        fontFamily:'Comfortaa-Bold',
        marginLeft:5
    }
})

export default Position