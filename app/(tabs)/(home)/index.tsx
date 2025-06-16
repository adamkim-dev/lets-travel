import { FlatList, StyleSheet, View } from "react-native";

import HomeCarousel from "@/components/Carousel/HomeCarousel";
import { useRouter } from "expo-router";
import { HelloWave } from "../../../components/HelloWave";
import MovieCard from "../../../components/MovieCard";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import { movies } from "../../../constants/Movies";
import { IMovie } from "../../../models/movie.model";

export default function HomeScreen() {
  const listMovies = movies;
  const router = useRouter();

  const navigateToDetail = (movie: IMovie) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <HomeCarousel />
      <ThemedView style={styles.stepContainer}>
        <FlatList
          data={listMovies}
          renderItem={({ item }: { item: IMovie }) => (
            <MovieCard
              onViewDetailMovie={() => navigateToDetail(item)}
              movie={item}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  row: {
    justifyContent: "space-between",
  },
});
