import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { dataSelect, loadingSelect } from '../../store/CustomSelect/selector';
import { customSelectDataSaga } from '../../store/CustomSelect/action';
import { resetCS } from '../../store/CustomSelect/reducer';
import Loader from '../Loader';

export const CustomSelect = () => {
  const dispatch = useDispatch();

  const data = useSelector(dataSelect);
  const loading = useSelector(loadingSelect);

  const [age, setAge] = useState(data[0]);

  const handleChange = (event: SelectChangeEvent<any>) => {
    if (!event.target.value) return;

    const newData =
      data.find((el) => el.value === event.target.value) || data[0];

    setAge(newData);
    console.log('selected data: ', newData);
  };

  useEffect(() => {
    dispatch(customSelectDataSaga());

    return () => {
      dispatch(resetCS());
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age?.value}
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
      )}
    </>
  );
};
