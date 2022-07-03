import { useSelector } from 'react-redux'

const Issues = () => {
  const issues = useSelector(state => state.issues)

  return (
    <div>
      <button>{issues}</button>
    </div>
  )
}

export default Issues
