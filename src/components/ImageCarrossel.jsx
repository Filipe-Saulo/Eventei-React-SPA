import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carrossel

const images = [
  {
    label: "Paisagem Montanhosa",
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Grimm%2C_Paisagem_montanhosa_brasileira.jpg",
  },
  {
    label: "Praia ao Pôr do Sol",
    imgPath:
      "https://static.vecteezy.com/ti/fotos-gratis/p1/12168187-belo-por-do-sol-na-praia-com-palmeira-para-viagens-e-ferias-gratis-foto.JPG",
  },
  {
    label: "Floresta Verde",
    imgPath:
      "https://st.depositphotos.com/1000320/3895/i/450/depositphotos_38955409-stock-photo-greenwood.jpg",
  },
];

function ImageCarrossel() {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", boxShadow: 3 }}>
      <Carousel showArrows autoPlay infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <CardMedia
              component="img"
              height="300"
              image={image.imgPath}
              alt={image.label}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {image.label}
              </Typography>
            </CardContent>
          </div>
        ))}
      </Carousel>
    </Card>
  );
}

export default ImageCarrossel;
