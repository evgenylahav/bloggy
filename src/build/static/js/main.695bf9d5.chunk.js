(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),i=(a(40),a(16)),s=a(17),c=a(19),m=a(18),u=a(20),h=a(9),d=a(10),p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Hello, welcome to my blog!"),l.a.createElement("p",null,"Welcome to my blog! In this blog I will publish from time to time topics of interests in the SW engineering world. Specifically: web development, python, clean code and more."),l.a.createElement("p",null,"This web page was developed as part of my full-stack web applications development training and is based on the LinkedIn Learning course: React: Creating and Hosting a Full-stack Site by Shaun Wassel, which is extremely recommended."))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"About me"),l.a.createElement("p",null,"I am Evgeny Lahav - a software developer. I have been programming for a long time but only in the resent years I've discovered the beauty and the complexity of it. I also developed a passion for SW engineering and architecture and spend a lot of my personal time to enhance my capabilities and knowledge."),l.a.createElement("p",null,"The topics that interest me are Python development, JavaScript both as front-end and back-end, software design and architecture and clean coding. Most of the blogs will be around these topics."),l.a.createElement("p",null,"The technologies that were used to develop this blog are:",l.a.createElement("ul",null,l.a.createElement("li",null,"Front-end - ReactJS"),l.a.createElement("li",null,"Back-end - NodeJS"),l.a.createElement("li",null,"Web server - Express"),l.a.createElement("li",null,"Database - MongoDB")),"The web site is deployed and hosted in AWS."),l.a.createElement("p",null,"Being a full-stack application, this blog allows you to upvote the blogs and to comment about them. I will try my best to maintain and enhance this blog as much as possible, within my time boundaries."),l.a.createElement("p",null,"Enjoy!!"))},g=function(e){var t=e.articles;return l.a.createElement(l.a.Fragment,null,t.map(function(e,t){return l.a.createElement(h.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},l.a.createElement("div",null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.intro)),l.a.createElement("div",null,l.a.createElement("img",{alt:"article",src:e.imgSrc,width:"200",height:"100",style:{marginTop:"70px"}})))}))},b=[{name:"full-stack-development",title:"7 Minutes about Full Stack Development",componentName:"FullStackDevBlog",intro:"Full stack developer is a term we hear all over the place. It became one of the most desirable positions \n        for developers in the industry. In this blog I will describe my personal view of this idea of full-stack development,\n        as well as some general concepts and technologies behind it.",imgSrc:"https://hackernoon.com/hn-images/1*9npNPVH7iNJ64Koq7EcW5A.jpeg"},{name:"python-classes",title:"Python: Constructing Classes",componentName:"PythonClassesBlog",intro:"This topic is a corner stone for SW development in general and in O.O languages as Python in particular. There are a lot of general good practices for constructing classes, and some that are specific to Python. This blog will cover some of these concepts. ",imgSrc:"https://s3.ap-south-1.amazonaws.com/atg-storage-s3/assets/Frontend/images/article_image/article-03440000002019214749270.jpg"}],E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Articles"),l.a.createElement(g,{articles:b}))},w=a(8),v=a.n(w),y=a(12),k=a(14),A=function(){return l.a.createElement("h1",null,"404: Page Not Found")},T=function(e){var t=e.comments;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Comments:"),t.map(function(e,t){return l.a.createElement("div",{className:"comment",key:t},l.a.createElement("h4",null,e.username),l.a.createElement("p",null,e.text))}))},S=function(e){var t=e.articleName,a=e.upvotes,n=e.setArticleInfo,r=function(){var e=Object(y.a)(v.a.mark(function e(){var a,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return a=e.sent,e.next=5,a.json();case 5:l=e.sent,n(l);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{id:"upvotes-section"},l.a.createElement("button",{onClick:function(){return r()}},"Add upvote"),l.a.createElement("p",null,"This post has been upvoted ",a," times"))},j=function(e){var t=e.articleName,a=e.setArticleInfo,r=Object(n.useState)(""),o=Object(k.a)(r,2),i=o[0],s=o[1],c=Object(n.useState)(""),m=Object(k.a)(c,2),u=m[0],h=m[1],d=function(){var e=Object(y.a)(v.a.mark(function e(){var n,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:i,text:u}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:l=e.sent,a(l),s(""),h("");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{id:"add-comment-form"},l.a.createElement("h3",null,"Add a Comment"),l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}})),l.a.createElement("label",null,"Comment:",l.a.createElement("textarea",{rows:"4",cols:"50",value:u,onChange:function(e){return h(e.target.value)}})),l.a.createElement("button",{onClick:function(){return d()}},"Add comment"))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Intro"),l.a.createElement("p",null,"Full stack developer is a term we hear all over the place. It became one of the most desirable positions for developers in the industry. In this blog I will describe my personal view of this idea of full-stack development, as well as some general concepts and technologies behind it."),l.a.createElement("p",null,l.a.createElement("i",null,"Note: This blog will not go into coding details.")),l.a.createElement("h3",null,"What is Full Stack Development?"),l.a.createElement("p",null,"When we refer to full-stack development, the usual context is programming in the web environment, and specifically developing the whole parts of a web application by a single developer or a group of developers without a specific separation between different parts of the application."),l.a.createElement("p",null,"To develop a full stack web application we are required to use several technologies. These technologies are usually quite different one from the other and require different skills and knowledge. A developer that can handle all of these technologies technically and conceptualy is considered as a full-stack developer."),l.a.createElement("p",null,"Imagine that a single builder builds the whole house - the walls, the electricity, the water, the plumbing, the floors, the paint, well, you get the picture. It is not likely, for one person to handle all of it. In full-stack development, however, this is exactly what is expected."),l.a.createElement("p",null,"The image below demonstrated the 3 main parts of a full stack application - front-end AKA the client side, back-end AKA the server side and the database."),l.a.createElement("img",{alt:"full-stack scheme",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAADQCAMAAADlEKeVAAABC1BMVEX////y8vLN1t/09PT39/aF2//o6uzx8fL4+frW3ePk5+vt7u+NnKigqrDL1N8lR1vFys5dcH7M0NNBW2wqSl7e4OL/0Vz/cFhSwOvX2twAABKosLcAHiw8SVGzusBhanAAEyRRXmccMD2boqf+3pP/aU/9k4MAAByAh4z+gWlE28Nsdn4AABiLk5m9wsYtPUd0go3+3aD/Y0f/9ez5vbQgMz/+1tAsP0pufYjSzNJqy/N+jZa+5vdl38lJVl+34vcLJjP/zk0AGCja6fH7hXFGXm1/zvCQ3P3av8HjtbOj4fve7fNhdIHN7Oh64NOf5N7D6OP7qpv05N/5r6L2x76W49sAAAb+5rz9jn3OwrGnAAAQlUlEQVR4nO2dDWObNhrHIVIBI+NhEi4j2Dgxl8abA+F6de2V1PHStb1rsm7r7nr3/T/JSQJs3gTY8WuOf+uYN8n68TzSIwmMOa5WrVq1atWqVatWrVq1atWqtaokLMae3HVJykuRn0XswGyqnHyk2K7kJimRJJYsvzjF8kb9/szj9BGgq0OH45QeXdT7IH6gPR5NTY4b90djnETGW/xpVCCnO+o6+GhnQFbVsRhsd0aj0U1PI4vaCCfqI20c7BnanEU29CXOGIe5CAP8CRZZErs4YbBo9mlyt+/ivxbJBBfUGMlRLvasf3PT79hLMV/0VNXVOe2bEKx6uKhduhhtCsvfsQxnhjhNdc9tVcXlRP2OS3eJ47FluDdTXAhytqxrJ0wzvNANdXitkI0zV1VVTrimSdC5xdkjvAEDqdeIHmx0eqph35OzJpybhuFc4TPM9Tr0NPY6Q/xXGblBkvuLoLADTnC1iwvNjZe0AvMgADxDGeazWE7ivTlfPlPpmzl1go/ujYlDSGrAbH6bn3R6Cjj7yiDMgTUvhjRpB2C/CQ5Sz4NPHtE9xpVFmIlxnT7OdOz1Sd73kylhvgmTzGb2ouy94VLA1ZnR+ZxECpm7tkyP0M/cGKR9ZnGxVaLxkDAHFcW6J+/TIZdmtq6CTxvcRMwa3iJ0DHLG1JlG0is3UpjEPTc2z8wN7x05waxfyRgbLyjn83o/7DnnbixNb44R2RmQ/YjkkGIeToNV90oPmdUrXJNm0gX+jMFQvNdjdj6TaBlXZu5ZpimWM0vO7PxCizE707Dcg/ECMqriCWalI2Fm0zJJuh7ephB/tUeWZWpz5mlYcuNaC5l7+APMMWfjt7HFkUZMGZlBkjMgjZ0nMI/G476xYB5kmKNQAKwuNWLI3MdNk/wNu9hgtICcdqexuBExzwjz+GZEVt2OGJTVno1Ho8Gc+SIsuU6YZ0PH6c6wZQc9XMOBjAtHXEohSYaEWcTnxlid2QkBWczK1f35LDx42p0za1e0Yg6Svj2Uxt1FhIv7dj/cJs0sdEYqY9q3u+HqNfbtWW/g2STgTXHpZq7SJVnHfVskgfCp9Vk/0wMqJ80s6boeOfmgP2f2ZlOsG9yq6ItWC0PiwCUmmaWbwaINI6ZTqGOkmN2oDRtHbRjRCEeLwaCHbWx3Y20YYea6Tu9pzNyIvmtXWowZxY6jJeoOI2Ywcywi4u29gNIIIDF0dIrCWHUei1U42/6Nk2QOzsaYFl07t2LMdAFHJiM4aQk7c3pn9ERm92qoavaMpHduVBdHee3act3ohOvXA029IFWMk75hZus8jLeU8sY0rCluZikkXg2hhxcG7pNckcbdmuHMghg37lCXskcu3aLe4z0YyphduJrdGXAxZvUa5wT6BJXELCVK8o2e5KADswLzMIq7Wm/WmdKOhzLrdK5tTsdv993oOOtiNhsG/k9O+yA6VcRakj3ujAd61PdEXSXY6XTu72c9SqrizDod6jh20JOxyAZsfQPvOSebhMGoM6XNvtg3QmbaLyX9YY7Hn+rSJLjv2QlPOC37IOr21apVq1atWrVq1apVq1atWrVq7askCAEfCQC45NXDg5MUw40JPFtuCebxPmfsImAikQflmRyUyohDY++6mGtUNeLnRC1VJiaCuy7uOlTdyM/G1LnB6Vmbejm/fhamXtavnwH0qsgHDL1ABgDQF1mKXtE63kPew/0HDh0bSeiqCzTXwL1tVYNARwAYuqqqwR5kAF7U6f64qXdd/FUUA4C+6cK26qho4ioOp3gQTnTr0cV7bMUFbQvqPnrU7GYc+gAtHW+xYVPm4ITTFFOFki+YvsVNgOBLeCRpG5zk+YLsI1+SPP2w3ZtPMHtNru03BV8H0FRNzRE8XvAhQtD2fOgJnoCZIVTURDQ/tDidaIWhYyDJa6qcrUHJ0U0N+YRZchxkazz0gIqXfOwCerIHc1jjy2TZoW8A+Ag9TZholscpKtROgIBrNYS2pYGJCB0fTXTTT3fado2xjFLdL6DhlloDSIOC5eI2WwBQxWskZBmmiRfIimW6IM18SN6dKvo8AgdBmL6CjTyAMNwE8uaNDse7V+9/ZU7WrlEqa23Ih+PdKwwf2do1TEWtE/lAavT6ajPRYdTotSIfhqGZUyMAFonZCByCoVmFB4ZSJIMJvWugCmIhix9OvmPq5KTNZN5/52a5NhCOj1WmzALm/XdupmtjZnYqvYB5/52baS3MjL30P38N9fdEqkLmvXfuEua//fwXqp//LrciCSXM+97/ZEeqkPkvEbMoRwIlzPteoZmdsAyzJEaSSpjF8o/dqdit7+q+ve+NmFiZWQKRyuy878zMcofMDBUz73nDvRHmPW+4S5mlSNyb/76k+u+bZ868aLnQm1enVK9eP3NmIISSpTeXAfPl82dGIfT/D3OObz97ZinWhv0Q6l/PmZmd7PnGZ1VjyTpk5qL+9gl7cqhobmjv+55sZtQslHK4zAUT+kcMNRr0/+GOnwtu/GMgt2S+JaDWETvhnjfbRVcxjlr5zC2yo1Vg5z1vwoouSopRtxMZZiQ92iawz9W+V+fiK3Qg+AfdObPKvmZzQMzld/IC2VwIlTPvfXWucFkSuDFmtZx576tzlcvPQlzlp2jXQFVUThFT6cGH4NocJyI6REZI5CtB5Z0TPswE57JrnFJJEAA8RCZhN+hiyQK/FDc+GMm4W3YURfMGAHB/TS1FbPEOB/7XkFFFbABEuYE7KbHOSyus8GAPuaUFFZAzXa2GzJdTA15uZLtqsf371YCn2uqcDuZRoyQSA1HP6Zy2UOKg/TF2JjoJeT3rVhE1EBu5nfFML3w/qHPiMcgHONKZzJnqkPHsfaLOtR3KJ2gdCXmHA4E15JJzDhd33TFjdLpwvGJQN3IaM9bBzHmEnZqaPRPE8G6sVK0GiGHkfM8OtTPiwiEUk6SV8G/s1yy1civCbk1dPGpkVOmjZC1lVgJGZd4xdMlAuciA83q6OvJOoEuHjCA3Siegi5AL5sd2BV3lJu0CaPpFqqchbx260ne5i9ybeO4THDvQdgN1lRLROMSkEop2VkPeLnS1EmGJOSOlUGzk/N5arraHvMwkgM6C9llGbojV89/aZNlSD2Zgdabt75p5fbVWZb8OtK12bJkyEek5bOrx8Yn1RCNTbQd56Wk9gLK1enJ8fNxOG5ox7irOfCvMy5Yqj9o6wcwnSsrGVWaQMtpG273aNwMxdbxet4+JPsSRG8JKE8Pb8O7VnixDqHmhQedBscwTynzSDNuto9VMHGjzhn7KF0Dp3DWpth+OQ5Ez0GgIqwMTbZz5KYXjgzl7odH0Pe9x4vm+JqDl5vzztGlDV5imLmUIJlGCP6ljxQIxnWHTTXcp8fsXL158KqaO9TpT89fsGSUiZiDbLHLhEJJcZ4SfMfOLh6JLjokhZOLpHHldcHIhZ37pipHjZjtjRQYEt59ub18E+vz+7hPzuIQ1y5hlGb+Ojv75zwLmzTp3IfKLpD4zvo8iJpjizp3D3OA4HLiFf7x69VPBLWSbRC4IzrQiE73FCqHzD0xMFSSGFHl2lqSjBt/QfvilwM4bbbmLqvMD5fw+0NsC5mRD1ShhrlKfN+rcBcg8/BQiv31L/uKV9/kP501BxQ4SM8QJ+oI5st0wg4cA+Q433w8fqaUZISs52khEKyQXaEe3zRUg8zhIYQO/J+4PwEdq6Ic8aJQaV8ZRkFCkAubNVWh2dQ4a7e+//xQcAh6CKp0TrzITvLFGTDxqFanAtzcXoQuY7wLm27BY8GPQjKHskelLzTGSlduwnTK/TzPTZ0kljkz3L0uYoXSkl8aqDTbcBZ+ZsjN4GzALf775+uebxIXI9DxRMTPtk8CyPslOmPmHz5T5beAK8H3QcN/+8ery8vJV3NLZK9OLfYy+Z6Os78lvsOEu6m3DW9puf4bkZuWHIEB/fX15eon/v4xZOmPnEuZ8j9gPZh4F8fnj7cP7u6An9vnlq9PLP17/grljbVkBc3Zf0uR7xww+LbqeQaS6fXl5+VqS+NPT068xLrZvk+fjFang03fCHA6r3i662y8+vbm8/Ap46eXly8XgpKg+83KjSNnAt2PmcIwR112enbP1Od5uF/l2UZ9kc+128SwJSiPDP2h9/uH08nRhoiVjFd7fIlNnP/20o/hccnMBukXoLvDq9w8PtwigN6e03f7za6zdTl+9KmHG8VmGcll83lw/rGw+HwQhC3e/3v345d2PvwEJW/o0FZ8L+tts5p8uL3fU96wyuS3c3d3d/v4j0Tsk8v/6yr/+mjwgzbzYlcdM7l8v9+3dMpPZz3cEmPz5LXqMelzs8XNxn2T/5gwWEn/FtL8D8G8MnlPK1DxJK35IMlap6lHVWLVB5opfMfhCYREhz9nLng9LfCMHQFMxKnZJNjkfVvHRne9+fCcC8Cvx7Zy9yQF0tkM5Z3QtHZbzEm10Ur8S8gP27S+//oor9JfcyaGEa2dnfHQjEPGHcNEouf9go1fpKjk3+O0dbbcxeO4t6gk7Z/bOvzRL9lrRCvN5VVSbRK76O1QPAXK+SyYidKYtBoIVihzlhsvFX6vc8M1DlZiJpX//7UteC0aECl0bRM97xSMwufQpr1QbvgBd8fo4yMyDxXc22K6dzqTSh20WeT0PXV4493I3wDG08fvi1lFIvpKZK2vTyGsxdNSKVbpLu1RbuP1xDaWMDN0qjkAVtXnk1W8Qiykw9JK3s+ZL3Mpdruvwx6DpXkNG27rJNfOxQfykv+1BFgEfjB9JjKWXKelSUigbm8MwDGmAxmlAlDEMPyKbC7+1W/Uzn2w7Li6RRW7YVBwNWBCYpMCm04QWD5DLNx0ldY8yaKQbMGg5toGzMZHuN30ZmiIQHAdvASY+nZZj8LZvZgck20FOezdAE0h+eaptQuipgkVWSV8RTnQBtm1J8AVP1B7TxW2kGjDoCfKjDuS2BdCjAPQPLtQd/hEB44MKXUUwBA9lv028LeSUd2Nm5AvQUn2g+xBAfuIbkHQhPYRftobob1P56Qfmp9tCfDjUbMnU8METABXDg7ov+AA2DV/SJgY+d9ku6Ba/hJLwbiC2TUzp4eIaNobl2xP8R1XBxLO5iejplNnWQKq0KWhyiowm53G2gZmBxzUF/dH0Bd7nHAHqTQe1fTd93raHnIQGyON0R/hg+474KEEgesYE4QE/8KAEJ7zuOcjnpMfkEBimzxxmFiXT0j/YnsJNoNa2J6bc5FRLe7QnFoRcW/bTLcmWv1QW+3SA2uZEU1SEPOR6iocmnPGIsJNPbAVOELR8fIBvJn0jc+Yws2J75BfNhIn0SN7RRG+bj7KvC4Ln+k0btZWknbf+hJr4lLVuCBA32gDxUDAAwIskDAHBMPAyfqcH5JU24S6CoUOSFr+E4F3UDTFYgjrepxu7/o2+OPT8hzGTv8fF+L3MWGkT0GHa8JFbQTo+vhTPRdzJc4hWHm2AdWey/9Bw/ZlsUSsNN9LxZS2ZbFNLjzfyXHItmWxR0nJD4HyXXNK/d/9UliWsxLbPWjLZoqSKBS5+LtRaMtmiqlCXFnYtmWxVJVWyWhUsy2SviImk/BKLS5WVkcleAoeSwt7hvDEHK3ijlB4mg318MF5KkiRBCKWnGYbmAaUn5lKrVq1atWrVqlWrVq1atWrVWlH/A/h7tR+GRPSJAAAAAElFTkSuQmCC",height:"300",width:"300"}),";",l.a.createElement("p",null,"There is also a fourth domain which is becoming more and more popular these days - publishing our application, specifically when using the cloud services, which requires yet some more knowledge and expertise that is quite different from the skills required for the application development."),l.a.createElement("p",null,"So, what do you need to become a full stack developer? Which languages, frameworks, tools and databases? The following sections will try to answer that question."),l.a.createElement("h3",null,"Front-End Technologies"),l.a.createElement("p",null,"The front-end part of the web application is often called ",l.a.createElement("u",null,"the client"),", to represent the one part of the application that is accessible to the user (client) for performing actions and getting information. Front-end development takes care of the user interface (UI), including the appearance, the styling, the user experience (UX), the responsiveness of the UI and of course the content."),l.a.createElement("p",null,"It is not possible to be a serious front-end developer without having a solid knowledge in these three technologies:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.w3schools.com/html/",target:"blank"},l.a.createElement("b",null,"HTML"))," which is responsible for the content of the website."),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.w3schools.com/css/",target:"blank"},l.a.createElement("b",null,"CSS / SCSS"))," which is responsible for the stying and the appearance of the website."),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.w3schools.com/js/",target:"blank"},l.a.createElement("b",null,"JavaScript "))," which is the engine behind and provides the responsiveness and the flexibility of the website.")),"However, it doesn't end here. To develop a modern website, it is very recommended to have a solid knowledge in at least one of the three most famous JavaScript based frameworks:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://reactjs.org/",target:"blank"},l.a.createElement("b",null,"ReactJS"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://angular.io/",target:"blank"},l.a.createElement("b",null,"Angular "))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://vuejs.org/",target:"blank"},l.a.createElement("b",null,"Vue")))),"There are others, but these three are the most popular and recommended."),l.a.createElement("p",null,"Knowing all of the above is good, and it will allow you to start doing some nice things in the front-end world. But there is more. A bigger and more complicated application will require to know some more concepts and technologies.",l.a.createElement("ul",null,l.a.createElement("li",null,"State management like ",l.a.createElement("a",{href:"https://redux.js.org/",target:"blank"},l.a.createElement("b",null,"Redux"))),l.a.createElement("li",null,"Testing frameworks like ",l.a.createElement("a",{href:"https://jestjs.io/",target:"blank"},l.a.createElement("b",null,"jest"))," and ",l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/airbnb/enzyme",target:"blank"},l.a.createElement("b",null,"enzyme")))),l.a.createElement("li",null,"Mock server to imitate the server without using an actual one. Read more about mock servers ",l.a.createElement("a",{href:"http://www.mock-server.com/",target:"blank"},"here")))),l.a.createElement("p",null,"While HTML and CSS are rather straight forward and easy to learn and understand, JavaScript is different. It is a rich, advanced and fascinating programming language to learn with a huge community of users and information over the internet. Investing time in learning vanilla JavaScript, therfore, is advised, before moving on to the fancy front-end frameworks and the complementary technologies as stated in this section."),l.a.createElement("h3",null,"Back-End Technologies"),l.a.createElement("p",null,'If front-end development is the "face" of the application, back-end development is its "brains" and "internal organs". It gets orders from the user, generates responses, makes queries to the database, performs calculating algorithms, scrapes web pages and many more. Basically, all the business logic of the application is handled in the back-end. Back-end development is also known as server-side development, as it develops the part of the application that serves clients\' requests.'),l.a.createElement("p",null,"Front-end development requirements are somehow specific, as you can't get around the technologies mentioned in the previous part. Back-end development is much more diverse. Many programming languages have the web server capabilities, so there are a lot of choices. Here are some of the most popular ones:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.java.com/en/",target:"blank"},l.a.createElement("b",null,"Java"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.python.org/",target:"blank"},l.a.createElement("b",null,"Python "))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://rubyonrails.org/",target:"blank"},l.a.createElement("b",null,"Ruby on Rails"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.php.net/",target:"blank"},l.a.createElement("b",null,"PHP"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://nodejs.org/en/",target:"blank"},l.a.createElement("b",null,"NodeJS")))),"So, what to choose? Well, it depends on different things."),l.a.createElement("p",null,l.a.createElement("u",null,"Application:")," there are programming languages, that are commonly used for certain things. For example, if the main domain of the application is in the Machine Learning, Deep Learning and Artificial Intelligence fields, then it would make a lot of sense to use Python as your main server language."),l.a.createElement("p",null,l.a.createElement("u",null,"Prior knowledge:")," if the application domain doesn't require specific libraries, the logical choice for the server language would be just a language that the programmers are comfortable with."),l.a.createElement("p",null,l.a.createElement("u",null,"Single technology:")," to make things simpler for the full-stack developers, one of the most popular choices for the server side is NodeJS. It is based on JavaScript, it is open source with a great community of developers behind it, and it requires to master only a single programming language and its frameworks - JavaScript (again??)."),l.a.createElement("p",null,"Server side programming organizes the whole app and connects between its different parts. A typical back-end flow would be to listen to the client's requests, generate some action (like approach the database or trigger some action like a calculation algorithms or web scraping) and send a response back to the client."),l.a.createElement("h3",null,"API"),l.a.createElement("p",null,"One of the most important and typical tasks in web development is determining the interfaces between the back-end and the front-end sides. When a web app is developed by a single developer (i.e. full stack developer), this task becomes easier, however it is still extremely important to define and try not to change along the way, unless it is mandatory."),l.a.createElement("p",null,"The most commonly and widely used API is called ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"blank"},l.a.createElement("b",null,"REST API")),". This API is used to pass data between back-end and front-end. For example, if a user triggers an event (like a button click) it can be used to generate an API request from the front-end to the back-end. The back-end will process the request based on the data that it got, and will issue a response, that will be sent back to the front-end code and usually generate some change in the UI. The requests and the responses are generated in a ",l.a.createElement("a",{href:"https://www.json.org/",target:"blank"},l.a.createElement("b",null,"JSON"))," format which are very easy to handle in JavaScript and are very readable and easy to understand."),l.a.createElement("p",null,"Another common way to pass parameters from front-end to back-end is by using query parameters, also known as URL parameters. These values are passed within the URL format with specific keys and can be easily handled on the server side."),l.a.createElement("p",null,"Proper definition of the API allows the developer to work independantly on the front-end and the back-end side and minimize contact switching. It is especially correct when using a mock server to imitate the real server, what makes the integration between the front-end and the back-end much simpler."),l.a.createElement("h3",null,"Databases"),l.a.createElement("p",null,"Every modern and dynamic website, will eventually require using a database. This part is often overlooked by developers who tend and prefer to focus on programming and programming languages but failing to properly define and handle the database part of the app, could cause it to become unreliable and unusable."),l.a.createElement("p",null,"Examples to the usages of databases are:",l.a.createElement("ul",null,l.a.createElement("li",null,"Keeping the user\u2019s personal data (like bank account) safely"),l.a.createElement("li",null,"Persistency of users' actions in the web app, like commenting, liking, quoting, ..."),l.a.createElement("li",null,"Storing personal images and fetching them on demand"),l.a.createElement("li",null,"Video on demand services of the likes of Netflix, Hulo and others."))),l.a.createElement("p",null,"There are two main types of databases: relational (SQL) and non-relational (NoSQL). There are many good databases in each of the types. The most common for the SQL type are MySQL, Oracle and Postgres and for the NoSQL type are MongoDB, Redis and others."),l.a.createElement("p",null,"SQL based databases are basically a collection of tables with schemas, that represent the attributes and the data types within the table. You can read, write, update and delete the data. These databases are well maintained, documented and are very stable."),l.a.createElement("p",null,"NoSQL based databases have started to gain popularity with the increased complexity of the web applications. The more the data is complexed, the harder it is to have it structured and organized, and thus, the usage of NoSQL databases is more convenient for that matter."),l.a.createElement("p",null,"There are many sources over the internet that can help us to pick the right one, but in general, the selection of the database should be based on the type of data that we expect to have. Will it be well structured, like bank accounts, then using the stable and safe SQL databases would be advised. For IoT apps or large analytics, which would require complexed data structures, it would probably be better to use NoSQL."),l.a.createElement("h3",null,"Summary"),l.a.createElement("p",null,"Full-stack development is fascinating. The amount of challenges is huge. The technology is constantly changing and improving, and you must be on the top of your game all the time. You need to understand and work in different environments, and invest a lot of time in design and planning. The reward of the effort in the end is seeing your app running on the World Wide Web. For those who are interested to try it, here are a couple of links for courses to get started."),l.a.createElement("h3",null,"Links"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site/react-for-full-stack-solutions",target:"blank"},l.a.createElement("b",null,"LinkedIn Learning Course 1"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/learning/learning-full-stack-javascript-development-mongodb-node-and-react",target:"blank"},l.a.createElement("b",null,"LinkedIn Learning Course 2")))))},x=a(248),I=a(249),N=a(32),O=a.n(N),C=(a(236),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.createElement("div",{"data-test":"code-snippet-div"},n.createElement(O.a,{language:this.props.language},this.props.code))}}]),t}(n.Component)),L=function(){return n.createElement(n.Fragment,null,n.createElement(x.a,null,n.createElement("h2",null,"Intro"),n.createElement("p",null,"This topic is a corner stone for SW development in general and in O.O languages as Python in particular. There are a lot of general good practices for constructing classes, and some that are specific to Python. This blog will cover some of these concepts. Enjoy."),n.createElement("h3",null,"Documentation:"),n.createElement("p",null,"What does the class do. Recommended to use: docstrings"),n.createElement(C,{language:"python",code:'class Circle:\n    """\n    advanced circle toolkit\n    """'}),n.createElement("h3",null,"Initialization:"),n.createElement("p",null,"Use the __init__ method to initialize the instance variables. Note: __init__ is not a constructor (more about it later)"),n.createElement(C,{language:"python",code:'    def __init__(self, radius):\n        """\n        __init__ is not a constructor. its job is to initialize the\n        instance variables\n        """\n        self.radius = radius # instance variable'}),n.createElement("h3",null,"Class and instance variables:"),n.createElement("p",null,"Opposed to other OO languages, instance variables and class variables are not protected, and are open for users' modification. In Python, all doors are opened."),n.createElement(C,{language:"python",code:'class Circle:\n    """\n    an advanced circle toolkit\n    """\n    version = "0.1" # class variable'}),n.createElement("p",null,"Class variables have the same values across all class instances. Defined after class definition. Instance variables have different values for each object instance."),n.createElement("h3",null,"Classes inheritance:"),n.createElement("p",null,"Every class is able to inherit from another class and by that to either use, extend or override its functionality. When not defining a specific functionality in the child class, we're using the functionality of the parent class (as for example the __init__ and perimeter methods in the example below). When using the parent class method and adding some functionality to it, we're extending the functionality (as in the perimeter method). When replacing a parent class method with a method of our own, we're overriding its functionality."),n.createElement("p",null,"Defining a perimeter method in the Circle class:"),n.createElement(C,{language:"python",code:"    def perimeter(self):\n        return 2 * math.pi * self.radius"}),n.createElement("p",null,"Defining a new class and overriding the perimeter method:"),n.createElement(C,{language:"python",code:'class Tire(Circle):\n    """\n    Tires are circles with a corrected perimeter calculation\n    """\n    def perimeter(self):\n        return Circle.perimeter(self) * 1.25'}),n.createElement(I.a,{variant:"info"},"When writing classes, expect them to be inherited and modified"),n.createElement("h3",null,"Alternative constructors:"),n.createElement("p",null,"Sometimes we wish to provide several options to construct a class. One way to find those different constructors is by looking for a from_ method. For example:"),n.createElement(C,{language:"python",code:"dict.fromkeys()"}),n.createElement("p",null,"In our example, we are adding a new method and decorating it with a @classmethod decorator."),n.createElement(C,{language:"python",code:'@classmethod\ndef from_bbd(cls, bbd):\n    """ construct a circle from a bounding box diagonal """\n    radius = bbd / 2.0 / math.sqrt(2.0)\n    return cls(radius)'}),n.createElement("p",null,"Note that when returning, we are using the cls instance and not Circle, because, when our sub-classes will use it, we don't want to explicitly return Circle, but the same class type they were using to construct (like Tire for example)"),n.createElement("h3",null,"Adding functionality:"),n.createElement("p",null,"To attach functions to classes we use the @staticmethod decorator."),n.createElement(C,{language:"python",code:'@staticmethod\ndef angle_to_grade(angle):\n    """ convert angle in degree to a percentage grade """\n    return math.tan(math.radians(angle)) * 100.0'}),n.createElement("p",null,"One of the main reasons for attaching functions in such way is to improve the findability of the function and to make sure that it is used in the right context"),n.createElement("h3",null,"Class local references:"),n.createElement("p",null,"Let's assume that we want to update the functionality of our perimeter method. We can just change it, but then we will break the functionality of all the classes that inherit our class. The solution to this issue is to use dunders. In our case, we could define __perimeter method, and then use it within our class. The class local references will not be available for out of class context structures."),n.createElement(C,{language:"python",code:"# usage - self.__perimeter()\n \n \n def __perimeter(self):\n     return 2 * math.pi * self.radius"}),n.createElement("h3",null,"Properties:"),n.createElement("p",null,"Now we have a new request. We need to remove the radius instance variable and to introduce a new one - diameter. One way to do it is to break all our code and API. A better way would be to use properties. A property decorator actually converts dotted access to method calls (which means it replaces a getter) and the radius.setter decorator creates a setter. This way, each time the radius is called, within our class or from outside, it will initiate these two new methods, and the rest of the class remains unchanged."),n.createElement(C,{language:"python",code:'@property\ndef radius(self):\n    """ radius of circle """\n    return self.diameter / 2.0'}),n.createElement(I.a,{variant:"info"},"The main purpose of properties is to avoid using getters in setters in Python."),n.createElement("h3",null,"Summary:"),n.createElement("p",null,"Here is a summary of all the concepts that are supposed to make our classes better:"),n.createElement("ul",null,n.createElement("li",null,"Instance variables for information unique to an instance"),n.createElement("li",null,"Class variables for data shared among all instances"),n.createElement("li",null,"Regular methods need 'self' to operate on instance data"),n.createElement("li",null,"Class methods implement alternative constructors. They need 'cls' so they can create subclass instances as well"),n.createElement("li",null,"Static methods attach functions to classes. They don't need 'self'. Static methods improve discoverability and require context to be specified"),n.createElement("li",null,"Dunder methods are used for a class local references, that is used only within the class"),n.createElement("li",null,"A property() lets getter and setter methods be invoked automatically by attribute access. This allows Python classes to freely expose their instance variables."))))},W=function(e){var t=e.match.params.name,a=b.find(function(e){return e.name===t}),r=function(e){var t;switch(e){case"full-stack-development":t=P;break;case"python-classes":t=L;break;default:t=""}return t}(t),o=Object(n.useState)({upvotes:0,comments:[]}),i=Object(k.a)(o,2),s=i[0],c=i[1];if(Object(n.useEffect)(function(){!function(){var e=Object(y.a)(v.a.mark(function e(){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),!a)return l.a.createElement(A,null);var m=b.filter(function(e){return e.name!==t});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,a.title),l.a.createElement(S,{articleName:t,upvotes:s.upvotes,setArticleInfo:c}),l.a.createElement(r,null),l.a.createElement(T,{comments:s.comments}),l.a.createElement(j,{articleName:t,setArticleInfo:c}),l.a.createElement("h3",null,"Other Articles:"),l.a.createElement(g,{articles:m}))},z=function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/articles-list"},"Articles"))))},q=(a(244),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(z,null),l.a.createElement("div",{id:"page-body"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",component:p,exact:!0}),l.a.createElement(d.a,{path:"/about",component:f}),l.a.createElement(d.a,{path:"/articles-list",component:E}),l.a.createElement(d.a,{path:"/article/:name",component:W}),l.a.createElement(d.a,{component:A})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){e.exports=a(245)},40:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.695bf9d5.chunk.js.map