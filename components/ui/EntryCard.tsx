import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'


export const EntryCard = () => {
    return (
        <Card sx = {{marginBottom: 1}}
            // { Eventos de card 
        >    
            <CardActionArea sx = {{  padding: '1em'}}>

                <CardContent>
                    <Typography sx = {{ whiteSpace: 'pre-line'}}>Esto es la descripción</Typography>
                </CardContent>

                <CardActions sx = {{ display:'flex', justifyContent: 'end', paddingRight: '1em'}}>
                    <Typography variant='body2'>Hace 30 minutos</Typography>
                </CardActions>

            </CardActionArea>

        </Card>
    )
}
