import { Component, OnInit } from "@angular/core";


@Component({
  selector: "dhr-layout-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.debug("Footer loaded");
  }  
}
