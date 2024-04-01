import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({children, href, className, ...rest}) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  const buttonProps = {
    className: buttonClassName,
    ...rest,
  };

  if (href) {
    if ( href.startsWith('/') ) {
      return (
        <Link href={href} {...buttonProps} className={styles.buttonWrapper}>
          <h3>{children}</h3>
        </Link>
      );
    }
    return (
      <a href={href} target='_blank' {...buttonProps} className={styles.buttonWrapper}>
        <h3>{children}</h3>
      </a>
    );
  }

  return (

    <button {...buttonProps} className={styles.buttonWrapper}>
      <h3>{children}</h3>
    </button>
  );
};

export default Button;
