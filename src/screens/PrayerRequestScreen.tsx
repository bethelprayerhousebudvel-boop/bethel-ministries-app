import React, { useState } from 'react';
import { Alert, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../config/theme';
import { submitPrayerRequest } from '../services/prayerRequests';
import { getPrayerContacts } from '../services/content';

export default function PrayerRequestScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [prayerPhone, setPrayerPhone] = useState('+91 90000 00000');
  const [submitting, setSubmitting] = useState(false);

  React.useEffect(() => {
    getPrayerContacts().then((contacts) => {
      if (contacts.length > 0) {
        setPrayerPhone(contacts[0].phone);
      }
    });
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !request.trim()) {
      Alert.alert('Validation', 'Please fill in your name and prayer request.');
      return;
    }

    try {
      setSubmitting(true);
      await submitPrayerRequest({ name, phone, request });
      Alert.alert('Success', 'Your prayer request has been submitted privately. Our prayer team will intercede for you.');
      setName('');
      setPhone('');
      setRequest('');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit prayer request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Prayer Request</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => Linking.openURL(`tel:${prayerPhone}`)}
          >
            <Text style={styles.secondaryButtonText}>📞 Call Prayer Team</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => {
              const whatsappNumber = prayerPhone.replace(/\D/g, '');
              Linking.openURL(`https://wa.me/${whatsappNumber}`);
            }}
          >
            <Text style={styles.secondaryButtonText}>💬 WhatsApp Prayer Team</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Submit Prayer Request</Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            style={styles.input}
            placeholderTextColor={theme.colors.muted}
            editable={!submitting}
          />
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone number (optional)"
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor={theme.colors.muted}
            editable={!submitting}
          />
          <TextInput
            value={request}
            onChangeText={setRequest}
            placeholder="Write your prayer request"
            multiline
            numberOfLines={8}
            style={[styles.input, styles.textArea]}
            placeholderTextColor={theme.colors.muted}
            editable={!submitting}
          />

          <Pressable
            style={[styles.primaryButton, submitting && { opacity: 0.6 }]}
            onPress={handleSubmit}
            disabled={submitting}
          >
            <Text style={styles.primaryButtonText}>
              {submitting ? 'Submitting...' : 'Submit Prayer Request'}
            </Text>
          </Pressable>

          <Text style={styles.privacyNote}>
            Your prayer request is completely private and will not be publicly shared.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 20, paddingBottom: 60 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 18 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.text, marginBottom: 12 },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  primaryButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  secondaryButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonText: { fontWeight: '700', color: theme.colors.text },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    marginTop: 10,
    color: theme.colors.text,
  },
  textArea: {
    minHeight: 160,
    textAlignVertical: 'top',
  },
  privacyNote: {
    marginTop: 14,
    color: theme.colors.muted,
    fontSize: 12,
    fontStyle: 'italic',
  },
});
