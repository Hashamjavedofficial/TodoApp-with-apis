import { useState, useCallback } from 'react'

const useSnackBar = (): any => {
    const [openSnack, setOpenSnack] = useState<boolean>(false)
    const [message, setMessage] = useState<string>()
    const [snackType, setType] = useState<string>()
    const timer: number = 3000

    const handleClose = useCallback(() => {
        setOpenSnack(false)
    }, [])

    const resetHandler = () => {
        setTimeout(() => {
            setOpenSnack(false)
        }, timer)
    }

    const notify = useCallback((message: string, snackType: string) => {
        setOpenSnack(true)
        setMessage(message)
        setType(snackType)
        resetHandler()
    }, [])
    return { notify, message, openSnack, snackType, handleClose }
}

export default useSnackBar