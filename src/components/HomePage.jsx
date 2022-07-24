import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Navigate } from 'react-router'
import Project from './Project'

const PageWrap = styled.div`
  margin: 10px;
`

const HomePage = () => {
  const projects = useSelector(state => state.projects)
  return (
    <div>
      {projects !== null && <Navigate to={`projects/${projects[0].id}`} replace={true} />}
    </div>
  )
}
export default HomePage