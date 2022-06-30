import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Toolbar,
  AppBarProps as MuiAppBarProps,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../constants";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
interface INavProps {
  handledrawerOpen: any;
  drawerState: any;
}
export default function NavBar({ handledrawerOpen, drawerState }: INavProps) {
  return (
    <AppBar
      open={drawerState}
      style={{
        width: "84vw",
        backgroundColor: "white",
        borderBottom: "1px solid whitesmoke",
        height: "80px",
      }}
    >
      <Box style={{ textAlign: "end" }}>
        <Typography style={{ fontSize: "25px", color: "black" }}>
          Analytics Dashboard
        </Typography>
      </Box>
      {/* <Toolbar> */}
      {/* <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={handledrawerOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button> */}
      {/* </Toolbar> */}
    </AppBar>
  );
}
