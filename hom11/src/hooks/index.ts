import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { FormValues, FormErrors, ValidationRule, ValidationRules } from '../api/types';

export const useForm = <T extends FormValues>() => {

    const [values, setValues] = useState<T>({} as T);
    const [errors, setErrors] = useState<FormErrors>({});
    const [rules, setRules] = useState<ValidationRules>({});
    const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const handleSubmit = (callback: (values: T) => void) => (event: FormEvent) => {
        event.preventDefault();

        const tmpErrors: FormErrors = { ...errors };
        let firstEmptyKey: keyof T | null = null;

        for (const key in rules) {
            const fieldKey = key as keyof T;
            if (rules[key]?.required && (!values[fieldKey] || !values[fieldKey]?.trim())) {
                tmpErrors[fieldKey as string] = rules[key]?.required;
                if (!firstEmptyKey) {
                    firstEmptyKey = fieldKey;
                }
            } else {
                delete tmpErrors[fieldKey as string];
            }
        }
        setErrors(tmpErrors);

        if (firstEmptyKey && inputRefs.current[firstEmptyKey as string]) {
            inputRefs.current[firstEmptyKey as string]?.focus();
        }

        if (Object.keys(tmpErrors).length === 0) {
            callback(values);
        }
    };

    const register = (key: keyof T, options: ValidationRule = {}) => {

        if (!rules[key as string]) {
            setRules(prevRules => ({
                ...prevRules,
                [key as string]: options,
            }));
        }

        return {
            value: values[key] || '',
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                setValues(prevValues => ({
                    ...prevValues,
                    [key]: e.target.value,
                }));
            },
            ref: (el: HTMLInputElement) => (inputRefs.current[key as string] = el),
        };
    };

    return {
        handleSubmit,
        register,
        errors,
    };
};