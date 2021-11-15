import {lazy, Suspense} from 'react'
import { Container, createTheme, Typography } from "@material-ui/core"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import axios from "axios"
import { useEffect, useState } from "react"
import dictionaryApi from "./Api/api"
import Dictionary from "./components/Dictionary"
import Header from "./components/Header"
import "./styles/index.css"

const Definitions = lazy(()=>import("./components/Definitions"))

export default function App(){
    const [toggleDark, settoggleDark] = useState(false);

    const [meanings, setMeanings] = useState([])
    const [word, setWord] = useState('')
    const [lan, setLan] = useState('en')

    useEffect(()=>wordMeaning(lan,word,setMeanings),[word,lan])

    const styles = createStyles()

    return(
        <>
        <ThemeProvider theme={darkTheme(toggleDark)}>
            <div  className={styles.x} style={{width:'100%',background:toggleDark? '#102020' : '#fff'}}>
                <Container className={styles.container}>
                    <Header settoggleDark={settoggleDark} toggleDark={toggleDark}/>

                    <Dictionary lan={lan} setLan={setLan} word={word} setWord={setWord}/>

                    { meanings && <Suspense fallback={<h1>loading...</h1>}><Definitions meanings={meanings} word={word} lan={lan}/></Suspense> }

                    { !meanings && <Typography variant='h3'>no result found.</Typography>}
                </Container>

            </div>
        </ThemeProvider>
        </>
    )
}


async function wordMeaning(lan, word, setMeanings){
    try{
        if(!lan || !word) return
        const {data} = await axios.get(dictionaryApi(lan, word))
        if(!data) return setMeanings('')
        setMeanings(data)
    }catch(e){
        setMeanings('')
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

function darkTheme(toggleDark){
    return(
        createTheme({
            palette:{
                type: toggleDark ? 'dark' : 'light',
                primary:{
                    main:toggleDark ? '#102030' : '#fff',
                },
                secondary: {
                    main:toggleDark ? '#fff' : '#101317'
                },
                button:{
                    main: toggleDark ? '#fff' : '#000'
                }
            }
        })
    )
}