import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
