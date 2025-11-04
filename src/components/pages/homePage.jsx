
import { Link } from "react-router-dom"

function HomePage() {
  return (


    <div className="h-screen bg-linear-to-r from-orange-50 to-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20">


      <section className="flex-1 text-left md:pr-6 -mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          Bienvenido <span className="text-orange-500">Aprende con nosotros</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Aprende nuevas habilidades con nuestros cursos en línea.
          Estudia a tu ritmo, desde cualquier lugar y en cualquier momento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-transform hover:scale-105 text-center"
          >
            Iniciar Sesión
          </Link>

          <Link
            to="/cursos"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-transform hover:scale-105 text-center"
          >
            Ver Cursos
          </Link>
        </div>
      </section>


      <section className="flex-1 flex justify-center">
        <img
          src="/images/estudiantes-img.png"
          alt="Estudiantes aprendiendo"
          className="w-full max-w-3xl object-contain"
        />
      </section>
    </div>
  )
}

export { HomePage }
