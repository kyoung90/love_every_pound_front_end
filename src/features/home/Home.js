import React from "react";
import { Button, Segment, Grid, Header, Container, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
const Home = () => {

  const generateButton = () => {
    if (!localStorage.getItem("token")) {
      return <Button className="warning" size='massive' as={Link} to="/login">Login</Button>
    } else {
      return <Button className="warning" size='massive' as={Link} to="/weights">View Your Progress</Button>
    }
  };

  const lowerRightCOl = () => {
    if (!localStorage.getItem("token")) {
      return <>
        <h3 style={{ fontSize: '5em' }}>
          Join us!
            </h3>
        <br />
        <Button className="info" size='massive' as={Link} to="/signup">Sign Up</Button>
      </>
    } else {
      return <>
        <h3 style={{ fontSize: '5em' }}>
          Get Inspired!
            </h3>
        <br />
        <Button className="info" size='massive' as={Link} to="/quote">Daily Quote</Button>
      </>
    }
  };

  return (
    <div>
      <div className="homeBanner">
        <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                {/* <h3 style={{ 
                fontSize: '5em',
            }}>
                LOVE EVERY POUND
            </h3> */}
                <Image src={'/assets/images/logo.png'} size='large' centered fluid />

              </Grid.Column>
              <Grid.Column width={8} textAlign='center'>
                {generateButton()}
                {/* <Button className="warning" size='massive' as={Link} to="/login">Login</Button> */}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>


            </Grid.Row>
          </Grid>
        </Segment>
      </div>
      <div className="homeContainer">
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            {lowerRightCOl()}
            <br/>
            <br/>
              <h3 style={{ fontSize: '5em' }}>
                Who we are!
            </h3>
              <br />
              <Button className="info" size='massive' as={Link} to="/about" >Learn More</Button>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </div>
      {/* <section id="banner">
        <header>
          <h2>About</h2>
        </header>
        <div className="container">
          <h4>

          </h4>
        </div>
      </section>

      <h1>Welcome!</h1>
      <h3>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.{" "}
      </h3>
      <Button as={Link} to="/about" >Learn More</Button>
      <Button as={Link} to="/login">Login</Button>
      <Button as={Link} to="/signup">Sign up</Button> */}
    </div>
  );
};

export default Home;