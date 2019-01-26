import {
  Field,
  FieldProps,
} from 'formik';
import * as React from 'react';
import { Flex, Text } from 'rebass';
import { TextInput } from '../inputs/TextInput';
import { FormLabel } from './FormLabel';

interface IDefaultFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: true;
  type?: string;
}

/** MUST be used inside a formik form */
export const DefaultField = ({ label, name, placeholder, required, type }: DEFAULT_FIELD_PROPS) => (
  <Field
    name={name}
    render={({ field, form: { errors, touched } }: FieldProps) => {
      const errorMessage = touched[field.name] && errors[field.name];
      const errorState = Boolean(errorMessage);
      return (
        <Flex flexDirection="column" mb={3}>
          <Flex>
            <FormLabel error={errorState} >{label}</FormLabel>
            {required && <Text ml={1} color="red" fontSize={1}>(required)</Text>}
          </Flex>
          <TextInput {...field} error={errorState} placeholder={placeholder} type={type} />
          <Text color="red">{errorMessage}</Text>
        </Flex>
      );
    }}
  />
);

type DEFAULT_FIELD_PROPS = IDefaultFieldProps;
