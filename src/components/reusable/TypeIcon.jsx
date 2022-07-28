import { ReactComponent as Bug} from '@atlaskit/icon-object/svgs/bug/16.svg'
import { ReactComponent as Task} from '@atlaskit/icon-object/svgs/task/16.svg'
import { ReactComponent as Improvement} from '@atlaskit/icon-object/svgs/improvement/16.svg'
import { ReactComponent as Epic} from '@atlaskit/icon-object/svgs/epic/16.svg'
import { ReactComponent as NewFeature} from '@atlaskit/icon-object/svgs/new-feature/16.svg'

import { SvgIcon } from '@mui/material'

const match = 
{ 
  bug : <Bug/>, 
  task : <Task/>,
  improvement : <Improvement/>,
  epic: <Epic/>,
  newFeature: <NewFeature/>
}

const iconStyle  = (sx) => {
  return {
    ...sx,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
}

const TypeIcon = ({type, sx}) => {
  console.log(type)
  const matchSvg = (type) => {
    console.log(match[type])
    return match[type]
  }
   
  return (
    <SvgIcon sx={iconStyle(sx)}>
      {matchSvg(type)}
    </SvgIcon>
  )
}



export default TypeIcon