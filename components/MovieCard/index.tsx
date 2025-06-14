import { IMovie } from "@/models/movie.model";
import { Image, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

const MovieCard = ({
  movie,
  onViewDetailMovie,
}: {
  movie: IMovie;
  onViewDetailMovie: () => void;
}) => {
  return (
    <Card style={styles.card} onPress={onViewDetailMovie}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Card.Content>
        {/* <Link
          href={{
            pathname: "/movies/[id]",
            params: { id: "bacon" },
          }}
        >
          View user details
        </Link> */}
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: "45%",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 150,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default MovieCard;
