import Header from "./Components/Header"
import HeroArticle from "./Components/Hero-article"
import ArticleGrid from "./Components/Article-grid"
import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroArticle />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ArticleGrid />
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
