import React, {useState, useRef} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';


function App() {

  const ref = useRef(0);
  const [QRValue, setQRValue ] = useState('');
  const [QRLogo, setQRLogo] = useState('');
  const [QRImage, setQRImage] = useState('');

const GenerateQR = () => {
  ref.current.toDataURL((data: string) => {
  setQRImage('data:image/png;base64,'+data)
  })
}

const handleSave = async () => {
    if (Platform.OS === 'android') {
    var isReadGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

    if (isReadGranted === PermissionsAndroid.RESULTS.GRANTED) {
      const dirs = RNFetchBlob.fs.dirs
      var qrcode_data = QRImage.split('data:image/png;base64,');
      const filePath = dirs.DownloadDir+"/"+'QRCode'+new Date().getSeconds()+'.png'
      RNFetchBlob.fs.writeFile(filePath, qrcode_data[1], 'base64')
      .then(() =>  console.log("Saved successfully"))
      .catch((errorMessage) =>console.log(errorMessage))      
      }
    }

    if (Platform.OS ==='ios') {
      const options={
        title: 'Share your QRcode',
        url: QRImage,
      }
    try {
      await Share.open(options);
    } catch (err) {
      console.log(err)
    }
    }
}
  const handleShare =async ()=>{
      const options={
        title: 'Share your QRcode',
        url: QRImage,
      }
    try {
      await Share.open(options);
    } catch (err) {
      console.log(err)
    }
  }
  return (
<SafeAreaView style={styles.container}>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Generate QRCode</Text>
      <View style={styles.row}>
        <TextInput 
          placeholder= "Add Value to QRCode"
          style={styles.textInput}
          autoCapitalize="none"
          value={QRValue}
          onChangeText={setQRValue}
        />
        <TextInput 
          placeholder= "Add Logo URL"
          style={styles.textInput}
          autoCapitalize="none"
          value={QRLogo}
          onChangeText={setQRLogo}
        />
      </View>
        <QRCode
          size={350}
          value={QRValue ? QRValue : 'NA'}
          logo={{uri: QRLogo}}
          logoSize={60}
          logoBackgroundColor='transparent'
          getRef={ref}
        />
    <View style={styles.sectionContainer}>
      <TouchableOpacity
      style={styles.newButton}
      onPress={()=>GenerateQR()}>
        <Text style={[styles.sectionDescription,{color: '#fff', fontWeight: '900'}]}>Generate QR</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity
      style={styles.Button}
      onPress={()=>handleShare()}>
        <Text style={[styles.sectionDescription,{color: '#fff', fontWeight: '900'}]}>Share QR</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.Button}
      onPress={()=>handleSave()}>
        <Text style={[styles.sectionDescription,{color: '#fff', fontWeight: '900'}]}>Save QR</Text>
      </TouchableOpacity>
    </View>
  </View>

  </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginRight: 20,
    marginVertical: 20,
    borderRadius: 20,
    width: 162,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  newButton: {
    backgroundColor: 'deepskyblue',
   marginHorizontal: 10,
   paddingVertical: 10,
   paddingHorizontal: 75,
   borderRadius: 20,
   paddingBottom: 17,
  },
  Button: {
   backgroundColor: 'deepskyblue',
   marginTop: 32,
   marginRight: 50,
   paddingVertical: 10,
   paddingHorizontal: 35,
   borderRadius: 20,
   paddingBottom: 17,
  },
});

export default App;
