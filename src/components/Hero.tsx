
const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Healthy<span className="text-yellow-500">Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            HealthyLife è un'azienda specializzata in coaching e tutoring professionale.
            <br />
            Accompagniamo aspiranti imprenditori in un percorso reale di crescita personale e professionale, 
            basato su valori autentici e strategie efficaci.
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
