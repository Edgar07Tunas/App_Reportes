import React from 'react';

import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const MisReportes = ({MisReportes, eliminarReporte}) => {

    const dialogoEliminar = id =>{
        eliminarReporte(id)
    }

    return(
        <View style = {styles.ConReportes}>   

            <View>
                <Text style = {styles.label} >Fecha:</Text>
                <Text style = {styles.texto}>{MisReportes.fecha}</Text>
            </View>

            <View>
                <Text style = {styles.label}>Fenomenos Geologicos:</Text>
                <Text style = {styles.texto}>{MisReportes.fenoGeo}</Text>
            </View>

            <View>
                <Text style = {styles.label}>Estructuras Geologicos:</Text>
                <Text style = {styles.texto}>{MisReportes.estrucGeo}</Text>
            </View>
            
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(MisReportes.id)} style = {styles.btnEliminar}>
                    <Text style = {styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ConReportes:{
        backgroundColor: '#fff',
        borderColor: '#8e8d90',
        borderStyle: 'solid',
        marginVertical: 5,
        marginHorizontal:10,
        borderBottomWidth:7,
        borderRightWidth:7,
        borderRadius:20,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:7
    },
    texto:{
        fontSize: 16
    },
    btnEliminar:{
        padding:10,
        backgroundColor : '#8e8d90',
        borderRadius : 30,
    },
    textoEliminar:{
        color: '#fff',
        fontWeight:'bold',
        textAlign: 'center'
    }
})

export default MisReportes