import { View , Text} from "react-native";
import { StyleSheet } from "react-native";

export default function Gamescreen() {
    return(
        <View style={styles.main} >
            <Text style={styles.txtsizelarge} >
               Opponent's guess  
            </Text>
            <View>
                <Text style={styles.txtsizesmall} >Higher ir lower??</Text>
                {/* higher or lower buttons */}
                {/* + , - */}
            </View>

            <Text>Log rounds</Text>
            
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
    txtsizelarge:{
        fontSize:25,
        fontWeight:"900",
        fontFamily:"roboto"
    },
    txtsizesmall:{
        fontSize:17,
        fontWeight:"500",
        fontFamily:"roboto"
    }
})