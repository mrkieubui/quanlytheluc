import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }
  Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  notiDelete() {
    this.Toast.fire({
      icon: 'success',
      title: 'Xóa nội dung thành công!'
    })
  }
  notiCreateSuccess() {
    this.Toast.fire({
      icon: 'success',
      title: 'Tạo mới nội dung thành công!'
    })
  }
  notiUpdateSuccess() {
    this.Toast.fire({
      icon: 'success',
      title: 'Cập nhật nội dung thành công!'
    })
  }
  notiUnitUpdateSuccess() {
    this.Toast.fire({
      icon: 'success',
      title: 'Cập nhật đơn vị thành công!'
    })
  }
  notiError() {
    this.Toast.fire({
      icon: 'error',
      title: 'Không thể thực hiện thao tác!'
    })
  }
  notiRepeat() {
    this.Toast.fire({
      icon: 'error',
      title: 'Nội dung đã tồn tại!'
    })
  }
}
