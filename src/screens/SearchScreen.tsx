/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonNotFound } from '../components/PokemonNotFound';
import { FlatListSearchScreen } from '../components/FlatList';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [term, setTerm] = useState('');
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {

        if (term.length === 0) {
            return setPokemonFiltered([]);
        }

        if (isNaN((Number(term)))) {
            setPokemonFiltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase())
                )
            );
        } else {
            const pokemonById = simplePokemonList.find((poke) => poke.id === term);
            setPokemonFiltered((pokemonById) ? [pokemonById] : []);
        }

    }, [term]);

    if (isFetching) { return <Loading />; }

    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 20,
            }}
        >
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 20,
                }}
            />

            {
                term.length === 0 &&
                <Text style={stylesSearch.searchText}>
                    Busca un Pokemon por Nombre o su numero
                </Text>
            }

            {
                (term && pokemonFiltered.length === 0)
                    ? <PokemonNotFound />
                    : <FlatListSearchScreen pokemonFiltered={pokemonFiltered} term={term} />
            }

        </View>
    );
};

const stylesSearch = StyleSheet.create({
    searchText: {
        fontSize: 20,
        marginTop: 120,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        opacity: 0.7,
    },
});
