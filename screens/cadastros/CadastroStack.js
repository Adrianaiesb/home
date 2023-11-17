import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cadastros from './Cadastros';
import CadastrosForm from './CadastrosForm';

const Stack = createNativeStackNavigator();

const CadastroStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Cadastros'>
                <Stack.Screen name="cadastros" component={Cadastros} options={{ title: 'Cadastros' }} />
                <Stack.Screen name="cadastros-form" component={CadastrosForm} options={{ title: 'Cadastros' }} />
            </Stack.Navigator>
        </>
    )
}

export default CadastroStack