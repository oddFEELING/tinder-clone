import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEzBhhGpn_C5yRMh0KQFXFOKaI47Ldv311GmtgCxFTqsFDjnZ8--hhzO9B5QdcJqzDlY&usqp=CAU"
        className="header_logo"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default header;
