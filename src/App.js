import { useFormik } from 'formik'

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
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
        },
        validate,
    })
    return (
        <form style={{ display: 'block' }} onSubmit={formik.handleSubmit}>
            <label>Nombre</label>
            <input
                name="name"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                values={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
            <br />
            <label>Apellido</label>
            <input
                name="lastname"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                values={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
                <div>{formik.errors.lastname}</div>
            ) : null}
            <br />
            <label> Email </label>
            <input
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                values={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <br />
            <button type="submit">enviar</button>
        </form>
    )
}

export default App
