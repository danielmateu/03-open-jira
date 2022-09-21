import {Box} from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: any;
}

export const Layout:FC<Props> = ({title = 'OpenJira', children}) => {
    return (
    
        <Box sx = {{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar/>
            {/* Sidebar */}

            <Box sx = {{padding: '1em 2em' }}>
                {children}
            </Box>

        </Box>

    )
}