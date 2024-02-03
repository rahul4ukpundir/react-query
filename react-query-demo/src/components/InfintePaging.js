import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

const InfintePaging = () => {

    const fetchColor = ({ pageParam = 1 }) => {
        return axios.get(`http://localhost:4000/colors?_page=${pageParam}&_per_page=2}`);
    }

    const { data, isLoading, error, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery("fetchColor", fetchColor, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 3) {
                return pages.length + 1;
            }
            else {
                return undefined;
            }
        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>Infinate Paging <br />
                {
                    data?.pages?.map((group, i) => {
                        return (
                            <>
                                {
                                    group?.data?.data?.map((color, i) => {
                                        return (
                                            <>
                                                <h3>{color?.colorName}</h3>
                                            </>
                                        )
                                    })
                                }

                            </>
                        )
                    })
                }

                <div>{isFetching && !fetchNextPage ? "Loading...": null}</div>
                <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>Load More</button>
            </div>
        )
    }

}

export default InfintePaging;