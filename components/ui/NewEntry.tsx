import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import AddIcon from '@mui/icons-material/AddCommentOutlined';

export const NewEntry = () => {
    return (
        <Box sx = {{marginBottom: 2, paddingX: 1}}>
        

        <Button 
        startIcon = {<AddIcon/>}
        fullWidth
        variant='outlined'
        
        >
            Agregar tarea
        </Button>

        <TextField 
        fullWidth
        sx = {{marginTop:2, marginBottom: 1}}
        placeholder='Nueva entrada'
        multiline
        label='Nueva entrada'
        helperText='Ingrese un texto'
        />

        <Box display="flex" justifyContent='space-between' paddingBottom={1}>
            <Button
                variant='outlined'
                color='primary'
                endIcon={<BookmarkAddedOutlinedIcon />}>
                Guardar
            </Button>
            <Button
                variant='outlined'
                color='secondary'
                endIcon={<BookmarkRemoveOutlinedIcon />}>
                cancelar
            </Button>

        </Box>
        </Box>
    )
}
