---
title: "McLearn Lab - Home"
layout: homelay
excerpt: "McLearn Lab CMU"
sitemap: false
permalink: /
---


<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->

    <ol class="carousel-indicators">
      {% for item in site.data.carousel %}
        <li data-target="#carouselExampleIndicators" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
      {% endfor %}
    </ol>


    <!-- Items -->
    <div class="carousel-inner" markdown="0">
      {% for item in site.data.carousel %}
        <!--Image, link -->
        <div class="carousel-item item {% if forloop.first %}active{% endif %}">
          <a href="{{site.url}}{{site.baseurl}}{{item.caption_link}}">
            <img class="d-block w-100" src="{{site.url}}{{site.baseurl}}/images/homepageslider/{{ item.image }}" alt="{{ item.caption_text }}">
          </a>
        
          <!--Captions-->
          <div class="carousel-caption d-none d-md block">
            <p>{{ item.caption_text }}</p>
          </div>
        </div>

      {% endfor %}
    </div>

    

  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

We are a research group at Carnegie Mellon University that studies learning sciences, educational technology, digital learning games, intelligent tutoring systems, collaborative learning, and e-learning principles.

<figure class="fourth">
  <img src="{{ site.url }}{{ site.baseurl }}/images/logos/cmu_logo.png" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/logos/nsf_logo.png" style="width: 110px">
  <!-- <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/Logo_NWO.jpg" style="width: 120px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/Logo_ERC.jpg" style="width: 110px"> -->
</figure>
