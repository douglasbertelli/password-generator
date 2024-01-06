import {Text, View} from "react-native";
import styles from "./styles";

interface IPros {
	text: string;
}

export default function TextCustom(props: IPros) {
	return (
		<Text style={styles.text}>{props.text}</Text>
	);
}
