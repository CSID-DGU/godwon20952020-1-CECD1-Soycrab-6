import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, cleartFilter } from '../modules/filters';
import { goToHome } from '../modules/datas';
import Spinner from '../components/shared/Spinner';
import { reducerUtils } from '../lib/asyncUtils';
import FilterEdit from '../components/FilterEdit';

function FilterEditContainer({ realId, edgeId }) {
  const { data, loading, error } = useSelector(
    state => state.filters.filter ||reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilter({
      realId: realId,
      edgeId: edgeId
    }));
    return () => {
      dispatch(cleartFilter());
    };
  }, [dispatch, edgeId, realId]);

  if (loading && !data) return <Spinner />;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <div>
      <FilterEdit filter={data} />
    </div>
  )
}

export default FilterEditContainer;