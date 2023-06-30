import { Stack, Box } from '@mui/material'
import React from 'react'
import { VedioCard, ChannelCard } from './';

const Vedios = ({ vedios, direction }) => {
return (
    <Stack direction={ direction || 'row'} flexWrap='wrap' justifyContent='center' gap={3}>
        {vedios.map((item, idx) => (
                    <Box key={idx}>
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                        {item.id.videoId && <VedioCard vedio={item}/>}
                    </Box>
            ))}
    </Stack>
)
}

export default Vedios