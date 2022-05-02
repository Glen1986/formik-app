import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/textInput'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Select from './components/Select'

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
    if (!values.radio) {
        errors.radio = 'Opcion Requerida'
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
                select: 'seleccione',
                accept: false,
                radio: '',
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
                    <TextInput name="lastname" label="Apellido" />
                    <br />
                    <TextInput name="email" label="Email" />
                    <br />
                    <Select name="select" label="tipo de volaaa">
                        <option value="">seleccione</option>
                        <option value="weed">weed</option>
                        <option value="cafe">café</option>
                        <option value="mojado">mojado</option>
                    </Select>
                    <Radio name="radio" value="weed" label="weed" />
                    <Radio name="radio" value="cafe" label="café" />
                    <Radio name="radio" value="mojado" label="mojado" />
                    <ErrorMessage name="radio" />

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
