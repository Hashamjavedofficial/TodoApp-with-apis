import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'

import {CustomizedSnackBarProps} from "../../types/Atoms";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

export default function CustomizedSnackbars(props: CustomizedSnackBarProps):JSX.Element {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Snackbar
                open={props.open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={props.onClose}
            >
                <Alert onClose={props.onClose} severity={props.type}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    )
}