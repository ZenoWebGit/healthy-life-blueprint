
const VideoCarousel = () => {
  const videos = [
    { id: 1, title: "Video 1", placeholder: "Video Formazione" },
    { id: 2, title: "Video 2", placeholder: "Video Coaching" },
    { id: 3, title: "Video 3", placeholder: "Video Tecnologia" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Carosello Video
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-red-300 to-red-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm opacity-90">{video.placeholder}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
