import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGamescreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Gamescreen from './screens/Gamescreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts}  from "expo-font"
import AppLoading from 'expo-app-loading';


export default function App() {

  const [data,setData] = useState(null)
  const [gameover, setgameover] = useState(true)


 const [fontsloaded] =  useFonts({
    'open-sans':require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsloaded) {
    return  <AppLoading/> ; 
  }

  const userenterednumberhandler = (userenterednumber)=>{
    setData(userenterednumber)
    setgameover(false)
  }

  function Gameoverhandler() {
    setgameover(true)
  }


  let screendisplay = <StartGamescreen onValidation={userenterednumberhandler} />



  if (data) {
    screendisplay = <Gamescreen opponentsguess={data} onGameover={Gameoverhandler} />
  }

  if (gameover) {
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={["#720","#ddb52f"]} style={styles.main} >
      
        <ImageBackground imageStyle={styles.backgorundimage}
        style={styles.main}
        resizeMode='cover' source={require("./assets/images/fulvio-di-sciullo-HEna_6UIQ5M-unsplash.jpg")} >
         {/* <SafeAreaView>    </SafeAreaView> */}
         {/* {screendisplay} */}
         <GameOverScreen/>

       </ImageBackground>
      
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  },
  backgorundimage:{
    opacity:0.20,
  }
});
