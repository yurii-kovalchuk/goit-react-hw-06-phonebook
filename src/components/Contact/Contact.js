import PropTypes from 'prop-types';
import { Item, Btn } from './Contact.styled';

export const Contact = ({ info: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Btn
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Btn>
    </Item>
  );
};

Contact.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
