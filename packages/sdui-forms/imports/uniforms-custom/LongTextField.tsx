import React, { Ref } from 'react';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';
import setErrorClass from './setErrorClass'

export type LongTextFieldProps = HTMLFieldProps<
  string,
  HTMLDivElement,
  { inputRef?: Ref<HTMLTextAreaElement> }
>;

function LongText({
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  readOnly,
  value,
  ...props
}: LongTextFieldProps) {
  return (
    <div {...filterDOMProps(props)}>
      {label && <label htmlFor={id}>{label}</label>}

      <textarea
        className={setErrorClass(props)}
        disabled={disabled}
        id={id}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={inputRef}
        value={value ?? ''}
      />
    </div>
  );
}

export default connectField(LongText, { kind: 'leaf' });
