
"use client";


import { useState } from "react";
import { useRouter } from 'next/navigation';  // Cambiado a 'next/navigation'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';



export default function Home() {


    const [value, setValue] = useState(0);
    const router = useRouter();  // Usa el router del paquete 'next/navigation'

    const handleChange = (event: any, newValue:any) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            router.push('/home'); // Ruta para la página de inicio
            break;
          case 1:
            router.push('/'); // Ruta para la página del mercado
            break;
          default:
            break;
        }
      };



    return (
        <div>

<Box      sx={{
      width: 500,
      margin: '0 auto', 
      display: 'flex',
      justifyContent: 'center', 
    }}>
        <BottomNavigation
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 30 }}/>} />
            <BottomNavigationAction label="Market" icon={<StorefrontIcon sx={{ fontSize: 30 }}/>} />
        </BottomNavigation>
        </Box>




            <h1>Home</h1>
            <p>Este es el contenido de la página de inicio.</p>
        </div>
    );





}