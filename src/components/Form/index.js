import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import './styles.css';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ' must be at least 2 characters long')
    .max(255, ' must be max 255 characters long')
    .required(' is required'),
  email: yup
    .string()
    .email(' must be valid')
    .required(' is required'),
  password: yup
    .string()
    .min(6, ' must be at least 6 characters long')
    .required(' is required'),
  latitude: yup.number().required(' is required'),
  longitude: yup.number().required(' is required'),
});

export default function Form() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    // DO YOUR SUBMITION LOGIC IN HERE
    alert(JSON.stringify(values, null, 2));

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        gender: 'male',
        latitude: '',
        longitude: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="row-8020">
            <div className="input-item">
              <label htmlFor="name">
                name{' '}
                {touched.name && (
                  <small className="input-error">{errors.name}</small>
                )}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your first name here"
              />
            </div>

            <div className="input-item">
              <label htmlFor="gender">
                gender{' '}
                {touched.gender && (
                  <small className="input-error">{errors.gender}</small>
                )}
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
          <div className="input-item row">
            <label htmlFor="email">
              email{' '}
              {touched.email && (
                <small className="input-error">{errors.email}</small>
              )}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your best email"
            />
          </div>
          <div className="input-item row">
            <label htmlFor="password">
              password{' '}
              {touched.password && (
                <small className="input-error">{errors.password}</small>
              )}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />
          </div>
          <div className="row-5050">
            <div className="input-item">
              <label htmlFor="latitude">
                latitude{' '}
                {touched.latitude && (
                  <small className="input-error">{errors.latitude}</small>
                )}
              </label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                autoComplete="off"
                value={values.latitude}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Latitude"
              />
            </div>

            <div className="input-item">
              <label htmlFor="longitude">
                longitude{' '}
                {touched.longitude && (
                  <small className="input-error">{errors.longitude}</small>
                )}
              </label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                autoComplete="off"
                value={values.longitude}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Longitude"
              />
            </div>
          </div>
          <div className="input-item row">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
