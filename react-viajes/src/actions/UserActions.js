import { GET_CITIES } from './type';
import axios from 'axios';

export const Login = user => async dispatch => {
  axios
    .post('http://localhost:8080/login/', user)
    .then(json => {
      dispatch(getToker(json));
    })
    .catch(err => {
      dispatch(error(err));
    });
};

export const Foto = Foto => async dispatch => {
  axios
    .post('http://localhost:8080/login/', Foto)
    .then(json => {
      dispatch(getToker(json));
    })
    .catch(err => {
      dispatch(error(err));
    });
};
export const Register = user => async dispatch => {
  axios
    .post('http://localhost:8080/user/', user)
    .then(json => {
      dispatch(getUser(json));
    })
    .catch(err => {
      dispatch(error(err));
    });
};
function getToker(json) {
  return {
    type: POST_TOKEN,
    user: json,
    error: undefined
  };
}
function getUser(json) {
  return {
    type: POST_USER,
    user: json,
    error: undefined
  };
}
function loadImg() {
  return {
    type: POST_PHOTO,
    photo: 'success',
    error: undefined
  };
}
function error(err) {
  return {
    error: {
      message: err.message
    }
  };
}
