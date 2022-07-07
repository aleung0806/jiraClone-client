import { useSelector, useDispatch } from 'react-redux'
import Project from './Project'

const Projects = () => {
  const projects = useSelector(state => state.projects)
  const dispatch = useDispatch()

  return (
    <ul>
      {projects !== null &&  projects.map(project => {
        return <Project key={project.id} project={project} />
      })} 
    </ul>
  )
}

export default Projects