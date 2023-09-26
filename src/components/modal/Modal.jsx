import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {MenuItem} from '@mui/material';
import Iconify from "../iconify/Iconify";
import FormsControl from '../forms/FormsControl';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #fff',
  borderradius:'20px',
  boxShadow: 24,
  p: 4,
};

Modals.propTypes = {
  option: PropTypes.object,
 
};


export default function Modals({option, setEstado, setStore, store}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Editar</Button> */}
      <MenuItem onClick={handleOpen}>
          <Iconify  icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h3" >
            Editar estado {option.destino}
          </Typography>
          <FormsControl option={option}  setStore={setStore} store={store} />
        </Box>
      </Modal>
    </div>
  );
}