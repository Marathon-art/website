import React, { useEffect, useState } from 'react';

type ComponentBuilder<T> = (data: T) => React.ReactNode;

interface UseAsyncLoadingProps<T> {
	loadingState: ComponentBuilder<null>;
	dataState: ComponentBuilder<T>;
	errorState: ComponentBuilder<Error>;
}

export const useAsyncLoading = <T,>(
	promise: Promise<T>,
	{ loadingState,
		dataState,
		errorState
	}: UseAsyncLoadingProps<T>) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const result = await promise;
				setData(result);
			} catch (e) {
				setError(e as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [promise]);

	if (loading) {
		return loadingState(null);
	}

	if (error) {
		return errorState(error);
	}

	return dataState(data as T);
};
