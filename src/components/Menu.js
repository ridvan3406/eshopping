import { createMedia } from '@artsy/fresnel'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import HomepageHeading from './Header'
import {Button, Container, Dropdown, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Sidebar, Visibility
} from 'semantic-ui-react'
import {IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart} from '@material-ui/icons'
import {Link} from 'react-router-dom'


const { Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })

  const options = [
    { key: 1, text: 'Choice 1', value: 1,},
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

const DesktopContainer = ({ children, totalItems }) => {
  const [state, setState] = useState({})

    const hideFixedMenu = async () => {
      setState({ fixed: false,})
  }

  const showFixedMenu = async () => {
      setState({ fixed: true,})
  }

      const { fixed } = state

      return (
       <div>
            <Media greaterThan='mobile'>
            <Visibility
              once={false}
              onBottomPassed={showFixedMenu}
              onBottomPassedReverse={hideFixedMenu}
            >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 100, padding: '2em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='medium'
                style={{ height: 45,}}
              >
                <Container >
                  <Menu.Item active exact path="/">
                    <Icon as={Link} to="/" variant="h6"  color='inherit'>
                        Home
                    </Icon>
                  </Menu.Item>
                  <Menu.Item  active >
                    <Dropdown text='Man' options={options} simple item />
                  </Menu.Item>
                  <Menu.Item  active >
                    <Dropdown text='Women' options={options} simple item />
                  </Menu.Item>  
                  <Menu.Item  active >
                    <Dropdown text='Kids' options={options} simple item />
                  </Menu.Item>
                  <Menu.Item as={Link} to="/products" active>
                        Home-Kitchen
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                    <div>
                      <IconButton component={Link} to="/cart" aria-label='Show cart cart items' color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart/>
                          </Badge>
                      </IconButton>
                    </div>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
          {children}
        </Media>
       </div>
      )
    
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }

  export default DesktopContainer;