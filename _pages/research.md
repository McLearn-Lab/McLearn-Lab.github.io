---
title: "McLearn Lab - Research"
layout: gridlay
excerpt: "McLearn Lab -- Research"
sitemap: false
permalink: /research/
---

<div class="container-fluid">
<!-- <div class="row well">
<form class="form-inline" role="search">
<div class="col-xs-9 col-md-9">
<input class="form-control" type="search" placeholder="Search for a project" aria-label="Search">
</div>
<div class="col-xs-1 text-right">
<button class="btn btn-outline-success" type="submit">Search</button>
</div>
</form>
</div> -->
{% assign number_printed = 0 %}
{% for project in site.data.research %}
<div class="row well" id="project-{{ project.title | replace: ' ', '-' }}" style="border: solid;">
<div class="row">
<div class="col-sm-6 clearfix">
<h4><b>{{ project.title }}: {{project.description}}</b></h4>
<div class="text-center">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" alt="Project Image" class="project-img-sm" />
</div>
<h4><a href="{{ project.site_link }}">{{ project.site_title }}</a></h4>
{% for grant in project.grants %}
{% if forloop.first %}<b>Grants:</b> {% endif %}
{% if grant.link %}<a href="{{grant.link}}">{% endif %}{{grant.title}}{% unless forloop.last %},{% endunless %}
{% if grant.link %}</a>{% endif %}
{% endfor %}
<a href="#publications-{{ project.title | replace: ' ', '-' }}" id="publications-{{ project.title | replace: ' ', '-' }}-toggler" data-toggle="collapse" class="pubs-toggler" aria-expanded="false">
Representative Publications
<span class="triangle triangle-right"></span>
<span class="triangle triangle-down"></span>
</a>

</div>
<div class="col-sm-6 clearfix"  >
<img class = "col-sm-6 clearfix" src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" alt="Project Image" class="project-img-lg" />
</div>
</div>

<div class="col-md-12">

<div class="collapse publications" id="publications-{{ project.title | replace: ' ', '-' }}">
{% assign number_pubs = 0 %}
{% for publication in project.publications %}
{% assign even_odd = number_pubs | modulo: 2 %} 
{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
<span><pubtit>({{publication.year}}) {{ publication.title | markdownify | strip_html }}</pubtit></span>
<img src="{{ site.url }}{{ site.baseurl }}/images/publications/{{ publication.image }}" class="img-responsive" width="33%" style="float: left" />
<p>{{ publication.description }}</p>
<em>{{ publication.authors }}</em><br />
{% if publication.notes %}
<strong style="color: red">{{ publication.notes }}</strong>
{% endif %}
{% if publication.link_url %}
<strong><a href="{{ publication.link_url }}">{{ publication.link_display }}</a></strong>
{% else %}
<strong>{{ publication.link_display }}</strong>
{% endif %}
{% if publication.pdf %}
<a href="{{ publication.pdf }}" style="color: black"><i class="fas fa-file-pdf"></i><strong>[ PDF ]</strong></a>
{% endif %}

</div>

{% assign number_pubs = number_pubs | plus: 1 %}

{% if even_odd == 1 or forloop.last %}
</div>
{% endif %}
{% endfor %}
</div>
</div>
</div> 
{% endfor %}
</div>
