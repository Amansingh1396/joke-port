import { Component } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokeapp';
  joke = "";
  jokesList:any=[];


  constructor(private jokeService:JokeService){


}
getJoke(){
  this.jokeService.get().subscribe(res=> {
    this.joke = res.joke;
    // this.jokesList.forEach((a:any) => {
      // Object.assign(a,{quantity:1,total:a.joke})
      

  });
// })
}
}

