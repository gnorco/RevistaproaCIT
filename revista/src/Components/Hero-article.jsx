import { Button } from "./ui/button"

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span
              className="inline-block px-3 py-1 text-sm font-medium rounded-full"
              style={{ backgroundColor: "#c2cfff", color: "#15274b" }}
            >
              [CATEGORÍA PRINCIPAL]
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            [TÍTULO DEL ARTÍCULO PRINCIPAL]
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            [DESCRIPCIÓN O EXTRACTO DEL ARTÍCULO PRINCIPAL. Aquí puedes poner un resumen atractivo que invite a leer
            más.]
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#7b91fe" }}>
              Leer Artículo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Ver Más
            </Button>
          </div>

          <div className="mt-8 flex items-center text-gray-300">
            <span className="text-sm">Por [AUTOR] • [FECHA] • [TIEMPO DE LECTURA] min</span>
          </div>
        </div>
      </div>
    </section>
  )
}
