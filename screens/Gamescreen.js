import { View , Text, Alert} from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import Numbercontainer from "../components/Numbercontainer";
import PrimaryButton from "../components/PrimaryButton";
import AntDesign  from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




export default function Gamescreen({opponentsguess,onGameover}) {
    // let opponentsnum = opponentsguess ;

    const initialguess =  generaterandombetween(1,100,opponentsguess)
    const [currentguess, getCurrentGuess] = useState(initialguess)

    function generaterandombetween(min , max , exclude) {
        const rndmnum = Math.floor(Math.random()*(max-min))+min ;
        if (rndmnum===exclude) {
            return generaterandombetween(min, max, exclude)
        } else {
            return rndmnum; 
        }
        
        
    }

    let minboundry = 1 ;
    let maxboundry = 100;

   


    useEffect(()=>{
        if (currentguess===opponentsguess) {
            onGameover();
        }
    },[currentguess,onGameover,opponentsguess])

    function nextguesshandler(direction) {

        if ((direction==="smaller" && currentguess < opponentsguess) || (direction==="greater"&&currentguess>opponentsguess) ) {
            Alert.alert("Don't lie","That logic is wrong",[{text:"sorry",style:"desctructive"}])
        }
        // Bigger and smaller
        if (direction === "smaller") {
            maxboundry=currentguess  ; 
          
        } else {
            // When the value is larger/bigger/higher
            minboundry = currentguess + 1 ;
            
        }

        if (currentguess===opponentsguess) {
            Alert.alert("Bravo","The guess is correct",[{text:"Okay",style:"destructive"}])
        }

        const newrandomnumber = generaterandombetween(minboundry,maxboundry,currentguess)
        getCurrentGuess(newrandomnumber)
    }

   
    return(
        <View style={styles.main} >
            <Title>Opponents guess</Title>
            {/* <Text style={styles.oppguess} > {opponentsguess} </Text> */}
            <View>
                <Numbercontainer> {currentguess} </Numbercontainer>
                <Text style={styles.txtsizesmall} >Higher or lower??</Text>
                {/* higher or lower buttons */}

                <View style={styles.btncontainer} >
                    <PrimaryButton onPress={nextguesshandler.bind(this , "smaller")} > <AntDesign name="minus" /> </PrimaryButton>
                    <PrimaryButton onPress={nextguesshandler.bind(this , "greater" )} > <FontAwesome6 name="add" /> </PrimaryButton>
                </View>
                
            </View>

            <Text style={styles.txtsizesmall} > rounds</Text>
            
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
        paddingVertical:20,
        textAlign:"center"
        
        
    },
    btncontainer:{
        flexDirection:"row",
        justifyContent:"center"
    }
    // oppguess:{
    //     textAlign:"centre",
    //     fontsize:25,


    // }
})