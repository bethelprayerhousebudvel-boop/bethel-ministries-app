import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../config/theme';
import { demoVideos } from '../demo/seedData';

export default function VideosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Videos</Text>
        {demoVideos.map((video) => (
          <View key={video.id} style={styles.card}>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.type}>{video.type}</Text>
            <Text style={styles.link}>{video.videoUrl}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 20, paddingBottom: 60 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 18 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 14,
  },
  title: { fontSize: 20, fontWeight: '700', color: theme.colors.text },
  type: { color: theme.colors.muted, marginTop: 6 },
  link: { color: theme.colors.primary, marginTop: 8 },
});
