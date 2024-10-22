import { Component, OnInit } from "@angular/core";
import { TeamService } from "src/app/services/team.service";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  constructor(private teamService: TeamService, private fb: FormBuilder) {}
  team: any[] = [];
  contactForm!: FormGroup;
  buttonText = "Send";
  buttonEnable = true;

  templateParams = {
    name: "James",
    message: "Check this out!",
    email: "email@gmail.com",
    contact: "12421412",
  };

  ngOnInit(): void {
    this.team = this.teamService.team;
    this.loadContactForm();
  }

  loadContactForm() {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      message: [null, [Validators.required]],
      email: [null, [Validators.required]],
      contact: [null],
    });
  }

  sendEnquiry(): void {
    if (this.contactForm.invalid) {
      return;
    }

    const payload = {
      ...this.contactForm.value,
    };

    this.buttonText = "Sending";
    this.buttonEnable = false;
    emailjs
      .send("service_ggdq7vq", "template_2mfqk86", payload, "lDhSkUNlQpbm39lr4")
      .then(
        (response) => {
          this.buttonText = "Message sent!";
          this.contactForm.reset();

          setTimeout(() => {
            this.buttonEnable = true;
            this.buttonText = "Send";
          }, 2000);

          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          this.buttonText = "Failed, Try again later";

          setTimeout(() => {
            this.buttonEnable = true;
            this.buttonText = "Send";
          }, 2000);
          console.log("FAILED...", err);
        }
      );
  }
}
