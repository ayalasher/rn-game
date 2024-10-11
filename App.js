import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGamescreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient colors={["#720","#ddb52f"]} style={styles.main} >
      <ImageBackground imageStyle={styles.backgorundimage}
       style={styles.main}
       resizeMode='cover' source={require("./assets/images/fulvio-di-sciullo-HEna_6UIQ5M-unsplash.jpg")} >
         <StartGamescreen/>
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
