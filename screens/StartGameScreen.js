import {  View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { TextInput , StyleSheet } from "react-native";

export default function StartGamescreen(){
    return(
        <View style={styles.screenbackgrounnd}  >
            <TextInput style={styles.input} maxLength={2} autoCapitalize="none"autoCorrect={false} keyboardType="number-pad" Placeholder="Enter some text"  />

            <View style={styles.btnview} >
                <View style={styles.something} >
                <PrimaryButton>Reset</PrimaryButton>
                </View>

                <View style={styles.something} >
                <PrimaryButton>Confirm</PrimaryButton>
                </View>        
            </View>
            
        </View>
    );
} 


const styles = StyleSheet.create({
    screenbackgrounnd:{
        backgroundColor:"#72063c",
        padding:16,
        marginTop:100,
        marginHorizontal:20, //margin to the left and right in terms of pixels
        borderRadius:10,
        elevation:10,  //Shadow property for android devices
        // Shadow effects for IOS devices
        shadowColor:"black",
        shadowOffset:{width:0,height:5},
        shadowRadius:6,
        shadowOpacity:0.5,
        alignItems:"center"
    },
    input:{
        height:50,
        fontSize:32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth:2,
        color:"#ddb52f",
        paddingLeft:5,
        marginVertical:5,
        fontWeight:"bold",
        width:50,
        textAlign:"center"

    },
    btnview:{
        flexDirection:"row"
    },
    something:{
        flex:1,
    }
})