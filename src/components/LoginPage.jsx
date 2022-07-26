import FormControl from '@mui/material/FormControl';
import { 
  InputLabel,
  Input,
  FormHelperText 
} from '@mui/material'

const LoginPage = () => {
  return (
    <FormControl>
        <ListFormWrap style={{display: formVisible ? '' : 'none'}} >
          <form onSubmit={() => {}}>
            <TextField
              autoFocus   
              fullWidth
              id="newListField"
              value={() => {}}
              onChange={() => {}}
              variant="standard"
            />
            </form>
        </ListFormWrap>
    </FormControl>
  )
}
