import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Seed2Sprout • About Us</title>
      </Helmet>
      <div className="content about-page">
        <FadeIn>
          <div className="section1">
            <div className="who">
              <h1 className="title">
                <span>What</span>
                <span>is</span>
                <span>Silva?</span>
              </h1>
              <p>
                Silva is our student-led company that strives to match customer
                needs with value. With the numerous difficulties our customers
                are facing with the cost of living crisis and economic turmoil
                of recent years, our product Seed2Sprout stimulates mental
                wellbeing, as well as care towards Mother Nature, which is being
                damaged on a daily basis by the effects of climate change. Our
                product is a fusion of everything a keen home gardener could
                want: a mixture of seeds, specialised to individual customer
                requirements, with all the necessary equipment and advice in one
                product.
              </p>
            </div>
          </div>
          <div className="section1">
            <div className="mission ">
              <h1 className="title">
                <span>Our</span>
                <span>Mission</span>
              </h1>
              <p>We want to Seed the Change, Sprout the Difference</p>
            </div>
          </div>
          <div className="vision section1">
            <h1 className="title">
              <span>Our</span>
              <span>Vision</span>
            </h1>
            <p>
              The plant industry is one of the most common and growing
              industries in recent years. Indeed, there are several “plant
              products” in the market. However, what this product offers is a
              “fusion” of matching customer desires, with true and tangible
              product value. We strive not only to help drive a collective
              effort to protect the environment, but also to allow customers see
              the effects of their work all around them, by allowing nature-via
              this product-to grow at home. Hence, there is no doubt this
              product will drive up product value to meet customer needs. This
              is the key point. With Seed2Sprout, we offer a product at a
              reasonable price to customers who are evidently suffering from the
              effects of the cost of living crisis, whilst simultaneously
              keeping our product value high.
            </p>
          </div>
          <div className="values section1">
            <h1 className="title">
              <span>Our</span>
              <span>Values</span>
            </h1>
            <p>
              With our product Seed2Sprout, we hope to create a product that is
              not only sustainable in its approach to environmental issues, but
              also sustainable in design. Silva is also in the process of making
              a wide-reaching community, via social media platforms. This will
              allow customers to connect and see how their decision to protect
              Mother Nature via Seed2Sprout, is having long-reaching and
              beneficial impacts on their local region, or even nation!
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
