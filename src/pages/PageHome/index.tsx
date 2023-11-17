/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getDataAPI } from "../../api/data";
import {
  Button,
  ButtonGroup,
  Grid,
} from "@mui/material";
import ItemTotal from "../../components/ItemTotal"
import Summary from "../../components/Summary"
import Chart from "../../components/Chart"

interface location {
  name: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  casesToday: number;
  [key: string]: string | number;
}
interface overview {
    date: string;
    death: number;
    treating: number;
    cases: number;
    recovered: number;
    avgCases7day: number;
    avgRecovered7day: number;
    avgDeath7day: number;
    [key: string]: string | number;
}
interface ITotal {
  total: {
    internal: object;
    world: object;
  };
  today: {
    internal: object;
    world: object;
  };
  overview: overview[];
  locations: location[];
}

function index() {
  const [total, setTotal] = useState([
    {
      key: "cases",
      value: 0,
      name: "Số ca nhiễm",
      color: "#D80032",
    },
    {
      key: "death",
      value: 0,
      name: "Số ca khỏi",
      color: "#A6FF96",
    },
    {
      key: "recovered",
      value: 0,
      name: "Số ca tử vong",
      color: "#61677A",
    },
  ]);
  const [data, setData] = useState<ITotal>({} as ITotal);
  const [isCheck, setIsCheck] = useState(true);
  const handleGetData = (): void => {
    getDataAPI((res: unknown) => {
      const apiResponse = res as {
        status: number;
        data: ITotal;
      };

      if (apiResponse.status === 200) {
        setData(apiResponse.data);
        handleTotal(apiResponse.data.total.internal);
      }
    });
  };
  const handleTotal = (obj: Record<string, any>) => {
    setTotal((prevTotal) =>
      prevTotal.map((item) => {
        const updatedValue = obj[`${item.key}`] || 0;
        return { ...item, value: updatedValue };
      })
    );
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        p={2}
      >
        <Typography
          // component={"body"}
          variant="h4"
          fontWeight={"700"}
        >
          Thông tin COVID 19
        </Typography>
      </Box>
      <Box>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            onClick={() => {
              handleTotal(data.total.internal);
              setIsCheck(!isCheck);
            }}
            sx={{ color: isCheck ? "red" : "primary" }}
          >
            Việt Nam
          </Button>
          <Button
            sx={{ color: !isCheck ? "red" : "primary" }}
            onClick={() => {
              handleTotal(data.total.world);
              setIsCheck(!isCheck);
            }}
          >
            Thế giới
          </Button>
        </ButtonGroup>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          p={2}
        >
          {total.map((e) => {
            return (
              <ItemTotal e = {e} key={e.key} />
            );
          })}
        </Grid>
      </Box>
      <Box>
        <Typography
          fontSize={20}
          fontWeight={"700"}>Tình hình dịch cả nước</Typography>
          <Grid container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          height={390}>
            <Grid item sm={6} xs={12}>
              <Summary locations={data.locations}/>
            </Grid>
            <Grid item sm={6} xs={12}
              height={"100%"}>
              <Chart chart={data.overview}/>
            </Grid>
          </Grid>
      </Box>
    </Box>
  );
}

export default index;
