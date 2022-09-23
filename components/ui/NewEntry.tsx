import React, { ChangeEvent, useState, useContext } from 'react'

import { Box, Button, TextField } from '@mui/material'
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import AddIcon from '@mui/icons-material/AddCommentOutlined';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)
    const {isAddingEntry, setIsAddingEntry} =useContext(UIContext)
    // const [isAdding, setIsAdding] = useState(false);
    // const [isAddingEntry, setIsAddingEntry] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onSave = () => {

        if(inputValue.length === 0) return;
        

        addNewEntry(inputValue)
    
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>

            {
                isAddingEntry ?
                    (<>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva entrada'
                            multiline
                            label='Nueva entrada'
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un texto'}
                            error = {inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange = {onTextFieldChanged}
                            onBlur = {() => setTouched(true)}
                        />

                        <Box display="flex" justifyContent='space-between' sx={{flexDirection: 'column', gap:1}} >
                            <Button
                                variant='outlined'
                                color='primary'
                                endIcon={<BookmarkAddedOutlinedIcon />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                            <Button
                                variant='outlined'
                                color='warning'
                                endIcon={<BookmarkRemoveOutlinedIcon />}
                                onClick={() => setIsAddingEntry(false)}
                            >
                                cancelar
                            </Button>

                        </Box>
                    </>)
                    :
                    (
                        <Button
                            startIcon={<AddIcon />}
                            fullWidth
                            variant='outlined'
                            onClick={() => setIsAddingEntry(true)}
                        >
                            Añadir tarea
                        </Button>)
            }

        </Box>
    )
}
