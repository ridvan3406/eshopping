import _ from 'lodash'
import React from 'react'
import { Button, Card, Divider, Image, Placeholder, Grid, IconGroup } from 'semantic-ui-react'


const Product = ({ product, onAddToCart}) => {

    return (
      <div>
        <Divider/>
            <Card key={product.header}>   
                <Image image={product.source} wrapped ui={false} />
              <Card.Content>
                  <Card.Header>{product.header}</Card.Header>
                  <Card.Description>{product.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Button aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                  Add
              </Button>
              </Card.Content>
            </Card>
        </div>
    )
}

export default Product

// import React from 'react'
// import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
// import {AddShoppingCart} from '@material-ui/icons'


// import useStyles from './styles';

// const Product = ({product, onAddToCart}) => {
//     const classes = useStyles();

//     console.log(product)

//     return (
//         <Card className={classes.root}>
//             <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
//             <CardContent>
//                 <div className={classes.cardContent}>
//                     <Typography variant='h5' gutterBottom>
//                         {product.name}
//                     </Typography>
//                     <Typography variant='h5' gutterBottom>
//                         {product.price.formatted_with_symbol}
//                     </Typography>
//                 </div>
//                 <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2' color="textSecondary"/>
//             </CardContent>
//             <CardActions disableSpacing className={classes.cardActions}>
//                 <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
//                     <AddShoppingCart/>
//                 </IconButton>
//             </CardActions>
//         </Card>
//     )
// }
