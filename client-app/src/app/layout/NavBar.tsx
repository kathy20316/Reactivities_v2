import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';

interface Props {
    openForm: (id: string) => void;
}

export default function NavBar({openForm} : Props) {
    return (
        <AppBar position="static" id = "app-bar-with-responsive-menu">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px', height: '30px' }} />
                        Reactivities
                        | Activities
                        <Button
                            onClick={openForm}
                            sx={{
                                backgroundColor: 'brown', // Set your desired background color
                                color: 'white', // Set the text color
                                '&:hover': {
                                    backgroundColor: 'darkgreen', // Set the background color on hover
                                },
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textDecoration: 'none',
                                marginLeft: '5rem',
                            }}
                        >Create Activity</Button>
                    </Typography>





                </Toolbar>
            </Container>
        </AppBar>



    );
}