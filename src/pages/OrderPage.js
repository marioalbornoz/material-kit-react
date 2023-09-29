import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// @mui
import {
    Grid,
  Card,
  Table,
  Stack,
  Paper,
  Button,
  Popover,
  Checkbox,
  MenuItem,
  Container,
  Typography,
  IconButton,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import { useEffect, useState } from 'react';
import BasicTable from '../components/table/BasicTable';
import Modal from '../components/modal';
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
import { DemoScatter } from '../components/colorchartmap/DemoScatter';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'cage', label: 'LPN', alignRight: false },
  { id: 'warehouse', label: 'WAVE', alignRight: false },
  { id: 'hub', label: 'QTY', alignRight: false },
  { id: 'store', label: 'STORE', alignRight: false },
  { id: 'status', label: 'VOL CM3', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  console.log(stabilizedThis);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    const expresion = new RegExp(`${query}.*`, "i");
    console.log("query", expresion);
    console.log("lista", array);
  const listado = filter(array, (_jaula) =>  expresion.test(_jaula.jaula) );
  console.log(listado);
    return listado
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function OrdersPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('jaula');

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(100);

  const [cages, setCages] = useState([]);

  const [rows, setRows] = useState({});


  const [store, setStore] = useState([]);

  const [sku, setSku] = useState([])
const [data, setData] = useState([]);
  function groupby(xs, key) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  useEffect(() => {
    
    fetch('https://sbs-hulkapi.dda.sodimac.cl:3092/ordersPicker/getList')
      .then((response) => response.json())
      .then((response) => {
        setCages(response);
        const listaskubystore = [];
        const groupByStorage = response.map( res => res.STORE_NUM);
        const dataArr = new Set(groupByStorage);
        const result = [...dataArr]
          setStore(result)
        const groupbyStore = groupby(response, 'STORE_NUM');
        Object.entries(groupbyStore).forEach(([key, value]) =>{
          // console.log(value);
          const listaSku = value.map(el => el.PRODUCT_SKU);
          // console.log("listaSku: ", listaSku);
          listaskubystore.push({store: key, sku:listaSku})
        });
        // console.log("agrupado es", listaskubystore);
        setSku(listaskubystore);
        // console.log("lista de ordenes",listasku);
      })
      .catch((err) => console.error(err));
  }, []);


  useEffect(()=>{
    console.log("enviando a api nueva..",sku);
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    if(sku.length>0){
      fetch('http://localhost:3092/ordersPicker/getZone', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(sku),
      redirect: 'follow'
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
    }
  }, [sku])

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleclickModal = (destino) => {
   
    setRows(destino);
  }
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = cages.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cages.length) : 0;

  const filteredUsers = applySortFilter(cages, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Cages | Planoper </title>
      </Helmet>

     

      <Container>

     
          

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Administración ordenes 
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
          nueva jaula
          </Button>
        </Stack>
      
        <DemoScatter  data={data}/>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} type="cage" />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={cages.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { NEW_ORDER_NUMBER, STORE_NUM, status, WAVE_NUMBER,PRODUCTQUANTITY, UNIT_VOLUME } = row;
                    const selectedUser = selected.indexOf(NEW_ORDER_NUMBER) !== -1;
                    // console.log(selectedUser);
                    return (
                      <TableRow hover key={NEW_ORDER_NUMBER} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, NEW_ORDER_NUMBER)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/* <Avatar alt={bodega} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {NEW_ORDER_NUMBER}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{WAVE_NUMBER}</TableCell>


                        <TableCell align="left">{PRODUCTQUANTITY}</TableCell>

                        <TableCell align="left">{STORE_NUM}</TableCell>

                        <TableCell align="left">
                          <Label color={(status === true && 'error') || 'success'}>{UNIT_VOLUME} cm3</Label>
                        </TableCell>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={(e)=> {
                            handleclickModal(row);
                            handleOpenMenu(e);
                          } }>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={cages.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Modal option={rows} setLista={setCages}  lista={cages} tipo="cage" />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
        

    </>
  );
}
