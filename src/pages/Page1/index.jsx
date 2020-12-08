import { useHistory } from 'react-router-dom';
import { getCurrentTime } from 'utils/datetime';

import cent_os from 'assets/os/cent_os.png';

import './index.scss';

import dayjs from 'dayjs';
// eslint-disable-next-line no-console
console.log('time =', dayjs('2003-1-4').format('MM-DD-YYYY'));

const Page1 = () => {
	const history = useHistory();

	const handleToPage = () => history.push('/page2');

	return (
		<div className="page1">
			this is Page1 component!
			<p></p>
			<div>
				<button onClick={handleToPage}>to Page2</button>
				<button>点击</button>
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
