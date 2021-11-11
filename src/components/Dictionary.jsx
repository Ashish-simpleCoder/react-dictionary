import { Container, createTheme, makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import categories from "../Api/list";

export default function Dictionary({lan, setLan, word, setWord}){

    const styles = createStyles()

    function handleChange(e){
        setLan(e.target.value)
        setWord('')
    }

    return(
        <Container maxWidth='lg'  className={styles.container}>
            <TextField label='type a word' color='secondary' value={word} onChange={(e)=>setWord(e.target.value)} className={styles.search}/>

            <TextField label='select' select value={lan} onChange={(e)=>handleChange(e)} className={styles.mode}>
                { categories.map(cat=>(<MenuItem key={cat.label} value={cat.label}>{cat.value}</MenuItem>)) }
            </TextField>

            {/* <Typography color='secondary' className={styles.search_key}>{word}</Typography> */}
        </Container>
    )
}



const createStyles = makeStyles(()=>({
    container:{
        // textAlign:'center',
        marginTop:'3rem',
        display:'flex'
    },
    search:{
        marginRight:'1rem',
        // width:'100%'
        flex:'1'
    },
    mode:{
        width:'clamp(6rem,7rem,7vw)'
    },
    search_key:{
        // textAlign:'left',
        marginTop:'2rem',
        fontSize:'clamp(1.6rem,1.7rem,1.7vw)'
    }
}))