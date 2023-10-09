import img1 from "../static/fundo.avif";

export default function Carousel() {
  const images = [
    {
      src: { img1 },
      alt: "Imagem 1",
    },
    {
      src: { img1 },
      alt: "Imagem 2",
    },
    {
      src: { img1 },
      alt: "Imagem 3",
    },
  ];
  return (
    <div>
      <Carousel images={images} />
      <img src={img1} alt="img1" />
    </div>
  );
}
