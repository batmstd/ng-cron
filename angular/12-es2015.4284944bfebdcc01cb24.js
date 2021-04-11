(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nvPH:function(t,e,n){"use strict";n.r(e),n.d(e,"DocCustomizationCssStylingModule",function(){return u});var c=n("SVse"),o=n("s7LF"),i=n("CaSd"),r=n("oM2V"),s=n("QxRf"),a=n("iInd"),l=n("8Y7J"),b=n("iiZv"),d=n("yAbP");const p=function(){return["./"]},m=[{path:"",component:(()=>{class t{constructor(){this.highlightSpecificHtml='<quartz-cron class="my-cron"></quartz-cron>',this.highlightSpecificScss='.my-cron [tab-name="SECONDS"] {\n\t.c-and {\n\t\tborder: 1px solid #ccc;\n\t\tpadding: 1rem;\n\t\tborder-radius: 5px;\n\n\t\t&-item[item-value="1"],\n\t\t&-item[item-value="20"] {\n\t\t\t.c-and-item-check {\n\t\t\t\tbackground-color: red;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tcolor: #fff;\n\t\t\t\tpadding-left: 1.5rem;\n\t\t\t}\n\t\t}\n\t}\n}',this.highlightSpecificVerticalHtml='<quartz-cron class="my-vertical-cron"></quartz-cron>',this.highlightSpecificVerticalScss=".my-vertical-cron .c-host {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\t.c-tabs {\n\t\tflex-direction: column;\n\t\tborder: 0;\n\t\tborder-right: 1px solid #ccc;\n\n\t\t.c-tab {\n\t\t\ttext-align: left;\n\t\t\tborder: 0;\n\t\t\tborder-radius: 0;\n\t\t}\n\t}\n\n\t.c-tab-content {\n\t\tpadding-top: .5rem;\n\t\tpadding-left: 1rem;\n\t}\n}",this.wholeRedesignHtml='<quartz-cron cssClassPrefix="my-"></quartz-cron>',this.wholeRedesignScss="$prefix: '.my';\n\n#{$prefix}-row {\n\toverflow: hidden;\n\n\t#{$prefix}-col-1 {\n\t\twidth: calc(100% / 12);\n\t\tfloat: left;\n\t}\n\n\t#{$prefix}-col-2 {\n\t\twidth: calc(100% / 6);\n\t\tfloat: left;\n\t}\n}\n\n#{$prefix}-form-inline {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n#{$prefix}-form-control {\n\tmargin: 0 .2rem;\n}\n\n#{$prefix}-form-check-label {\n\tpadding-left: .4rem;\n}"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Gb({type:t,selectors:[["ng-component"]],decls:69,vars:10,consts:[[1,"doc-title"],["fragment","some-corrections",3,"routerLink"],["fragment","whole-redesign",3,"routerLink"],["id","some-corrections",1,"mt-4"],[1,"doc-subtitle"],[1,"card"],[1,"card-body"],[1,"card-title","h5"],["language","html"],["language","scss"],[1,"demo"],[1,"my-cron"],[1,"card","mt-3"],[1,"my-vertical-cron"],["id","whole-redesign",1,"mt-5"],[1,"demo","mt-4"],["cssClassPrefix","my-"]],template:function(t,e){1&t&&(l.Sb(0,"h1",0),l.oc(1," Customization\n"),l.Rb(),l.Sb(2,"p"),l.oc(3," This is a bootstrap 4 based component, but any time it can be used without any dependencies and will be absolutely unstyled.\n"),l.Rb(),l.oc(4," There are two kind of customizations you can do:\n"),l.Sb(5,"ul"),l.Sb(6,"li"),l.Sb(7,"a",1),l.oc(8," Some corrections "),l.Rb(),l.Rb(),l.Sb(9,"li"),l.Sb(10,"a",2),l.oc(11," Whole redesign "),l.Rb(),l.Rb(),l.Rb(),l.Sb(12,"div",3),l.Sb(13,"h2",4),l.oc(14,"Some corrections"),l.Rb(),l.Sb(15,"p"),l.oc(16," Every html element has specific css class and you can use that to make some ui corrections. "),l.Nb(17,"br"),l.oc(18," It will work only if your styles will be added in global "),l.Sb(19,"code"),l.oc(20,"styles.scss"),l.Rb(),l.oc(21," file. "),l.Rb(),l.Sb(22,"div",5),l.Sb(23,"div",6),l.Sb(24,"h3",7),l.oc(25,"Highlight specific elements"),l.Rb(),l.Sb(26,"p"),l.oc(27,' Let\'s highlight "Specific second" section and options "1" and "20" '),l.Sb(28,"app-ngx-prism",8),l.oc(29),l.Rb(),l.Sb(30,"app-ngx-prism",9),l.oc(31),l.Rb(),l.Rb(),l.Sb(32,"div",10),l.Nb(33,"quartz-cron",11),l.Rb(),l.Rb(),l.Rb(),l.Sb(34,"div",12),l.Sb(35,"div",6),l.Sb(36,"h3",7),l.oc(37,"Change the layout"),l.Rb(),l.Sb(38,"p"),l.oc(39," Let's make a vertical tabs "),l.Sb(40,"app-ngx-prism",8),l.oc(41),l.Rb(),l.Sb(42,"app-ngx-prism",9),l.oc(43),l.Rb(),l.Rb(),l.Sb(44,"div",10),l.Nb(45,"quartz-cron",13),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(46,"div",14),l.Sb(47,"h2",4),l.oc(48,"Whole redesign"),l.Rb(),l.Sb(49,"p"),l.oc(50," The template uses the bootstrap 4 css classes without any custom styling or overridings. To customize the ui by yourself you need to use the "),l.Sb(51,"code"),l.oc(52,"cssClassPrefix"),l.Rb(),l.oc(53," input and pass the class prefix. The prefix will be used in css classes generating, for example you passed "),l.Sb(54,"code"),l.oc(55,'cssClassPrefix="my-"'),l.Rb(),l.oc(56," as a result the bootstrap class will be transformed from "),l.Sb(57,"code"),l.oc(58,"form-group"),l.Rb(),l.oc(59," to "),l.Sb(60,"code"),l.oc(61,"my-form-group"),l.Rb(),l.oc(62,". "),l.Rb(),l.Sb(63,"app-ngx-prism",8),l.oc(64),l.Rb(),l.Sb(65,"app-ngx-prism",9),l.oc(66),l.Rb(),l.Sb(67,"div",15),l.Nb(68,"quartz-cron",16),l.Rb(),l.Rb()),2&t&&(l.yb(7),l.fc("routerLink",l.gc(8,p)),l.yb(3),l.fc("routerLink",l.gc(9,p)),l.yb(19),l.pc(e.highlightSpecificHtml),l.yb(2),l.pc(e.highlightSpecificScss),l.yb(10),l.pc(e.highlightSpecificVerticalHtml),l.yb(2),l.pc(e.highlightSpecificVerticalScss),l.yb(21),l.pc(e.wholeRedesignHtml),l.yb(2),l.pc(e.wholeRedesignScss))},directives:[a.c,b.a,d.a],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[a.d.forChild(m)],a.d]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[c.b,o.b,i.a,r.a,s.a,h]]}),t})()}}]);