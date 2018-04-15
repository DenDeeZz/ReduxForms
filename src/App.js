import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './index.css';
const required = value => value ? undefined : <span>This field is required</span>
// let renderInput = ({label, meta}) => {
//   return(
//   <div>
//   <pre>{JSON.stringify(meta, 0, 2)}</pre>
//   <label></label>
//   <input className={meta.touched ? 'okayname' : 'noname'}/>
//   </div>
// )
// }
// let fields = {
//   name: false,
//   lastName: false,
//   email: false
// }

const __DEV = false; //ВЫВОД META СВОЙСТВ ОБЬЕКТА


const renderInput = ({ meta, input, label, type, meta: { touched, error, warning } }) => (
  <div>
  <pre>{__DEV ? JSON.stringify(meta, 0, 2) : ''}</pre>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={touched && error ? 'noname' : ''}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
function handleSubmit(event) {
    
  }
let DemoForm = () => {
  return(
  <form onSubmit={handleSubmit} id='dataform'>
    <div>
    <Field validate={required} name='firstName' component={renderInput} label='Login' />
    <Field validate={required} type='password' name='pass' component={renderInput} label='Password' />
    <button /*disabled={}*/ type='submit'>SUBMIT!</button>
    </div>
  </form>
)
}

DemoForm = reduxForm({
  form: 'demo',
  destroyOnUnmount: false
})(DemoForm)
export default DemoForm
