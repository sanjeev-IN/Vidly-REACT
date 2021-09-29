import React from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select'

class Form extends React.Component {
  state = {
    data: {},
    errors: {}
  }

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.Schema, { abortEarly: false });
    if (!error) return;
    const errors = error.details.map(e => ({ [e.path[0]]: e.message })).reduce((last, next) => ({ ...last, ...next }));
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.Schema[name] }
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };


  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    errors[input.name] = errorMessage;
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;
    return (<Input
      label={label}
      name={name}
      type={type}
      value={data[name]}
      error={errors[name]}
      onChange={this.handleChange} />)
  };

  renderButton = label => (<button disabled={this.validate()} type="submit" className="btn btn-primary">{label}</button>);

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

}
export default Form;