### Create Project
React Native Latest Installation
```bash
$npx @react-native-community/cli@latest init MyProject --version latest
```
### Running Project
```bash
$npx react-native start
$npx react-native run-android
$npx react-native run-ios
```
Run with Device
```bash
$adb devices
$npx react-native run-android --deviceId=3612f890
```
### Show Console Log for Debugging
```bash
$npx react-native log-android
$npx react-native log-ios
```
### Generate Unsigned Release
```bash
$npx react-native run-android --mode release
$npx react-native run-ios --mode release
```
### Update Project to Latest React Native Version
Use the Latest Installation
```bash
$npx @react-native-community/cli@latest init MyProject --version latest
```
Copy the .tsx or .jsx file to the new Project Folder
```bash
$cp MyProject_old/App.tsx MyProject/App.tsx
```
IOS Config
```
MyProject/ios/MyProject/info.plist
```
Android Config
```
MyProject/android/app/build.gradle
MyProject/android/app/src/main/AndroidManifest.xml
```
### Generate Icon
https://icon.kitchen/

Rename Icons in MyProject/android/app/src/main/AndroidManifest.xml
```
android:icon="@mipmap/ic_launcher"
android:roundIcon="@mipmap/ic_launcher"
```
### Responsive
React Native Platform
```javascript
import { Platform, StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
      container: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
      },
    });
```
```javascript
import { Platform, StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
      button: {
        backgroundColor: Platform.select({
          ios: 'blue',
          android: 'green',
        }),
      },
    });
```
```javascript
import { Platform, StyleSheet } from 'react-native';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
```
```javascript
var Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();

<Component />
```
```javascript
import MyComponent from 'components/MyComponent';
//components/MyComponent.ios.js
//components/MyComponent.android.js
```
[React Native Responsive](https://www.npmjs.com/package/react-native-responsive-screen)
```javascript
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  }
});

export default Login;
```
### Helpful Links

[Xcode Install](https://github.com/pollyolly/FLUTTER-NOTES/wiki/Day2:-IOS-Platform-Setup)

### ReactNative Navigation

[ReactNative Navigation](https://wix.github.io/react-native-navigation/docs/before-you-start)

### ReactNative Apps

[ReactNative Opensource Apps](https://github.com/pollyolly/React-Native-Apps)

### React Native UI Frameworks

[Air Bnb React Native](https://airbnb.io/react-native/releases/0.41/)

[GlueStack UI](https://gluestack.io/)
