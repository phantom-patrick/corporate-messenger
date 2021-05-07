import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { SharedStackParamList } from '@/app/types/routes';

// constants
import { SETTINGS_STACK_NAME } from '@/settings/constants/routes';
import { CHAT_STACK_NAME } from 'chat/constants/routes';

// routers
import SettingsRouter from '@/settings/routers/Main';
import ChatRouter from 'chat/routers/Chat';

const SharedStack = createStackNavigator<SharedStackParamList>();

const SharedRouter = () => {
  return (
    <SharedStack.Navigator>
      <SharedStack.Screen
        name={SETTINGS_STACK_NAME}
        component={SettingsRouter}
      />
      <SharedStack.Screen name={CHAT_STACK_NAME} component={ChatRouter} />
    </SharedStack.Navigator>
  );
};

export default memo(SharedRouter);
