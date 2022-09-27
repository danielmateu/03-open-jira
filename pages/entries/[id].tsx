import React, { ChangeEvent, useMemo, useState, useContext } from 'react'

import { GetServerSideProps } from 'next'

import { Layout } from '../../components/layouts';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import { Grid, Card, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton } from '@mui/material';
import { Entry, EntryStatus } from '../../interfaces';
// import { EntryStatus } from '../../interfaces/entry';
import { FC } from 'react';

import { dbEntries } from '../../database';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { dateFunctions } from '../../utils';


const validStatus = ['pending', 'in-progress', 'finished'];

interface Props {
    entry: Entry,
}

export const EntryPage: FC<Props> = ({ entry }) => {

    // console.log({ props })
    const { updateEntry } = useContext(EntriesContext)
    const {deleteEntry} = useContext(EntriesContext)

    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);

    const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as EntryStatus);
    }

    const onSave = () => {
        // console.log({ inputValue, status });

        if (inputValue.trim().length === 0) return;

        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue,
        }

        updateEntry(updatedEntry, true);

    }

    const onDelete = () => {
        deleteEntry(entry, true);
        // router.push('/');

        
    }

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    return (
        <Layout title={inputValue.substring(0, 20) + '...'}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 1 }}

            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader title={`Entrada:`}
                            subheader={`${dateFunctions.getFormatDistanceToNow(entry.createdAt)} `}
                        />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                onChange={onInputValueChanged}
                                helperText={isNotValid && 'Ingrese un valor'}
                                error={isNotValid}
                            />

                            {/* RADIO */}
                            <FormControl>
                                <FormLabel>
                                    Estado:
                                </FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChanged}
                                >
                                    {
                                        validStatus.map(option => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
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
                                disabled={inputValue.length <= 0}
                            >

                                Save
                            </Button>

                        </CardActions>

                    </Card>

                </Grid>

            </Grid>

            <IconButton
                onClick={onDelete}
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'error.dark'
                }}>
                <BookmarkRemoveOutlinedIcon />
            </IconButton>


        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string };

    const entry = await dbEntries.getEntryById(id)

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    
    return {
        props: {
            entry
        }
    }
}

export default EntryPage;
