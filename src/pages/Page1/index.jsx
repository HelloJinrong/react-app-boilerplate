import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './index.scss';

import { getCurrentTime } from 'utils/datetime';

// eslint-disable-next-line no-console
console.log(getCurrentTime('2003-4-05'));

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			lastName: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
		}),
		onSubmit: values => {
			// eslint-disable-next-line no-console
			console.log(JSON.stringify(values, null, 2));
		},
	});

	const handleSubmit = e => {
		formik.handleSubmit(e);
	};

	return (
		<div className="page1">
			<div>
				<button onClick={handleToPage}>to Page2</button>
			</div>

			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.firstName}
				/>
				{formik.touched.firstName && formik.errors.firstName ? (
					<div>{formik.errors.firstName}</div>
				) : null}
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastName}
				/>
				{formik.touched.lastName && formik.errors.lastName ? (
					<div>{formik.errors.lastName}</div>
				) : null}
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div>{formik.errors.email}</div>
				) : null}
				<button type="submit">Submit</button>
			</form>

			<button type="button" onClick={handleSubmit}>
				点击提交
			</button>
		</div>
	);
};

export default Page1;
