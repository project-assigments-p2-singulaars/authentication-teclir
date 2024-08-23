import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() id!:string;
  private userService = inject(UserService);
  private router = inject (Router)

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
