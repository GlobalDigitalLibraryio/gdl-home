import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../elements/Main"
import Cover from "../elements/Cover"
import { Grid, TextField, Button } from "@material-ui/core"

export default class Contact extends React.Component {
  state = {
    name: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name} !`)
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <main
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            width: "fit-content",
            flex: "1 0 auto",
            boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.2)",
            height: "fit-content",
          }}
        >
          <Main>
            <Cover>
              <p>Contact</p>
              <h2>Get in touch</h2>
            </Cover>
            <Grid>
              <div className="pageContent">
                <h3>
                  This is a contact page for anyone that wants to get in touch
                  with the GDL project team.
                </h3>

                <TextField
                  id="outlined-full-width"
                  label="Name"
                  style={{ margin: 8 }}
                  placeholder=""
                  autoComplete="name"
                  margin="normal"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  style={{ margin: 8 }}
                  placeholder=""
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-subject"
                  label="Subject"
                  style={{ margin: 8 }}
                  placeholder=""
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-message"
                  label="Message"
                  style={{ margin: 8 }}
                  placeholder=""
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="7"
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button id="contactBtn" variant="outlined">
                    SEND
                  </Button>
                </div>
                {/* <button type="submit">Submit</button> */}
              </div>
            </Grid>
          </Main>
        </main>
      </Layout>
    )
  }
}

//export default Contact
