import { Box, Typography  } from "@mui/material";
import Link from "next/link";
import { fetchData } from '../../utils/fetchData';

export default function Genres({ genres }) {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Genres
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2,flexDirection:"column" }}>

      {genres.map((g) => (
        <Box sx={{background:"#81E7AF",color:"03A791",padding:"8px"}} key={g.id}>
         <Link
  href={`/genres/${g.id}`}
  style={{
    textDecoration: "none",  
    color: "inherit",   
    fontWeight:"bold"    
  }}
>
  {g.name}
</Link>
        </Box>
      ))}
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const { genres } = await fetchData();
  return { props: { genres } };
}
