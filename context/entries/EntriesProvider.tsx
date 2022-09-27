import React, { FC, useReducer, PropsWithChildren, useEffect } from 'react';

import { useSnackbar } from 'notistack';
// import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '../../apis';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';



export interface EntriesState {
    entries: Entry[];
};

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
};


export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const addNewEntry = async(description: string) => {

        // const newEntry: Entry = {
        //     _id: uuidv4(),
        //     description,
        //     createdAt: Date.now(),
        //     status: 'pending'
        // }

        const {data} = await entriesApi.post<Entry>('/entries',{description});
        
        dispatch({ type: '[Entry] - Add-Entry', payload: data })
    }
    
    const updateEntry = async({_id, description, status}:Entry, showSnackbar = false) => {
        
        try {
            const {data} = await entriesApi.put<Entry>(`/entries/${_id}`
            , { description, status}) ;
            dispatch({ type: '[Entry] - Entry-Updated', payload: data })

            //TODO Mostrar snackbar

            if(showSnackbar){

                enqueueSnackbar('Entrada actualizada',{
                    variant: 'success', 
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }

        } catch (error) {
            console.log({error});
        }


    }

    const deleteEntry = async (entry: Entry, showSnackbar = false) => {
        try {
            const {data} = await entriesApi.delete<Entry>(`/entries/${entry._id}`);

            dispatch({
                type: '[Entry] - Refresh-Deleted', 
                payload: data
            })

            if(showSnackbar){
                enqueueSnackbar('Entrada eliminada',{
                    variant: 'error', 
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }


        } catch (error) {
            console.log({error});
        }
    }

    const refreshEntries = async() => {

        const {data} = await entriesApi.get<Entry[]>('/entries')
        dispatch({ type: '[Entry] - Refresh-Data', payload: data })

    }

    useEffect(() => {
        refreshEntries()
    }, [])



return (
    <EntriesContext.Provider value={{
        ...state,

        //methods
        addNewEntry,
        updateEntry,
        deleteEntry,
    }}>
        {children}
    </EntriesContext.Provider>
)
}