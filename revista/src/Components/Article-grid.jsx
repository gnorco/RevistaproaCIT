export default function ArticleGrid() {
  const articles = [
    {
      id: 1,
      category: "[CATEGORÍA]",
      title: "[TÍTULO DEL ARTÍCULO 1]",
      excerpt: "[Extracto del artículo 1. Descripción breve que invite a leer más...]",
      author: "[AUTOR 1]",
      date: "[FECHA]",
      readTime: "[X] min",
      image: "/magazine-article.png",
    },
    {
      id: 2,
      category: "[CATEGORÍA]",
      title: "[TÍTULO DEL ARTÍCULO 2]",
      excerpt: "[Extracto del artículo 2. Descripción breve que invite a leer más...]",
      author: "[AUTOR 2]",
      date: "[FECHA]",
      readTime: "[X] min",
      image: "/magazine-article.png",
    },
    {
      id: 3,
      category: "[CATEGORÍA]",
      title: "[TÍTULO DEL ARTÍCULO 3]",
      excerpt: "[Extracto del artículo 3. Descripción breve que invite a leer más...]",
      author: "[AUTOR 3]",
      date: "[FECHA]",
      readTime: "[X] min",
      image: "/magazine-article.png",
    },
    {
      id: 4,
      category: "[CATEGORÍA]",
      title: "[TÍTULO DEL ARTÍCULO 4]",
      excerpt: "[Extracto del artículo 4. Descripción breve que invite a leer más...]",
      author: "[AUTOR 4]",
      date: "[FECHA]",
      readTime: "[X] min",
      image: "/magazine-article.png",
    },
  ]

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#15274b" }}>
          Artículos Destacados
        </h2>
        <div className="w-20 h-1 rounded" style={{ backgroundColor: "#41599f" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Por {article.author}</span>
                <span>
                  {article.date} • {article.readTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
