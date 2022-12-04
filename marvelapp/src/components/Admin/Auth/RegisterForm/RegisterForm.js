import React, {useState} from 'react';
import {Form} from "semantic-ui-react";
import "./RegisterForm.scss";
import {useFormik} from "formik";
import {Auth} from "../../../../api"
import {initialValues, validationSchema} from "./RegisterForm.form";
import "./RegisterForm.scss";

const authController = new Auth();

export  function RegisterForm(props) {
  const {openLogin} = props;
  const[error, setError] = useState("");
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
        try {
          setError("");
          await authController.register(formValue);
          openLogin();
        } catch (error) {
          setError("Error en el servidor");
        }
    }
  })
  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
          name="email" 
          placeholder="Correo electronico"
          onChange={formik.handleChange} 
          values={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input 
          name="password" 
          type="password" 
          placeholder="Contraseña" 
          onChange={formik.handleChange} 
          values={formik.values.password}
          error={formik.errors.password}
        />
        <Form.Input 
          name="repeatPassword" 
          type="password" 
          placeholder="Repetir Contraseña" 
          onChange={formik.handleChange} 
          values={formik.values.repeatPassword}
          error={formik.errors.repeatPassword}
        />
        <Form.Checkbox 
          name="conditionAccepted" 
          label="He leido y acepto las politicas de privacidad" 
          onChange={(_, data) => 
            formik.setFieldValue("conditionAccepted", data.checked)
        }
          checked={formik.values.conditionAccepted}
          error={formik.errors.conditionAccepted}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
            Crear cuenta
        </Form.Button>
        <p className="register-form__error">{error}</p>
    </Form>
  );
}
