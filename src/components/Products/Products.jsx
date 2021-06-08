import React from 'react';
import { Grid, Card} from 'semantic-ui-react'

import Product from './Product/Product'
import useStyles from './styles'

const Products = ({products, onAddToCart}) => { 
    const classes = useStyles()

    return(
        <main className={classes.content}>
            <Card.Group itemsPerRow={4} >
                {products.map((product)=>(
                    <Grid.Row relaxed='very' columns={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid.Row>
                ))}
            </Card.Group>
        </main>
    )
}


export default Products;

