import React,{useState} from 'react';
import { View,Text, StyleSheet, Platform, FlatList,Button,TouchableHighlight} from 'react-native';

import Modal from 'react-native-modal'
import Formulario from './componentes/Formulario';

import MisReportes from './componentes/MisReportes';
import Targetas from './componentes/Targetas';

const App = () => {
  //Definir el state de Riesgos
  const [reportes, setReportes] = useState([
    { id: "1", fecha: '07/04/2021', fenoGeo: 'Sismos', estrucGeo: "Fallas"},
    { id: "2", fecha: '08/05/2021', fenoGeo: 'Tsunamis', estrucGeo: "Fractura"},
    { id: "3", fecha: '09/06/2021', fenoGeo: 'Erosion', estrucGeo: "Talud"}
  ]);

  // Eliminar los Reportes
  const eliminarReporte = id =>{
    setReportes((reportesActuales) =>{
      return reportesActuales.filter(reportes => reportes.id !== id);
    })
  }

  //Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () =>{
    setModalVisible(!isModalVisible);
  }

  return (
  
      <View style={styles.contenedor}>
        <View style ={styles.ConTitulo}>
          <Text style={styles.titulo}>Reportes de Riesgo</Text>
        </View> 
        
        <View>
            <View style={styles.ConMostrar}>
              <TouchableHighlight onPress={toggleModal} style = {styles.btnMostrar}>
                <Text style = {styles.textoMostrar}>Agregar Reporte</Text>
              </TouchableHighlight>
            </View>
          <Modal isVisible={isModalVisible}>
            
            <View style={styles.ConMostrar}>
              
              <TouchableHighlight onPress={toggleModal} style = {styles.btnMostrar}>
                <Text style = {styles.textoMostrar}>Cancelar Reporte</Text>
              </TouchableHighlight>
              
              <Targetas/>

            </View>
          </Modal>
        </View>

        <Text style={styles.titulo}>{reportes.length > 0 ? 'Administra tus Reportes' : 'No hay Reportes'}</Text>
        
        <FlatList
          data={reportes}
          renderItem = { ({item}) => <MisReportes MisReportes={item} eliminarReporte={eliminarReporte}/> }
          keyExtractor={reportes => reportes.id}
        />

      </View>
     
  );
};

const styles = StyleSheet.create({
contenedor:{
  backgroundColor: '#55555a',
  flex:1
},

titulo:{
  color: '#fff',
  marginTop: Platform.OS == 'ios' ? 40 : 10,
  marginTop:10,
  marginBottom: 10, 
  fontSize:24,
  textAlign: 'center',
  fontWeight:'bold'
},
btnMostrar:{
  padding:10,
  backgroundColor : '#8e8d90',
  borderRadius : 30,
  width: '60%'
},
textoMostrar:{
  color: '#fff',
  fontWeight:'bold',
  textAlign: 'center'
},
ConMostrar:{
  alignItems:'center'
},
ConTitulo:{
  backgroundColor: '#27272a',
  marginBottom:10
}
});

export default App;
