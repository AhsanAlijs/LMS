import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig.js';
import Loader from '../../components/loader/Loader.jsx';


const ProductedRoutes = ({ component }) => {

    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');

            } else {
                setIsUser(true)

            }
        });
    }, [])

    return (
        isUser ?
            component : <Typography variant='h4' color={'initial'}><Loader /></Typography>
    )
}

export default ProductedRoutes
