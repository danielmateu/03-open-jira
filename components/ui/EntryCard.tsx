import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { FC,DragEvent, useContext } from 'react';
// import Draggable from 'react-draggable'; // The default
import { Entry } from '../../interfaces'

import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';

interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props> = ({entry}) => {

    const {startDragging, endDragging} = useContext(UIContext);
    const router = useRouter()

    const onDragStart = (event:DragEvent) => {
        // console.log(event);
        event.dataTransfer.setData('text',entry._id);
        //Todo: Modificar el estado para indicar que estoy haciendo drag
        startDragging()
    }

    const onDragEnd = () => {
        //Todo: Cancelar on dragp
        endDragging()
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }

    return (
        

        <Card sx = {{marginBottom: 1}}
            // { Eventos de drag 
            onClick={onClick}
            draggable = {true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >    
            <CardActionArea sx = {{  padding: '.2em'}}>

                
                <CardContent>
                    <Typography sx = {{ whiteSpace: 'pre-line'}}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx = {{ display:'flex', justifyContent: 'end', paddingRight: '2'}}>
                    <Typography variant='body2'>Hace 30 minutos</Typography>
                </CardActions>

            </CardActionArea>

        </Card>
        
    )
}
