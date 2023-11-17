import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id:  string;
  label: string;
  minWidth?: number;
  align?: 'right';
  width?: string;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Tỉnh/TP', minWidth: 170, width: "70%", },
  {
    id: 'cases',
    label: 'Tổng số ca',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
    width: "10%", 
  },
  {
    id: 'casesToday',
    label: '24 giờ qua',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
    width: "10%", 
  },
  {
    id: 'death',
    label: 'Tử vong',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
    width: "10%", 
  },
];

interface locations {
  name: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  casesToday: number;
  [key: string]: string | number;
}


export default function index({ locations }: {locations: locations[]}) {

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', p:1 }}>
      <TableContainer sx={{ maxHeight: 365}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {locations?.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[`${column.id}`];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}