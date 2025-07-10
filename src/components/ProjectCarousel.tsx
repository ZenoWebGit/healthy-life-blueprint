
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProjectCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/3908fd3a-979a-42a6-a743-414e707760dd.png",
      alt: "Evento aziendale con managing director"
    },
    {
      src: "/lovable-uploads/27dcbeda-8e65-449a-9c0e-28d34fcb6bd3.png",
      alt: "Celebrazione con bandiere e partecipanti"
    },
    {
      src: "/lovable-uploads/e023b401-4d0d-4b2c-b518-4f08ff8fe19e.png",
      alt: "Conferenza aziendale con pubblico"
    },
    {
      src: "/lovable-uploads/822c900e-dce1-4dde-a2e4-e98233ca5f44.png",
      alt: "Presentazione sul palco"
    },
    {
      src: "/lovable-uploads/7e53bc69-e9a9-431b-ae15-446e3f091a8e.png",
      alt: "Vice presidente Carmelo Russo sul palco"
    },
    {
      src: "/lovable-uploads/3e26aee6-ae7c-4e79-82bc-54c33362452b.png",
      alt: "Grande pubblico durante l'evento"
    },
    {
      src: "/lovable-uploads/77009818-96a6-4a66-b5a6-a438efaf1e09.png",
      alt: "Partecipanti con bandiere durante la celebrazione"
    },
    {
      src: "/lovable-uploads/63aecac1-fcde-4d89-94aa-f968c496ab71.png",
      alt: "Team aziendale durante l'evento"
    }
  ];

  return (
    <div className="relative">
      <Carousel className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
