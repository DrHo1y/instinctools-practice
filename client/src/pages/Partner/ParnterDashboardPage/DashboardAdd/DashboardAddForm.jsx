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
} from '../../../../styles/dashboardAddForm';

const DashboardAddForm = (props) => {
  return (
    <Formik
      initialValues={{
        title: '',
        country: '',
        city: '',
        address: '',
        index: '',
        description: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={addHotelValidationSchema}
    >
      {({ values, dirty, isValid, handleChange, handleBlur, handleSubmit }) => (
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
            />
            <Label htmlFor='country'>Country</Label>
            <Select
              id='country'
              name='country'
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <Option>Belarus</Option>
            </Select>
            <Label htmlFor='city'>City</Label>
            <Select
              id='city'
              name='city'
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <Option>Minsk</Option>
              <Option>Grodno</Option>
            </Select>
            <Label htmlFor='address'>Address</Label>
            <Input
              id='address'
              type='text'
              name='address'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label htmlFor='index'>Index</Label>
            <Input
              id='index'
              type='text'
              name='index'
              value={values.index}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></Textarea>
          </Group>
          <Button disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DashboardAddForm;
