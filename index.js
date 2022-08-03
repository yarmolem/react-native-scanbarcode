import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import jail from 'jail-monkey';
import RNExitApp from 'react-native-exit-app';

if (!__DEV__ && jail.isJailBroken()) {
  RNExitApp.exitApp();
}

AppRegistry.registerComponent(appName, () => App);
