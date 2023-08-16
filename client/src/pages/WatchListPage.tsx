import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import WatchlistCard from "../components/WatchlistCard";
import { flexCenter } from "../styles/styles";

const WatchListPage = () => {

    const userId = useAppSelector((state) => state.user.userId)
    const userToken = useAppSelector((state) => state.user.token)

    const [ watchlist, setWatchlist ] = useState<string[] | []>([]);
    const [ isError, setIsError ] = useState<boolean>(false);

    const getWatchlist = async () => {
        try{
            const res = await fetch(`/watchlist/get/${userId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
    
            if(res.ok){
                const watchlistRes = await res.json();
    
                setWatchlist(watchlistRes.watchlist);
            }else{
                setIsError(true)
            }
        }catch(err){
            setIsError(true)
        }
    }

    useEffect(() => {
        getWatchlist();
    })

    if(isError){
        return (
            <div className="min-h-[80vh]">
                <h3 className="text-center py-10">Something went wrong! Try again later!</h3>
            </div>
        )
    }else if(!watchlist.length){
        return (
            <div className="min-h-[80vh]">
                <h3 className="text-center py-10">You didn't add any movie to your watchlist!</h3>
            </div>
        )
    }
    
    return(
        <div className={`w-full ${flexCenter} flex-col py-7 px-2`}>
            <div className="py-7">
                <h1 className="text-xl font-bold tracking-wide">YOUR WATCHLIST</h1>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3`}>
                {
                    watchlist.map((movieId) => (<WatchlistCard movieId={movieId} key={movieId}/>))
                }
            </div>
        </div>
    )
};

export default WatchListPage;