import { ScrollView,TextInput } from "react-native";
export default function GameOverScreen() {
    return(
        <ScrollView>
            <View>
                <TextInput placeholder="Enter a number" />
            </View>
        </ScrollView>
    )
}