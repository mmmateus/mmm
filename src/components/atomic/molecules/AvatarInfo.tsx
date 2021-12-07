import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';


const AvatarInfo = (props: any) => {
  const { open } = props;
  
  return (
    <Card sx={{ width: '100%;', padding: '2.5rem 0 1rem 0;', boxShadow: 'none;' }}>
      <Avatar
      src="../../img/eu.png"
      alt="Mateus"
      title="Mateus M Monteiro"
      sx={{
        margin: 'auto;',
        bgcolor: '#8932B2'
      }}>
        M
      </Avatar>
      {
        open &&
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="body1" component="div" align="center">
            Mateus M. Monteiro
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            mmmateus314@gmail.com
          </Typography>
        </CardContent>
      }
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default AvatarInfo;