import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { theme } from '../config/theme';
import { demoSongs } from '../demo/seedData';

export default function SongsScreen() {
  const [search, setSearch] = React.useState('');
  const filtered = demoSongs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Songs</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search songs by title"
          style={styles.input}
        />

        {filtered.map((song) => (
          <Pressable key={song.id} style={styles.songCard}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.meta}>{song.language === 'te' ? 'Telugu' : 'English'} • {song.category}</Text>
            <Text style={styles.meta}>Date added: {song.dateAdded}</Text>
          </Pressable>
        ))}
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
  meta: { color: theme.colors.muted, marginTop: 6 },
});
