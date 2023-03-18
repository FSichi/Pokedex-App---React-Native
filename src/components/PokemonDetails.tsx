import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
    color: string;
}

export const PokemonDetails = ({ pokemon, color }: Props) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >

            {/* TYPES y PESO*/}
            <View
                style={{
                    ...styles.container,
                    marginTop: 380,
                }}
            >
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                key={type.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    color: 'black',
                                    opacity: 0.8,
                                }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>

                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>

            </View>

            {/* SPRITES */}

            <View style={{ ...styles.container }}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                // style={{}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >

                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />

            </ScrollView>


            {/* HABILIDADES */}
            <View
                style={styles.container}
            >
                <Text style={styles.title}>Base Skills</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* MOVIMIENTOS */}
            <View
                style={styles.container}
            >
                <Text style={styles.title}>Moves</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* STATS */}
            <View
                style={styles.container}
            >
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map(({ stat, base_stat }, i) => (
                            <View
                                style={{ flexDirection: 'row', marginVertical: 3 }}
                                key={stat.name + i}
                            >
                                <Text
                                    key={stat.name}
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150,
                                    }}
                                >
                                    {stat.name}
                                </Text>
                                <Text
                                    key={base_stat}
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                        backgroundColor: color,
                                        borderRadius: 5,
                                        padding: 1,
                                    }}
                                >
                                    {base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>


                {/* SPRITE FINAL */}

                <View
                    style={{
                        marginBottom: 50,
                        alignItems: 'center',
                    }}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>

            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black',
    },
    regularText: {
        fontSize: 19,
        color: 'black',
        opacity: 0.8,
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
});
