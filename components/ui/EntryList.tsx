import { List, Paper } from '@mui/material'
import React, { FC } from 'react'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'

interface Props { 
    status: EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

    console.log({status});


    return (

        //TODO: Aquí realizaremos el Drop

    <div>
        <Paper sx={{ backgroundColor: 'transparent', padding: 1
        // overflow: 'scroll'
        }}>

                {/* TODO: Cambiará dependiendo de si estoy haciendo drag o no */}
            <List sx = {{opacity: 1}}>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                
            </List>

        </Paper>
    
    </div>
    )
}
