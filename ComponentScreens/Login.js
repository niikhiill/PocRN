import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import bgCover from '../assets/bgimage.png';
import styles from './StylesLogin';
import {loginUser} from '../redux/actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    };
  }

  loginButtonAction = () => {
    this.props.getUserName(this.state.mail);
    this.props.navigation.navigate('Drawer');
  };

  isValidFields = () => {
    const {mail, password} = this.state;

    mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!mail.match(mailformat)) {
      alert('Please provide valid email');
      return false;
    } else if (password === '') {
      alert('Please provide valid password');
      return false;
    } else if (password.length < 8) {
      alert('Weak Password!! Password should be of length more than 8');
      return false;
    } else {
      alert('Logged In');
      this.setState({mail: ''});
      this.setState({password: ''});
      return true;
    }
  };

  render() {
    const {mail, password} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <KeyboardAvoidingView behavior="padding" style={styles.viewStyle}>
          <Text style={styles.title}>MovieApp</Text>

          <TextInput
            style={styles.emailField}
            placeholder="Login"
            placeholderTextColor={'rgba(255,255,255,0.3)'}
            onChangeText={(value) => this.setState({mail: value})}
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.Password.focus();
            }}
            blurOnSubmit={false}
            value={mail}
          />

          <TextInput
            style={styles.passwordField}
            placeholder="Password"
            placeholderTextColor={'rgba(255,255,255,0.3)'}
            onChangeText={(value) => this.setState({password: value})}
            secureTextEntry={true}
            ref={(input) => {
              this.Password = input;
            }}
            value={password}
          />

          <TouchableOpacity
            style={styles.signInButton}
            onPress={() =>
              this.isValidFields() ? this.loginButtonAction() : null
            }>
            <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <View>
              <TouchableOpacity>
                <Text style={{fontSize: 18, color: 'white'}}>
                  Forgot Your Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={{fontSize: 18, color: 'white'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUserName: (mail) => {
      dispatch(loginUser(mail));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
