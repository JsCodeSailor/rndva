// import { toastHandler } from '../utils';
export default {
	namespace: "test",
	state: {
		data: [{
			id:0,
			name: 'admin',
			password:'123'
		},
		{
			id:1,
			name:'yj',
			password:'123'
		}
	],
		id:'',
		yj:'',
		pass:'',
	  },
	reducers: {

		setState(state,{payload}){
			return {
				...state,
				...payload
			}
		}
	},

	effects:{
		*changeName({payload},{put}){
			console.log("payload",payload)
			yield put({
				type:'setState',
				payload:{
					yj:payload.name
				}
			})
		},
		*passWord({payload},{put}){
			yield put({
				type:'setState',
				payload:{
					pass:payload.pass
				}
			})
		},
		*add({payload},{put,select}){
		
			let list=yield select(state=>state.test.data)
			console.log('list',list)
			 list.push(payload.y)
			yield put({
				type:'setState',
				payload:{
					data:list
				}
			})
		},
		*delete({payload},{put,select}){
			console.log("payload.delete",payload)
			let list=yield select(state=>state.test.data)
			console.log('listTWo',list)
			dele=list.filter(item=>item.id!==payload)
			console.log('listThree',dele);
			yield put({
				type:'setState',
				payload:{
					data:dele
				}
			})
			
		},
		// *Update({payload},{put}){

		// }
	}
};
