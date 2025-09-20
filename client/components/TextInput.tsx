import {
  useState,
  ChangeEvent,
  HTMLInputTypeAttribute,
  useRef,
  useEffect, Ref,
} from "react";

export default function TextInput({
                                    labelClassName,
                                    iconClassName,
                                    label,
                                    name,
                                    id,
                                    value,
                                    disabled,
                                    icon,
                                    type,
                                    autoComplete,
                                    required,
                                    readOnly,
                                    placeholder,
                                    className,
                                    inputClassName,
                                    error,
                                    onTextChange,
                                    min,
                                    max,
                                    iconType,
                                  }: {
  label?: string;
  name: string;
  id?: string;
  value?: string | number | undefined;
  disabled?: boolean;
  icon?: string;
  iconType?: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  className?: string | undefined;
  inputClassName?: string | undefined;
  error?: string;
  iconClassName?: string;
  labelClassName?: string;
  onTextChange: (value: string) => void;
  min?: number;
  max?: string;
}) {
  const [defaultType, setDefaultType] = useState(type);
  const isError = error ? error.length > 0 : false;
  const DateRef = useRef<Ref<HTMLInputElement> | undefined>(null);

  const changeType = () => {
    if (defaultType === "password") {
      setDefaultType("text");
    } else if (defaultType === "text") {
      setDefaultType("password");
    }
  };

  const clickingOnDate = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    DateRef.current?.showPicker();
  };

  const [secondaryIcon, setSecondaryIcon] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSecondaryIcon(null)
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [secondaryIcon]);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name ?? "email-address"}
          className={`block mb-1.5 text-sm font-semibold text-gray-800 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
            iconType === 'copy'
              ? `right-0 ${iconType === 'copy' ? 'cursor-pointer ease-in-out' : ''} `
              : 'pointer-events-none'
          }`}
               onClick={() => {
                 if (value && iconType === "copy") {
                   setSecondaryIcon('check_box')
                   navigator.clipboard.writeText(value as string)
                 }
               }}
          >
            <span className={`material-icons-round ${iconClassName}`}>
              {secondaryIcon ?? icon}
            </span>
          </div>
        )}

        {defaultType == "date" ? (
          <div onClick={clickingOnDate}>
            <input
              // id="email-address"
              name={name}
              disabled={disabled}
              value={value}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onTextChange(event.target.value)
              }
              type={defaultType}
              ref={DateRef as never}
              autoComplete={autoComplete}
              required={required}
              readOnly={readOnly}
              max={max}
              className={`text-base border-[1px] border-black rounded-lg focus:!ring-primary focus:!border-primary block w-full ${
                icon && "pl-10"
              } p-2.5 text-black placeholder-gray-600 ${
                isError && "bg-red-50 border-[1px] border-red-500 text-red-900"
              } ${inputClassName}`}
              placeholder={placeholder}
            />
          </div>
        ) : (
          <input
            id={id ?? "email-address"}
            name={name}
            disabled={disabled}
            value={value}
            min={min}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onTextChange(event.target.value)
            }
            type={defaultType}
            autoComplete={autoComplete}
            required={required}
            readOnly={readOnly}
            className={`text-base border-[1px] border-black rounded-lg focus:!ring-primary focus:!border-primary block w-full ${
              icon && "pl-10"
            } p-2.5 text-black placeholder-gray-600 ${
              isError && "bg-red-50 border-[1px] border-red-500 text-red-900"
            } ${inputClassName}`}
            placeholder={placeholder}
          />
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={changeType}
            className={`material-icons-round absolute right-2 inset-y-0 text-white`}
          >
            {defaultType == "password" ? "visibility" : "visibility_off"}
          </button>
        )}
      </div>

      {isError && (
        <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
}
