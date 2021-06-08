import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Sidebar,Visibility,
} from 'semantic-ui-react'
import Footer from './components/Footer'
import DesktopContainer from './components/Menu'
import MobileContainer from './components/ResponisveMobile'
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import {commerce } from './lib/commence'
import Products from './components/Products/Products'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart ] = useState({})

    const fetchProducts = async () => {
      const {data} = await commerce.products.list();
      
      setProducts(data)
  }

    const fetchCart = async () => { 
      setCart(await commerce.cart.retrieve())
  }

    const handleUpdateCartQty = async (productId, quantity) => {
      const {cart} = await commerce.cart.update(productId, {quantity})

      setCart(cart)
  }

  const handleAddToCart = async (productId, quanitity) => {
    const {cart}= await commerce.cart.add(productId, quanitity);

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart)
  } 

  useEffect(()=>{
    fetchProducts();
    fetchCart()
  }, [])

return (
  <div>
  
    <DesktopContainer totalItems={cart.total_items}/>

    <Switch >
      <Router exact path="/products">
          <Products products={products} onAddToCart={handleAddToCart}/>
      </Router>
      <Router exact path="/cart">
          <Cart 
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
          />
      </Router>
    </Switch>

    {/*<ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>*/}
  <Footer/>
  </div>
  
)
}

export default App