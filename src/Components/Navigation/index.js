import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {AppBar, Box, Toolbar, Divider, Link, IconButton, Typography, 
  InputBase, Badge, MenuItem, Menu} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      padding: "0 4px",
    },
  }));

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <HomeIcon />
        <Link
          href="#"
          underline="always"
          sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: 550,
            marginLeft: "15px",
          }}
        >
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <ContactPageIcon />
        <Link
          href="#"
          underline="hover"
          sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: 550,
            marginLeft: "15px",
          }}
        >
          Contact
        </Link>
      </MenuItem>
      <MenuItem>
        <InfoIcon />
        <Link
          href="#"
          underline="hover"
          sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: 550,
            marginLeft: "15px",
          }}
        >
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <ExitToAppIcon />
        <Link
          href="#"
          underline="hover"
          sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: 550,
            marginLeft: "15px",
          }}
        >
          Sign Up
        </Link>
      </MenuItem>
    </Menu>
  );
  // -----------------------------------------------------------------------------------------------
  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px", marginBottom: "10px"}}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 0.2 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "black",
              fontWeight: "bold",
            }}
          >
            Exclusive
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 0.5 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 5,
                },
              }}
            >
              <Link
                href="#"
                underline="always"
                sx={{ color: "black", fontSize: "16px", fontWeight: 550 }}
              >
                Home
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "black", fontSize: "16px", fontWeight: 550 }}
              >
                Contact
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "black", fontSize: "16px", fontWeight: 550 }}
              >
                About
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "black", fontSize: "16px", fontWeight: 550 }}
              >
                Sign Up
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, order: -5 }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 0.5 }} />
          {/* --------------------------------------------------------------- */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you looking for?"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton aria-label="favorite">
            <StyledBadge badgeContent={0} color="secondary">
              <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
            </StyledBadge>
          </IconButton>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <ShoppingCartIcon sx={{ color: "black" }} />
            </StyledBadge>
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 0.2 }} />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Divider />
    </Box>
  );
}
