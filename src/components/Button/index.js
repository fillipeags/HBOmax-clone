import PropTypes from 'prop-types';
import { Button as Btn } from './styles';

export default function Button({ name }) {
  return (
    <Btn type="button">
      <span>+</span>
      {name}
    </Btn>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
