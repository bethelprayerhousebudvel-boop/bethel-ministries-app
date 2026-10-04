import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../config/theme';

export default function AdminDashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Admin Dashboard</Text>

        <View style={styles.grid}>
          <MenuCard title="Manage Songs" />
          <MenuCard title="Manage Posters" />
          <MenuCard title="Manage Announcements" />
          <MenuCard title="Manage Videos" />
          <MenuCard title="Manage Pastors" />
          <MenuCard title="Church Information" />
          <MenuCard title="Prayer Contacts" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MenuCard({ title }: { title: string }) {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.cardText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 22, paddingBottom: 60 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 20 },
  grid: { gap: 12 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
  },
  cardText: { fontWeight: '700', color: theme.colors.text },
});
