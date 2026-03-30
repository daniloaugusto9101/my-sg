// MeuFormContainer.js
import React from 'react';
import { Formik } from 'formik';
import validationSchema from './MeuFormContainer.schema.js';
import MeuFormComponent from './MeuFormComponent.js';
import api from '../../services/api';

const MeuFormContainer = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.post('/endpoint', values);
      // sucesso
    } catch (error) {
      // error.response.data tem o corpo do erro do backend
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ nome: '', email: '', idade: '' }}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      <MeuFormComponent />
    </Formik>
  );
};

export default MeuFormContainer;
