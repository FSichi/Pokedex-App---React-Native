import React from 'react';
import { ActivityIndicator, FlatList, Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonCard } from './PokemonCard';
import { styles } from '../theme/appTheme';
import { View } from 'react-native';

interface PropsFlatListHomeScreen {
    pokemonList: SimplePokemon[];
    loadPokemons: () => void;
}

interface PropsFlatListSearchScreen {
    pokemonFiltered: SimplePokemon[];
    term: string;
}

export const FlatListHomeScreen = ({ pokemonList, loadPokemons }: PropsFlatListHomeScreen) => {

    const { top } = useSafeAreaInsets();

    return (
        <FlatList
            data={pokemonList}
            keyExtractor={(pokemon) => pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}

            ListHeaderComponent={(
                <Text
                    style={{
                        ...styles.title,
                        // ...styles.globalMargin,
                        top: top + 22,
                        marginBottom: top + 40,
                        paddingBottom: 10,
                        color: 'black',
                        opacity: 0.8,
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        borderRadius: 10,
                        textAlign: 'center',
                    }}
                >Pokedex</Text>
            )}

            renderItem={({ item }) => <PokemonCard pokemon={item} />}

            //Infinite Scroll
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}

            ListFooterComponent={(
                <ActivityIndicator
                    style={{ height: 100 }}
                    size={20}
                    color="grey"
                />
            )}

        />
    );
};

export const FlatListSearchScreen = ({ pokemonFiltered, term }: PropsFlatListSearchScreen) => {

    const { top } = useSafeAreaInsets();

    return (
        <FlatList
            data={pokemonFiltered}
            keyExtractor={(pokemon) => pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}

            ListHeaderComponent={(
                <Text
                    style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        paddingBottom: 10,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                        color: 'black',
                        opacity: 0.7,
                    }}
                >{term}</Text>
            )}

            ListFooterComponent={(
                <View
                    style={{ marginBottom: 55 }}
                />
            )}

            renderItem={({ item }) => <PokemonCard pokemon={item} />}
        />
    );
};
