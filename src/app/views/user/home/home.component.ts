import { Component, OnInit, HostListener, Inject, ElementRef, ViewChild, } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from './../register-dialog/register-dialog.component';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatMenuTrigger } from '@angular/material';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  title = "Invice Capital";
  items: Array<any> = [];
  presentaionItem: any[];
  subheader: any;
  content: any;
  subTitleAndContent: Array<any> = [];
  iitems: Array<any> = [];
  fixed: boolean;
  defaultHelpData: any[] = [
    {
      id: 1,
      name: 'Stock with US',
      sliderValues: [
        {
          image: '1.jpg',
          subtitle: 'Step 1 - Go to Add Apps Screen',
          content: "Click on the + icon in the navigation bar on the top right of your Launchpad"
        },
        {
          image: 'bull.jpg',
          subtitle: 'Step 2 - Select Application(s)',
          content: "Select the application(s) you wish to add to Launchpad, by checking the boxes next to each application"
        },
        {
          image: 'gold.jpg',
          subtitle: 'Step 3 - Add Application(s)',
          content: "Click on + icon on the right"
        },
        {
          image: 'stockupdown.jpg',
          subtitle: 'Step 4 - Confirm Addition',
          content: "When prompted, click on Yes to continue adding selected applications"
        }
      ]
    }
  ]
  constructor(public dialog: MatDialog, @Inject(DOCUMENT) document) {
    this.dialog.open(RegisterDialogComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true,
      data: {
        title: 'Best option for trade (feel the success with US)'
      }
    });
  }


  ngOnInit() {
    this.slidingImage();

  }

  getSubtitle(index) {
    return this.getObjectFromArray(this.subTitleAndContent, "index", index).subtitle;
  }

  getContent(index) {
    return this.getObjectFromArray(this.subTitleAndContent, "index", index).content;
  }

  getObjectFromArray(inputArray, key, id): any {
    let arrayOfKeys = Object.keys(inputArray);
    let lobjX;
    arrayOfKeys.forEach(element => {
      let lobjObj = inputArray[element];
      if (String(lobjObj[key]) == String(id)) {
        lobjX = lobjObj;
        return;
      }
    });
    return lobjX;
  };

  slidingImage() {
    this.presentaionItem = this.defaultHelpData;
    this.items = this.defaultHelpData[0].sliderValues;
    let index: number = 0;
    this.items.forEach(helpData => {
      let helpImage: any;
      this.content = helpData.content;
      this.subheader = helpData.subtitle;
      helpImage = 'assets/' + helpData.image;
      helpData = {
        index: index++,
        url: helpImage,
        subtitle: this.subheader,
        content: this.content
      }
      this.iitems.push(helpImage);
      this.subTitleAndContent.push(helpData);
    });
  }

  loadServiceEvent(event: any) {
    console.log(" services event and value of event is " + JSON.stringify(event));
  }

  loadContactEvent() {
    console.log(" loadContactEvent event and value of event is " + JSON.stringify(event));
  }
  loadHomeEvent() {
    console.log(" loadHomeEvent event and value of event is " + JSON.stringify(event));
  }
  loadAboutEvent() {
    console.log(" loadAboutEvent event and value of event is " + JSON.stringify(event));
  }

  // @HostListener("window:scroll", ['$event'])
  // scrollMe(event) {
  //   if (window.pageYOffset > 550) {
  //     let element = document.getElementById('navbar');
  //     element.classList.add('sticky');
  //   } else {
  //     let element = document.getElementById('navbar');
  //     element.classList.remove('sticky');
  //   }
  // }

}
