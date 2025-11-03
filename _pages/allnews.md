---
title: "News"
layout: textlay
excerpt: "Allan Lab at Leiden University."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<span style="font-size: 1.8em;"><em><b>{{ article.date }}</b></em></span><br>
{% if article.image %}
<div class="text-center my-3"><img src="{{ site.url }}{{ site.baseurl }}/images/news/{{ article.image }}" class="img-fluid" style="max-width:80%; height: auto;">
</div>
{% endif %}
{{ article.headline }}
{% if article.link %}
<a href="{{ article.link }}">{{ article.link_text }}</a><br>
{% endif %}
{% if article.link2 %}
<a href="{{ article.link2 }}">{{ article.link2_text }}</a><br>
{% endif %}
<br><br>
{% endfor %}
