import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './(tabs)/index';
import SignUp from './(tabs)/explore';
import ProfilePage from './(Screen)/ProfilePage';
import Login from './(tabs)/index';
import Home from './(Screen)/Home';
import SecondHome from './(Screen)/Home2';
import Calculator from './(Screen)/Calculator';
import CartPage from './(Screen)/Cart';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack.Navigator>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="SecondHome" component={SecondHome} options={{ headerShown: false }}/>
        <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }}/>

      </Stack.Navigator>
  );
}
