import { useState } from "react";
import { TextField, Button, Stack, Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
const MediaAdForm = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        heading1: "",
        heading2: "",
        landscape_marketing_image: "",
        portrait_marketing_image: "",
        square_marketing_image: "",
        video_url: "",
        business_name: "",
        website_url: "",
        description: "",
        button_label: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails({
            ...details, [name]: value
        });
        console.log(details)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Submitted',

            icon: 'success'
        });
        setTimeout(navigateTO, 600)



    };



    const navigateTO = () => {
        navigate('/create-ad')
    }



    return (
        <>
            <Box sx={{ border: 1, margin: 2, padding: 2, borderColor: 'grey.500' }}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Typography className="heading-color" variant="h4" fontWeight='bold'>Create Text & Media</Typography>
                    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <TextField
                            label="Heading1"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            sx={{ mb: 3 }}
                            fullWidth
                            id="heading1"
                            name="heading1"
                        />

                        <TextField
                            label="Heading2"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            id="heading2"
                            name="heading2"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                    </Stack>

                    <TextField
                        label="Description"
                        onChange={handleChange}
                        required
                        variant="outlined"
                        color="secondary"
                        type="text"
                        id="description"
                        name="description"
                        row={4}
                        fullWidth
                        sx={{ mb: 3 }}
                    />

                    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: 2 }}>

                        <TextField
                            label="Landscape Marketing Image"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            sx={{ mb: 3 }}
                            fullWidth
                            id="landscape_marketing_image"
                            name="landscape_marketing_image"
                        />
                        <TextField
                            label="Portrait Marketing Image"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            id="portrait_marketing_image"
                            name="portrait_marketing_image"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Square Marketing Image"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            id="square_marketing_image"
                            name="square_marketing_image"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                    </Stack>

                    <TextField
                        label="Video URL"
                        onChange={handleChange}
                        required
                        variant="outlined"
                        color="secondary"
                        type="text"
                        id="video_url"
                        name="video_url"
                        fullWidth
                        sx={{ mb: 3 }}
                    />

                    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: 2 }}>

                        <TextField
                            label="Business Name"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            sx={{ mb: 3 }}
                            fullWidth
                            id="business_name"
                            name="business_name"
                        />
                        <TextField
                            label="Button Label"
                            onChange={handleChange}
                            required
                            variant="outlined"
                            color="secondary"
                            type="text"
                            id="button_label"
                            name="button_label"



                            fullWidth
                            sx={{ mb: 3 }}
                        />
                    </Stack>

                    <TextField
                        minRows='2'
                        label="Website URL"
                        onChange={handleChange}
                        required
                        variant="outlined"
                        color="secondary"
                        type="text"
                        sx={{ mb: 3 }}
                        fullWidth
                        id="website_url"
                        name="website_url"
                    />

                    <Box
                        m={1}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Button variant="outlined" sx={{ height: 40 }} type="submit" onClick={navigateTO}>
                            BACK
                        </Button>
                        <Button variant="contained" color="primary" sx={{ height: 40, marginLeft: 2 }} type="submit">
                            SUBMIT
                        </Button>
                    </Box>
                </form>
            </Box>

        </>
    )
}

export default MediaAdForm