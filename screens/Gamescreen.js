import { View , Text} from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import Numbercontainer from "../components/Numbercontainer";
export default function Gamescreen({opponentsguess}) {


  

    let opponentsnum = opponentsguess ;
    function generaterandombetween(min , max , exclude) {
        const rndmnum = Math.floor(Math.random()*(max-min))+min ;
        if (rndmnum===exclude) {
            return generaterandombetween(min, max, exclude)
        } else {
            return rndmnum; 
        }
        
    }

    const initialguess =  generaterandombetween(1,100,opponentsnum)
    const [currentguess, getCurrentGuess] = useState(initialguess)
    return(
        <View style={styles.main} >
            <Title/>
            {/* <Text style={styles.oppguess} > {opponentsguess} </Text> */}
            <View>
                <Numbercontainer> {currentguess} </Numbercontainer>
                <Text style={styles.txtsizesmall} >Higher or lower??</Text>
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
    txtsizesmall:{
        fontSize:17,
        fontWeight:"500",
        
        
    },
    // oppguess:{
    //     textAlign:"centre",
    //     fontsize:25,


    // }
})