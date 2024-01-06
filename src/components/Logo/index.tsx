import {Text, View} from "react-native";
import styles from "./styles";

export default function Logo() {
	return (
		<View style={styles.containerLogo}>
			<Text style={styles.textLogo}>Password</Text>
			<Text style={styles.textLogo}>Generator</Text>
		</View>
	);
}
