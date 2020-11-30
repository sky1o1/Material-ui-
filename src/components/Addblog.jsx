import React, {useState} from "react";
import {store_data, get_data} from "../utils/localstorage";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {TextField, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginTop: 150,
        marginLeft: 325,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    grid: {
        padding: theme.spacing(1),
    }
  }));

function Addblog(){
    const classes = useStyles();
    const [form, setForm] = useState({
        title: '',
        description: '',
        name: '',
        image: '',
    })
    
    const onChangeHandler = (e) => {
        const id = e.target.id
        console.log(id)
        setForm(prevState => ({
            ...prevState, [id] : e.target.value
        }))
    }
    console.log("called")
    const addBlogHandler = (e) => {
        e.preventDefault();
        const blog = {
            name: form.name,
            title: form.title,
            description: form.description,
            image: 'img',
        }
        //fecthing prev data from local storage
        const prevBlogData = get_data("blog")
        console.log()
        let updatedBlogData = {}
        if(prevBlogData){
            prevBlogData[form.title]=blog
            updatedBlogData = Object.assign({}, prevBlogData)
        }
        else{
            updatedBlogData[form.title]=blog
        }
        console.log(updatedBlogData)
        store_data(updatedBlogData, "blog")
    }
    return(
        <Card className={classes.root} variant="outlined" >
            <form onSubmit={addBlogHandler}>
        <CardActionArea>
          <CardContent>
            <Typography  variant="h5" component="h2">
              Add Blog
            </Typography>
        <Grid container>
            <Grid item>
            <TextField
                       id="name"
                       label="Name"
                       multiline
                        onChange={onChangeHandler}
                        variant="outlined"
                         />
            </Grid>
            <Grid item>
            <TextField
                       id="title"
                       label="Title"
                       multiline
                        onChange={onChangeHandler}
                        variant="outlined"
                         />
            </Grid>
            <Grid item>
            <TextField
                       id="description"
                       label="Description"
                       multiline
                       rows={4}
                        onChange={onChangeHandler}
                        variant="outlined"
                         />
            </Grid>
            <Grid item>
            <TextField
                       id="outlined-multiline-static"
                       label="Image"
                       multiline
                       rows={4}
                        onChange={onChangeHandler}
                        variant="outlined"
                         />
            </Grid>
        </Grid>
        <Button style={{marginLeft: 175, marginTop: 20}} type="submit" variant="contained" color="primary">
                                Submit
            </Button>
          </CardContent>
        </CardActionArea>
        </form>
      </Card>
        //     <input onChange={onChangeHandler} label="title" id="title" type="text"></input>
    )
}

export default Addblog;