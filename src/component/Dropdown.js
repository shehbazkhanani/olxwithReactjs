import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <b className='font'>ALL CATEGORIES </b>
          </MenuItem>
          <MenuItem value={10}>Car</MenuItem>
          <MenuItem value={20}>Bke</MenuItem>
          <MenuItem value={30}>Mobile</MenuItem>
          <MenuItem value={30}>Shoes</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLabels;