import { View , Text} from "react-native";
import { StyleSheet } from "react-native";

export default function Numbercontainer({children}) {
    return <View style={styles.container} >
        <Text style={styles.containertxt} > {children} </Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    containertxt:{
        textAlign:"center",
        margin:20,
        borderRadius:2,
        borderColor:"#ddb52f"
    }
})

