import React, { Component, Fragment } from "react";
import { Text, View, Button,TextInput,Modal} from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
@connect((state) => ({
	name:state.test.yj,
	pass:state.test.pass,
	data:state.test.data,
	id:state.test.id
}))

class Home extends React.PureComponent {
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		Modal:false  //默认是false
	// 	}
	// }

	// openModal=()=>{//开启调用整个方法
	// 	this.setState=({
	// 		isModal:true    
	// 	})
	// }
	// shutModal=()=>{  //关闭这个方法
	// 	this.setState({
	// 		inModel:false
	// 	})
	// }
	delete=(e)=>{
		console.log('itme.id',e);
		const {dispatch}=this.props
		dispatch({
			type:"test/delete",
			payload:e
		})
	}

	// Update=(e)=>{
	// 	console.log('Update.id',e);
	// 	const {dispatch}=this.props
	// 	dispatch({
	// 		type:"test/Update",
	// 		payload:e
	// 	})
	// }


	render() {
		const {data} = this.props;
		return (
			<View style={{ flex: 1, flexDirection: "column" }}>
				{data.map((item,key)=>(
					<View key={key} style={{fontSize:40}}>
					<Text>
					{item.id}
					{item.name}
					{item.password}
					</Text>
					<Button title={"Delete"} onPress={()=>this.delete(item.id)}></Button>
					<View style={{marginTop:10}}>
					<Button title={"Update"} onPress={()=>this.Update(item.id)}></Button>
					</View>
					
					</View>
				)
				
					)}
		
		
			</View>
		);
	}
}

export default Home;
