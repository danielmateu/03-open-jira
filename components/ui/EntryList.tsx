import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './EntryCard'

export const EntryList = () => {
    return (

        //TODO: Aquí realizaremos el Drop

    <div>
        <Paper sx={{height: 'calc(100vh - 100px)', backgroundColor: 'transparent', padding: '1em', overflow: 'scroll'}}>

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
