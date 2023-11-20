import './Account.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register(clicked) {
    const formik = useFormik({
        initialValues: {
            titles: '',
            firstname: '',
            lastname: '',
            location: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string().min(3, 'Too short').required('Required'),
            lastname: Yup.string().min(3, 'Too short').required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(3, 'Too short').required('Required')
        })
    });

    const handlePasswordFocus = () => {
        formik.setFieldValue('isPasswordFocused', true);
    };
    return (
        <div className>
            <br />
            <form onSubmit={formik.handleSubmit}>
                <table className={'register-form'}>
                    <tr>
                        <td colSpan={2} className={`register-bodytext  ${clicked ? 'clicked' : ''}`}>Create an account and benefit from a more
                            personal shopping experience, and quicker online checkout. <br /> <br />
                            All fields are mandatory.</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <h4 className={`register-titles  ${clicked ? 'clicked' : ''}`}>Title</h4>
                            <select name='titles'
                                value={formik.values.selectedCategory}
                                onChange={formik.handleChange}
                                className={`register-select-titles ${clicked ? 'clicked' : ''}`}
                                required
                            >
                                <option value="">Titles</option>
                                <option value="Mr.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Miss">Miss</option>
                                <option value="Mx.">Mx.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <br />
                            <h4 className={`register-titles  ${clicked ? 'clicked' : ''}`}>First Name</h4>
                            <input type="text" className={`register-box ${clicked ? 'clicked' : ''}`} name='firstname' onChange={formik.handleChange}
                                placeholder='First Name'
                            />
                            <br />
                            <h4 className={`register-titles  ${clicked ? 'clicked' : ''}`}>Last Name</h4>
                            <input type="text" className={`register-box ${clicked ? 'clicked' : ''}`} name='lastname' onChange={formik.handleChange}
                                placeholder='Last Name'
                            />
                            <br />
                            <h4 className={`register-titles  ${clicked ? 'clicked' : ''}`}>Location</h4>
                            <select name='location'
                                value={formik.values.selectedCategory}
                                onChange={formik.handleChange}
                                className={`register-select-titles ${clicked ? 'clicked' : ''}`}
                                required
                            >
                                <option value="Unites States">Unites States</option>
                                <option value="Vietname">Vietname</option>
                            </select>
                            <br />
                            <h4 className={`register-titles  ${clicked ? 'clicked' : ''}`}>Email</h4>
                            <input type="email" className={`register-box ${clicked ? 'clicked' : ''}`} name='email' onChange={formik.handleChange}
                                placeholder='Email'
                            />
                            <br />
                            <h4 className={`register-titles  ${clicked ? 'clicked' : ''}`}>Pasword</h4>
                            <input type="password" className={`register-box ${clicked ? 'clicked' : ''}`} name='password' onChange={formik.handleChange}
                                placeholder='Password'
                                onFocus={handlePasswordFocus}
                            />
                            <br />
                            {formik.values.isPasswordFocused &&
                                <div className='register-password-validation'>Your password must be at least 8 characters long,
                                    <br />contain at least 1 number and have a <br />
                                    combination of uppercase and lowercase letters. <br /> It cannot be a recently used password.</div>
                            }
                            <div className={`login-policy ${clicked ? 'clicked' : ''}`} style={{ textAlign: 'left' }}>
                                <br />
                                By signing in, I agree to FIRST FASHION's <br />
                                Privacy Policy
                                and
                                Legal Statement
                                .
                            </div>
                            <br />
                            <button type='submit' className='login-submit'><h3>REGISTER</h3></button>
                            <br /><br /><br /><br /><br />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Register;