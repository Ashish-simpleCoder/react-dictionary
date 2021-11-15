import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function Definitions({meanings, word, lan}){
    const styles = createStyles()


    return(
        <Container className={styles.container}>


            { meanings[0] && meanings[0].phonetics[0] && word && lan==='en' && <audio src={meanings[0].phonetics[0].audio} controls>your borswer does not support audio</audio> }

            {word === ''
                ?
                <Typography variant='h5' color='secondary' style={{textAlign:'center',fontWeight:'100',marginTop:'10rem'}}>
                    Just type in search-box to search meanings
                </Typography>
                :
                meanings.map(mean=>mean.meanings.map(item=>item.definitions.map((def)=>{
                    return(
                        <div key={def.definition}>
                            <Typography color='secondary' style={{padding:'1rem 0'}}><b>Meaning</b> : {def.definition}</Typography>
                            { def.example && <Typography color='secondary'  style={{padding:'0 0 1rem 0'}}><b>Example</b> : {def.example}</Typography> }
                            <hr/>
                        </div>
                    )
                })))}

        </Container>
    )
}


const createStyles = makeStyles(()=>({
    container:{
        marginTop:'2rem'
    }
}))
