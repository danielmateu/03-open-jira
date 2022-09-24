import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css'; 

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const {isDragging, endDragging} = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const allowDrop = (event:DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        // console.log(event)
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        
        const entry = entries.find( e => e._id === id)!;

        entry.status = status;

        updateEntry(entry);
        endDragging()
    }

    return (

        //TODO: Aquí realizaremos el Drop

        <div
        onDrop={onDropEntry}
        onDragOver = {allowDrop}
        className = {isDragging ? styles.dragging : ''}
        >
            <Paper sx={{
                backgroundColor: 'transparent', padding: 2,
                // overflow: 'scroll'
            }}>

                {/* TODO: Cambiará dependiendo de si estoy haciendo drag o no */}
                <List sx={{ opacity: isDragging ? .4 : 1, transition: 'all .3s' }}>
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
