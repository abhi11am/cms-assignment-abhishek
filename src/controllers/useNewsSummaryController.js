import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewsSummary, unsetNewsSummary } from "../store/slices/newsSlice";
import { useNavigate, useParams } from "react-router-dom";

const useNewsSummaryController = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isNewsSummaryLoading, newsSummary } = useSelector(state => state.news);

  useEffect(() => {
    if (type && id) dispatch(setNewsSummary({ type, id }));
    return () => {
      dispatch(unsetNewsSummary());
    }
  }, [type, id]);

  const onBackClick = () => {
    dispatch(unsetNewsSummary());
    navigate('/');
  }

  return {
    isNewsSummaryLoading,
    newsSummary,
    onBackClick
  }
}

export default useNewsSummaryController;