import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { fetchData } from '../../utils/fetchData';

export default function Genres({ genres }) {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Genres
      </Typography>
      {genres.map((g) => (
        <Box key={g.id}>
          <Link href={`/genres/${g.id}`} passHref legacyBehavior>
            <MuiLink underline="hover">{g.name}</MuiLink>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export async function getServerSideProps() {
  const { genres } = await fetchData();
  return { props: { genres } };
}
