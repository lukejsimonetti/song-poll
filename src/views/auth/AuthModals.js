import React, {useContext} from 'react';
import LoginModal from './LoginModal'
import YourNameModal from './YourNameModal'
import { ModalContext } from '../../contexts/ModalContext';
import { AppStateContext } from '../../contexts/AppStateContext';

const LOGIN = "LOGIN";
const YOURNAME = "YOURNAME";

const AuthModals = () => {

  const { currentModal } = useContext(ModalContext)
  const { isAuthenticated } = useContext(AppStateContext)

  if(currentModal.name === YOURNAME){
    return (
      <YourNameModal />
    )
  }
  return (
    <LoginModal />
  );
};

export default AuthModals;