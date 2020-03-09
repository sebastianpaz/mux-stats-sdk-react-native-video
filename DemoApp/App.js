/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Video from 'react-native-video';
// import muxReactNativeVideo from 'mux-react-native-video-sdk';

// const MuxVideo = muxReactNativeVideo(Video);

const App: () => React$Node = () => {
  const onBuffer = () => console.log('app onBuffer');
  const videoError = () => console.log('app videoError');
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Button title={showVideo ? 'Hide' : 'Show'} onPress={() => setShowVideo(!showVideo)} />
            { showVideo && <Text>Showing Video</Text>
              /* <MuxVideo
                style={styles.video}
                source={{
                  uri:
                    'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                }}
                controls
                muted
                onBuffer={onBuffer}
                onError={videoError}
                muxOptions={{
                  debug: true,
                  data: {
                    env_key: 'cqtqt2jfbq235huvso0djbn56',
                    player_name: 'RN Player',
                    video_id: 'My Video Id',
                    video_title: 'RN testing with pause',
                  },
                }}
              /> */
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  video: {
    width: 400,
    height: 500,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
