// import { connect, FormikContext } from 'formik';
// import * as React from 'react';

// import { Button } from '../Button';

// interface ISubmitButtonProps {
//   // formik: Form1`ikContext<any>;
//   children: React.ReactChildren | string | HTMLElement; // why isn't this inferrred by exending React.Component?
// }

// // the functional form of this component doesn't work with Formik's connect types?
// // const SubmitButtonComponent: React.FunctionComponent<ISubmitButtonProps> =
// //   ({ children, formik }) => {
// //     const dirty = formik && formik.dirty;
// //     const errors = formik && formik.errors;
// //     return (
// //       <Button disabled={!dirty || Boolean(Object.keys(errors || {}).length)} primary>
// //         {children}
// //       </Button>
// //     );
// //   };

// // MUST be used inside a formik form
// class SubmitButtonImpl extends React.Component<ISubmitButtonProps & { formik: FormikContext<any>}>{
//   public render() {
//     const { children, formik: { dirty, errors } } = this.props;
//     return (
//       // I want a SuccessButton with both primary and non-primary states automatically
//       <Button disabled={!dirty || Boolean(Object.keys(errors).length)} primary>
//         {children}
//       </Button>
//     );
//   }
// }

// // not going to lie, I copied this from https://github.com/jaredpalmer/formik/blob/master/src/ErrorMessage.tsx
// // I don't know why these generics are needed or what they do
// export const SubmitButton = connect<
//   ISubmitButtonProps,
//   ISubmitButtonProps & { formik: FormikContext<any>}
// >(SubmitButtonImpl);
