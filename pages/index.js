import { Box, Typography } from "@mui/material";
import { fetchData } from '../utils/fetchData';
import MovieCard from '../components/MovieCard';

import CustomButton from "../components/CustomButton";
import { useRouter } from "next/router";

export default function Home({ trending }) {
  const router = useRouter();
  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Trending Movies
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {trending.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Box>
      <CustomButton
        sx={{ mt: 4 }}
        onClick={() => router.push("/genres")}
      >
        Browse Genres
      </CustomButton>
    </Box>
  );
}

export async function getStaticProps() {
  const { movies } = await fetchData();
  const trending = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  return { props: { trending }, revalidate: 60 };
}
