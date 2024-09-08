"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Cambiado a 'next/navigation'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";

import Footer from "../../components/footer";

import React from "react";
import { Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const [value, setValue] = useState(0);
  const router = useRouter(); // Usa el router del paquete 'next/navigation'

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    switch (newValue) {
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
    <div>
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

      <div>
        <Box sx={{ padding: 2 ,marginBottom: "5%"}}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* Logo Section */}
            <Grid item xs={12} sm={12} display="flex" justifyContent="center">
              <Image
                src="https://i.ibb.co/T0pXzGT/logo-green.jpg" // Replace with your logo path
                alt="GreenBlocks Logo"
                width={150}
                height={150}
                style={{ borderRadius: "50%" }}
              />
            </Grid>

            {/* Summary Section */}
            <Grid item xs={12} sm={9}>
              <Typography variant="h5" component="h1" gutterBottom align="center">
                GreenBlocks: Plataforma Descentralizada para la Trazabilidad y Certificación de Proyectos de Sostenibilidad
              </Typography>
              <Typography variant="body1" paragraph align="justify">
                <strong>¡Compensa tus emisiones de carbono!</strong> GreenBlocks es una plataforma blockchain diseñada para rastrear, verificar y certificar proyectos de sostenibilidad, tales como reforestación, compensación de carbono, energía renovable y agricultura sostenible. Utiliza <strong>subnets de Avalanche</strong>, <strong>contratos inteligentes</strong>, y la <strong>Core Wallet</strong> para permitir a los proyectos registrar sus iniciativas de forma transparente y certificada.
              </Typography>
              <Typography variant="body1" paragraph align="justify">
                La plataforma ayuda a inversionistas y empresas a rastrear sus contribuciones y cumplir con compromisos medioambientales de manera confiable, resolviendo problemas críticos de transparencia y confianza en la compensación de carbono.
              </Typography>
              <Typography variant="body1" paragraph align="justify">
                Con <strong>contratos inteligentes</strong>, cada proyecto de sostenibilidad puede registrar datos como el número de árboles plantados, toneladas de CO2 capturadas, o energía renovable generada, que son validados y auditados por terceros en la blockchain. Además, los proyectos pueden emitir certificados de compensación de carbono en forma de <strong>NFTs</strong>, que empresas e inversionistas pueden adquirir o recibir por su apoyo.
              </Typography>
              <Typography variant="body1" paragraph align="justify">
                <strong>GreenBlocks</strong> ofrece trazabilidad en tiempo real, permitiendo a los proyectos compartir sus actualizaciones de impacto a través de sensores IoT y datos registrados en la blockchain, lo que garantiza que los inversionistas puedan verificar el uso adecuado de los fondos y el impacto directo de sus contribuciones.
              </Typography>
              <Typography variant="body1" align="justify">
                A través de alianzas con empresas y gobiernos, GreenBlocks tiene el potencial de convertirse en una plataforma estándar para la verificación y cumplimiento de iniciativas medioambientales a nivel global.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
