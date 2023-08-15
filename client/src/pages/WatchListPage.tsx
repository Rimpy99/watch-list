import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/reduxHooks";

const WatchListPage = () => {

    const userId = useAppSelector((state) => state.user.userId)
    const userToken = useAppSelector((state) => state.user.token)

    const [ watchlist, setWatchlist ] = useState<string[]>(['']);

    const getWatchlist = async () => {
        const res = await fetch(`/watchlist/get/${userId}}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });

        if(res.ok){
            const watchlistRes = res.json();

            console.log(watchlistRes);
        }
    }

    useEffect(() => {
        getWatchlist();
    })
    
    return(
        <>
        </>
    )
};

export default WatchListPage;