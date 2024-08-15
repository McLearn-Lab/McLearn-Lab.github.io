---
title: "News"
layout: textlay
excerpt: "Allan Lab at Leiden University."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p><em>{{ article.date }}</em><br>{{ article.headline }}
{% if article.link %}<a href="{{article.link}}">{{article.link_text}}</a>{% endif %}
</p>


{% endfor %}
