export type SUN = string  | number | null
export interface SpinnerProps{
    open:boolean
}

export interface CustomizedSnackBarProps{
    open?:boolean,
    onClose?:()=>void,
    message?:string,
    type?:any
}

export interface USER{
    id:string,
    name:string,token:string
}

export interface AuthContextType{
    isLoggedIn: boolean,
    user:  USER | null,
    token: SUN,
    login: (uuid:any,token:any) => void,
    logout: () => any,
}