import React, { Component, Fragment } from "react";
import { Modal,Text, View, Button,TextInput ,StyleSheet,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
@connect((state) => ({
	// count: state.test.count,
	name:state.test.yj,
	pass:state.test.pass,
	id:state.test.id,
	data:state.test.data
}))
class Login extends React.PureComponent {
			constructor(props){
				super(props);
				this.state={
					isModal:false
				}
			}
			showModal=()=>{
				this.setState({
						isModal:true
				})
		}
		onRequestClose=()=>{
			this.setState({
					isModal:false,
			});
	}
	landing = () => {
		const {navigation,name,data,pass} = this.props;
		let flag=false;
		for(const index in data){
			console.log('data',data[index].name)
			console.log('name',name)
			if(name==data[index].name && pass==data[index].password ){
				flag=true;
				break;
			// navigation.navigate("Home");/
		  }
		}

		if(flag){
			navigation.navigate("Home");
		}
		else {
			alert('密码错误');
		}
	};

	changeName =e=> {
		console.log('e',e);
		const { dispatch} = this.props;
		dispatch({
			type: "test/changeName",
			payload:{
				 name:e
			}
		});
	};
	passWord=e=>{
		console.log('pass',e);
		const {dispatch}=this.props
		dispatch({
			type:'test/passWord',
			payload:{
				pass:e
			}
		})
	}


	add=()=>{
		const {name,pass,id,dispatch,data}=this.props
		alert('添加成功');
		this.setState({
			isModal:false,
	});
		dispatch({
			type:'test/add',
			payload:{
				y:{
					id:data.length+1,
					name:name,
					password:pass
				}
			}
		})
	}

	render() {
		return (
			<View style={{ flex: 1, flexDirection: "column" }}>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Modal
		animationType='slide'           // 从底部滑入
		transparent={false}             // 不透明
		visible={this.state.isModal}    // 根据isModal决定是否显示
		onRequestClose={() => {this.onRequestClose()}}  // android必须实现
>
		<View>
		<TextInput 	style={styles.TextInputs} onChangeText={this.changeName} placeholder="name" />
		<TextInput 	style={styles.TextInputs} onChangeText={this.passWord} placeholder="password" />
		<View style={{width:250,marginTop:10}}> 
		 <Button title={"添加"} onPress={this.add}></Button>
	</View>
		</View>
</Modal>

					<TextInput 
        				style={styles.TextInputs}
      				    onChangeText={this.changeName}
       				    placeholder="name"
      				/>
				  <TextInput secureTextEntry ={true}
        				style={styles.TextInputs}
      				    onChangeText={this.passWord}
       				    placeholder="password"
      				/>
		 	<View style={{width:250,marginTop:10}}>
					<Button title={"登录"}
          			  onPress={this.landing}
         		 ></Button>

<View style={{width:250,marginTop:10}}>
				  <Button title={"注册"}
          			  onPress={this.showModal}
         		 ></Button>
</View>


				</View>
				</View>
			</View>
		);
	}
}



//StyleSheet.create 样式布局
const styles = StyleSheet.create({
	TextInputs: {
		width:250,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius:5,
		marginBottom:10
	  },
  });
  export default Login;
  