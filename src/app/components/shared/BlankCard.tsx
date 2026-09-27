'use client';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

type Props = {
  className?: string;
  children: any | any[];
  sx?: any;
  elevation?: number;
};

/**
 * The product's own card: 1px divider border, flat, no shadow.
 */
const BlankCard = ({ children, className, sx, elevation = 0 }: Props) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 0,
        border: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        ...sx,
      }}
      className={className}
      elevation={elevation}
      variant="outlined"
    >
      {children}
    </Card>
  );
};

export default BlankCard;
