import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// constants
import {
  ACCOUNT_SCREEN_NAME,
  EDIT_EMAIL_SCREEN_NAME,
  EDIT_PASSWORD_SCREEN_NAME,
  EDIT_USERNAME_SCREEN_NAME,
} from '@/settings/constants/routes';

// containers
import AccountScreen from '@/settings/containers/AccountScreen';
import EditEmailScreen from '@/settings/containers/EditEmailScreen';
import EditPasswordScreen from '@/settings/containers/EditPasswordScreen';
import EditUsernameScreen from '@/settings/containers/EditUsernameScreen';

// types
import { AccountSettingsParamList } from '@/settings/types/routes';

// hooks
import {} from 'common/hooks/useBackButtonNavigation';

// hocs
import HeaderRightEmail from '@/settings/containers/HeaderRightEmail';
import HeaderRightUsername from 'settings/containers/HeaderRightUsername';
import HeaderRightPassword from '@/settings/containers/HeaderRightPassword';

interface ISettingsNavigatorProps {}

const Screens = createStackNavigator<AccountSettingsParamList>();

const AccountSettingsNavigator: FC<ISettingsNavigatorProps> = () => {
  const emailHeaderRight = () => <HeaderRightEmail />;
  const usernameHeaderRight = () => <HeaderRightUsername />;
  const passwordHeaderRight = () => <HeaderRightPassword />;

  return (
    <Screens.Navigator initialRouteName={ACCOUNT_SCREEN_NAME}>
      <Screens.Screen name={ACCOUNT_SCREEN_NAME} component={AccountScreen} />
      <Screens.Screen
        name={EDIT_EMAIL_SCREEN_NAME}
        component={EditEmailScreen}
        options={{ headerRight: emailHeaderRight }}
      />
      <Screens.Screen
        name={EDIT_PASSWORD_SCREEN_NAME}
        component={EditPasswordScreen}
        options={{ headerRight: passwordHeaderRight }}
      />
      <Screens.Screen
        name={EDIT_USERNAME_SCREEN_NAME}
        component={EditUsernameScreen}
        options={{ headerRight: usernameHeaderRight }}
      />
    </Screens.Navigator>
  );
};

export default memo(AccountSettingsNavigator);
