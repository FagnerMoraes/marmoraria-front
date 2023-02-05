import { TextField, Box, Button, Paper, useTheme } from '@mui/material';
import Icon from '@mui/material/Icon';

interface ToolbarProps {
    searchText?: string;
    showInput?: boolean;
    onChangeSearchText?: (novoTexto: string) => void;

    newTextButton?: string;
    showButtonNew?: boolean;
    onClickInNew?: () => void;
}


export const Toolbar: React.FC<ToolbarProps> = ({ 
    searchText = '',
    showInput = false,
    onChangeSearchText,
    newTextButton = 'Novo',
    showButtonNew = true,
    onClickInNew

}) => {
    const theme = useTheme();
    return (
        <Box 
            gap={1}
            marginX={1} 
            padding={1} 
            paddingX={2} 
            height={theme.spacing(5)}
            display="flex"
            alignItems="center" 
            component={Paper}
        >

            {showInput &&(
                <TextField
                size='small'
                placeholder='Pesquisar...'
                value={searchText}
                onChange={(e) => onChangeSearchText?.(e.target.value)}
                />
            )}
             {showButtonNew &&(
                <Box flex={1} display="flex" justifyContent="end">
                <Button
                    color='primary'
                    disableElevation
                    variant='contained'
                    endIcon={<Icon>add</Icon>}
                >{newTextButton}</Button>
             </Box>
             )}

        </Box>
    );
};