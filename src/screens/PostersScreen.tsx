import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import { theme } from '../config/theme';
import { demoPosters } from '../demo/seedData';

export default function PostersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Posters</Text>
        {demoPosters.map((poster) => (
          <View key={poster.id} style={styles.posterCard}>
            <Image source={{ uri: poster.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{poster.title}</Text>
            <Text style={styles.type}>{poster.type}</Text>
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
  posterCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 18,
  },
  image: { width: '100%', height: 220 },
  title: { fontSize: 20, fontWeight: '700', color: theme.colors.text, padding: 14, paddingBottom: 6 },
  type: { paddingHorizontal: 14, paddingBottom: 14, color: theme.colors.muted },
});
