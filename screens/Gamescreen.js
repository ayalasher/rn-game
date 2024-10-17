import { View , Text} from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/Title";

export default function Gamescreen({opponentsguess}) {

    const opponentsguess = opponentsguess ;
    return(
        <View style={styles.main} >
            <Title/>
            <Text style={styles.oppguess} > {opponentsguess} </Text>
            <View>
                <Text style={styles.txtsizesmall} >Higher ir lower??</Text>
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
    oppguess:{
        textAlign:"centre",
        fontsize:25

    }
})