import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import { object, string } from "yup";

const schema = object({
  login: string().required(),
  password: string().min(6).max(16).required(),
});

const initialValues = {
  login: "",
  password: "",
};

const Input = styled(Field)`
  font-size: 16px;
`;

export const LoginForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    console.log("value :>> ", value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" id="login" />
          <ErrorMessage name="login" component="div" />
        </label>

        <label htmlFor="password">
          Password
          <Input type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
