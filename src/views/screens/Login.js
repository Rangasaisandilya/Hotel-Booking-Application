/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
    };
  }
  componentDidMount() {}
  checkLogin() {
    const {emailId, password} = this.state;
    console.log(emailId + ' ' + password);
    fetch('http://192.168.0.10:8080/loginuser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailId: emailId,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status === 200) {
          this.props.navigation.navigate('Home');
        } else {
          this.props.navigation.navigate('Home');
          // alert('Username/Password mismatch');
        }
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 100}}>
          <Text
            style={{
              color: '#4863a0',
              fontWeight: 'bold',
              fontSize: 30,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Credentials to Login
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20}}>emailId</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter email id"
              placeholderTextColor="#666666"
              style={styles.textInput}
              value={this.state.emailId}
              onChangeText={(emailId) => this.setState({emailId: emailId})}
            />
          </View>
          <Text style={{marginTop: 20, fontSize: 20}}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={25} />
            <TextInput
              placeholder="Enter Password"
              style={styles.textInput}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(password) => this.setState({password: password})}
            />
          </View>
          <View style={styles.button}>
            <LinearGradient
              colors={['#1f65ff', '#1f65ff']}
              style={styles.signIn}>
              <Text
                onPress={this.checkLogin.bind(this)}
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                SignIn
              </Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={[
                styles.signIn,
                {
                  borderColor: '#1f65ff',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#1f65ff',
                  },
                ]}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -10,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
