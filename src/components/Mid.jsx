import CourseCard from "./CourseCard"

import './Mid.css'

const cursos = [
  {
    id: 1,
    emoji: "⚛️",
    titulo: "React basico",
    descripcion: "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
    buttonText: "Principiante"
  },
  {
    id: 2,
    emoji: "🔁",
    titulo: "React Hooks",
    descripcion: "Profundiza en useState, useEffect y crea tus propios custom hooks.",
    buttonText: "Intermedio"
  },
  {
    id: 3,
    emoji: "📂",
    titulo: "Estado Global",
    descripcion: "Gestiona el estado con Context API y aprende cuando usarlo.",
    buttonText: "Intermedio"
  },
  {
    id: 4,
    emoji: "🚀",
    titulo: "React Avanzando",
    descripcion: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
    buttonText: "Avanzado"
  }
]

function Mid() {
  return (
    <div className="mid" id="cursos">
      <p className="mid__heading">Nuestros Cursos</p>
      <p className="subheading">Elige el camino que mejor se adapte a ti</p>  
      
      <div className="cursos">
        {cursos.map((curso) =>
          <CourseCard
            key={curso.id}
            emoji={curso.emoji}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            buttonText={curso.buttonText}
          />
        )}
      </div>
    </div>
  )
}

export default Mid

//hero