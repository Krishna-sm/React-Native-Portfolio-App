
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './src/screens/Home';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Skill from './src/screens/Skill';
import UserData from './src/screens/UserData';
// import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold
} from '@expo-google-fonts/josefin-sans';
import SkillDetails from './src/screens/SkillDetails';

export default function App() {
  let [fontsLoaded]=useFonts({
    Nunito_600SemiBold,
  Nunito_700Bold,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold
  });
if(!fontsLoaded)
{
  // return <AppLoading />;
}

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerTitleAlign:"center",headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_600SemiBold"
          }
      }} >
        <Stack.Screen options={{headerShown:false}} initialParams={{ name: "Krishna Bansal" }} name='Home' component={Home} />
        <Stack.Screen name='Skills' component={Skill} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Team' component={UserData} />
        <Stack.Screen name='SkillDetails' component={SkillDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
