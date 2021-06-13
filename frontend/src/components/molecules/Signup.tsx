import React, { useState, Fragment, useContext } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import axios from 'axios'
import { Formik, Field } from "formik";

import {AuthContext} from "../../context/Authentication";
import {SnackBarContext} from "../../context/Snackbar";

import { useLoginStyle } from "../../styles/Login.Styles";
import Spinner from "../atoms/Spinner";
import Logo from "../../logo.jpg";
import loginImage from "../../assets/sport.jpg";

const Signup:React.FC = () => {
    const auth = useContext(AuthContext)
    const {notify} = useContext(SnackBarContext)
    const history = useHistory();
    // const auth = useContext(AuthContext);
    const classes = useLoginStyle();
    const loginClasses = useLoginStyle();
    const [open, setOpen] = useState<boolean>(false);

    const submitHandler =async (values:any, options:any) => {
        setOpen(true)
        try {
            const response = await axios.post('http://localhost:5000/user/',{
                ...values
            })
            const {data} = response.data
            setOpen(false)
            auth.login({
                id:data._id,name:data.name,token:data.token
            },data.token)
            notify(response.data.message, 'success')
        }catch (e) {
            setOpen(false)
            notify(e.response.data.message, 'error')
        }
    };
    return (
        <Fragment>
            <Spinner open={open} />
            <div className={classes.main}>
                <Grid container item className={classes.imageContainer}>
                    <img
                        src={loginImage}
                        alt="Side Image"
                        className={classes.sideImage}
                    />
                </Grid>
                <Card  className={classes.cardWrapper}>
                    <div>
                        <Grid container className={classes.logo} justify="center">
                            <Grid item>
                                <img
                                    src={Logo}
                                    alt="Dededo Mayor Office"
                                    className={classes.image}
                                />
                            </Grid>
                        </Grid>
                        <Grid container className={classes.formContainer} justify="center">
                            <Grid item md={10} xs={10} justify="center">
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={10} md={10}>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        confirmPassword: "",
                                        email: "",
                                        password: "",
                                    }}
                                    onSubmit={(values, options) => submitHandler(values, options)}
                                >
                                    {({ values, handleSubmit, touched, errors }) => (
                                        <form onSubmit={handleSubmit} autoComplete="Off">
                                            <Grid container spacing={2} direction="column">
                                                <Grid item xs={12}>
                                                    <Field
                                                        as={TextField}
                                                        label="Name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        variant="outlined"
                                                        className="w-full"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Field
                                                        as={TextField}
                                                        label="Email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        variant="outlined"
                                                        className="w-full"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Field
                                                        as={TextField}
                                                        label="Password"
                                                        type="password"
                                                        name="password"
                                                        required
                                                        variant="outlined"
                                                        className="w-full"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Field
                                                        as={TextField}
                                                        label="Confirm Password"
                                                        type="password"
                                                        name="confirmPassword"
                                                        required
                                                        variant="outlined"
                                                        className="w-full"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-between" spacing={2}>
                                                        <Grid item md={12} xs={12}>
                                                            <button
                                                                type="submit"
                                                                // variant="contained"
                                                                // color="primary"
                                                                className="w-full"
                                                            >
                                                                Sign Up
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};

export default Signup;
