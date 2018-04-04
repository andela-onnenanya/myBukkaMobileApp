import React from 'react'
import { View,TouchableOpacity,StyleSheet } from 'react-native'
import {colors} from '../../styles/style'
import propTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

const HeaderMenu=({searchEvnt,menuEvnt})=>(
    <View style={styles.container}>
        <Icon   name="search" 
                size={25} 
                color={colors.c}
                onPress={searchEvnt}/>
        <Icon   name="format-list-bulleted" 
                size={25} 
                color={colors.c}
                onPress={menuEvnt}/>
    </View>
)

HeaderMenu.propTypes={
    searchEvnt:propTypes.func.isRequired,
    menuEvnt:propTypes.func.isRequired
}


const styles = {
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        minWidth:60
    }
}

export default HeaderMenu