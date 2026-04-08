import { Component } from '@angular/core';

@Component({
  selector: 'app-section-carrosel',
  imports: [],
  templateUrl: './section-carrosel.html',
  styleUrl: './section-carrosel.css',
})
export class SectionCarrosel {

  destinos = [
    { imagem: "image1.png", localidade: "paris", tours: "100+ Tours" },
    { imagem: "image2.png", localidade: "singapore", tours: "100+ Tours" },
    { imagem: "image3.png", localidade: "singapore", tours: "100+ Tours" },
    { imagem: "image4.png", localidade: "singapore", tours: "100+ Tours" },
    { imagem: "image5.png", localidade: "singapore", tours: "100+ Tours" },
    { imagem: "image6.png", localidade: "singapore", tours: "100+ Tours" },
    { imagem: "image7.png", localidade: "singapore", tours: "100+ Tours" },
    { imagem: "image8.png", localidade: "singapore", tours: "100+ Tours" },

  ];
}
