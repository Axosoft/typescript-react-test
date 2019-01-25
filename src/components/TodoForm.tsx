import {
  // ErrorMessage,
  // Field,
  // FieldProps,
  Formik,
  FormikProps,
} from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';

import { ThunkDispatch } from 'src/domain';
import { createTodo } from 'src/domain/Todo/TodoActions';
import { Button } from './primitives/Button';
import ButtonGroup from './primitives/ButtonGroup';
import { Form } from './primitives/forms/Form';
import { DefaultField } from './primitives/forms/Input';

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  create: (text: string) => dispatch(createTodo(text)),
});

const TodoDefaultValues = {
  email: '',
  text: '',
};

const TodoFormValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  text: yup.string().required(),
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
    {({ dirty, errors }: FormikProps<TODO_FORM_VALUE_TYPES>) => (
      <Form>
        <DefaultField name="text" />
        <DefaultField name="email" />
        <ButtonGroup align="center">
          <Button disabled={!dirty || Boolean(Object.keys(errors).length)} primary type="submit">New</Button>
        </ButtonGroup>
      </Form>
    )}
  </Formik>
);

type TODO_FORM_PROPS = ReturnType<typeof mapDispatchToProps>;
type TODO_FORM_VALUE_TYPES = typeof TodoDefaultValues;

export const TodoForm = connect(null, mapDispatchToProps)(TodoFormComponent);
