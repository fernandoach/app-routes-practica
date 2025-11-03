import { PiBookFill, PiChalkboardTeacherFill, PiStudentFill } from "react-icons/pi"
import { Link } from "react-router-dom"

function Navbar() {

  const options = [
    {
      text: 'Estudiantes',
      route: '/estudiantes',
      icon: <PiStudentFill />
    },
    {
      text: 'Cursos',
      route: '/cursos',
      icon: <PiBookFill />
    },
    {
      text: 'Profesores',
      route: '/profesores',
      icon: <PiChalkboardTeacherFill />
    }
  ]

  return (
    <nav className="flex justify-between px-8 h-20 items-center">
      <Link to="/" className="text-5xl text-orange-500 hover:scale-110 transition">
        <h1>Panel Admin</h1>
      </Link>
      <ul className="flex gap-6">
        {
          options.map(
            (option) => {
              return (
                <li className="text-2xl text-gray-700 hover:text-orange-500 hover:scale-105 transition">
                  <Link to={option.route} className="flex gap-2 items-center justify-center">
                    {option.icon}
                    <span>{option.text}</span>
                  </Link>
                </li>
              )
            }
          )
        }
      </ul>
    </nav>
  )
}

export { Navbar }