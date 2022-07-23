import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import Project from './Project'

const PageWrap = styled.div`
  margin: 10px;
`

const HomePage = () => {
  const navigate = useNavigate()
  const projects = useSelector(state => state.projects)
  return (
    <div>
      {projects !== null && <Project project={projects[0]}/>}
    </div>
  )
}
export default HomePage