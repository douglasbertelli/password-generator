export default function generatePassword() {

	let password : String = ''
	let caracteres : String = 'AaBbCcDdEeFfGgHhIiJjKkLlMmMnOoPpQqRrSsTtUuVvXxYyZz123456789@#!*'
	let passwordLength = 10

	for( let index = 0; index < passwordLength; index ++ ) {
		password += caracteres.charAt(
			Math.floor(Math.random() * caracteres.length)
		)
	}

	return password

}
