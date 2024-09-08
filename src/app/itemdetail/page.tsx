"use client";
import Navbar from "../../components/navbar";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Grid } from '@mui/material';



const items = [
  {
    id: 1,
    title: 'Reforestación Urbana',
    description: 'Iniciativa para reforestar áreas urbanas, plantando árboles en parques y calles para mejorar la calidad del aire y proporcionar sombra.',
    image: 'https://img.freepik.com/vector-gratis/concepto-moda-sostenible-dibujado-mano-plana_23-2148811864.jpg?t=st=1725778863~exp=1725782463~hmac=d22982faf29f85dfe2e0310ac8cf8a8450af43a4fb0712f70eda172eb85c29d3&w=1060',
    value: 150000
  },
  {
    id: 2,
    title: 'Paneles Solares Comunitarios',
    description: 'Proyecto para instalar paneles solares en edificios comunitarios, reduciendo el costo de energía y promoviendo el uso de energías renovables.',
    image: 'https://img.freepik.com/vector-premium/imagen-hombre-mujer-globo-globo-palabras-amor-el_1217673-214938.jpg?w=1060',
    value: 200000
  },
  {
    id: 3,
    title: 'Agricultura Regenerativa',
    description: 'Programa para implementar prácticas de agricultura regenerativa que mejoren la salud del suelo y aumenten la biodiversidad.',
    image: 'https://img.freepik.com/fotos-premium/viviendo0100-26_1288896-4174.jpg?w=1060',
    value: 100000
  },
  {
    id: 4,
    title: 'Hidroponía Sostenible',
    description: 'Desarrollo de sistemas de cultivo hidropónico en zonas urbanas para cultivar alimentos de manera eficiente y sostenible.',
    image: 'https://img.freepik.com/vector-premium/estudiantes-que-utilizan-realidad-aumentada-experiencias-aprendizaje-interactivas-ilustracion-vectorial_1033579-59556.jpg?w=1800',
    value: 180000
  },
  {
    id: 5,
    title: 'Reciclaje de Plásticos',
    description: 'Iniciativa para recoger y reciclar plásticos en comunidades locales, transformándolos en nuevos productos útiles.',
    image: 'https://img.freepik.com/vector-premium/personas-eco-conscientes-que-cultivan-plantas-iluminacion-sostenible_1263357-7506.jpg?w=1060',
    value: 130000
  },
  {
    id: 6,
    title: 'Energía Eólica Comunitaria',
    description: 'Proyecto para instalar turbinas eólicas en comunidades rurales, generando energía limpia y sostenible para la población local.',
    image: 'https://img.freepik.com/vector-gratis/ilustracion-guardar-mensaje-planeta_23-2148514659.jpg?t=st=1725779058~exp=1725782658~hmac=419e015b1a28b7359f07132abf602af5e47092ab4f2ddd64b8389bc1ebd4c0ef&w=1060',
    value: 220000
  },
  {
    id: 7,
    title: 'Restauración de Ecosistemas',
    description: 'Proyecto para restaurar ecosistemas degradados, incluyendo la limpieza de ríos y la rehabilitación de hábitats naturales.',
    image: 'https://img.freepik.com/vector-gratis/guarde-concepto-planeta-personas-globo_23-2148522030.jpg?t=st=1725779099~exp=1725782699~hmac=ade24b5932fbaf012f361165d601b16842743ed612670a91875f7e65a98e2591&w=1800',
    value: 250000
  },
  {
    id: 8,
    title: 'Educación Ambiental',
    description: 'Programa educativo para concienciar a jóvenes y adultos sobre prácticas sostenibles y la importancia de la protección del medio ambiente.',
    image: 'https://img.freepik.com/vector-gratis/concepto-rse-plano-ilustrado_23-2148919649.jpg?t=st=1725779148~exp=1725782748~hmac=e4b77b94c4bc5427103993442b9e8d6c7637be9be0c26422fddc79afeb78f6b7&w=1800',
    value: 90000
  }
]





const ItemDetail = () => {
  const searchParams = useSearchParams();
  const itemId:any = searchParams.get('id');

  // Busca el artículo basado en el ID
  const item = items.find(item => item.id === parseInt(itemId));

  if (!item) {
    return (
      <div>
        <Navbar />
        <Container>
          <Typography variant="h6">No se encontró el artículo con el ID proporcionado.</Typography>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt={item.title}
                height="240"
                image={item.image}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary" marginTop={2}>
                  ${item.value.toLocaleString()}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  onClick={() => alert('Compra realizada con éxito!')} 
                >
                  Comprar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ItemDetail;