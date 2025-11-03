import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/organisms/navbar"
import { HomePage } from "./components/pages/homePage"

function App() {
  /* 
    TODO: Grupo 1: Ruta raiz
    TODO: Grupo 2: Ruta /estudiantes
    TODO: Grupo 3: Ruta /profesores
    TODO: Grupo 4: Ruta /cursos
  */
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  )
}

export default App
