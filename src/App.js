import { Formik, Form, Field, ErrorMessage } from 'formik'

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Nombre Requerido'
    } else if (values.name.length < 4) {
        errors.name = 'el nombre es muy corto'
    }
    if (!values.lastname) {
        errors.lastname = 'Apellido Requewrido'
    } else if (values.lastname.length < 4) {
        errors.lastname = 'el apellido es muy corto'
    }
    if (!values.email) {
        errors.email = 'Correo Requerido'
    }

    return errors
}

function App() {
    return (
        <Formik
            initialValues={{
                name: '',
                lastname: '',
                email: '',
                select: 'weed',
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
        >
            {(formik) => (
                <Form
                    style={{ display: 'block' }}
                    onSubmit={formik.handleSubmit}
                >
                    <label>Nombre</label>
                    <Field name="name" type="text" className="input" />
                    <Field name="select" as="select" className="input">
                        <option value="weed">weed</option>
                        <option value="cafe">café</option>
                    </Field>
                    <ErrorMessage name="name" />
                    <br />
                    <label>Apellido</label>
                    <Field name="lastname" type="text" />
                    <ErrorMessage name="lastname" />
                    <br />
                    <label> Email </label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                    <br />
                    <button type="submit">enviar</button>
                </Form>
            )}
        </Formik>
    )
}

export default App
