import {TouchableOpacity, Text, TouchableOpacityProps} from "react-native";
import styles from "./styles";

interface IButton {
	name: String,
	onPress: () => void,
}
export default function Button(props: IButton) {
	return (
		<TouchableOpacity style={styles.button} activeOpacity={.8} onPress={ props.onPress }>
			<Text style={styles.buttonText}>{props.name}</Text>
		</TouchableOpacity>
	);
}
