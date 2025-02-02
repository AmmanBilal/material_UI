
import  TextField  from "@mui/material/TextField"
import  Autocomplete from "@mui/material/Autocomplete"
import top100Films from "./top100Films"

const ComboBox = () => {
  return (
    
    <>
     <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </>
    
  )
}

export default ComboBox