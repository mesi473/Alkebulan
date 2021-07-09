import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=>({
    wholeform:{
        background:'linear-gradient(orange,white)',
        marginTop:'-120px',
        maxWidth:'800px',
        borderRadius:'20px',
        marginBottom:'100px',
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:'35px',
        letterSpacing:'3px',
        padding:'30px',
        paddingBottom:'0px'
    },
    underTitle:{
        color:'white',
        textAlign:'center',
        fontSize:'16px',
        letterSpacing:'3px',
        padding:'30px'
    },
    inputs:{
        border:'1px solid orange',
        height:'30px',
        width:'50%',
        borderRadius:'30px',
        alignContent:"center",
        textAlign:'center',
        '&:hover':{
            border:'1px solid white',
        }

    }
}))