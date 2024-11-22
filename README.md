# McLearn Lab website

This is the website of our academic research group at CMU

We used the Allan Lab template to make this.
https://www.allanlab.org/aboutwebsite.html

# Editing instructions

# 1: Install Dependencies
You need <a href="https://git-scm.com/downloads"> Git</a>, Ruby and Jekyll. 

# 2: Clone repository 
First, you will need to clone this repository. 
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

# 3: Launch development server 
To launch the development server, run 
`jekyll serve` 

click the link in terminal to pull up a development run of the site.

# 4: Edit
Edit _data/* to edit the content and corresponding images (todo flesh out these instructions)
Refresh to see changes

todo:
Carousel
News
Team
Administrative assistant
research

# 5: Package for deployment
Before sending the site into the server, you need to package it by running
`jekyll build`
This packages a static site nicely into the folder `_site`

# 6: Deploy
First, you will need to make sure you have read/write access to the directory space in cs.cmu.edu for the site. Talk to Bruce about this, he will request from IT. 

To deploy, (if you are not Bruce McLaren), run 
`scp -r _site/* YOUR_USER@linux.gp.cs.cmu.edu:../bmclaren/www/mclearnlab`

If you are bruce, it is 
`scp -r _site/* YOUR_USER@linux.gp.cs.cmu.edu:/www/mclearnlab`

When prompted, enter your password

This command securely copies (scp) recursively (-r) packaged site (_site/*) to the mcLearnlab directory in Bruce's cs.cmu space (YOUR_USER@linux.gp.cs.cmu.edu:../bmclaren/www/mclearnlab)

# 7 update github
Make sure to keep github up to date in case anyone else goes to edit the site. 