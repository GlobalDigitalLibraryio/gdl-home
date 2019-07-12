//@flow
import React from "react"
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
import "../style/headerStyle.css"

type State = {
  left: boolean,
}
type Props = {
  path: string,
}

class Header extends React.Component<Props, State> {
  state = {
    left: false,
  }
  render() {
    const { path } = this.props
    const toggleDrawer = open => event => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }

      this.setState({ left: open })
    }
    const sideList = () => (
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        style={{ width: 250 }}
      >
        <List>
          <a className="smlHeaderLink" href="/">
            <ListItem button key="homeBtn">
              <ListItemText primary="Home" />
            </ListItem>
          </a>
          <a className="smlHeaderLink" href="https://blog.digitallibrary.io/">
            <ListItem button key="blogBtn">
              <ListItemText primary="Blog" />
            </ListItem>
          </a>
          <a className="smlHeaderLink" href="/about">
            <ListItem button key="aboutBtn">
              <ListItemText primary="About" />
            </ListItem>
          </a>

          <a
            className="smlHeaderLink"
            href="https://digitallibrary.zendesk.com/hc/en-us/requests/new"
          >
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
      <>
        <AppBar
          id="appBarBig"
          style={{ background: "#3c5a99" }}
          position="sticky"
        >
          <Toolbar>
            <img
              src={gdlLogo}
              style={{
                marginTop: 2,
                marginBottom: 0,
                height: 36,
                width: 100,
                marginLeft: 15,
              }}
              aria-hidden
              alt="logo"
            />
            <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
            <a
              id="homeHref"
              className={path === "/" ? "active" : "headerLink"}
              href="/"
            >
              <Button color="inherit">Home</Button>
            </a>
            <a className="headerLink" href="https://blog.digitallibrary.io/">
              <Button color="inherit">Blog</Button>
            </a>
            <a
              className={path === "/about" ? "active" : "headerLink"}
              href="/about"
            >
              <Button color="inherit">About</Button>
            </a>
            <a
              className="headerLink"
              href="https://digitallibrary.zendesk.com/hc/en-us/requests/new"
            >
              <Button color="inherit">Contact</Button>
            </a>
            <a
              id="gdlNewsHref"
              className={path === "/gdl-in-the-news" ? "active" : "headerLink"}
              href="/gdl-in-the-news"
            >
              <Button color="inherit">GDL in the news</Button>
            </a>
          </Toolbar>
        </AppBar>

        <>
          <AppBar
            id="appBarSmall"
            style={{ background: "#3c5a99" }}
            position="sticky"
          >
            <Toolbar>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <img
                src={gdlLogo}
                style={{
                  marginTop: 2,
                  marginBottom: 0,
                  height: 36,
                  width: 100,
                  marginLeft: 15,
                }}
                aria-hidden
                alt="logo"
              />
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            open={this.state.left}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {sideList()}
          </SwipeableDrawer>
        </>
      </>
    )
  }
}

export default Header
