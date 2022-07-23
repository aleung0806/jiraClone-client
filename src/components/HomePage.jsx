import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PageWrap = styled.div`
  margin: 10px;
`

const HomePage = () => {
  const projects = useSelector(state => state.projects)

  return (
    <PageWrap>

    </PageWrap>
  )
}
export default HomePage