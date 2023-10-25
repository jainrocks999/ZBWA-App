import React from "react";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import Upload from "../../assets/Icon/Upload.svg";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const Documentation = () => {
const  checklistImage ={
    title: 'Select Image',
    quality: 0.7,
    maxWidth:500,
    maxHeight:500,
    saveToPhotos:true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

 const launchCameraForPhoto = async() => {
    launchCamera(checklistImage, response => {
       if (response.didCancel) {
       } else if (response.error) {
       } else {
        
        //   this.setState({imageObjectDic:response,imageEditView:true})
       }
    });
  }

 
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ paddingHorizontal: 24, marginTop: 30 }}>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center'}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'Your Photograph'}</Text>
                     <Text style={{color:'red'}}>*</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:38,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center',}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'GST Certificate'}</Text>
                     <Text style={{color:'red'}}>*</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:38,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center',}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'PAN Card'}</Text>
                     <Text style={{color:'red'}}>*</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:38,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center',}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'Aadhar Card'}</Text>
                     <Text style={{color:'red'}}>*</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:38,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center',}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'IEC Certificate'}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:38,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center',}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'BIS Certificate'}</Text>
                  </View>
                </TouchableOpacity>
                <View style={{marginTop:128,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                {/* <TouchableOpacity 
                   style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:44,
                    height:40,
                    backgroundColor:'#000000',
                    borderTopLeftRadius:80,
                    borderTopRightRadius:40,
                    borderBottomLeftRadius:80,
                    borderBottomRightRadius:40
                    }}>
                    <BackArrow/>
                </TouchableOpacity> */}
                <TouchableOpacity style={{
                    height:43,
                    width:130,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#FCDA64',
                    borderRadius:20
                }}>
                    <Text style={{fontFamily:'Montserrat-Medium',color:'#000000',fontSize:14}}>Submit</Text>
                </TouchableOpacity>
                {/* <View style={{width:40}}/> */}
            </View>
            </View>
        </View>
    )
}
export default Documentation;