import React from 'react';
import { View } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function add(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}

export function TestComponent() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}
    />
  );
}
