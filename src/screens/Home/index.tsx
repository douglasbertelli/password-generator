import {View} from 'react-native';

import {useState} from "react";

import styles from "./styles";

import * as Clipboard from 'expo-clipboard';

import Logo from "../../components/Logo";
import Button from "../../components/Button";
import TextCustom from "../../components/Text";
import generatePassword from "../../services/passwordService";

export default function Home() {

	const [pass, setPass] = useState('')
	function handleGeneratePass() {
		let generateToken  = generatePassword()

		setPass(generateToken)
	}

	function handleCopyPass () {
		Clipboard.setStringAsync(pass)
	}

	return (
		<View style={styles.container}>
			<Logo />
			<TextCustom text={pass} />
			<Button name={'Gerar Senha'} onPress={ handleGeneratePass } />
			<Button name={'Copiar'} onPress={ handleCopyPass } />
		</View>
	);
}

