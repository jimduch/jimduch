import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    name: '',
    password: '',
    age: '',
    famille: '',
    race:'',
    nourriture: ''
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
      password: this.tutorial.password,
     age: this.tutorial.age,
     famille: this.tutorial.famille,
     race: this.tutorial.race,
     nourriture: this.tutorial.nourriture

    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name : '',
      password : '',
      age: '',
      famille: '',
      race:'',
      nourriture: ''
    };
  }

}
