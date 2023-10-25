import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity } from "react-native";
import Header from "../../../components/CustomHeader";
import Upload from "../../../assets/Icon/Upload.svg";
import { useNavigation } from "@react-navigation/native";
import DatePicker from 'react-native-date-picker'
import Claendar from "../../../assets/Icon/Calendar.svg";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const AddSecondaryMember=()=>{
    const navigation=useNavigation()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dob,setDob]=useState('')

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
    
    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <Header
            title={'Add Secondary Member'}
            onPress={()=>navigation.goBack()}
            />
           <View style={{paddingHorizontal:24,marginTop:30}}>
                <View style={{marginTop:0}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Phone Number</Text>
                    <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                        <TextInput/>
                    </View>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Emergency Number</Text>
                    <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                        <TextInput/>
                    </View>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>DOB</Text>
                    <TouchableOpacity 
                      onPress={()=>setOpen(true)}
                     style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                     <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>{dob}</Text>
                     <Claendar/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>launchCameraForPhoto()} style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:38,justifyContent:'flex-start',paddingHorizontal:10,flexDirection:'row',alignItems:'center',}}>
                  <Upload/>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'Your Photograph'}</Text>
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
                     <Text style={{marginLeft:40,fontSize:14,fontFamily:'Montserrat-Medium',color:'#000000'}}>{'Salary Slip'}</Text>
                     <Text style={{color:'red'}}>*</Text>
                  </View>
                </TouchableOpacity>
                <View style={{marginTop:140,alignItems:'center',justifyContent:'center'}}>
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
                </View>
            </View>
            <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode={'date'}
                        maximumDate={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        // setDate(date)
                            var d = date
                                month = '' + (d.getMonth() + 1),
                                day = '' + d.getDate(),
                                year = d.getFullYear();
                        
                            if (month.length < 2) 
                                month = '0' + month;
                            if (day.length < 2) 
                                day = '0' + day;
                        
                            var finalDate= [day,month,year].join('/');
                            setDob(finalDate)

                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
        </View>
    )
}
export default AddSecondaryMember;