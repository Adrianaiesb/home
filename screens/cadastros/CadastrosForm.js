import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'


const CadastrosForm = ({ navigation, route }) => {

  let cadastros = {
    nome: '',
    duracao: '',
    modalidade: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {
    cadastros = route.params?.cadastros
  }

  function salvar(dados) {

    AsyncStorage.getItem('cadastros').then(resultado => {

      const cadastros = JSON.parse(resultado) || []

      if (id >= 0) {
        cadastros.splice(id, 1, dados)
      } else {
        cadastros.push(dados)
      }

      AsyncStorage.setItem('cadastros', JSON.stringify(cadastros))

      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Perfil</Text>

     
      <Formik
        initialValues={cadastros}
        onSubmit={values => salvar(values)}
      >
        {({ values, handleChange, handleSubmit}) => (
          <View>

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
            />
            
            

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Duração'
              keyboardType='decimal-pad'
              value={values.duracao}
              onChangeText={handleChange('duracao')}
            />
      

            <Picker
              selectedValue={values.modalidade}
              onValueChange={handleChange('modalidade')}>
              <Picker.Item label="Modalidade" value="" />
              <Picker.Item label="Presencial" value="Presencial" />
              <Picker.Item label="EAD" value="EAD" />
              <Picker.Item label="Híbrido" value="Híbrido" />
            </Picker>
                   

            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}

      </Formik>



    </ScrollView>
  )
}

export default CadastrosForm