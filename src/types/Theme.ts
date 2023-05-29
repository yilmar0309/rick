import {DefaultTheme, Theme, useTheme} from '@react-navigation/native';

export type CustomTheme = {
  appColors: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;

    // Solid
    white: string;
    black: string;

    // Buttons Filter
    primaryButtonsFilter: string;
    primaryTextButtonsFilter: string;

    // Alert
    success: string;
    warning: string;
    info: string;
    error: string;
  };
} & Theme;

export const ThemeRN: CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#008cb5',
  },
  appColors: {
    primaryColor: '#008cb5',
    secondaryColor: '#040505',
    tertiaryColor: '#63c6ef',

    // Solid
    white: '#FFFFFF',
    black: '#000000',

    // Buttons Filter
    primaryButtonsFilter: '#EEE3FF',
    primaryTextButtonsFilter: '#8054C7',

    // Alert
    success: '#A2E2BA',
    warning: '#FBD789',
    info: 'blue',
    error: '#FF8277',
  },
};

export const useCustomTheme = useTheme as () => CustomTheme;
