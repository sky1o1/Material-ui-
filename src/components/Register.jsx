import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import { Grid, TextField , makeStyles, Button, Container, AppBar,Toolbar, Typography} from "@material-ui/core";

function Register(){
    const [register, setRegister] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
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
        const myObj = {
            "firstname": register.firstname,
            "lastname": register.lastname,
            "email": register.email,
            "username": register.username,
            "password": register.password,
          };
          const myObjStr = JSON.stringify(myObj);
        localStorage.setItem(
            "cred",myObjStr)
                history.push("/login")
                }

    const handleChange = (event) => {
        const copy = Object.assign({}, register);
        const e = event.currentTarget;
        copy[e.name] = e.value;
        setRegister(copy);
      };
    
    return(
        <React.Fragment>
            <Container className={classes.container} maxWidth="xs" label="Register" style={{backgroundColor: '#f4f4f2'}}>
            <AppBar position="static" alignitems="center" color="primary">
            <Toolbar>
            <Grid container justify="center" wrap="wrap">
                    <Grid item>
                    <Typography variant="h6">Register</Typography>
                    </Grid>
                    </Grid>
            </Toolbar>
            </AppBar>
            <form onSubmit={handleSubmit} style={{marginTop: 20}}>
                <Grid container justify="center">
                    <Grid item className={classes.grid}>
                    <TextField 
                        type="text"
                        label="First Name"
                        id="outlined-basic"
                        variant="outlined"
                        name="firstname"
                        value={register.firstname}
                        onChange={handleChange}
                    />
                    </Grid>
                    <Grid item className={classes.grid}>
                    <TextField 
                        type="text"
                        label="Last Name"
                        id="outlined-basic"
                        variant="outlined"
                        name="lastname"
                        value={register.lastname}
                        onChange={handleChange}
                    />
                    </Grid>
                    <Grid item className={classes.grid}>
                    <TextField 
                        type="email"
                        label="Email"
                        id="outlined-basic"
                        variant="outlined"
                        name="email"
                        value={register.email}
                        onChange={handleChange}
                    />
                    </Grid>
                    <Grid item className={classes.grid}>
                    <TextField 
                        type="text"
                        label="Username"
                        id="outlined-basic"
                        variant="outlined"
                        name="username"
                        value={register.username}
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
                        value={register.password}
                        onChange={handleChange}
                    />
                    </Grid>
            </Grid>

            <Button type="submit" variant="contained" color="primary" style={{marginLeft: 150, marginTop: 20}}>
               Submit
             </Button>
            </form>
            </Container>
        </React.Fragment>
    )
}

export default Register;