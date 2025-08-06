import { useQuery } from "@tanstack/react-query";


interface IFetchOptions {
    endpoint: string;
    method: string;
    queryKeys: any[];
}


function useFetch<T>({ endpoint, queryKeys, method }: IFetchOptions) {
    const  {data: tagsResponse,isFetching, isLoading } = useQuery<T>({
        queryKey: queryKeys,
        queryFn: async () => {
            const response = await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    });
    return { data: tagsResponse, isFetching , isLoading};
}

export default useFetch;