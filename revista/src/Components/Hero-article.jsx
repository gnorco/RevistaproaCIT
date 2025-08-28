export default function HeroArticle() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/modern-magazine-hero-image.png" alt="Artículo principal" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(21, 39, 75, 0.8) 0%, rgba(65, 89, 159, 0.6) 50%, rgba(123, 145, 254, 0.4) 100%)`,
          }}
        />
      </div>

      <div className="relative w-full h-full flex items-center px-4 md:px-8">
        <div className="w-full">
          <div className="mb-4">

          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Revista ProA 2025</h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Explorá, leé y disfrutá del contenido que preparamos especialmente para tu visita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="text-white font-semibold px-6 py-3 rounded-lg bg-[#7b91fe] hover:bg-[#6b81ee] transition-colors">
              Leer Artículo
            </button>
            <button className="text-white border-2 border-white px-6 py-3 rounded-lg bg-transparent hover:bg-white hover:text-gray-900 transition-colors">
              Ver Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
