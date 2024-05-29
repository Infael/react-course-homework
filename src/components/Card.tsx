import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  dark?: boolean;
}

const Card = ({ children, dark = false }: CardProps) => {
  return (
    <div
      className={classNames(
        'p-5 rounded-md w-full min-w-[500px]',
        dark ? 'bg-pink-700' : 'bg-pink-500'
      )}
    >
      {children}
    </div>
  );
};

export default Card;
