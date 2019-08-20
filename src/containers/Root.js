import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react"
import "react-toastify/dist/ReactToastify.css";
import store, { persiststore } from '../store';
// import DevTools from './DevTools';
import StyledContainer from '../components/StyledContainer';
import theme from '../constants/theme';
import App from '../components/App';

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persiststore} loading={null}>
                <ToastContainer />
                <ThemeProvider theme={theme}>
                    <StyledContainer>
                        <Router>
                            <App/>
                            {/*<DevTools/>*/}
                        </Router>
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default Root;