import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact me!</h1>
        </div>
      </div>
    </section>


    <section class="section">
      <div class="container">
        <!--Contact form-->
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <!--Name-->
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              Your name is required.
            </div>
          </div>
          <!--Email-->
          <div class="field">
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your email is required and needs to be valid.
            </div>
          </div>

          <!--Message-->
          <div class="field">
            <label class="label">Your message</label>
            <input name="message" class="textarea" [(ngModel)]="message" #messageInput="ngModel" required>
            <div class="help is-error" *ngIf="messageInput.invalid && messageInput.touched">
              A message is required to submit.
            </div>
          </div>

          <!--Submit button-->
          <button type="submit" class="button is-warning" [disabled]="contactForm.invalid">
            Send
          </button>

        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})

export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  
  
  constructor() { 
  }

  ngOnInit() {
  }

  submitForm() {
    alert('Form Submitted');
  }

}
