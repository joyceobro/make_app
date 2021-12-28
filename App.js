import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native'; //버튼부품을 리액트네이티브에서
import StartButton from './components/StartButton';


 export default class App extends React.Component {
  state={
    content: '',
  };
  render(){
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='여기에 입력해주세요'
      onChangeText={(text)=>{
        this.setState({content:text}); // 바뀐 내용으로 텍스트 저장
      }}
      />
      <StartButton showAlert={()=> Alert.alert(this.state.content)} />
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {
    backgroundColor: '#6830CF',
    padding: 16,
    paddingBottom: 0,
    margin:120,
    flexDirection: 'row', // 텍스트 2개 있을 때 가로 연결인지 세로연결인지,
    opacity: 0.5
  },
  first: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600', // 기본 400 얇은건 200
    padding: 16
  },
  input : {
    width: '100%',
    textAlign: 'center',
    marginBottom: 16,

  }
  
});
