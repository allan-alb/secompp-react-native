import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Text } from '../components'
import Colors from '../theme/colors'

class CustomInput extends Component {

	render(){
		return (
			<View>
			<Text
				color='white'
				size={16}
				fontWeight='light'
			>{this.props.label}</Text>
			<TextInput
				{...this.props}
				
				value={this.props.value}
				onChangeText={this.props.onChangeText}
				underlineColorAndroid="transparent"
				placeholderTextColor="grey"
				selectionColor="rgba(255,255,255,0.33)"

				secureTextEntry={this.props.secureTextEntry}
				underlineColorAndroid={this.props.underlineColorAndroid}

				style={[styles.input, this.props.style]}
			/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	input: {
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 16,
		paddingVertical: 16,
		fontSize: 22,
		color: 'white',
	}
});

export default CustomInput;