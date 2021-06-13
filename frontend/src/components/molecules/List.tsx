import React, {useContext, useState, useEffect} from 'react'

import Navbar from "../atoms/Navbar";
import { Grid } from "@material-ui/core";

import axios from 'axios'

import {SnackBarContext} from "../../context/Snackbar";
import { useLoginStyle } from "../../styles/Login.Styles";
import {AuthContext} from "../../context/Authentication";
import Spinner from "../atoms/Spinner";
import ListForm from "../atoms/ListForm.";

import {ENDPOINTS,LISTDATA} from "../../types/Atoms";


const List:React.FC = ()=>{
    const classes = useLoginStyle()
    const {notify} = useContext(SnackBarContext)
    const {token} = useContext(AuthContext)

    const [open,setOpen] = useState<boolean>(false)
    const [list,setList] = useState<LISTDATA[] | null>(null)

    const fetchData = async()=>{
        try{
            setOpen(true)
          const response = await axios.get('http://localhost:5000/list/',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            setList(response.data.data)
            setOpen(false)
        }catch (e) {
            setOpen(false)
        }
    }

    const actionHandler =async (type:ENDPOINTS,payload:undefined|any)=>{
        setOpen(true)
        try {
            let response;
            if(payload){
                response = await axios[type]('http://localhost:5000/list/',payload,{
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                })
            }else{
                response = await axios[type]('http://localhost:5000/list/',{
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                })
            }
            const {data} = response.data
           await fetchData()
            setOpen(false)

            notify(response.data.message, 'success')
        }catch (e) {
            setOpen(false)
            notify(e.response.data.message,'error')
        }
    }

    const submitHandler = (values:any)=>{
        actionHandler('post',values).then(res=>{

        })
    }
    return <div> <Navbar />

        <div>
            <Spinner open={open} />
            <Grid container className={classes.formContainer} justify="center">
                <Grid item md={10} xs={10} justify="center">
                    <br />
                    <br />
                </Grid>
              <ListForm submitHandler={submitHandler} />
            </Grid>
        </div>
    </div>
}
export default List