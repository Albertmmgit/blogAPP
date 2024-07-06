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
  
  newNew: Iblog = {title: "", img: "", text: "", date: "", tag: ""}
 
  arrNews: Iblog[] = [
    {title: "España a semifinales", img: "https://placehold.co/200x200", text: "España vence a Alemania en la prórroga y se califica para las semifinales de la Eurocpoa 2024", date: "05/07/2024", tag: "deportes"},
    {title: "Momias ", img: "https://placehold.co/200x200", text: "El empresario Gustavo Cabanillas anuncia el traslado de su museo egipcio en la Ciudad Autónoma hacia la Costa del Sol, aunque mantendrá parte de la colección en su sede actual tras alcanzar un acuerdo con el Gobierno melillense", date: "04/07/2024", tag: "cultura"}
   ]

   loadNews() : string {
    let html = ""
    this.arrNews.forEach((news: Iblog) => {
      html += `
      <article class="news ${news.tag}">
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
      this.newNew = {title: "", img: "", text: "", date: "", tag: ""}
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

  tags($event: Event) {
    let content = document.querySelector(".news-content") as HTMLSelectElement
    let tag = $event.target as HTMLSelectElement
    let filter = tag.innerText
    let newARR = this.arrNews.filter(news => news.tag == filter)
    content.innerHTML = ""
    let html = ""
    newARR.forEach((news: Iblog) => {
      html += `
      <article class="news ${news.tag}">
        <h2 class="title">${news.title}</h2>
        <p class="text">${news.text}</p>
        <img src="${news.img}" />
        <p class="date">${news.date}</p>
      </article>
        `
    })
    content.innerHTML = html
      }
    
  allNews() {
    let content = document.querySelector(".news-content") as HTMLSelectElement
    content.innerHTML = this.loadNews()
  }

}
