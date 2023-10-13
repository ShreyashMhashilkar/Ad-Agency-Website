import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  Grid, CardMedia, Skeleton, Checkbox, Stack, Divider } from "@mui/material";
const CreateAd = () => {

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} >
                        <Box sx={{ border: 3, margin: 10, padding: 5, borderColor: 'grey.500' }}>
                            <Link to='/text-ad'><Checkbox /></Link>
                            <Card sx={{ maxWidth: 300 }} >
                                <Skeleton variant="rectangular" width='100%' height={60} animation={false} />
                                <Skeleton animation={false} />
                                <Skeleton animation={false} />
                                <Skeleton animation={false} />
                                <Skeleton width="70%" animation={false} />
                                <Typography color="primary" align="center" component="div" sx={{ alignItems: 'center', marginTop: 2 }}>
                                    Sofa Set | Ready to ship<br />
                                    Create Member rewards program
                                </Typography>
                                <Divider />
                                <Typography color="primary" align="center" component="div" sx={{ alignItems: 'center', marginTop: 1 }}>
                                    Buy aesthetic looking sofa set for your home.
                                    We provide variety of designs
                                </Typography>
                                <Divider />
                                <CardContent>
                                    <Skeleton animation={false} />
                                    <Skeleton animation={false} />
                                    <Skeleton animation={false} />
                                    <Divider />
                                    <Typography color="primary" variant="h4" component="div" sx={{ alignItems: 'center', marginTop: 2 }} >
                                        Create Text Ad
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Box>


                        <Box sx={{ border: 3, margin: 10, padding: 5, borderColor: 'grey.500' }}>
                            <Link to='/media-ad'><Checkbox /></Link>
                            <Card sx={{ maxWidth: 300 }} >
                                <Skeleton variant="rectangular" width='100%' height={60} animation={false} />
                                <Skeleton animation={false} />
                                <Skeleton animation={false} />
                                <Skeleton width="70%" animation={false} />
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://source.unsplash.com/random"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Skeleton animation={false} />
                                    <Skeleton animation={false} />
                                    <Skeleton animation={false} />
                                    <Divider />
                                    <Typography color="secondary" variant="h4" component="div" sx={{ alignItems: 'center', marginTop: 2 }} >
                                        Create Media Ad
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Box>

                    </Stack>
                </Grid>
            </Grid>


        </>
    )
}

export default CreateAd;