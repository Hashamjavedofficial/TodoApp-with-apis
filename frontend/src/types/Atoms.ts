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

export type ENDPOINTS = 'get' | 'put' | 'patch' | 'post' | 'delete'

export interface LISTDATA {
    title:string,
    description:string
}
export interface ListFormProps {
    edit?:boolean,editValue? : LISTDATA,submitHandler:(value:any)=>void
}