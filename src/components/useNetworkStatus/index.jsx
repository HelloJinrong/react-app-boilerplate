import { useEffect, useState } from 'react';

const getConnection = () =>
	navigator.connection || navigator.mozConnection || navigator.webkitConnection;

const useNetworkStatus = () => {
	const [connection, updateNetworkConnection] = useState(getConnection());

	useEffect(() => {
		const updateConnectionStatus = () => {
			updateNetworkConnection(getConnection());
		};

		connection.addEventListener('change', updateConnectionStatus);
		return () => {
			connection.removeEventListener('change', updateConnectionStatus);
		};
	}, [connection]);
	return connection;
};

export default useNetworkStatus;
