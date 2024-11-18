import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import "@/i18n";
import AppsIcon from '@mui/icons-material/Apps';
import { useTranslation } from 'react-i18next';
import SearchBar from '../Search/Bar';

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const {t} = useTranslation();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <SearchBar />
        </ListItem>
      </List>
      <List>
        <Link to={"/products"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={t('Example.7')} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
      <Link to={"/about"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={t('Example.about')} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}