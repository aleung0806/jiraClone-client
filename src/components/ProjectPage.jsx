import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Project from './Project'

const ProjectPage = () => {
  const { id } = useParams()
  const project = useSelector(state => {

    return state.projects !== null 
      ? state.projects.find(project => project.id === id)
      : null
  })

  return (
    <div>
      {project !== null && <Project project={project}/>}
    </div>
  )
}

export default ProjectPage