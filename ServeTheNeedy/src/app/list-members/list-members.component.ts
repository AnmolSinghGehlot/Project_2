import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class ngo{
  constructor(
   public memberId: number,
   public memberName: string,
   public aadhar: number,
   public active:boolean,
   public gender:string,
   public memberAddress: string,
   public memberAge: number,
  ) {}
}

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {

  ngo !: ngo[];
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(){
    this.httpClient.get<any>('http://localhost:8899/Ngo/NgoMembers').subscribe(
      response => {
        console.log(response);
        this.ngo = response;
      }
    );
  }
}
