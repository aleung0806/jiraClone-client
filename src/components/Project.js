import { useSelector, useDispatch } from 'react-redux'
import List from './List'

const Project = ({project}) => {
  const {id, name, lists} = project

  const dispatch = useDispatch()

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {lists.map(list => {

          return <List key={list.id} list={list}/>
        })}
      </ul>
    </div>
  )
}

export default Project