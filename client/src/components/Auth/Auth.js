import React from "react";
import useStyles from './styles';
import {Avatar, Container, Paper, Typography} from "@material-ui/core";
import {LockOutlined} from "@material-ui/icons";

const Auth = () => {
    const classes = useStyles();

    const isSignup = false;

    return (
     <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
             <Avatar className={classes.avatar}>
                 <LockOutlined />
             </Avatar>
             <Typography variant="h5">Sign In</Typography>
         </Paper>
     </Container>
    );
};

export default Auth;