import { createContext, useEffect, useReducer, useCallback, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
// config
import { FIREBASE_API } from '../config-global';
//
import { ActionMapType, AuthStateType, AuthUserType, FirebaseContextType } from './types';



enum Types {
  INITIAL = "INITIAL",
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user:AuthUserType;
  };
};


type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated:false,
  user:null
}


const reducer = (state:AuthStateType, action:ActionsType) => {
  if(action.type === Types.INITIAL) {
    return {
      
    }
  }
}
