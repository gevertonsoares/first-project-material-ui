import { Box, Container, Stack } from "@mui/material";
import Navbar from "../components/styled/Navbar";
import Grid  from '@mui/material/Grid';
import Card from "../components/styled/Card";


export function Home() {
    return (
     <Stack spacing={2}>
        <Navbar />
            <Container  component='main' maxWidth={false} >
                <Stack spacing={4}>
                    <Box component='section'>
                        <Grid  container spacing={2}>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Card />
                            </Grid>    
                        </Grid>
                    </Box>
                </Stack>
            </Container>       
     </Stack>
        
    );
}