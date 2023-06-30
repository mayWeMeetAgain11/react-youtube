import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Vedios, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [vedios, setVedios] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVedios(data.items))
    }, [selectedCategory]);

    if(!vedios) return <Loader />;

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>

            <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>

                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    copyrigth 2023 Haidara belal
                </Typography>

            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#f31503' }}>Video</span>
                </Typography>

                {vedios?.length > 0 && <Vedios vedios={vedios}/>}

            </Box>

        </Stack>
    )
}

export default Feed