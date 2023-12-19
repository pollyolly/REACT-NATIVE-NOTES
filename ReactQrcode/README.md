### Run ReactNative
```
$cd ReactQrcode/
$npx react-native start
```
### Dependencies
```
$cd ReactQrcode/
$npm i react-native-qrcode-svg react-native-svg rn-fetch-blob react-native-share
```
### Setup Permissions
ReactQrcode/android/app/src/main/AndroidManifest.xml
```vim
<manifest>
    <!-- ReactQrcode permissions -->
    <uses-permission android:name=" android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name=" android.permission.READ_EXTERNAL_STORAGE"/>
    ...
```
ReactQrcode/ios/ReactQrcode/Info.plist   
```vim
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
        <key>NSPhotoLibraryAddUsageDescription</key>
        <string>This app would like to save images to your device.</string>
        <key>NSPhotoLibraryUsageDescription</key>
        <string>This app would like to save images to your device.</string>
   
   <application
      android:requestLegacyExternalStorage="true"
   ...
```
### Troubleshooting
Unable to load contents of file list: '/Target Support Files/Pods-ReactQrcode/Pods-ReactQrcode-resources-Debug-output-files.xcfilelist
```vim
$cd ReactQrcode/ios/
$npx pod deintegrate
$npx pod update
```
