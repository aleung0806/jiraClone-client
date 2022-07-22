import { Draggable } from "react-beautiful-dnd";
import styled  from "styled-components"

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`
const Author = styled.div`
  display: flex;
  align-items: center;
`
const IssueHeader = styled.div`
  color: #e6eaf1;
  font-weight: 500;
`

// uniq id
const IssueFooter = styled.div`
  font-size: 12px;
  color: #bfcadd;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DragIssue = styled.div`
  min-height: 90px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #6d87af;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 2px;
  flex-direction: column;
  text-transform: none;
  font-weight: normal;
`

const Issue = ({ issue, index }) => {

  return (
    <Draggable draggableId={`${issue.id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <DragIssue
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <IssueHeader>{issue.name}</IssueHeader>
            <IssueFooter>
              <span>{issue.content}</span>
              <Author>
                {issue.id}
              </Author>
            </IssueFooter>
          </DragIssue>
        );
      }}
    </Draggable>
  );
};

export default Issue;
