import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search users

  //get user

  //get repos

  //clear users

  //setloading

  return (
    <GithubContext.Provider>
      value=
      {{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
      }}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
