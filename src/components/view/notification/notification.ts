import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2"

export const displayToastMessage = (icon: SweetAlertIcon, title: string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon,
        title
    })
}

export const displayPopup = (icon: SweetAlertIcon, title: string, text: string, showCancelButton: boolean): Promise<SweetAlertResult<any>> => {
    const showMessage = {
        title,
        text,
        icon,
        confirmButtonColor: '#62a086'
    }

    const confirmation = {
        ...showMessage,
        showCancelButton,
        cancelButtonColor: '#f66b61',
        confirmButtonText: 'Yes, delete it!'
    }

    return Swal.fire(showCancelButton ? confirmation : showMessage)
}
