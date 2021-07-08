import React from 'react'
import useStyles from './ContactStyle'
import { Container,Paper,Typography,Input,InputLabel,FormControl } from '@material-ui/core';

function Contact() {
    const classes=useStyles();
    return (
        <div>
            <Container className={classes.wholeform}>
                         <Typography className={classes.title}>Contact Us</Typography>
                         <Typography className={classes.underTitle}>Got a question? we'd love to here from you,<br/>
                               tell us, we will respond as soon as possible.</Typography>
                      <Paper className={classes.forms}>
                            <Typography>First Name</Typography> 
                            <input className={classes.inputs} type="text"></input>
                            <Typography>First Name</Typography> 
                            <input className={classes.inputs} type="text"></input>
                            <Typography>First Name</Typography> 
                            <input className={classes.inputs} type="text"></input>
                      </Paper>
            </Container>
        </div>
    )
}

export default Contact
