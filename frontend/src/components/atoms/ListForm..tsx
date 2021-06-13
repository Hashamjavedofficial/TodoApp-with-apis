import React from 'react'
import {Button, Grid, TextField} from "@material-ui/core";
import {Field, Formik} from "formik";

import {ListFormProps} from "../../types/Atoms";

import {useLoginStyle} from "../../styles/Login.Styles";



const ListForm:React.FC<ListFormProps> = (props)=>{
    const {submitHandler,editValue,edit=false} = props
    const classes = useLoginStyle()

    return   <Grid item xs={10} md={10}>
        <Formik
            initialValues={{
                title: "",
                description: "",
            }}
            onSubmit={(values) => submitHandler(values,)}
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
}
export default ListForm