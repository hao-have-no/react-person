import _Form from './Form';

import Field from './Field.js';
import useForm from './useForm';

const Form = _Form;
Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm};
export default Form;