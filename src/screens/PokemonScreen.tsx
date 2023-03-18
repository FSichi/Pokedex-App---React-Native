import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Tab1';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ route, navigation }: Props) => {

    const { top } = useSafeAreaInsets();

    const { simplePokemon, color } = route.params;
    const { name, id, picture } = simplePokemon;

    const { isLoading, pokemon } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>

            {/* HEADER CONTAINER */}
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}
            >
                {/* BACK BUTTON */}

                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10,
                        backgroundColor: 'white',
                        opacity: 0.6,
                        borderRadius: 10,
                        padding: 3,
                        marginTop: -3,
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="black"
                        size={35}
                    />
                </TouchableOpacity>

                {/* NOMBRE DEL POKEMON */}

                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 50,
                    }}
                >
                    {name + '\n'}#{id}
                </Text>

                {/* Pokebola Blanca */}

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                {/* Pokemon Img */}

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />

            </View>

            {/* Detalles y Loading */}
            {
                (isLoading)
                    ?
                    (
                        <View style={styles.loadingIndicator}>
                            <ActivityIndicator color={color} size={50} />
                        </View>
                    )
                    :
                    (<PokemonDetails pokemon={pokemon} color={color} />)
            }

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
