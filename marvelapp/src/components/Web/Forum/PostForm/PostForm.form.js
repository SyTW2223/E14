import * as Yup from "yup";

export function initialValues() {
  return {
    titulo: "",
    comentario: "",
  };
}

export function validationSchema() {
  return Yup.object({
    titulo: Yup.string().required(true),
    comentario: Yup.string().required(true),
  });
}
