// MeuFormComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'formik';

const MeuFormComponent = ({
  formik: { handleSubmit, values, errors, handleChange, isSubmitting },
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <input name="nome" value={values.nome} onChange={handleChange} />
      {errors.nome && <span>{errors.nome}</span>}
    </div>

    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
    </div>

    <button type="submit" disabled={isSubmitting}>
      Salvar
    </button>
  </form>
);

MeuFormComponent.propTypes = {
  formik: PropTypes.shape({
    handleSubmit: PropTypes.func,
    values: PropTypes.shape({}),
    errors: PropTypes.shape({}),
    handleChange: PropTypes.func,
    isSubmitting: PropTypes.bool,
  }).isRequired,
};

export default connect(MeuFormComponent);
