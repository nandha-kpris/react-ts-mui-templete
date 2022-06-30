import * as React from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps,
  IconButton,
  Divider,
  List,
  Typography,
  ListItemButton,
  ListItemIcon,
  Icon,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import _ from 'lodash';
import { Routes, Route, NavLink } from 'react-router-dom';
import { drawerWidth } from '../../constants';
import { drawerOptions } from '../../constants/drawer';

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
export const DrawerHeader = styled('div')(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'flex-end',
  // padding: theme.spacing(0, 1),
  // // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  display: 'flex',
  flexDirection: 'row',
  color: 'white',
  fontSize: '15px',
  marginTop: '10px',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export const Drawer = styled('div')(({ theme }) => ({
  backgroundColor: '#181C32',
  color: '#ffffff',
  width: '190px',
  height: '900px',
  position: 'fixed',
  zIndex: 1,
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export const DrawerBody = styled('div')(({ theme }) => ({
  // backgroundColor: 'white',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export const DrawerLabel = styled('div')(({ theme }) => ({
  display: 'flex',
  // padding: '10px',
  color: 'white',

  borderRadius: '10px',
  fontSize: '20px',
  ...theme.mixins.toolbar,
}));
// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }));
export interface IdrawerOptions {
  label: string;
  path: string;
  icon?: string;
}
interface IProps extends DrawerProps {
  options: IdrawerOptions[];
  toggleDrawer: any;
}
export default function CustomDrawer(props: IProps) {
  const { options } = props;
  console.log('collectoption', options);
  const theme = useTheme();
  return (
    <Drawer>
      <DrawerHeader></DrawerHeader>
      <DrawerBody>
        {_.map(options, ({ label, path, icon }: IdrawerOptions, idx: any) => (
          <span key={idx}>
            <NavLink to={path}>
              <ListItemButton>
                <DrawerLabel>{label}</DrawerLabel>
              </ListItemButton>
            </NavLink>
          </span>
        ))}
      </DrawerBody>
    </Drawer>
  );
}
