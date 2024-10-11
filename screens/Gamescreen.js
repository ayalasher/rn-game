import { View , Text} from "react-native";
import { StyleSheet } from "react-native";

export default function Gamescreen() {
    return(
        <View style={styles.main} >
            <Text style={styles.txtsize} >
                Game screen 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        margin:50,
        marginHorizontal:20,
        flex:1,
        marginTop:70,
        marginBottom:3,
    },
    txtsize:{
        fontSize:20
    }
})