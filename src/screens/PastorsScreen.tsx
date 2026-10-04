import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable, Linking, ActivityIndicator } from 'react-native';
import { theme } from '../config/theme';
import { getPastors } from '../services/content';
import type { Pastor } from '../types';

export default function PastorsScreen() {
  const [pastors, setPastors] = useState<Pastor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getPastors()
      .then((data) => {
        if (isMounted) {
          setPastors(data);
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

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Pastors & Ministry Team</Text>
        {pastors.map((pastor) => (
          <View key={pastor.id} style={styles.card}>
            {pastor.photoUrl && (
              <Image source={{ uri: pastor.photoUrl }} style={styles.photo} />
            )}
            <Text style={styles.name}>{pastor.name}</Text>
            <Text style={styles.position}>{pastor.position}</Text>
            <Text style={styles.bio}>{pastor.bio}</Text>
            <Text style={styles.meta}>Ministry: {pastor.ministry}</Text>
            <Text style={styles.meta}>Phone: {pastor.phone}</Text>
            <View style={styles.actions}>
              <Pressable
                style={styles.actionButton}
                onPress={() => Linking.openURL(`tel:${pastor.phone}`)}
              >
                <Text style={styles.actionButtonText}>Call</Text>
              </Pressable>
              {pastor.whatsappNumber && (
                <Pressable
                  style={styles.actionButton}
                  onPress={() => Linking.openURL(`https://wa.me/${pastor.whatsappNumber.replace(/\D/g, '')}`)}
                >
                  <Text style={styles.actionButtonText}>WhatsApp</Text>
                </Pressable>
              )}
            </View>
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
  photo: { width: 120, height: 120, borderRadius: 60, marginBottom: 14, alignSelf: 'center' },
  name: { fontSize: 22, fontWeight: '800', color: theme.colors.text, textAlign: 'center' },
  position: { color: theme.colors.primary, fontWeight: '700', marginTop: 6, textAlign: 'center' },
  bio: { marginTop: 10, color: theme.colors.muted, lineHeight: 22 },
  meta: { marginTop: 8, color: theme.colors.text, fontSize: 13 },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  actionButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionButtonText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
