
const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Benvenuto in <span className="text-yellow-500">HealthyLife</span>
          </h1>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/c9f99e36-e78c-49e4-9813-abeac414e7b9.png" 
              alt="Healthy Life Logo" 
              className="w-auto h-40 md:h-48 lg:h-56"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Healthy life srls è un azienda commerciale di vendita diretta strutturata e specializzata nella formazione di talenti e nella ricerca di risorse talentuose!
            <br />
            L'accademia è stata creata per formare i futuri imprenditori, è un percorso reale di crescita professionale basato su temi sensibili sul benessere, attraverso tutoring di tecniche di comunicazione e di vendita
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('formazione')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Scopri la Formazione
            </button>
            <button 
              onClick={() => document.getElementById('recruiting')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Lavora con Noi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
