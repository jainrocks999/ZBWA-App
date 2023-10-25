import {StyleSheet} from 'react-native';

export default StyleSheet.create({
 inputView:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    marginTop: 8,
  },
  otp:{
    fontSize: 12,
    color: '#FFFFFF',
    width: 16,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#FFFFFF',
    borderBottomWidth: 1,
    height: Platform.OS == 'ios' ? 34 : 34,
  }
});