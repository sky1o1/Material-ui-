import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Skeleton from 'react-loading-skeleton';


const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
});

export default function About() {
  const classes = useStyles();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <React.Fragment>
      {loading? 
    <Card className={classes.root} variant="outlined"  >
    <CardContent>
          <Skeleton height={35} style={{marginBottom:20}} width={75}/>
      <Skeleton count={10}/>
      <Skeleton style={{marginTop:20}}  width={100}/>
        </CardContent>
    </Card>
:
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About Us
          </Typography>
          <Typography variant="body2" color="black" component="p">
          There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
             making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, 
              combined with a handful of model sentence structures, 
              to generate Lorem Ipsum which looks reasonable.
               The generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
          </Typography>
        </CardContent>
        <CardActions>
        <Button style={{color: "black"}} size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
    }
    </React.Fragment>
  );
}
