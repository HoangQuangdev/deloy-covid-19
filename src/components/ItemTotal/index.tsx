import { Card, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";

interface item  {
  key: string,
  value: number,
  name: string,
  color: string,
}

function index({e}: {e : item}) {
  return (
    <Grid item sm={4} xs={12}>
      <Card
        sx={{
          borderLeftWidth: 4,
          borderLeftColor: `${e.color}`,
          borderLeftStyle: "inset",
        }}
      >
        <CardHeader
          title={
            <Typography
              textAlign={"center"}
              fontSize={18}
              textTransform={"uppercase"}
              fontWeight={"700"}
            >
              {e.name}
            </Typography>
          }
        />
        <Divider sx={{ m: 2, mt: 0 }} />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={25} fontWeight={"700"} color={e.color}>
            {e.value.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default index;
