import { Toolbar } from '../../shared/components';
import { PagesBaseLayout } from '../../shared/layouts';

export const Dashboard = () => {
    return(
        <PagesBaseLayout titulo="Pagina Inicial"
                         barraDeFerramentas={<Toolbar showInput newTextButton='Nova' />} >
            Testando
        </PagesBaseLayout>
    );
};