import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PageWrap = styled.div`
  margin: 10px;
`

const ProjectsPage = () => {
  const projects = useSelector(state => state.projects)

  return (
    <PageWrap>
      {projects !== null && projects.map(project => {
        console.log(project)
        return <p key={project.id}>{project.name}</p>
      }
      )}
    </PageWrap>
  )
}
export default ProjectsPage