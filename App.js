import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import two from './screens/two'



function fisrt({navigation}){
  return(

    <View style={styles.container}>
          <View> <Text style={{fontSize:'24px',top:-70, fontWeight:'bold'}}>Welcome to Cafe World</Text></View>
          <View> 
            <Image style={styles.Image} source={require('./assets/image.png')}/>
            <Image style={styles.Image} source={require('./assets/image 2.png')}/>
            <Image style={styles.Image} source={require('./assets/image 3.png')}/>
          </View>
          <Button onPress={()=>navigation.navigate('two')} title='Get Started'/> 
    </View>
   
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
            <Stack.Screen name='two' component={two} options={{headerTitle:'Shop Near Me',
                                                                headerBackImageSource :()=> {
                                                                  source(require('./assets/image 177.png'))
                                                                }
          } 
                                                                       }/>
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
  Image:{
    width : 200,
    height:70,
    marginBottom :50,

  }
});
