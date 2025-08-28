export default function ArticleGrid() {
  const articles = [
    {
      id: 1,
      category: "Juegos Olimpicos",
      title: "Los juegos olimpicos: Historia, Ciencia y Futuro ",
      excerpt: "Un recorrido por el origen, la evolución y el presente de los Juegos Olímpicos, su relación con la ciencia y la tecnología, la participación argentina y una entrevista exclusiva a un referente del pádel.",
      image: "../public/banner_olimpicos.webp",
    },
    {
      id: 2,
      category: "Entretenimiento",
      title: "Espectaculos y Diversión: Música, Ciencia y Tecnología",
      excerpt: "Un recorrido por los principales géneros musicales, sus influencias y su relación con la ciencia y la innovación tecnológica. Desde la electrónica hasta el trap latino, analizamos cómo la tecnología transformó la forma de crear, distribuir y vivir la música. También exploramos los festivales más importantes de Argentina y los referentes que marcaron historia.",
      image: "../public/espectaculo.webp",
    },
    {
      id: 3,
      category: "Cocina",
      title: "Innovación en la cocina",
      excerpt: "Descubrí cómo la gastronomía se transformó con la ciencia y la tecnología, desde utensilios tradicionales hasta técnicas avanzadas como cocina molecular, impresión 3D de alimentos y fermentación. Además, conocerás la visión de chefs y expertos sobre cómo la innovación revoluciona la experiencia gastronómica y el aprendizaje culinario.",
      image: "../public/cocina-banner.webp",
    },
    {
      id: 4,
      category: "Videojuegos",
      title: "Videojuegos: Sentimientos, Cultura e Innovación",
      excerpt: "Los videojuegos no son solo entretenimiento: son un lenguaje único que combina imágenes, música e interacción para transmitir emociones, contar historias y conectar personas. En esta sección exploramos la historia del gaming, la industria argentina, avances tecnológicos, la educación y la cultura gamer. Además, incluimos entrevistas con programadores y jugadores que muestran cómo los videojuegos impactan la creatividad, la enseñanza y la vida cotidiana.",

      image: "../public/Juegos.jpg",
    },
  ]

  return (
    <section className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#15274b" }}>
          Artículos Destacados
        </h2>
        <div className="w-20 h-1 rounded" style={{ backgroundColor: "#41599f" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <div className="mb-3">
                <span
                  className="inline-block px-2 py-1 text-xs font-medium rounded"
                  style={{ backgroundColor: "#c2cfff", color: "#15274b" }}
                >
                  {article.category}
                </span>
              </div>

              <h3
                className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                style={{ color: "#15274b" }}
              >
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
