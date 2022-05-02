import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/textInput'
import Checkbox from './components/Checkbox'

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
                nombre: '',
                name: '',
                lastname: '',
                email: '',
                select: 'weed',
                accept: false,
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
        >
            {(formik) => (
                <Form
                    style={{ display: 'block' }}
                    onSubmit={formik.handleSubmit}
                >
                    <TextInput name="name" label="Nombre" />
                    <br />
                    <label>Apellido</label>
                    <Field name="lastname" type="text" />
                    <ErrorMessage name="lastname" />
                    <br />
                    <label> Email </label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                    <br />
                    <Checkbox name="accept">
                        Aceptar terminos y condiciones
                    </Checkbox>
                    <button type="submit">enviar</button>
                </Form>
            )}
        </Formik>
    )
}

export default App
