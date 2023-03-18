import React from 'react';
import { Image, Text, View } from 'react-native';

export const PokemonNotFound = () => {
    return (
        <View
            style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../assets/poke-warning.png')}
                style={{
                    opacity: 0.7,

                    width: 240,
                    height: 210,
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 10, color: 'black', opacity: 0.7 }}>
                Pokemon no encontrado
            </Text>
        </View>
    );
};
