import { Component } from '@angular/core';
import { Iblog } from '../../interfaces/iblog.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
  newNew: Iblog = {title: "", img: "", text: "", date: ""}

  arrNews: Iblog[] = [
    {title: "aa", img: "./images/foto1.jpeg", text: "xxxxxx", date: "2333"},
    {title: "bb", img: "xxx", text: "xxxxxx", date: "2333"}
   ]

   loadNews() : string {
    let html = ""
  
    this.arrNews.forEach((news: Iblog) => {
      html += `
      <article class="news">
        <h2 class="title">${news.title}</h2>
        <p class="text">${news.text}</p>
        <img src="${news.img}" />
        <p class="date">${news.date}</p>
      </article>
        `
    })

    return html
  }

}
