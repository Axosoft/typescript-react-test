import {
  ErrorMessage,
  Field,
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
import { Form } from './primitives/forms/Form';
import InputGroup from './primitives/forms/InputGroup';
import ButtonGroup from './primitives/ButtonGroup';

type TODO_FORM_PROPS = ReturnType<typeof mapDispatchToProps>;
type TODO_FORM_VALUE_TYPES = typeof TodoDefaultValues;

// interface IFormProps {
//   create: () => void;
//   // asdf
// }

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  create: (text: string) => dispatch(createTodo(text)),
});

const TodoDefaultValues = {
  text: '',
};

const TodoFormValidationSchema = yup.object().shape({
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
    <Form>
      <InputGroup>
        <Field name="text" />
        <ErrorMessage name="text" />
      </InputGroup>
      <InputGroup>
        <ButtonGroup>
          <Button type="submit">New</Button>
        </ButtonGroup>
      </InputGroup>
    </Form>
  </Formik>
);

export const TodoForm = connect(null, mapDispatchToProps)(TodoFormComponent);
