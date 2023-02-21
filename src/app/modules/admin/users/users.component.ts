import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


interface UserElement {
  id: number;
  name: string;
  contactNumber: number;
  email: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'email'];
  dataSource: UserElement[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe((data) => {
      this.dataSource = data.map<UserElement>((data) => {
        const formattedUser: UserElement = {
          id: data.userId,
          name: data.name,
          contactNumber: data.contactNumber,
          email: data.email,
        };
        return formattedUser;
      });
    });
  }

}
