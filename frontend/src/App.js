import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import GenerateLayout from './components/GenerateLayout';
import Feedback from './components/Feedback';
import './styles/App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <NavBar />
        <MainContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/generate" component={GenerateLayout} />
            <Route path="/feedback" component={Feedback} />
          </Switch>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
