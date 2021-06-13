import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import CustomizedSnackbars from "./components/atoms/CustomSnackBar";
import Routes from "./Routes";

import {SnackBarContext} from "./context/Snackbar";
import useSnackBar from "./hooks/useSnackBar";
import {theme} from "./utils/theme";
import './App.css';


const App:React.FC = () =>{
    const { notify, message, openSnack, snackType, handleClose } = useSnackBar()
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <SnackBarContext.Provider value={{ notify, message, openSnack, snackType, handleClose }}>
                  <CustomizedSnackbars
                      open={openSnack}
                      onClose={handleClose}
                      type={snackType}
                      message={message}
                  />
              <Routes />
              </SnackBarContext.Provider>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
