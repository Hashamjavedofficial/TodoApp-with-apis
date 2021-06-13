
import { useCallback, useEffect, useState } from "react";

import {SUN,USER} from "../types/Atoms";

const useAuth = () => {

    const [token, setToken] = useState<SUN>(null);
    const [user, setUserId] = useState<USER | null>(null);

    const login = useCallback((user, token) => {
        setToken(token);
        setUserId(user);
        localStorage.setItem(
            "userData",
            JSON.stringify({
                user: user,
                token,
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem("userData");
    }, []);

    useEffect(() => {
        const userData : any = localStorage.getItem("userData")
        const storedData = JSON.parse(userData);
        if (
            storedData &&
            storedData.token
        ) {
            login(storedData.userId, storedData.token);
        }
    }, [login]);


    return { login, logout, token, user };
};
export default useAuth;