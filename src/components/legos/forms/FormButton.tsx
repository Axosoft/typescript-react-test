import { connect, FormikContext } from 'formik';
import * as React from 'react';

import { PrimaryButton } from '../Button';

interface ISubmitButtonProps {
  // formik: FormikContext<any>;
  children: React.ReactChildren | string | HTMLElement; // why isn't this inferrred by exending React.Component?
}

class SubmitButtonImpl extends React.Component<ISubmitButtonProps & { formik: FormikContext<any> }> {
  public render() {
    const { children, formik: { dirty, errors } } = this.props;
    const disabled = !dirty || Boolean(Object.keys(errors).length);
    return (
      <PrimaryButton
        disabled={disabled}
        // variant={disabled ? 'disabled' : 'primary'}
      >
        {children}
      </PrimaryButton>
    );
  }
}

// // not going to lie, I copied this from https://github.com/jaredpalmer/formik/blob/master/src/ErrorMessage.tsx
// // I don't know why these generics are needed or what they do
export const SubmitButton = connect<
  ISubmitButtonProps,
  ISubmitButtonProps & { formik: FormikContext<any> }
>(SubmitButtonImpl);
