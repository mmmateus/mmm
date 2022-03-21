import React from 'react';

import { styled, useTheme, withTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar as MuiAvatar } from '@mui/material';
import swap from '../../../img/swap_round.png';

function Avatar(props: any) {
    // useTheme() hook?
	// const theme: Theme = useTheme();
  const theme = props.theme;
	const open = props.open;

  return (
    <Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100%',
			marginTop: '48px',
			marginBottom: '32px',
			border: '2px solid red'
    }}>
			<MuiAvatar src={swap} sx={{ bgcolor: 'blue' }}> S </MuiAvatar>
			{
				open &&
				<>
					<Typography sx={{ color: theme.palette.brand.main, ...theme.typography.body1 }}>
							Name
					</Typography>
					<Typography sx={{ color: theme.palette.text.disabled, ...theme.typography.body2 }}>
							Role
					</Typography>
				</>
			}
    </Box>
  );
}

export default Avatar;
