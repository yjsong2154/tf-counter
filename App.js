import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Track from './track';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}

	clickStart = () => this.setState({ clicked: true });
	clickStop = () => this.setState({ clicked: false });

	render() {
		const clicked = this.state.clicked;

		let showStart = null;
		if (clicked == true) {
			showStart = (
				<View>
					<Track />
					<View style={styles.buttonStyle}>
						<Button title="Stop" onPress={this.clickStop} />
					</View>
				</View>
			);
		} else {
			showStart = (
				<View style={styles.buttonStyle}>
					<Button title="Start (Gold)" onPress={this.clickStart} />
				</View>
			);
		}

		return <View style={styles.container}>{showStart}</View>;
	}
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},

	textStyle: {
		fontSize: 18,
		marginTop: 17
	},

	buttonStyle: {
		position: 'absolute',
		alignSelf: 'center',
		top: '45%'
	}
});
