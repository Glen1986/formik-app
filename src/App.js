import { useFormik } from 'formik'

function App() {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
        },
        onSubmit: (values) => console.log(values),
    })
    return (
        <form style={{ display: 'block' }} onSubmit={formik.handleSubmit}>
            <label>Nombre</label>
            <input
                name="name"
                type="text"
                onChange={formik.handleChange}
                values={formik.values.name}
            />
            <label>Apellido</label>
            <input
                name="lastname"
                type="text"
                onChange={formik.handleChange}
                values={formik.values.lastname}
            />
            <label>Email</label>
            <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                values={formik.values.email}
            />
            <button type="submit">enviar</button>
        </form>
    )
}

export default App
