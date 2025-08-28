import Header from "./Components/Header"
import HeroArticle from "./Components/Hero-article"
import ArticleGrid from "./Components/Article-grid"
import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"
import ScrollToTopButton from "./Components/ScrollToTopButton"

export default function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroArticle />
        <div className="w-full py-12">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ArticleGrid />
              </div>
              <div className="lg:col-span-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  )
}
