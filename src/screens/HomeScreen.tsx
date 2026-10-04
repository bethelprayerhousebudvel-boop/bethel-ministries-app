import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../config/theme';
import { demoAnnouncements, demoPosters, demoSongs, demoVideos } from '../demo/seedData';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const announcement = demoAnnouncements[0];
  const poster = demoPosters[0];
  const video = demoVideos[0];
  const song = demoSongs[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' }}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Welcome to Bethel Ministries</Text>

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('PrayerRequest')}>
          <Text style={styles.primaryButtonText}>Prayer Request</Text>
        </Pressable>

        <Section title="Latest church announcement">
          <Card>
            <Text style={styles.cardTitle}>{announcement.title}</Text>
            <Text style={styles.cardText}>{announcement.description}</Text>
          </Card>
        </Section>

        <Section title="Latest poster">
          <Card>
            <Image source={{ uri: poster.imageUrl }} style={styles.image} />
            <Text style={styles.cardTitle}>{poster.title}</Text>
          </Card>
        </Section>

        <Section title="Latest video">
          <Card>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' }} style={styles.image} />
            <Text style={styles.cardTitle}>{video.title}</Text>
          </Card>
        </Section>

        <Section title="Featured song">
          <Card>
            <Text style={styles.cardTitle}>{song.title}</Text>
            <Text style={styles.cardText}>{song.language === 'te' ? 'Telugu' : 'English'}</Text>
          </Card>
        </Section>

        <Section title="Church service information">
          <Card>
            <Text style={styles.cardText}>Sunday: 9:00 AM, 11:00 AM, 6:00 PM</Text>
            <Text style={styles.cardText}>Wednesday Bible Study: 7:00 PM</Text>
            <Text style={styles.cardText}>Friday Prayer Meeting: 7:00 PM</Text>
          </Card>
        </Section>

        <View style={styles.navGrid}>
          <NavButton label="Songs" onPress={() => navigation.navigate('Songs')} />
          <NavButton label="Posters" onPress={() => navigation.navigate('Posters')} />
          <NavButton label="Videos" onPress={() => navigation.navigate('Videos')} />
          <NavButton label="Pastors" onPress={() => navigation.navigate('Pastors')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

function NavButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <Text style={styles.navButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
  headerRow: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 180,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 18,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: theme.colors.muted,
    lineHeight: 22,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  navGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 22,
    justifyContent: 'space-between',
    gap: 10,
  },
  navButton: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  navButtonText: {
    color: theme.colors.text,
    fontWeight: '700',
  },
});
