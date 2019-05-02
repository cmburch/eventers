import React, { Component } from 'react'
import { Menu,Button,Container } from 'semantic-ui-react'
import { NavLink,Link } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  state = {
    authenticated: false
  }

  handleSignIn = () => {
    this.setState({
      authenticated: true
    })
  }

  handleSignOut = () => {
    this.setState({
      authenticated: false
    })
  }
  render() {
    const {authenticated} = this.state;
    return (
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item as={Link} to='/' header>
                    <img src="assets/logo.png" alt="logo" />
                    Eventer
                  </Menu.Item>
                  <Menu.Item as={NavLink} to='/events' name="Events" />
                  <Menu.Item as={NavLink} to='/people' name="People" />
                  <Menu.Item>
                    <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                  </Menu.Item>
                  {authenticated ? <SignedInMenu signOut={this.handleSignOut}/> : <SignedOutMenu signIn={this.handleSignIn}/>}                  
                </Container>
              </Menu>
    )
  }
}

export default NavBar
