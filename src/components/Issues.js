import { useSelector } from 'react-redux'
import Issue from './Issue'

const Issues = () => {
  const issues = useSelector(state => state.issues)

  return (
    <div>
      {issues.map(issue => <Issue key={issue.id} issue={issue}/>)}
    </div>
  )
}

export default Issues
