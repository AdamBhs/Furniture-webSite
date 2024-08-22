import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Service from "./pages/service/Service"
import Product from "./pages/product/Product"
import Article from "./pages/article/Article"
import About from "./pages/about/About"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
