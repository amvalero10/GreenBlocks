"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Cambiado a 'next/navigation'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";

export default function Navbar() {
  const [value, setValue] = useState(1);
  const router = useRouter(); // Usa el router del paquete 'next/navigation'

  const handleChange = (_: SyntheticEvent, value: number) => {
    setValue(value);
    switch (value) {
      case 0:
        router.push("/home"); // Ruta para la página de inicio
        break;
      case 1:
        router.push("/"); // Ruta para la página del mercado
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon sx={{ fontSize: 30 }} />}
        />
        <BottomNavigationAction
          label="Market"
          icon={<StorefrontIcon sx={{ fontSize: 30 }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
