import { useState } from "react"
import DoughChart from "./DoughChart";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Paper, Container, Typography, Stack } from "@mui/material";

const AdInsights = () => {
    const [value, setValue] = useState('cosmetics');
    const handleChange = (event) => {
        setValue(event.target.value)

    };

    return (
        <>
            <Container component={Paper}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Typography variant="h5" component="h5">
                        AdInsights
                    </Typography>

                    <FormControl sx={{ ml: 10, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Select</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Age"
                            onChange={handleChange}
                        >

                            <MenuItem value="cosmetics">Cosmetics</MenuItem>
                            <MenuItem value="serums">Serums</MenuItem>
                            <MenuItem value="facewash">Facewash</MenuItem>
                            <MenuItem value="shampoo">Shampoo</MenuItem>
                            <MenuItem value="conditioner">Conditioner</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <DoughChart name={value} />

            </Container>
        </>
    )
}

export default AdInsights