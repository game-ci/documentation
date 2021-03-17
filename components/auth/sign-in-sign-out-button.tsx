import { Button } from 'antd';
import firebase from 'firebase/app';
import { useState } from 'react';
import { AiOutlineClose, AiTwotoneLock } from 'react-icons/all';
import { useAuth, AuthCheck } from 'reactfire';

const loadingDelay = async (delayMs = 100) => {
  return new Promise((resolve) => setTimeout(() => resolve('loading'), delayMs));
};

const SignInSignOutButton = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const auth = useAuth();

  const signIn = async () => {
    try {
      const action = auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const result = await Promise.race([action, loadingDelay()]);
      if (result === 'loading') {
        setIsLoading(true);
      }
      await action;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const action = auth.signOut();
      const result = await Promise.race([action, loadingDelay()]);
      if (result === 'loading') {
        setIsLoading(true);
      }
      await action;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      {...props}
      onClick={auth.currentUser ? signOut : signIn}
      loading={isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AuthCheck fallback={<AiTwotoneLock />}>
        {isHovered ? <AiOutlineClose color="#ff4d4f" /> : <AiTwotoneLock color="#52c41a" />}
      </AuthCheck>
    </Button>
  );
};

export default SignInSignOutButton;
