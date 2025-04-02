import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import c1 from "../assets/c1.png";

import c2 from "../assets/c2.png";

const Course = () => {
    const sections=[ 
        {'img':c1,"heading":"DevOps Masterclass","dis":"Fundamentals of DevOps Low-code automation Career growth strategies in IT"},
        {'img':c2,"heading":"Introduction to MongoDB","dis":"This course has been an incredible experience, helping me deepen my understanding of NoSQL databases, CRUD operations, aggregation frameworks, and more."},
        {'img':c1,"heading":"DevOps Masterclass","dis":"Fundamentals of DevOps Low-code automation Career growth strategies in IT"},
        {'img':c2,"heading":"Introduction to MongoDB","dis":"This course has been an incredible experience, helping me deepen my understanding of NoSQL databases, CRUD operations, aggregation frameworks, and more."},
       

    ]
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false }); // Define the autoplay instance

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay] // Pass the autoplay instance to useEmblaCarousel
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Reinitialize Embla when the API is ready
    }
  }, [emblaApi]);

  if (!sections || sections.length === 0) {
    return <p>No sections available</p>;
  }

  return (
    
   <>
<h3
  className="mx-auto font-bold text-3xl text-center"
  style={{
    color: '#ff7f50',
    textTransform: 'uppercase',
    padding:'12px'
  }}
>
  Course
</h3>

    <div className="embla overflow-x-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {sections.map((data, index) => (
           <div
           className="embla__slide w-full md:w-2/5 flex-shrink-0 m-4 rounded-lg shadow-xl p-0.5 animated-gradient-bg"
           key={index}
         >
           <div className="bg-white m-auto h-full md:px-8 md:py-2 rounded-lg flex items-center justify-center align-middle ">
             <div className="py-4 flex-row align-center md:flex space-x-10 md:space-x-38">
              <div className="flex justify-center">
               <img className="h-64 " src={data.img}/> 
               </div>
               <div>
               <h2 className="md:text-2xl font-bold m-2 animated-gradient-text">{data.heading}</h2>
               <br />
               <p className="m-2">what I learned :</p>
               <p className="m-2">{data.dis || ''}</p>

               </div>
             </div>
             </div>
         </div>
         
          ))}
        </div>
      </div>
    </div>
   </>
    
    
  );
};

export default Course;