export default function Sidebar() {
  const popularArticles = [
    {
      id: 1,
      title: "[ARTÍCULO POPULAR 1]",
      date: "[FECHA]",
      views: "[X] vistas",
    },
    {
      id: 2,
      title: "[ARTÍCULO POPULAR 2]",
      date: "[FECHA]",
      views: "[X] vistas",
    },
    {
      id: 3,
      title: "[ARTÍCULO POPULAR 3]",
      date: "[FECHA]",
      views: "[X] vistas",
    },
  ]

  const categories = [
    { name: "[CATEGORÍA 1]", count: "[X]" },
    { name: "[CATEGORÍA 2]", count: "[X]" },
    { name: "[CATEGORÍA 3]", count: "[X]" },
    { name: "[CATEGORÍA 4]", count: "[X]" },
    { name: "[CATEGORÍA 5]", count: "[X]" },
  ]

  return (
    <aside className="space-y-8">
      {/* Newsletter Subscription */}
      <div className="p-6 rounded-lg" style={{ backgroundColor: "#c2cfff" }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: "#15274b" }}>
          Suscríbete al Newsletter
        </h3>
        <p className="text-gray-700 mb-4">Recibe los mejores artículos directamente en tu email.</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Tu email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="w-full text-white font-semibold px-4 py-2 rounded"
            style={{ backgroundColor: "#15274b" }}
          >
            Suscribirse
          </button>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-6" style={{ color: "#15274b" }}>
          Artículos Populares
        </h3>
        <div className="space-y-4">
          {popularArticles.map((article, index) => (
            <div key={article.id} className="flex items-start space-x-3 group cursor-pointer">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#41599f" }}
              >
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {article.date} • {article.views}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-6" style={{ color: "#15274b" }}>
          Categorías
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between group cursor-pointer">
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{category.name}</span>
              <span className="px-2 py-1 text-xs rounded-full text-white" style={{ backgroundColor: "#7b91fe" }}>
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Space */}
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <div className="text-gray-500 mb-2">
          <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-600">[ESPACIO PUBLICITARIO]</p>
        <p className="text-xs text-gray-500 mt-2">300 x 250</p>
      </div>
    </aside>
  )
}
