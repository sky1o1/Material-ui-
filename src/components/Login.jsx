import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {Container, TextField, Grid, Button, AppBar,Toolbar, Typography, makeStyles } from '@material-ui/core';

function Login(props){
    const [login, setLogin] = useState({
        username: '',
        password: '',
    })
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        container: {
          padding: theme.spacing(3),
        },
        grid: {
            padding: theme.spacing(1),
        }
      }));

      const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = localStorage.getItem("cred")
        const parsed = JSON.parse(value)
        console.log(parsed.firstname)
        if(parsed.username === login.username){
            history.push("/")
        }
        else(
            alert("incorrect username")
        )
        if(parsed.password === login.password){
            history.push("/")
        }
        else(
            alert("incorrect password")
        )

        
    };

    const handleChange = (event) => {
        const copy = Object.assign({}, login);
        const e = event.currentTarget;
        copy[e.name] = e.value;
        setLogin(copy);
      };

    return (
        <React.Fragment>
            <Container className={classes.container} maxWidth="xs" label="Login" style={{backgroundColor: '#f4f4f2'}} >
            <AppBar position="static" alignitems="center" color="primary">
            <Toolbar>
            <Grid container justify="center" wrap="wrap">
                    <Grid item>
                    <Typography variant="h6">Login</Typography>
                    </Grid>
                    </Grid>
            </Toolbar>
            </AppBar>
                <form onSubmit={handleSubmit} style={{marginTop: 20}}>  
                    <Grid container justify="center"> 
                        <Grid item className={classes.grid}>
                        <TextField 
                        type="text"
                        label="Username"
                        id="outlined-basic"
                        variant="outlined"
                        name="username"
                        value={login.username}
                        onChange={handleChange}
                        />
                        </Grid>
                        <Grid item className={classes.grid}>
                        <TextField 
                        type="password"
                        label="Password"
                        id="outlined-basic"
                        variant="outlined"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                    />
                        </Grid> 
                    </Grid>
                        <Button type="submit" style={{marginLeft: 150, marginTop: 20}} variant="contained" color="primary">
                             Login
                         </Button>
                         <Link to='/register'>
                            <Button style={{marginLeft: 135, marginTop: 20}} variant="contained" color="primary">
                                Register
                            </Button>
                         </Link>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default Login;
