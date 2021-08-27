/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width:'99%' }}
      renderInput={(params) => <TextField {...params} label="Order Status" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'All'},
  { title: 'BackOrdered'},
  { title: 'Delay' },
  { title: 'Delivered' },
  { title: 'On Hold' },
];
