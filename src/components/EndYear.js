import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
 
export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Year21}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="End year" />}
    />
  );
}
 
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Year21 = [
    { label: '1980'  },
    { label: '1981' },
    { label: '1982'  },
    { label: '1983' },
    { label: '1984' },
    { label: '1985' },
    { label: '1986' },
    {label: '1997',},
    { label: '1988' },
    { label: '1989' },
    { label: '1990'  },
  { label: '1991' },
  { label: '1992'  },
  { label: '1993' },
  { label: '1994' },
  { label: '1995' },
  { label: '1996' },
  {
    label: '1997',
    
  },
  { label: '1998' },
  { label: '1999' },
  {
    label: '2000'
  },
 
];
 
