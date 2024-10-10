import { View, Text , Pressable} from "react-native"

export default function PrimaryButton(props) {
    const pressfunction = ()=>{
        alert("Pressable pressed")
    }
    return (
        <Pressable>
            <View onPress={pressfunction} >
                <Text> {props.children} </Text>
            </View>
        </Pressable>
       
    )
}