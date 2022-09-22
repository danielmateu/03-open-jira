import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo } from 'react'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'
import { EntriesContext } from '../../context/entries/EntriesContext';


interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    return (

        //TODO: Aquí realizaremos el Drop

        <div>
            <Paper sx={{
                backgroundColor: 'transparent', padding: 1,
                // overflow: 'scroll'
            }}>

                {/* TODO: Cambiará dependiendo de si estoy haciendo drag o no */}
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))

                    }
                </List>

            </Paper>

        </div>
    )
}
