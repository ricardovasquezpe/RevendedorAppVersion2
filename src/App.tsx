import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ModalRenderer } from "./config/modal/modal-renderer"

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalRenderer/>
        <Header></Header>
        <Routes>
          <Route path='/'></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
