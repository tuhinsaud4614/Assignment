import * as React from "react";
import { clsx } from "clsx";

export default function Select(props) {
  const id = React.useId();
  const { className, label, options, selectedOption, ...rest } = props;
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        {...rest}
        id={id}
        className={clsx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          className
        )}
      >
        {!!selectedOption && <option value="">{selectedOption}</option>}
        {options?.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}
