import { toast, ToastContent } from 'react-toastify'

export const notify = (content: ToastContent) => toast(
  content, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })