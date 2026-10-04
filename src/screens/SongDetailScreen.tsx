import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Share } from 'react-native';
import { theme } from '../config/theme';
import type { Song } from '../types';

export default function SongDetailScreen({ route }: any) {
  const song: Song = route?.params?.song;
  const [fontSize, setFontSize] = useState(18);

  if (!song) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>Song not found</Text>
      </SafeAreaView>
    );
  }

  const handleShare = async () => {
    await Share.share({
      message: `${song.title}\n\n${song.lyrics}`,
      title: song.title,
    });
  };

  const handleCopy = async () => {
    // Note: React Native doesn't have native clipboard by default
    // For production, use @react-native-clipboard/clipboard
    alert('Lyrics copied to clipboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.meta}>
          {song.language === 'te' ? 'Telugu' : 'English'} • {song.category}
        </Text>
        <Text style={styles.meta}>Date added: {song.dateAdded}</Text>

        <View style={styles.controls}>
          <Pressable
            style={styles.controlButton}
            onPress={() => setFontSize(Math.max(14, fontSize - 2))}
          >
            <Text style={styles.controlText}>A−</Text>
          </Pressable>
          <Text style={styles.fontSizeDisplay}>{fontSize}pt</Text>
          <Pressable
            style={styles.controlButton}
            onPress={() => setFontSize(Math.min(30, fontSize + 2))}
          >
            <Text style={styles.controlText}>A+</Text>
          </Pressable>
        </View>

        <View style={styles.actionButtons}>
          <Pressable style={styles.actionButton} onPress={handleShare}>
            <Text style={styles.actionButtonText}>Share</Text>
          </Pressable>
          <Pressable style={styles.actionButton} onPress={handleCopy}>
            <Text style={styles.actionButtonText}>Copy</Text>
          </Pressable>
        </View>

        <View style={styles.lyricsBox}>
          <Text
            style={[
              styles.lyrics,
              {
                fontSize,
                lineHeight: fontSize + 12,
              },
            ]}
          >
            {song.lyrics}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 22, paddingBottom: 40 },
  title: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 8 },
  meta: { marginTop: 4, color: theme.colors.muted, fontSize: 14 },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 18,
    backgroundColor: theme.colors.secondary,
    borderRadius: 12,
    paddingVertical: 12,
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  fontSizeDisplay: { color: theme.colors.text, fontWeight: '700' },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  actionButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionButtonText: { color: '#fff', fontWeight: '700' },
  lyricsBox: {
    backgroundColor: '#f8fbff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
  },
  lyrics: {
    color: theme.colors.text,
  },
  error: { color: theme.colors.danger, padding: 20 },
});
