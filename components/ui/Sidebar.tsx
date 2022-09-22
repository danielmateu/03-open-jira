import { useContext } from "react";

import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { UIContext } from "../../context/ui";

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {


    const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

    return (
        <Drawer
            anchor="left"
            open={sidemenuOpen}

            onClose={closeSideMenu}
        >
            <Box sx={{ width: 200 }}>

                <Box sx={{ padding: '1em 2em' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>

                                <ListItemText primary={text} />


                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>

                                <ListItemText primary={text} />


                            </ListItem>
                        ))
                    }
                </List>

            </Box>

        </Drawer>
    )
}
