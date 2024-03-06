import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type BorderRadiusSize = 'sm' | 'md';

const borderRadiusType: Record<BorderRadiusSize, number> = {
  sm: 0.5,
  md: 2,
};

interface StyledButtonProps {
  arrow: boolean;
  borderRadiusSize: BorderRadiusSize;
}

const iconList: { [name: string]: JSX.Element } = {
  send: <SendIcon />,
};

const arrowStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  top: '50%',
  right: '1rem',
  width: 6,
  height: 6,
  borderTop: 'solid 1px currentColor',
  borderRight: 'solid 1px currentColor',
  transform: 'translateY(-50%) rotate(45deg)',
};

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'arrow' && prop !== 'borderRadiusSize',
})<StyledButtonProps>(({ theme, arrow, borderRadiusSize }) => ({
  borderRadius: theme.spacing(borderRadiusType[borderRadiusSize]),
  ':after': arrow ? arrowStyle : undefined,
}));

interface Props {
  color?: 'primary' | 'secondary' | 'info';
  variant?: Exclude<ButtonProps['variant'], 'text'>;
  arrow?: boolean;
  borderRadiusSize?: BorderRadiusSize;
  fullWidth?: ButtonProps['fullWidth'];
  children?: ButtonProps['children'];
  iconName?: string;
  onClick: ButtonProps['onClick'];
}

const SpoconButton: React.FC<Props> = (props: Props) => {
  const {
    color,
    arrow = false,
    borderRadiusSize = 'sm',
    variant = 'contained',
    fullWidth,
    children,
    iconName,
    onClick,
  } = props;

  return (
    <StyledButton
      color={color}
      arrow={arrow}
      borderRadiusSize={borderRadiusSize}
      variant={variant}
      disableElevation
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {iconName ? iconList[iconName] : children}
    </StyledButton>
  );
};

SpoconButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  arrow: false,
  borderRadiusSize: 'sm',
  fullWidth: false,
  children: '',
  iconName: ' ',
};

export { SpoconButton };
