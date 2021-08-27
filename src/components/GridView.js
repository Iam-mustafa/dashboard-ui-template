import React from 'react';
import { makeStyles,createTheme, responsiveFontSizes, ThemeProvider  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dropdown from './Dropdown';
import OrderDate from './OrderDate';
import Chart from './Chart';
import Piechart from './Piechart';
import BarChart from './BarChart';
import Table from './Table';
import EditTable from './EditTable';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'Left',
    color: theme.palette.text.secondary,
    marginBottom: 10
  },
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><Dropdown/></Paper>
          <Paper className={classes.paper}><Piechart/></Paper>
        </Grid>
        <Grid item xs >
          <Paper className={classes.paper} style={{height:'19.5%',color:'black'}}>
            <OrderDate/> 
          </Paper>
          <Paper className={classes.paper} style={{height:'74.5%',color:'black'}}> 
          <Typography style={{color:'green',textAlign:'center',marginTop:10}} variant="h5">^88.82%</Typography>
          <Typography variant="h6" style={{textAlign:'center',marginTop:20}}>On time delivery rate</Typography>
          <Typography variant="h6" style={{textAlign:'center',marginTop:20}}>On time | Delivered</Typography>
          <Typography variant="h6" style={{textAlign:'center',marginRight:12,marginTop:20,color:'dark gray'}}>17216 | 19384</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <ThemeProvider theme={theme}>
        <Typography variant="h5" style={{color:'black'}}>Cash to cash cycle time:</Typography>
      </ThemeProvider>
            <Chart/>
            </Paper>
        </Grid>
        <Grid item xs >
          <Paper className={classes.paper} >
          <Typography variant="h5" style={{color:'black'}}>3 days</Typography>
          <Typography variant="h6">days recievable outsatanding</Typography>
          </Paper>
          <Paper className={classes.paper} >
          <Typography variant="h5" style={{color:'black'}}>2 days</Typography>
          <Typography variant="h6">days payable outsatanding</Typography>
          </Paper>
          <Paper className={classes.paper}>
          <Typography variant="h5" style={{color:'black'}}>34 days</Typography>
          <Typography variant="h6">days inventory outsatanding</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><BarChart/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Table/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><EditTable/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
