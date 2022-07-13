import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'


const Task = (props) => {

	return (
		<View style={styles.item}>
			<View style={styles.leftItem}>
				<TouchableOpacity style={styles.square}></TouchableOpacity>
				<Text style={styles.itemText}>{props.text}</Text>
			</View>
			<View style={styles.circular}></View>
			
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between' ,
		marginVertical: 5,
		backgroundColor:'#1B0080',
		paddingVertical: 10,
		paddingHorizontal: 8,
		borderRadius: 10,
	},
	leftItem: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	square: {
		width: 30,
		height: 30,
		backgroundColor: 'rgba(0, 100, 120, 1)',
		opacity: 0.8,
		marginRight: 12
	},
	itemText: {
		color:'white',
		maxWidth: '80%',
	},
	circular: {
		width: 30,
		height: 30,
		borderColor: 'red',
		borderRadius: 50,
		borderWidth: 2,
	},
}) 

export default Task