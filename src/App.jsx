import { Container, createTheme } from "@material-ui/core"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import axios from "axios"
import { useEffect, useState } from "react"
import dictionaryApi from "./Api/api"
import Definitions from "./components/Definitions"
import Dictionary from "./components/Dictionary"
import Header from "./components/Header"
import "./styles/index.css"

export default function App(){
    const [toggleDark, settoggleDark] = useState(true);

    const [meanings, setMeanings] = useState([])
    const [word, setWord] = useState('')
    const [lan, setLan] = useState('en')

    useEffect(()=>wordMeaning(lan,word,setMeanings),[word,lan])
    // console.log(toggleDark)

    const darkTheme = createTheme({
        palette:{
            type: toggleDark ? 'dark' : 'light',
            primary:{
                main:toggleDark ? '#101517' : '#fff',
            },
            secondary: {
                main:toggleDark ? '#fff' : '#101317'
            },
            button:{
                main: toggleDark ? '#fff' : '#000'
            }
          }
        })

    const styles = createStyles()

    return(
        <>
        <ThemeProvider theme={darkTheme}>
            <div  className={styles.x} style={{width:'100%',background:toggleDark? '#101317' : '#fff'}}>
                <Container className={styles.container}>
                    <Header settoggleDark={settoggleDark} toggleDark={toggleDark}/>
                    <Dictionary lan={lan} setLan={setLan} word={word} setWord={setWord}/>
                    { meanings && <Definitions meanings={meanings} word={word} lan={lan}/> }
                </Container>
            </div>
        </ThemeProvider>
        </>
    )
}



async function wordMeaning(lan = 'en', word = 'man', setMeanings){
    try{
        const {data} = await axios.get(dictionaryApi(lan, word))
        setMeanings(data)
    }catch(e){
        console.log(e)
    }
}

const createStyles = makeStyles(()=>({
    container:{
        width:'100% !important',
        maxWidth:'100% !important',
        padding:0,
    },
    x:{
        minHeight:'100vh',
        paddingBottom:'3rem'
    }
}))