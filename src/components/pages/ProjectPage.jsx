import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box
} from '@mui/material'

import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import { fetchProject } from '../../reducers/project'
import { fetchAllProjects } from '../../reducers/allProjects'
import { fetchUser } from '../../reducers/auth'
import { verifySession } from '../../reducers/auth'

import VerifySession from './VerifySession'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const bodyStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const ProjectPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)
  const projects = useSelector(state => state.allProjects)
  const project = useSelector(state => state.project)

  useEffect(() => {
    if (project === null || project.id !== parseInt(id) ){
      dispatch(fetchProject(id))
    }
  }, [id])

  return (
        <VerifySession >
          {user !== null && projects !== null && project !== null  &&
            <Box sx={pageStyle}>
              <NavBar/>
              <Box sx={bodyStyle}>
                <SideMenu/>
                <Project project={project}/>
              </Box>
            </Box>
          }
        </VerifySession>

  )
}

export default ProjectPage
