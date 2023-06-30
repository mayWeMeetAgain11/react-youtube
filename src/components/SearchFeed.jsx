import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Vedios, Loader } from "./";

const SearchFeed = () => {
    const [vedios, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm]);

    if(!vedios) return <Loader />;

return (
    <Box p={2} minHeight="95vh">
        <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
            Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Box display="flex">
            {/* <Box sx={{ mr: { sm: '100px' } }}/> */}
            {<Vedios vedios={vedios} />}
        </Box>
    </Box>
);
};

export default SearchFeed;