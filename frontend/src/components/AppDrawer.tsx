import { Box, Drawer, List, ListItem } from "@mui/material";

interface $AppDrawerSettings {
    isOpen: boolean,
    onClickDrawer?: CallableFunction;
}

export default function AppDrawer({ isOpen, onClickDrawer }: $AppDrawerSettings) {
    return <>
        <Drawer open={isOpen} onClose={() => { onClickDrawer?.(); }} >
            <Box width="250px" onClick={() => {
                onClickDrawer?.();
            }}>
                <List >
                    <ListItem />
                </List>
            </Box>
        </Drawer>
    </>
}