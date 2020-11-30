import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    message:""
  }
  
  flag=false;
  constructor(private email:EmailService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
   console.log("trying to send email...");
   console.log("Data", this.data);
   if(this.data.to=="" || this.data.subject=="" || this.data.message==""){
    this.snack.open("fields can not be empty..","Ok");
    return;
   }
   this.flag=true;
   this.email.sendEmail(this.data).subscribe(
     response=>{
      console.log(response);
      this.flag=false;
      this.snack.open("Email sent successfully..!","Ok");
     },
     error=>{
       console.log(error)
       this.flag=false;
       this.snack.open("Something went wrong", "tryAing");
     }
   )
  }
}
