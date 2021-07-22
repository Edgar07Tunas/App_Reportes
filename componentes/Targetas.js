import  React, {useState} from 'react';
import { Text, View, ScrollView,StyleSheet,TextInput,TouchableHighlight, CheckBox} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

//Calendario
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect } from 'react/cjs/react.production.min';
//Fin Calendario

import Formulario from './Formulario';

const Targetas = () =>{
        const[nombreReorte,guardarNombre] = useState('');
        const[fecha, guardarfecha] = useState('');
        const[sector, guargarSector] = useState('');
        const[direccion, guardarDireccion] = useState('');
        const[colonia, guardarColonia] = useState('');
        const[fenomenos, guardarFenomenos] = useState([]);
        const[estructuras, guardarEstructuras] = useState([]);
       

        //Calendario
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
        //Fin calendario
        
        //Check fenomenos



    return(
        <ScrollView>
            <ScrollView
                horizontal
            >
                <View>
                    <View style = {styles.mejores}>
                        <View style = {styles.formulario}>
                            
                            <View>
                                <Text style = {styles.label}>Nombre del Reporte:</Text>
                                
                                <TextInput
                                    style = {styles.input}
                                    onChangeText = {texto => guardarNombre(texto)}
                                />
                            </View>

                            <View>
                                <Text style = {styles.label}>Fecha:</Text>
                                    
                                <TouchableHighlight onPress={showDatePicker} style = {styles.botton}>
                                    <Text style = {styles.textoBotton}>Calendario</Text>
                                </TouchableHighlight>
                                        
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    locale = 'es_ES'
                                    headerTextIOS="Elige una Fecha"/>
                                
                                <TextInput
                                    style = {styles.input}
                                    onChangeTexts={texto => guardarfecha(texto)}
                                    value ={fecha}/>
                            </View>
                            
                            <View>
                                <Text style = {styles.label}>Sector:</Text>
                                <TextInput
                                    style = {styles.input}
                                    onChangeText={texto => guargarSector(texto)}
                                />
                            </View>

                            <View>
                                <Text style = {styles.label}>Direccion:</Text>
                                <TextInput
                                    style = {styles.input}
                                    onChangeText = {texto => guardarDireccion(texto)}
                                />
                            </View>

                            <View>
                                <Text style = {styles.label}>Colonia:</Text>
                                <TextInput
                                    style = {styles.input}
                                    onChangeText = {texto => guardarColonia(texto)}
                                />
                            </View>
                        </View>
                    </View>
                </View>
               
                <View>
                    <View style={styles.mejores}>
                        <View style = {styles.formulario}>
                        <View style = {styles.ConMostrar}>
                              <Text style = {styles.label}>Fenomenos Geológicos</Text>
                        </View> 
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Erupciones Volcanicas"
                                    value ="Erupciones Volcanicas"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                                   
                                />
                            </View>

                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Lahares"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                                    onPress={() => obtener("Lahares")}    
                                />
                            </View>
                            
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Sismos"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>

                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Tsunamis"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Deslizamientos"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>

                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Caídos o Derrumbes"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>

                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Flujos"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>

                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Erosión"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Hundimientos"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Subsidencia"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>

                            <View>
                                <TextInput
                                    style = {styles.input}
                                    value = {fenomenos}
                                />
                            </View>

                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.mejores}>
                        <View style = {styles.formulario}>
                        
                        <View style = {styles.ConMostrar}>
                            <Text style = {styles.label}>Estructuras Geológicas</Text>
                        </View>
                            
                        <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Caída de Ceniza"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Avalancha de escombros"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Intensidad Sísmica"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Fallas"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Fracturas"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Talud"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Agrietamientos"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Intemperismo"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="blue"
                                    unfillColor="#FFFFFF"
                                    text="Socavón"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                            <View style = {styles.contCheck}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Mina/Bocamina"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.mejores}>
                        <View style={styles.formulario }>
                            <View style={styles.ConMostrar}>
                                <Text style={styles.label}>Dimenciones</Text>
                            </View>
                            <View>
                                <Text style = {styles.label}>Largo:</Text>
                                <TextInput
                                    style = {styles.input}
                                />
                            </View>
                            <View>
                                <Text style = {styles.label}>Ancho:</Text>
                                <TextInput
                                    style = {styles.input}
                                />
                            </View>
                            <View>
                                <Text style = {styles.label}>Alto:</Text>
                                <TextInput
                                    style = {styles.input}
                                />
                            </View>
                            <View>
                                <Text style = {styles.label}>Profundidad:</Text>
                                <TextInput
                                    style = {styles.input}
                                />
                            </View>
                            <View>
                                <Text style = {styles.label}>Area:</Text>
                                <TextInput
                                    style = {styles.input}
                                />
                            </View>
                            <View>
                                <Text style = {styles.label}>Extensión Total:</Text>
                                <TextInput
                                    style = {styles.input}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.mejores}>
                        <View style = {styles.formulario}>
                            <View style={styles.ConMostrar}>
                                <Text style={styles.label}>Daños / Riesgos</Text>
                            </View>
                            <View>
                                <Text style = {styles.label}>Viviendas/ Casas /Edificios</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Poblacion</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Calles/ Avenidas/ Carreteras</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Puentes Vehiculares/peatonales</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Escuelas/Templos</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Hospitales/Oficinas de Gobierno</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Parques</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>
                            
                            <View>
                                <Text style = {styles.label}>Instalaciones Electricas</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Red Hidraulica</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Redes Telefonicas</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Ductos de Gas/PEMEX</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder = 'Cantidad Dañada'
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    keyboardType='numeric'
                                    placeholder= 'Cantidad en Riesgo'
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style = {styles.label}>Otros.</Text>
                                <View style = {styles.Dobles}>
                                    <TextInput
                                    style = {styles.input2}
                                    />
                                    <TextInput
                                    style = {styles.input2}
                                    />
                                </View>
                            </View>
                            
                            
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.mejores}>
                        <View style={styles.formulario}>
                            <View style={styles.ConMostrar}>
                                <Text style={styles.label}>Descripcion del lugar</Text>
                            </View>

                            <View>
                                <Text style ={styles.label}>Tipo de Roca:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Tipo de Suelo:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Rumbo:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Echado:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Actividad Humana:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Sobrecarga Arriba/Abajo:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Factor desencadenate:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Deforestación:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Cortes o Excavaciones:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style ={styles.label}>Otros:</Text>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.mejores}>
                        <View style={styles.formulario}>
                            <View style={styles.ConMostrar}>
                                <Text style={styles.label}>Niveles</Text>
                            </View>

                            <View>
                                <Text style = {styles.label }>Peligro:</Text>
                                
                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Muy Alto"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Alto"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Medio"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Bajo"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>
                                
                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Muy Bajo"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                            </View>

                            <View>
                                <Text style={styles.label}>Vulnerabilidad</Text>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Muy Alto"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Alto"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Medio"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Bajo"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Muy Bajo"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>

                            </View>

                            <View>
                                <Text style={styles.label}>Riego</Text>
                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Alto"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>
                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Medio"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>
                                <View style = {styles.contCheck}>
                                    <BouncyCheckbox
                                    size={25}
                                    fillColor="#00000c"
                                    unfillColor="#FFFFFF"
                                    text="Bajo"
                                    iconStyle={{ borderColor: "blue" }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}/>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.mejores}>
                        <Formulario/>
                    </View>
                </View>

            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    //tarjetas
    mejores:{
        width: 345,
        height: '100%',
        marginRight: 15,
        
    },
    //Formulario
    formulario:{
        backgroundColor: '#ffd86a',
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
        backgroundColor: '#fff',
        marginTop:10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 30,
    },
    input2:{
        backgroundColor: '#fff',
        marginTop:10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 30,
        width: '50%'
    },
    botton:{
        padding:10,
        backgroundColor : '#004d61',
        borderRadius : 30,
        marginVertical: 15
    },
    textoBotton:{
        color: '#fff',
        fontWeight:'bold',
        textAlign: 'center'
    },
    //
    contCheck:{
        marginVertical:10
    },
    ConMostrar:{
        alignItems:'center'
    },
    //dobles
    Dobles:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

});

export default Targetas;