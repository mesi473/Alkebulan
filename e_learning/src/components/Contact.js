import React from 'react'
import useStyles from './ContactStyle'
import { Container,Typography,Button } from '@material-ui/core';

function Contact() {
    const classes=useStyles();
    return (
        <div>
            <Container className={classes.wholeform}>
                         <Typography className={classes.title}>Contact Us</Typography>
                         <Typography className={classes.underTitle}>Got a question? we'd love to here from you,<br/>
                               tell us, we will respond as soon as possible.</Typography>
                      <div className={classes.forms}>
                            <Typography className={classes.underTitle2}>First Name</Typography> 
                            <input className={classes.inputs} type="text"></input>
                            <Typography className={classes.underTitle2}>Last Name</Typography> 
                            <input className={classes.inputs} type="text"></input>
                            <Typography className={classes.underTitle2}>Email</Typography> 
                            <input className={classes.inputs} type="text"></input>
<<<<<<< HEAD
                            <Typography className={classes.underTitle2}>Message</Typography> 
                            <input  className={classes.inputs1} type="text"></input><br/>
                            <Button  variant='contained' type="submit"className={classes.submitButton}>Send message</Button>
=======
                           <Typography> Last Name</Typography>
                           <input className={classes.inputs} type="text"></input>
                           <Typography> Age</Typography>
                           <input className={classes.input} type="number"></input>
                           <input className={classes.input} type="text"></input>
>>>>>>> 6cf1fc6c60310f9340b18a677b68f5b542fd4d37
                      </div>
            </Container>
        </div>
    )
}

export default Contact
