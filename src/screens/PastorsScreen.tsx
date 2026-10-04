import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../config/theme';
import { demoPastors } from '../demo/seedData';

export default function PastorsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Pastors & Ministry Team</Text>
        {demoPastors.map((pastor) => (
          <View key={pastor.id} style={styles.card}>
            <Image source={{ uri: pastor.photoUrl }} style={styles.photo} />
            <Text style={styles.name}>{pastor.name}</Text>
            <Text style={styles.position}>{pastor.position}</Text>
            <Text style={styles.bio}>{pastor.bio}</Text>
            <Text style={styles.meta}>Ministry: {pastor.ministry}</Text>
            <Text style={styles.meta}>Phone: {pastor.phone}</Text>
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
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
    marginBottom: 18,
  },
  photo: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: '800', color: theme.colors.text },
  position: { color: theme.colors.primary, fontWeight: '700', marginTop: 6 },
  bio: { marginTop: 10, color: theme.colors.muted, lineHeight: 22 },
  meta: { marginTop: 10, color: theme.colors.text },
});
