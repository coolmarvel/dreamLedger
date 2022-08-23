// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
// import IconButton from '@mui/material/IconButton'

// ** Icons Imports
// import DotsVertical from 'mdi-material-ui/DotsVertical'

const CardStatsVertical = props => {
    // ** Props
    const { title, subtitle, color, icon, stats, trend, trendNumber } = props

    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', marginBottom: 1.5, alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Avatar sx={{ boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `${color}.main` }}>
                        {icon}
                    </Avatar>
                    {/* <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                        <DotsVertical />
                    </IconButton> */}
                </Box>
                <Typography sx={{ fontWeight: 300, fontSize: '1.2rem' }} align="left">{title}</Typography>
                <Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
                    <Typography variant='h4' sx={{ fontWeight: 600, mr: 2 }}>
                        {stats}
                    </Typography>

                </Box>
                <Box>
                    <Typography
                        component='sup'
                        variant='caption'
                        sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
                        align="left"
                    >
                        {trendNumber}
                    </Typography>
                </Box>
                <Typography variant='caption'>{subtitle}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
