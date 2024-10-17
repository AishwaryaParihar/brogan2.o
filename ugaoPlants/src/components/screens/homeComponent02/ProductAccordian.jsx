import React from 'react'
import plantwater from "../../../assets/waterIcon.png" 
import sunlight from "../../../assets/Sunlight.png" 
import animal from "../../../assets/Animal.webp" 
import maintenance from "../../../assets/Maintainance.avif" 


const ProductAccordian = () => {
  return (
    <div class="accordion  pt-4" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <img src={plantwater} alt="" className='accordion-img '/>  Water Twice A Week
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ">
      <div class="accordion-body">
      Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <img src={sunlight} alt="" className='accordion-img '/>
      Needs Bright Indirect Sunlight
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <img src={animal} alt="" className='accordion-img '/>
      Not Pet Friendly
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      This plant and your furry friends cannot become the best buds.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      <img src={maintenance} alt="" className='accordion-img '/>
      Beginner Friendly
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
      <div class="accordion-body">
      If you are a new gardener this is a great choice for you. The plant will thrive in your journey to learn gardening with trials and errors.
      </div>
    </div>
  </div>
</div>
  )
}

export default ProductAccordian