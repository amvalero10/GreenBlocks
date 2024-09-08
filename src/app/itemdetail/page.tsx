"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import React from "react";
import { useSearchParams } from "next/navigation";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { AlignHorizontalRight, ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const items = [
  {
    id: 1,
    title: "Reforestación Urbana",
    description:
      "Iniciativa para reforestar áreas urbanas, plantando árboles en parques y calles para mejorar la calidad del aire y proporcionar sombra.",
    image:
      "https://img.freepik.com/vector-gratis/concepto-moda-sostenible-dibujado-mano-plana_23-2148811864.jpg?t=st=1725778863~exp=1725782463~hmac=d22982faf29f85dfe2e0310ac8cf8a8450af43a4fb0712f70eda172eb85c29d3&w=1060",
    value: 150000,
  },
  {
    id: 2,
    title: "Paneles Solares Comunitarios",
    description:
      "Proyecto para instalar paneles solares en edificios comunitarios, reduciendo el costo de energía y promoviendo el uso de energías renovables.",
    image:
      "https://img.freepik.com/vector-premium/imagen-hombre-mujer-globo-globo-palabras-amor-el_1217673-214938.jpg?w=1060",
    value: 200000,
  },
  {
    id: 3,
    title: "Agricultura Regenerativa",
    description:
      "Programa para implementar prácticas de agricultura regenerativa que mejoren la salud del suelo y aumenten la biodiversidad.",
    image:
      "https://img.freepik.com/fotos-premium/viviendo0100-26_1288896-4174.jpg?w=1060",
    value: 100000,
  },
  {
    id: 4,
    title: "Hidroponía Sostenible",
    description:
      "Desarrollo de sistemas de cultivo hidropónico en zonas urbanas para cultivar alimentos de manera eficiente y sostenible.",
    image:
      "https://img.freepik.com/vector-premium/estudiantes-que-utilizan-realidad-aumentada-experiencias-aprendizaje-interactivas-ilustracion-vectorial_1033579-59556.jpg?w=1800",
    value: 180000,
  },
  {
    id: 5,
    title: "Reciclaje de Plásticos",
    description:
      "Iniciativa para recoger y reciclar plásticos en comunidades locales, transformándolos en nuevos productos útiles.",
    image:
      "https://img.freepik.com/vector-premium/personas-eco-conscientes-que-cultivan-plantas-iluminacion-sostenible_1263357-7506.jpg?w=1060",
    value: 130000,
  },
  {
    id: 6,
    title: "Energía Eólica Comunitaria",
    description:
      "Proyecto para instalar turbinas eólicas en comunidades rurales, generando energía limpia y sostenible para la población local.",
    image:
      "https://img.freepik.com/vector-gratis/ilustracion-guardar-mensaje-planeta_23-2148514659.jpg?t=st=1725779058~exp=1725782658~hmac=419e015b1a28b7359f07132abf602af5e47092ab4f2ddd64b8389bc1ebd4c0ef&w=1060",
    value: 220000,
  },
  {
    id: 7,
    title: "Restauración de Ecosistemas",
    description:
      "Proyecto para restaurar ecosistemas degradados, incluyendo la limpieza de ríos y la rehabilitación de hábitats naturales.",
    image:
      "https://img.freepik.com/vector-gratis/guarde-concepto-planeta-personas-globo_23-2148522030.jpg?t=st=1725779099~exp=1725782699~hmac=ade24b5932fbaf012f361165d601b16842743ed612670a91875f7e65a98e2591&w=1800",
    value: 250000,
  },
  {
    id: 8,
    title: "Educación Ambiental",
    description:
      "Programa educativo para concienciar a jóvenes y adultos sobre prácticas sostenibles y la importancia de la protección del medio ambiente.",
    image:
      "https://img.freepik.com/vector-gratis/concepto-rse-plano-ilustrado_23-2148919649.jpg?t=st=1725779148~exp=1725782748~hmac=e4b77b94c4bc5427103993442b9e8d6c7637be9be0c26422fddc79afeb78f6b7&w=1800",
    value: 90000,
  },
];


const CustomButton = styled(Button)({
  backgroundColor: '#3E8662', // Tu color personalizado
  '&:hover': {
    backgroundColor: '#e64a19', // Color en hover (opcional)
  },
});


const CustomButton2 = styled(Button)({
  backgroundColor: '#D83620', // Tu color personalizado
  '&:hover': {
    backgroundColor: '#e64a19', // Color en hover (opcional)
  },
});









const ItemDetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const itemId: string | null = searchParams.get("id")
    ? searchParams.get("id")
    : "";

  // Busca el artículo basado en el ID
  const item = items.find(
    (item) => item.id === parseInt(itemId ? itemId : "0")
  );

  if (!item) {
    return (
      <div>
        <Navbar />
        <Container>
          <Typography variant="h6">
            No se encontró el artículo con el ID proporcionado.
          </Typography>
        </Container>
      </div>
    );
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <Navbar />
      <Container style={{marginTop: "1%", marginBottom: "3%"}}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <ArrowBack
                onClick={handleBack}
                className="ml-4 mt-4 cursor-pointer"
              />
              <CardMedia
                component="img"
                alt={item.title}
                height="240"
                image={item.image}
                style={{ height: "400px", objectFit: "cover"}}
              />
              <CardContent>
              <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>



                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>

                <Typography variant="h6" marginTop={2}
                    sx={{
                      mt: "auto",
                      textAlign: "right", // Alinear a la derecha
                      fontWeight: "bold", // Negrita
                    }}>
                  ${item.value.toLocaleString()}
                </Typography>

                {/* <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => alert("Compra realizada con éxito!")}
                >
                  Comprar
                </Button> */}



            <Grid container alignItems="center" justifyContent="center" spacing={2} marginTop={1}>
              <Grid item>
                <TextField
                  type="number"
                  variant="outlined"
                  size="small"
                  inputProps={{ min: 0 }}

                />
              </Grid>

              {/* <Grid item>
                <Button variant="contained" color="success">
                  Fondear
                </Button>
                 </Grid> */}


              <Grid item>
                <CustomButton variant="contained">
                  Fondear
                </CustomButton>
              </Grid>
            </Grid>

            {/* <Divider  style={{marginTop: "3%", marginBottom: "3%"}}/> */}
            


            <Accordion style={{ marginTop: "3%", marginBottom: "3%" }}>
  <AccordionSummary
    expandIcon={<ArrowDropDownIcon />}
    aria-controls="panel2-content"
    id="panel2-header"
  >
    <Typography>Publico</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <div style={{ display: "flex", alignItems: "center", marginLeft: "auto", gap: "10px", width: "100%", justifyContent: "flex-end" }}>
      <Typography>
        Historial de denuncias
      </Typography>

      <CustomButton2 variant="contained" size="small">
        Reportar
      </CustomButton2>
    </div>
  </AccordionDetails>
</Accordion>



<Accordion style={{ marginTop: '3%', marginBottom: '3%' }}>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>Dueño</Typography>
    </AccordionSummary>
    <AccordionDetails
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px', // Ajusta el espacio entre botones según lo necesites
      }}
    >
      <CustomButton variant="contained">Stakear</CustomButton>
      <CustomButton variant="contained">Retirar</CustomButton>
    </AccordionDetails>
  </Accordion>


      {/* <Grid container spacing={2} marginLeft="20%">
      <Grid item xs={12} md={6}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Historial de Denuncias</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sin denuncias
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Grid>
      <Grid item xs={12} md={6}>
        <CustomButton2 variant="contained" size="small">
          Reportar
        </CustomButton2>
      </Grid>
    </Grid> */}





            {/* <Divider  style={{marginTop: "3%", marginBottom: "3%"}}/> */}



              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <div>
      <Footer />
      </div>

    </div>
  );
};

export default ItemDetail;
