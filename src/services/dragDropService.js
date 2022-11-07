
const removeFromList = (list, index) => {
  let issuesCopy = [...list.issues]
  const removed = issuesCopy[index]
  issuesCopy.splice(index, 1)
  return [removed, {...list, issues: issuesCopy}]
}

const addToList = (list, index, element) => {
  let issuesCopy =[...list.issues]
  issuesCopy.splice(index, 0, element)
  return {...list, issues: issuesCopy}
}


const processDragDrop = (result, lists) => {
  if (!result.destination) {
    return;
  }

  let listsCopy = [...lists]
  const sourceListId = result.source.droppableId
  const destinationListId =  result.destination.droppableId
  const sourceIndex = result.source.index
  const destinationIndex = result.destination.index

  const sourceList = listsCopy.find(list => list.id === sourceListId)
  const [removedIssue, newSourceList] = removeFromList(sourceList, sourceIndex)
  listsCopy = listsCopy.map(list => list.id === sourceListId ? newSourceList : list)

  const destinationList = listsCopy.find(list => list.id === destinationListId)
  const newDestinationList = addToList(destinationList, destinationIndex, removedIssue)
  listsCopy = listsCopy.map(list => list.id === destinationListId ? newDestinationList : list)
  return listsCopy
}

export default processDragDrop