import { View, Text , Pressable, StyleSheet} from "react-native"

export default function PrimaryButton(props) {
    const pressfunction = ()=>{
        alert("Pressable pressed 😀")
    }
    return (
       
            <View style={styles.btnoutercontainer} >
                 <Pressable onPress={pressfunction} style={styles.btninnnercontainer} android_ripple={{color:"grey"}} >
                    <Text style={styles.buttontext} > {props.children} </Text>
                 </Pressable>
            </View>
       
    )
}

const styles = StyleSheet.create({
    btninnnercontainer:{
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        backgroundColor:"white",
    },
    buttontext:{
        color:"black",
        textAlign:"center",
    },
    btnoutercontainer:{
        borderRadius:10,
        marginVertical:10,
        overflow:"hidden"
    }
})