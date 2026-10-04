import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Linking, ActivityIndicator } from 'react-native';
import { theme } from '../config/theme';
import { getVideos } from '../services/content';
import type { VideoItem } from '../types';

export default function VideosScreen() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getVideos()
      .then((data) => {
        if (isMounted) {
          setVideos(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Church Videos</Text>
        {videos.map((video) => (
          <View key={video.id} style={styles.card}>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.type}>{video.type}</Text>
            <Text style={styles.date}>Published: {video.createdAt}</Text>
            <Pressable
              style={styles.button}
              onPress={() => Linking.openURL(video.videoUrl)}
            >
              <Text style={styles.buttonText}>Watch Video</Text>
            </Pressable>
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
  type: { color: theme.colors.primary, marginTop: 6, fontWeight: '700' },
  date: { color: theme.colors.muted, marginTop: 8, fontSize: 13 },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonText: { color: '#fff', fontWeight: '700' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
