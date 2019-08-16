import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import store from '../store';
import DevTools from './DevTools';
import StyledContainer from '../components/StyledContainer';
import theme from '../constants/theme';
import App from '../components/App';

const Root = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <Router>
                        <App/>
                        {/*<DevTools/>*/}
                    </Router>
                </StyledContainer>
            </ThemeProvider>
        </Provider>
    );
};

export default Root;