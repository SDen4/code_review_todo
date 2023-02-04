import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export const CustomSelect = () => {
  const data = [
    { id: '1', name: 'ten', value: 10 },
    { id: '2', name: 'twenty', value: 20 },
    { id: '3', name: 'thirty', value: 30 },
    { id: '4', name: 'fourty', value: 40 },
  ];

  const [age, setAge] = useState(data[0]);

  const handleChange = (event: SelectChangeEvent<any>) => {
    if (!event.target.value) return;

    const newData =
      data.find((el) => el.value === event.target.value) || data[0];

    setAge(newData);
    console.log('selected data: ', newData);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age.value}
        label="Age"
        onChange={handleChange}
      >
        {data.map((el) => (
          <MenuItem key={el.id} value={el.value}>
            {el.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
