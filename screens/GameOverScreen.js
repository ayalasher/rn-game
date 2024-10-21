import { Image, ScrollView} from "react-native";
import { View , Text } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import StartGamescreen from "./StartGameScreen";


export default function GameOverScreen({}) {

    const [startgame,setstartgame] = useState(true)

    const btnalert = ()=>{
        alert("Well done")
    }

    const onclick = ()=>{
        setstartgame(false)
    }
    return(
       <ScrollView>
            {startgame? <ScrollView style={styles.main} >
            <View>
                <Title >
                    GAME OVER !!!
                </Title>

                <View style={styles.imagecontainer} >
                    <Image style={styles.image}  source={require('../assets/images/success.png')} />
                </View>

                <Text style={styles.maintext} >Your phone needed <Text style={styles.subtext} >X</Text> attempts to guessthe number <Text style={styles.subtext} >Y</Text> </Text>
                <PrimaryButton onPress={onclick} >Start new game</PrimaryButton>
            </View>
        </ScrollView>: <StartGamescreen/> }
       </ScrollView>
    )
}


const styles = StyleSheet.create({
    main:{
        padding:20,
        marginHorizontal:10,
        marginTop:60,

    },imagecontainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:"#ddb52f",
        overflow:"hidden"
    },
    image:{
        width:"auto",
        height:"100%"
    },
    maintext:{
        fontSize:24
    },
    subtext:{
        fontWeight:"800",
        color:"#72063c",
        fontSize:24
    }

})