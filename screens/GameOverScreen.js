import { ScrollView} from "react-native";
import { View , Text } from "react-native";
import { StyleSheet } from "react-native";
export default function GameOverScreen() {
    return(
        <ScrollView style={styles.main} >
            <View>
                <Text style={styles.gameovertext} >
                    GAME OVER !!!
                </Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    main:{
        padding:50,
        marginHorizontal:20,
        marginTop:70,

    },
    gameovertext:{
        fontSize:20
    }
})