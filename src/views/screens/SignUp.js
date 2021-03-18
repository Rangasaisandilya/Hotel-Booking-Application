/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      address: '',
      emailId: '',
      phoneNumber: '',
      adharNumber: '',
    };
  }
  componentDidMount() {}
  checkLogin() {
    const {
      userName,
      password,
      address,
      emailId,
      phoneNumber,
      adharNumber,
    } = this.state;
    console.log(
      userName +
        ' ' +
        password +
        ' ' +
        address +
        '' +
        emailId +
        '' +
        phoneNumber +
        '' +
        adharNumber,
    );

    fetch('http://192.168.0.10:8080/saveRegister', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        address: address,
        emailId: emailId,
        phoneNumber: phoneNumber,
        adharNumber: adharNumber,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        alert('Registration success');
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
              marginTop: 12,
              textAlign: 'center',
            }}>
            Register Now!
          </Text>
        </View>
        <ScrollView>
          <View>
            <Text style={{fontSize: 20}}>UserName</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={styles.textInput}
                value={this.state.userName}
                onChangeText={(userName) => this.setState({userName: userName})}
              />
            </View>
            <Text style={{marginTop: 10, fontSize: 20}}>Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Your Password"
                style={styles.textInput}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({password: password})}
              />
            </View>
            <Text style={{marginTop: 10, fontSize: 20}}>Address</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="enter Address"
                style={styles.textInput}
                value={this.state.address}
                onChangeText={(address) => this.setState({address: address})}
              />
            </View>
            <Text style={{marginTop: 10, fontSize: 20}}>emailId</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="enter emailId"
                style={styles.textInput}
                value={this.state.emailId}
                onChangeText={(emailId) => this.setState({emailId: emailId})}
              />
            </View>
            <Text style={{marginTop: 10, fontSize: 20}}>PhoneNumber</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="enter phone number"
                style={styles.textInput}
                value={this.state.phoneNumber}
                onChangeText={(phoneNumber) =>
                  this.setState({phoneNumber: phoneNumber})
                }
              />
            </View>
            <Text style={{marginTop: 10, fontSize: 20}}>AadharNumber</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="enter AadharNumber"
                style={styles.textInput}
                value={this.state.adharNumber}
                onChangeText={(adharNumber) =>
                  this.setState({adharNumber: adharNumber})
                }
              />
            </View>
            <View style={styles.button}>
              <LinearGradient
                colors={['#1f65aa', '#1f65ff']}
                style={styles.signIn}>
                <Text
                  onPress={this.checkLogin.bind(this)}
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  SignUp
                </Text>
              </LinearGradient>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#1f65ff',
                    borderWidth: 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#1f65ff',
                    },
                  ]}>
                  SignIn
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
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
