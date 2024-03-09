import React from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button';

type BadgeProps = React.ComponentPropsWithoutRef<'span'> & {
  onClose?: () => void;
};

interface Props {
  onClose?: () => void;
  children: React.ReactNode;
}

export const Badge: React.FC<Props> = (props: Props) => {
  const { onClose, children } = props;

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        sx={{
          minWidth: 0,
          maxHeight: 1,
          paddingx: 0,
          borderTopLeftRadius: 'sm',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 'sm',
        }}
      >
        {children}
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        sx={{
          border: '1px',
          minWidth: 0,
          maxHeight: 1,
          marginLeft: '-1px',
          marginRight: '3px',
          paddingx: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 'sm',
          borderBottomRightRadius: 'sm',
          borderBottomLeftRadius: 0,
        }}
        onClick={() => onClose && onClose()}
      >
        x
      </Button>
    </>
  );
};

Badge.defaultProps = {
  onClose: undefined,
};

type TagsInputProps = React.ComponentPropsWithoutRef<'input'> & {
  isError?: boolean;
  // eslint-disable-next-line
  tags: string[];
  onChangeTags?: (tags: string[]) => void;
};

/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
const TagsInput: React.FC<TagsInputProps> = ({
  onChangeTags,
  tags = [],
  isError,
  ...props
}) => {
  // const [tags, setTags] = React.useState<string[]>(default)
  const onClose = (i: number) => {
    const newTags = [...tags];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    newTags.splice(i, 1);
    // eslint-disable-next-line
    onChangeTags && onChangeTags(newTags);
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // plese us object destructing
    const { nativeEvent } = e;
    if (nativeEvent.isComposing) return;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { currentTarget, key, preventDefault } = e;
    if (!currentTarget.value.length && key === 'Backspace' && tags.length > 0) {
      onClose(tags.length - 1);
      return;
    }

    if (key !== 'Enter' || !currentTarget.value.trim()) return;
    const newTags = [...tags, currentTarget.value];
    if (onChangeTags) {
      onChangeTags(newTags);
    }
    currentTarget.value = '';
    preventDefault();
  }

  return (
    <div>
      {tags.map((tag, i) => (
        <Badge onClose={() => onClose(i)}>{tag}</Badge>
      ))}
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

TagsInput.defaultProps = {
  isError: false,
  onChangeTags: undefined,
};

export { TagsInput };

// <TagsInput tags={tags} onChangeTags={(newTags) => { setTags(newTags)} } />
