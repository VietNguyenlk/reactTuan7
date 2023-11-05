import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import two from './screens/two'



function fisrt({navigation}){
  return(
    <Button onPress={()=>navigation.navigate('two')} title='next'/>
  )
    
    

}

// function two() {
//   return (
//    <View> <Text>Hello</Text></View>
    
//   );
// }



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen name='fisrt' component={fisrt}/>
            <Stack.Screen name='two' component={two}/>
       </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
