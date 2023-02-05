
import {BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import { SideBar } from './shared/components';
import { DrawerProvider } from './shared/contexts';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideBar>
                 
          <AppRoutes />
        </SideBar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>      
        
  );
};

