import Platform from 'Platform';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import React from 'react';
import { View, StatusBar } from 'react-native';

let navigationOptions = {
	headerTruncatedBackTitle: '返回',
	headerBackTitle: null,
	headerStyle: {
		backgroundColor: '#5E8EE0',
		...ifIphoneX(
			{
				paddingTop: 30,
				height: 75,
			},
			{
				height: 44,
				// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
			},
		),
	},
	headerTintColor: '#FFF',
	headerTitleStyle: {
		fontSize: 18,
		color: '#FFF',
		flex: 1,
		textAlign: 'center',
	},
	headerBackTitleStyle: {
		backgroundColor: '#5E8EE0',
		flex: 1,
		textAlign: 'center',
		fontSize: 18,
	},
	gesturesEnabled: true,
};

export default navigationOptions;
