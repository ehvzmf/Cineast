import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ mt: 'auto', py: 2, textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} MiaChoi. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;