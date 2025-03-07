import styled from 'react-emotion';

import IconButton from '../../muiComponents/IconButton';

export const ClipBoardCopy = styled('div')({
  '&&': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const ClipBoardCopyText = styled('span')({
  '&&': {
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: '21px',
    fontSize: '1rem',
  },
});

export const CopyIcon = styled(IconButton)({});
