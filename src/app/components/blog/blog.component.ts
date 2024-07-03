import { Component } from '@angular/core';
import { Iblog } from '../../interfaces/iblog.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  newNews() {
    if (this.newNew.title !== "" && this.newNew.img !== "" && this.newNew.text !== "" && this.newNew.date !== "") {
      this.arrNews.push(this.newNew)
      this.newNew = {title: "", img: "", text: "", date: ""}
    } else {
      alert("Debes rellenar todos los campos")
    }
  }

  deleteNews() {
    const news = document.querySelector("#delete") as HTMLSelectElement
    const newsSelected = news.value
    this.arrNews = this.arrNews.filter(news => news.title !== newsSelected)
    if (newsSelected === "") {
      alert("Debe seleccionar una noticia")
    }
  }

}
