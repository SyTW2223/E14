import React from 'react';
import { Form, Image} from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";
import {useFormik} from "formik";
import { Post } from "../../../../api";
import { useAuth } from "../../../../hooks";
import {initialValues, validationSchema} from "./PostForm.form"
import "./PostForm.scss";

const postController = new Post();

export function PostForm( props ) {
    const { onClose, onReload} = props;
    const { accessToken, user } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try{
                await postController.createPost(accessToken, user.nickname, formValue);
                onReload();
                onClose();
            } catch(error){
                console.error(error);
            }
        },
    });

  return (
    <Form className='post-form' onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
            <Form.Input 
            name="titulo" 
            placeholder="Titulo del post" 
            onChange={formik.handleChange}
            value={formik.values.titulo}
            error={formik.errors.titulo}
            />
            
        </Form.Group>

        <Editor 
        init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
          }}

        initialValue={formik.values.content}
        onChange={(e) => formik.setFieldValue("comentario", e.target.getContent())}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
            Crear comentario
        </Form.Button>
    </Form>
  );
}
