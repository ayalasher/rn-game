import { Text, View , StyleSheet } from "react-native";

export default function Title(props) {
    return<View>
        <Text style={styles.txtsizelarge} >{props.children}</Text>
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


