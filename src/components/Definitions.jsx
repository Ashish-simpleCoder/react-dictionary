import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function Definitions({meanings, word, lan}){
    const styles = createStyles()


    return(
        <Container className={styles.container}>

            { meanings[0] && meanings[0].phonetics[0] && word && lan==='en' &&  <Audio audio={meanings[0].phonetics[0].audio}/> }

            {word === '' ? <CustomTypo/> : meanings.map(mean=>mean.meanings.map(item=>item.definitions.map((def,index)=><Output key={index} def={def} />)))}

        </Container>
    )
}


const CustomTypo = () => <Typography variant='h5' color='secondary' style={{textAlign:'center',fontWeight:'100'}}>Just type in search-box to search meanings</Typography>



function Output(def){
    return(
        <div>
            <Typography color='secondary' style={{padding:'1rem 0'}}><b>Meaning</b> : {def.def.definition}</Typography>
            {
                def.def.example && <Typography color='secondary'  style={{padding:'0 0 1rem 0'}}><b>Example</b> : {def.def.example}</Typography>
            }
            <hr/>
        </div>
    )
}

function Audio({audio}){

    return (
        <audio src={audio} controls>your borswer does not support audio</audio>
    )
}

const createStyles = makeStyles(()=>({
    container:{
        marginTop:'2rem'
    }
}))
