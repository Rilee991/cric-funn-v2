import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToastMessage = (type, message) => {
    const toastAttrs = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        className: "tw-bg-white tw-text-black tw-font-medium tw-text-sm",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    switch(type) {
        case "success": 
            toast.success(message, { ...toastAttrs });
            break;
        case "error":
            toast.error(message, { ...toastAttrs });
            break;
        case "warning":
            toast.warning(message, { ...toastAttrs });
            break;
        default:
            break;
    }
}
