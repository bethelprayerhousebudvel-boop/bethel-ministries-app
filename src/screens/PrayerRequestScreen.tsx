import React, { useState } from 'react';
import { Alert, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../config/theme';

export default function PrayerRequestScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !request.trim()) {
      Alert.alert('Please fill in your name and prayer request.');
      return;
    }

    Alert.alert('Prayer request sent', 'Thank you. Your request has been submitted privately.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Prayer Request</Text>

        <Pressable style={styles.secondaryButton} onPress={() => Linking.openURL('tel:+919000000000')}>
          <Text style={styles.secondaryButtonText}>Call Church Prayer Number</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => Linking.openURL('https://wa.me/919000000000')}>
          <Text style={styles.secondaryButtonText}>Open WhatsApp</Text>
        </Pressable>

        <TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input} />
        <TextInput value={phone} onChangeText={setPhone} placeholder="Phone number (optional)" keyboardType="phone-pad" style={styles.input} />
        <TextInput value={request} onChangeText={setRequest} placeholder="Prayer request" multiline numberOfLines={8} style={[styles.input, styles.textArea]} />

        <Pressable style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryButtonText}>Submit</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 20, paddingBottom: 60 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 18 },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  primaryButtonText: { color: '#fff', fontWeight: '700' },
  secondaryButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    alignItems: 'center',
    marginBottom: 14,
  },
  secondaryButtonText: { fontWeight: '700', color: theme.colors.text },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    marginTop: 12,
  },
  textArea: {
    minHeight: 160,
    textAlignVertical: 'top',
  },
});
