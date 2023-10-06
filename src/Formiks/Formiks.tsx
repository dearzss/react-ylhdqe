import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from './BasicSchema.tsx';

import './index.css';

export default function Formiks() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  async function onSubmit(values, actions) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter you email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? 'input-error' : ''}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label>Age:</label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Enter you age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.age && touched.age ? 'input-error' : ''}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <label>Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter you password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? 'input-error' : ''}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <label>Confirm password:</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Enter you password again"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? 'input-error'
              : ''
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
}
