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
        color:"white",
        borderWidth:2,
        borderColor:"white",
        padding:10,
        marginVertical:20
        
    },
})


