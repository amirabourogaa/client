import React, { Component } from 'react'
import { Dimensions,Button,Text, View, ImageBackground, StyleSheet } from 'react-native'
import bgImg from '../images/bgSignIn.jpg';
import AppLoading from 'expo-app-loading';
import { Video } from 'expo-av'
import * as FileSystem from 'expo-file-system';

const { width, height } = Dimensions.get('window');


export default function Vid() {
    const [videoUrl, setVideoUrl] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')
    const [buttonTitle, setButtonTitle] = useState('Download')
    const [progressValue, setProgressValue] = useState(0)
    const [totalSize, setTotalSize] = useState(0)

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    // async function getVideoUrl() {
    //   let tmp = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'small.mp4');
    //   let url = tmp.exists ? FileSystem.documentDirectory + 'small.mp4' : videoUrl
    //   return url
    // }

    // getVideoUrl().then((url) => {
    //   setVideoUrl(url)
    // })

    async function downloadVideo() {
        setButtonTitle('Downloading')

        const callback = downloadProgress => {
        setTotalSize(formatBytes(downloadProgress.totalBytesExpectedToWrite))

        var progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        progress = progress.toFixed(2) * 100
        setProgressValue(progress.toFixed(0))
        };

        const downloadResumable = FileSystem.createDownloadResumable(
        videoUrl,
        FileSystem.documentDirectory + 'small.mp4',
        {},
        callback
        );

        try {
        const { uri } = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);
        setButtonTitle('Downloaded')
        } catch (e) {
        console.error(e);
        }

    }

    return (
    
        <View style={styles.container}>
        
        <Video
            source={{ uri: videoUrl }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            isLooping={false}
            useNativeControls
            style={styles.video}
        />

        <Button title={buttonTitle} onPress={downloadVideo}></Button>
        <Text style = {{fontSize:20}}> Size: {totalSize} </Text>
        <Text>Progress: {progressValue} %</Text>
        </View>
    
    );
    }

    const styles = StyleSheet.create({
    video: {
        width: width,
        height: height / 3
    },

    container: {
        flex: 1,
        backgroundColor: '#FF7F50',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });