import './CourseCard.css'

function CourseCard({ emoji, titulo, descripcion, buttonText }) { 
    return (
        <div className="cursos">
          <div className="caja">
            <p className="caja__emoji">{emoji}</p>
            <p className="caja__heading">{titulo}</p>
            <p className="subheading">{descripcion}</p>
            <button className="button button--curso">{buttonText}</button>
          </div>
      </div>
    )
}

export default CourseCard