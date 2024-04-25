import { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from "./utils/themes";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Skils from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import styled from 'styled-components';

import { useEffect, useState } from 'react';




const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function App() {
  const [darkMode, setdarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skils />
            <Experience />
          </Wrapper>
          <Wrapper>
            <Contact />

          </Wrapper>


        </Body>
      </Router>

    </ThemeProvider>
  );
}

export default App;
