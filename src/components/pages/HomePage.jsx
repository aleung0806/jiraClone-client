import { useDispatch, useSelector} from 'react-redux'
import { useNavigate , useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigate } from 'react-router'
import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import {
  fetchProjects, createProject, deleteProject, 
  createList, deleteList,
  createIssue, deleteIssue
 } from '../../reducers/project'

import { verify } from '../../reducers/auth'
import { Button, TextField, Typography } from '@mui/material'

import { 
  Box
} from '@mui/material'
import auth from '../../services/auth'


const pageStyle = {
  display: 'flex'
}

const textFieldStyle = {
  left: 10,
}

const ProjectPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)


  // const project = useSelector(state => {
  //   return (state.projects !== null 
  //     ? state.projects.find(project => project.id === id)
  //     : null
  //   )
  // })

  useEffect( () => {
    if (projects === null && auth.user !== null){
      console.log('projects are null')
      dispatch(fetchProjects(auth.user.id))
    }else{
      console.log(projects)
    }
  }, [auth])

  useEffect(() => {
    const sendVerify = async () => {
      if (!auth.isLoggedIn){
        console.log('not logged in')
        const verified = await dispatch(verify())
        if (!verified){
          navigate('/login')
        }
      }else{
        console.log('logged in as', auth.user)
      }
    }
    sendVerify()
  }, [auth])

  const createProjectHandler = () => {
    console.log('create project handler')
    dispatch(createProject({title: 'created through button'}))
  }

  const deleteProjectHandler = () => {
    console.log('delete project handler')
    dispatch(deleteProject(43))
  }

  const fetchProjectHandler = () => {
    dispatch(fetchProjects(auth.user.id))
  }

  const createListHandler = () => {
    dispatch(createList({projectId: 45, title: 'list through button'}))

  }

  const deleteListHandler = () => {
    dispatch(deleteList({id: 73, projectId: 45}))
  }


  const createIssueHandler = () => {
    dispatch(createIssue({projectId: 45, listId: 73, title: 'list through button', index: 1}))
  }

  const deleteIssueHandler = () => {
    dispatch(deleteIssue({id: 127, listId: 73, projectId: 45}))
  }

  return (
    <Box >
      <Box>
        <Button onClick={createProjectHandler}>
          + Create Project
        </Button>
        <Button onClick={deleteProjectHandler}>
          - Delete Project
        </Button>
        <Button onClick={fetchProjectHandler}>
          Fetch Projects
        </Button>
      </Box>

      <Box>
        <Button onClick={createListHandler}>
          + Create List
        </Button>
        <Button onClick={deleteListHandler}>
          - Delete List
        </Button>
      </Box>

      <Box>
        <Button onClick={createIssueHandler}>
          + Create Issue
        </Button>
        <Button onClick={deleteIssueHandler}>
          - Delete Issue
        </Button>
      </Box>

      <TextField sx={textFieldStyle} size='small'/>

      {
        id !== null && projects !== null &&
        <pre id="json">
          {JSON.stringify(projects, null, 2)}
        </pre>
      }




        {/* <Box sx={pageStyle}>
          { auth.isLoggedIn && 
          <Box>

            <NavBar/>
            <SideMenu/>
          </Box>
          }

          {id !== null && projects !== null &&
            <Project projectId={projects[0].id}/>
          }


        </Box> */}

    </Box> 
  )
}

export default ProjectPage