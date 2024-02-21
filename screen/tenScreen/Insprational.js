
import React, { useState, useRef } from 'react';
import { Text, View, FlatList, TouchableHighlight, StyleSheet, TouchableOpacity, PermissionsAndroid, Alert, CameraRoll } from 'react-native';
import {inspirationalVerses } from './In';
import { Ionicons } from '@expo/vector-icons';
import { Clipboard, Share } from 'react-native';

import ViewShot from "react-native-view-shot";

const Insprational = () => {
  const [verseColors, setVerseColors] = useState({});
  const verses = inspirationalVerses ();
  const viewShotRef = useRef(null);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const handleVersePress = (index) => {
    const updatedColors = { ...verseColors };
    updatedColors[index] = generateRandomColor();
    setVerseColors(updatedColors);
  };

  const copyVerse = (verse) => {
    Clipboard.setString(verse);
    alert('Copied');
  };

  const shareVerse = async (verse) => {
    try {
      const result = await Share.share({
        message: verse,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Share was successful
        } else {
          // Share was dismissed
        }
      } else if (result.action === Share.dismissedAction) {
        // Share was dismissed
      }
    } catch (error) {
      console.error('Error sharing verse:', error.message);
    }
  };

  const saveVerseAsImage = async (verse) => {
    try {
      const uri = await captureVerseAsImage(verse);
      await saveImageToCameraRoll(uri); // Call saveImageToCameraRoll function
      alert('Verse saved as photo in device gallery!');
    } catch (error) {
      console.error('Error saving verse as photo:', error);
      alert('Failed to save photo. Please try again.');
    }
  };

  const captureVerseAsImage = async (verse) => {
    return new Promise((resolve, reject) => {
      try {
        viewShotRef.current.capture().then(uri => {
          resolve(uri);
        }).catch(error => {
          reject(error);
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const saveImageToCameraRoll = async (uri) => {
  
    console.log('Saving image to camera roll:', uri);
    // For example:
    // await CameraRoll.save(uri, { type: 'photo' });
  };

  const renderItem = ({ item, index }) => (
    <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 1 }}>
      <View style={[styles.itemContainer, { backgroundColor: verseColors[index] ||  '#33C5BF' }]}>
        <TouchableHighlight
          onPress={() => handleVersePress(index)}
          underlayColor="transparent"
          style={styles.touchableHighlight}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableHighlight>
        <View style={styles.iconWrapper}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => copyVerse(item)}>
              <Ionicons name="copy-outline" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => shareVerse(item)}>
              <Ionicons name="share-social-outline" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveVerseAsImage(item)}>
              <Ionicons name="download-outline" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ViewShot>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={verses}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 10,
  },
  itemContainer: {
    borderRadius: 10,
    marginBottom: 30,
    padding: 30,
  },
  touchableHighlight: {
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
  },
});




export default Insprational;

