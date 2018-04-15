import React from 'react';
import { reduxForm } from 'redux-form';

import FormComponent from './form.component';

export const FormContainer = props => {
  return (
    <FormComponent />
  );
}

const formConfiguration = {
  form: 'my-very-own-form'
}

export default reduxForm(formConfiguration)(FormContainer); 
