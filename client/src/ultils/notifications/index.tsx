import { toast } from 'react-toastify';

interface IProps<T> {
    message: string;
    target?: T;
    time?: number;
}

export function SuccessNotification<T = null>(props: IProps<T>) {
    return toast.success(props.message, {
        position: 'top-right',
        autoClose: props.time ?? 2000,
        hideProgressBar: false,
        rtl: false,
        theme: 'colored',
    });
}

export function ErrorNotification<T = null>(props: IProps<T>) {
    return toast.error(props.message, {
        position: 'top-right',
        autoClose: props.time ?? 2000,
        hideProgressBar: false,
        rtl: false,
        theme: 'colored',
    });
}

export function InfoNotification<T = null>(props: IProps<T>) {
    return toast.info(props.message, {
        position: 'top-right',
        autoClose: props.time ?? 2000,
        hideProgressBar: false,
        rtl: false,
        theme: 'colored',
    });
}
