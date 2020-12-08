import React, {useEffect, useState} from "react";
import {getRequest} from "../config/axios.config"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      marginTop: 100,
      marginLeft: 325,
    },
   avatar:{
       width:300,
       height:300,
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
   },
    type: {
        paddingTop: 20,
    },
    skel: {
        width:300,
        marginTop:20,
    }
  });

  
export default function Profile() {
    const classes = useStyles();  
    const [datas, setDatas] = useState([])
    const [info, setInfo] = useState([])
    const [loading,setLoading] = useState(true)
  
    useEffect(() => {
      setTimeout(() =>{
        setLoading(false)
      }, 1000)
    }, [])
  

    useEffect(() => {
        async function fetchMyAPi(event){
            try{
                let response = await getRequest("/")
                console.log(response.data.data)
                setDatas(response.data.data)
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchMyAPi();
    }, [])
console.log('data',info)
    return (
        <>
      <Autocomplete
      onChange={(e, value) => setInfo(value) }
        id="combo-box-demo"
      options={datas}
        getOptionLabel={(option) => option.email}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" name="id" variant="outlined" />
    }
      />
      {loading?
       <Card className={classes.root} variant="outlined"  >
        <CardContent>
          <Skeleton className={classes.avatar} variant="circle" />
      <Skeleton className={classes.skel}/>
      <Skeleton className={classes.skel}/>
        </CardContent>
    </Card>
    :
    <Card className={classes.root} variant="outlined"  >
    <CardActionArea>
      <CardContent>
          <div>
      <Avatar  className={classes.avatar}  alt="Remy Sharp" src={info.picture} />
      </div>
        <Typography className={classes.type} variant="h6" name="fristName" color="black" component="p">
            First Name: {info.firstName}
        </Typography>
        <Typography className={classes.type} variant="h6" name="email" color="black" component="p">
            Email: {info.email}
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