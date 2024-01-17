import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Upload from "../../assets/Icon/Upload.svg";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import BackArrow from "../../assets/Icon/BackArrow.svg";
import CheckBox from "@react-native-community/checkbox";
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "../LocalStorage";
import Toast from "react-native-simple-toast";
import Loader from "../Loader";
import axios from "axios";
import FormData, { getHeaders } from 'form-data';

const Documentation = ({ onPress }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [loader, setLoader] = useState(false)

  const [photo, setPhoto] = useState('')
  const [photoName, setPhotoName] = useState('')
  const [photoType, setPhotoType] = useState('')

  const [gst, setGst] = useState('')
  const [gstName, setGstName] = useState('')
  const [gstType, setGstType] = useState('')

  const [pan, setPan] = useState('')
  const [panName, setPanName] = useState('')
  const [panType, setPanType] = useState('')

  const [aadhar, setAadhar] = useState('')
  const [aadharName, setAadharName] = useState('')
  const [aadharType, setAadharType] = useState('')

  const [iec, setIec] = useState('')
  const [iecName, setIecName] = useState('')
  const [iecType, setIecType] = useState('')

  const [bis, setBis] = useState('')
  const [bisName, setBisName] = useState('')
  const [bisType, setBisType] = useState('')

 const arr = ['a', 'b', 'c'];
console.log('this is arr',arr.join(','));

  const becomeAmember = async () => {

    const personalAddress = await AsyncStorage.getItem(Storage.personalAddress)
    const personalLocation = await AsyncStorage.getItem(Storage.personalLocation)
    const personalPincode = await AsyncStorage.getItem(Storage.personalPincode)
    const personalPhoneNumber = await AsyncStorage.getItem(Storage.personalPhoneNumber)
    const personalEmail = await AsyncStorage.getItem(Storage.personalEmail)
    const personalEmergencyNumber = await AsyncStorage.getItem(Storage.personalEmergencyNumber)
    const personalDob = await AsyncStorage.getItem(Storage.personalDob)
    const addMoreArray=await AsyncStorage.getItem(Storage.addMoreArray)

    const businessName = await AsyncStorage.getItem(Storage.businessName)
    const gstNumber = await AsyncStorage.getItem(Storage.businessGst)
    const bussinessAddress = await AsyncStorage.getItem(Storage.businessAddress)
    const businessLocation = await AsyncStorage.getItem(Storage.businessLocation)
    const businessPhone = await AsyncStorage.getItem(Storage.businessPhone)
    const businessEmail = await AsyncStorage.getItem(Storage.businessEmail)
   
    const user_token = await AsyncStorage.getItem(Storage.user_token)

    if(personalAddress==''){
       Toast.show('Please fill Personal Details')
    }
    else if(personalLocation==''){
      Toast.show('Please fill Personal Details')
    }
    else if(personalPincode==''){
      Toast.show('Please fill Personal Details')
    }
    else if(personalPhoneNumber==''){
      Toast.show('Please fill Personal Details')
    }
    else if(personalEmail==''){
      Toast.show('Please fill Personal Details')
    }
    else if(personalEmergencyNumber==''){
      Toast.show('Please fill Personal Details')
    }
    else if(personalDob==''){
      Toast.show('Please fill Personal Details')
    }
    else if(businessName==''){
      Toast.show('Please fill Business Details')
    }
    else if(gstNumber==''){
      Toast.show('Please fill Business Details')
    }
    else if(bussinessAddress==''){
      Toast.show('Please fill Business Details')
    }
    else if(businessLocation==''){
      Toast.show('Please fill Business Details')
    }
    else if(businessPhone==''){
      Toast.show('Please fill Business Details')
    }
    else if(businessEmail==''){
      Toast.show('Please fill Business Details')
    }
    else if (photoName == '') {
      Toast.show('Please select your photograph')
    }
    else if (gstName == '') {
      Toast.show('Please select GST Certificate')
    }
    else if (panName == '') {
      Toast.show('Please select PAN Card')
    }
    else if (aadharName == '') {
      Toast.show('Please select Aadhar Card')
    }
    else if (toggleCheckBox == false) {
      Toast.show('Please agree with Terms and Conditions')
    }
    else {
      setLoader(true)
      const data = new FormData()

      data.append("address", personalAddress)
      data.append("location", personalLocation)
      data.append("pincode", personalPincode)
      data.append("personal_mobile", personalPhoneNumber)
      data.append("email", personalEmail)
      data.append("emergency_number", personalEmergencyNumber)
      data.append("dob", personalDob)
      data.append("business_name", businessName)
      data.append("gst", gstNumber)
      data.append("business_address", bussinessAddress)
      data.append("business_location", businessLocation)
      data.append("mobile", businessPhone)
      data.append("business_email", businessEmail)
      data.append("mobile_number", "")
      data.append("gst_certificate", gstNumber)
      data.append("website", "google.com")
      data.append("mem_asso", JSON.parse(addMoreArray).join(','))
      data.append("photo", {
        uri: photo,
        name: photoName.substring(photoName.lastIndexOf('/') + 1),
        type: photoType,
      })
      data.append("pan_card", {
        uri: pan,
        name: panName.substring(panName.lastIndexOf('/') + 1),
        type: panType,
      })
      data.append("gst_certificate", {
        uri: gst,
        name: gstName.substring(gstName.lastIndexOf('/') + 1),
        type: gstType,
      })
      data.append("adhar_card", {
        uri: aadhar,
        name: aadharName.substring(aadharName.lastIndexOf('/') + 1),
        type: aadharType,
      })
      data.append("iec_certificate", {
        uri: iec,
        name: iecName.substring(iecName.lastIndexOf('/') + 1),
        type: iecType
      })
      data.append("bis_certificate", {
        uri: bis,
        name: bisName.substring(bisName.lastIndexOf('/') + 1),
        type: bisType
      })

      let config = {
        method: 'post',
        url: 'http://45.79.123.102:49002/api/member/create',
        headers: {
          'Authorization': `${user_token}`,
          "Content-Type": "multipart/form-data",
        },
        data: data
      };
      try {
        axios.request(config)
          .then((response) => {
            console.log(response.data);
            AsyncStorage.setItem(Storage.personalAddress, "")
            AsyncStorage.setItem(Storage.personalLocation, "")
            AsyncStorage.setItem(Storage.personalPincode, "")
            AsyncStorage.setItem(Storage.personalPhoneNumber, "")
            AsyncStorage.setItem(Storage.personalEmail, "")
            AsyncStorage.setItem(Storage.personalEmergencyNumber, "")
            AsyncStorage.setItem(Storage.personalDob, "")

            AsyncStorage.setItem(Storage.businessName, "")
            AsyncStorage.setItem(Storage.businessGst, "")
            AsyncStorage.setItem(Storage.businessAddress, "")
            AsyncStorage.setItem(Storage.businessLocation, "")
            AsyncStorage.setItem(Storage.businessPhone, "")
            AsyncStorage.setItem(Storage.businessEmail, "")
            setPhoto('')
            setPhotoName('')
            setPhotoType('')
            setGst('')
            setGstName('')
            setGstType('')
            setPan('')
            setPanName('')
            setPanType('')
            setAadhar('')
            setAadharName('')
            setAadharType('')
            setIec('')
            setIecName('')
            setIecType('')
            setBis('')
            setBisName('')
            setBisType('')

            setLoader(false)
          })
          .catch((error) => {
            console.log("this is catch block", error.response.data);
            Toast.show(error.response.data.message)
            setPhoto('')
            setPhotoName('')
            setPhotoType('')
            setGst('')
            setGstName('')
            setGstType('')
            setPan('')
            setPanName('')
            setPanType('')
            setAadhar('')
            setAadharName('')
            setAadharType('')
            setIec('')
            setIecName('')
            setIecType('')
            setBis('')
            setBisName('')
            setBisType('')

            setLoader(false)
          });
      }
      catch (error) {
        setLoader(false);
        //  console.log("errorer", error.response.data);
      }
    }
  }


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

  // const launchCameraForPhoto = async () => {
  //   launchCamera(checklistImage, response => {
  //     if (response.didCancel) {
  //     } else if (response.error) {
  //     } else {

  //       //   this.setState({imageObjectDic:response,imageEditView:true})
  //     }
  //   });
  // }

  const _pickDocument = async (type) => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });
      const res = result;
      console.log('this is response data', result);
      if (type == 'photograph') {
        setPhoto(res.uri)
        setPhotoName(res.name)
        setPhotoType(res.type)
      }
      if (type == 'gstCertificate') {
        setGst(res.uri)
        setGstName(res.name)
        setGstType(res.type)
      }
      if (type == 'pancard') {
        setPan(res.uri)
        setPanName(res.name)
        setPanType(res.type)
      }
      if (type == 'aadharcard') {
        setAadhar(res.uri)
        setAadharName(res.name)
        setAadharType(res.type)
      }
      if (type == 'iecCertificate') {
        setIec(res.uri)
        setIecName(res.name)
        setIecType(res.type)
      }
      if (type == 'bisCertificate') {
        setBis(res.uri)
        setBisName(res.name)
        setBisType(res.type)
      }
      else {

      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled file picker');
      } else {
        console.log('DocumentPicker err => ', err);
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      {loader ? <Loader /> : null}
      <View style={styles.main}>
        <TouchableOpacity onPress={() => _pickDocument('photograph')}
          style={[styles.touch, { marginTop: 5 }]}>
          <Upload />
          {photo ?
            <Text numberOfLines={1} style={[styles.text, { marginRight: 20 }]}>{photoName}</Text> :
            <View style={styles.row}>
              <Text style={styles.text}>{'Your Photograph'}</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _pickDocument('gstCertificate')}
          style={styles.touch}>
          <Upload />
          {gst ? <Text numberOfLines={1} style={[styles.text, { marginRight: 20 }]}>{gstName}</Text> :
            <View style={styles.row}>
              <Text style={styles.text}>{'GST Certificate'}</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _pickDocument('pancard')} style={styles.touch}>
          <Upload />
          {pan ? <Text numberOfLines={1} style={[styles.text, { marginRight: 20 }]}>{panName}</Text> :
            <View style={styles.row}>
              <Text style={styles.text}>{'PAN Card'}</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _pickDocument('aadharcard')} style={styles.touch}>
          <Upload />
          {aadhar ? <Text numberOfLines={1} style={[styles.text, { marginRight: 20 }]}>{aadharName}</Text> :
            <View style={styles.row}>
              <Text style={styles.text}>{'Aadhar Card'}</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _pickDocument('iecCertificate')} style={styles.touch}>
          <Upload />
          {iec ? <Text numberOfLines={1} style={[styles.text, { marginRight: 20 }]}>{iecName}</Text> :
            <View style={styles.row}>
              <Text style={styles.text}>{'IEC Certificate'}</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _pickDocument('bisCertificate')} style={styles.touch}>
          <Upload />
          {bis ? <Text numberOfLines={1} style={[styles.text, { marginRight: 20 }]}>{bisName}</Text> :
            <View style={styles.row}>
              <Text style={styles.text}>{'BIS Certificate'}</Text>
            </View>}
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 17, }}>
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
          <Text style={{ fontSize: 15, marginLeft: 10, color: '#000', fontFamily: 'Montserrat-Regular' }}>{'I agree to the '}</Text>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#000', fontSize: 15, color: '#000' }}>Terms and Conditions</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.arrow}>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => becomeAmember()}
          style={styles.button}>
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
    color: '#000000',
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