import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import InboxIcon from '@mui/icons-material/Inbox';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import React from 'react'



const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose = {()=> console.log('Cerrando')}
        >
                <Box sx={{width:200}}>

                </Box>
                <Box sx={{padding: '1em 2em'}}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text,index) => (
                            <ListItem button key = {text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxIcon/> : <EmailOutlinedIcon/>}
                                </ListItemIcon>

                                <ListItemText primary= {text}/>

                                
                            </ListItem>
                        ))
                    }
                </List>

                <Divider/>

                <List>
                    {
                        menuItems.map((text,index) => (
                            <ListItem button key = {text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxIcon/> : <EmailOutlinedIcon/>}
                                </ListItemIcon>

                                <ListItemText primary= {text}/>

                                
                            </ListItem>
                        ))
                    }
                </List>

        </Drawer>
    )
}
