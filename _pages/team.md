---
title: "McLearn Lab - Team"
layout: gridlay
excerpt: "McLearn Lab: Team members"
sitemap: false
permalink: /team/
---
# Team
<div class="row">
 <div class="col-sm-6 text-center">
  <img class="img-responsive h-100 w-100 object-fit-cover" src="{{ site.url }}{{ site.baseurl }}/images/team/teampic1.jpg" />
  <h5><i>McLearn Lab Potluck, August 2025</i></h5>
 </div>
 <div class="col-sm-6">
  <img class="img-responsive h-100 w-100 object-fit-cover" src="{{ site.url }}{{ site.baseurl }}/images/team/teampic2.jpg" style="margin-top:16.6%;"/>
 </div>
</div>
# Group Members

<!-- # Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), # # [administrative support](#administrative-support). -->

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/team/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  {% if member.site  %}
  <h4><a href="{{ member.site }}">{{ member.name }}</a></h4>
  {% else %}
  <h4>{{ member.name }}</h4>
  {% endif %}
  
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Associated Members
{% assign number_printed = 0 %}
{% for member in site.data.associated_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}


<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/team/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  {% if member.site  %}
  <h4><a href="{{ member.site }}">{{ member.name }}</a></h4>
  {% else %}
  <h4>{{ member.name }}</h4>
  {% endif %}
  <i>{{ member.info }} <!-- <br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
<!-- <br />
<h2> Interns: <a href="{{ site.url }}{{ site.baseurl }}/team/interns">Click here </a></h2>
<br /> -->
## Key Collaborators
{% assign number_printed = 0 %}
{% for member in site.data.collaborators %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/team/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  {% if member.site  %}
  <h4><a href="{{ member.site }}">{{ member.name }}</a></h4>
  {% else %}
  <h4>{{ member.name }}</h4>
  {% endif %}
  <i>{{ member.info }} <!-- <br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


## Former Members

{% assign number_printed = 0 %}
{% for member in site.data.former_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/team/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  {% if member.site  %}
  <h4><a href="{{ member.site }}">{{ member.name }}</a></h4>
  {% else %}
  <h4>{{ member.name }}</h4>
  {% endif %}
  <i>{{ member.info }}</i><br>
  <p>Role with Lab: {{ member.role_with_lab }}</p>
  
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Former <a href="https://new.nsf.gov/funding/opportunities/research-experiences-undergraduates-reu">REU Program</a> Interns
{% for year in site.data.former_interns %}


<h3>{{ year.year }}</h3>

{% assign number_printed = 0 %}
{% for intern in year.people %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">

{% endif %}
<div class="col-sm-6 clearfix">
  {% if intern.photo  %}<img src="{{ site.url }}{{ site.baseurl }}/images/team/{{ intern.photo }}" class="img-responsive" width="25%" style="float: left" />{% endif %}
  {% if intern.site %}
  <h4><a href="{{ intern.site }}">{{ intern.name }}</a></h4>
  {% else %}
  <h4>{{ intern.name }}</h4>
  {% endif %}
  {% if intern.info %}
  <em>{{ intern.info }}</em>
  {% endif %}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
{% endfor %}


## Former Visitors
<div class="row">

<div class="col-sm-4 clearfix">

{% for member in site.data.former_visitors %}
{% if member.site %}
<a href="{{ member.site }}">{{ member.name }}</a>
{% else %} 
{{ member.name }}
{% endif %}
{% endfor %}
</div>

</div>

## Administrative Support
<a href = "https://hcii.cmu.edu/people/meagan-bulisco">Meagan Bulisco</a> serves as Administrative Assistant for us and other labs within HCII at CMU.
