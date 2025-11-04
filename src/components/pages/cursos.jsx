import { Link } from "react-router-dom";

function Cursos() {
  return (
    <section className="min-h-screen bg-gray-900 from-gray-900 to-gray-800 text-white py-4">
      <h1 className="text-center text-4xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg">
        Gestión de Cursos
      </h1>

      <div className="grid md:grid-cols-2 gap-5 px-10">
        {[
          {
            title: "Computación e Informática",
            info: "Computación e Informática se enfoca en el diseño, desarrollo y mantenimiento de sistemas informáticos. Forma profesionales capaces de resolver problemas mediante la tecnología.",
          },
          {
            title: "Traducción de Idiomas",
            info: "Traducción de Idiomas forma expertos en interpretar y traducir textos y discursos con precisión, desarrollando competencias lingüísticas y culturales para el ámbito internacional.",
          },
          {
            title: "Administración",
            info: "Administración forma profesionales capaces de planificar, organizar y dirigir recursos en empresas e instituciones. Desarrolla liderazgo y gestión estratégica.",
          },
          {
            title: "Contabilidad",
            info: "Contabilidad prepara profesionales para registrar, analizar y controlar la información financiera, garantizando transparencia y decisiones económicas acertadas.",
          },
        ].map((curso, i) => (
          <div
            key={i}
            className="bg-gray-800 border border-cyan-700 rounded-3xl p-4 shadow-xl backdrop-blur-sm hover:shadow-cyan-600 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-center text-2xl font-semibold text-cyan-400 mb-1.5">
              {curso.title}
            </h2>

            <h3 className="text-left font-semibold text-cyan-300 mb-1">
              Información:
            </h3>
            <p className="text-left text-gray-200 text-sm mb-2 leading-relaxed">
              {curso.info}
            </p>

            <h3 className="text-left font-semibold text-cyan-300 mb-1">
              Horarios:
            </h3>
            <ul className="flex justify-start gap-5 mb-2 text-sm text-gray-100">
              <li className="bg-cyan-800/40 px-2 py-1 rounded-lg">Mañana</li>
              <li className="bg-cyan-800/40 px-2 py-1 rounded-lg">Tarde</li>
              <li className="bg-cyan-800/40 px-2 py-1 rounded-lg">Noche</li>
            </ul>

            <Link
              to={"/cursos"}
              className=" inline-block border-2 border-cyan-400 text-cyan-100 hover:bg-cyan-700 hover:text-white px-4 py-1 rounded-xl transition-all duration-300"
              onClick={()=> alert("por el momento solo lo hicimos con un aalerrt")}
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Cursos };
