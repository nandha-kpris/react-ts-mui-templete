import { Box, CssBaseline, Grid } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeSnackbar } from '../../redux/features/snackBarSlice';
import CustomizedSnackbars from '../AdvanceSnackbar';
import { drawerOptions } from '../../constants/drawer';
import CustomDrawer, { DrawerHeader } from '../CustomDrawer';
import NavBar from '../NavBar';

export default function Layout({ children }: any) {
  const [drawerState, setDrawerState] = useState(false);
  const snackbar = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();
  const handledrawerOpen = () => {
    setDrawerState(true);
  };
  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <Grid container>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} > */}
      <NavBar handledrawerOpen={handledrawerOpen} drawerState={drawerState} />
      {/* </Grid> */}
      {/* <Grid item item xs={4} sm={4} md={4} lg={4} xl={4}> */}
      <CustomDrawer
        options={drawerOptions}
        toggleDrawer={toggleDrawer}
        open={drawerState}
      />
      {/* </Grid>
      </Grid> */}
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
      <CustomizedSnackbars
        messageString={snackbar.messege}
        severity={snackbar.severity}
        handleClose={() => {
          dispatch(closeSnackbar());
        }}
        open={snackbar.open}
      />
    </Box>
  );
}
