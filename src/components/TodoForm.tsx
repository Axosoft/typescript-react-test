import {
  Form,
  Formik,
  FormikProps,
} from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';

import { ThunkDispatch } from '../domain';
import { createTodo } from '../domain/Todo/TodoActions';
import { DefaultField } from './legos/forms/DefaultField';
// import ButtonGroup from './primitives/ButtonGroup';
// import { Form } from './primitives/forms/Form';
// import { SubmitButton } from './primitives/forms/FormButton';
// import { FormRow } from './primitives/forms/FormRow';
// import { DefaultField } from './primitives/forms/DefaultField';

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  create: (text: string) => dispatch(createTodo(text)),
});

const TodoDefaultValues = {
  email: '',
  // firstName: '',
  // lastName: '',
  text: '',
};

const TodoFormValidationSchema = yup.object().shape({
  email: yup.string().email(),
  // firstName: yup.string().required('first name is a required field'),
  // lastName: yup.string(),
  text: yup.string().required('todo text is a required field'),
});

const TodoFormComponent = (props: TODO_FORM_PROPS) => (
  <Formik
    initialValues={TodoDefaultValues}
    onSubmit={(values, { resetForm }: FormikProps<TODO_FORM_VALUE_TYPES>) => {
      props.create(values.text);
      resetForm();
    }}
    validationSchema={TodoFormValidationSchema}
  >
    <Form autoComplete="off">
      <DefaultField label="Todo Text" required name="text" placeholder="test" />
      <DefaultField label="emails" name="email" type="email" />
      {/* <FormRow>
        <DefaultField label="First Name" name="firstName" required />
        <DefaultField label="Last Name" name="lastName" />
      </FormRow>
      <ButtonGroup align="center">
        <SubmitButton>New</SubmitButton>
      </ButtonGroup> */}
    </Form>
  </Formik>
);

type TODO_FORM_PROPS = ReturnType<typeof mapDispatchToProps>;
type TODO_FORM_VALUE_TYPES = typeof TodoDefaultValues;

export const TodoForm = connect(null, mapDispatchToProps)(TodoFormComponent);
