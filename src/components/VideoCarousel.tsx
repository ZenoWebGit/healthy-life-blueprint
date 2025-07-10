
const VideoCarousel = () => {
  const videos = [
    { 
      id: 1, 
      title: "Formazione", 
      description: "Eventi formativi e team building",
      image: "/lovable-uploads/203ab0e7-f79d-4ec2-8b21-711bd63155ba.png"
    },
    { 
      id: 2, 
      title: "Coaching", 
      description: "Sessioni di coaching professionale",
      image: "/lovable-uploads/a404cd40-b3ad-4658-8af5-33cf491c37f3.png"
    },
    { 
      id: 3, 
      title: "Eventi Aziendali", 
      description: "Conferenze e meeting internazionali",
      image: "/lovable-uploads/2524bb98-c971-45e0-b910-a078e4ecc3e2.png"
    }
  ];

  const handleCardClick = (title: string) => {
    const event = new CustomEvent('openModal', { detail: title });
    window.dispatchEvent(event);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          I Nostri Eventi
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleCardClick(video.title)}
            >
              <div className="aspect-video overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                  src={video.image} 
                  alt={video.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
