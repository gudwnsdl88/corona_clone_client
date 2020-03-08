import React from 'react';
import theme from '../../theme';
import { ThemeProvider } from '../../typed-components';
import Globalstyle from '../../global-styles';
import AppPresenter from './AppPresenter';

const AppContainer: React.FC<any> = () => (
  <>
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <AppPresenter />
    </ThemeProvider>
  </>
);

export default AppContainer;
