
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
      description: "Conferenze e meeting internazionali. Organizziamo eventi aziendali di alto livello per promuovere la crescita professionale e il networking. I nostri eventi sono progettati per creare valore e opportunità di business per tutti i partecipanti",
      image: "/lovable-uploads/2524bb98-c971-45e0-b910-a078e4ecc3e2.png"
    }
  ];

  const testimonialVideos = [
    {
      id: 4,
      title: "Testimonianza Giarre",
      description: "Scopri l'esperienza dei nostri clienti",
      videoUrl: "http://zenoweb.it/testimonianzagiarre.mp4"
    },
    {
      id: 5,
      title: "Testimonianza Audio",
      description: "Ascolta le testimonianze dei nostri clienti",
      videoUrl: "http://zenoweb.it/testimonianzaudio.mp4"
    }
  ];

  const handleCardClick = (title: string) => {
    const event = new CustomEvent('openModal', { detail: title });
    window.dispatchEvent(event);
  };

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          I Nostri Eventi
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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

        {/* Nuova riga con testimonianze video */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialVideos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 text-center">Clicca per guardare il video</p>
                </div>
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
