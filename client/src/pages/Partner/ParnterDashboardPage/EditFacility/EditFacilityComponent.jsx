import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import {
  Form,
  Group,
  Title,
  Label,
  Input,
  Select,
  Option,
  SubTitle,
  Radio,
  Checkbox,
  Textarea,
  Button,
} from '../../../../styles/dashboardAddForm';

export const EditFacilityComponent = (props) => {
  const editedFacility = props.facility[0];
  return (
    <Formik
      initialValues={{
        id: editedFacility._id,
        title: editedFacility.title,
        facilityType: editedFacility.facilityType,
        country: editedFacility.location.country._id,
        city: editedFacility.location.city._id,
        address: editedFacility.location.address,
        idx: editedFacility.location.idx,
        description: editedFacility.description,
        parking: editedFacility.services.parking,
        breakfast: editedFacility.services.breakfast,
        freeWifi: editedFacility.services.amenity.freeWifi,
        bar: editedFacility.services.amenity.bar,
        sauna: editedFacility.services.amenity.sauna,
        garden: editedFacility.services.amenity.garden,
        terrace: editedFacility.services.amenity.terrace,
        nonSmoking: editedFacility.services.amenity.nonSmoking,
        airConditioner: editedFacility.services.amenity.airConditioner,
        jacuzzi: editedFacility.services.amenity.jacuzzi,
        pool: editedFacility.services.amenity.pool,
        familyRoom: editedFacility.services.amenity.familyRoom,
        minPrice: editedFacility.priceRange.minPrice,
        maxPrice: editedFacility.priceRange.maxPrice,
      }}
      onSubmit={(values) => {
        console.log(values);
        props.updateClick(values);
      }}
    >
      {({ values, errors, isValid, dirty, touched, handleBlur, handleChange, handleSubmit }) => (
        <Form>
          <Group>
            <Title>Basic</Title>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              type='text'
              name='title'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.title && touched.title ? 'error' : ''}
            />
            <Label htmlFor='facilityType'>Facility type</Label>
            <Select
              id='facilityType'
              name='facilityType'
              value={values.facilityType}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.facilityType && touched.facilityType ? 'error' : ''}
            >
              <Option>Select</Option>
              <Option>Hotel</Option>
              <Option>Apartment</Option>
            </Select>
            <Label htmlFor='country'>Country</Label>
            <Select
              id='country'
              name='country'
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country && touched.country ? 'error' : ''}
            >
              <Option>Select</Option>
              <Option value={'5fe0a3148cb0a95cf5cccc07'}>Belarus</Option>
            </Select>
            <Label htmlFor='city'>City</Label>
            <Select
              id='city'
              name='city'
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city && touched.city ? 'error' : ''}
            >
              {props.cities.map((city) => (
                <Option key={city._id} value={city._id}>
                  {city.name}
                </Option>
              ))}
            </Select>
            <Label htmlFor='address'>Address</Label>
            <Input
              id='address'
              type='text'
              name='address'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.address && touched.address ? 'error' : ''}
            />
            <Label htmlFor='idx'>Index</Label>
            <Input
              id='idx'
              type='text'
              name='idx'
              value={values.idx}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.idx && touched.idx ? 'error' : ''}
            />
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.description && touched.description ? 'error' : ''}
            />
          </Group>
          <Group>
            <Title>Services</Title>
            <SubTitle>Parking</SubTitle>
            <Radio
              id='parkingFree'
              type='radio'
              name='parking'
              value='free'
              checked={values.parking === 'free' ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='parkingFree'>
              Free
            </Label>
            <Radio
              id='parkingPaid'
              type='radio'
              name='parking'
              value='paid'
              checked={values.parking === 'paid' ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='parkingPaid'>
              Paid
            </Label>
            <Radio
              id='parkingNo'
              type='radio'
              name='parking'
              value='no'
              checked={values.parking === 'no' ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='parkingNo'>
              No
            </Label>
            <SubTitle>Breakfast</SubTitle>
            <Radio
              id='breakfastYes'
              type='radio'
              name='breakfast'
              value={true}
              checked={values.breakfast ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='breakfastYes'>
              Yes
            </Label>
            <Radio
              id='breakfastNo'
              type='radio'
              name='breakfast'
              value={false}
              checked={values.breakfast ? false : true}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='breakfastNo'>
              No
            </Label>
            <SubTitle>Amenity</SubTitle>
            <Checkbox
              id='freeWifi'
              type='checkbox'
              name='freeWifi'
              value={values.freeWifi}
              checked={values.freeWifi}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='freeWifi'>
              Free Wi-Fi
            </Label>
            <Checkbox
              id='bar'
              type='checkbox'
              name='bar'
              value={values.bar}
              checked={values.bar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='bar'>
              Bar
            </Label>
            <Checkbox
              id='sauna'
              type='checkbox'
              name='sauna'
              value={values.sauna}
              checked={values.sauna}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='sauna'>
              Sauna
            </Label>
            <br />
            <Checkbox
              id='garden'
              type='checkbox'
              name='garden'
              checked={values.garden}
              value={values.garden}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='garden'>
              Garden
            </Label>
            <Checkbox
              id='rettace'
              type='checkbox'
              name='terrace'
              checked={values.terrace}
              value={values.terrace}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='terrace'>
              Terrace
            </Label>
            <Checkbox
              id='nonSmoking'
              type='checkbox'
              name='nonSmoking'
              checked={values.nonSmoking}
              value={values.nonSmoking}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='nonSmoking'>
              Non-Smoking
            </Label>
            <br />
            <Checkbox
              id='airConditioner'
              type='checkbox'
              name='airConditioner'
              checked={values.airConditioner}
              value={values.airConditioner}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='airConditioner'>
              Air conditioner
            </Label>
            <Checkbox
              id='jacuzzi'
              type='checkbox'
              name='jacuzzi'
              checked={values.jacuzzi}
              value={values.jacuzzi}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='jacuzzi'>
              Jaccuzi
            </Label>
            <Checkbox
              id='pool'
              type='checkbox'
              name='pool'
              checked={values.pool}
              value={values.pool}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='pool'>
              Pool
            </Label>
            <br />
            <Checkbox
              id='familyRoom'
              type='checkbox'
              name='familyRoom'
              checked={values.familyRoom}
              value={values.familyRoom}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label inline htmlFor='famikyRoom'>
              Family room
            </Label>
          </Group>
          <Group>
            <Title>Price range</Title>
            <Label htmlFor='minPrice'>Min Price</Label>
            <Input
              id='minPrice'
              type='number'
              name='minPrice'
              value={values.minPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.minPrice && touched.minPrice ? 'error' : ''}
            />
            <Label htmlFor='maxPrice'>Max Price</Label>
            <Input
              id='maxPrice'
              type='number'
              name='maxPrice'
              value={values.maxPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.maxPrice && touched.maxPrice ? 'error' : ''}
            />
          </Group>
          <Button onClick={handleSubmit} type='submit'>
            Edit this facility
          </Button>
        </Form>
      )}
    </Formik>
  );
};

EditFacilityComponent.propTypes = {
  facility: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};
