import { createContext } from "react";
import {AuthContextType} from "../types/Atoms";

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    user: null,
    token: null,
    login: () => {},
    logout: () => {},
});