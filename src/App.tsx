
import {BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import { SideBar } from './shared/components';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideBar>        
          <AppRoutes />
        </SideBar>
      </BrowserRouter>
    </AppThemeProvider>      
        
  );
};

