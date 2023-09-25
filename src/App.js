import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import { useEffect, useState } from 'react';
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  const [ usuario, setUsuario] = useState({});
  useEffect(() =>{
    if(usuario){
      console.log('====================================');
    console.log(usuario);
    console.log('====================================');
    }
  }, [usuario]);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router usuario={usuario} setUsuario={setUsuario} />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
