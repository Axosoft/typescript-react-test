import { ErrorMessage, Field, FormikContext } from 'formik';
import { connect } from 'formik';
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { FormRow } from './FormRow';


const Error = styled.div`
  color: red;
`;

interface IInputProps {
  error: boolean;
}
const Input = styled(Field)<IInputProps>`
  padding: .5em;
  border-radius: 3px;
  border: 2px solid ${(props) => props.error ? 'red' : 'gainsboro'};
`;

interface IDefaultFieldProps {
  className?: string;
  // this is actually required, but for some reason `connect` doesn't tell the compiler that it passes it in
  formik?: FormikContext<any>;
  label?: string;
  name: string;
  required?: true;
}
// MUST be used inside a formik form
const FieldWithErrorAndLabel = ({ className, formik, label, name, required, ...props }: DEFAULT_FIELD_PROPS) => (
  <Flex className={className} direction="column">
    <label>
      {label || name}
      <span style={{color: 'grey', fontSize: '.9em'}}> {required ? '(required)' : ''}</span>
    </label>
    <Input error={Boolean(formik && formik.touched[name] && formik.errors[name])} name={name} {...props} />
    <Error>
      <ErrorMessage name={name} />
    </Error>
  </Flex>
);

// connect magically passes us formik state so the user doesn't have to
// prop drill the error object to every single input
const DefaultFieldConnected = connect(FieldWithErrorAndLabel);

export const DefaultField = styled(DefaultFieldConnected)`
  margin-bottom: 1em;
  flex: 1 0 auto;
  ${FormRow} & {
    margin-right: .5em;
  }
  ${FormRow} &:last-child {
    margin-right: 0;
  }
`;

// this doesn't actually work????
// type DEFAULT_FIELD_PROPS = React.ComponentProps<typeof Field> & IDefaultFieldProps;

type DEFAULT_FIELD_PROPS = IDefaultFieldProps;
