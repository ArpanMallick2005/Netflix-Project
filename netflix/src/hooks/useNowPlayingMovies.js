import axios from "axios";
import { NOW_PLAYING_MOVIE } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import {useDispatch} from "react-redux";
const useNowPlayingMovies=async()=>{
    const dispatch=useDispatch();
    try{
      const res=await axios.get(NOW_PLAYING_MOVIE,options);
      console.log(res.data.filmography);
      dispatch(getNowPlayingMovies(res.data.filmography));
    }catch(error){
      console.log(error);
    }
  }
export default useNowPlayingMovies;