import {  Text, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { TextInput , Alert , StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/Title";

export default function StartGamescreen({onValidation}){


    const [enterednumber, setEnteredNumber] = useState('')

    const textentryhandler = (enteredtext)=>{
        setEnteredNumber(enteredtext) ;   
    }

    const resetinputhandlerall = ()=>{
        setEnteredNumber('')    
        return;
        
    }

    const confirminputhandler = ()=>{

        const intvalidation = parseInt(enterednumber) 

        if (intvalidation < 1 || intvalidation > 99  || isNaN(intvalidation )){
            Alert.alert("Inavlid number","Number must be between 1 and 99", [{text:"Okay",style:"destructive",onPress:resetinputhandlerall}]);
            setEnteredNumber('');
            return ;
        }else{ 
            setEnteredNumber("")
            onValidation(intvalidation)
            return;
        }

        user
    }

    return(
        <View style={styles.roocontainer} >
            <Title >Enter a number</Title>
          <View style={styles.screenbackgrounnd}  >
            <Text style={styles.instructiontxt} >Enter a number</Text>
            <TextInput style={styles.input} value={enterednumber}
             maxLength={2} onChangeText={textentryhandler}
             autoCapitalize="none"autoCorrect={false} keyboardType="number-pad" Placeholder="Enter some text"  />

            <View style={styles.btnview} >
                <View style={styles.something} >
                <PrimaryButton onPress={resetinputhandlerall} >Reset</PrimaryButton>
                </View>

                <View style={styles.something} >
                <PrimaryButton onPress={confirminputhandler} >Confirm</PrimaryButton>
                </View>        
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
    },
    roocontainer:{
        flex:1,
        marginVertical:40,
        marginHorizontal:20,

    },
    instructiontxt:{
        color:"#ddb52f",
        fontSize:18,
    }

})