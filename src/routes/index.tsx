import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
export  const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
             icon: 'home',
             label: 'Pagina Inicial',
             path:'/pagina-inicial'
            },
            {
             icon: 'star',
             label: 'Cidades',
             path:'/cidades'
            }
        ]);
    });

    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant='contained' onClick={toggleDrawerOpen} color='primary'>Toggle Drawer</Button>} />
            <Route path='/cidades' element={<Button variant='contained' onClick={toggleDrawerOpen} color='primary'>Toggle Drawer</Button>} />
            <Route path='*' element={<Navigate to='/pagina-inicial' />} />

        </Routes>
    );
};