import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'

import { 
  Box
} from '@mui/material'


const ProjectPage = () => {
  const { id } = useParams()

  const project = useSelector(state => {
    return state.projects !== null 
      ? state.projects.find(project => project.id === id)
      : null
  })

  return (
    <Box>
    {project !== null && 
      <Box>
        <NavBar/>
        <SideMenu/>
        <Project project={project}/>
      </Box>
    }
    </Box> 
  )
}

export default ProjectPage