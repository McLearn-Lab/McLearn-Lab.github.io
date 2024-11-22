# McLearn Lab website

This is the website of our academic research group at CMU
https://www.cs.cmu.edu/~bmclaren/mclearnlab/

We used the Allan Lab template to make this.
https://www.allanlab.org/aboutwebsite.html

# Editing instructions

# 1: Install Dependencies
1) <a href="https://git-scm.com/downloads"> Git</a> for checking out these files and uploading your changes.
2) <a href="https://www.ruby-lang.org/en/downloads/"> Ruby version 2.5 or later </a>, the language the engine uses. (You don't need to know the language just have it installed)
3) <a href="https://jekyllrb.com/">Jekyll</a> the Ruby library used that allows for easy-to-use interfacing for static sites. I recommend installing this after you've cloned the repository to your machine (step 2). 

# 2: Clone repository 
You will need to clone this repository onto your machine. 
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

# 3: Launch development server 
To launch the development server, run 
`jekyll serve` 

click the link in terminal to pull up a development version of the site.

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