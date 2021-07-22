import React,{useState} from 'react';
import { View,Text, StyleSheet,TextInput, Button,TouchableHighlight, Alert, ScrollView } from 'react-native';

import shortid from 'shortid';

import DateTimePickerModal from "react-native-modal-datetime-picker";


const Formulario = ({reportes, setReportes, toggleModal}) =>{

    const [fecha, guardarfecha] = useState('');
    const [fenoGeo, guardarFenomenos] = useState('');
    const [estrucGeo, guardarEstructuras] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      const opciones = {year: 'numeric', month: 'long', day: "2-digit"}
      guardarfecha(date.toLocaleDateString('es-ES', opciones));
      hideDatePicker();
    };

    // Crear nuevo reporte
    const crearNuevoReporte = () => {
        // validar
        if(fecha.trim() === '' ||
           fenoGeo.trim() === '' ||
           estrucGeo.trim() === '')
            {
                //falla la validacion
                mostrarAlerta();

                return;
            }
        //crear un nuevo reporte;
        const reporte = { fecha, fenoGeo, estrucGeo};

        reporte.id = shortid.generate();

        //console.log(reporte);

        //Agregar al State
        const NuevoReporte = [...reportes, reporte];
        
        setReportes(NuevoReporte);

        //Regresar al Admin
        toggleModal(false);
    };

    //Muestra la alerta
    const mostrarAlerta = () => {
        Alert.alert(
            'ERROR',//titulo
            'Todos los campos son obligatorios',//mensaje
            [{
                text: 'OK' //Arreglo de botones
            }]
        )
    };

    return (
        <>
            <ScrollView style={styles.formulario}>
               
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <View>
                        <Button title="Seleccionar la fecha" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            locale = 'es_ES'
                            headerTextIOS="Elige una Fecha"
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarfecha(texto)}
                        value ={fecha}
                    />            
                </View>

                <View>
                    <Text style={styles.label}>Fenomeno Geologico:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarFenomenos(texto)}
                    />            
                </View> 

                <View>
                    <Text style={styles.label}>Estructura Geologica:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarEstructuras(texto)}
                    />            
                </View>

                <View>
                    <TouchableHighlight onPress={() => crearNuevoReporte()} style = {styles.btnSubmit}>
                        <Text style = {styles.textoSubmit}>Crear Reporte</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    formulario:{
        backgroundColor: '#fff',
        borderRadius:10,
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical:10
    },
    label:{
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 7
    },
    input:{
        marginTop:10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 30
    },
    btnSubmit:{
        padding:10,
        backgroundColor : '#676c6e',
        borderRadius : 30,
        marginVertical: 15
    },
    textoSubmit:{
        color: '#fff',
        fontWeight:'bold',
        textAlign: 'center'
    }
});

export default Formulario;