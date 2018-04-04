import React from 'react'
import { Text, StyleSheet,TouchableOpacity} from 'react-native'
import {colors} from '../../styles/style'
import propTypes from 'prop-types'

const Category = ({categ,number,active,evnt})=>(
    <TouchableOpacity   style={[styles.cont]} 
                        onPress={evnt} >
        <Text style={[styles.textcont,,(number===active)?{borderColor:colors.a,color:colors.a}:{borderColor:colors.c,color:colors.c}]}>
            {'#'+categ}
        </Text>
    </TouchableOpacity> 
)

Category.propTypes={
    categ:propTypes.string.isRequired,
    number:propTypes.number.isRequired,
    active:propTypes.number.isRequired,
    evnt:propTypes.func.isRequired,
}

export default Category


const styles = StyleSheet.create({
    cont:{
        alignSelf:'center'
    },
    textcont:{
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        alignSelf:'center',
        justifyContent:'center',
        fontFamily:'Comfortaa-Bold',
        borderRadius:5,
        fontSize:13,
        borderWidth:1, 
        borderColor:colors.c,
        color:colors.c,
        marginRight:10
    }
})