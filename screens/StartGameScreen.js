import {  View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { TextInput } from "react-native";

export default function StartGamescreen(){
    return(
        <View>
            <TextInput c Placeholder="Enter some text"  />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
} 