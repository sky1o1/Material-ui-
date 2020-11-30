import React from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 150,
    marginLeft: 375,
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
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
  );
}
