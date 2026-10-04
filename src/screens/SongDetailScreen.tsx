import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../config/theme';
import { demoSongs } from '../demo/seedData';

export default function SongDetailScreen({ route }: any) {
  const song = route?.params?.song ?? demoSongs[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.meta}>{song.language === 'te' ? 'Telugu' : 'English'} • {song.category}</Text>
        <Text style={styles.meta}>Date added: {song.dateAdded}</Text>

        <View style={styles.lyricsBox}>
          <Text style={styles.lyrics}>{song.lyrics}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 22 },
  title: { fontSize: 30, fontWeight: '800', color: theme.colors.text },
  meta: { marginTop: 8, color: theme.colors.muted },
  lyricsBox: {
    marginTop: 20,
    backgroundColor: '#f8fbff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
  },
  lyrics: {
    color: theme.colors.text,
    fontSize: 18,
    lineHeight: 30,
  },
});
