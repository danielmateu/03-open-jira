import React, { FC, useReducer, PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
};

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Id officia labore consectetur do qui tempor amet incididunt Lorem consectetur occaecat.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Id eiusmod qui voluptate quis Lorem veniam laborum nisi do sint do laborum.',
            status: 'in-progress',
            createdAt: Date.now() - 10000000000,

        },
        {
            _id: uuidv4(),
            description: 'Elit cillum cillum id velit culpa.',
            status: 'finished',
            createdAt: Date.now() - 1000000,
        },
    ],
};


export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)



    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}