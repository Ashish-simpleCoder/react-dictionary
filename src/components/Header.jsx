import { AppBar, Button, Container, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

export default function Header({settoggleDark, toggleDark}){
    function changeTheme(settoggleDark){
        settoggleDark(!toggleDark)
    }

    const styles = createStyle()

    return(
        <AppBar className={styles.header} position='static'>
            <Container>
                <Toolbar>
                    <Typography variant='h3' className={styles.title} >Dictionary</Typography>
                    <Button variant='outlined' className={styles.button} onClick={()=>changeTheme(settoggleDark)}>Dark</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


const createStyle = makeStyles(()=>({
    header:{
        width:'100%',
        flexDirection:'row',
        height:'5rem',
        alignItems:'center',
    },
    title:{
        flex:1,
        fontWeight:'200'
    },
    button:{
        height:'2rem'
    }
}))
const styles={
    fontSize:'clamp(3rem,4rem,4vw)',
    // textAlign:'center',
    fontWeight:'300',
    // color:'rgb(0,0,200)'
}