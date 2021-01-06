import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hacker-News';
  hnews:any=[];
  no_hnews:number;
  hnews_info:any=[];


  constructor(private http: HttpClient){

    // Get request to get the list of IDs of all the top stories

    this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").
    subscribe(response =>{
      this.hnews=response;
      this.no_hnews=this.hnews.length;
      console.log(this.hnews.length)

      //Fetching the json object with respect to each ID recieved from the top-stories API

    for(let i=0; i<this.no_hnews;i++)
    {
      this.http.get("https://hacker-news.firebaseio.com/v0/item/"+this.hnews[i]+".json?print=pretty").
      subscribe(data => {
          this.hnews_info.push(data);
      });
    }

    });

  }

  ngOnInit(){

    // this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").
    // subscribe(response =>{
    //   this.hnews=response;
    //   this.no_hnews=this.hnews.length;
    //   console.log(this.hnews.length)

    // for(let i=0; i<this.no_hnews;i++){
    //   this.http.get("https://hacker-news.firebaseio.com/v0/item/"+this.hnews[i]+".json?print=pretty").
    //   subscribe(data => {
    //       this.hnews_info.push(data);
    //   });
    // }

    // });



  }
}
