import React from 'react'
import { Layout } from '../../components/layouts';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Grid, Card, CardHeader, CardContent, TextField, CardActions, Button } from '@mui/material';

export const EntryPage = () => {
    return (
        <Layout title=".....">
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 1 }}

            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader title="Entrada:"
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
                            />

                            {/* RADIO */}
                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<BookmarkBorderOutlinedIcon />}
                                variant='contained'
                                fullWidth
                            >

                                Save
                            </Button>

                        </CardActions>

                    </Card>

                </Grid>

            </Grid>


        </Layout>
    )
}

export default EntryPage;
