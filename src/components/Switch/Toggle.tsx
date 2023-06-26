import cx from 'clsx';

const Toggle = ({ isToggled, isFocusVisible }: { isToggled: boolean; isFocusVisible: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 24"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-none w-10 h-6 cursor-pointer"
  >
    <rect
      x={2}
      y={2}
      rx={10}
      className={cx('w-9 h-5', isToggled ? 'fill-blue-500' : 'fill-gray-300 dark:fill-darkgray-50')}
    />
    <circle cx={isToggled ? 28 : 12} cy={12} r={8} className="fill-white" />
    {isFocusVisible && (
      <rect
        x={1}
        y={1}
        width={38}
        height={22}
        rx={11}
        className="stroke-gray-500 stroke-1 fill-none"
      />
    )}
  </svg>
);

export { Toggle };
