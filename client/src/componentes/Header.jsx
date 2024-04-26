import { NavLink, useNavigate } from "react-router-dom";
import {Box, Button, AppBar, Container, Toolbar,Typography} from '@mui/material'

export const Header = () =>{
    const navigate = useNavigate();
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" sx={{flexGrow: 1}}>
                            <NavLink to="/" style={{textDecoration: 'none', color: '#eee'}}><strong>INICIO</strong></NavLink>
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => navigate("/tareas/form")}>
                            nueva tarea
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};