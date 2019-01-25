import { ErrorMessage, Field } from 'formik';
import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';

// interface IFieldWithErrorProps {
//   name: string;
//   // how to denote the rest of the props?
// }

const FieldWithErrorAndLabel = ({name, ...props}: React.ComponentProps<typeof Field>) => (
  <Flex direction="column">
    <label>{name}</label>
    <Field name={name} {...props} />
    <ErrorMessage name={name} />
  </Flex>
);

export const DefaultField = styled(FieldWithErrorAndLabel)`
  margin: .5em 0;
`;
