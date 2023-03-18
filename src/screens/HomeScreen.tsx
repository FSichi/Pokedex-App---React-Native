import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatListHomeScreen } from '../components/FlatList';

export const HomeScreen = () => {

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View style={{ alignItems: 'center' }} >
                <FlatListHomeScreen
                    pokemonList={simplePokemonList}
                    loadPokemons={loadPokemons}
                />
            </View>
        </>
    );
};
