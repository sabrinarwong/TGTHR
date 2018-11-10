import React from 'react';
import { StyleSheet, Text, View} from 'react-native'
import MapView from 'react-native-maps';

export default class MapsScreen extends React.Component {
	render() {
		return (
			
			<View style={styles.container}>

				<MapView style={styles.map}
					region={{
						latitude: 33.975678,
						longitude: -117.326184,
						latitudeDelta:0.1,
						longitudeDelta:0.1
					}}
					>

					<MapView.Marker
						coordinate={{
							latitude:33.975678,
							longitude:-117.326184
						}}
						title={'Procrastinate CS180 project'}
						description={'November 9: UCR WCH'}
						/>
					<MapView.Marker
						coordinate={{
							latitude:33.975651,
							longitude:-117.341459
						}}
						title={'Ten Ren\'s secret meetup'}
						description={'November 22: TenRen\'s Riverside'}
						/>

					<MapView.Marker
						coordinate={{
							latitude:33.973489,
							longitude:-117.328171
						}}
						title={'Cry about finals'}
						description={'December 7: UCR bell tower'}
						/>
				</MapView>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		marginTop:0,
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'flex-end',
		alignItems: 'center'


	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	top: {

	}
});