import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Box, Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: "inherit"
        },
        grid: {
            height: "100vh",

        },
        paper: {
            height: "100vh",
        },
        navItem:{
            borderBottom: "1px solid silver",
            width: "100%",
            textAlign: "center"
        },
        navLink:{
            textDecoration: "none",
        },
        content:{
          marginTop: theme.spacing(4),
            marginRight: theme.spacing(50),
            height: "50vh",

        }
    }),
);

function Material() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Grid container justify="space-between">
                <Grid className={classes.grid} xs={1}>
                    <Paper className={classes.paper}>
                        <Box className={classes.navItem}>
                        <a className={classes.navLink} href="#">123</a>
                        </Box>
                    </Paper>
                </Grid>
                <Grid xs={9}>
                    <Paper className={classes.content}>
                        <Typography variant="h6">Text</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Iste nesciunt officia quam totam
                            ullam veniam, voluptate voluptatum! Adipisci
                            assumenda quis repellendus velit? Asperiores
                            consequatur esse fugiat, natus nemo ratione totam.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}

export default Material;