---
title: "McLearn Lab - Research"
layout: gridlay
excerpt: "McLearn Lab -- Research"
sitemap: false
permalink: /research/
---

<h2>Research (for a full list of publications, <a href="https://www.cs.cmu.edu/~bmclaren/publications.html"><b>click here</b></a>)</h2>


<div class="container-fluid">
{% for project in site.data.research %}
<div class="row well" style="border: solid;">
<div class="col-md-6">
<h4><b>{{ project.title }}</b></h4>
<p>{{ project.description }}</p>
<a href="{{ project.site_link }}">{{ project.site_title }}</a>

{% for grant in project.grants %}
{% if forloop.first %}<b>Grants:</b> {% endif %}{% if grant.link %}<a href="{{grant.link}}">{% endif %}{{grant.title}}{% if grant.link %}</a>{% endif %}{% if forloop.last %}{% else %}, {% endif %}

{% endfor %}

</div>
<div class="col-md-6">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" alt="Project Image" class="project-img" />
</div>
</div>

{% endfor %}
</div>
