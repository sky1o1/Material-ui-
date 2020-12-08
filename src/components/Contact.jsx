import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemIcon } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 150,
    marginLeft: 375,
  },
});

export default function Contact() {
  const classes = useStyles();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1000)
  }, [])

const rows = 5;
  return (
    <React.Fragment>
       {loading? 
    <Card className={classes.root} variant="outlined"  >
    <CardContent>
         <div> <Skeleton height={35} style={{marginBottom:20}} width={120}/></div>
             <div>
            <Skeleton circle={true} height={30} width={30} />
             <Skeleton style={{marginLeft:10}} width={150}/>
           </div>      
           <div>
            <Skeleton circle={true} height={30} width={30} />
             <Skeleton style={{marginLeft:10}} width={150}/>
           </div>  
           <div>
            <Skeleton circle={true} height={30} width={30} />
             <Skeleton style={{marginLeft:10}} width={150}/>
           </div>  
           <div>
            <Skeleton circle={true} height={30} width={30} />
             <Skeleton style={{marginLeft:10}} width={150}/>
           </div>   
         <span><Skeleton style={{marginTop:20}}  width={100}/></span>
        </CardContent>
    </Card>
:
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contact Us
          </Typography>
          <Typography variant="body2" color="black" component="p">
            <List>
                <ListItem>
                    <ListItemIcon><FacebookIcon /></ListItemIcon>Facebook
                </ListItem>
                <ListItem>
                    <ListItemIcon><TwitterIcon /></ListItemIcon>Twitter
                </ListItem>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>Mail: test@test.com
                </ListItem>
                <ListItem>
                    <ListItemIcon><RingVolumeIcon /></ListItemIcon>Telephone: 981234567
                </ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions>
        <Button style={{color: "black"}}  size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>
    }
    </React.Fragment> 
  );
}
