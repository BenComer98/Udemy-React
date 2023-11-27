// eslint-disable-next-line
import PropTypes from 'prop-types';
import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest}) {
  const classes = twMerge(
    className(rest.className, 'px-3 py-1.5 border flex items-center', {
      'border-blue-500 bg-blue-500': primary,
      'border-gray-900 bg-gray-900': secondary,
      'border-green-500 bg-green-400': success,
      'border-yellow-500 bg-yellow-400': warning,
      'border-red-500 bg-red-400': danger,
      'rounded-full': rounded,
      'text-white': !outline,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-blue-200': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    })
  );

  return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
  purposeCheck: ({ primary, secondary, success, warning, failure }, propName, componentName) => {
    if (Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!failure) > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true');
    }
  }
}

export default Button;