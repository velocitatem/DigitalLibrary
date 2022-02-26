import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input("name") book_title = 'The Da Vinci Code';
  cid = "def";
  colors_text = ["#563d23", "#d2946b"];
  colors = ["#622514", "#a35329", "#501820", "#54230b"]
  public css_color = this.colors[0];
  public book_size = ((Math.random() * (100-40)) + 40) + "px"
  constructor() { }

  ngOnInit(): void {
    this.cid = btoa(this.book_title);
    console.log(this.css_color);
    let i = (Math.random()*(this.colors.length));
    console.log(i);
    this.css_color = this.colors[parseInt(""+i)];

  }

}
