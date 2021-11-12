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

                    <Button variant='outlined' className={styles.button} onClick={()=>changeTheme(settoggleDark)}>
                        {toggleDark ? 'Light Mode' : 'Dark Moment'}
                    </Button>
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