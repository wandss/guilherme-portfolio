(function(t){function e(e){for(var a,o,l=e[0],r=e[1],u=e[2],d=0,m=[];d<l.length;d++)o=l[d],s[o]&&m.push(s[o][0]),s[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01b0":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("04f5"),s=n.n(a);s.a},"04f5":function(t,e,n){},"099f":function(t,e,n){"use strict";var a=n("c00a"),s=n.n(a);s.a},"0ab0":function(t,e,n){"use strict";var a=n("7046"),s=n.n(a);s.a},"1bcd":function(t,e,n){},"22d7":function(t,e,n){"use strict";var a=n("d3ca"),s=n.n(a);s.a},"254d":function(t,e,n){"use strict";var a=n("3110"),s=n.n(a);s.a},2582:function(t,e,n){},"2bf4":function(t,e,n){},3110:function(t,e,n){},3782:function(t,e,n){"use strict";var a=n("f6a8"),s=n.n(a);s.a},"3c9d":function(t,e,n){},4089:function(t,e,n){"use strict";var a=n("c944"),s=n.n(a);s.a},"443d":function(t,e,n){},"50cb":function(t,e,n){"use strict";var a=n("e9a7"),s=n.n(a);s.a},"51a2":function(t,e,n){"use strict";var a=n("b7eb"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("NavBar"),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},t._l(t.brandInfo.results,function(t){return n("Brand",{key:t.title,attrs:{title:t.title,subtitle:t.subtitle}})}))]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("router-view")],1)])],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float-left",attrs:{id:"brand"}},[n("router-link",{attrs:{to:"/managealbums",id:"link"}},[n("h1",[t._v(t._s(t.title))]),n("h1",[t._v(t._s(t.subtitle))])])],1)},l=[],r={name:"Brand",props:{title:{type:String,required:!0},subtitle:{type:String}}},u=r,c=(n("a458"),n("2877")),d=Object(c["a"])(u,o,l,!1,null,"67a1ff92",null);d.options.__file="Brand.vue";var m=d.exports,p={name:"app",components:{Brand:m},data:function(){return{brandInfo:{}}},methods:{getBrandInfo:function(){var t=this;this.$http.get(this.$resource.brand).then(function(e){return t.brandInfo=e.data})}},beforeUpdate:function(){document.body.className="app"},mounted:function(){this.getBrandInfo()}},f=p,h=(n("034f"),Object(c["a"])(f,s,i,!1,null,null,null));h.options.__file="App.vue";var b=h.exports,v=n("bc3a"),g=n.n(v),_=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-5"},t._l(t.albums,function(e){return n("PhotoCard",{key:e.uuid,on:{click:function(n){t.albumDetail(e.uuid)}}},[n("div",{attrs:{slot:"name",id:"albumName"},slot:"name"},[n("h5",[t._v(t._s(e.name))]),n("p",[t._v("\n                    Junho /2018\n                ")])]),n("img",{attrs:{slot:"img",src:e.thumbnail_data.src,width:"280",height:"200"},slot:"img"}),n("div",{attrs:{slot:"desc",id:"description"},slot:"desc"},[n("h6",[t._v(t._s(e.description))])])])})),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col"},[null!==t.nextAlbums?n("button",{staticClass:"btn btn-block btn-outline-success",attrs:{type:"button"},on:{click:function(e){t.getAlbums(t.nextAlbums)}}},[t._v("\n                Mais Albums ...\n            ")]):t._e()])])])},w=[],y=(n("28a5"),n("ac6a"),{name:"home",data:function(){return{albums:[],nextAlbums:null}},methods:{getAlbums:function(t){var e=this;this.$http.get(t).then(function(t){var n=null;t.data.results.forEach(function(t){return e.albums.push(t)}),null!==t.data.next&&(n=e.$resource.publicAlbums+"/?"+t.data.next.split("?")[1]),e.nextAlbums=n}).catch(function(t){return console.log(t.response)})},albumDetail:function(t){this.$router.push("/album"+t)}},mounted:function(){this.getAlbums(this.$resource.publicAlbums+"/?q=True")}}),x=y,$=(n("a2e6"),Object(c["a"])(x,C,w,!1,null,null,null));$.options.__file="home.vue";var k=$.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!==t.image?n("image-viewer",{attrs:{showImage:t.viewImage,imageCount:t.imageCount,image:t.image,index:t.currentImageIndex},on:{click:function(e){t.viewImage=!t.viewImage},nextImage:t.imageDetail,prevImage:t.imageDetail}}):t._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"text-center"},t._l(t.album,function(e,a){return n("img",{key:a,attrs:{id:"photoGallery",width:"280",height:"200",src:e.src},on:{click:function(e){t.imageDetail(a)}}})}))])]),n("div",{staticClass:"container-fluid",attrs:{id:"btn"}},[n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.$router.push("/")}}},[t._v("Voltar\n        ")])])],1)},I=[],j={name:"PhotoGallery",props:{albumId:{type:String}},data:function(){return{viewImage:!1,image:null,currentImageIndex:0,album:[]}},mounted:function(){this.getAlbum()},methods:{imageDetail:function(t){this.image=this.album[t],this.currentImageIndex=t,this.viewImage=!this.viewImage},getAlbum:function(){var t=this;this.$http.get(this.$resource.album+"/"+this.albumId).then(function(e){t.album=e.data.image_data}).catch(function(t){return console.log(t.response)})}},computed:{imageCount:function(){return this.album.length}}},O=j,E=(n("c96c"),Object(c["a"])(O,A,I,!1,null,"22854bb2",null));E.options.__file="album.vue";var q=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Alert",{attrs:{showAlert:t.showAlert,cssClass:t.alertCss},on:{close:function(e){t.showAlert=!1}}},[n("h4",[t._v(t._s(t.message))])]),t.isLoggedIn?t._e():n("div",[n("login",{on:{getLogin:t.handleLogin,closeAlert:function(e){t.showAlert=!1}}})],1),n("div",{staticClass:"row mb-5"},t._l(t.albums,function(e){return n("PhotoCard",{key:e.uuid},[n("div",{attrs:{slot:"name",id:"albumName"},slot:"name"},[n("h5",[t._v(" "+t._s(e.name)+" ")]),n("p",[t._v(t._s(new Date(e.create_date).toLocaleString()))])]),n("img",{attrs:{slot:"img",width:"280",height:"200",src:e.thumbnail_data.src,description:e.description},on:{click:function(n){t.albumDetail(e.uuid)}},slot:"img"}),n("div",{attrs:{slot:"desc",id:"description"},slot:"desc"},[n("h5",[t._v(t._s(e.description))])])])})),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col"},[null!==t.nextAlbums?n("button",{staticClass:"btn btn-outline-success btn-block",attrs:{type:"button"},on:{click:function(e){t.getAlbums(t.nextAlbums)}}},[t._v("\n                Mais Albums ...\n            ")]):t._e()])])],1)},S=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("app-input",{attrs:{label:"Login:",type:"text",required:""},on:{input:function(e){t.$emit("closeAlert")}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("app-input",{attrs:{label:"Senha:",type:"password",required:""},model:{value:t.passwd,callback:function(e){t.passwd=e},expression:"passwd"}}),n("button",{staticClass:"btn btn-secondary btn-block"},[t._v("\n                Login\n            ")])],1)])])},N=[],B={name:"login",data:function(){return{username:"",passwd:""}},methods:{login:function(){var t=this,e={username:this.username,password:this.passwd};this.$http.post(this.$resource.login,e).then(function(e){t.$emit("getLogin",!0)}).catch(function(e){t.$emit("getLogin",!1)}),this.username="",this.passwd=""}}},F=B,L=(n("099f"),Object(c["a"])(F,D,N,!1,null,null,null));L.options.__file="login.vue";var P=L.exports,T={name:"clientArea",components:{Login:P},data:function(){return{albums:[],message:null,nextAlbums:null,isLoggedIn:!0,showAlert:!1,alertCss:"info"}},mounted:function(){this.getAlbums(this.$resource.privateAlbums+"/?q=True")},methods:{getAlbums:function(t){var e=this;this.$http.get(t).then(function(t){var n=null;e.message=null,t.data.results.forEach(function(t){return e.albums.push(t)}),null!==t.data.next&&(n=e.$resource.privateAlbums+"/?"+t.data.next.split("?")[1]),e.nextAlbums=n,0===e.albums.length&&(e.message="Hmmm... parece que não existem albums disponíveis!",e.showAlert=!0,e.alertCss="warning")}).catch(function(t){403===t.response.status&&(e.message="É necessário logar para ter acesso a essa área!!!",e.showAlert=!0,e.isLoggedIn=!1)})},albumDetail:function(t){this.$router.push("/album"+t)},handleLogin:function(t){t?(this.isLoggedIn=!0,this.showAlert=!1,this.getAlbums(this.$resource.privateAlbums+"/?q=True")):(this.message="Verifique usuário e senha.",this.showAlert=!0,this.alertCss="danger")}},computed:{albumDate:function(t){return new Date(t).toLocaleString()}}},U=T,G=(n("ad3f"),Object(c["a"])(U,M,S,!1,null,null,null));G.options.__file="clientArea.vue";var z=G.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("Contatos:")]),n("p",[t._v("(31)9 9476-6537")]),n("p",[t._v("fotoguilhermes@gmail.com")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("app-input",{attrs:{label:"Nome:",required:!0},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("app-input",{attrs:{label:"Email:",type:"email",required:!0},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("app-input",{attrs:{label:"Assunto:",required:!0},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})],1),n("div",{staticClass:"col-md-6"},[n("app-text-area",{attrs:{label:"Messagem:",required:!0},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)]),t._m(0)])])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("button",{staticClass:"btn btn-outline-success"},[t._v("\n                    Enviar\n                ")])])])}],R=(n("7f7f"),{name:"contact",data:function(){return{name:"",email:"",subject:"",message:""}},computed:{csrftoken:function(){return this.$cookies.get("csrftoken")}},methods:{sendMessage:function(){console.log("sending Message......");var t={"X-CSRFToken":this.csrftoken,"Content-Type":"application/json"},e={name:this.name,email:this.email,subject:this.subject,message:this.message};this.$http.post(this.$resource.sendMessage,e,{headers:t}).then(function(t){return console.log(t.data)}).catch(function(t){return console.log(t.response)})}}}),J=R,X=(n("6775"),Object(c["a"])(J,H,V,!1,null,null,null));X.options.__file="contact.vue";var K=X.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ModalConfirm",{attrs:{show:t.show,message:t.message},on:{close:function(e){t.show=!1},getUserResponse:function(e){t.logout(e)}}})},W=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{show:t.show,title:"Confirma:"},on:{click:function(e){t.$emit("close")}}},[n("div",{attrs:{slot:"body"},slot:"body"},[n("h5",[t._v(t._s(t.message))])]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn btn-outline-success mx-2",on:{click:function(e){t.$emit("getUserResponse",!0)}}},[t._v("\n            Sim\n        ")]),n("button",{staticClass:"btn btn-outline-danger mx-2",on:{click:function(e){t.$emit("getUserResponse",!1)}}},[t._v("\n            Não\n        ")])])])},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Overlay",{attrs:{show:t.show}},[n("div",{class:["modal-dialog",t.modalSize]},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n                    "+t._s(t.title)+"\n                ")]),n("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){t.$emit("click")}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"modal-body"},[t._t("body")],2),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},et=[],nt=n("a322"),at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"overlay"}},[t._t("default")],2)])},st=[],it={name:"Overlay",props:["show"]},ot=it,lt=(n("9cf0"),Object(c["a"])(ot,at,st,!1,null,"e9b0cd20",null));lt.options.__file="Overlay.vue";var rt=lt.exports,ut={name:"Modal",components:{Overlay:rt},props:{title:Object(nt["a"])({default:String,required:!0},"default","Modal Title"),modalSize:{defalt:"modal-sm"},hasFooter:{type:Boolean,default:!1},show:{type:Boolean,default:!1,required:!0}}},ct=ut,dt=(n("22d7"),Object(c["a"])(ct,tt,et,!1,null,null,null));dt.options.__file="Modal.vue";var mt=dt.exports,pt={name:"ModalConfirm",components:{Modal:mt},props:{show:{type:Boolean,default:!1,required:!0},message:{type:String,default:"Tem certeza?",required:!0}}},ft=pt,ht=(n("50cb"),Object(c["a"])(ft,Y,Z,!1,null,null,null));ht.options.__file="ModalConfirm.vue";var bt=ht.exports,vt={name:"logout",components:{ModalConfirm:bt},data:function(){return{show:!0,message:"Tem certeza que deseja sair?"}},mounted:function(){this.show=!0},methods:{logout:function(t){t?this.$cookies.get("csrftoken").length>0&&(this.$http.get(this.$resource.logout).then(function(t){return console.log(t.data)}).catch(function(t){return console.log(t.response)}),this.$router.push("/")):this.$router.go(-1),this.show=!1}}},gt=vt,_t=(n("254d"),Object(c["a"])(gt,Q,W,!1,null,null,null));_t.options.__file="logout.vue";var Ct=_t.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"container"},[n("Alert",{attrs:{showAlert:t.alert.show,cssClass:t.alert.cssClass},on:{close:function(e){t.alert.show=!1}}},[n("h4",[t._v(t._s(t.alert.message))])]),t.isLoggedIn?t._e():n("div",[n("login",{on:{getLogin:t.handleLogin,closeAlert:function(e){t.showAlert=!1}}})],1)],1),n("div",{staticClass:"row"},t._l(t.items,function(e){return t.items.length>0?n("div",{key:e.uuid,staticClass:"col"},[n("Card",{attrs:{title:e.title,icon:e.icon},on:{click:function(n){t.$router.push(e.url)}}})],1):t._e()}))])},yt=[],xt={name:"ManageAlbums",components:{Login:P},data:function(){return{items:[],isLoggedIn:!1,alert:{show:!1,cssClass:"info",message:null}}},mounted:function(){this.getMenuItems()},methods:{getMenuItems:function(){var t=this;this.$http.get(this.$resource.adminMenu).then(function(e){t.items=e.data.results,t.isLoggedIn=!0}).catch(function(e){t.alert.show=!0,t.alert.cssClass="danger";var n=e.response.data;403===e.response.status&&(t.alert.cssClass="info",n="É necessário logar para acessar essa área!!!"),t.alert.message=n})},handleLogin:function(t){t?this.getMenuItems():(this.alert.message="Verifique usuário e senha.",this.alert.cssClass="danger"),this.isLoggedIn=t,this.alert.show=!t}}},$t=xt,kt=(n("e973"),Object(c["a"])($t,wt,yt,!1,null,null,null));kt.options.__file="manageAlbums.vue";var At=kt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-outline-warning",on:{click:function(e){t.addImage=!0}}},[n("span",{staticClass:"fa fa-plus-square"}),t._v("\n                Nova Imagem\n            ")])])]),n("div",{staticClass:"container mb-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h4",[t._v("Lista de Imagens")]),t._l(t.images,function(e){return t.images.length>0?n("img",{key:e.uuid,attrs:{width:"240",height:"180",src:e.image_url,alt:e.name,title:e.name}}):t._e()})],2)])]),n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col"},[null!==t.nextImages?n("button",{staticClass:"btn btn-outline-success btn-block",attrs:{type:"button"},on:{click:function(e){t.getAllImages(t.nextImages)}}},[t._v("\n                Mais Imagens...\n            ")]):t._e()])]),n("file-create",{attrs:{show:t.addImage},on:{close:function(e){t.addImage=!1},updateGallery:function(e){t.images.push(e)}}})],1)},jt=[],Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){e.preventDefault(),t.createFile(e)}}},[n("Modal",{attrs:{modalSize:"modal-md",hasFooter:!0,title:"Adicionar Foto",show:t.show},on:{click:function(e){t.$emit("close")}}},[n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("Alert",{attrs:{showAlert:t.showAlert,cssClass:"danger"},on:{close:function(e){t.showAlert=!1}}},[t._v("\n                        "+t._s(t.uploadErrors)+"\n                    ")]),n("app-input",{attrs:{type:"text",label:"Nome do Arquivo:",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("Upload",{attrs:{label:"upload",filename:t.uploaded,required:!0},model:{value:t.uploaded,callback:function(e){t.uploaded=e},expression:"uploaded"}})],1)])]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn btn btn-secondary",attrs:{type:"submit"}},[t._v("Salvar")])])])],1)},Et=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-group btn btn-outline-secondary"},[t._m(0),n("label",{attrs:{for:t.label}},[t._v(" "+t._s(t.label))]),n("input",{attrs:{type:t.type,id:t.label,required:t.required},on:{change:function(e){t.$emit("change",e.target.files)}}})]),null!==t.filename?n("p",[t._v("\n         "+t._s(t.filename[0].name)+"\n        ")]):t._e()])},Mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fa fa-upload"})])}],St={name:"Upload",model:{event:"change"},props:{label:{type:String,default:"Upload",required:!0},required:{type:Boolean,default:!1},filename:{default:""}},data:function(){return{type:"file"}},methods:{handleChange:function(t){console.log(t.target),this.$emit("change",t.target.files),t.target.files=null}}},Dt=St,Nt=(n("58e0"),Object(c["a"])(Dt,qt,Mt,!1,null,"e6de0524",null));Nt.options.__file="Upload.vue";var Bt=Nt.exports,Ft={name:"FileCreate",components:{Upload:Bt,Modal:mt},props:{show:{type:Boolean,default:!1}},data:function(){return{name:null,showAlert:!1,uploaded:null,uploadErrors:null}},methods:{createFile:function(t){var e=this,n=new FormData;n.append("image",this.uploaded[0]),n.append("name",this.name),this.$http.post(this.$resource.imageUpload,n).then(function(n){e.name=null,e.uploaded=null,e.uploadErrors=null,t.target.reset(),e.$emit("updateGallery",n.data),e.$emit("close")}).catch(function(t){var n=t.response.data;e.uploadErrors=n,e.showAlert=!0})}}},Lt=Ft,Pt=(n("7065"),Object(c["a"])(Lt,Ot,Et,!1,null,null,null));Pt.options.__file="FileCreate.vue";var Tt=Pt.exports,Ut={name:"imagesManager",components:{FileCreate:Tt},data:function(){return{images:[],addImage:!1,nextImages:null}},mounted:function(){this.getAllImages(this.$resource.images)},methods:{getAllImages:function(t){var e=this;this.$http.get(t).then(function(t){var n=null;t.data.results.forEach(function(t){return e.images.push(t)}),null!==t.data.next&&(n=e.$resource.images+"/?"+t.data.next.split("?")[1]),e.nextImages=n}).catch(function(t){console.log(t.response)})},updateGallery:function(t){console.log(t),this.images.push(t)}}},Gt=Ut,zt=(n("ec06"),Object(c["a"])(Gt,It,jt,!1,null,null,null));zt.options.__file="imagesManager.vue";var Ht=zt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._m(0),n("button",{staticClass:"btn btn-outline-info mx-2",on:{click:function(e){t.createAlbum=!0}}},[n("span",{staticClass:"fa fa-plus-square"}),t._v("\n                 Criar Album\n            ")])])]),n("create-album",{attrs:{show:t.createAlbum},on:{close:function(e){t.createAlbum=!1}}})],1)},Rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-outline-info mx-2"},[n("span",{staticClass:"fa fa-eye"}),t._v("\n                Ver Albums")])}],Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.createAlbum(e)}}},[n("modal",{attrs:{show:t.show,modalSize:"modal-full",title:"Criar Album"},on:{click:t.close}},[n("div",{attrs:{slot:"body"},slot:"body"},[n("modal",{attrs:{title:"Instruções",show:t.hasInstructions},on:{click:t.dismiss}},[n("div",{attrs:{slot:"body"},slot:"body"},[t.success?n("div",[n("h4",[t._v(t._s(t.message))])]):n("div",[n("h5",[t._v("Foto de Capa escolhida. ")]),n("h6",[t._v("Ecolha agora as imagens que farão parte do álbum.")])])])]),n("upload-form",{attrs:{show:t.uploadForm=t.uploadForm},on:{close:function(e){t.uploadForm=!1},getNewImage:function(e){t.images.push(e)}}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("app-input",{attrs:{type:"text",required:"",label:"Nome do Album:",placeholder:"Nome do Album"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("app-input",{attrs:{type:"text",required:"",label:"Descição:",placeholder:"Descrição"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("app-checkbox",{attrs:{label:t.publish.label},model:{value:t.publish.checked,callback:function(e){t.$set(t.publish,"checked",e)},expression:"publish.checked"}}),n("app-checkbox",{attrs:{label:t.public.label},model:{value:t.public.checked,callback:function(e){t.$set(t.public,"checked",e)},expression:"public.checked"}}),0===t.images.length?n("div",[n("Alert",{attrs:{showAlert:!0,cssClass:"warning",hasCloseButton:!1}},[t._v("\n                            Não existem fotos disponíves para capa.\n                        ")]),n("button",{staticClass:"btn btn-outline-warning btn-block",attrs:{type:"button"},on:{click:function(e){t.uploadForm=!0}}},[n("span",{staticClass:"fa fa-plus-square"}),t._v("\n                            Criar imagem de Capa\n                        ")])],1):n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col"},[null!==t.prevImages?n("button",{staticClass:"btn btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){t.getImages(t.prevImages)}}},[n("i",{staticClass:"fa fa-chevron-left"})]):t._e()]),n("div",{staticClass:"col-10"},[n("gallery",{attrs:{title:t.selectionType,images:t.images},on:{click:function(e){t.selectedImage(e)}}})],1),n("div",{staticClass:"col"},[null!==t.nextImages?n("button",{staticClass:"float-right btn btn-outline-primary align-middle",attrs:{type:"button"},on:{click:function(e){t.getImages(t.nextImages)}}},[n("i",{staticClass:"fa fa-chevron-right"})]):t._e()])])],1)])],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn btn-outline-primary mx-2",attrs:{disabled:null===t.thumbnail}},[t._v("\n                Criar Album\n            ")]),n("button",{staticClass:"btn btn-outline-danger mx-2",attrs:{type:"button"},on:{click:t.close}},[t._v("\n                Cancelar\n            ")])])])],1)},Xt=[],Kt=(n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("input",{attrs:{type:"checkbox",id:t.label},on:{change:function(e){t.$emit("input",e.target.checked)}}}),n("label",{attrs:{for:t.label}},[t._v(" "+t._s(t.label))])])}),Qt=[],Wt={name:"AppCheckbox",props:{label:{type:String,default:"Label Name Here",required:!0}},methods:{handleInput:function(t){console.log(t.target.checked),this.$emit("input",t.target.checked)}}},Yt=Wt,Zt=(n("92e1"),Object(c["a"])(Yt,Kt,Qt,!1,null,"b5aa7876",null));Zt.options.__file="AppCheckbox.vue";var te=Zt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h4",[t._v(t._s(t.title))]),t._l(t.images,function(e){return t.images.length>0?n("img",{key:e.uuid,class:{selectedImage:t.isSelected(e.uuid)},attrs:{width:"240",height:"180",src:e.image_url,alt:e.name,title:e.name},on:{click:function(n){t.selectImage(e)}}}):t._e()})],2)])])},ne=[],ae={name:"Gallery",props:{images:{type:Array,required:!0,default:function(){return[]}},title:{type:String}},data:function(){return{selectedImages:[]}},methods:{selectImage:function(t){var e=this.selectedImages.map(function(t){return t.uuid}).indexOf(t.uuid);-1===e?this.selectedImages.push(t):this.selectedImages.splice(e,1),this.$emit("click",this.selectedImages)},isSelected:function(t){return 0!==this.selectedImages.filter(function(e){return e.uuid===t}).length}}},se=ae,ie=(n("4089"),Object(c["a"])(se,ee,ne,!1,null,"2f2a6e16",null));ie.options.__file="Gallery.vue";var oe=ie.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){e.preventDefault(),t.createFile(e)}}},[n("Modal",{attrs:{modalSize:"modal-md",hasFooter:!0,title:"Adicionar Foto",show:t.show},on:{click:function(e){t.$emit("close")}}},[n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("Alert",{attrs:{showAlert:t.alert.showAlert,cssClass:t.alert.cssClass},on:{close:function(e){t.alert.showAlert=!1}}},[t._v("\n                        "+t._s(t.alert.message)+"\n                    ")]),n("app-input",{attrs:{type:"text",label:"Nome do Arquivo:",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("Upload",{attrs:{label:"upload",filename:t.uploaded,required:!0},model:{value:t.uploaded,callback:function(e){t.uploaded=e},expression:"uploaded"}})],1)])]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn btn btn-secondary",attrs:{type:"submit"}},[t._v("Salvar")])])])],1)},re=[],ue={name:"UploadForm",components:{Upload:Bt,Modal:mt},props:{show:{type:Boolean,default:!1},alert:{type:Object,default:function(){return{showAlert:!1,cssClass:"danger",message:"Add Message Here"}}}},data:function(){return{name:null,uploaded:null,uploadErrors:null}},methods:{createFile:function(t){var e=this,n=new FormData;n.append("image",this.uploaded[0]),n.append("name",this.name),this.$http.post(this.$resource.imageUpload,n).then(function(n){e.name=null,e.uploaded=null,e.uploadErrors=null,t.target.reset(),e.$emit("updateGallery",n.data),e.$emit("close"),e.$emit("getNewImage",n.data)}).catch(function(t){var n=t.response.data;e.uploadErrors=n,e.showAlert=!0})}}},ce=ue,de=(n("51a2"),Object(c["a"])(ce,le,re,!1,null,null,null));de.options.__file="UploadForm.vue";var me=de.exports,pe={name:"CreateAlbum",components:{Modal:mt,AppCheckbox:te,Gallery:oe,UploadForm:me},props:{show:{type:Boolean,default:!1,required:!0}},data:function(){return{initialData:null,name:null,description:null,publish:{label:"Publicar",checked:!1},public:{label:"Público",checked:!1},images:[],thumbnail:null,albumPictures:[],hasInstructions:!1,success:!1,uploadForm:!1,prevImages:null,nextImages:null}},mounted:function(){this.setInitialData(),this.getImages(this.$resource.thumbnails)},methods:{getImages:function(t){var e=this;this.$http.get(t).then(function(n){var a=null,s=null;e.images=n.data.results,null!==n.data.previous&&(a=t+"/?"+n.data.previous.split("?")[1]),null!==n.data.next&&(s=t+"/?"+n.data.next.split("?")[1]),e.prevImages=a,e.nextImages=s,e.uploadForm=0===n.data.length}).catch(function(t){return console.log(t.response)})},selectedImage:function(t){null===this.thumbnail&&(this.thumbnail=t[0],this.hasInstructions=!0,this.getImages(this.$resource.images)),this.albumPictures=t},createAlbum:function(t){var e=this,n={name:this.name,description:this.description,published:this.publish.checked,public:this.public.checked,thumbnail:this.thumbnail.uuid,images:this.albumPictures.map(function(t){return t.uuid})},a=this.$cookies.get("csrftoken"),s={ContentType:"application/json","X-CSRFToken":a};this.$http.post(this.$resource.createAlbum,n,{headers:s}).then(function(n){t.target.reset(),e.resetData(),e.message="Album Incluído com Sucesso",e.hasInstructions=!0,e.success=!0,e.getImages(e.$resource.thumbnails),e.albumPicture=[]}).catch(function(t){console.log(t.response)})},setInitialData:function(){var t=this,e={};Object.keys(this.$data).forEach(function(n){"initialData"!==n&&"images"!==n&&(e[n]=t.$data[n])}),this.initialData=e},close:function(){this.resetData(),this.$emit("close")},resetData:function(){var t=this;Object.keys(this.initialData).forEach(function(e){return t.$data[e]=t.initialData[e]})},dismiss:function(){this.hasInstructions=!1,this.success=!1,this.message=null}},computed:{selectionType:function(){return null===this.thumbnail?"Imagem de Capa":"Imagens do Album"}}},fe=pe,he=(n("cf8d"),Object(c["a"])(fe,Jt,Xt,!1,null,null,null));he.options.__file="CreateAlbum.vue";var be=he.exports,ve={name:"AlbumManager",components:{CreateAlbum:be},data:function(){return{createAlbum:!1}}},ge=ve,_e=(n("c77c"),Object(c["a"])(ge,Vt,Rt,!1,null,null,null));_e.options.__file="AlbumManager.vue";var Ce=_e.exports;a["a"].use(_["a"]);var we=new _["a"]({mode:"history",routes:[{path:"/",name:"home",component:k},{path:"/album:albumId",name:"album",component:q,props:!0},{path:"/cliente",name:"client",component:z},{path:"/contact",name:"contact",component:K},{path:"/logout",name:"logout",component:Ct},{path:"/managealbums",name:"managealbums",component:At},{path:"/admin/images",name:"imagesmanager",component:Ht},{path:"/admin/albums",name:"albummanager",component:Ce}]}),ye=n("2b27"),xe=n.n(ye),$e="/api/v1",ke={base:$e,album:$e+"/albums",publicAlbums:$e+"/albums/public",privateAlbums:$e+"/albums/private",brand:$e+"/frontend/brand",navbar:$e+"/frontend/navbaritems",contact:$e+"/contact",sendMessage:$e+"/contact/send",login:$e+"/frontend/login/",logout:$e+"/frontend/logout/",images:$e+"/albums/images",imageUpload:$e+"/albums/images/new",thumbnails:$e+"/albums/thumbnails",createAlbum:$e+"/albums/new/",adminMenu:$e+"/frontend/adminmenu"},Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-4",attrs:{id:"image"}},[n("img",{attrs:{alt:t.alt,src:t.src,width:t.width,height:t.height},on:{click:function(e){t.$emit("click")}}}),n("h3",{attrs:{id:"description"}},[t._v("\n        "+t._s(t.description)+"\n    ")])])},Ie=[],je={name:"ImagePlaceHolder",props:{width:{},height:{default:"10%"},alt:{type:String},src:{type:String},description:{type:String}}},Oe=je,Ee=(n("fb28"),Object(c["a"])(Oe,Ae,Ie,!1,null,"6bb777d3",null));Ee.options.__file="ImagePlaceHolder.vue";var qe=Ee.exports,Me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Overlay",{attrs:{show:t.showImage}},[n("span",{staticClass:"closebtn",on:{click:function(e){t.$emit("click")}}},[t._v("\n        ×\n    ")]),n("div",[n("div",{staticClass:"image"},[n("div",{staticClass:"imageCounter"},[t._v(t._s(t.index+1)+"/"+t._s(t.imageCount))]),n("img",{attrs:{src:t.image.src}})]),t.index>0?n("div",{staticClass:"prev",on:{click:t.prev}},[t._v("\n            ❮\n        ")]):t._e(),t.index!==t.imageCount-1?n("div",{staticClass:"next",on:{click:t.next}},[t._v("\n            ❯\n        ")]):t._e()])])},Se=[],De=(n("c5f6"),{name:"ImageViewer",props:{showImage:{type:Boolean,default:!1},image:{type:Object},imageCount:{type:Number},index:{type:Number}},methods:{next:function(){this.index!==this.imageCount-1&&(this.$emit("click"),this.$emit("nextImage",this.index+1))},prev:function(){this.index>0&&(this.$emit("click"),this.$emit("prevImage",this.index-1))}}}),Ne=De,Be=(n("8445"),Object(c["a"])(Ne,Me,Se,!1,null,"10220f0a",null));Be.options.__file="ImageViewer.vue";var Fe=Be.exports,Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col",attrs:{id:"container"},on:{click:function(e){t.$emit("click")}}},[n("div",{style:[t.rotateCard],attrs:{id:"card"}},[t._t("name"),t._t("img"),t._t("desc",null,{id:"desc"})],2)])},Pe=[],Te={name:"PhotoCard",props:{size:{type:String,default:"3"},hasImage:{type:Boolean}},computed:{rotateCard:function(){var t=Math.floor(7*Math.random());return t*=1==Math.floor(2*Math.random())?1:-1,{transform:"rotate("+t+"deg)"}}}},Ue=Te,Ge=(n("3782"),Object(c["a"])(Ue,Le,Pe,!1,null,"b56b3850",null));Ge.options.__file="PhotoCard.vue";var ze=Ge.exports,He=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:function(e){t.$emit("click")}}},[n("div",{staticClass:"card-body"},[n("h5",[t._v(t._s(t.title))]),t._t("content"),n("div",{attrs:{id:"cardIcon"}},[n("i",{class:t.icon})])],2)])},Ve=[],Re={name:"Card",props:{title:{type:String},icon:{type:String,default:null}}},Je=Re,Xe=(n("0ab0"),Object(c["a"])(Je,He,Ve,!1,null,null,null));Xe.options.__file="Card.vue";var Ke=Xe.exports,Qe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"float-right",attrs:{id:"items"}},t._l(t.menuItems,function(t){return n("NavbarItem",{key:t.uuid,attrs:{name:t.name,link:t.link}})}))])])},We=[],Ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[n("router-link",{attrs:{to:t.link}},[t._v("\n        "+t._s(t.name)+"\n    ")])],1)},Ze=[],tn={name:"NavbarItem",props:{name:{type:String,required:!0},link:{type:String,default:"/"}}},en=tn,nn=(n("f3e9"),Object(c["a"])(en,Ye,Ze,!1,null,"32b0ac1e",null));nn.options.__file="NavbarItem.vue";var an=nn.exports,sn={name:"NavBar",components:{NavbarItem:an},mounted:function(){this.getMenu()},data:function(){return{menuItems:[]}},methods:{getMenu:function(){var t=this;this.$http.get(this.$resource.navbar).then(function(e){t.menuItems=e.data.results}).catch(function(t){return console.log(t)})}}},on=sn,ln=(n("d6ca"),Object(c["a"])(on,Qe,We,!1,null,"f7399950",null));ln.options.__file="navBar.vue";var rn=ln.exports,un=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.label))]),n("input",{staticClass:"form-control",attrs:{type:t.type,required:t.required,disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}})])},cn=[],dn={name:"AppInput",props:{label:{type:String},type:{type:String,default:"text"},required:{type:Boolean,default:!1},value:{default:"null"},disabled:{type:Boolean,default:!1}}},mn=dn,pn=(n("d00d"),Object(c["a"])(mn,un,cn,!1,null,null,null));pn.options.__file="AppInput.vue";var fn=pn.exports,hn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.label))]),n("textarea",{staticClass:"form-control",attrs:{rows:t.rows,required:t.required},on:{input:function(e){t.$emit("input",e.target.value)}}})])},bn=[],vn={name:"AppTextArea",props:{label:{type:String},rows:{type:Number,default:5},required:{type:Boolean,default:!1}}},gn=vn,_n=(n("6630"),Object(c["a"])(gn,hn,bn,!1,null,null,null));_n.options.__file="AppTextArea.vue";var Cn=_n.exports,wn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAlert,expression:"showAlert"}],class:["alert","alert-"+t.cssClass]},[t.hasCloseButton?n("a",{staticClass:"close",on:{click:function(e){t.$emit("close")}}},[t._v("\n                    ×\n                ")]):t._e(),t._t("default")],2)])],1)])},yn=[],xn={name:"Alert",props:{cssClass:{type:String,default:"success"},showAlert:{type:Boolean,default:!1,required:!0},hasCloseButton:{type:Boolean,default:!0}},data:function(){return{show:!1}}},$n=xn,kn=(n("a996"),Object(c["a"])($n,wn,yn,!1,null,"6ce051e2",null));kn.options.__file="Alert.vue";var An=kn.exports;g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken",a["a"].config.productionTip=!1,a["a"].component("ImagePlaceHolder",qe),a["a"].component("NavBar",rn),a["a"].component("Overlay",rt),a["a"].component("PhotoCard",ze),a["a"].component("Card",Ke),a["a"].component("ImageViewer",Fe),a["a"].component("AppInput",fn),a["a"].component("AppTextArea",Cn),a["a"].component("Alert",An),a["a"].use(xe.a),a["a"].prototype.$http=g.a,a["a"].prototype.$resource=ke,new a["a"]({router:we,render:function(t){return t(b)}}).$mount("#app")},"58e0":function(t,e,n){"use strict";var a=n("a772"),s=n.n(a);s.a},6273:function(t,e,n){},6630:function(t,e,n){"use strict";var a=n("f2f5"),s=n.n(a);s.a},6775:function(t,e,n){"use strict";var a=n("8cdd"),s=n.n(a);s.a},7046:function(t,e,n){},7065:function(t,e,n){"use strict";var a=n("6273"),s=n.n(a);s.a},"70f8":function(t,e,n){},"7d2e":function(t,e,n){},8445:function(t,e,n){"use strict";var a=n("a8a6"),s=n.n(a);s.a},"8cdd":function(t,e,n){},"92e1":function(t,e,n){"use strict";var a=n("7d2e"),s=n.n(a);s.a},"9cf0":function(t,e,n){"use strict";var a=n("70f8"),s=n.n(a);s.a},a2e6:function(t,e,n){"use strict";var a=n("e9b6"),s=n.n(a);s.a},a458:function(t,e,n){"use strict";var a=n("2582"),s=n.n(a);s.a},a772:function(t,e,n){},a8a6:function(t,e,n){},a996:function(t,e,n){"use strict";var a=n("2bf4"),s=n.n(a);s.a},aa32:function(t,e,n){},ad3f:function(t,e,n){"use strict";var a=n("ddac"),s=n.n(a);s.a},b27d:function(t,e,n){},b7eb:function(t,e,n){},c00a:function(t,e,n){},c77c:function(t,e,n){"use strict";var a=n("e714"),s=n.n(a);s.a},c944:function(t,e,n){},c96c:function(t,e,n){"use strict";var a=n("01b0"),s=n.n(a);s.a},cd3f:function(t,e,n){},cf8d:function(t,e,n){"use strict";var a=n("cd3f"),s=n.n(a);s.a},d00d:function(t,e,n){"use strict";var a=n("b27d"),s=n.n(a);s.a},d3ca:function(t,e,n){},d6ca:function(t,e,n){"use strict";var a=n("1bcd"),s=n.n(a);s.a},ddac:function(t,e,n){},e5d2:function(t,e,n){},e714:function(t,e,n){},e973:function(t,e,n){"use strict";var a=n("aa32"),s=n.n(a);s.a},e9a7:function(t,e,n){},e9b6:function(t,e,n){},ec06:function(t,e,n){"use strict";var a=n("e5d2"),s=n.n(a);s.a},f2f5:function(t,e,n){},f3e9:function(t,e,n){"use strict";var a=n("3c9d"),s=n.n(a);s.a},f6a8:function(t,e,n){},fb28:function(t,e,n){"use strict";var a=n("443d"),s=n.n(a);s.a}});
//# sourceMappingURL=app.080e07f4.js.map