import { createContext } from 'react'

export const SnackBarContext = createContext({
    notify: (message: string, snackType: string) => {},
    message: '',
    openSnack: false,
    snackType: '',
    handleClose: () => {},
})