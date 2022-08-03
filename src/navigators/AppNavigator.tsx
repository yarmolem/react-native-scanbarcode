import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/HomeScreen';
import CameraScreen from '../screens/home/CameraScreen';
import ValidacionEntradaScreen from '../screens/home/ValidacionEntradaScreen';
import InfoAsientoScreen from '../screens/home/InfoAsientoScreen';

export type AppStackParams = {
  Home: undefined;
  Camera: {from: string};
  ValidacionEntrada?: {from: string; value: string};
  InfoAsientoScreen: {
    codigo?: string | undefined | null;
    estado?: string | undefined | null;
    nombres?: string | undefined | null;
    asiento?: string | undefined | null;
    apellidos?: string | undefined | null;
    asientoId?: string | undefined | null;
    numDocumento?: string | undefined | null;
    tipoDocumento?: string | undefined | null;
  };
};

const AppStack = createNativeStackNavigator<AppStackParams>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Camera" component={CameraScreen} />
      <AppStack.Screen name="InfoAsientoScreen" component={InfoAsientoScreen} />
      <AppStack.Screen
        name="ValidacionEntrada"
        component={ValidacionEntradaScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
