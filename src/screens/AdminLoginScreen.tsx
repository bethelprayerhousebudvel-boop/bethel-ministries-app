import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { theme } from '../config/theme';

export default function AdminLoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const adminRef = doc(db, 'admins', result.user.uid);
      const adminSnap = await getDoc(adminRef);

      if (!adminSnap.exists()) {
        Alert.alert('Access denied');
        return;
      }

      navigation.replace('AdminDashboard');
    } catch (error) {
      Alert.alert('Login failed', 'Check your admin credentials.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.header}>Admin Login</Text>
        <TextInput placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />

        <Pressable style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  inner: { padding: 24, justifyContent: 'center', flex: 1 },
  header: { fontSize: 30, fontWeight: '800', color: theme.colors.text, marginBottom: 18 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    marginTop: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: '700' },
});
