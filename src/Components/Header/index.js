import { FormControl, MenuItem, Select } from '@mui/material'
import {useState} from 'react'
import Style from './Style.module.css'
const Header = () => {
        const [language, setLanguage] = useState('English');
        const handleChange = (event) => {
            setLanguage(event.target.value);
        };
  return (
    <div className={Style.headercontainer}>
        <div className={Style.NestedContainer}>
        <p className={Style.headerTitle}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='#' className={Style.headerTitle}>Shop Now</a></p>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80, marginRight:'20px', marginLeft:'10px'}}>
        <Select
          sx={{color: "white"}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Arabic'}>Arabic</MenuItem>
          <MenuItem value={'Spanish'}>Spanish</MenuItem>
          </Select>
      </FormControl>
      </div>
    </div>
  )
}

export default Header