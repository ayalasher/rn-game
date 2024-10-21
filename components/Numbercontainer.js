import { View , Text , Dimensions} from "react-native";
import { StyleSheet } from "react-native";

export default function Numbercontainer({children}) {

    const devicewidth = Dimensions.get('window').width
    
    // SCREEN--With the status bar
    // WINDOW-- excluding the status bar

    return <View style={styles.container} >
        <Text style={styles.containertxt} > {children} </Text>
    </View>
}


const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        
    },
    containertxt:{
        textAlign:"center",
        padding:15,
        borderWidth:2,
        borderColor:"#ddb52f"
       
    }
})

