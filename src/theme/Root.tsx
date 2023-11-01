import React from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { FirebaseAppProvider } from 'reactfire';
import { Toaster } from 'react-hot-toast';
import config from '@site/src/core/config';
import { reducer } from '@site/src/logic';

const store = configureStore({ reducer });

interface Props {
  children: React.ReactNode;
}

function Root({ children }: Props): JSX.Element {
  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={config.firebase}>
        {/* Todo - Remove anticon className when removing AntDesign */}
        <IconContext.Provider value={{ className: 'anticon' }}>
          <Toaster />
          {children}
        </IconContext.Provider>
      </FirebaseAppProvider>
    </Provider>
  );
}

export default Root;
