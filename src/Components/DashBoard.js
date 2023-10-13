import AdInsights from "./AdInsights";
import Grid from '@mui/material/Grid';
import TableData from "./TableData";
const DashBoard = () => {
  return (
    <>
      <Grid container spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '70vh' }}>
        <Grid item xs={12} xl={6} l={6} md={6} alignItems="center" justify="center">
          <TableData />
        </Grid>
        <Grid item xs={12} xl={6} l={6} md={6} alignItems="center" justify="center">
          <AdInsights />
        </Grid>
      </Grid>
    </>

  )
}

export default DashBoard;