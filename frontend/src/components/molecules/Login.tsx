import React, { useState, Fragment } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Formik, Field } from "formik";

import { useLoginStyle } from "../../styles/Login.Styles";
import Spinner from "../atoms/Spinner";
import Logo from "../../logo.jpg";
import loginImage from "../../assets/sport.jpg";

const Login:React.FC = () => {
    const history = useHistory();
    // const auth = useContext(AuthContext);
    const classes = useLoginStyle();
    const loginClasses = useLoginStyle();
    const [open, setOpen] = useState(false);

    const submitHandler = (values:any, options:any) => {

    };
    return (
        <Fragment>
            <Spinner open={false} />
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
                                    alt="assesment"
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
                                                        label="Email Address"
                                                        name="email"
                                                        type="text"
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
                                                <Grid item>
                                                    <Grid container justify="space-between" spacing={2}>
                                                        <Grid item md={12} xs={12}>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                className="w-full"
                                                            >
                                                                Sign In
                                                            </Button>
                                                            <div>
                                                                <div className={loginClasses.textWrapperSignup}>
                                                                    New User?
                                                                    <Link to="/signup"> Sign Up</Link>
                                                                </div>
                                                            </div>
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

export default Login;
