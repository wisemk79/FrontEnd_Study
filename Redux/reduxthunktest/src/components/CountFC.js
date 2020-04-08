import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions/Count';

const CountFC = () => {
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(0);

  const { count: storeCount } = useSelector((state) => state.count);

  useEffect(() => {
    console.log('Component did mount.');
  }, []);

  const increaseCount = useCallback(() => {
    setLocalCount(localCount + 1);
    dispatch(actions.increaseCount());
  }, [localCount, dispatch]);

  const decreaseCount = useCallback(() => {
    setLocalCount(localCount - 1);
    dispatch(actions.decreaseCount());
  }, [localCount, dispatch]);

  const increaseCountAsyncThunk = useCallback(() => {
    dispatch(actions.increaseCountAsyncThunk());
  }, [dispatch]);

  const decreaseCountAsyncThunk = useCallback(() => {
    dispatch(actions.decreaseCountAsyncThunk());
  }, [dispatch]);

  return (
    <>
      {'Function component'}
      <div>
        <div>
          {`localCount: ${localCount}`}
        </div>
        <div>
          {`storeCount: ${storeCount}`}
        </div>
      </div>
      <div onClick={increaseCount}>
        {'+'}
      </div>
      <div onClick={decreaseCount}>
        {'-'}
      </div>
      <div onClick={increaseCountAsyncThunk}>
          {'Increase count async thunk'}
        </div>
        <div onClick={decreaseCountAsyncThunk}>
          {'Decrease count async thunk'}
        </div>
    </>
  )
};

export default CountFC;