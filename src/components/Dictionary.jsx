import { Container, makeStyles, MenuItem, TextField } from "@material-ui/core";
import categories from "../Api/list";
import { debounce } from "lodash";


export default function Dictionary({lan, setLan, setWord}){
    const styles = createStyles()

    function handleChange(e){
        setLan(e.target.value)
        setWord('')
    }
    function handleDebounce(e){
        (debounce(()=>setWord(e.target.value),1200))()
    }

    return(
        <Container maxWidth='lg'  className={styles.container}>
            <TextField label='type a word' color='secondary' onChange={(e)=>handleDebounce(e)} className={styles.search}/>

            <TextField label='select' select value={lan} onChange={(e)=>handleChange(e)} className={styles.mode}>
                { categories.map(cat=>(<MenuItem key={cat.label} value={cat.label}>{cat.value}</MenuItem>)) }
            </TextField>
        </Container>
    )
}



const createStyles = makeStyles(()=>({
    container:{
        marginTop:'3rem',
        display:'flex'
    },
    search:{
        marginRight:'1rem',
        flex:'1'
    },
    mode:{
        width:'clamp(6rem,7rem,7vw)'
    },
    search_key:{
        marginTop:'2rem',
        fontSize:'clamp(1.6rem,1.7rem,1.7vw)'
    }
}))