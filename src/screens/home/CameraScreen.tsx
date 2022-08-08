import React, {useCallback, useState} from 'react';
import {ActivityIndicator, StyleSheet, ToastAndroid, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';

import {AppStackParams} from '../../navigators/AppNavigator';
import {useValidacionEntradaMutation} from '../../generated/graphql';

type Props = NativeStackScreenProps<AppStackParams, 'Camera'>;

const checkPermissionsCamera = async () => {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  console.log({cameraPermission});
  if (cameraPermission !== 'authorized') {
    await Camera.requestCameraPermission();
  }
};

const CameraScreen = ({route, navigation}: Props) => {
  const from = route.params.from as keyof AppStackParams;

  const devices = useCameraDevices();
  const [isActive, setIsActive] = useState(true);

  const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS,
  ]);
  const [validar] = useValidacionEntradaMutation({
    onError: err => {
      console.log({err});
      ToastAndroid.show((err.graphQLErrors[0] as any).debugMessage, 3000);
      navigation.navigate('ValidacionEntrada');
    },
  });

  const device = devices.back;

  const toggleActiveState = useCallback(async () => {
    if (barcodes && barcodes.length > 0) {
      const [{rawValue}] = barcodes;
      setIsActive(false);

      const isDNI = rawValue?.length === 8;

      if (isDNI) {
        const res = await validar({
          variables: {
            numDocumento: rawValue,
            tipoDocumento: 'DNI',
            fecha: '2022-07-29',
            constante: 'LaEsperanza2405',
          },
        });

        if (!res.data?.ValidacionEntrada) return;

        setTimeout(() => {
          navigation.navigate(
            'InfoAsientoScreen',
            res.data?.ValidacionEntrada!,
          );
        }, 200);
        return;
      }

      setTimeout(() => {
        navigation.navigate(from, {
          from: 'Camera',
          value: rawValue,
        });
      }, 200);
    }
  }, [barcodes.length]);

  React.useEffect(() => {
    toggleActiveState();
    return () => setIsActive(false);
  }, [barcodes.length]);

  if (device == null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}} onLayout={checkPermissionsCamera}>
      <Camera
        device={device}
        style={StyleSheet.absoluteFill}
        isActive={isActive}
        frameProcessorFps={5}
        frameProcessor={frameProcessor}
      />
    </View>
  );
};

export default CameraScreen;
