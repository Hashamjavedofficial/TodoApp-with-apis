import React from 'react'


import Navbar from "../atoms/Navbar";
import {Button, Grid, TextField} from "@material-ui/core";
import {Field, Formik} from "formik";
import {Link} from "react-router-dom";

import { useLoginStyle } from "../../styles/Login.Styles";

const List:React.FC = ()=>{

    const classes = useLoginStyle()
    const submitHandler = (values:any)=>{

    }
    return <div> <Navbar />

        <div>
            <Grid container className={classes.formContainer} justify="center">
                <Grid item md={10} xs={10} justify="center">
                    <br />
                    <br />
                </Grid>
                <Grid item xs={10} md={10}>
                    <Formik
                        initialValues={{
                            title: "",
                            description: "",
                        }}
                        onSubmit={(values) => submitHandler(values)}
                    >
                        {({ values, handleSubmit, touched, errors }) => (
                            <form onSubmit={handleSubmit} autoComplete="Off">
                                <Grid container spacing={2} direction="column">
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            label="title"
                                            name="title"
                                            type="text"
                                            required
                                            variant="outlined"
                                            className="w-full"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            label="Description"
                                            type="text"
                                            name="description"
                                            required
                                            variant="outlined"
                                            className="w-full"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Grid container justify="space-between" spacing={2}>
                                            <Grid item md={12} xs={12}>
                                                <Button
                                                    type={'submit'}
                                                    variant="contained"
                                                    color="primary"
                                                    className="w-full"
                                                >
                                                   Create
                                                </Button>
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
    </div>
}
export default List