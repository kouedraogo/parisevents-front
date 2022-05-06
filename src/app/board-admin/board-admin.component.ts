import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;

  constructor(private userService: UserService, 
    private  authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });

    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.authService.getAll()
    .subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.authService.deleteAll()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error()
    });
  }

  getUser(id: string): void {
    this.authService.get(id)
    .subscribe({
      next: (data) => {
        this.currentUser = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  deleteUser(): void {
    this.authService.delete(this.currentUser.id)
    .subscribe({
      next: (res) => {
        console.log(res);
        //this.router.navigate(['/admin']);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
}
