import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Skeleton from 'react-loading-skeleton';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 150,
    marginLeft: 325,
  },
});

export default function Home() {
  const classes = useStyles();  
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {loading? 
    <Card className={classes.root} variant="outlined"  >
    <CardContent>
          <Skeleton height={35} style={{marginBottom:20}} width={300}/>
      <Skeleton count={10}/>
      <Skeleton style={{marginTop:20}}  width={100}/>
        </CardContent>
    </Card>
      :
    <Card className={classes.root} variant="outlined"  >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome To The Homepage
          </Typography>
          <Typography variant="body2" color="black" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with the release of 
           Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
           software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </CardContent>
        <CardActions>
        <Button style={{color: "black"}}  size="small">Learn More</Button>

      </CardActions>
      </CardActionArea>
    </Card>
    }
    </>
  );
}
