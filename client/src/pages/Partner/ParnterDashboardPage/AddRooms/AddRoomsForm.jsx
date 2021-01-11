import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SButton,
  SForm,
  SInput,
  SInputWIdth,
  SLabel,
  SOption,
  SSelect,
  STextarea,
  STitle,
} from '../../../../styles/AddRoomsComponents';

export const AddRoomsForm = (props) => {
  return (
    <Formik
      initialValues={{
        roomType: '',
        bedCount: 0,
        description: '',
        priceAdults: 0,
        priceChildren: 0,
        countRooms: 0,
        hotelId: props.id,
      }}
      validateOnBlur
      onSubmit={(values) => {
        props.addRoomsClick(values);
      }}
    >
      {({ values, errors, dirty, touched, isValid, handleBlur, handleChange, handleSubmit }) => (
        <SForm>
          <STitle>Add rooms to this hotel</STitle>
          <SLabel>Room Type</SLabel>
          <SSelect
            name='roomType'
            value={values.roomType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <SOption value='null'>Select room type</SOption>
            <SOption value='apartment'>Apartment</SOption>
            <SOption value='baclony'>Balcony</SOption>
            <SOption value='delux'>Delux</SOption>
            <SOption value='duplex'>Duplex</SOption>
            <SOption value='familyRoom'>Family room</SOption>
            <SOption value='president'>President</SOption>
            <SOption value='studio'>Studio</SOption>
            <SOption value='superior'>Superior</SOption>
            <SOption value='std'>Standart</SOption>
          </SSelect>
          <SLabel htmlFor='bedCount'>Bed Count</SLabel>
          <SInput
            id='bedCount'
            type='number'
            name='bedCount'
            value={values.bedCount}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SLabel htmlFor='description'>Description room</SLabel>
          <STextarea
            id='description'
            name='description'
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></STextarea>
          <SLabel inline htmlFor='priceAdults'>
            Price Adults
          </SLabel>
          <SInputWIdth
            id='priceAdults'
            name='priceAdults'
            value={values.priceAdults}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SLabel inline htmlFor='priceChildren'>
            Price Children
          </SLabel>
          <SInputWIdth
            id='priceChildren'
            name='priceChildren'
            value={values.priceChildren}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SLabel inline htmlFor='countRooms'>
            Count rooms
          </SLabel>
          <SInputWIdth
            id='countRooms'
            name='countRooms'
            value={values.countRooms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SButton type='submit' onClick={handleSubmit}>
            Add rooms
          </SButton>
        </SForm>
      )}
    </Formik>
  );
};

AddRoomsForm.propTypes = {
  id: PropTypes.string.isRequired,
  addRoomsClick: PropTypes.func,
};
