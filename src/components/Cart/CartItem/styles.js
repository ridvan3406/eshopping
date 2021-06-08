import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height:400,
    boxSizing: 'border-box',
    marginBottom: '2.5rem',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));