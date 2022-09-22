import type { NextPage } from 'next'

import { Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
import { Layout } from '../components/layouts';


const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira" >
      {/* <Typography variant='h1' color='primary'>Hola mundo! 😉</Typography> */}
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4} xl={1}>
          <Card sx = {{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Pendientes' />
            <CardContent>
              {/* Agregar nueva tarea */}
              {/* Listado de las entradas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} xl={1}>
          <Card sx = {{height: 'calc(100vh - 100px)'}} >
            <CardHeader title='En Progreso' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} xl={1}>
          <Card sx = {{height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Completadas' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
