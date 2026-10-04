import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { theme } from '../config/theme';
import { getSongs } from '../services/content';
import type { Song } from '../types';

export default function SongsScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getSongs()
      .then((data) => {
        if (isMounted) {
          setSongs(data);
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

  const filtered = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Christian Songs</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search songs by title"
          style={styles.input}
          placeholderTextColor={theme.colors.muted}
        />

        {loading ? (
          <Text style={styles.meta}>Loading songs...</Text>
        ) : filtered.length === 0 ? (
          <Text style={styles.meta}>No songs found</Text>
        ) : (
          filtered.map((song) => (
            <Pressable
              key={song.id}
              style={styles.songCard}
              onPress={() => navigation.navigate('SongDetail', { song })}
            >
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.meta}>
                {song.language === 'te' ? 'Telugu' : 'English'} • {song.category}
              </Text>
              <Text style={styles.meta}>Added: {song.dateAdded}</Text>
            </Pressable>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 20, paddingBottom: 50 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 18 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    marginBottom: 18,
    color: theme.colors.text,
  },
  songCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
    marginBottom: 14,
  },
  songTitle: { fontSize: 20, fontWeight: '700', color: theme.colors.text },
  meta: { color: theme.colors.muted, marginTop: 6, fontSize: 13 },
});
