import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // nuevo

const API_KEY = 'd5a38ae3a14ab482dd73a41a62c544ca';

export default function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('exact');

    const searchMovies = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setMovies([]);

        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=false`;
            const response = await fetch(url);
            const data = await response.json();

            const results = data.results;

            const filtered =
                searchType === 'exact'
                    ? results.filter(movie =>
                        movie.title.toLowerCase() === query.toLowerCase()
                    )
                    : results;

            setMovies(filtered);
        } catch (error) {
            console.error('Error al buscar:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            {item.poster_path ? (
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                    style={styles.image}
                />
            ) : (
                <View style={[styles.image, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text>Sin imagen</Text>
                </View>
            )}
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>Año: {item.release_date?.split('-')[0] || 'N/A'}</Text>
                <Text style={styles.text}>Rating: {item.vote_average || 'N/A'}</Text>
            </View>
        </View>
    );

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/9f/20/d5/9f20d56f276451e690d2130ffa9fa614.jpg' }}
            style={styles.background}
            
        >
            <StatusBar barStyle="light-content" backgroundColor="#00000088" />
            <View style={styles.overlay}>
                <Text style={styles.header}>🎬 Buscador de Películas</Text>

                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Ingresa nombre de película"
                        placeholderTextColor="#bbb"
                        style={styles.input}
                        value={query}
                        onChangeText={setQuery}
                        onSubmitEditing={searchMovies}
                    />
                    <TouchableOpacity onPress={searchMovies} style={styles.lupa}>
                        <Text style={{ fontSize: 22, color: '#fff' }}>🔍</Text>
                    </TouchableOpacity>
                </View>

                <Picker
                    selectedValue={searchType}
                    onValueChange={(itemValue) => setSearchType(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#fff"
                >
                    <Picker.Item label="Búsqueda Exacta" value="exact" />
                    <Picker.Item label="Búsqueda Aproximada" value="fuzzy" />
                </Picker>

                {loading ? (
                    <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
                ) : movies.length === 0 ? (
                    <View style={styles.noResultsContainer}>
                        <Text style={styles.noResultsEmoji}>😞</Text>
                        <Text style={styles.noResultsText}>No se encontraron resultados</Text>
                        <Text style={styles.noResultsSubtext}>Intenta con otro término de búsqueda</Text>
                    </View>
                ) : (
                    <FlatList
                        data={movies}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        style={{ marginTop: 10 }}
                    />
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: '#000000a0',
        padding: 16,
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        color: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // gris claro
        borderRadius: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        shadowColor: '#0000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    input: {
        flex: 1,
        color: '#000', // texto negro
        paddingVertical: 12,
        fontSize: 16,
    },
    lupa: {

        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    picker: {
        backgroundColor: '#f0f0f0', // mismo gris claro
        color: '#000', // texto negro
        borderRadius: 12,
        marginBottom: 16,
        fontSize: 16,
        paddingHorizontal: 8,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffffdd',
        marginBottom: 12,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: 100,
        height: 150,
        backgroundColor: '#e1e1e1',
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    text: {
        color: '#333',
    },
    noResultsContainer: {
        marginTop: 40,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ff6b6b99',
        borderRadius: 12,
        marginHorizontal: 20,
    },
    noResultsEmoji: {
        fontSize: 50,
        marginBottom: 10,
    },
    noResultsText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    noResultsSubtext: {
        color: '#fff',
        fontSize: 14,
    },
});
