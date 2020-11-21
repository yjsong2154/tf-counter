import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Loading extends Component {
	state = {
		counter: 0
	};

	componentDidMount() {
		setInterval(this.tick, 500);
	}

	componentWillUnmount() {
		clearInterval();
	}

	tick = () => {
		if (this.state.counter == 0 || this.state.counter == 1) {
			this.setState({
				counter: this.state.counter + 1
			});
		} else {
			this.setState({
				counter: 0
			});
		}
	};

	render() {
		const card = this.state.counter;

		let showCard = null;
		if (card == 0) {
			showCard = <View style={styles.gold} />;
		} else if (card == 1) {
			showCard = <View style={styles.red} />;
		} else {
			showCard = <View style={styles.blue} />;
		}

		return <View style={styles.back}>{showCard}</View>;
	}
}

const styles = StyleSheet.create({
	gold: {
		width: '100%',
		height: '100%',
		backgroundColor: 'gold'
	},
	red: {
		width: '100%',
		height: '100%',
		backgroundColor: 'red'
	},
	blue: {
		width: '100%',
		height: '100%',
		backgroundColor: 'blue'
	},
	back: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	}
});
