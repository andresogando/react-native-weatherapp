/**
 * @format
 */
import * as React from 'react';

import {AppRegistry, Platform} from 'react-native';
import { ThemeProvider, createTheme, lightColors } from '@rneui/themed';

import App from './src/App';
import { name as appName } from './app.json';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});


export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
