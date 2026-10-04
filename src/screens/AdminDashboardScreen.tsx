import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { theme } from '../config/theme';

export default function AdminDashboardScreen({ navigation }: any) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      navigation.replace('AdminLogin');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Admin Dashboard</Text>
          <Pressable style={styles.logoutButton} onPress={handleLogout} disabled={loading}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Content Management</Text>
        <View style={styles.grid}>
          <MenuCard title="📖 Manage Songs" onPress={() => {}} />
          <MenuCard title="🎨 Manage Posters" onPress={() => {}} />
          <MenuCard title="📢 Manage Announcements" onPress={() => {}} />
          <MenuCard title="🎬 Manage Videos" onPress={() => {}} />
          <MenuCard title="👨‍💼 Manage Pastors" onPress={() => {}} />
          <MenuCard title="📞 Prayer Contacts" onPress={() => {}} />
        </View>

        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.grid}>
          <MenuCard title="⛪ Church Information" onPress={() => {}} />
          <MenuCard title="🔔 Push Notifications" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MenuCard({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 22, paddingBottom: 60 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: { fontSize: 32, fontWeight: '800', color: theme.colors.text },
  logoutButton: {
    backgroundColor: theme.colors.danger,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logoutText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 12,
    marginTop: 18,
  },
  grid: { gap: 12 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
  },
  cardText: { fontWeight: '700', color: theme.colors.text, fontSize: 16 },
});
