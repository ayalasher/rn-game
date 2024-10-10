import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGamescreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.main} >
      <StartGamescreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1
  }
});
