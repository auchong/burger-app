import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      localId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  });

  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      localId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, { 
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some-token',
      localId: 'some-local-id'
    })).toEqual({
      token: 'some-token',
      localId: 'some-local-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  })
});