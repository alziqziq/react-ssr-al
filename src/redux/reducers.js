import { combineReducers } from 'redux';
import app from './modules/app';
import mahasiswa from './modules/mahasiswa';

export default combineReducers({
  app,
  mahasiswa
});
