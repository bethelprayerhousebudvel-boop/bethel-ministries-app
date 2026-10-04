import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import { theme } from '../config/theme';
import { demoChurchInfo, demoPrayerContacts } from '../demo/seedData';

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>More</Text>

        <View style={styles.card}>
          <Text style={styles.label}>About Bethel Ministries</Text>
          <Text style={styles.text}>Bethel Ministries is a welcoming church family committed to worship, prayer, discipleship and community service.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Church address</Text>
          <Text style={styles.text}>{demoChurchInfo.address}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Service timings</Text>
          <Text style={styles.text}>Sunday: {demoChurchInfo.serviceTimings.sunday}</Text>
          <Text style={styles.text}>Prayer: {demoChurchInfo.serviceTimings.prayer}</Text>
          <Text style={styles.text}>Bible study: {demoChurchInfo.serviceTimings.bibleStudy}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Contact numbers</Text>
          {demoPrayerContacts.map((contact) => (
            <Text key={contact.id} style={styles.text}>{contact.label}: {contact.phone}</Text>
          ))}
        </View>

        <Pressable style={styles.button} onPress={() => Linking.openURL('https://wa.me/919000000000')}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => Linking.openURL('#')}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => Linking.openURL('#')}>
          <Text style={styles.buttonText}>Terms of Use</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 20, paddingBottom: 70 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 18 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 14,
  },
  label: { fontSize: 18, fontWeight: '700', color: theme.colors.text, marginBottom: 8 },
  text: { fontSize: 14, color: theme.colors.muted, lineHeight: 22 },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: '700' },
});
