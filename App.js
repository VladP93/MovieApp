import React, {useState, useMemo} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkPaper,
  DefaultTheme as DefaultPaper,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as DarkNavigation,
  DefaultTheme as DefaultNavigation,
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

export default function App() {
  const [theme, setTheme] = useState('dark');

  DefaultPaper.colors.primary = '#1ae1f2';
  DarkPaper.colors.primary = '#1ae1f2';
  DarkPaper.colors.accent = '#1ae1f2';

  DarkNavigation.colors.background = '#192734';
  DarkNavigation.colors.card = '#15212b';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme === 'dark' ? DarkPaper : DefaultPaper}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer
          theme={theme === 'dark' ? DarkNavigation : DefaultNavigation}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

const styles = StyleSheet.create({});
