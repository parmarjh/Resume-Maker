(this.webpackJsonpresume_maker=this.webpackJsonpresume_maker||[]).push([[0],{17:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},59:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(18),o=s.n(r),a=(s(51),s(52),s(10)),i=s(4),l=(s(17),s(0));var p=function(e){var t=e.photourl,s=e.setphotourl,c=e.name,n=e.setname,r=e.subtitle,o=e.setsubtitle,a=e.userdesc,i=e.setuserdesc,p=e.email,j=e.setemail,h=e.contact,d=e.setcontact,m=e.address,x=e.setaddress,u=e.github,b=e.setgithub,O=e.linkedin,f=e.setlinkedin,g=e.portfolio,y=e.setportfolio;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("h1",{className:"heading",children:"Information"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Photo"}),Object(l.jsx)("input",{type:"text",placeholder:"Url here",value:t,onChange:function(e){return s(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Name"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Name",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Subtitle"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Subtitle",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box textarea",children:[Object(l.jsx)("span",{className:"details",children:"Description"}),Object(l.jsx)("textarea",{type:"text",placeholder:"Description",value:a,onChange:function(e){return i(e.target.value)}})]})]}),Object(l.jsx)("h1",{className:"heading",children:"Extra Information"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Email"}),Object(l.jsx)("input",{type:"text",placeholder:"Email Address",value:p,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Contact"}),Object(l.jsx)("input",{type:"text",placeholder:"Number",value:h,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Address"}),Object(l.jsx)("input",{type:"text",placeholder:"Address",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Github"}),Object(l.jsx)("input",{type:"text",placeholder:"Url here",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Linkedin"}),Object(l.jsx)("input",{type:"text",placeholder:"Url here",value:O,onChange:function(e){return f(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Portfolio"}),Object(l.jsx)("input",{type:"text",placeholder:"Url here",value:g,onChange:function(e){return y(e.target.value)}})]})]})]})})},j=s(75),h=s(25),d=s.n(h);var m=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"skill",children:[e.item,Object(l.jsx)(d.a,{onClick:function(){e.onSelect(e.id)}})]})})})};var x=function(e){var t=e.input,s=e.skills,c=e.listofitems,n=e.deleteitems,r=e.setinput;return e.setskills,Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("h1",{className:"heading",children:"Skills"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Skills"}),Object(l.jsx)("input",{type:"text",placeholder:"Type Your Skills Here",value:t,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)(j.a,{onClick:c,children:"+"})]}),Object(l.jsx)("div",{className:"skills-section",children:s.map((function(e,t){return Object(l.jsx)(m,{item:e,id:t,onSelect:n},t)}))})]})]})},u=s(3);function b(e){var t=e.number,s=e.project,c=e.setproject,n=e.name,r=e.link,o=e.tech,a=e.desc;return Object(l.jsxs)("div",{className:"form experience",children:[Object(l.jsxs)("h2",{children:["Project #",t," "]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Name"}),Object(l.jsx)("input",{type:"text",placeholder:"Project Name",value:n,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Link"}),Object(l.jsx)("input",{type:"text",placeholder:"Github/working Link",value:r,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{link:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Tech Used"}),Object(l.jsx)("input",{type:"text",placeholder:"Technology Used",value:o,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{tech:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box textarea",children:[Object(l.jsx)("span",{className:"details",children:"Description"}),Object(l.jsx)("textarea",{type:"text",placeholder:"Description",value:a,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{desc:e.target.value}))}})]})]})}var O=function(e){var t=e.project,s=e.setproject,c=e.name,n=e.link,r=e.tech,o=e.desc,a=e.project2,i=e.setproject2,p=e.name2,j=e.link2,h=e.tech2,d=e.desc2,m=e.project3,x=e.setproject3,u=e.name3,O=e.link3,f=e.tech3,g=e.desc3;return Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)(b,{number:1,project:t,setproject:s,name:c,link:n,tech:r,desc:o}),Object(l.jsx)(b,{number:2,project:a,setproject:i,name:p,link:j,tech:h,desc:d}),Object(l.jsx)(b,{number:3,project:m,setproject:x,name:u,link:O,tech:f,desc:g})]})},f=function(e){var t=e.number,s=e.exp,c=e.setexp,n=e.postname,r=e.company,o=e.from,a=e.to,i=e.expdesc;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"form experience",children:[Object(l.jsxs)("h2",{children:["Experience #",t," "]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Post Title"}),Object(l.jsx)("input",{type:"text",placeholder:"Post Name",value:n,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{postname:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Company"}),Object(l.jsx)("input",{type:"text",placeholder:"Company Name",value:r,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{company:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"From"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"1.3rem"},value:o,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{from:e.target.value}))}}),Object(l.jsx)("span",{className:"details",style:{marginLeft:"1rem",width:"20%"},children:"To"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"0"},value:a,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{to:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box textarea",children:[Object(l.jsx)("span",{className:"details",children:"Experience"}),Object(l.jsx)("textarea",{type:"text",placeholder:"Write your Experience Here",value:i,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{expdesc:e.target.value}))}})]})]})})};var g=function(e){var t=e.exp,s=e.setexp,c=e.postname,n=e.company,r=e.from,o=e.to,a=e.expdesc,i=e.exp2,p=e.setexp2,j=e.postname2,h=e.company2,d=e.from2,m=e.to2,x=e.expdesc2,u=e.exp3,b=e.setexp3,O=e.postname3,g=e.company3,y=e.from3,v=e.to3,N=e.expdesc3,S=e.exp4,k=e.setexp4,C=e.postname4,W=e.company4,I=e.from4,z=e.to4,E=e.expdesc4,w=e.exp5,L=e.setexp5,A=e.postname5,P=e.company5,T=e.from5,U=e.to5,Y=e.expdesc5;return Object(l.jsxs)("div",{className:"form workexp",children:[Object(l.jsx)("h1",{className:"heading",children:"Work Experience"}),Object(l.jsx)(f,{number:1,exp:t,setexp:s,postname:c,company:n,from:r,to:o,expdesc:a}),Object(l.jsx)(f,{number:2,exp:i,setexp:p,postname:j,company:h,from:d,to:m,expdesc:x}),Object(l.jsx)(f,{number:3,exp:u,setexp:b,postname:O,company:g,from:y,to:v,expdesc:N}),Object(l.jsx)(f,{number:4,exp:S,setexp:k,postname:C,company:W,from:I,to:z,expdesc:E}),Object(l.jsx)(f,{number:5,exp:w,setexp:L,postname:A,company:P,from:T,to:U,expdesc:Y})]})};function y(e){var t=e.number,s=e.edu,c=e.setedu,n=e.school,r=e.course,o=e.from,a=e.to,i=e.ach;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"form experience",children:[Object(l.jsxs)("h2",{children:["Education #",t," "]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"School"}),Object(l.jsx)("input",{type:"text",placeholder:"School Name",value:n,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{school:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Course"}),Object(l.jsx)("input",{type:"text",placeholder:"Course Name",value:r,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{course:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"From"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"1.3rem"},value:o,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{from:e.target.value}))}}),Object(l.jsx)("span",{className:"details",style:{marginLeft:"1rem",width:"20%"},children:"To"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"0"},value:a,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{to:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Achievements"}),Object(l.jsx)("input",{type:"text",placeholder:"Achievements",value:i,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{ach:e.target.value}))}})]})]})})}var v=function(e){var t=e.edu1,s=e.setedu1,c=e.school1,n=e.course1,r=e.from1,o=e.to1,a=e.ach1,i=e.edu2,p=e.setedu2,j=e.school2,h=e.course2,d=e.from2,m=e.to2,x=e.ach2;return Object(l.jsxs)("div",{className:"form education",children:[Object(l.jsx)("h1",{className:"heading",children:"Education"}),Object(l.jsx)(y,{number:1,edu:t,setedu:s,school:c,course:n,from:r,to:o,ach:a}),Object(l.jsx)(y,{number:2,edu:i,setedu:p,school:j,course:h,from:d,to:m,ach:x})]})},N=function(e){return Object(l.jsxs)("div",{className:"achivelist",children:[Object(l.jsx)("p",{children:e.item}),Object(l.jsx)(d.a,{onClick:function(){e.onSelect(e.id)}})]})};var S=function(e){var t=e.ach,s=e.setach,c=e.list,n=(e.setlist,e.additem),r=e.deleteitem;return Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("h1",{className:"heading",children:"Achievements"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("span",{className:"details",children:"Achievements"}),Object(l.jsx)("input",{type:"text",placeholder:"Type Your Skills Here",style:{width:"85%"},value:t,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)(j.a,{onClick:n,children:"+"})]}),Object(l.jsx)("div",{className:"skills-section",style:{boxShadow:"none",height:"22rem"},children:c.map((function(e,t){return Object(l.jsx)(N,{item:e,id:t,onSelect:r},t)}))})]})]})},k=s(35),C=s(36),W=s(24),I=s(44),z=s(43),E=(s(59),s(37)),w=s.n(E),L=s(38),A=s.n(L),P=s(39),T=s.n(P),U=s(40),Y=s.n(U),F=s(41),H=s.n(F),R=s(42),B=s.n(R),D=s(31),M=s.n(D),G=function(e){Object(I.a)(s,e);var t=Object(z.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"resume",children:[Object(l.jsxs)("div",{className:"info",children:[""===this.props.photourl?null:Object(l.jsx)("img",{src:this.props.photourl,alt:""}),Object(l.jsxs)("div",{className:"main-info",children:[Object(l.jsx)("h1",{style:{color:this.props.primary},children:this.props.name}),Object(l.jsx)("h3",{children:this.props.subtitle}),Object(l.jsx)("p",{children:this.props.userdesc})]})]}),this.props.email||this.props.contact||this.props.address||this.props.github||this.props.linkedin||this.props.portfolio?Object(l.jsxs)("div",{className:"extrainfo",children:[""===this.props.email?null:Object(l.jsxs)("a",{href:this.props.email,children:[" ",Object(l.jsx)(w.a,{style:{color:this.props.primary}})," ",this.props.email]}),""===this.props.contact?null:Object(l.jsxs)("a",{href:this.props.contact,children:[" ",Object(l.jsx)(A.a,{style:{color:this.props.primary}})," ",this.props.contact]}),""===this.props.address?null:Object(l.jsxs)("a",{href:this.props.address,children:[" ",Object(l.jsx)(T.a,{style:{color:this.props.primary}})," ",this.props.address]}),""===this.props.github?null:Object(l.jsxs)("a",{href:this.props.github,children:[Object(l.jsx)(Y.a,{style:{color:this.props.primary}}),this.props.github]}),""===this.props.linkedin?null:Object(l.jsxs)("a",{href:this.props.linkedin,children:[Object(l.jsx)(H.a,{style:{color:this.props.primary}}),this.props.linkedin]}),""===this.props.portfolio?null:Object(l.jsxs)("a",{href:this.props.portfolio,children:[Object(l.jsx)(B.a,{style:{color:this.props.primary}}),this.props.portfolio]})]}):null,Object(l.jsxs)("div",{className:"section",children:[Object(l.jsxs)("div",{className:"left-section",children:[""===this.props.exp3.postname&&""===this.props.exp2.postname&&""===this.props.exp.postname&&""===this.props.exp4.postname&&""===this.props.exp5.postname?null:Object(l.jsxs)("div",{className:"experiences",children:[Object(l.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Experience"}),""===this.props.exp.postname?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp.postname}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp.company}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp.from," - ",this.props.exp.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.exp.expdesc]})]}),""===this.props.exp2.postname?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp2.postname}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp2.company}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp2.from," - ",this.props.exp2.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.exp2.expdesc]})]}),""===this.props.exp3.postname?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp3.postname}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp3.company}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp3.from," - ",this.props.exp3.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.exp3.expdesc]})]}),""===this.props.exp4.postname?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp4.postname}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp4.company}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp4.from," - ",this.props.exp4.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.exp4.expdesc]})]}),""===this.props.exp5.postname?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp5.postname}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp5.company}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp5.from," - ",this.props.exp5.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.exp5.expdesc]})]})]}),""===this.props.edu1.school&&""===this.props.edu2.school?null:Object(l.jsxs)("div",{className:"education",children:[Object(l.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Education"}),Object(l.jsxs)("div",{children:[""===this.props.edu1.school?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.edu1.school}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.edu1.course}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.edu1.from," - ",this.props.edu1.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Achievements:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.edu1.ach]})]}),""===this.props.edu2.school?null:Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.edu2.school}),Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.edu2.course}),Object(l.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.edu2.from," - ",this.props.edu2.to]}),Object(l.jsx)("h5",{style:{fontWeight:"400"},children:"Achievements:"}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.edu2.ach]})]})]})]})]}),Object(l.jsxs)("div",{className:"right-section",children:[0===this.props.skills.length?null:Object(l.jsxs)("div",{className:"skills",children:[Object(l.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Skills"}),Object(l.jsx)("div",{children:this.props.skills.map((function(t){return Object(l.jsx)("p",{className:"skill",style:{backgroundColor:e.props.secondary},children:t})}))})]}),""===this.props.project3.name&&""===this.props.project2.name&&""===this.props.project.name?null:Object(l.jsxs)("div",{className:"projects",children:[Object(l.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Projects"}),""===this.props.project.name?null:Object(l.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(l.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(l.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project.name}),""===this.props.project.link?null:Object(l.jsx)("a",{href:this.props.project.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(l.jsx)(M.a,{style:{color:this.props.secondary}})})]}),Object(l.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project.tech})]}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.project.desc]})]}),""===this.props.project2.name?null:Object(l.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(l.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(l.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project2.name}),""===this.props.project2.link?null:Object(l.jsx)("a",{href:this.props.project2.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(l.jsx)(M.a,{style:{color:this.props.secondary}})})]}),Object(l.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project2.tech})]}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.project2.desc]})]}),""===this.props.project3.name?null:Object(l.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(l.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(l.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project3.name}),""===this.props.project3.link?null:Object(l.jsx)("a",{href:this.props.project2.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(l.jsx)(M.a,{style:{color:this.props.secondary}})})]}),Object(l.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(l.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project3.tech})]}),Object(l.jsxs)("p",{style:{},children:["- ",this.props.project3.desc]})]})]}),0===this.props.achlist.length?null:Object(l.jsxs)("div",{className:"achiec",children:[Object(l.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Achievements"}),Object(l.jsx)("div",{children:this.props.achlist.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("p",{style:{fontWeight:"600"},children:["- ",e]})})}))})]})]})]})]})}}]),s}(n.a.PureComponent);var J=function(){var e=Object(c.useRef)(),t=Object(k.useReactToPrint)({content:function(){return e.current}}),s=Object(c.useState)("info"),n=Object(i.a)(s,2),r=n[0],o=n[1],j=Object(c.useState)(""),h=Object(i.a)(j,2),d=h[0],m=h[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),f=b[0],y=b[1],N=Object(c.useState)(""),C=Object(i.a)(N,2),W=C[0],I=C[1],z=Object(c.useState)(""),E=Object(i.a)(z,2),w=E[0],L=E[1],A=Object(c.useState)(""),P=Object(i.a)(A,2),T=P[0],U=P[1],Y=Object(c.useState)(""),F=Object(i.a)(Y,2),H=F[0],R=F[1],B=Object(c.useState)(""),D=Object(i.a)(B,2),M=D[0],J=D[1],_=Object(c.useState)(""),q=Object(i.a)(_,2),K=q[0],Q=q[1],V=Object(c.useState)(""),X=Object(i.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)(""),te=Object(i.a)(ee,2),se=te[0],ce=te[1],ne=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),re=Object(i.a)(ne,2),oe=re[0],ae=re[1],ie=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),le=Object(i.a)(ie,2),pe=le[0],je=le[1],he=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),de=Object(i.a)(he,2),me=de[0],xe=de[1],ue=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),be=Object(i.a)(ue,2),Oe=be[0],fe=be[1],ge=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),ye=Object(i.a)(ge,2),ve=ye[0],Ne=ye[1],Se=Object(c.useState)({school:"",course:"",from:"",to:"",ach:""}),ke=Object(i.a)(Se,2),Ce=ke[0],We=ke[1],Ie=Object(c.useState)({school:"",course:"",from:"",to:"",ach:""}),ze=Object(i.a)(Ie,2),Ee=ze[0],we=ze[1],Le=Object(c.useState)(""),Ae=Object(i.a)(Le,2),Pe=Ae[0],Te=Ae[1],Ue=Object(c.useState)([]),Ye=Object(i.a)(Ue,2),Fe=Ye[0],He=Ye[1],Re=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Be=Object(i.a)(Re,2),De=Be[0],Me=Be[1],Ge=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Je=Object(i.a)(Ge,2),_e=Je[0],qe=Je[1],Ke=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Qe=Object(i.a)(Ke,2),Ve=Qe[0],Xe=Qe[1],Ze=Object(c.useState)(""),$e=Object(i.a)(Ze,2),et=$e[0],tt=$e[1],st=Object(c.useState)([]),ct=Object(i.a)(st,2),nt=ct[0],rt=ct[1],ot=Object(c.useState)("#34678c"),at=Object(i.a)(ot,2),it=at[0],lt=at[1],pt=Object(c.useState)("rgb(242, 100, 100)"),jt=Object(i.a)(pt,2),ht=jt[0],dt=jt[1];return Object(c.useEffect)((function(){var e=null===localStorage.getItem("name")?"":localStorage.getItem("name");y(e),I(null==localStorage.getItem("subtitle")?"":localStorage.getItem("subtitle")),m(null==localStorage.getItem("photourl")?"":localStorage.getItem("photourl")),L(null==localStorage.getItem("userdesc")?"":localStorage.getItem("userdesc")),U(null==localStorage.getItem("email")?"":localStorage.getItem("email")),R(null==localStorage.getItem("contact")?"":localStorage.getItem("contact")),J(null==localStorage.getItem("address")?"":localStorage.getItem("address")),Q(null==localStorage.getItem("github")?"":localStorage.getItem("github")),$(null==localStorage.getItem("linkedin")?"":localStorage.getItem("linkedin")),ce(null==localStorage.getItem("portfolio")?"":localStorage.getItem("portfolio"))}),[]),Object(c.useEffect)((function(){localStorage.setItem("photourl",d),localStorage.setItem("name",f),localStorage.setItem("subtitle",W),localStorage.setItem("userdesc",w),localStorage.setItem("email",T),localStorage.setItem("contact",H),localStorage.setItem("address",M),localStorage.setItem("github",K),localStorage.setItem("linkedin",Z),localStorage.setItem("portfolio",se)}),[f,W,d,w,T,H,M,K,se,Z,oe]),Object(l.jsxs)("div",{id:"main",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h2",{children:"Hash/Hub"}),Object(l.jsxs)("h1",{children:["\ud83d\udcc4",Object(l.jsx)("span",{children:"Resume Maker "})," "]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("a",{href:"https://github.com/vedant-jain03/Resume-Maker",children:"Contribute"}),Object(l.jsx)("a",{href:"https://github.com/vedant-jain03/Resume-Maker",children:"Give us star"})]})]}),Object(l.jsxs)("div",{className:"maincomponent",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("li",{className:"info"===r?"active":"",onClick:function(){return o("info")},children:"Info"}),Object(l.jsx)("li",{className:"Experience"===r?"active":"",onClick:function(){return o("Experience")},children:"Experience"}),Object(l.jsx)("li",{className:"Education"===r?"active":"",onClick:function(){return o("Education")},children:"Education"}),Object(l.jsx)("li",{className:"Skills"===r?"active":"",onClick:function(){return o("Skills")},children:"Skills"}),Object(l.jsx)("li",{className:"Projects"===r?"active":"",onClick:function(){return o("Projects")},children:"Projects"}),Object(l.jsx)("li",{className:"Achievements"===r?"active":"",onClick:function(){return o("Achievements")},style:{width:"25%"},children:"Achievements"})]}),"info"===r?Object(l.jsx)(p,{photourl:d,setphotourl:m,name:f,setname:y,subtitle:W,setsubtitle:I,userdesc:w,setuserdesc:L,email:T,setemail:U,contact:H,setcontact:R,address:M,setaddress:J,github:K,setgithub:Q,linkedin:Z,setlinkedin:$,portfolio:se,setportfolio:ce}):null,"Experience"===r?Object(l.jsx)(g,{exp:oe,setexp:ae,postname:oe.postname,company:oe.company,from:oe.from,to:oe.to,expdesc:oe.expdesc,exp2:pe,setexp2:je,postname2:pe.postname,company2:pe.company,from2:pe.from,to2:pe.to,expdesc2:pe.expdesc,exp3:me,setexp3:xe,postname3:me.postname,company3:me.company,from3:me.from,to3:me.to,expdesc3:me.expdesc,exp4:Oe,setexp4:fe,postname4:Oe.postname,company4:Oe.company,from4:Oe.from,to4:Oe.to,expdesc4:Oe.expdesc,exp5:ve,setexp5:Ne,postname5:ve.postname,company5:ve.company,from5:ve.from,to5:ve.to,expdesc5:ve.expdesc}):null,"Education"===r?Object(l.jsx)(v,{edu1:Ce,setedu1:We,school1:Ce.school,course1:Ce.course,from1:Ce.from,to1:Ce.to,ach1:Ce.ach,edu2:Ee,setedu2:we,school2:Ee.school,course2:Ee.course,from2:Ee.from,to2:Ee.to,ach2:Ee.ach}):null,"Skills"===r?Object(l.jsx)(x,{input:Pe,skills:Fe,listofitems:function(){He((function(e){return[].concat(Object(a.a)(e),[Pe])})),Te("")},deleteitems:function(e){He((function(t){return t.filter((function(t,s){return e!==s}))}))},setinput:Te,setskills:He}):null,"Projects"===r?Object(l.jsx)(O,{project:De,setproject:Me,name:De.name,link:De.link,tech:De.tech,desc:De.desc,project2:_e,setproject2:qe,name2:_e.name,link2:_e.link,tech2:_e.tech,desc2:_e.desc,project3:Ve,setproject3:Xe,name3:Ve.name,link3:Ve.link,tech3:Ve.tech,desc3:Ve.desc}):null,"Achievements"===r?Object(l.jsx)(S,{ach:et,setach:tt,list:nt,setlist:rt,additem:function(){rt((function(e){return[].concat(Object(a.a)(e),[et])})),tt("")},deleteitem:function(e){rt((function(t){return t.filter((function(t,s){return e!==s}))}))}}):null,Object(l.jsx)("div",{className:"scroller"})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("div",{className:"up",children:[Object(l.jsx)("button",{className:"print-button",onClick:t,children:"Print this out!"}),Object(l.jsxs)("div",{className:"theme",children:[Object(l.jsx)("h2",{children:"Theme"}),Object(l.jsx)("div",{className:"#34678c"===it?"combo active":"combo",onClick:function(){lt("#34678c"),dt("rgb(242, 100, 100)")}}),Object(l.jsx)("div",{className:"#2b273f"===it?"combo active":"combo",style:{background:"linear-gradient(45deg, #2b273f, #7cff81)"},onClick:function(){lt("#2b273f"),dt("#7cff81")}}),Object(l.jsx)("div",{className:"black"===it?"combo active":"combo",style:{background:"linear-gradient(45deg, black, #cddc39)"},onClick:function(){lt("black"),dt("#cddc39")}})]})]}),Object(l.jsx)("div",{className:"resume-preview",children:Object(l.jsx)(G,{photourl:d,name:f,subtitle:W,userdesc:w,email:T,contact:H,address:M,github:K,linkedin:Z,portfolio:se,exp:oe,exp2:pe,exp3:me,exp4:Oe,exp5:ve,edu1:Ce,edu2:Ee,skills:Fe,achlist:nt,project:De,project2:_e,project3:Ve,primary:it,secondary:ht,ref:e})})]})]})]})};var _=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(J,{})})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.fb27b2e5.chunk.js.map