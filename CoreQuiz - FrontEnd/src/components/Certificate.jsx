import Header from "./Header";
import Footer from "./Footer";
import "./Certificate.css";
import sertifika1 from "../images/CertificateAlgoritma.jpg";
import sertifika2 from "../images/CertificateBiyoloji.jpg";
import sertifika3 from "../images/CertificateHukuk.jpg";
import { Carousel, CarouselItem, } from 'react-bootstrap';
import { useState } from "react";

// npm i react-bootstrap

function Certificate() {

  const [description, setDescription] = useState("Sorular, temel algoritma ve programlama konularını içermektedir.Sorularla ilgili küçük ipuçları verelim; İlk soru, algoritmanın temelini oluşturan adımların yazılmasıyla ilgilidir. İkinci soru, algoritma, programlama ve kodlama arasındaki farkları anlama üzerine odaklanmaktadır. Diğer sorular, problem tanımlama, algoritma yazma aşamaları, mantıksal operatörlerin kullanımı, değişkenlerin işlevi, koşullu ifadeler ve programlama temelleriyle ilgilidir. Soruların genel amacı, temel bilgisayar bilimleri konularında anlayışınızı ölçmektir.");
  const [title, setTitle] = useState("ALGORITMA SINAVI");

  const updateDescriptionAndTitle = (index) => {
    var descriptions = [
      "Sorular, temel algoritma ve programlama konularını içermektedir.Sorularla ilgili küçük ipuçları verelim; İlk soru, algoritmanın temelini oluşturan adımların yazılmasıyla ilgilidir. İkinci soru, algoritma, programlama ve kodlama arasındaki farkları anlama üzerine odaklanmaktadır. Diğer sorular, problem tanımlama, algoritma yazma aşamaları, mantıksal operatörlerin kullanımı, değişkenlerin işlevi, koşullu ifadeler ve programlama temelleriyle ilgilidir. Soruların genel amacı, temel bilgisayar bilimleri konularında anlayışınızı ölçmektir.",
      "Sorular, biyoloji bilimindeki temel konulara odaklanmaktadır.Sorularla ilgili küçük ipuçları verelim; İlk soru, bitki hücresi ile hayvan hücresi arasındaki temel farkları ele alır. Diğer sorular solunum, kemosentez, tropizma, habitat, özelleşmiş hücreler, biyolojik çeşitlilik, antibiyotik, özgül bağışıklık sistemi, metabolizma, fosfor döngüsü, su döngüsü, ektoparazit, ekotoksikoloji, evrim, antikor, nükleik asitler, biyoteknoloji, DNA replikasyonu ve katalizör gibi önemli konuları içermektedir.",
      "Sorular, hukuk alanındaki temel kavramları ve alt dalları kapsayan geniş bir yelpazeye odaklanmaktadır. Sorularla ilgili küçük ipuçları verelim; İlk soru, hukukun tanımını içerir ve hukukun doğru ve yanlışı belirleyen kurallar bütünü olduğunu vurgular. Diğer sorular, ceza hukuku, anayasa hukuku, medeni hukuk, iş hukuku gibi hukukun alt dallarına odaklanarak öğrencilerin hukuki bilgilerini sınamayı amaçlar.",
    ];

    var titles = [
      "Algoritma Sınavı",
      "Biyoloji Sınavı",
      "Hukuk Sınavı",
    ];

    setDescription(descriptions[index]);
    setTitle(titles[index]);
  }

  return (
    <div className="CertificateContainer">
      <Header />
      <div className="certificateCards">

        {/* Eski kısım. Kaybolmaması açısından bırakıldı. */}
        {/* <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">Algoritma Sınavı</h2>
              <h6 className="certificateDescription">
                &nbsp;&nbsp;&nbsp;Sorular, temel algoritma ve programlama konularını
                içermektedir.Sorularla ilgili küçük ipuçları verelim; İlk soru,
                algoritmanın temelini oluşturan adımların yazılmasıyla
                ilgilidir. İkinci soru, algoritma, programlama ve kodlama
                arasındaki farkları anlama üzerine odaklanmaktadır. Diğer
                sorular, problem tanımlama, algoritma yazma aşamaları, mantıksal
                operatörlerin kullanımı, değişkenlerin işlevi, koşullu ifadeler
                ve programlama temelleriyle ilgilidir. Soruların genel amacı,
                temel bilgisayar bilimleri konularında anlayışınızı ölçmektir.
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={sertifika1} alt="" className="certificateImage" />
            </div>
          </div>
        </div> */}

        
        <div className="certificateCard">
          <div className="certficate">

              <div className="certificateContent fadeInOut" key={title + description}>
                <h2 className="certificateHead">{title}</h2>
                <h6 className="certificateDescription fadeInOut" key={title + description}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}
                </h6>
              </div>
              
              {/* Sertifikaların geçişlerinde problem var. */}
              {/* Serifika süresi ve yazı süresi konuşulacak. */ }
              <div className="certificateRightSection">
                  <Carousel onSelect={updateDescriptionAndTitle} interval={6000} wrap={true} controls={true}> 

                    <CarouselItem>
                      <img className="certificateImage w-100" src={sertifika1} alt="image1" />
                    </CarouselItem>

                    <CarouselItem>
                      <img className="certificateImage w-100" src={sertifika2} alt="image2" /> 
                    </CarouselItem>

                    <CarouselItem> 
                      <img className="certificateImage w-100" src={sertifika3} alt="image3" />
                    </CarouselItem>

                  </Carousel>
              </div>
            </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
