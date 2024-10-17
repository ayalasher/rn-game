import { Text, View , StyleSheet } from "react-native";

export default function Title() {
    return<View>
        <Text style={styles.txtsizelarge} >Opponents Guess</Text>
    </View>
}

const styles = StyleSheet.create({
    txtsizelarge:{
        fontSize:32,
        fontWeight:"900",
        textAlign:"center",
        color:"#ddb52f",
        borderWidth:2,
        borderColor:"#ddb52f",
        padding:10,
        marginVertical:20
        
    },
})


