import React from 'react';
import { Formik } from 'formik';
import { addHotelValidationSchema } from '../../../../validationSchemas';
import {
  Form,
  Group,
  Input,
  Label,
  Select,
  Title,
  Option,
  Button,
  Textarea,
  SubTitle,
  Radio,
  Checkbox,
} from '../../../../styles/dashboardAddForm';

const DashboardAddForm = (props) => {
  return (
    <Formik
      initialValues={{
        title: '',
        facilityType: '',
        country: '',
        city: '',
        address: '',
        idx: '',
        description: '',
        parking: '',
        breakfast: false,
        freeWifi: false,
        bar: false,
        sauna: false,
        garden: false,
        terrace: false,
        nonSmoking: false,
        airConditioner: false,
        jacuzzi: false,
        pool: false,
        familyRoom: false,
        minPrice: 0,
        maxPrice: 0,
      }}
      validateOnBlur
      onSubmit={(values) => {
        props.createClick(values);
      }}
      validationSchema={addHotelValidationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
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
              <Option>Belarus</Option>
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
                <Option key={city._id}>{city.name}</Option>
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
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DashboardAddForm;
