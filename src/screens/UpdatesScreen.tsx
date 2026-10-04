import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../config/theme';
import { getAnnouncements } from '../services/content';
import type { Announcement } from '../types';

export default function UpdatesScreen() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    let isMounted = true;

    getAnnouncements().then((items) => {
      if (isMounted) {
        setAnnouncements(items);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Church Updates</Text>

        {announcements.map((item) => (
          <View key={item.id} style={styles.card}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            ) : null}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>Date: {item.date}</Text>
            <Text style={styles.body}>{item.description}</Text>
            {item.contactNumber ? <Text style={styles.meta}>Contact: {item.contactNumber}</Text> : null}
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
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    marginBottom: 18,
  },
  image: { width: '100%', height: 180 },
  title: { fontSize: 20, fontWeight: '700', color: theme.colors.text, padding: 14, paddingBottom: 6 },
  meta: { color: theme.colors.muted, paddingHorizontal: 14, paddingBottom: 6 },
  body: { color: theme.colors.text, lineHeight: 22, paddingHorizontal: 14, paddingBottom: 14 },
});
