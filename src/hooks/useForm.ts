import {useCallback, useEffect, useState} from 'react';

export type FormTouched<T> = Partial<Record<keyof T, boolean>>;
export type FormError<T> = Partial<Record<keyof T, string | undefined>>;

export type SelectPropsOptions<T> = {
  resetFields: {
    [P in keyof T]?: T[P];
  };
};

interface Props<T> {
  initialValues: T;
  validate?: (values: T) => FormError<T>;
}

const useForm = <T extends object>({validate, initialValues}: Props<T>) => {
  const [isDirty, setIsDirty] = useState(false);
  const [state, setState] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormError<T>>({});
  const [touched, setTouched] = useState<FormTouched<T>>({});

  // Settings values
  const clear = useCallback(() => {
    setErrors({});
    setTouched({});
    setIsDirty(false);
    setState(initialValues);
  }, []);

  const setField = useCallback(
    (
      nameOrCallback: keyof T | ((values: T) => Partial<T>),
      value?: string | number,
    ) => {
      if (typeof nameOrCallback === 'function') {
        const _values = nameOrCallback(state);
        setState(prev => ({...prev, ..._values}));
        return;
      }

      setState(prev => ({...prev, [nameOrCallback]: value}));
    },
    [state],
  );

  const setFields = useCallback((values?: Partial<T>) => {
    setState(prev => ({...prev, ...values}));
  }, []);

  const handleChange = useCallback((name: string, value: string | number) => {
    setState(prev => ({...prev, [name]: value}));
  }, []);

  const handleBlur = useCallback((name: string) => {
    setTouched(prev => ({...prev, [name]: true}));
  }, []);

  const toggleDirty = useCallback((newIsDirty?: boolean) => {
    setIsDirty(prev => (typeof newIsDirty === 'boolean' ? newIsDirty : !prev));
  }, []);

  // Validate Errors
  const hasErrors = useCallback((newErrors: FormError<T>) => {
    return Object.keys(newErrors).length !== 0;
  }, []);

  // Inputs default props
  const inputProps = (name: keyof T) => {
    return {
      error: errors[name],
      value: state[name]!,
      onBlur: () => handleBlur(name as string),
      onChangeText: (value: string) => handleChange(name as string, value),
    };
  };

  // OnSubmit middleware
  const onSubmit = useCallback(
    (cb: () => void) => {
      return () => {
        if (typeof validate === 'function') {
          toggleDirty(true);

          const newErrors = validate(state);

          if (hasErrors(newErrors)) {
            setErrors(newErrors);
            return;
          }

          cb();
          return;
        }

        cb();
      };
    },
    [state],
  );

  useEffect(() => {
    if (isDirty) {
      if (typeof validate === 'function') {
        const newErrors = validate(state);
        setErrors(newErrors);
      }
    }
  }, [state, isDirty]);

  return {
    values: state,
    errors,
    touched,
    hasErrors,
    clear,
    onSubmit,
    setField,
    setFields,
    setErrors,
    setTouched,
    handleBlur,
    inputProps,
    toggleDirty,
    handleChange,
  };
};

export default useForm;
