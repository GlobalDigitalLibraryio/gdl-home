import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Divider,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import gdlLogo from "../images/GDL-logo.svg"
import "../style/linkStyle.css"

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    owerflowX: "hidden",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginTop: 2,
    marginBottom: 0,
    height: 36,
    width: 100,
    marginLeft: 15,
  },
  btn: {
    minWidth: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <a className="smlHeaderLink" href="/">
          <ListItem button key="homeBtn">
            <ListItemText primary="Home" />
          </ListItem>
        </a>
        <a className="smlHeaderLink" href="/">
          <ListItem button key="blogBtn">
            <ListItemText primary="Blog" />
          </ListItem>
        </a>
        <a className="smlHeaderLink" href="/about">
          <ListItem button key="aboutBtn">
            <ListItemText primary="About" />
          </ListItem>
        </a>

        <a className="smlHeaderLink" href="/contact">
          <ListItem button key="contactBtn">
            <ListItemText primary="Contact" />
          </ListItem>
        </a>
        <a className="smlHeaderLink" href="/gdl-in-the-news">
          <ListItem button key="gdl-in-newsBtn">
            <ListItemText primary="GDL in the news" />
          </ListItem>
        </a>
      </List>
      <Divider />
    </div>
  )

  return (
    /* <div className={classes.root}> */
    /*  */
    <div>
      <AppBar
        id="appBarBig"
        style={{ background: "#0277bd" }}
        position="static"
      >
        <Toolbar>
          <Link to="/" aria-label="Global Digital Library">
            <img
              src={gdlLogo}
              className={classes.logo}
              aria-hidden
              alt="logo"
            />
          </Link>
          <Typography variant="h6" className={classes.title}></Typography>
          <a
            className={
              window.location.href.endsWith("/") ? "active" : "headerLink"
            }
            href="/"
          >
            <Button className="btn active" color="inherit">
              Home
            </Button>
          </a>
          <a className="headerLink" href="/">
            <Button
              className="btn"
              color="inherit"
              //onClick={() => setActiveClass("blogBtn")}
            >
              Blog
            </Button>
          </a>
          <a
            className={
              window.location.href.endsWith("about") ? "active" : "headerLink"
            }
            href="/about"
          >
            <Button className="btn" color="inherit">
              About
            </Button>
          </a>
          <a
            className={
              window.location.href.endsWith("contact") ? "active" : "headerLink"
            }
            href="/contact"
          >
            <Button className="btn" color="inherit">
              Contact
            </Button>
          </a>
          <a
            className={
              window.location.href.endsWith("gdl-in-the-news")
                ? "active"
                : "headerLink"
            }
            href="/gdl-in-the-news"
          >
            <Button className="btn" color="inherit">
              GDL in the news
            </Button>
          </a>
        </Toolbar>
      </AppBar>

      <div id="appBarSmall">
        <AppBar
          id="appBarSmall"
          style={{ background: "#0277bd" }}
          position="fixed"
        >
          <Toolbar>
            <IconButton color="inherit" onClick={toggleDrawer("left", true)}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Link to="/" aria-label="Global Digital Library">
              <img
                src={gdlLogo}
                className={classes.logo}
                aria-hidden
                alt="logo"
              />
            </Link>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {sideList("left")}
        </SwipeableDrawer>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function setActiveClass(current) {
  console.log(window.location.href)
  const url = "" + window.location.href

  if (url.includes("about")) {
  }

  console.log(url.includes("about"))
}
