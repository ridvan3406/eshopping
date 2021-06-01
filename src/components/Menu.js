
import { createMedia } from '@artsy/fresnel'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomepageHeading from './Header'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'



const { Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })

class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
       <div>
            <Media greaterThan='mobile'>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>Men</Menu.Item>
                  <Menu.Item as='a'>Women</Menu.Item>
                  <Menu.Item as='a'>Kids</Menu.Item>
                  <Menu.Item as='a'>Home-Kitchen</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
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
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }

  export default DesktopContainer;