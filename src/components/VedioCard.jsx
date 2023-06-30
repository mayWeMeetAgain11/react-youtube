import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VedioCard = ({ vedio: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: {xs: '100%', sm: '270px',md: '300px',  }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { md: 300, sd: '100%' }, height: 180 }}/>
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color="#fff" >
                        { snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/video/${snippet?.channelId}`: demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color="gray" >
                        { snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VedioCard