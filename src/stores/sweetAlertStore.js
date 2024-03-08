import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import '../assets/main.css'

export const useSweetAlertStore = defineStore('sweetAlertStore', () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })
  console.log(Toast)
  return { Toast }
})
