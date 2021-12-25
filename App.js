import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.first}>시작하기</Text>
          
        </View>
    </View>
  );
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
    color: '#6830CF',
    fontWeight: '600', // 기본 400 얇은건 200
    padding: 16
  }
  
});
