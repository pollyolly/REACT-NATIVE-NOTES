Initialize new React Native Project
```
npx react-native init AwesomeProject --version X.XX.X
```
Running React Native
```
npx react-native run-android
```
```
npx react-native start
```
Running and reset cache
```
npx react-native start --reset-cache
```
React Native Auto Linking
```
npx react-native link
```
Fix: Error type 3 Error: Activity class {} does not exist
*uninstall hidden app
```
adb uninstall com.upcurrents
```
Checking Info 
```
npx react-native info
```
Generate debug apk manually
```
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
```
Note: Create asset folder if not exists. /android/app/src/main/assets

Build the generated apk
```
$ cd android
#Create debug build:
$ ./gradlew assembleDebug
#Create release build:
$ ./gradlew assembleRelease #Generated `apk` will be located at `android/app/build/outputs/apk`
$ npx react-native run-android 
```
