import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, TableFooter } from "@mui/material";
import useSortableData from './useSortableData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const TableData = () => {

    const products = [
        { id: 1, campaigns: "Cosmetics", clicks: 712, costs: 4272, conversion: 8, revenue: 16158 },
        { id: 2, campaigns: "Serums", clicks: 3961, costs: 27331, conversion: 115, revenue: 362526 },
        { id: 3, campaigns: "Facewash", clicks: 9462, costs: 76831, conversion: 123, revenue: 266800 },
        { id: 4, campaigns: "Shampoo", clicks: 439, costs: 2151, conversion: 5, revenue: 11029 },
        { id: 5, campaigns: "Conditioners", clicks: 1680, costs: 3864, conversion: 49, revenue: 175245 },
        { id: 6, campaigns: "Facewash2", clicks: 4978, costs: 29370, conversion: 189, revenue: 623106 }
    ]
    const { items, requestSort, sortConfig } = useSortableData(products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <>
            <TableContainer component={Paper} >
                <Table  >
                    <TableHead>
                        <TableCell >AdInsights</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableHead>
                    <TableHead >
                        <TableRow>
                            <TableCell onClick={() => requestSort('campaigns')}
                                className={getClassNamesFor('campaigns')}>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Typography variant="body1">Campaigns</Typography>
                                    <FilterAltIcon />
                                </Stack></TableCell>
                            <TableCell onClick={() => requestSort('clicks')}
                                className={getClassNamesFor('clicks')}>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Typography variant="body1">Clicks</Typography>
                                    <FilterAltIcon />
                                </Stack>
                            </TableCell>
                            <TableCell onClick={() => requestSort('costs')}
                                className={getClassNamesFor('costs')}>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Typography variant="body1">Costs</Typography>
                                    <FilterAltIcon />
                                </Stack>
                            </TableCell>
                            <TableCell onClick={() => requestSort('conversion')}
                                className={getClassNamesFor('conversion')}>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Typography variant="body1">Conversion</Typography>
                                    <FilterAltIcon />
                                </Stack>
                            </TableCell>
                            <TableCell onClick={() => requestSort('revenue')}
                                className={getClassNamesFor('revenue')}>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Typography variant="body1">Revenue</Typography>
                                    <FilterAltIcon />
                                </Stack>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.campaigns}</TableCell>
                                <TableCell>{item.clicks}</TableCell>
                                <TableCell>USD {item.costs}</TableCell>
                                <TableCell>{item.conversion}</TableCell>
                                <TableCell>USD {item.revenue}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter >
                        <TableCell variant="h4">Total</TableCell>
                        <TableCell variant="h4">26,150</TableCell>
                        <TableCell variant="h4">USD 1,43,819</TableCell>
                        <TableCell variant="h4">489</TableCell>
                        <TableCell variant="h4">USD 15,73,563</TableCell>

                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableData;