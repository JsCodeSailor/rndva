import Platform from 'Platform';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { StatusBar } from 'react-native';

let tabBarOptions = {
	style: {
		...ifIphoneX(
			{
				height: 75,
				backgroundColor: '#fff',
				paddingBottom: 25,
			},
			{
				backgroundColor: '#fff',
			},
		),
	},
	activeTintColor: '#08f',
	inactiveTintColor: '#757575',
	// gesturesEnabled: true,
};
if (Platform.OS === 'android') {
	tabBarOptions = {
		style: {
			// height: 170,

			backgroundColor: '#fff',
		},
		tabStyle: {
			borderWidth: 0,
		},
		activeTintColor: '#4F8CED',
		inactiveTintColor: '#717171',
		showIcon: true,
		showLabel: true,
		// iconStyle: { width: 40, height: 40 },
		labelStyle: { fontSize: 14 },
		indicatorStyle: { backgroundColor: '#fff' },
	};
}

export default tabBarOptions;
