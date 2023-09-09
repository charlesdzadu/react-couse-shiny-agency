import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import reportWebVitals from './reportWebVitals';
import './styles/index.css';

import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import { ThemeProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;
root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/survey/:id" element={<Survey />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
