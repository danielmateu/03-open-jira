import React, { ChangeEvent, useState } from 'react'

import { Layout } from '../../components/layouts';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import { Grid, Card, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton } from '@mui/material';
import { EntryStatus } from '../../interfaces';
// import { EntryStatus } from '../../interfaces/entry';


const validStatus = ['pending', 'in-progress', 'finished']

export const EntryPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onStatusChanged =  (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as EntryStatus);
    }

    const onSave = () => {
        console.log({inputValue, status});
    }

    return (
        <Layout title=".....">
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 1 }}

            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader title={`Entrada: ${inputValue}`}
                            subheader={`Creada hace ... minutos`}
                        />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                value = {inputValue}
                                onChange={onInputValueChanged}
                            />

                            {/* RADIO */}
                            <FormControl>
                                <FormLabel>
                                    Estado: 
                                </FormLabel>
                                <RadioGroup
                                    row
                                    value= {status}
                                    onChange={onStatusChanged}
                                    >
                                    {
                                        validStatus.map(option => (
                                            <FormControlLabel
                                                key = {option}
                                                value={option}
                                                control={<Radio/>}
                                                label={capitalize(option)}
                                                
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<BookmarkBorderOutlinedIcon />}
                                variant='contained'
                                fullWidth
                                onClick={onSave}
                            >

                                Save
                            </Button>

                        </CardActions>

                    </Card>

                </Grid>

            </Grid>

            <IconButton sx={{ 
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'error.dark'
            }}>
                <BookmarkRemoveOutlinedIcon/>
            </IconButton>


        </Layout>
    )
}

export default EntryPage;
