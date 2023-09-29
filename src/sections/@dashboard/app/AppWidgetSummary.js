// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BasicTable from '../../../components/table/BasicTable';
// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  lista: PropTypes.array.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, lista, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
      <List sx={{ width: '80%', maxWidth: 360, marginLeft: 3 }}>
        {lista
          ? lista.map((value) => (
              <ListItem
                key={value}
                disableGutters
                // secondaryAction={
                //   <IconButton aria-label="comment">
                //     <CommentIcon />
                //   </IconButton>
                // }
              >
                <ListItemText secondary={`Store ${value}`} />
              </ListItem>
            ))
          : [1, 2, 3]}
      </List>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
