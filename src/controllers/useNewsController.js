import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setNewsSummary } from "../store/slices/newsSlice";

const useNewsController = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, banners, breakingNews, trendingNews } = useSelector(state => state.news);

  const onNewsClick = (type, id) => {
    dispatch(setNewsSummary({ type, id }));
    navigate(`/${type}/${id}`);
  }

  return { categories, banners, breakingNews, trendingNews, onNewsClick };
}

export default useNewsController;