import React,{useState} from "react";
import { View,Text,TextInput, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker'
import Claendar from "../../assets/Icon/Calendar.svg";


const PersonalDetail=()=>{
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dob,setDob]=useState('')
console.log('this is slected date',dob);


    return(
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <View style={{paddingHorizontal:24,marginTop:30}}>
                <View style={{}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Address</Text>
                    <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                        <TextInput/>
                    </View>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Location</Text>
                    <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                        <TextInput/>
                    </View>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Pincode</Text>
                    <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                        <TextInput/>
                    </View>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Phone Number</Text>
                    <View style={{height:40,width:'100%',borderWidth:1,borderColor:'#FCDA64',marginTop:5}}>
                        <TextInput/>
                    </View>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:14}}>Email</Text>
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
                <View style={{marginTop:40,alignItems:'center',justifyContent:'center'}}>
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
export default PersonalDetail;