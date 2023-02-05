import { useEffect } from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useDrawerContext } from '../shared/contexts';
export  const AppRoutes = () => {
    const {setDrawerOptions} = useDrawerContext();

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
            <Route path='/pagina-inicial' element={<Dashboard />} />
            <Route path='*' element={<Navigate to='/pagina-inicial' />} />

        </Routes>
    );
};