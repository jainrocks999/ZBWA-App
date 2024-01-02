import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Upload from "../../assets/Icon/Upload.svg";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import BackArrow from "../../assets/Icon/BackArrow.svg";
import CheckBox from "@react-native-community/checkbox";

const Documentation = ({ onPress }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const checklistImage = {
    title: 'Select Image',
    quality: 0.7,
    maxWidth: 500,
    maxHeight: 500,
    saveToPhotos: true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  const launchCameraForPhoto = async () => {
    launchCamera(checklistImage, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {

        //   this.setState({imageObjectDic:response,imageEditView:true})
      }
    });
  }


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => launchCameraForPhoto()}
          style={[styles.touch, { marginTop: 5 }]}>
          <Upload />
          <View style={styles.row}>
            <Text style={styles.text}>{'Your Photograph'}</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => launchCameraForPhoto()}
          style={styles.touch}>
          <Upload />
          <View style={styles.row}>
            <Text style={styles.text}>{'GST Certificate'}</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => launchCameraForPhoto()} style={styles.touch}>
          <Upload />
          <View style={styles.row}>
            <Text style={styles.text}>{'PAN Card'}</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => launchCameraForPhoto()} style={styles.touch}>
          <Upload />
          <View style={styles.row}>
            <Text style={styles.text}>{'Aadhar Card'}</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => launchCameraForPhoto()} style={styles.touch}>
          <Upload />
          <View style={styles.row}>
            <Text style={styles.text}>{'IEC Certificate'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => launchCameraForPhoto()} style={styles.touch}>
          <Upload />
          <View style={styles.row}>
            <Text style={styles.text}>{'BIS Certificate'}</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,paddingHorizontal:17, }}>
        <CheckBox
          style={{ height: 25, width: 30 }}
           disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: '#FCDA64', false: '#FCDA64' }}
          onTintColor='#FCDA64'
          onCheckColor='#FCDA64'
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 15, marginLeft: 10, color: '#000',fontFamily:'Montserrat-Regular' }}>{'I agree to the '}</Text>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#000', fontSize: 15, color: '#000' }}>Terms and Conditions</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.arrow}>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        <View style={{ width: 40 }} />
      </View>
    </View>
  )
}
export default Documentation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  main: {
    paddingHorizontal: 24,
    marginTop: 30
  },
  touch: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#FCDA64',
    marginTop: 32,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 40,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#000000'
  },
  bottom: {
    marginTop: 128,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 40,
    backgroundColor: '#000000',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 40
  },
  button: {
    height: 43,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCDA64',
    borderRadius: 20
  },
  submit: {
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
    fontSize: 14
  }
})