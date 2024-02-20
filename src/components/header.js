import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Typography, makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import NextGigLogo from "../images/diamond_svg.svg"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./main.css"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      fontFamily: "Roboto, sans-serif !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "fixed",
    display: "flex",
    background: "#000000",
    color: "white",
    justifyContent: "space-between",
    width: "100%",
    height: "112px",
    top: 0,
    zIndex: "1",
  },
  navBarTitle: {
    display: "flex",
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  navTitle: {
    fontSize: "2rem",
    fontWeight: "bold"
  },
  navLink: {
    display: "flex",
    textDecoration: "none",
    color: "white",
    "@media(max-width: 600px)": {
      margin: "auto 0px"
    }
  },
  navButton: {
    color: "white",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navButtonOutline: {
    color: "#9700ff",
    border: "1px solid #9700ff",
    borderRadius: "4px",
    padding: "10px",
    fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navButtonOutlineMobile: {
    color: "#9700ff",
    border: "1px solid #9700ff",
    borderRadius: "4px",
    padding: "10px",
    fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "white",
    margin: "10px",
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 601px)": {
      display: "flex",
      margin: "auto 10px"
    }
  },
  navLogo: {
    display: "flex",
    marginRight: "10px",
    width: "50px",
    margin: "auto",
  },
  drawerItem: {
    "&:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    },
    "&:selected:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "20px",
    fontSize: "2.5rem",
    color: "#9700ff",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  navLeftWrapper: {
    display: "flex",
  },
  navCallButton: {
    display: "flex",
    backgroundColor: "#f03d3dcf",
    padding: "8px 16px",
    color: "white",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px"
  },
  navCallButtonMobile: {
    display: "flex",
    backgroundColor: "#f03d3dcf",
    padding: "8px 16px",
    color: "white",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "@media(max-width: 600px)": {
      fontSize: "0.75rem",
      margin: "auto"
    }
  },
  drawerLinkWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  navButtonMobile: {
    color: "black",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "10px 16px",
    textDecoration: "none"
  }
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navLeftWrapper}>
        <div className={classes.navBarTitle}>
          <Link to="/" className={classes.navLink}>
            <img className={classes.navLogo} src={NextGigLogo} alt="company logo" />
            <Typography className={classes.navTitle}>NextGig</Typography>
          </Link>
        </div>
      </div>

      <div class="socialLinkWrapperNav">
        <AnchorLink className={classes.navButton}
          to="/#sectionTwo" title="How it works">
        </AnchorLink>
        <AnchorLink className={classes.navButtonOutline}
          to="/#contactForm" title="Sign Up">
        </AnchorLink>
        {/* <AnchorLink className={classes.navButton}
          to="/#sectionThree" title="More Info">
        </AnchorLink> */}
      </div>
      <div className={classes.navBarHamburgerDrawerWrapper}>
        {/* <Button
          className={classes.navCallButtonMobile}
          target="_blank" href="tel:"
        >
          <PhoneIcon class="drawerPhoneIcon" />
          Call Us
        </Button> */}
        <MenuIcon
          className={classes.hamburgerIcon}
          onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="right"
          className={classes.drawerRoot}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <div className={classes.drawerLinkWrapper}>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionTwo" title="How it works">
                </AnchorLink>
                <AnchorLink className={classes.navButtonOutlineMobile}
                  to="/#contactForm" title="Sign Up">
                </AnchorLink>
              </div>

            </List>

          </div>
        </Drawer>

      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
