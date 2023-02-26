import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import { ContextProvider } from './ContextProvider'

function App() {

  return (
    <div className=" bg-slate-200 ">
      <BrowserRouter>
        <ContextProvider>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='features' element={<Features />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='resources' element={<Resources />} />
            </Routes>
          <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App




  



