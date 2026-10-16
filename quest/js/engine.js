(()=>{var Ya="170";var Jc=0,ul=1,$c=2;var vc=1,Kc=2,Hn=3,ai=0,He=1,En=2,ri=0,Qi=1,dl=2,fl=3,pl=4,Qc=5,Ei=100,jc=101,th=102,eh=103,nh=104,ih=200,sh=201,rh=202,oh=203,Lo=204,Do=205,ah=206,lh=207,ch=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,Uo=0,No=1,Fo=2,ns=3,Oo=4,Bo=5,zo=6,ko=7,Za=0,gh=1,_h=2,oi=0,xh=1,vh=2,yh=3,Mh=4,Sh=5,bh=6,Eh=7;var yc=300,is=301,ss=302,Ho=303,Vo=304,Gr=306,rs=1e3,Ai=1001,Go=1002,Tn=1003,wh=1004;var Gs=1005;var Ln=1006,Qr=1007;var Ri=1008;var Xn=1009,Mc=1010,Sc=1011,Cs=1012,Ja=1013,Ci=1014,Vn=1015,Di=1016,$a=1017,Ka=1018,os=1020,bc=35902,Ec=1021,wc=1022,wn=1023,Tc=1024,Ac=1025,ji=1026,as=1027,Rc=1028,Qa=1029,Cc=1030,ja=1031;var tl=1033,fr=33776,pr=33777,mr=33778,gr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,Zo=36196,Jo=37492,$o=37496,Ko=37808,Qo=37809,jo=37810,ta=37811,ea=37812,na=37813,ia=37814,sa=37815,ra=37816,oa=37817,aa=37818,la=37819,ca=37820,ha=37821,_r=36492,ua=36494,da=36495,Ic=36283,fa=36284,pa=36285,ma=36286;var xr=2300,ga=2301,jr=2302,ml=2400,gl=2401,_l=2402;var Th=3200,Ah=3201;var Pc=0,Rh=1,si="",De="srgb",us="srgb-linear",Wr="linear",Me="srgb";var Oi=7680;var xl=519,Ch=512,Ih=513,Ph=514,Lc=515,Lh=516,Dh=517,Uh=518,Nh=519,vl=35044;var yl="300 es",Gn=2e3,vr=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,_a=180/Math.PI;function Fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function Fh(i,t){return(i%t+t)%t}function eo(i,t,e){return(1-e)*i+e*t}function vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ae=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],_=n[5],v=n[8],S=s[0],m=s[3],u=s[6],I=s[1],A=s[4],E=s[7],O=s[2],D=s[5],F=s[8];return r[0]=o*S+a*I+l*O,r[3]=o*m+a*A+l*D,r[6]=o*u+a*E+l*F,r[1]=c*S+h*I+d*O,r[4]=c*m+h*A+d*D,r[7]=c*u+h*E+d*F,r[2]=f*S+_*I+v*O,r[5]=f*m+_*A+v*D,r[8]=f*u+_*E+v*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,_=c*r-o*l,v=e*d+n*f+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=_*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new Qt;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){let i=Is("canvas");return i.style.display="block",i}var Ml={};function Ts(i){i in Ml||(Ml[i]=!0,console.warn(i))}function Bh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var de={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],El=[.3127,.329],wl=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[us]:{primaries:Sl,whitePoint:El,transfer:Wr,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Sl,whitePoint:El,transfer:Me,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var Bi,xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Is("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hh=0,yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(io(s[o].image)):r.push(io(s[o]))}else r=io(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function io(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vh=0,on=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=Ln,o=Ri,a=wn,l=Xn,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Fs(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=yc;on.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],_=l[5],v=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,E=(_+1)/2,O=(u+1)/2,D=(h+f)/4,F=(d+S)/4,U=(v+m)/4;return A>E&&A>O?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=D/n,r=F/n):E>O?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=F/r,s=U/r),this.set(n,s,r,e),this}let I=Math.sqrt((m-v)*(m-v)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(I)<.001&&(I=1),this.x=(m-v)/I,this.y=(d-S)/I,this.z=(f-h)/I,this.w=Math.acos((c+_+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},va=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],_=r[o+1],v=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=_,t[e+2]=v,t[e+3]=S;return}if(d!==S||l!==f||c!==_||h!==v){let m=1-a,u=l*f+c*_+h*v+d*S,I=u>=0?1:-1,A=1-u*u;if(A>Number.EPSILON){let O=Math.sqrt(A),D=Math.atan2(O,u*I);m=Math.sin(m*D)/O,a=Math.sin(a*D)/O}let E=a*I;if(l=l*m+f*E,c=c*m+_*E,h=h*m+v*E,d=d*m+S*E,m===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],_=r[o+2],v=r[o+3];return t[e]=a*v+h*d+l*_-c*f,t[e+1]=l*v+h*f+c*d-a*_,t[e+2]=c*v+h*_+a*f-l*d,t[e+3]=h*v-a*d-l*f-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),_=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*_*v,this._y=c*_*d-f*h*v,this._z=c*h*v+f*_*d,this._w=c*h*d-f*_*v;break;case"YXZ":this._x=f*h*d+c*_*v,this._y=c*_*d-f*h*v,this._z=c*h*v-f*_*d,this._w=c*h*d+f*_*v;break;case"ZXY":this._x=f*h*d-c*_*v,this._y=c*_*d+f*h*v,this._z=c*h*v+f*_*d,this._w=c*h*d-f*_*v;break;case"ZYX":this._x=f*h*d-c*_*v,this._y=c*_*d+f*h*v,this._z=c*h*v-f*_*d,this._w=c*h*d+f*_*v;break;case"YZX":this._x=f*h*d+c*_*v,this._y=c*_*d+f*h*v,this._z=c*h*v-f*_*d,this._w=c*h*d-f*_*v;break;case"XZY":this._x=f*h*d-c*_*v,this._y=c*_*d-f*h*v,this._z=c*h*v+f*_*d,this._w=c*h*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-c)*_,this._z=(o-s)*_}else if(n>a&&n>d){let _=2*Math.sqrt(1+n-a-d);this._w=(h-l)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+c)/_}else if(a>d){let _=2*Math.sqrt(1+a-n-d);this._w=(r-c)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(l+h)/_}else{let _=2*Math.sqrt(1+d-n-a);this._w=(o-s)/_,this._x=(r+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},so=new G,Al=new ci,Ii=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Xs.subVectors(this.max,ys),zi.subVectors(t.a,ys),ki.subVectors(t.b,ys),Hi.subVectors(t.c,ys),Qn.subVectors(ki,zi),jn.subVectors(Hi,ki),_i.subVectors(zi,Hi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!ro(e,zi,ki,Hi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!ro(e,zi,ki,Hi,Xs))?!1:(qs.crossVectors(Qn,jn),e=[qs.x,qs.y,qs.z],ro(e,zi,ki,Hi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Fn=[new G,new G,new G,new G,new G,new G,new G,new G],yn=new G,Ws=new Ii,zi=new G,ki=new G,Hi=new G,Qn=new G,jn=new G,_i=new G,ys=new G,Xs=new G,qs=new G,xi=new G;function ro(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Gh=new Ii,Ms=new G,oo=new G,ls=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(oo)),this.expandByPoint(Ms.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new G,ao=new G,Ys=new G,ti=new G,lo=new G,Zs=new G,co=new G,Sr=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=ti.dot(this.direction),l=-ti.dot(Ys),c=ti.lengthSq(),h=Math.abs(1-o*o),d,f,_,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){let S=1/h;d*=S,f*=S,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),_=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ao).addScaledVector(Ys,f),_}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){lo.subVectors(e,t),Zs.subVectors(n,t),co.crossVectors(lo,Zs);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);let l=a*this.direction.dot(Zs.crossVectors(ti,Zs));if(l<0)return null;let c=a*this.direction.dot(lo.cross(ti));if(c<0||l+c>o)return null;let h=-a*ti.dot(co);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,_,v,S,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,_,v,S,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,_,v,S,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=_,u[7]=v,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,_=o*d,v=a*h,S=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=_+v*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=v+_*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,_=l*d,v=c*h,S=c*d;e[0]=f+S*a,e[4]=v*a-_,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=_*a-v,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,_=l*d,v=c*h,S=c*d;e[0]=f-S*a,e[4]=-o*d,e[8]=v+_*a,e[1]=_+v*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,_=o*d,v=a*h,S=a*d;e[0]=l*h,e[4]=v*c-_,e[8]=f*c+S,e[1]=l*d,e[5]=S*c+f,e[9]=_*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,_=o*c,v=a*l,S=a*c;e[0]=l*h,e[4]=S-f*d,e[8]=v*d+_,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=_*d+v,e[10]=f-S*d}else if(t.order==="XZY"){let f=o*l,_=o*c,v=a*l,S=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+S,e[5]=o*h,e[9]=_*d-v,e[2]=v*d-_,e[6]=a*h,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wh,t,Xh)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ei.crossVectors(n,hn),ei.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ei.crossVectors(n,hn)),ei.normalize(),Js.crossVectors(hn,ei),s[0]=ei.x,s[4]=Js.x,s[8]=hn.x,s[1]=ei.y,s[5]=Js.y,s[9]=hn.y,s[2]=ei.z,s[6]=Js.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],_=n[13],v=n[2],S=n[6],m=n[10],u=n[14],I=n[3],A=n[7],E=n[11],O=n[15],D=s[0],F=s[4],U=s[8],w=s[12],b=s[1],L=s[5],nt=s[9],Z=s[13],K=s[2],ot=s[6],et=s[10],ut=s[14],N=s[3],C=s[7],xt=s[11],Ut=s[15];return r[0]=o*D+a*b+l*K+c*N,r[4]=o*F+a*L+l*ot+c*C,r[8]=o*U+a*nt+l*et+c*xt,r[12]=o*w+a*Z+l*ut+c*Ut,r[1]=h*D+d*b+f*K+_*N,r[5]=h*F+d*L+f*ot+_*C,r[9]=h*U+d*nt+f*et+_*xt,r[13]=h*w+d*Z+f*ut+_*Ut,r[2]=v*D+S*b+m*K+u*N,r[6]=v*F+S*L+m*ot+u*C,r[10]=v*U+S*nt+m*et+u*xt,r[14]=v*w+S*Z+m*ut+u*Ut,r[3]=I*D+A*b+E*K+O*N,r[7]=I*F+A*L+E*ot+O*C,r[11]=I*U+A*nt+E*et+O*xt,r[15]=I*w+A*Z+E*ut+O*Ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],_=t[14],v=t[3],S=t[7],m=t[11],u=t[15];return v*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*_-n*l*_)+S*(+e*l*_-e*c*f+r*o*f-s*o*_+s*c*h-r*l*h)+m*(+e*c*d-e*a*_-r*o*d+n*o*_+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],_=t[11],v=t[12],S=t[13],m=t[14],u=t[15],I=d*m*c-S*f*c+S*l*_-a*m*_-d*l*u+a*f*u,A=v*f*c-h*m*c-v*l*_+o*m*_+h*l*u-o*f*u,E=h*S*c-v*d*c+v*a*_-o*S*_-h*a*u+o*d*u,O=v*d*l-h*S*l-v*a*f+o*S*f+h*a*m-o*d*m,D=e*I+n*A+s*E+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=I*F,t[1]=(S*f*r-d*m*r-S*s*_+n*m*_+d*s*u-n*f*u)*F,t[2]=(a*m*r-S*l*r+S*s*c-n*m*c-a*s*u+n*l*u)*F,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*_-n*l*_)*F,t[4]=A*F,t[5]=(h*m*r-v*f*r+v*s*_-e*m*_-h*s*u+e*f*u)*F,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*u-e*l*u)*F,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*_+e*l*_)*F,t[8]=E*F,t[9]=(v*d*r-h*S*r-v*n*_+e*S*_+h*n*u-e*d*u)*F,t[10]=(o*S*r-v*a*r+v*n*c-e*S*c-o*n*u+e*a*u)*F,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*_-e*a*_)*F,t[12]=O*F,t[13]=(h*S*s-v*d*s+v*n*f-e*S*f-h*n*m+e*d*m)*F,t[14]=(v*a*s-o*S*s-v*n*l+e*S*l+o*n*m-e*a*m)*F,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,_=r*h,v=r*d,S=o*h,m=o*d,u=a*d,I=l*c,A=l*h,E=l*d,O=n.x,D=n.y,F=n.z;return s[0]=(1-(S+u))*O,s[1]=(_+E)*O,s[2]=(v-A)*O,s[3]=0,s[4]=(_-E)*D,s[5]=(1-(f+u))*D,s[6]=(m+I)*D,s[7]=0,s[8]=(v+A)*F,s[9]=(m-I)*F,s[10]=(1-(f+S))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/o,d=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),_,v;if(a===Gn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===vr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Gn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,_=(n+s)*h,v,S;if(a===Gn)v=(o+r)*d,S=-2*d;else if(a===vr)v=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new G,Mn=new Te,Wh=new G(0,0,0),Xh=new G(1,1,1),ei=new G,Js=new G,hn=new G,Rl=new Te,Cl=new ci,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qh=0,Il=new G,Gi=new ci,Bn=new Te,$s=new G,Ss=new G,Yh=new G,Zh=new ci,Pl=new G(1,0,0),Ll=new G(0,1,0),Dl=new G(0,0,1),Ul={type:"added"},Jh={type:"removed"},Wi={type:"childadded",child:null},ho={type:"childremoved",child:null},Xe=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Dn,n=new ci,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Qt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$s.copy(t):$s.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ss,$s,this.up):Bn.lookAt($s,Ss,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),_=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new G(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new G,zn=new G,uo=new G,kn=new G,Xi=new G,qi=new G,Nl=new G,fo=new G,po=new G,mo=new G,go=new fe,_o=new fe,xo=new fe,wi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),zn.subVectors(n,e),uo.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(zn),l=Sn.dot(uo),c=zn.dot(zn),h=zn.dot(uo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,_=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-_-v,v,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return go.setScalar(0),_o.setScalar(0),xo.setScalar(0),go.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(go,r.x),o.addScaledVector(_o,r.y),o.addScaledVector(xo,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),zn.subVectors(t,e),Sn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Sn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Xi.subVectors(s,n),qi.subVectors(r,n),fo.subVectors(t,n);let l=Xi.dot(fo),c=qi.dot(fo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,s);let h=Xi.dot(po),d=qi.dot(po);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xi,o);mo.subVectors(t,r);let _=Xi.dot(mo),v=qi.dot(mo);if(v>=0&&_<=v)return e.copy(r);let S=_*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(qi,a);let m=h*v-_*d;if(m<=0&&d-h>=0&&_-v>=0)return Nl.subVectors(r,s),a=(d-h)/(d-h+(_-v)),e.copy(s).addScaledVector(Nl,a);let u=1/(m+S+f);return o=S*u,a=f*u,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Fh(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vo(o,r,t+1/3),this.g=vo(o,r,t),this.b=vo(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return de.fromWorkingColorSpace(We.copy(this),t),Math.round(nn(We.r*255,0,255))*65536+Math.round(nn(We.g*255,0,255))*256+Math.round(nn(We.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=De){de.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Ks);let n=eo(ni.h,Ks.h,e),s=eo(ni.s,Ks.s,e),r=eo(ni.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Yt;Yt.NAMES=Uc;var $h=0,hi=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Fs(),this.name="",this.blending=Qi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Do,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rn=class extends hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new G,Qs=new ae,rn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}};var Er=class extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kh=0,_n=new Te,yo=new Xe,Yi=new G,un=new Ii,bs=new Ii,ze=new G,an=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?wr:Er)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(un.min,bs.min),un.expandByPoint(ze),ze.addVectors(un.max,bs.max),un.expandByPoint(ze)):(un.expandByPoint(bs.min),un.expandByPoint(bs.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(t,c),ze.add(Yi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new G,l[U]=new G;let c=new G,h=new G,d=new G,f=new ae,_=new ae,v=new ae,S=new G,m=new G;function u(U,w,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,U),_.fromBufferAttribute(r,w),v.fromBufferAttribute(r,b),h.sub(c),d.sub(c),_.sub(f),v.sub(f);let L=1/(_.x*v.y-v.x*_.y);isFinite(L)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(L),m.copy(d).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(L),a[U].add(S),a[w].add(S),a[b].add(S),l[U].add(m),l[w].add(m),l[b].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let U=0,w=I.length;U<w;++U){let b=I[U],L=b.start,nt=b.count;for(let Z=L,K=L+nt;Z<K;Z+=3)u(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let A=new G,E=new G,O=new G,D=new G;function F(U){O.fromBufferAttribute(s,U),D.copy(O);let w=a[U];A.copy(w),A.sub(O.multiplyScalar(O.dot(w))).normalize(),E.crossVectors(D,w);let L=E.dot(l[U])<0?-1:1;o.setXYZW(U,A.x,A.y,A.z,L)}for(let U=0,w=I.length;U<w;++U){let b=I[U],L=b.start,nt=b.count;for(let Z=L,K=L+nt;Z<K;Z+=3)F(t.getX(Z+0)),F(t.getX(Z+1)),F(t.getX(Z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let f=0,_=t.count;f<_;f+=3){let v=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,_=e.count;f<_;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),_=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?_=l[S]*a.data.stride+a.offset:_=l[S]*h;for(let u=0;u<h;u++)f[v++]=c[_++]}return new rn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],_=t(f,n);l.push(_)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let _=c[d];h.push(_.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fl=new Te,vi=new Sr,js=new ls,Ol=new G,tr=new G,er=new G,nr=new G,Mo=new G,ir=new G,Bl=new G,sr=new G,xe=class extends Xe{constructor(t=new an,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Mo.fromBufferAttribute(d,t),o?ir.addScaledVector(Mo,h):ir.addScaledVector(Mo.sub(e),h))}e.add(ir)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(js.containsPoint(vi.origin)===!1&&(vi.intersectSphere(js,Ol)===null||vi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){let m=f[v],u=o[m.materialIndex],I=Math.max(m.start,_.start),A=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let E=I,O=A;E<O;E+=3){let D=a.getX(E),F=a.getX(E+1),U=a.getX(E+2);s=rr(this,u,t,n,c,h,d,D,F,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),S=Math.min(a.count,_.start+_.count);for(let m=v,u=S;m<u;m+=3){let I=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);s=rr(this,o,t,n,c,h,d,I,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){let m=f[v],u=o[m.materialIndex],I=Math.max(m.start,_.start),A=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let E=I,O=A;E<O;E+=3){let D=E,F=E+1,U=E+2;s=rr(this,u,t,n,c,h,d,D,F,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let m=v,u=S;m<u;m+=3){let I=m,A=m+1,E=m+2;s=rr(this,o,t,n,c,h,d,I,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Qh(i,t,e,n,s,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ai,a),l===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);let h=Qh(i,t,e,n,tr,er,nr,Bl);if(h){let d=new G;wi.getBarycoord(Bl,tr,er,nr,d),s&&(h.uv=wi.getInterpolatedAttribute(s,a,l,c,d,new ae)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,d,new ae)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};wi.getNormal(tr,er,nr,f.normal),h.face=f,h.barycoord=d}return h}var Ze=class i extends an{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,_=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function v(S,m,u,I,A,E,O,D,F,U,w){let b=E/F,L=O/U,nt=E/2,Z=O/2,K=D/2,ot=F+1,et=U+1,ut=0,N=0,C=new G;for(let xt=0;xt<et;xt++){let Ut=xt*L-Z;for(let Jt=0;Jt<ot;Jt++){let pe=Jt*b-nt;C[S]=pe*I,C[m]=Ut*A,C[u]=K,c.push(C.x,C.y,C.z),C[S]=0,C[m]=0,C[u]=D>0?1:-1,h.push(C.x,C.y,C.z),d.push(Jt/F),d.push(1-xt/U),ut+=1}}for(let xt=0;xt<U;xt++)for(let Ut=0;Ut<F;Ut++){let Jt=f+Ut+ot*xt,pe=f+Ut+ot*(xt+1),it=f+(Ut+1)+ot*(xt+1),q=f+(Ut+1)+ot*xt;l.push(Jt,pe,q),l.push(pe,it,q),N+=6}a.addGroup(_,N,w),_+=N,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function jh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var el={clone:cs,merge:Ye},tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Tr=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new G,zl=new ae,kl=new ae,ke=class extends Tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,zl,kl),e.subVectors(kl,zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,Ma=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new ke(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let o=new ke(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let a=new ke(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let l=new ke(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new ke(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,_),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ar=class extends on{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sa=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ze(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ri});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ln),new Ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},So=new G,nu=new G,iu=new Qt,bn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=So.subVectors(n,e).cross(nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||iu.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new ls,or=new G,Ps=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],_=s[8],v=s[9],S=s[10],m=s[11],u=s[12],I=s[13],A=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,m-_,E-u).normalize(),n[1].setComponents(l+r,f+c,m+_,E+u).normalize(),n[2].setComponents(l+o,f+h,m+v,E+I).normalize(),n[3].setComponents(l-o,f-h,m-v,E-I).normalize(),n[4].setComponents(l-a,f-d,m-S,E-A).normalize(),e===Gn)n[5].setComponents(l+a,f+d,m+S,E+A).normalize();else if(e===vr)n[5].setComponents(a,d,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function su(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((_,v)=>_.start-v.start);let f=0;for(let _=1;_<d.length;_++){let v=d[f],S=d[_];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,d[f]=S)}d.length=f+1;for(let _=0,v=d.length;_<v;_++){let S=d[_];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qn=class i extends an{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,_=[],v=[],S=[],m=[];for(let u=0;u<h;u++){let I=u*f-o;for(let A=0;A<c;A++){let E=A*d-r;v.push(E,-I,0),S.push(0,0,1),m.push(A/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let I=0;I<a;I++){let A=I+c*u,E=I+c*(u+1),O=I+1+c*(u+1),D=I+1+c*u;_.push(A,E,D),_.push(E,O,D)}this.setIndex(_),this.setAttribute("position",new Ce(v,3)),this.setAttribute("normal",new Ce(S,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ou=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,df=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ff=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ef=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,If=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Of=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:ru,alphahash_pars_fragment:ou,alphamap_fragment:au,alphamap_pars_fragment:lu,alphatest_fragment:cu,alphatest_pars_fragment:hu,aomap_fragment:uu,aomap_pars_fragment:du,batching_pars_vertex:fu,batching_vertex:pu,begin_vertex:mu,beginnormal_vertex:gu,bsdfs:_u,iridescence_fragment:xu,bumpmap_pars_fragment:vu,clipping_planes_fragment:yu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:bu,color_fragment:Eu,color_pars_fragment:wu,color_pars_vertex:Tu,color_vertex:Au,common:Ru,cube_uv_reflection_fragment:Cu,defaultnormal_vertex:Iu,displacementmap_pars_vertex:Pu,displacementmap_vertex:Lu,emissivemap_fragment:Du,emissivemap_pars_fragment:Uu,colorspace_fragment:Nu,colorspace_pars_fragment:Fu,envmap_fragment:Ou,envmap_common_pars_fragment:Bu,envmap_pars_fragment:zu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Ku,envmap_vertex:Hu,fog_vertex:Vu,fog_pars_vertex:Gu,fog_fragment:Wu,fog_pars_fragment:Xu,gradientmap_pars_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:$u,lights_toon_fragment:Qu,lights_toon_pars_fragment:ju,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:od,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:_d,morphcolor_vertex:xd,morphnormal_vertex:vd,morphtarget_pars_vertex:yd,morphtarget_vertex:Md,normal_fragment_begin:Sd,normal_fragment_maps:bd,normal_pars_fragment:Ed,normal_pars_vertex:wd,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Pd,opaque_fragment:Ld,packing:Dd,premultiplied_alpha_fragment:Ud,project_vertex:Nd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Gd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Kd,transmission_fragment:Qd,transmission_pars_fragment:jd,uv_pars_fragment:tf,uv_pars_vertex:ef,uv_vertex:nf,worldpos_vertex:sf,background_vert:rf,background_frag:of,backgroundCube_vert:af,backgroundCube_frag:lf,cube_vert:cf,cube_frag:hf,depth_vert:uf,depth_frag:df,distanceRGBA_vert:ff,distanceRGBA_frag:pf,equirect_vert:mf,equirect_frag:gf,linedashed_vert:_f,linedashed_frag:xf,meshbasic_vert:vf,meshbasic_frag:yf,meshlambert_vert:Mf,meshlambert_frag:Sf,meshmatcap_vert:bf,meshmatcap_frag:Ef,meshnormal_vert:wf,meshnormal_frag:Tf,meshphong_vert:Af,meshphong_frag:Rf,meshphysical_vert:Cf,meshphysical_frag:If,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:Df,points_frag:Uf,shadow_vert:Nf,shadow_frag:Ff,sprite_vert:Of,sprite_frag:Bf},yt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ye([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ye([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ye([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ye([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ye([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ye([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ye([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ye([yt.lights,yt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Pn.physical={uniforms:Ye([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var ar={r:0,b:0,g:0},Mi=new Dn,zf=new Te;function kf(i,t,e,n,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,d=null,f=0,_=null;function v(I){let A=I.isScene===!0?I.background:null;return A&&A.isTexture&&(A=(I.backgroundBlurriness>0?e:t).get(A)),A}function S(I){let A=!1,E=v(I);E===null?u(a,l):E&&E.isColor&&(u(E,1),A=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(I,A){let E=v(A);E&&(E.isCubeTexture||E.mapping===Gr)?(h===void 0&&(h=new xe(new Ze(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:cs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(A.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(Mi)),h.material.toneMapped=de.getTransfer(E.colorSpace)!==Me,(d!==E||f!==E.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,_=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new xe(new qn(2,2),new xn({name:"BackgroundMaterial",uniforms:cs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=de.getTransfer(E.colorSpace)!==Me,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,_=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null))}function u(I,A){I.getRGB(ar,Nc(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(I,A=1){a.set(I),l=A,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(I){l=I,u(a,l)},render:S,addToRenderList:m}}function Hf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,L,nt,Z,K){let ot=!1,et=d(Z,nt,L);r!==et&&(r=et,c(r.object)),ot=_(b,Z,nt,K),ot&&v(b,Z,nt,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,E(b,L,nt,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,L,nt){let Z=nt.wireframe===!0,K=n[b.id];K===void 0&&(K={},n[b.id]=K);let ot=K[L.id];ot===void 0&&(ot={},K[L.id]=ot);let et=ot[Z];return et===void 0&&(et=f(l()),ot[Z]=et),et}function f(b){let L=[],nt=[],Z=[];for(let K=0;K<e;K++)L[K]=0,nt[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:nt,attributeDivisors:Z,object:b,attributes:{},index:null}}function _(b,L,nt,Z){let K=r.attributes,ot=L.attributes,et=0,ut=nt.getAttributes();for(let N in ut)if(ut[N].location>=0){let xt=K[N],Ut=ot[N];if(Ut===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(Ut=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(Ut=b.instanceColor)),xt===void 0||xt.attribute!==Ut||Ut&&xt.data!==Ut.data)return!0;et++}return r.attributesNum!==et||r.index!==Z}function v(b,L,nt,Z){let K={},ot=L.attributes,et=0,ut=nt.getAttributes();for(let N in ut)if(ut[N].location>=0){let xt=ot[N];xt===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));let Ut={};Ut.attribute=xt,xt&&xt.data&&(Ut.data=xt.data),K[N]=Ut,et++}r.attributes=K,r.attributesNum=et,r.index=Z}function S(){let b=r.newAttributes;for(let L=0,nt=b.length;L<nt;L++)b[L]=0}function m(b){u(b,0)}function u(b,L){let nt=r.newAttributes,Z=r.enabledAttributes,K=r.attributeDivisors;nt[b]=1,Z[b]===0&&(i.enableVertexAttribArray(b),Z[b]=1),K[b]!==L&&(i.vertexAttribDivisor(b,L),K[b]=L)}function I(){let b=r.newAttributes,L=r.enabledAttributes;for(let nt=0,Z=L.length;nt<Z;nt++)L[nt]!==b[nt]&&(i.disableVertexAttribArray(nt),L[nt]=0)}function A(b,L,nt,Z,K,ot,et){et===!0?i.vertexAttribIPointer(b,L,nt,K,ot):i.vertexAttribPointer(b,L,nt,Z,K,ot)}function E(b,L,nt,Z){S();let K=Z.attributes,ot=nt.getAttributes(),et=L.defaultAttributeValues;for(let ut in ot){let N=ot[ut];if(N.location>=0){let C=K[ut];if(C===void 0&&(ut==="instanceMatrix"&&b.instanceMatrix&&(C=b.instanceMatrix),ut==="instanceColor"&&b.instanceColor&&(C=b.instanceColor)),C!==void 0){let xt=C.normalized,Ut=C.itemSize,Jt=t.get(C);if(Jt===void 0)continue;let pe=Jt.buffer,it=Jt.type,q=Jt.bytesPerElement,Et=it===i.INT||it===i.UNSIGNED_INT||C.gpuType===Ja;if(C.isInterleavedBufferAttribute){let at=C.data,Vt=at.stride,Gt=C.offset;if(at.isInstancedInterleavedBuffer){for(let kt=0;kt<N.locationSize;kt++)u(N.location+kt,at.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let kt=0;kt<N.locationSize;kt++)m(N.location+kt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let kt=0;kt<N.locationSize;kt++)A(N.location+kt,Ut/N.locationSize,it,xt,Vt*q,(Gt+Ut/N.locationSize*kt)*q,Et)}else{if(C.isInstancedBufferAttribute){for(let at=0;at<N.locationSize;at++)u(N.location+at,C.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let at=0;at<N.locationSize;at++)m(N.location+at);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let at=0;at<N.locationSize;at++)A(N.location+at,Ut/N.locationSize,it,xt,Ut*q,Ut/N.locationSize*at*q,Et)}}else if(et!==void 0){let xt=et[ut];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(N.location,xt);break;case 3:i.vertexAttrib3fv(N.location,xt);break;case 4:i.vertexAttrib4fv(N.location,xt);break;default:i.vertexAttrib1fv(N.location,xt)}}}}I()}function O(){U();for(let b in n){let L=n[b];for(let nt in L){let Z=L[nt];for(let K in Z)h(Z[K].object),delete Z[K];delete L[nt]}delete n[b]}}function D(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let nt in L){let Z=L[nt];for(let K in Z)h(Z[K].object),delete Z[K];delete L[nt]}delete n[b.id]}function F(b){for(let L in n){let nt=n[L];if(nt[b.id]===void 0)continue;let Z=nt[b.id];for(let K in Z)h(Z[K].object),delete Z[K];delete nt[b.id]}}function U(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:m,disableUnusedAttributes:I}}function Vf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v];e.update(_,n,1)}function l(c,h,d,f){if(d===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let v=0;for(let S=0;S<d;S++)v+=h[S]*f[S];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==wn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let U=F===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Xn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vn&&!U)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:I,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:O,maxSamples:D}}function Wf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new bn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let _=d.length!==0||f||n!==0||s;return s=f,n=d.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,_){let v=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{let I=r?0:n,A=I*4,E=u.clippingState||null;l.value=E,E=h(v,f,A,_);for(let O=0;O!==A;++O)E[O]=e[O];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,_,v){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,v!==!0||m===null){let u=_+S*4,I=f.matrixWorldInverse;a.getNormalMatrix(I),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,E=_;A!==S;++A,E+=4)o.copy(d[A]).applyMatrix4(I,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function Xf(i){let t=new WeakMap;function e(o,a){return a===Ho?o.mapping=is:a===Vo&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ho||a===Vo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rr=class extends Tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ki=4,Hl=[.125,.215,.35,.446,.526,.582],Ti=20,bo=new Rr,Vl=new Yt,Eo=null,wo=0,To=0,Ao=!1,bi=(1+Math.sqrt(5))/2,$i=1/bi,Gl=[new G(-bi,$i,0),new G(bi,$i,0),new G(-$i,0,bi),new G($i,0,bi),new G(0,bi,-$i),new G(0,bi,$i),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Eo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,wo,To),this._renderer.xr.enabled=Ao,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Di,format:wn,colorSpace:us,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(r)),this._blurMaterial=Yf(r,t,e)}return s}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s){let a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vl),h.toneMapping=oi,h.autoClear=!1;let _=new Rn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),v=new xe(new Ze,_),S=!1,m=t.background;m?m.isColor&&(_.color.copy(m),t.background=null,S=!0):(_.color.copy(Vl),S=!0);for(let u=0;u<6;u++){let I=u%3;I===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):I===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let A=this._cubeSize;lr(s,I*A,u>2?A:0,A,A),h.setRenderTarget(s),S&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,bo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gl[(s-r-1)%Gl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new xe(this._lodPlanes[s],c),f=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Ti-1),S=r/v,m=isFinite(r)?1+Math.floor(h*S):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);let u=[],I=0;for(let F=0;F<Ti;++F){let U=F/S,w=Math.exp(-U*U/2);u.push(w),F===0?I+=w:F<m&&(I+=2*w)}for(let F=0;F<u.length;F++)u[F]=u[F]/I;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-n;let E=this._sizeLods[s],O=3*E*(s>A-Ki?s-A+Ki:0),D=4*(this._cubeSize-E);lr(e,O,D,3*E,2*E),l.setRenderTarget(e),l.render(d,bo)}};function qf(i){let t=[],e=[],n=[],s=i,r=i-Ki+1+Hl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ki?l=Hl[o-i+Ki-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,v=6,S=3,m=2,u=1,I=new Float32Array(S*v*_),A=new Float32Array(m*v*_),E=new Float32Array(u*v*_);for(let D=0;D<_;D++){let F=D%3*2/3-1,U=D>2?0:-1,w=[F,U,0,F+2/3,U,0,F+2/3,U+1,0,F,U,0,F+2/3,U+1,0,F,U+1,0];I.set(w,S*v*D),A.set(f,m*v*D);let b=[D,D,D,D,D,D];E.set(b,u*v*D)}let O=new an;O.setAttribute("position",new rn(I,S)),O.setAttribute("uv",new rn(A,m)),O.setAttribute("faceIndex",new rn(E,u)),t.push(O),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){let n=new An(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yf(i,t,e){let n=new Float32Array(Ti),s=new G(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xl(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ql(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ho||l===Vo,h=l===is||l===ss;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let _=a.image;return c&&_&&_.height>0||h&&_&&s(_)?(e===null&&(e=new Cr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $f(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);for(let v in f.morphAttributes){let S=f.morphAttributes[v];for(let m=0,u=S.length;m<u;m++)t.remove(S[m])}f.removeEventListener("dispose",o),delete s[f.id];let _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let v in f)t.update(f[v],i.ARRAY_BUFFER);let _=d.morphAttributes;for(let v in _){let S=_[v];for(let m=0,u=S.length;m<u;m++)t.update(S[m],i.ARRAY_BUFFER)}}function c(d){let f=[],_=d.index,v=d.attributes.position,S=0;if(_!==null){let I=_.array;S=_.version;for(let A=0,E=I.length;A<E;A+=3){let O=I[A+0],D=I[A+1],F=I[A+2];f.push(O,D,D,F,F,O)}}else if(v!==void 0){let I=v.array;S=v.version;for(let A=0,E=I.length/3-1;A<E;A+=3){let O=A+0,D=A+1,F=A+2;f.push(O,D,D,F,F,O)}}else return;let m=new(Dc(f)?wr:Er)(f,1);m.version=S;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let _=d.index;_!==null&&f.version<_.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Kf(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,_){i.drawElements(n,_,r,f*o),e.update(_,n,1)}function c(f,_,v){v!==0&&(i.drawElementsInstanced(n,_,r,f*o,v),e.update(_,n,v))}function h(f,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,f,0,v);let m=0;for(let u=0;u<v;u++)m+=_[u];e.update(m,n,1)}function d(f,_,v,S){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,_[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,r,f,0,S,0,v);let u=0;for(let I=0;I<v;I++)u+=_[I]*S[I];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Qf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jf(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let w=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],I=a.morphAttributes.color||[],A=0;_===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let E=a.attributes.position.count*A,O=1;E>t.maxTextureSize&&(O=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*O*4*d),F=new Mr(D,E,O,d);F.type=Vn,F.needsUpdate=!0;let U=A*4;for(let b=0;b<d;b++){let L=m[b],nt=u[b],Z=I[b],K=E*O*4*b;for(let ot=0;ot<L.count;ot++){let et=ot*U;_===!0&&(s.fromBufferAttribute(L,ot),D[K+et+0]=s.x,D[K+et+1]=s.y,D[K+et+2]=s.z,D[K+et+3]=0),v===!0&&(s.fromBufferAttribute(nt,ot),D[K+et+4]=s.x,D[K+et+5]=s.y,D[K+et+6]=s.z,D[K+et+7]=0),S===!0&&(s.fromBufferAttribute(Z,ot),D[K+et+8]=s.x,D[K+et+9]=s.y,D[K+et+10]=s.z,D[K+et+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new ae(E,O)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let S=0;S<c.length;S++)_+=c[S];let v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ir=class extends on{constructor(t,e,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=Ci),n===void 0&&h===as&&(n=os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Oc=new on,Yl=new Ir(1,1),Bc=new Mr,zc=new ya,kc=new Ar,Zl=[],Jl=[],$l=new Float32Array(16),Kl=new Float32Array(9),Ql=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Jl[t];e===void 0&&(e=new Int32Array(t),Jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ql.set(n),i.uniformMatrix2fv(this.addr,!1,Ql),Fe(e,n)}}function op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),Fe(e,n)}}function ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Fe(e,n)}}function lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=Lc,r=Yl):r=Oc,e.setTexture2D(t||r,s)}function _p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zc,s)}function xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kc,s)}function vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bc,s)}function yp(i){switch(i){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return op;case 35676:return ap;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return vp}}function Mp(i,t){i.uniform1fv(this.addr,t)}function Sp(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function bp(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Ep(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function wp(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tp(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ap(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rp(i,t){i.uniform1iv(this.addr,t)}function Cp(i,t){i.uniform2iv(this.addr,t)}function Ip(i,t){i.uniform3iv(this.addr,t)}function Pp(i,t){i.uniform4iv(this.addr,t)}function Lp(i,t){i.uniform1uiv(this.addr,t)}function Dp(i,t){i.uniform2uiv(this.addr,t)}function Up(i,t){i.uniform3uiv(this.addr,t)}function Np(i,t){i.uniform4uiv(this.addr,t)}function Fp(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Oc,r[o])}function Op(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zc,r[o])}function Bp(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kc,r[o])}function zp(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bc,r[o])}function kp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return Ep;case 35674:return wp;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Ip;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}var ba=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yp(e.type)}},Ea=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}},wa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ro=/(\w+)(\])?(\[|\.)?/g;function jl(i,t){i.seq.push(t),i.map[t.id]=t}function Hp(i,t,e){let n=i.name,s=n.length;for(Ro.lastIndex=0;;){let r=Ro.exec(n),o=Ro.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jl(e,c===void 0?new ba(a,i,t):new Ea(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new wa(a),jl(e,d)),e=d}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function tc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vp=37297,Gp=0;function Wp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ec=new Qt;function Xp(i){de._getMatrix(ec,de.workingColorSpace,i);let t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wp(i.getShaderSource(t),o)}else return s}function qp(i,t){let e=Xp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yp(i,t){let e;switch(t){case xh:e="Linear";break;case vh:e="Reinhard";break;case yh:e="Cineon";break;case Mh:e="ACESFilmic";break;case bh:e="AgX";break;case Eh:e="Neutral";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cr=new G;function Zp(){de.getLuminanceCoefficients(cr);let i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function $p(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function ic(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Qp,tm)}var jp=new Map;function tm(i,t){let e=jt[t];if(e===void 0){let n=jp.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}var em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(em,nm)}function nm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function sm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function om(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Za:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case _h:t="ENVMAP_BLENDING_ADD";break}return t}function am(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=im(e),c=sm(e),h=rm(e),d=om(e),f=am(e),_=Jp(e),v=$p(r),S=s.createProgram(),m,u,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(As).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(As).join(`
`),u.length>0&&(u+=`
`)):(m=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),u=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?jt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,qp("linearToOutputTexel",e.outputColorSpace),Zp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=Ta(o),o=ic(o,e),o=sc(o,e),a=Ta(a),a=ic(a,e),a=sc(a,e),o=rc(o),a=rc(a),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=I+m+o,E=I+u+a,O=tc(s,s.VERTEX_SHADER,A),D=tc(s,s.FRAGMENT_SHADER,E);s.attachShader(S,O),s.attachShader(S,D),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function F(L){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(S).trim(),Z=s.getShaderInfoLog(O).trim(),K=s.getShaderInfoLog(D).trim(),ot=!0,et=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,O,D);else{let ut=nc(s,O,"vertex"),N=nc(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+nt+`
`+ut+`
`+N)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(Z===""||K==="")&&(et=!1);et&&(L.diagnostics={runnable:ot,programLog:nt,vertexShader:{log:Z,prefix:m},fragmentShader:{log:K,prefix:u}})}s.deleteShader(O),s.deleteShader(D),U=new es(s,S),w=Kp(s,S)}let U;this.getUniforms=function(){return U===void 0&&F(this),U};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,Vp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=D,this}var cm=0,Aa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ra(t),e.set(t,n)),n}},Ra=class{constructor(t){this.id=cm++,this.code=t,this.usedTimes=0}};function hm(i,t,e,n,s,r,o){let a=new br,l=new Aa,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,_=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,L,nt,Z){let K=nt.fog,ot=Z.geometry,et=w.isMeshStandardMaterial?nt.environment:null,ut=(w.isMeshStandardMaterial?e:t).get(w.envMap||et),N=ut&&ut.mapping===Gr?ut.image.height:null,C=v[w.type];w.precision!==null&&(_=s.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));let xt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ut=xt!==void 0?xt.length:0,Jt=0;ot.morphAttributes.position!==void 0&&(Jt=1),ot.morphAttributes.normal!==void 0&&(Jt=2),ot.morphAttributes.color!==void 0&&(Jt=3);let pe,it,q,Et;if(C){let ge=Pn[C];pe=ge.vertexShader,it=ge.fragmentShader}else pe=w.vertexShader,it=w.fragmentShader,l.update(w),q=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);let at=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),Gt=Z.isInstancedMesh===!0,kt=Z.isBatchedMesh===!0,we=!!w.map,ne=!!w.matcap,Re=!!ut,z=!!w.aoMap,Je=!!w.lightMap,Wt=!!w.bumpMap,ie=!!w.normalMap,Ht=!!w.displacementMap,me=!!w.emissiveMap,Ot=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,W=w.clearcoat>0,rt=w.dispersion>0,lt=w.iridescence>0,tt=w.sheen>0,mt=w.transmission>0,gt=x&&!!w.anisotropyMap,wt=W&&!!w.clearcoatMap,oe=W&&!!w.clearcoatNormalMap,dt=W&&!!w.clearcoatRoughnessMap,At=lt&&!!w.iridescenceMap,Ft=lt&&!!w.iridescenceThicknessMap,Bt=tt&&!!w.sheenColorMap,Rt=tt&&!!w.sheenRoughnessMap,se=!!w.specularMap,qt=!!w.specularColorMap,ve=!!w.specularIntensityMap,B=mt&&!!w.transmissionMap,vt=mt&&!!w.thicknessMap,J=!!w.gradientMap,j=!!w.alphaMap,St=w.alphaTest>0,bt=!!w.alphaHash,$t=!!w.extensions,Se=oi;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Se=i.toneMapping);let Oe={shaderID:C,shaderType:w.type,shaderName:w.name,vertexShader:pe,fragmentShader:it,defines:w.defines,customVertexShaderID:q,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:kt,batchingColor:kt&&Z._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Z.instanceColor!==null,instancingMorph:Gt&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:us,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:ne,envMap:Re,envMapMode:Re&&ut.mapping,envMapCubeUVHeight:N,aoMap:z,lightMap:Je,bumpMap:Wt,normalMap:ie,displacementMap:f&&Ht,emissiveMap:me,normalMapObjectSpace:ie&&w.normalMapType===Rh,normalMapTangentSpace:ie&&w.normalMapType===Pc,metalnessMap:Ot,roughnessMap:T,anisotropy:x,anisotropyMap:gt,clearcoat:W,clearcoatMap:wt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:rt,iridescence:lt,iridescenceMap:At,iridescenceThicknessMap:Ft,sheen:tt,sheenColorMap:Bt,sheenRoughnessMap:Rt,specularMap:se,specularColorMap:qt,specularIntensityMap:ve,transmission:mt,transmissionMap:B,thicknessMap:vt,gradientMap:J,opaque:w.transparent===!1&&w.blending===Qi&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:St,alphaHash:bt,combine:w.combine,mapUv:we&&S(w.map.channel),aoMapUv:z&&S(w.aoMap.channel),lightMapUv:Je&&S(w.lightMap.channel),bumpMapUv:Wt&&S(w.bumpMap.channel),normalMapUv:ie&&S(w.normalMap.channel),displacementMapUv:Ht&&S(w.displacementMap.channel),emissiveMapUv:me&&S(w.emissiveMap.channel),metalnessMapUv:Ot&&S(w.metalnessMap.channel),roughnessMapUv:T&&S(w.roughnessMap.channel),anisotropyMapUv:gt&&S(w.anisotropyMap.channel),clearcoatMapUv:wt&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&S(w.sheenRoughnessMap.channel),specularMapUv:se&&S(w.specularMap.channel),specularColorMapUv:qt&&S(w.specularColorMap.channel),specularIntensityMapUv:ve&&S(w.specularIntensityMap.channel),transmissionMapUv:B&&S(w.transmissionMap.channel),thicknessMapUv:vt&&S(w.thicknessMap.channel),alphaMapUv:j&&S(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ie||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ot.attributes.uv&&(we||j),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Vt,skinning:Z.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Jt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&de.getTransfer(w.map.colorSpace)===Me,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&de.getTransfer(w.emissiveMap.colorSpace)===Me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===He,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function u(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(I(b,w),A(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function I(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function A(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function E(w){let b=v[w.type],L;if(b){let nt=Pn[b];L=el.clone(nt.uniforms)}else L=w.uniforms;return L}function O(w,b){let L;for(let nt=0,Z=h.length;nt<Z;nt++){let K=h[nt];if(K.cacheKey===b){L=K,++L.usedTimes;break}}return L===void 0&&(L=new lm(i,b,w,r),h.push(L)),L}function D(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function F(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:O,releaseProgram:D,releaseShaderCache:F,programs:h,dispose:U}}function um(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,_,v,S,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:S,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=_,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=S,u.group=m),t++,u}function a(d,f,_,v,S,m){let u=o(d,f,_,v,S,m);_.transmission>0?n.push(u):_.transparent===!0?s.push(u):e.push(u)}function l(d,f,_,v,S,m){let u=o(d,f,_,v,S,m);_.transmission>0?n.unshift(u):_.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||dm),n.length>1&&n.sort(f||ac),s.length>1&&s.sort(f||ac)}function h(){for(let d=t,f=i.length;d<f;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new lc,i.set(n,[o])):s>=r.length?(o=new lc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Yt};break;case"SpotLight":e={position:new G,direction:new G,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function mm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gm=0;function _m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xm(i){let t=new pm,e=mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Te,o=new Te;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let _=0,v=0,S=0,m=0,u=0,I=0,A=0,E=0,O=0,D=0,F=0;c.sort(_m);for(let w=0,b=c.length;w<b;w++){let L=c[w],nt=L.color,Z=L.intensity,K=L.distance,ot=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=nt.r*Z,d+=nt.g*Z,f+=nt.b*Z;else if(L.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(L.sh.coefficients[et],Z);F++}else if(L.isDirectionalLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ut=L.shadow,N=e.get(L);N.shadowIntensity=ut.intensity,N.shadowBias=ut.bias,N.shadowNormalBias=ut.normalBias,N.shadowRadius=ut.radius,N.shadowMapSize=ut.mapSize,n.directionalShadow[_]=N,n.directionalShadowMap[_]=ot,n.directionalShadowMatrix[_]=L.shadow.matrix,I++}n.directional[_]=et,_++}else if(L.isSpotLight){let et=t.get(L);et.position.setFromMatrixPosition(L.matrixWorld),et.color.copy(nt).multiplyScalar(Z),et.distance=K,et.coneCos=Math.cos(L.angle),et.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),et.decay=L.decay,n.spot[S]=et;let ut=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,ut.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[S]=ut.matrix,L.castShadow){let N=e.get(L);N.shadowIntensity=ut.intensity,N.shadowBias=ut.bias,N.shadowNormalBias=ut.normalBias,N.shadowRadius=ut.radius,N.shadowMapSize=ut.mapSize,n.spotShadow[S]=N,n.spotShadowMap[S]=ot,E++}S++}else if(L.isRectAreaLight){let et=t.get(L);et.color.copy(nt).multiplyScalar(Z),et.halfWidth.set(L.width*.5,0,0),et.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=et,m++}else if(L.isPointLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),et.distance=L.distance,et.decay=L.decay,L.castShadow){let ut=L.shadow,N=e.get(L);N.shadowIntensity=ut.intensity,N.shadowBias=ut.bias,N.shadowNormalBias=ut.normalBias,N.shadowRadius=ut.radius,N.shadowMapSize=ut.mapSize,N.shadowCameraNear=ut.camera.near,N.shadowCameraFar=ut.camera.far,n.pointShadow[v]=N,n.pointShadowMap[v]=ot,n.pointShadowMatrix[v]=L.shadow.matrix,A++}n.point[v]=et,v++}else if(L.isHemisphereLight){let et=t.get(L);et.skyColor.copy(L.color).multiplyScalar(Z),et.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[u]=et,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==_||U.pointLength!==v||U.spotLength!==S||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==I||U.numPointShadows!==A||U.numSpotShadows!==E||U.numSpotMaps!==O||U.numLightProbes!==F)&&(n.directional.length=_,n.spot.length=S,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+O-D,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=F,U.directionalLength=_,U.pointLength=v,U.spotLength=S,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=I,U.numPointShadows=A,U.numSpotShadows=E,U.numSpotMaps=O,U.numLightProbes=F,n.version=gm++)}function l(c,h){let d=0,f=0,_=0,v=0,S=0,m=h.matrixWorldInverse;for(let u=0,I=c.length;u<I;u++){let A=c[u];if(A.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(A.isSpotLight){let E=n.spot[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),_++}else if(A.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let E=n.hemi[S];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function cc(i){let t=new xm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cc(i),t.set(s,[a])):r>=o.length?(a=new cc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ca=class extends hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ia=class extends hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sm(i,t,e){let n=new Ps,s=new ae,r=new ae,o=new fe,a=new Ca({depthPacking:Ah}),l=new Ia,c={},h=e.maxTextureSize,d={[ai]:He,[He]:ai,[En]:En},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:ym,fragmentShader:Mm}),_=f.clone();_.defines.HORIZONTAL_PASS=1;let v=new an;v.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new xe(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let u=this.type;this.render=function(D,F,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),nt=i.state;nt.setBlending(ri),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let Z=u!==Hn&&this.type===Hn,K=u===Hn&&this.type!==Hn;for(let ot=0,et=D.length;ot<et;ot++){let ut=D[ot],N=ut.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let C=N.getFrameExtents();if(s.multiply(C),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/C.x),s.x=r.x*C.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/C.y),s.y=r.y*C.y,N.mapSize.y=r.y)),N.map===null||Z===!0||K===!0){let Ut=this.type!==Hn?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new An(s.x,s.y,Ut),N.map.texture.name=ut.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let xt=N.getViewportCount();for(let Ut=0;Ut<xt;Ut++){let Jt=N.getViewport(Ut);o.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),nt.viewport(o),N.updateMatrices(ut,Ut),n=N.getFrustum(),E(F,U,N.camera,ut,this.type)}N.isPointLightShadow!==!0&&this.type===Hn&&I(N,U),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,L)};function I(D,F){let U=t.update(S);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(F,null,U,f,S,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(F,null,U,_,S,null)}function A(D,F,U,w){let b=null,L=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)b=L;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let nt=b.uuid,Z=F.uuid,K=c[nt];K===void 0&&(K={},c[nt]=K);let ot=K[Z];ot===void 0&&(ot=b.clone(),K[Z]=ot,F.addEventListener("dispose",O)),b=ot}if(b.visible=F.visible,b.wireframe=F.wireframe,w===Hn?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:d[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let nt=i.properties.get(b);nt.light=U}return b}function E(D,F,U,w,b){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Hn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);let Z=t.update(D),K=D.material;if(Array.isArray(K)){let ot=Z.groups;for(let et=0,ut=ot.length;et<ut;et++){let N=ot[et],C=K[N.materialIndex];if(C&&C.visible){let xt=A(D,C,w,b);D.onBeforeShadow(i,D,F,U,Z,xt,N),i.renderBufferDirect(U,null,Z,xt,D,N),D.onAfterShadow(i,D,F,U,Z,xt,N)}}}else if(K.visible){let ot=A(D,K,w,b);D.onBeforeShadow(i,D,F,U,Z,ot,null),i.renderBufferDirect(U,null,Z,ot,D,null),D.onAfterShadow(i,D,F,U,Z,ot,null)}}let nt=D.children;for(let Z=0,K=nt.length;Z<K;Z++)E(nt[Z],F,U,w,b)}function O(D){D.target.removeEventListener("dispose",O);for(let U in c){let w=c[U],b=D.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var bm={[Uo]:No,[Fo]:zo,[Oo]:ko,[ns]:Bo,[No]:Uo,[zo]:Fo,[ko]:Oo,[Bo]:ns};function Em(i,t){function e(){let B=!1,vt=new fe,J=null,j=new fe(0,0,0,0);return{setMask:function(St){J!==St&&!B&&(i.colorMask(St,St,St,St),J=St)},setLocked:function(St){B=St},setClear:function(St,bt,$t,Se,Oe){Oe===!0&&(St*=Se,bt*=Se,$t*=Se),vt.set(St,bt,$t,Se),j.equals(vt)===!1&&(i.clearColor(St,bt,$t,Se),j.copy(vt))},reset:function(){B=!1,J=null,j.set(-1,0,0,0)}}}function n(){let B=!1,vt=!1,J=null,j=null,St=null;return{setReversed:function(bt){if(vt!==bt){let $t=t.get("EXT_clip_control");vt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Se=St;St=null,this.setClear(Se)}vt=bt},getReversed:function(){return vt},setTest:function(bt){bt?at(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(bt){J!==bt&&!B&&(i.depthMask(bt),J=bt)},setFunc:function(bt){if(vt&&(bt=bm[bt]),j!==bt){switch(bt){case Uo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=bt}},setLocked:function(bt){B=bt},setClear:function(bt){St!==bt&&(vt&&(bt=1-bt),i.clearDepth(bt),St=bt)},reset:function(){B=!1,J=null,j=null,St=null,vt=!1}}}function s(){let B=!1,vt=null,J=null,j=null,St=null,bt=null,$t=null,Se=null,Oe=null;return{setTest:function(ge){B||(ge?at(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(ge){vt!==ge&&!B&&(i.stencilMask(ge),vt=ge)},setFunc:function(ge,ln,vn){(J!==ge||j!==ln||St!==vn)&&(i.stencilFunc(ge,ln,vn),J=ge,j=ln,St=vn)},setOp:function(ge,ln,vn){(bt!==ge||$t!==ln||Se!==vn)&&(i.stencilOp(ge,ln,vn),bt=ge,$t=ln,Se=vn)},setLocked:function(ge){B=ge},setClear:function(ge){Oe!==ge&&(i.clearStencil(ge),Oe=ge)},reset:function(){B=!1,vt=null,J=null,j=null,St=null,bt=null,$t=null,Se=null,Oe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,_=[],v=null,S=!1,m=null,u=null,I=null,A=null,E=null,O=null,D=null,F=new Yt(0,0,0),U=0,w=!1,b=null,L=null,nt=null,Z=null,K=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,ut=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(N)[1]),et=ut>=1):N.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),et=ut>=2);let C=null,xt={},Ut=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),pe=new fe().fromArray(Ut),it=new fe().fromArray(Jt);function q(B,vt,J,j){let St=new Uint8Array(4),bt=i.createTexture();i.bindTexture(B,bt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<J;$t++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return bt}let Et={};Et[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ns),Wt(!1),ie(ul),at(i.CULL_FACE),z(ri);function at(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Vt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Gt(B,vt){return d[B]!==vt?(i.bindFramebuffer(B,vt),d[B]=vt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function kt(B,vt){let J=_,j=!1;if(B){J=f.get(vt),J===void 0&&(J=[],f.set(vt,J));let St=B.textures;if(J.length!==St.length||J[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,$t=St.length;bt<$t;bt++)J[bt]=i.COLOR_ATTACHMENT0+bt;J.length=St.length,j=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,j=!0);j&&i.drawBuffers(J)}function we(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let ne={[Ei]:i.FUNC_ADD,[jc]:i.FUNC_SUBTRACT,[th]:i.FUNC_REVERSE_SUBTRACT};ne[eh]=i.MIN,ne[nh]=i.MAX;let Re={[ih]:i.ZERO,[sh]:i.ONE,[rh]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function z(B,vt,J,j,St,bt,$t,Se,Oe,ge){if(B===ri){S===!0&&(Vt(i.BLEND),S=!1);return}if(S===!1&&(at(i.BLEND),S=!0),B!==Qc){if(B!==m||ge!==w){if((u!==Ei||E!==Ei)&&(i.blendEquation(i.FUNC_ADD),u=Ei,E=Ei),ge)switch(B){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}I=null,A=null,O=null,D=null,F.set(0,0,0),U=0,m=B,w=ge}return}St=St||vt,bt=bt||J,$t=$t||j,(vt!==u||St!==E)&&(i.blendEquationSeparate(ne[vt],ne[St]),u=vt,E=St),(J!==I||j!==A||bt!==O||$t!==D)&&(i.blendFuncSeparate(Re[J],Re[j],Re[bt],Re[$t]),I=J,A=j,O=bt,D=$t),(Se.equals(F)===!1||Oe!==U)&&(i.blendColor(Se.r,Se.g,Se.b,Oe),F.copy(Se),U=Oe),m=B,w=!1}function Je(B,vt){B.side===En?Vt(i.CULL_FACE):at(i.CULL_FACE);let J=B.side===He;vt&&(J=!J),Wt(J),B.blending===Qi&&B.transparent===!1?z(ri):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let j=B.stencilWrite;a.setTest(j),j&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function ie(B){B!==Jc?(at(i.CULL_FACE),B!==L&&(B===ul?i.cullFace(i.BACK):B===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),L=B}function Ht(B){B!==nt&&(et&&i.lineWidth(B),nt=B)}function me(B,vt,J){B?(at(i.POLYGON_OFFSET_FILL),(Z!==vt||K!==J)&&(i.polygonOffset(vt,J),Z=vt,K=J)):Vt(i.POLYGON_OFFSET_FILL)}function Ot(B){B?at(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function T(B){B===void 0&&(B=i.TEXTURE0+ot-1),C!==B&&(i.activeTexture(B),C=B)}function x(B,vt,J){J===void 0&&(C===null?J=i.TEXTURE0+ot-1:J=C);let j=xt[J];j===void 0&&(j={type:void 0,texture:void 0},xt[J]=j),(j.type!==B||j.texture!==vt)&&(C!==J&&(i.activeTexture(J),C=J),i.bindTexture(B,vt||Et[B]),j.type=B,j.texture=vt)}function W(){let B=xt[C];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(B){pe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),pe.copy(B))}function Rt(B){it.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),it.copy(B))}function se(B,vt){let J=c.get(vt);J===void 0&&(J=new WeakMap,c.set(vt,J));let j=J.get(B);j===void 0&&(j=i.getUniformBlockIndex(vt,B.name),J.set(B,j))}function qt(B,vt){let j=c.get(vt).get(B);l.get(vt)!==j&&(i.uniformBlockBinding(vt,j,B.__bindingPointIndex),l.set(vt,j))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},C=null,xt={},d={},f=new WeakMap,_=[],v=null,S=!1,m=null,u=null,I=null,A=null,E=null,O=null,D=null,F=new Yt(0,0,0),U=0,w=!1,b=null,L=null,nt=null,Z=null,K=null,pe.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Vt,bindFramebuffer:Gt,drawBuffers:kt,useProgram:we,setBlending:z,setMaterial:Je,setFlipSided:Wt,setCullFace:ie,setLineWidth:Ht,setPolygonOffset:me,setScissorTest:Ot,activeTexture:T,bindTexture:x,unbindTexture:W,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:At,texImage3D:Ft,updateUBOMapping:se,uniformBlockBinding:qt,texStorage2D:oe,texStorage3D:dt,texSubImage2D:tt,texSubImage3D:mt,compressedTexSubImage2D:gt,compressedTexSubImage3D:wt,scissor:Bt,viewport:Rt,reset:ve}}function hc(i,t,e,n){let s=wm(n);switch(e){case Ec:return i*t;case Tc:return i*t;case Ac:return i*t*2;case Rc:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case tl:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ic:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(i){switch(i){case Xn:case Mc:return{byteLength:1,components:1};case Cs:case Sc:case Di:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case Ci:case Ja:case Vn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,d,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return _?new OffscreenCanvas(T,x):Is("canvas")}function S(T,x,W){let rt=1,lt=Ot(T);if((lt.width>W||lt.height>W)&&(rt=W/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let tt=Math.floor(rt*lt.width),mt=Math.floor(rt*lt.height);d===void 0&&(d=v(tt,mt));let gt=x?v(tt,mt):d;return gt.width=tt,gt.height=mt,gt.getContext("2d").drawImage(T,0,0,tt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+tt+"x"+mt+")."),gt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,x,W,rt,lt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=x;if(x===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),x===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),x===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),x===i.RGBA){let mt=lt?Wr:de.getTransfer(rt);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=mt===Me?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function E(T,x){let W;return T?x===null||x===Ci||x===os?W=i.DEPTH24_STENCIL8:x===Vn?W=i.DEPTH32F_STENCIL8:x===Cs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ci||x===os?W=i.DEPTH_COMPONENT24:x===Vn?W=i.DEPTH_COMPONENT32F:x===Cs&&(W=i.DEPTH_COMPONENT16),W}function O(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function D(T){let x=T.target;x.removeEventListener("dispose",D),U(x),x.isVideoTexture&&h.delete(x)}function F(T){let x=T.target;x.removeEventListener("dispose",F),b(x)}function U(T){let x=n.get(T);if(x.__webglInit===void 0)return;let W=T.source,rt=f.get(W);if(rt){let lt=rt[x.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(T),Object.keys(rt).length===0&&f.delete(W)}n.remove(T)}function w(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let W=T.source,rt=f.get(W);delete rt[x.__cacheKey],o.memory.textures--}function b(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(x.__webglFramebuffer[rt]))for(let lt=0;lt<x.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(x.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(x.__webglFramebuffer[rt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[rt])}else{if(Array.isArray(x.__webglFramebuffer))for(let rt=0;rt<x.__webglFramebuffer.length;rt++)i.deleteFramebuffer(x.__webglFramebuffer[rt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let rt=0;rt<x.__webglColorRenderbuffer.length;rt++)x.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[rt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let W=T.textures;for(let rt=0,lt=W.length;rt<lt;rt++){let tt=n.get(W[rt]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(W[rt])}n.remove(T)}let L=0;function nt(){L=0}function Z(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ot(T,x){let W=n.get(T);if(T.isVideoTexture&&Ht(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let rt=T.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,T,x);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function et(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){it(W,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function ut(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){it(W,T,x);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function N(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){q(W,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}let C={[rs]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},xt={[Tn]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Ut={[Ch]:i.NEVER,[Nh]:i.ALWAYS,[Ih]:i.LESS,[Lc]:i.LEQUAL,[Ph]:i.EQUAL,[Uh]:i.GEQUAL,[Lh]:i.GREATER,[Dh]:i.NOTEQUAL};function Jt(T,x){if(x.type===Vn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===Qr||x.magFilter===Gs||x.magFilter===Ri||x.minFilter===Ln||x.minFilter===Qr||x.minFilter===Gs||x.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,C[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,C[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,C[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,xt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tn||x.minFilter!==Gs&&x.minFilter!==Ri||x.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pe(T,x){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",D));let rt=x.source,lt=f.get(rt);lt===void 0&&(lt={},f.set(rt,lt));let tt=K(x);if(tt!==T.__cacheKey){lt[tt]===void 0&&(lt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),lt[tt].usedTimes++;let mt=lt[T.__cacheKey];mt!==void 0&&(lt[T.__cacheKey].usedTimes--,mt.usedTimes===0&&w(x)),T.__cacheKey=tt,T.__webglTexture=lt[tt].texture}return W}function it(T,x,W){let rt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(rt=i.TEXTURE_3D);let lt=pe(T,x),tt=x.source;e.bindTexture(rt,T.__webglTexture,i.TEXTURE0+W);let mt=n.get(tt);if(tt.version!==mt.__version||lt===!0){e.activeTexture(i.TEXTURE0+W);let gt=de.getPrimaries(de.workingColorSpace),wt=x.colorSpace===si?null:de.getPrimaries(x.colorSpace),oe=x.colorSpace===si||gt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=S(x.image,!1,s.maxTextureSize);dt=me(x,dt);let At=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),Bt=A(x.internalFormat,At,Ft,x.colorSpace,x.isVideoTexture);Jt(rt,x);let Rt,se=x.mipmaps,qt=x.isVideoTexture!==!0,ve=mt.__version===void 0||lt===!0,B=tt.dataReady,vt=O(x,dt);if(x.isDepthTexture)Bt=E(x.format===as,x.type),ve&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,At,Ft,null));else if(x.isDataTexture)if(se.length>0){qt&&ve&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,se[0].width,se[0].height);for(let J=0,j=se.length;J<j;J++)Rt=se[J],qt?B&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,At,Ft,Rt.data):e.texImage2D(i.TEXTURE_2D,J,Bt,Rt.width,Rt.height,0,At,Ft,Rt.data);x.generateMipmaps=!1}else qt?(ve&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,dt.width,dt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Ft,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,At,Ft,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,se[0].width,se[0].height,dt.depth);for(let J=0,j=se.length;J<j;J++)if(Rt=se[J],x.format!==wn)if(At!==null)if(qt){if(B)if(x.layerUpdates.size>0){let St=hc(Rt.width,Rt.height,x.format,x.type);for(let bt of x.layerUpdates){let $t=Rt.data.subarray(bt*St/Rt.data.BYTES_PER_ELEMENT,(bt+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,bt,Rt.width,Rt.height,1,At,$t)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,dt.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Bt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,dt.depth,At,Ft,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Bt,Rt.width,Rt.height,dt.depth,0,At,Ft,Rt.data)}else{qt&&ve&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,se[0].width,se[0].height);for(let J=0,j=se.length;J<j;J++)Rt=se[J],x.format!==wn?At!==null?qt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?B&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,At,Ft,Rt.data):e.texImage2D(i.TEXTURE_2D,J,Bt,Rt.width,Rt.height,0,At,Ft,Rt.data)}else if(x.isDataArrayTexture)if(qt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,dt.width,dt.height,dt.depth),B)if(x.layerUpdates.size>0){let J=hc(dt.width,dt.height,x.format,x.type);for(let j of x.layerUpdates){let St=dt.data.subarray(j*J/dt.data.BYTES_PER_ELEMENT,(j+1)*J/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,dt.width,dt.height,1,At,Ft,St)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Ft,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,dt.width,dt.height,dt.depth,0,At,Ft,dt.data);else if(x.isData3DTexture)qt?(ve&&e.texStorage3D(i.TEXTURE_3D,vt,Bt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Ft,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,dt.width,dt.height,dt.depth,0,At,Ft,dt.data);else if(x.isFramebufferTexture){if(ve)if(qt)e.texStorage2D(i.TEXTURE_2D,vt,Bt,dt.width,dt.height);else{let J=dt.width,j=dt.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Bt,J,j,0,At,Ft,null),J>>=1,j>>=1}}else if(se.length>0){if(qt&&ve){let J=Ot(se[0]);e.texStorage2D(i.TEXTURE_2D,vt,Bt,J.width,J.height)}for(let J=0,j=se.length;J<j;J++)Rt=se[J],qt?B&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,At,Ft,Rt):e.texImage2D(i.TEXTURE_2D,J,Bt,At,Ft,Rt);x.generateMipmaps=!1}else if(qt){if(ve){let J=Ot(dt);e.texStorage2D(i.TEXTURE_2D,vt,Bt,J.width,J.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Ft,dt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,At,Ft,dt);m(x)&&u(rt),mt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function q(T,x,W){if(x.image.length!==6)return;let rt=pe(T,x),lt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let tt=n.get(lt);if(lt.version!==tt.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);let mt=de.getPrimaries(de.workingColorSpace),gt=x.colorSpace===si?null:de.getPrimaries(x.colorSpace),wt=x.colorSpace===si||mt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let oe=x.isCompressedTexture||x.image[0].isCompressedTexture,dt=x.image[0]&&x.image[0].isDataTexture,At=[];for(let j=0;j<6;j++)!oe&&!dt?At[j]=S(x.image[j],!0,s.maxCubemapSize):At[j]=dt?x.image[j].image:x.image[j],At[j]=me(x,At[j]);let Ft=At[0],Bt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),se=A(x.internalFormat,Bt,Rt,x.colorSpace),qt=x.isVideoTexture!==!0,ve=tt.__version===void 0||rt===!0,B=lt.dataReady,vt=O(x,Ft);Jt(i.TEXTURE_CUBE_MAP,x);let J;if(oe){qt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,Ft.width,Ft.height);for(let j=0;j<6;j++){J=At[j].mipmaps;for(let St=0;St<J.length;St++){let bt=J[St];x.format!==wn?Bt!==null?qt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,bt.width,bt.height,Bt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,se,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,bt.width,bt.height,Bt,Rt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,se,bt.width,bt.height,0,Bt,Rt,bt.data)}}}else{if(J=x.mipmaps,qt&&ve){J.length>0&&vt++;let j=Ot(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,j.width,j.height)}for(let j=0;j<6;j++)if(dt){qt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At[j].width,At[j].height,Bt,Rt,At[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,At[j].width,At[j].height,0,Bt,Rt,At[j].data);for(let St=0;St<J.length;St++){let $t=J[St].image[j].image;qt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,$t.width,$t.height,Bt,Rt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,se,$t.width,$t.height,0,Bt,Rt,$t.data)}}else{qt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Bt,Rt,At[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,Bt,Rt,At[j]);for(let St=0;St<J.length;St++){let bt=J[St];qt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,Bt,Rt,bt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,se,Bt,Rt,bt.image[j])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),tt.__version=lt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Et(T,x,W,rt,lt,tt){let mt=r.convert(W.format,W.colorSpace),gt=r.convert(W.type),wt=A(W.internalFormat,mt,gt,W.colorSpace),oe=n.get(x),dt=n.get(W);if(dt.__renderTarget=x,!oe.__hasExternalTextures){let At=Math.max(1,x.width>>tt),Ft=Math.max(1,x.height>>tt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,tt,wt,At,Ft,x.depth,0,mt,gt,null):e.texImage2D(lt,tt,wt,At,Ft,0,mt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ie(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,0,Wt(x)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let rt=x.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,tt=E(x.stencilBuffer,lt),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=Wt(x);ie(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,tt,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,T)}else{let rt=x.textures;for(let lt=0;lt<rt.length;lt++){let tt=rt[lt],mt=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),wt=A(tt.internalFormat,mt,gt,tt.colorSpace),oe=Wt(x);W&&ie(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,wt,x.width,x.height):ie(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,wt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,wt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(x.depthTexture);rt.__renderTarget=x,(!rt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ot(x.depthTexture,0);let lt=rt.__webglTexture,tt=Wt(x);if(x.depthTexture.format===ji)ie(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(x.depthTexture.format===as)ie(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Gt(T){let x=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let rt=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),rt){let lt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),x.__depthDisposeCallback=lt}x.__boundDepthTexture=rt}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Vt(x.__webglFramebuffer,T)}else if(W){x.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[rt]),x.__webglDepthbuffer[rt]===void 0)x.__webglDepthbuffer[rt]=i.createRenderbuffer(),at(x.__webglDepthbuffer[rt],T,!1);else{let lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,x,W){let rt=n.get(T);x!==void 0&&Et(rt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Gt(T)}function we(T){let x=T.texture,W=n.get(T),rt=n.get(x);T.addEventListener("dispose",F);let lt=T.textures,tt=T.isWebGLCubeRenderTarget===!0,mt=lt.length>1;if(mt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=x.version,o.memory.textures++),tt){W.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[gt]=[];for(let wt=0;wt<x.mipmaps.length;wt++)W.__webglFramebuffer[gt][wt]=i.createFramebuffer()}else W.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let gt=0;gt<x.mipmaps.length;gt++)W.__webglFramebuffer[gt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(mt)for(let gt=0,wt=lt.length;gt<wt;gt++){let oe=n.get(lt[gt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ie(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let gt=0;gt<lt.length;gt++){let wt=lt[gt];W.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[gt]);let oe=r.convert(wt.format,wt.colorSpace),dt=r.convert(wt.type),At=A(wt.internalFormat,oe,dt,wt.colorSpace,T.isXRRenderTarget===!0),Ft=Wt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,W.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),at(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,x);for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)Et(W.__webglFramebuffer[gt][wt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt);else Et(W.__webglFramebuffer[gt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let gt=0,wt=lt.length;gt<wt;gt++){let oe=lt[gt],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Jt(i.TEXTURE_2D,oe),Et(W.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(oe)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(gt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,rt.__webglTexture),Jt(gt,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)Et(W.__webglFramebuffer[wt],T,x,i.COLOR_ATTACHMENT0,gt,wt);else Et(W.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,gt,0);m(x)&&u(gt),e.unbindTexture()}T.depthBuffer&&Gt(T)}function ne(T){let x=T.textures;for(let W=0,rt=x.length;W<rt;W++){let lt=x[W];if(m(lt)){let tt=I(T),mt=n.get(lt).__webglTexture;e.bindTexture(tt,mt),u(tt),e.unbindTexture()}}}let Re=[],z=[];function Je(T){if(T.samples>0){if(ie(T)===!1){let x=T.textures,W=T.width,rt=T.height,lt=i.COLOR_BUFFER_BIT,tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(T),gt=x.length>1;if(gt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);let oe=n.get(x[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,W,rt,0,0,W,rt,lt,i.NEAREST),l===!0&&(Re.length=0,z.length=0,Re.push(i.COLOR_ATTACHMENT0+wt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Re.push(tt),z.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);let oe=n.get(x[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Wt(T){return Math.min(s.maxSamples,T.samples)}function ie(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ht(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function me(T,x){let W=T.colorSpace,rt=T.format,lt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==us&&W!==si&&(de.getTransfer(W)===Me?(rt!==wn||lt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Ot(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=nt,this.setTexture2D=ot,this.setTexture2DArray=et,this.setTexture3D=ut,this.setTextureCube=N,this.rebindTextures=kt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ie}function Am(i,t){function e(n,s=si){let r,o=de.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===wc)return i.RGB;if(n===wn)return i.RGBA;if(n===Tc)return i.LUMINANCE;if(n===Ac)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Cc)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Jo)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===ua||n===da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pa=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},sn=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rm={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,La=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:Cm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Da=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,_=null,v=null,S=new La,m=e.getContextAttributes(),u=null,I=null,A=[],E=[],O=new ae,D=null,F=new ke;F.viewport=new fe;let U=new ke;U.viewport=new fe;let w=[F,U],b=new Pa,L=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let q=A[it];return q===void 0&&(q=new Rs,A[it]=q),q.getTargetRaySpace()},this.getControllerGrip=function(it){let q=A[it];return q===void 0&&(q=new Rs,A[it]=q),q.getGripSpace()},this.getHand=function(it){let q=A[it];return q===void 0&&(q=new Rs,A[it]=q),q.getHandSpace()};function Z(it){let q=E.indexOf(it.inputSource);if(q===-1)return;let Et=A[q];Et!==void 0&&(Et.update(it.inputSource,it.frame,c||o),Et.dispatchEvent({type:it.type,data:it.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ot);for(let it=0;it<A.length;it++){let q=E[it];q!==null&&(E[it]=null,A[it].disconnect(q))}L=null,nt=null,S.reset(),t.setRenderTarget(u),_=null,f=null,d=null,s=null,I=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),I=new An(_.framebufferWidth,_.framebufferHeight,{format:wn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,Et=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?as:ji,Et=m.stencil?os:Ci);let Vt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),I=new An(f.textureWidth,f.textureHeight,{format:wn,type:Xn,depthTexture:new Ir(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ot(it){for(let q=0;q<it.removed.length;q++){let Et=it.removed[q],at=E.indexOf(Et);at>=0&&(E[at]=null,A[at].disconnect(Et))}for(let q=0;q<it.added.length;q++){let Et=it.added[q],at=E.indexOf(Et);if(at===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=E.length){E.push(Et),at=Gt;break}else if(E[Gt]===null){E[Gt]=Et,at=Gt;break}if(at===-1)break}let Vt=A[at];Vt&&Vt.connect(Et)}}let et=new G,ut=new G;function N(it,q,Et){et.setFromMatrixPosition(q.matrixWorld),ut.setFromMatrixPosition(Et.matrixWorld);let at=et.distanceTo(ut),Vt=q.projectionMatrix.elements,Gt=Et.projectionMatrix.elements,kt=Vt[14]/(Vt[10]-1),we=Vt[14]/(Vt[10]+1),ne=(Vt[9]+1)/Vt[5],Re=(Vt[9]-1)/Vt[5],z=(Vt[8]-1)/Vt[0],Je=(Gt[8]+1)/Gt[0],Wt=kt*z,ie=kt*Je,Ht=at/(-z+Je),me=Ht*-z;if(q.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(me),it.translateZ(Ht),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Vt[10]===-1)it.projectionMatrix.copy(q.projectionMatrix),it.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let Ot=kt+Ht,T=we+Ht,x=Wt-me,W=ie+(at-me),rt=ne*we/T*Ot,lt=Re*we/T*Ot;it.projectionMatrix.makePerspective(x,W,rt,lt,Ot,T),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function C(it,q){q===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(q.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let q=it.near,Et=it.far;S.texture!==null&&(S.depthNear>0&&(q=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),b.near=U.near=F.near=q,b.far=U.far=F.far=Et,(L!==b.near||nt!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,nt=b.far),F.layers.mask=it.layers.mask|2,U.layers.mask=it.layers.mask|4,b.layers.mask=F.layers.mask|U.layers.mask;let at=it.parent,Vt=b.cameras;C(b,at);for(let Gt=0;Gt<Vt.length;Gt++)C(Vt[Gt],at);Vt.length===2?N(b,F,U):b.projectionMatrix.copy(F.projectionMatrix),xt(it,b,at)};function xt(it,q,Et){Et===null?it.matrix.copy(q.matrixWorld):(it.matrix.copy(Et.matrixWorld),it.matrix.invert(),it.matrix.multiply(q.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(q.projectionMatrix),it.projectionMatrixInverse.copy(q.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=_a*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(b)};let Ut=null;function Jt(it,q){if(h=q.getViewerPose(c||o),v=q,h!==null){let Et=h.views;_!==null&&(t.setRenderTargetFramebuffer(I,_.framebuffer),t.setRenderTarget(I));let at=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,at=!0);for(let Gt=0;Gt<Et.length;Gt++){let kt=Et[Gt],we=null;if(_!==null)we=_.getViewport(kt);else{let Re=d.getViewSubImage(f,kt);we=Re.viewport,Gt===0&&(t.setRenderTargetTextures(I,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(I))}let ne=w[Gt];ne===void 0&&(ne=new ke,ne.layers.enable(Gt),ne.viewport=new fe,w[Gt]=ne),ne.matrix.fromArray(kt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(kt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(we.x,we.y,we.width,we.height),Gt===0&&(b.matrix.copy(ne.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),at===!0&&b.cameras.push(ne)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let Gt=d.getDepthInformation(Et[0]);Gt&&Gt.isValid&&Gt.texture&&S.init(t,Gt,s.renderState)}}for(let Et=0;Et<A.length;Et++){let at=E[Et],Vt=A[Et];at!==null&&Vt!==void 0&&Vt.update(at,q,c||o)}Ut&&Ut(it,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),v=null}let pe=new Fc;pe.setAnimationLoop(Jt),this.setAnimationLoop=function(it){Ut=it},this.dispose=function(){}}},Si=new Dn,Pm=new Te;function Lm(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Nc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,I,A,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&_(m,u,E)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,I,A):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===He&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===He&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let I=t.get(u),A=I.envMap,E=I.envMapRotation;A&&(m.envMap.value=A,Si.copy(E),Si.x*=-1,Si.y*=-1,Si.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Si)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,I,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*I,m.scale.value=A*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function _(m,u,I){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===He&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=I.texture,m.transmissionSamplerSize.value.set(I.width,I.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let I=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(I.matrixWorld),m.nearDistance.value=I.shadow.camera.near,m.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dm(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(I,A){let E=A.program;n.uniformBlockBinding(I,E)}function c(I,A){let E=s[I.id];E===void 0&&(v(I),E=h(I),s[I.id]=E,I.addEventListener("dispose",m));let O=A.program;n.updateUBOMapping(I,O);let D=t.render.frame;r[I.id]!==D&&(f(I),r[I.id]=D)}function h(I){let A=d();I.__bindingPointIndex=A;let E=i.createBuffer(),O=I.__size,D=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function d(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(I){let A=s[I.id],E=I.uniforms,O=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let D=0,F=E.length;D<F;D++){let U=Array.isArray(E[D])?E[D]:[E[D]];for(let w=0,b=U.length;w<b;w++){let L=U[w];if(_(L,D,w,O)===!0){let nt=L.__offset,Z=Array.isArray(L.value)?L.value:[L.value],K=0;for(let ot=0;ot<Z.length;ot++){let et=Z[ot],ut=S(et);typeof et=="number"||typeof et=="boolean"?(L.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,nt+K,L.__data)):et.isMatrix3?(L.__data[0]=et.elements[0],L.__data[1]=et.elements[1],L.__data[2]=et.elements[2],L.__data[3]=0,L.__data[4]=et.elements[3],L.__data[5]=et.elements[4],L.__data[6]=et.elements[5],L.__data[7]=0,L.__data[8]=et.elements[6],L.__data[9]=et.elements[7],L.__data[10]=et.elements[8],L.__data[11]=0):(et.toArray(L.__data,K),K+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,nt,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(I,A,E,O){let D=I.value,F=A+"_"+E;if(O[F]===void 0)return typeof D=="number"||typeof D=="boolean"?O[F]=D:O[F]=D.clone(),!0;{let U=O[F];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return O[F]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function v(I){let A=I.uniforms,E=0,O=16;for(let F=0,U=A.length;F<U;F++){let w=Array.isArray(A[F])?A[F]:[A[F]];for(let b=0,L=w.length;b<L;b++){let nt=w[b],Z=Array.isArray(nt.value)?nt.value:[nt.value];for(let K=0,ot=Z.length;K<ot;K++){let et=Z[K],ut=S(et),N=E%O,C=N%ut.boundary,xt=N+C;E+=C,xt!==0&&O-xt<ut.storage&&(E+=O-xt),nt.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=E,E+=ut.storage}}}let D=E%O;return D>0&&(E+=O-D),I.__size=E,I.__cache={},this}function S(I){let A={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(A.boundary=4,A.storage=4):I.isVector2?(A.boundary=8,A.storage=8):I.isVector3||I.isColor?(A.boundary=16,A.storage=12):I.isVector4?(A.boundary=16,A.storage=16):I.isMatrix3?(A.boundary=48,A.storage=48):I.isMatrix4?(A.boundary=64,A.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),A}function m(I){let A=I.target;A.removeEventListener("dispose",m);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function u(){for(let I in s)i.deleteBuffer(s[I]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Pr=class{constructor(t={}){let{canvas:e=Oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,I=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=oi,this.toneMappingExposure=1;let E=this,O=!1,D=0,F=0,U=null,w=-1,b=null,L=new fe,nt=new fe,Z=null,K=new Yt(0),ot=0,et=e.width,ut=e.height,N=1,C=null,xt=null,Ut=new fe(0,0,et,ut),Jt=new fe(0,0,et,ut),pe=!1,it=new Ps,q=!1,Et=!1,at=new Te,Vt=new Te,Gt=new G,kt=new fe,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Re(){return U===null?N:1}let z=n;function Je(y,k){return e.getContext(y,k)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),z===null){let k="webgl2";if(z=Je(k,y),z===null)throw Je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Wt,ie,Ht,me,Ot,T,x,W,rt,lt,tt,mt,gt,wt,oe,dt,At,Ft,Bt,Rt,se,qt,ve,B;function vt(){Wt=new Jf(z),Wt.init(),qt=new Am(z,Wt),ie=new Gf(z,Wt,t,qt),Ht=new Em(z,Wt),ie.reverseDepthBuffer&&f&&Ht.buffers.depth.setReversed(!0),me=new Qf(z),Ot=new um,T=new Tm(z,Wt,Ht,Ot,ie,qt,me),x=new Xf(E),W=new Zf(E),rt=new su(z),ve=new Hf(z,rt),lt=new $f(z,rt,me,ve),tt=new tp(z,lt,rt,me),Bt=new jf(z,ie,T),dt=new Wf(Ot),mt=new hm(E,x,W,Wt,ie,ve,dt),gt=new Lm(E,Ot),wt=new fm,oe=new vm(Wt),Ft=new kf(E,x,W,Ht,tt,_,l),At=new Sm(E,tt,ie),B=new Dm(z,me,ie,Ht),Rt=new Vf(z,Wt,me),se=new Kf(z,Wt,me),me.programs=mt.programs,E.capabilities=ie,E.extensions=Wt,E.properties=Ot,E.renderLists=wt,E.shadowMap=At,E.state=Ht,E.info=me}vt();let J=new Da(E,z);this.xr=J,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let y=Wt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Wt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(et,ut,!1))},this.getSize=function(y){return y.set(et,ut)},this.setSize=function(y,k,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=y,ut=k,e.width=Math.floor(y*N),e.height=Math.floor(k*N),X===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(et*N,ut*N).floor()},this.setDrawingBufferSize=function(y,k,X){et=y,ut=k,N=X,e.width=Math.floor(y*X),e.height=Math.floor(k*X),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Ut)},this.setViewport=function(y,k,X,Y){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,k,X,Y),Ht.viewport(L.copy(Ut).multiplyScalar(N).round())},this.getScissor=function(y){return y.copy(Jt)},this.setScissor=function(y,k,X,Y){y.isVector4?Jt.set(y.x,y.y,y.z,y.w):Jt.set(y,k,X,Y),Ht.scissor(nt.copy(Jt).multiplyScalar(N).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(y){Ht.setScissorTest(pe=y)},this.setOpaqueSort=function(y){C=y},this.setTransparentSort=function(y){xt=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(y=!0,k=!0,X=!0){let Y=0;if(y){let H=!1;if(U!==null){let ht=U.texture.format;H=ht===tl||ht===ja||ht===Qa}if(H){let ht=U.texture.type,_t=ht===Xn||ht===Ci||ht===Cs||ht===os||ht===$a||ht===Ka,Lt=Ft.getClearColor(),Dt=Ft.getClearAlpha(),Xt=Lt.r,Zt=Lt.g,It=Lt.b;_t?(v[0]=Xt,v[1]=Zt,v[2]=It,v[3]=Dt,z.clearBufferuiv(z.COLOR,0,v)):(S[0]=Xt,S[1]=Zt,S[2]=It,S[3]=Dt,z.clearBufferiv(z.COLOR,0,S))}else Y|=z.COLOR_BUFFER_BIT}k&&(Y|=z.DEPTH_BUFFER_BIT),X&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),wt.dispose(),oe.dispose(),Ot.dispose(),x.dispose(),W.dispose(),tt.dispose(),ve.dispose(),B.dispose(),mt.dispose(),J.dispose(),J.removeEventListener("sessionstart",fs),J.removeEventListener("sessionend",ps),le.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let y=me.autoReset,k=At.enabled,X=At.autoUpdate,Y=At.needsUpdate,H=At.type;vt(),me.autoReset=y,At.enabled=k,At.autoUpdate=X,At.needsUpdate=Y,At.type=H}function bt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $t(y){let k=y.target;k.removeEventListener("dispose",$t),Se(k)}function Se(y){Oe(y),Ot.remove(y)}function Oe(y){let k=Ot.get(y).programs;k!==void 0&&(k.forEach(function(X){mt.releaseProgram(X)}),y.isShaderMaterial&&mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,X,Y,H,ht){k===null&&(k=we);let _t=H.isMesh&&H.matrixWorld.determinant()<0,Lt=Yr(y,k,X,Y,H);Ht.setMaterial(Y,_t);let Dt=X.index,Xt=1;if(Y.wireframe===!0){if(Dt=lt.getWireframeAttribute(X),Dt===void 0)return;Xt=2}let Zt=X.drawRange,It=X.attributes.position,ce=Zt.start*Xt,ye=(Zt.start+Zt.count)*Xt;ht!==null&&(ce=Math.max(ce,ht.start*Xt),ye=Math.min(ye,(ht.start+ht.count)*Xt)),Dt!==null?(ce=Math.max(ce,0),ye=Math.min(ye,Dt.count)):It!=null&&(ce=Math.max(ce,0),ye=Math.min(ye,It.count));let be=ye-ce;if(be<0||be===1/0)return;ve.setup(H,Y,Lt,X,Dt);let Be,ue=Rt;if(Dt!==null&&(Be=rt.get(Dt),ue=se,ue.setIndex(Be)),H.isMesh)Y.wireframe===!0?(Ht.setLineWidth(Y.wireframeLinewidth*Re()),ue.setMode(z.LINES)):ue.setMode(z.TRIANGLES);else if(H.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),Ht.setLineWidth(Nt*Re()),H.isLineSegments?ue.setMode(z.LINES):H.isLineLoop?ue.setMode(z.LINE_LOOP):ue.setMode(z.LINE_STRIP)}else H.isPoints?ue.setMode(z.POINTS):H.isSprite&&ue.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Nt=H._multiDrawStarts,mn=H._multiDrawCounts,he=H._multiDrawCount,qe=Dt?rt.get(Dt).bytesPerElement:1,Nn=Ot.get(Y).currentProgram.getUniforms();for(let Ve=0;Ve<he;Ve++)Nn.setValue(z,"_gl_DrawID",Ve),ue.render(Nt[Ve]/qe,mn[Ve])}else if(H.isInstancedMesh)ue.renderInstances(ce,be,H.count);else if(X.isInstancedBufferGeometry){let Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,mn=Math.min(X.instanceCount,Nt);ue.renderInstances(ce,be,mn)}else ue.render(ce,be)};function ge(y,k,X){y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=He,y.needsUpdate=!0,re(y,k,X),y.side=ai,y.needsUpdate=!0,re(y,k,X),y.side=En):re(y,k,X)}this.compile=function(y,k,X=null){X===null&&(X=y),u=oe.get(X),u.init(k),A.push(u),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();let Y=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ht=H.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){let Lt=ht[_t];ge(Lt,X,H),Y.add(Lt)}else ge(ht,X,H),Y.add(ht)}),A.pop(),u=null,Y},this.compileAsync=function(y,k,X=null){let Y=this.compile(y,k,X);return new Promise(H=>{function ht(){if(Y.forEach(function(_t){Ot.get(_t).currentProgram.isReady()&&Y.delete(_t)}),Y.size===0){H(y);return}setTimeout(ht,10)}Wt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ln=null;function vn(y){ln&&ln(y)}function fs(){le.stop()}function ps(){le.start()}let le=new Fc;le.setAnimationLoop(vn),typeof self!="undefined"&&le.setContext(self),this.setAnimationLoop=function(y){ln=y,J.setAnimationLoop(y),y===null?le.stop():le.start()},J.addEventListener("sessionstart",fs),J.addEventListener("sessionend",ps),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,k,U),u=oe.get(y,A.length),u.init(k),A.push(u),Vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(Vt),Et=this.localClippingEnabled,q=dt.init(this.clippingPlanes,Et),m=wt.get(y,I.length),m.init(),I.push(m),J.enabled===!0&&J.isPresenting===!0){let ht=E.xr.getDepthSensingMesh();ht!==null&&dn(ht,k,-1/0,E.sortObjects)}dn(y,k,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(C,xt),ne=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ne&&Ft.addToRenderList(m,y),this.info.render.frame++,q===!0&&dt.beginShadows();let X=u.state.shadowsArray;At.render(X,y,k),q===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,H=m.transmissive;if(u.setupLights(),k.isArrayCamera){let ht=k.cameras;if(H.length>0)for(let _t=0,Lt=ht.length;_t<Lt;_t++){let Dt=ht[_t];Zn(Y,H,y,Dt)}ne&&Ft.render(y);for(let _t=0,Lt=ht.length;_t<Lt;_t++){let Dt=ht[_t];fn(m,y,Dt,Dt.viewport)}}else H.length>0&&Zn(Y,H,y,k),ne&&Ft.render(y),fn(m,y,k);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(E,y,k),ve.resetDefaultState(),w=-1,b=null,A.pop(),A.length>0?(u=A[A.length-1],q===!0&&dt.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,I.pop(),I.length>0?m=I[I.length-1]:m=null};function dn(y,k,X,Y){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||it.intersectsSprite(y)){Y&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Vt);let _t=tt.update(y),Lt=y.material;Lt.visible&&m.push(y,_t,Lt,X,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||it.intersectsObject(y))){let _t=tt.update(y),Lt=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),kt.copy(_t.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(Vt)),Array.isArray(Lt)){let Dt=_t.groups;for(let Xt=0,Zt=Dt.length;Xt<Zt;Xt++){let It=Dt[Xt],ce=Lt[It.materialIndex];ce&&ce.visible&&m.push(y,_t,ce,X,kt.z,It)}}else Lt.visible&&m.push(y,_t,Lt,X,kt.z,null)}}let ht=y.children;for(let _t=0,Lt=ht.length;_t<Lt;_t++)dn(ht[_t],k,X,Y)}function fn(y,k,X,Y){let H=y.opaque,ht=y.transmissive,_t=y.transparent;u.setupLightsView(X),q===!0&&dt.setGlobalState(E.clippingPlanes,X),Y&&Ht.viewport(L.copy(Y)),H.length>0&&Jn(H,k,X),ht.length>0&&Jn(ht,k,X),_t.length>0&&Jn(_t,k,X),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Zn(y,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Di:Xn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let ht=u.state.transmissionRenderTarget[Y.id],_t=Y.viewport||L;ht.setSize(_t.z,_t.w);let Lt=E.getRenderTarget();E.setRenderTarget(ht),E.getClearColor(K),ot=E.getClearAlpha(),ot<1&&E.setClearColor(16777215,.5),E.clear(),ne&&Ft.render(X);let Dt=E.toneMapping;E.toneMapping=oi;let Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),q===!0&&dt.setGlobalState(E.clippingPlanes,Y),Jn(y,X,Y),T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let It=0,ce=k.length;It<ce;It++){let ye=k[It],be=ye.object,Be=ye.geometry,ue=ye.material,Nt=ye.group;if(ue.side===En&&be.layers.test(Y.layers)){let mn=ue.side;ue.side=He,ue.needsUpdate=!0,$e(be,X,Y,Be,ue,Nt),ue.side=mn,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht))}E.setRenderTarget(Lt),E.setClearColor(K,ot),Xt!==void 0&&(Y.viewport=Xt),E.toneMapping=Dt}function Jn(y,k,X){let Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ht=y.length;H<ht;H++){let _t=y[H],Lt=_t.object,Dt=_t.geometry,Xt=Y===null?_t.material:Y,Zt=_t.group;Lt.layers.test(X.layers)&&$e(Lt,k,X,Dt,Xt,Zt)}}function $e(y,k,X,Y,H,ht){y.onBeforeRender(E,k,X,Y,H,ht),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(E,k,X,Y,y,ht),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=He,H.needsUpdate=!0,E.renderBufferDirect(X,k,Y,H,y,ht),H.side=ai,H.needsUpdate=!0,E.renderBufferDirect(X,k,Y,H,y,ht),H.side=En):E.renderBufferDirect(X,k,Y,H,y,ht),y.onAfterRender(E,k,X,Y,H,ht)}function re(y,k,X){k.isScene!==!0&&(k=we);let Y=Ot.get(y),H=u.state.lights,ht=u.state.shadowsArray,_t=H.state.version,Lt=mt.getParameters(y,H.state,ht,k,X),Dt=mt.getProgramCacheKey(Lt),Xt=Y.programs;Y.environment=y.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(y.isMeshStandardMaterial?W:x).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Xt===void 0&&(y.addEventListener("dispose",$t),Xt=new Map,Y.programs=Xt);let Zt=Xt.get(Dt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===_t)return zs(y,Lt),Zt}else Lt.uniforms=mt.getUniforms(y),y.onBeforeCompile(Lt,E),Zt=mt.acquireProgram(Lt,Dt),Xt.set(Dt,Zt),Y.uniforms=Lt.uniforms;let It=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=dt.uniform),zs(y,Lt),Y.needsLights=Ni(y),Y.lightsStateVersion=_t,Y.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function pn(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=es.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function zs(y,k){let X=Ot.get(y);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Yr(y,k,X,Y,H){k.isScene!==!0&&(k=we),T.resetTextureUnits();let ht=k.fog,_t=Y.isMeshStandardMaterial?k.environment:null,Lt=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:us,Dt=(Y.isMeshStandardMaterial?W:x).get(Y.envMap||_t),Xt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,ye=!!X.morphAttributes.color,be=oi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(be=E.toneMapping);let Be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=Be!==void 0?Be.length:0,Nt=Ot.get(Y),mn=u.state.lights;if(q===!0&&(Et===!0||y!==b)){let Pe=y===b&&Y.id===w;dt.setState(Y,y,Pe)}let he=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==mn.state.version||Nt.outputColorSpace!==Lt||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Dt||Y.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==Xt||Nt.vertexTangents!==Zt||Nt.morphTargets!==It||Nt.morphNormals!==ce||Nt.morphColors!==ye||Nt.toneMapping!==be||Nt.morphTargetsCount!==ue)&&(he=!0):(he=!0,Nt.__version=Y.version);let qe=Nt.currentProgram;he===!0&&(qe=re(Y,k,H));let Nn=!1,Ve=!1,pi=!1,Ee=qe.getUniforms(),gn=Nt.uniforms;if(Ht.useProgram(qe.program)&&(Nn=!0,Ve=!0,pi=!0),Y.id!==w&&(w=Y.id,Ve=!0),Nn||b!==y){Ht.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),zh(at),kh(at),Ee.setValue(z,"projectionMatrix",at)):Ee.setValue(z,"projectionMatrix",y.projectionMatrix),Ee.setValue(z,"viewMatrix",y.matrixWorldInverse);let Ke=Ee.map.cameraPosition;Ke!==void 0&&Ke.setValue(z,Gt.setFromMatrixPosition(y.matrixWorld)),ie.logarithmicDepthBuffer&&Ee.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Ve=!0,pi=!0)}if(H.isSkinnedMesh){Ee.setOptional(z,H,"bindMatrix"),Ee.setOptional(z,H,"bindMatrixInverse");let Pe=H.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Ee.setValue(z,"boneTexture",Pe.boneTexture,T))}H.isBatchedMesh&&(Ee.setOptional(z,H,"batchingTexture"),Ee.setValue(z,"batchingTexture",H._matricesTexture,T),Ee.setOptional(z,H,"batchingIdTexture"),Ee.setValue(z,"batchingIdTexture",H._indirectTexture,T),Ee.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(z,"batchingColorTexture",H._colorsTexture,T));let mi=X.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Bt.update(H,X,qe),(Ve||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,Ee.setValue(z,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(gn.envMap.value=Dt,gn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),Ve&&(Ee.setValue(z,"toneMappingExposure",E.toneMappingExposure),Nt.needsLights&&Zr(gn,pi),ht&&Y.fog===!0&&gt.refreshFogUniforms(gn,ht),gt.refreshMaterialUniforms(gn,Y,N,ut,u.state.transmissionRenderTarget[y.id]),es.upload(z,pn(Nt),gn,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(es.upload(z,pn(Nt),gn,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(z,"center",H.center),Ee.setValue(z,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(z,"normalMatrix",H.normalMatrix),Ee.setValue(z,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Pe=Y.uniformsGroups;for(let Ke=0,Qe=Pe.length;Ke<Qe;Ke++){let gi=Pe[Ke];B.update(gi,qe),B.bind(gi,qe)}}return qe}function Zr(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Ni(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,k,X){Ot.get(y.texture).__webglTexture=k,Ot.get(y.depthTexture).__webglTexture=X;let Y=Ot.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){let X=Ot.get(y);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,X=0){U=y,D=k,F=X;let Y=!0,H=null,ht=!1,_t=!1;if(y){let Dt=Ot.get(y);if(Dt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(Dt.__hasExternalTextures)T.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let It=y.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&Ot.has(It)&&(y.width!==It.image.width||y.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}let Xt=y.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(_t=!0);let Zt=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?H=Zt[k][X]:H=Zt[k],ht=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?H=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(Zt)?H=Zt[X]:H=Zt,L.copy(y.viewport),nt.copy(y.scissor),Z=y.scissorTest}else L.copy(Ut).multiplyScalar(N).floor(),nt.copy(Jt).multiplyScalar(N).floor(),Z=pe;if(Ht.bindFramebuffer(z.FRAMEBUFFER,H)&&Y&&Ht.drawBuffers(y,H),Ht.viewport(L),Ht.scissor(nt),Ht.setScissorTest(Z),ht){let Dt=Ot.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,X)}else if(_t){let Dt=Ot.get(y.texture),Xt=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Xt)}w=-1},this.readRenderTargetPixels=function(y,k,X,Y,H,ht,_t){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){Ht.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Dt=y.texture,Xt=Dt.format,Zt=Dt.type;if(!ie.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Y&&X>=0&&X<=y.height-H&&z.readPixels(k,X,Y,H,qt.convert(Xt),qt.convert(Zt),ht)}finally{let Dt=U!==null?Ot.get(U).__webglFramebuffer:null;Ht.bindFramebuffer(z.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,k,X,Y,H,ht,_t){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){let Dt=y.texture,Xt=Dt.format,Zt=Dt.type;if(!ie.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-Y&&X>=0&&X<=y.height-H){Ht.bindFramebuffer(z.FRAMEBUFFER,Lt);let It=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,It),z.bufferData(z.PIXEL_PACK_BUFFER,ht.byteLength,z.STREAM_READ),z.readPixels(k,X,Y,H,qt.convert(Xt),qt.convert(Zt),0);let ce=U!==null?Ot.get(U).__webglFramebuffer:null;Ht.bindFramebuffer(z.FRAMEBUFFER,ce);let ye=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Bh(z,ye,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,It),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ht),z.deleteBuffer(It),z.deleteSync(ye),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,X=0){y.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);let Y=Math.pow(2,-X),H=Math.floor(y.image.width*Y),ht=Math.floor(y.image.height*Y),_t=k!==null?k.x:0,Lt=k!==null?k.y:0;T.setTexture2D(y,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,_t,Lt,H,ht),Ht.unbindTexture()},this.copyTextureToTexture=function(y,k,X=null,Y=null,H=0){y.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],k=arguments[2],H=arguments[3]||0,X=null);let ht,_t,Lt,Dt,Xt,Zt,It,ce,ye,be=y.isCompressedTexture?y.mipmaps[H]:y.image;X!==null?(ht=X.max.x-X.min.x,_t=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Xt=X.min.y,Zt=X.isBox3?X.min.z:0):(ht=be.width,_t=be.height,Lt=be.depth||1,Dt=0,Xt=0,Zt=0),Y!==null?(It=Y.x,ce=Y.y,ye=Y.z):(It=0,ce=0,ye=0);let Be=qt.convert(k.format),ue=qt.convert(k.type),Nt;k.isData3DTexture?(T.setTexture3D(k,0),Nt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Nt=z.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Nt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let mn=z.getParameter(z.UNPACK_ROW_LENGTH),he=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qe=z.getParameter(z.UNPACK_SKIP_PIXELS),Nn=z.getParameter(z.UNPACK_SKIP_ROWS),Ve=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Dt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Zt);let pi=y.isDataArrayTexture||y.isData3DTexture,Ee=k.isDataArrayTexture||k.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let gn=Ot.get(y),mi=Ot.get(k),Pe=Ot.get(gn.__renderTarget),Ke=Ot.get(mi.__renderTarget);Ht.bindFramebuffer(z.READ_FRAMEBUFFER,Pe.__webglFramebuffer),Ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Qe=0;Qe<Lt;Qe++)pi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(y).__webglTexture,H,Zt+Qe),y.isDepthTexture?(Ee&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(k).__webglTexture,H,ye+Qe),z.blitFramebuffer(Dt,Xt,ht,_t,It,ce,ht,_t,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ee?z.copyTexSubImage3D(Nt,H,It,ce,ye+Qe,Dt,Xt,ht,_t):z.copyTexSubImage2D(Nt,H,It,ce,ye+Qe,Dt,Xt,ht,_t);Ht.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ee?y.isDataTexture||y.isData3DTexture?z.texSubImage3D(Nt,H,It,ce,ye,ht,_t,Lt,Be,ue,be.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,H,It,ce,ye,ht,_t,Lt,Be,be.data):z.texSubImage3D(Nt,H,It,ce,ye,ht,_t,Lt,Be,ue,be):y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,It,ce,ht,_t,Be,ue,be.data):y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,It,ce,be.width,be.height,Be,be.data):z.texSubImage2D(z.TEXTURE_2D,H,It,ce,ht,_t,Be,ue,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,mn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ve),H===0&&k.generateMipmaps&&z.generateMipmap(Nt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(y,k,X=null,Y=null,H=0){return y.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],k=arguments[3],H=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,k,X,Y,H)},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Ht.unbindTexture()},this.resetState=function(){D=0,F=0,U=null,Ht.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ls=class extends hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ur=new G,Nr=new G,uc=new Te,Es=new Sr,hr=new ls,Co=new G,dc=new G,Ua=class extends Xe{constructor(t=new an,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;uc.copy(s).invert(),Es.copy(t.ray).applyMatrix4(uc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let _=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let S=_,m=v-1;S<m;S+=c){let u=h.getX(S),I=h.getX(S+1),A=ur(this,t,Es,l,u,I);A&&e.push(A)}if(this.isLineLoop){let S=h.getX(v-1),m=h.getX(_),u=ur(this,t,Es,l,S,m);u&&e.push(u)}}else{let _=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let S=_,m=v-1;S<m;S+=c){let u=ur(this,t,Es,l,S,S+1);u&&e.push(u)}if(this.isLineLoop){let S=ur(this,t,Es,l,v-1,_);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ur(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Ur.fromBufferAttribute(o,s),Nr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ur,Nr,Co,dc)>n)return;Co.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Co);if(!(l<t.near||l>t.far))return{distance:l,point:dc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var fc=new G,pc=new G,Fr=class extends Ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fc.fromBufferAttribute(e,s),pc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fc.distanceTo(pc);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ui=class extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Or=class i extends an{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let _=n+d/e*s;c.x=t*Math.cos(_),c.y=t*Math.sin(_),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Ds=class i extends an{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new G,f=new G,_=[],v=[],S=[],m=[];for(let u=0;u<=n;u++){let I=[],A=u/n,E=0;u===0&&o===0?E=.5/e:u===n&&l===Math.PI&&(E=-.5/e);for(let O=0;O<=e;O++){let D=O/e;d.x=-t*Math.cos(s+D*r)*Math.sin(o+A*a),d.y=t*Math.cos(o+A*a),d.z=t*Math.sin(s+D*r)*Math.sin(o+A*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(D+E,1-A),I.push(c++)}h.push(I)}for(let u=0;u<n;u++)for(let I=0;I<e;I++){let A=h[u][I+1],E=h[u][I],O=h[u+1][I],D=h[u+1][I+1];(u!==0||o>0)&&_.push(A,E,D),(u!==n-1||l<Math.PI)&&_.push(E,O,D)}this.setIndex(_),this.setAttribute("position",new Ce(v,3)),this.setAttribute("normal",new Ce(S,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Un=class extends hi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Um(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Na=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gl:r=t,a=2*e-n;break;case _l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gl:o=t,l=2*n-e;break;case _l:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,_=this._weightNext,v=(n-e)/(s-e),S=v*v,m=S*v,u=-f*m+2*f*S-f*v,I=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*v+1,A=(-1-_)*m+(1.5+_)*S+.5*v,E=_*m-_*S;for(let O=0;O!==a;++O)r[O]=u*o[h+O]+I*o[c+O]+A*o[l+O]+E*o[d+O];return r}},Fa=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Oa=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Um(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,_=d+n;for(let v=0;v!==n;++v){let S=e[d+v];if(S!==e[f+v]||S!==e[_+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let _=0;_!==n;++_)e[f+_]=e[d+_]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ga;var Pi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=xr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Cn{};Ba.prototype.ValueTypeName="color";var za=class extends Cn{};za.prototype.ValueTypeName="number";var ka=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},Br=class extends Cn{InterpolantFactoryMethodLinear(t){return new ka(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Cn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=xr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Cn{};Ha.prototype.ValueTypeName="vector";var mc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Va=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let _=c[d],v=c[d+1];if(_.global&&(_.lastIndex=0),_.test(h))return v}return null}}},Nm=new Va,Us=class{constructor(t){this.manager=t!==void 0?t:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Us.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ga=class extends Us{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=mc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Is("img");function l(){h(),mc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var zr=class extends Us{constructor(t){super(t)}load(t,e,n,s){let r=new on,o=new Ga(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ns=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},kr=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Io=new Te,gc=new G,_c=new G,Hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xc=new Te,ws=new G,Po=new G,Wa=class extends Hr{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),Po.copy(n.position),Po.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Po),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc)}},di=class extends Ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wa}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xa=class extends Hr{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Xa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var il="\\[\\]\\.:\\/",Fm=new RegExp("["+il+"]","g"),sl="[^"+il+"]",Om="[^"+il.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",sl),zm=/(WCOD+)?/.source.replace("WCOD",Om),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),Hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),Vm=new RegExp("^"+Bm+zm+km+Hm+"$"),Gm=["material","materials","bones","map"],qa=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(t){let e=Vm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=qa;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $m=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);var Os=class i extends xe{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new ke;let n=this,s=e.color!==void 0?new Yt(e.color):new Yt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new bn,d=new G,f=new G,_=new G,v=new Te,S=new G(0,0,-1),m=new fe,u=new G,I=new G,A=new fe,E=new Te,O=this.camera,D=new An(r,o,{samples:c,type:Di}),F=new xn({name:l.name!==void 0?l.name:"unspecified",uniforms:el.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});F.uniforms.tDiffuse.value=D.texture,F.uniforms.color.value=s,F.uniforms.textureMatrix.value=E,this.material=F,this.onBeforeRender=function(U,w,b){if(f.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(b.matrixWorld),v.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(v),u.subVectors(f,_),u.dot(d)>0)return;u.reflect(d).negate(),u.add(f),v.extractRotation(b.matrixWorld),S.set(0,0,-1),S.applyMatrix4(v),S.add(_),I.subVectors(f,S),I.reflect(d).negate(),I.add(f),O.position.copy(u),O.up.set(0,1,0),O.up.applyMatrix4(v),O.up.reflect(d),O.lookAt(I),O.far=b.far,O.updateMatrixWorld(),O.projectionMatrix.copy(b.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(O.projectionMatrix),E.multiply(O.matrixWorldInverse),E.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,f),h.applyMatrix4(O.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=O.projectionMatrix;A.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],A.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],A.z=-1,A.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(A)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;let nt=U.getRenderTarget(),Z=U.xr.enabled,K=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(D),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(w,O),U.xr.enabled=Z,U.shadowMap.autoUpdate=K,U.setRenderTarget(nt);let ot=b.viewport;ot!==void 0&&U.state.viewport(ot),n.visible=!0},this.getRenderTarget=function(){return D},this.dispose=function(){D.dispose(),n.material.dispose()}}};Os.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Yn=window.Q||(window.Q={}),Mt=2,Bs=1.45,qr=.36,Ui=.55,Hc=3.4,Vc=2.3,Xm={".":3.2,H:5.6,L:2.6},fi=-2.4,qm=1.3;function Ym(i){return!i||i==="."?0:i>="0"&&i<="9"?(i.charCodeAt(0)-48)*.25:i==="x"?fi:-(i.charCodeAt(0)-96)*.25}var Zm={rats:.62,zombie:1.85,skeleton:1.9,cultist:1.9,abbess:2.5,guard:1.95,prisoner:1.8,warden:2.4,drowned:1.9,watch:1.95,hanged:1.85,cutter:1.85,saltwight:1.9,overseer:2.35};function Jm(i,t){let e=new Pr({antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.outputColorSpace=De,e.setClearColor(0),i.prepend(e.domElement),e.domElement.className="world",e.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault()}),e.domElement.addEventListener("webglcontextrestored",()=>{t.onContextRestored&&t.onContextRestored()});let n=new Dr;n.fog=new Lr(0,2,16);let s=new ke(70,4/3,.05,60);s.rotation.order="YXZ",n.add(s);let r=new kr(5919558,657414,.5);n.add(r);let o=new Vr(14471851,0);o.position.set(0,16.8,24.9),n.add(o);let a=new di(16771010,13,18,1.15);a.position.set(.2,.25,.9),s.add(a);let l=new zr,c={},h=new Map;function d(){for(let[g,p]of h){let M=new Image;M.onload=()=>{h.has(g)&&(h.delete(g),g.image=M,g.needsUpdate=!0,Ut=!0)},M.src=p}}window.addEventListener("online",d),document.addEventListener("visibilitychange",()=>{document.hidden||d()}),setInterval(()=>{h.size&&d()},5e3);function f(g,p=!0){if(c[g])return c[g];let M=Yn.assetUrl(g),R=l.load(M,()=>{Ut=!0},void 0,()=>h.set(R,M));return R.colorSpace=De,p&&(R.wrapS=rs,R.wrapT=rs),R.anisotropy=e.capabilities.getMaxAnisotropy(),c[g]=R,R}function _(g,p,M){if(c[g])return c[g];let R=document.createElement("canvas"),P=new ui(R);P.colorSpace=De;let V=new Image;V.onload=()=>{R.width=V.naturalWidth,R.height=V.naturalHeight;let ct=R.getContext("2d");ct.drawImage(V,0,0),M(ct,R.width,R.height),P.needsUpdate=!0,Ut=!0};let Q=0;return V.onerror=()=>{Q+=1,setTimeout(()=>{V.src=Yn.assetUrl(p)},Math.min(3e4,2e3*Q))},V.src=Yn.assetUrl(p),c[g]=P,P}let v=(g,p={})=>new Un({map:g,...p}),S={pit:new Rn({color:0}),abyss:new Rn({color:2754324,fog:!1})},m={value:-99};function u(g){return g.onBeforeCompile=p=>{p.uniforms.waterY=m,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying float vWorldY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
uniform float waterY;
varying float vWorldY;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
          float above = vWorldY - waterY;
          float wet = 1.0 - smoothstep(0.0, 0.32, above);
          gl_FragColor.rgb *= 1.0 - 0.5 * wet * step(-0.02, above);
          gl_FragColor.rgb += vec3(0.5, 0.47, 0.4) * exp(-pow(above / 0.018, 2.0)) * 0.35;`)},g}let I=g=>/^(facade|front)-/.test(g);function A(g,p){if(!S[g]){let M=I(g);S[g]=u(v(f(g,!/door/.test(g)&&!M),M?{...p,alphaTest:.5}:p))}return S[g]}let E={walls:[["wall-stone",6],["wall-ossuary",3],["wall-relief",1]],riser:"wall-stone",floor:"floor",ceiling:"ceiling",door:"door",sky:5919558,ground:657414,fog:0,ceilingTint:9076848,water:.32,waterTint:723206},O=E,D={dawn:{fog:6048589,sky:13808298,ground:3024416,hemi:1.45,moon:.5,near:9,far:56,lamps:.4,torch:.75,dome:.85,tint:16038310},day:{fog:6711920,sky:13685464,ground:3880751,hemi:1.75,moon:.45,near:10,far:62,lamps:0,torch:.5,dome:1,tint:16777215},dusk:{fog:4862249,sky:12618354,ground:2431765,hemi:1.3,moon:.55,near:8,far:50,lamps:.9,torch:1,dome:.78,tint:15043160}},F="night",U={};function w(){let g={fog:O.fog,sky:O.sky,ground:O.ground,hemi:O.hemi||.5,moon:O.outdoor?O.moon||.7:0,near:O.fogNear||2,far:O.fogFar||16,lamps:1,torch:1,dome:0,tint:16777215};return O.outdoor&&D[F]?D[F]:g}let b=["fog","sky","ground","tint"],L={},nt=g=>L[g]||(L[g]=new Yt(g));function Z(g,p){let M=w(),R=p?1:Math.min(1,g*.7);for(let[P,V]of Object.entries(M))b.includes(P)?!U[P]||p?U[P]=nt(V).clone():U[P].lerp(nt(V),R):U[P]=U[P]===void 0||p?V:U[P]+(V-U[P])*R;n.fog.color.copy(U.fog),e.setClearColor(U.fog),r.color.copy(U.sky),r.groundColor.copy(U.ground),r.intensity=U.hemi,o.intensity=U.moon,he||(n.fog.near=U.near,n.fog.far=U.far),Wt&&(Wt.material.opacity=U.dome,Wt.material.color.copy(U.tint),Wt.visible=U.dome>.01),j.glass&&j.glass.color.setHex(4866612).lerp(St,Math.min(1,U.lamps*1.4))}let K={},ot=g=>K[g]||null,et=g=>g==="#"||!!(K[g]&&(K[g].front||K[g].prop)),ut=new Proxy({},{get(g,p){return p in S?S[p]:p==="floor"?A(O.floor):p==="ceiling"?A(O.ceiling,{color:O.ceilingTint}):p==="door"?A(O.door):p==="riser"?A(O.riser,O.wallTint?{color:O.wallTint}:void 0):A(p,O.wallTint?{color:O.wallTint}:void 0)}}),N=null,C={x:0,z:0,a:0,pitch:0,y:Bs,vy:0,phase:0,moving:0,safe:{x:0,z:0},cell:null},xt=!0,Ut=!0,Jt=!1,pe=performance.now(),it=0,q=g=>Math.floor(g/Mt),Et=(g,p)=>N.grid[p]&&N.grid[p][g]||"#",at=(g,p)=>N.h[p]&&N.h[p][g]!==void 0?N.h[p][g]:0,Vt=(g,p)=>N.c[p]&&N.c[p][g]!==void 0?N.c[p][g]:3.2,Gt=(g,p)=>N.doors.get(g+","+p);function kt(g,p){let M=Et(g,p);if(et(M))return!0;let R=Gt(g,p);return!!R&&R.open<.8}let we=(g,p)=>(O.zones||[]).find(M=>M.rect?g>=M.rect[0]&&g<=M.rect[2]&&p>=M.rect[1]&&p<=M.rect[3]:p>=M.rows[0]&&p<=M.rows[1]);function ne(g,p){let M=we(g,p),R=M&&M.walls?M.walls:O.walls,P=R.reduce((Q,[,ct])=>Q+ct,0),V=((g*7+p*13)%P+P)%P;for(let[Q,ct]of R){if(V<ct)return Q;V-=ct}return R[0][0]}function Re(g){N&&n.remove(N.root),mt&&(mt.mesh.dispose(),mt=null),O={...E,...g.theme||{}},K=g.uses||{};let p=!!O.outdoor,M=g.grid,R=M.length,P=M[0].length,V=g.heights.map(st=>[...st].map(Ym)),Q=g.ceil.map((st,$)=>[...st].map((pt,Ct)=>p?V[$][Ct]+(pt==="L"?1.1:(O.wallHeight||5.2)*(pt==="H"?1.35:1)):Math.max(Xm[pt]||3.2,V[$][Ct]+2.4)));N={grid:M,h:V,c:Q,W:P,H:R,root:new sn,doors:new Map,items:new Map,groups:[],lights:[],lamps:[],lampLights:null},n.add(N.root);let ct={},ft=(st,$,pt,Ct,zt,ee)=>{let _e=ct[st]||(ct[st]={pos:[],uv:[],idx:[]}),Ie=_e.pos.length/3;_e.pos.push(...$,...pt,...Ct,...zt),_e.uv.push(...ee),_e.idx.push(Ie,Ie+1,Ie+2,Ie,Ie+2,Ie+3)},Tt=[{dx:0,dy:-1,p:(st,$)=>[[st,$],[st+1,$]]},{dx:1,dy:0,p:(st,$)=>[[st+1,$],[st+1,$+1]]},{dx:0,dy:1,p:(st,$)=>[[st+1,$+1],[st,$+1]]},{dx:-1,dy:0,p:(st,$)=>[[st,$+1],[st,$]]}],Pt=(st,$,pt,Ct,zt,ee,_e)=>{if(ee-zt<.01)return;let[[Ie,Kt],[te,Ue]]=$.p(pt,Ct),je=[Ie*Mt,zt,Kt*Mt],tn=[te*Mt,zt,Ue*Mt],Kn=[te*Mt,ee,Ue*Mt],gs=[Ie*Mt,ee,Kt*Mt],_s=_e?0:zt/2,xs=_e?1:ee/2;ft(st,je,tn,Kn,gs,[0,_s,1,_s,1,xs,0,xs])};for(let st=0;st<R;st++)for(let $=0;$<P;$++){let pt=M[st][$];if(pt==="#"||K[pt]&&K[pt].front)continue;let Ct=V[st][$],zt=Q[st][$],ee=$*Mt,_e=($+1)*Mt,Ie=st*Mt,Kt=(st+1)*Mt,te=we($,st);pt===">"?rt($,st,Ct):ft(Ct<=fi+.01?"abyss":te&&te.floor||"floor",[ee,Ct,Kt],[_e,Ct,Kt],[_e,Ct,Ie],[ee,Ct,Ie],[$,-(st+1),$+1,-(st+1),$+1,-st,$,-st]),p||ft(te&&te.ceiling||"ceiling",[ee,zt,Ie],[_e,zt,Ie],[_e,zt,Kt],[ee,zt,Kt],[$,st,$+1,st,$+1,st+1,$,st+1]);for(let Ue of Tt){let je=$+Ue.dx,tn=st+Ue.dy,Kn=M[tn]&&M[tn][je]||"#",gs=K[Kn]&&K[Kn].front;if(Kn==="#"||gs){let hl=gs||ne(je,tn);p&&zt-Ct>2?Pt(hl,Ue,$,st,Ct,zt,I(hl)):Pt(p?"riser":gs||ne(je,tn),Ue,$,st,Ct,zt);continue}let _s=V[tn][je],xs=Q[tn][je],cl=te&&te.riser||"riser";_s>Ct&&Pt(cl,Ue,$,st,Ct,_s),!p&&xs<zt&&Pt(cl,Ue,$,st,xs,zt)}(pt==="D"||pt==="C"||pt==="J")&&W($,st,Ct,zt,pt!=="D"),(pt==="G"&&!p||pt==="<")&&lt($,st,Ct)}for(let[st,$]of Object.entries(ct)){let pt=new an;pt.setAttribute("position",new Ce($.pos,3)),pt.setAttribute("uv",new Ce($.uv,2)),pt.setIndex($.idx),pt.computeVertexNormals(),N.root.add(new xe(pt,ut[st]))}for(let st=0;st<R;st++)for(let $=0;$<P;$++)fs($,st);Y(),se(),Ht(),T(),Z(0,!0),Ut=!0}let z=null;function Je(){let g="sky:"+O.fog;if(c[g])return c[g];let p=2048,M=1024,R=document.createElement("canvas");R.width=p,R.height=M;let P=R.getContext("2d"),V="#"+new Yt(O.fog).getHexString(),Q=P.createLinearGradient(0,0,0,M/2);Q.addColorStop(0,"#030406"),Q.addColorStop(.6,"#0a0c0f"),Q.addColorStop(1,V),P.fillStyle=Q,P.fillRect(0,0,p,M/2),Q=P.createLinearGradient(0,M/2,0,M),Q.addColorStop(0,V),Q.addColorStop(.06,"#0a0c0d"),Q.addColorStop(1,"#020303"),P.fillStyle=Q,P.fillRect(0,M/2,p,M/2);for(let $=0;$<1500;$++){let pt=Math.pow(Math.random(),1.5)*M*.45,Ct=(1-pt/(M*.45))*(.2+Math.random()*.8);P.fillStyle=`rgba(235,228,208,${Ct.toFixed(2)})`;let zt=Math.random()<.04?2:1;P.fillRect(Math.random()*p,pt,zt,zt)}for(let $=0;$<80;$++){let pt=Math.random()*p,Ct=M*(.28+Math.random()*.2),zt=60+Math.random()*170,ee=P.createRadialGradient(pt,Ct,0,pt,Ct,zt);ee.addColorStop(0,"rgba(5,6,8,0.6)"),ee.addColorStop(1,"rgba(5,6,8,0)"),P.fillStyle=ee,P.beginPath(),P.ellipse(pt,Ct,zt*1.9,zt*.42,0,0,Math.PI*2),P.fill()}let ct=p*.25,ft=M*.31;P.save(),P.translate(ct,ft),P.rotate(-.42),P.globalCompositeOperation="lighter";let Tt=P.createLinearGradient(0,0,-520,0);Tt.addColorStop(0,"rgba(255,236,140,0.32)"),Tt.addColorStop(.25,"rgba(255,225,26,0.12)"),Tt.addColorStop(.65,"rgba(255,61,139,0.05)"),Tt.addColorStop(1,"rgba(255,61,139,0)"),P.fillStyle=Tt,P.filter="blur(10px)",P.beginPath(),P.moveTo(6,0),P.quadraticCurveTo(-240,-14,-520,-110),P.lineTo(-520,60),P.quadraticCurveTo(-240,22,6,0),P.fill(),P.filter="none";for(let $=0;$<26;$++){let pt=200+Math.random()*300,Ct=-100+Math.random()*150,zt=P.createLinearGradient(0,0,-pt,Ct*(pt/520));zt.addColorStop(0,"rgba(255,240,170,0.06)"),zt.addColorStop(1,"rgba(255,61,139,0)"),P.strokeStyle=zt,P.lineWidth=1+Math.random()*2,P.beginPath(),P.moveTo(0,0),P.quadraticCurveTo(-pt*.5,Ct*.1,-pt,Ct*(pt/520)),P.stroke()}P.restore();let Pt=P.createRadialGradient(ct,ft,0,ct,ft,40);Pt.addColorStop(0,"rgba(255,255,240,1)"),Pt.addColorStop(.12,"rgba(255,242,150,0.9)"),Pt.addColorStop(.4,"rgba(255,225,26,0.18)"),Pt.addColorStop(1,"rgba(255,225,26,0)"),P.fillStyle=Pt,P.fillRect(ct-40,ft-40,80,80);for(let $=0;$<110;$++){let pt=M/2+3+Math.pow(Math.random(),2)*M*.2,Ct=ct+(Math.random()-.5)*(16+(pt-M/2)*.6);P.fillStyle=`rgba(255,225,26,${(.55*Math.random()*(1-(pt-M/2)/(M*.2))).toFixed(2)})`,P.fillRect(Ct,pt,6+Math.random()*16,1.5)}let st=new ui(R);return st.colorSpace=De,c[g]=st,st}let Wt=null;function ie(){if(c.daySky)return c.daySky;let g=1024,p=512,M=document.createElement("canvas");M.width=g,M.height=p;let R=M.getContext("2d"),P=R.createLinearGradient(0,0,0,p/2);P.addColorStop(0,"#3e4146"),P.addColorStop(.55,"#5c6066"),P.addColorStop(1,"#6a6e74"),R.fillStyle=P,R.fillRect(0,0,g,p/2),P=R.createLinearGradient(0,p/2,0,p),P.addColorStop(0,"#6a6e74"),P.addColorStop(.05,"#3c4044"),P.addColorStop(1,"#22252a"),R.fillStyle=P,R.fillRect(0,p/2,g,p/2);for(let Pt=0;Pt<140;Pt++){let st=Math.random()*g,$=p*(.05+Math.pow(Math.random(),.7)*.42),pt=30+Math.random()*110,Ct=Math.random()<.55,zt=R.createRadialGradient(st,$,0,st,$,pt);zt.addColorStop(0,Ct?"rgba(40,42,46,0.35)":"rgba(140,144,150,0.22)"),zt.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=zt,R.beginPath(),R.ellipse(st,$,pt*2.2,pt*.45,0,0,Math.PI*2),R.fill()}let V=g*.25,Q=p*.31;R.save(),R.translate(V,Q),R.rotate(-.42),R.filter="blur(6px)";let ct=R.createLinearGradient(0,0,-260,0);ct.addColorStop(0,"rgba(230,226,200,0.32)"),ct.addColorStop(1,"rgba(230,226,200,0)"),R.fillStyle=ct,R.beginPath(),R.moveTo(3,0),R.quadraticCurveTo(-120,-7,-260,-55),R.lineTo(-260,30),R.quadraticCurveTo(-120,11,3,0),R.fill(),R.restore();let ft=R.createRadialGradient(V,Q,0,V,Q,14);ft.addColorStop(0,"rgba(245,242,225,0.8)"),ft.addColorStop(1,"rgba(245,242,225,0)"),R.fillStyle=ft,R.fillRect(V-14,Q-14,28,28);let Tt=new ui(M);return Tt.colorSpace=De,c.daySky=Tt,Tt}function Ht(){z&&(n.remove(z),z=null),Wt&&(n.remove(Wt),Wt=null),O.outdoor&&(z=new xe(new Ds(45,48,24),new Rn({map:Je(),side:He,fog:!1,depthWrite:!1})),z.renderOrder=-2,n.add(z),Wt=new xe(new Ds(44,48,24),new Rn({map:ie(),side:He,fog:!1,depthWrite:!1,transparent:!0,opacity:0})),Wt.renderOrder=-1,n.add(Wt))}let me=null;function Ot(g,p){g.x=C.x+(Math.random()-.5)*26,g.z=C.z+(Math.random()-.5)*26,g.y=C.y+(p?Math.random()*11-3:6+Math.random()*4)}function T(){if(me=null,!O.rain)return;let g=1100,p=new Float32Array(g*6),M=Array.from({length:g},()=>({x:0,y:0,z:0,v:9+Math.random()*4}));M.forEach(V=>Ot(V,!0));let R=new an;R.setAttribute("position",new rn(p,3));let P=new Fr(R,new Ls({color:10725549,transparent:!0,opacity:.3,depthWrite:!1}));P.frustumCulled=!1,N.root.add(P),me={mesh:P,drops:M,pos:p}}function x(g){if(!me)return;let{drops:p,pos:M}=me,R=1.3,P=mt?mt.y:-99;for(let V=0;V<p.length;V++){let Q=p[V];Q.y-=Q.v*g,Q.x+=R*g,(Q.y<Math.max(at(q(Q.x),q(Q.z)),P)||Math.abs(Q.x-C.x)>13||Math.abs(Q.z-C.z)>13)&&Ot(Q,!1);let ct=V*6;M[ct]=Q.x,M[ct+1]=Q.y,M[ct+2]=Q.z,M[ct+3]=Q.x-R*.05,M[ct+4]=Q.y+.36,M[ct+5]=Q.z}me.mesh.geometry.attributes.position.needsUpdate=!0}function W(g,p,M,R,P){let V=kt(g-1,p)&&kt(g+1,p),Q=Math.min(R-M,3),ct=new Ze(Mt,Q,.22),ft=new xe(ct,ut.door);ft.position.set((g+.5)*Mt,M+Q/2,(p+.5)*Mt),V||(ft.rotation.y=Math.PI/2),N.root.add(ft),N.doors.set(g+","+p,{mesh:ft,open:0,opening:!1,base:M+Q/2,height:Q,locked:!!P,tile:Et(g,p),asked:0})}function rt(g,p,M){let R=new sn,P=6;for(let Q=0;Q<P;Q++){let ct=Mt/P,ft=new xe(new Ze(Mt*.8,.22,ct),ut.riser);ft.position.set((g+.5)*Mt,M-.11-Q*.28,p*Mt+ct*(Q+.5)),R.add(ft)}let V=new xe(new qn(Mt,Mt),ut.pit);V.rotation.x=-Math.PI/2,V.position.set((g+.5)*Mt,M-1.9,(p+.5)*Mt),R.add(V),N.root.add(R)}function lt(g,p,M){let R=new di(16769306,5,7,1.2);R.position.set((g+.5)*Mt,M+2.4,(p+.5)*Mt),N.root.add(R);let P=new xe(new Or(Mt*.42,24),new Rn({color:16769306,transparent:!0,opacity:.18,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.set((g+.5)*Mt,Math.max(M,tt?O.water||0:-99)+.03,(p+.5)*Mt),N.root.add(P)}let tt=!0,mt=null,gt=12,wt=Array.from({length:gt},()=>new fe(0,0,-100,0)),oe=0,dt=performance.now(),At=()=>(performance.now()-dt)/1e3;function Ft(g,p,M=1){mt&&wt[oe++%gt].set(g,p,At(),M)}let Bt=(g,p)=>mt?Math.max(0,mt.y-at(g,p)):0,Rt={name:"FloodShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},time:{value:0},lightPos:{value:new G},lightPower:{value:1},fogColor:{value:new Yt},fogNear:{value:2},fogFar:{value:16},tint:{value:new Yt},ripples:{value:[]}},vertexShader:`
      uniform mat4 textureMatrix;
      attribute float depth;
      varying vec4 vUv;
      varying vec3 vWorld;
      varying float vDepth;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        vDepth = depth;
        gl_Position = projectionMatrix * viewMatrix * w;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform float time;
      uniform vec3 lightPos;
      uniform float lightPower;
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      uniform vec3 tint;
      uniform vec4 ripples[${gt}];
      varying vec4 vUv;
      varying vec3 vWorld;
      varying float vDepth;
      #include <logdepthbuf_pars_fragment>
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      void main() {
        #include <logdepthbuf_fragment>
        vec2 p = vWorld.xz;
        // the slope of the surface: three slow swells and a little chop
        vec2 g = vec2(0.0);
        g += vec2(0.8, 0.6) * cos(dot(p, vec2(0.8, 0.6)) * 2.1 + time * 0.9) * 0.022;
        g += vec2(-0.5, 0.85) * cos(dot(p, vec2(-0.5, 0.85)) * 3.3 - time * 1.3) * 0.016;
        g += vec2(0.95, -0.3) * cos(dot(p, vec2(0.95, -0.3)) * 5.7 + time * 1.7) * 0.01;
        float e = 0.06;
        vec2 q = p * 3.2 + vec2(time * 0.21, time * 0.17);
        float n0 = noise(q);
        g += vec2(noise(q + vec2(e, 0.0)) - n0, noise(q + vec2(0.0, e)) - n0) / e * 0.014;
        // rings where something stepped or dripped
        float ring = 0.0;
        for (int i = 0; i < ${gt}; i++) {
          vec4 r = ripples[i];
          float age = time - r.z;
          if (age < 0.0 || age > 3.5) continue;
          vec2 d = p - r.xy;
          float dist = length(d) + 1e-4;
          float k = dist - age * 0.85;
          float env = exp(-age * 1.4) * r.w * exp(-k * k * 14.0);
          g += (d / dist) * cos(k * 26.0) * env * 0.45;
          ring += env * max(0.0, sin(k * 26.0));
        }
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(V, N), 0.0), 4.0);
        // the mirrored crypt, bent by the ripples
        vec4 uv = vUv;
        uv.xy += N.xz * 0.35 * uv.w;
        vec3 refl = texture2DProj(tDiffuse, uv).rgb;
        vec3 col = mix(tint, refl, 0.7 + 0.3 * fres);
        // the torch: hard glints, and a faint warm sheen nearby
        vec3 L = lightPos - vWorld;
        float ld = length(L);
        L /= ld;
        vec3 H = normalize(L + V);
        float spec = pow(max(dot(N, H), 0.0), 140.0) * lightPower / (1.0 + ld * ld * 0.06);
        col += vec3(0.95, 0.9, 0.78) * smoothstep(0.1, 0.32, spec);
        col += vec3(1.0, 0.85, 0.6) * 0.06 * lightPower / (1.0 + ld * ld * 0.12);
        col += vec3(0.92, 0.89, 0.82) * ring * 0.4;
        // shallow water shows a ghost of the floor; deep water is ink
        float alpha = clamp(0.74 + vDepth * 0.5, 0.74, 0.97);
        float f = smoothstep(fogNear, fogFar, distance(cameraPosition, vWorld));
        col = mix(col, fogColor, f);
        alpha = mix(alpha, 1.0, f);
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`};function se(){mt&&(mt.mesh.dispose(),N.root.remove(mt.mesh),mt=null),m.value=-99;let g=O.water||0;if(!tt||g<=-10)return;let{W:p,H:M,grid:R,h:P}=N,V=O.sea?26:0,Q=(Kt,te)=>V&&te>=M-1&&(te>=M||Kt<0||Kt>=p||R[te][Kt]==="#"),ct=Kt=>Kt==="#"||!!(K[Kt]&&K[Kt].front),ft=(Kt,te)=>Q(Kt,te)||R[te]&&R[te][Kt]&&!ct(R[te][Kt])&&P[te][Kt]<g,Tt=(Kt,te)=>{let Ue=0;for(let[je,tn]of[[Kt-1,te-1],[Kt,te-1],[Kt-1,te],[Kt,te]])ft(je,tn)&&(Ue=Math.max(Ue,Q(je,tn)?3:g-P[tn][je]));return Ue},Pt=[],st=[],$=[],pt=new Map,Ct=(Kt,te)=>{let Ue=Kt+","+te;return pt.has(Ue)||(pt.set(Ue,Pt.length/3),Pt.push(Kt*Mt,-te*Mt,0),st.push(Tt(Kt,te))),pt.get(Ue)};for(let Kt=0;Kt<M+V;Kt++)for(let te=-V;te<p+V;te++){if(!ft(te,Kt))continue;let Ue=Ct(te,Kt),je=Ct(te+1,Kt),tn=Ct(te+1,Kt+1),Kn=Ct(te,Kt+1);$.push(Ue,Kn,je,je,Kn,tn)}if(!$.length)return;let zt=new an;zt.setAttribute("position",new Ce(Pt,3)),zt.setAttribute("depth",new Ce(st,1)),zt.setIndex($);let ee=new ae;e.getDrawingBufferSize(ee);let _e=new Os(zt,{shader:Rt,clipBias:.003,multisample:0,textureWidth:Math.max(256,Math.round(ee.x*.5)),textureHeight:Math.max(256,Math.round(ee.y*.5))});_e.rotation.x=-Math.PI/2,_e.position.y=g,m.value=g,_e.material.transparent=!0,_e.material.depthWrite=!1;let Ie=_e.material.uniforms;Ie.ripples.value=wt,Ie.tint.value.setHex(O.waterTint||723206),N.root.add(_e),mt={mesh:_e,y:g}}let qt=1,ve=new G;function B(g){if(!mt)return;let p=mt.mesh.material.uniforms;if(p.time.value=At(),a.getWorldPosition(ve),p.lightPos.value.copy(ve),p.lightPower.value=a.intensity/13,p.fogColor.value.copy(n.fog.color),p.fogNear.value=n.fog.near,p.fogFar.value=n.fog.far,qt-=g,qt<=0&&O.rain){qt=.04+Math.random()*.08;let M=C.x+(Math.random()-.5)*10,R=C.z+(Math.random()-.5)*10;Bt(q(M),q(R))>0&&!kt(q(M),q(R))&&Ft(M,R,.3)}else if(qt<=0){qt=.7+Math.random()*2.2;for(let M=0;M<6;M++){let R=C.x+(Math.random()-.5)*9,P=C.z+(Math.random()-.5)*9;if(Bt(q(R),q(P))>0&&!kt(q(R),q(P))){Ft(R,P,.55);let V=R-C.x,Q=P-C.z,ct=Math.hypot(V,Q)||1;t.onDrip&&t.onDrip((V*-Math.sin(C.a)+Q*Math.cos(C.a))/ct,ct/Mt);break}}}}function vt(g,p,M,R=1){let P=new qn(p,M,R,R>1?6:1);P.translate(0,M/2,0),R>1&&(P.userData.base=P.attributes.position.array.slice());let V=new Un({map:g,transparent:!0,alphaTest:.4,side:En,emissive:7235160,emissiveMap:g}),Q=new xe(P,V);return Q.userData.billboard=!0,Q}function J(g){let p=K[g];return p&&p.prop&&p.prop.art&&!p.prop.posts?[f(p.prop.art,!1),p.prop.h*(p.prop.aspect||2/3),p.prop.h]:p?null:g==="L"?[f("remains",!1),1.3,.98]:g==="S"?[_("remains+scroll","remains-scroll",(M,R,P)=>{M.save(),M.translate(R*.66,P*.72),M.rotate(-.3),M.fillStyle="#ffe11a",M.strokeStyle="#0a0a08",M.lineWidth=5,M.fillRect(-R*.12,-P*.05,R*.24,P*.1),M.strokeRect(-R*.12,-P*.05,R*.24,P*.1),M.restore()}),1.3,.98]:g==="F"?[_("font+water","font",(M,R,P)=>{M.globalCompositeOperation="source-atop",M.fillStyle="rgba(255,61,139,0.75)",M.beginPath(),M.ellipse(R/2,P*.14,R*.34,P*.07,0,0,Math.PI*2),M.fill()}),.9,1.2]:g==="f"?[f("font",!1),.9,1.2]:g==="R"?[f("relic",!1),.8,1.1]:g==="K"?[f("remains",!1),.9,.68]:null}let j={},St=new Yt(16765770);function bt(g,p){j.post||(j.post=new Un({color:1841686}),j.glass=new Rn({color:St.clone()}));let M=new sn,R=new xe(new Ze(.12,3.1,.12),j.post);R.position.y=1.55;let P=new xe(new Ze(.5,.08,.08),j.post);P.position.set(.22,3.05,0);let V=new xe(new Ze(.26,.36,.26),j.glass);return V.position.set(.42,2.8,0),M.add(R,P,V),N.lamps.push(new G((g+.5)*Mt+.42,at(g,p)+2.7,(p+.5)*Mt)),M}let $t=5,Se=0;function Oe(g){if(!N.lamps.length||(N.lampLights||(N.lampLights=Array.from({length:$t},()=>{let M=new di(16763242,0,9,1.25);return N.root.add(M),M}),Se=0),Se-=g,Se>0&&Math.abs((U.lamps||0)-(N.lampsAt||0))<.02))return;N.lampsAt=U.lamps,Se=.3;let p=N.lamps.map(M=>[M,Math.hypot(M.x-C.x,M.z-C.z)]).sort((M,R)=>M[1]-R[1]);N.lampLights.forEach((M,R)=>{let P=p[R];if(!P){M.intensity=0;return}M.position.copy(P[0]),M.intensity=7*(U.lamps===void 0?1:U.lamps)})}function ge(g){j.wood||(j.wood=new Un({color:3813671}));let p=new sn,M=g.prop.h*(g.prop.aspect||.75);for(let V of[-M/2-.05,M/2+.05]){let Q=new xe(new Ze(.12,2.5,.12),j.wood);Q.position.set(V,1.25,-.06),p.add(Q)}let R=new xe(new Ze(M+.22,g.prop.h+.2,.08),j.wood);R.position.set(0,.9+g.prop.h/2,-.06),p.add(R);let P=new xe(new qn(M,g.prop.h),new Un({map:f(g.prop.art,!1),transparent:!0,alphaTest:.4,emissive:3814700,emissiveMap:f(g.prop.art,!1)}));return P.position.set(0,.9+g.prop.h/2,0),p.add(P),p.rotation.y=g.prop.face||0,p}function ln(){if(c.__rags)return c.__rags;let g=document.createElement("canvas");g.width=g.height=128;let p=g.getContext("2d");for(let R=0;R<26;R++){let P=30+Math.random()*68,V=30+Math.random()*68,Q=8+Math.random()*18;p.fillStyle=["#2a241d","#3b3329","#1a1612","#4a4034"][R%4],p.beginPath(),p.ellipse(P,V,Q,Q*.6,Math.random()*3,0,Math.PI*2),p.fill()}let M=new ui(g);return M.colorSpace=De,c.__rags=M,M}function vn(){if(c.__grate)return c.__grate;let g=document.createElement("canvas");g.width=g.height=128;let p=g.getContext("2d");p.fillStyle="#2b2722",p.beginPath(),p.arc(64,64,60,0,Math.PI*2),p.fill(),p.fillStyle="#050505",p.beginPath(),p.arc(64,64,50,0,Math.PI*2),p.fill(),p.fillStyle="#3d3830";for(let R=-4;R<=4;R++)p.fillRect(64+R*11-3,16,6,96);p.fillRect(16,61,96,6);let M=new ui(g);return M.colorSpace=De,c.__grate=M,M}function fs(g,p){let M=g+","+p,R=N.items.get(M);R&&(N.root.remove(R),N.items.delete(M));let P=Et(g,p),V=K[P];if(V&&(V.decal||V.prop&&(V.prop.lamp||V.prop.posts))){let $;V.prop&&V.prop.posts?($=ge(V),$.position.set((g+.5)*Mt,at(g,p),(p+.5)*Mt)):V.decal?($=new xe(new qn(Mt*.82,Mt*.82),new Un({map:V.decal==="rags"?ln():vn(),transparent:!0,alphaTest:.1})),$.rotation.x=-Math.PI/2,$.position.set((g+.5)*Mt,at(g,p)+.02,(p+.5)*Mt)):($=bt(g,p),$.position.set((g+.5)*Mt,at(g,p),(p+.5)*Mt)),N.root.add($),N.items.set(M,$);return}let Q=J(P);if(!Q)return;let[ct,ft,Tt]=Q,Pt=new sn,st=vt(ct,ft,Tt);if(Pt.add(st),Pt.position.set((g+.5)*Mt,at(g,p),(p+.5)*Mt),P==="F"||P==="R"){let $=new di(P==="F"?16727435:16769306,3.5,6,1.3);$.position.y=1.1,Pt.add($)}if(V&&V.prop&&V.prop.glow&&st.material.emissive.setHex(V.prop.glow),V&&V.prop&&V.prop.light){let $=V.prop.light,pt=new di($.color,$.power||4,$.range||9,1.2);pt.position.set(0,Tt*($.at||.5),.6),Pt.add(pt)}N.root.add(Pt),N.items.set(M,Pt)}function ps(g){let p=new sn;g.members.forEach((M,R)=>{let P=Yn.MONSTERS[M.key],V=P.kind,Q=Zm[V]||1.9,ct=f(P.art||V,!1),ft=V==="rats"?4/3:2/3,Tt=vt(ct,Q*ft,Q,4);Tt.userData.slot=R,Tt.userData.kind=V,Tt.userData.size=[Q*ft,Q],p.add(Tt)}),p.position.set(g.x,0,g.z),N.root.add(p),N.groups.push({group:g,mesh:p,wander:null,path:null,think:0,step:Math.random()*6,idle:Math.random()*2,frame:-1,voice:2+Math.random()*3})}let le=new Set,dn={x:0,y:0},fn={dx:0,dy:0,dxLast:0},Zn=0;function Jn(g,p,M){let R=q(g-qr),P=q(g+qr),V=q(p-qr),Q=q(p+qr);for(let ct=V;ct<=Q;ct++)for(let ft=R;ft<=P;ft++){if(kt(ft,ct))return{cx:ft,cy:ct,door:!!Gt(ft,ct),use:!!ot(Et(ft,ct))};if(at(ft,ct)-M>Ui&&!H(q(C.x),q(C.z),ft,ct))return{cx:ft,cy:ct,ledge:!0}}return null}let $e="free",re={active:!1},pn=[],zs=.3,Yr=.22,Zr=g=>g*g*(3-2*g);function Ni(){C.x=(q(C.x)+.5)*Mt,C.z=(q(C.z)+.5)*Mt,C.a=Math.round(C.a/(Math.PI/2))*(Math.PI/2),C.pitch=0,re.active=!1,pn.length=0}function y(){return le.has("w")||le.has("arrowup")?"f":le.has("s")||le.has("arrowdown")?"b":le.has("a")?"l":le.has("d")?"r":le.has("q")||le.has("arrowleft")?"tl":le.has("e")||le.has("arrowright")?"tr":null}function k(g){if(re.active){re.t=Math.min(1,re.t+g/re.dur);let st=Zr(re.t);if(C.x=re.x0+(re.x1-re.x0)*st,C.z=re.z0+(re.z1-re.z0)*st,C.a=re.a0+(re.a1-re.a0)*st,re.walk){let $=Math.floor(C.phase/Math.PI);C.phase=re.phase0+Math.PI*st,Math.floor(C.phase/Math.PI)!==$&&Xt()}C.moving=re.walk?1:0,Zn=re.walk?0:(re.a1-re.a0)/re.dur,re.t>=1&&(re.active=!1);return}C.moving=0,Zn=0;let p=pn.shift()||y();if(!p)return;let M=(st,$,pt,Ct)=>Object.assign(re,{active:!0,t:0,dur:Ct?zs*(Bt(q(C.x),q(C.z))>.15?1.2:1):Yr,walk:Ct,x0:C.x,z0:C.z,a0:C.a,x1:st,z1:$,a1:pt,phase0:Math.round(C.phase/Math.PI)*Math.PI+.01});if(p==="tl"||p==="tr"){M(C.x,C.z,C.a+(p==="tl"?-1:1)*Math.PI/2,!1);return}let R=Math.round(Math.cos(C.a)),P=Math.round(Math.sin(C.a)),[V,Q]={f:[R,P],b:[-R,-P],r:[-P,R],l:[P,-R]}[p],ct=q(C.x),ft=q(C.z),Tt=ct+V,Pt=ft+Q;if(kt(Tt,Pt)){Gt(Tt,Pt)?It({cx:Tt,cy:Pt,door:!0}):ot(Et(Tt,Pt))?It({cx:Tt,cy:Pt,use:!0}):t.onBump&&t.onBump();return}if(at(Tt,Pt)-at(ct,ft)>Ui&&!H(ct,ft,Tt,Pt)){t.onBump&&t.onBump();return}M((Tt+.5)*Mt,(Pt+.5)*Mt,C.a,!0)}let X=(g,p)=>N.h[p]!==void 0&&N.h[p][g]!==void 0&&N.h[p][g]<=fi+.01;function Y(){N.ladders=new Map;let g=new Set,p=new Un({color:3878692});for(let M=0;M<N.H;M++)for(let R=0;R<N.W;R++){if(!X(R,M)||g.has(R+","+M))continue;let P=[[R,M]];g.add(R+","+M);for(let st=0;st<P.length;st++)for(let[$,pt]of[[1,0],[-1,0],[0,1],[0,-1]]){let Ct=P[st][0]+$,zt=P[st][1]+pt;X(Ct,zt)&&!g.has(Ct+","+zt)&&(g.add(Ct+","+zt),P.push([Ct,zt]))}let V=null;for(let[st,$]of P)for(let[pt,Ct]of[[0,-1],[-1,0],[1,0],[0,1]]){let zt=st+pt,ee=$+Ct;!V&&zt>=0&&ee>=0&&zt<N.W&&ee<N.H&&!kt(zt,ee)&&!X(zt,ee)&&(V={px:st,py:$,tx:zt,ty:ee,dx:pt,dy:Ct})}if(!V)continue;N.ladders.set(V.px+","+V.py,[V.tx,V.ty]);let Q=new sn,ct=fi,ft=at(V.tx,V.ty)+.35,Tt=ft-ct,Pt=new G(-V.dy,0,V.dx);for(let st of[-.32,.32]){let $=new xe(new Ze(.07,Tt,.07),p);$.position.set(Pt.x*st,ct+Tt/2,Pt.z*st),Q.add($)}for(let st=ct+.3;st<ft-.1;st+=.34){let $=new xe(new Ze(Math.abs(Pt.x)*.64+.05,.05,Math.abs(Pt.z)*.64+.05),p);$.position.set(0,st,0),Q.add($)}Q.position.set((V.px+.5+V.dx*.45)*Mt,0,(V.py+.5+V.dy*.45)*Mt),N.root.add(Q)}}let H=(g,p,M,R)=>{let P=N.ladders&&N.ladders.get(g+","+p);return!!P&&P[0]===M&&P[1]===R},ht=document.createElement("div");ht.className="step-pad",ht.hidden=!0,ht.innerHTML=[["tl","\u21B6","Turn left"],["f","\u25B2","Step forward"],["tr","\u21B7","Turn right"],["l","\u25C0","Step left"],["b","\u25BC","Step back"],["r","\u25B6","Step right"]].map(([g,p,M])=>`<button type="button" data-k="${g}" aria-label="${M}">${p}</button>`).join(""),i.appendChild(ht);let _t=new Map;ht.addEventListener("pointerdown",g=>{let p=g.target.closest("button");!p||xt||(g.preventDefault(),pn.length<2&&pn.push(p.dataset.k),_t.set(g.pointerId,setInterval(()=>{!xt&&!re.active&&!pn.length&&pn.push(p.dataset.k)},60)))});let Lt=g=>{clearInterval(_t.get(g.pointerId)),_t.delete(g.pointerId)};["pointerup","pointercancel","pointerleave"].forEach(g=>ht.addEventListener(g,Lt));function Dt(g){if($e==="grid")return k(g);let p=dn.y,M=dn.x;(le.has("w")||le.has("arrowup"))&&(p+=1),(le.has("s")||le.has("arrowdown"))&&(p-=1),le.has("d")&&(M+=1),le.has("a")&&(M-=1);let R=0;(le.has("arrowleft")||le.has("q"))&&(R-=1),(le.has("arrowright")||le.has("e"))&&(R+=1),C.a+=R*Vc*g+fn.dx,fn.dxLast=g>0?fn.dx/g:0,Zn=R*Vc+fn.dxLast,C.pitch=Math.max(-.55,Math.min(.55,C.pitch-fn.dy)),fn.dx=0,fn.dy=0;let P=Math.hypot(p,M);P>1&&(p/=P,M/=P);let V=Math.cos(C.a),Q=Math.sin(C.a),ct=-Q,ft=V,Tt=Bt(q(C.x),q(C.z))>.15?.82:1,Pt=(V*p+ct*M)*Hc*Tt*g,st=(Q*p+ft*M)*Hc*Tt*g;if(C.moving=Math.min(1,Math.hypot(p,M)),Pt===0&&st===0)return;let $=at(q(C.x),q(C.z)),pt=Jn(C.x+Pt,C.z,$);pt?It(pt):C.x+=Pt;let Ct=Jn(C.x,C.z+st,$);Ct?It(Ct):C.z+=st;let zt=Math.floor(C.phase/(2*Math.PI));C.phase+=Math.hypot(Pt,st)*3.2,Math.floor(C.phase/(2*Math.PI))!==zt&&Xt()}function Xt(){let g=Bt(q(C.x),q(C.z));g>0&&Ft(C.x+Math.cos(C.a)*.5,C.z+Math.sin(C.a)*.5,.9),t.onStep&&t.onStep(g)}let Zt=new Map;function It(g){if(g.use){let M=g.cx+","+g.cy,R=performance.now();R-(Zt.get(M)||0)>1800&&(Zt.set(M,R),t.onLocked&&t.onLocked(g.cx,g.cy,Et(g.cx,g.cy)));return}if(!g.door)return;let p=Gt(g.cx,g.cy);if(p&&p.locked&&!p.opening){let M=performance.now();M-p.asked>1800&&(p.asked=M,t.onLocked&&t.onLocked(g.cx,g.cy,p.tile));return}p&&!p.opening&&(p.opening=!0,t.onDoor&&t.onDoor(g.cx,g.cy))}function ce(g){let p=q(C.x),M=q(C.z),R=at(p,M)+Bs;if(C.y>R+.02){if(C.vy-=14*g,C.y=Math.max(R,C.y+C.vy*g),C.y===R){let V=C.vy;C.vy=0,at(p,M)<=fi+.01&&!Jt&&(Jt=!0,t.onFall&&t.onFall(-V))}}else C.y+=(R-C.y)*Math.min(1,g*(R-C.y>Ui?3.5:14)),C.vy=0;at(p,M)>fi+.01&&Math.abs(C.y-R)<.05&&(C.safe={x:C.x,z:C.z}),at(p,M)>fi+.01&&(Jt=!1);let P=p+","+M;P!==C.cell&&(C.cell=P,t.onEnterCell&&t.onEnterCell(p,M,Et(p,M)))}function ye(g,p,M,R){let P=Math.hypot(M-g,R-p),V=Math.ceil(P/(Mt*.25));for(let Q=1;Q<V;Q++){let ct=Q/V;if(kt(q(g+(M-g)*ct),q(p+(R-p)*ct)))return!1}return!0}function be(g,p,M,R){let P=(ct,ft)=>ct+","+ft,V=new Set([P(M,R)]),Q=[[M,R]];for(;Q.length&&V.size<500;){let[ct,ft]=Q.shift();for(let[Tt,Pt]of[[1,0],[-1,0],[0,1],[0,-1]]){let st=ct+Tt,$=ft+Pt;if(!(Math.abs(at(st,$)-at(ct,ft))>Ui)){if(st===g&&$===p)return[ct,ft];V.has(P(st,$))||kt(st,$)||"G<>".includes(Et(st,$))||(V.add(P(st,$)),Q.push([st,$]))}}}return null}function Be(g,p,M,R,P){let V=g.group,Q=p-V.x,ct=M-V.z,ft=Math.hypot(Q,ct);if(ft<.05)return!0;let Tt=Math.min(ft,R*P),Pt=V.x+Q/ft*Tt,st=V.z+ct/ft*Tt,$=at(q(V.x),q(V.z)),pt=q(Pt),Ct=q(st);return kt(pt,Ct)||Math.abs(at(pt,Ct)-$)>Ui?!0:(V.x=Pt,V.z=st,g.step+=Tt*2.6,g.wake=(g.wake||0)-Tt,g.wake<=0&&Bt(pt,Ct)>0&&(g.wake=.8,Ft(Pt,st,.8)),ft-Tt<.05)}function ue(g){let p=g.x-C.x,M=g.z-C.z,R=Math.hypot(p,M)||1;return Math.max(-1,Math.min(1,(p*-Math.sin(C.a)+M*Math.cos(C.a))/R))}function Nt(g,p){for(let M of N.groups){let R=M.group;if(!R.alive)continue;let P=R.def,V=Math.hypot(C.x-R.x,C.z-R.z);if(R.stunUntil&&p<R.stunUntil||R.dormant)continue;let Q=V<P.sight*Mt&&ye(R.x,R.z,C.x,C.z);if(Q&&!R.alert&&t.onAlert&&t.onAlert(P.kind,V/Mt,ue(R)),Q&&(R.alert=!0),M.voice-=g,R.alert&&M.voice<=0&&V<7*Mt?(M.voice=2.5+Math.random()*3.5,t.onVoice&&t.onVoice(P.kind,V/Mt,ue(R))):V>P.sight*Mt*2&&(R.alert=!1),V<qm&&Math.abs(at(q(R.x),q(R.z))-at(q(C.x),q(C.z)))<1.2){t.onContact&&t.onContact(R);return}let ct=P.speed;if(R.alert&&!(P.boss&&V>3*Mt))if(Q&&V<Mt*1.6)Be(M,C.x,C.z,ct,g);else{if(M.think-=g,!M.path||M.think<=0){M.think=.4;let ft=be(q(R.x),q(R.z),q(C.x),q(C.z));M.path=ft?[(ft[0]+.5)*Mt,(ft[1]+.5)*Mt]:null}M.path&&Be(M,M.path[0],M.path[1],ct,g)&&(M.path=null)}else if(!P.boss){if(M.think-=g,!M.wander&&M.think<=0){M.think=1.5+Math.random()*3;let ft=q(R.x),Tt=q(R.z),[Pt,st]=[[1,0],[-1,0],[0,1],[0,-1]][Math.floor(Math.random()*4)],$=ft+Pt,pt=Tt+st;!kt($,pt)&&!"G<>RLSFfK".includes(Et($,pt))&&Math.abs(at($,pt)-at(ft,Tt))<=Ui&&(M.wander=[($+.5)*Mt,(pt+.5)*Mt])}M.wander&&Be(M,M.wander[0],M.wander[1],ct*.45,g)&&(M.wander=null)}}}function mn(g){let p=Math.sin(C.phase)*.045*C.moving;s.position.set(C.x,C.y+p,C.z),s.rotation.y=-(C.a+Math.PI/2),s.rotation.x=C.pitch;let M=!!mt&&s.position.y<mt.y;M!==he&&(he=M,i.classList.toggle("underwater",M),M?(Ft(C.x,C.z,2),n.fog.near=.1,n.fog.far=3.5):(n.fog.near=U.near,n.fog.far=U.far)),z&&z.position.copy(s.position),Wt&&Wt.position.copy(s.position);let R=pi(g);a.intensity=(12.2+R*2.4)*(U.torch===void 0?1:U.torch),a.position.x=.2+(R-.5)*.08,Gc(g,R);let P=new G(-Math.sin(C.a),0,Math.cos(C.a));for(let V of N.groups){let Q=V.group;if(V.mesh.visible=Q.alive,!Q.alive)continue;V.mesh.position.set(Q.x,at(q(Q.x),q(Q.z)),Q.z);let ct=V.mesh.children.length;V.mesh.children.forEach((ft,Tt)=>{let Pt=(Tt-(ct-1)/2)*.75,st=Tt===Math.floor((ct-1)/2)&&ct>1?-.25:.15*Math.abs(Tt-(ct-1)/2);ft.position.set(P.x*Pt-Math.cos(C.a)*st,0,P.z*Pt-Math.sin(C.a)*st)}),mi(V,g)}N.root.traverse(V=>{if(!V.userData.billboard)return;let Q=V.getWorldPosition(new G);V.rotation.y=Math.atan2(s.position.x-Q.x,s.position.z-Q.z)})}let he=!1,qe=.5,Nn=.5,Ve=0;function pi(g){g>Ve&&(Nn=.25+Math.random()*.75,Ve=g+50+Math.random()*110),qe+=(Nn-qe)*.35;let p=qe*.6+(.5+.5*Math.sin(g*.0063))*.25+(.5+.5*Math.sin(g*.0171))*.15;return Math.max(0,Math.min(1,p))}let Ee={zombie:(g,p,M)=>[M*.06*p*p,p<.3&&(g-.5)*M>0?.045*(1-p/.3):-.012*p],prisoner:(g,p,M)=>[M*.07*p*p,p<.25&&(g-.5)*M>0?.03*(1-p/.25):-.015*p],guard:(g,p,M)=>[M*.03*p,p<.28&&(g-.5)*M>0?.04*(1-p/.28):0],warden:(g,p,M)=>[M*.05*p*p-M*.01,p<.3&&(g-.5)*M>0?.03*(1-p/.3):-.01*p],skeleton:(g,p,M)=>[M*.025*p+(p>.78?M*.025:0),p<.28&&(g-.5)*M>0?.035*(1-p/.28):0],cultist:(g,p,M)=>[p<.42?M*.045*(1-p/.42):-M*.012*p,M>0?-.01*p:0],rats:(g,p,M)=>[(g-.5)*(M>0?.12:-.08),(M>0?-.1:.08)*p],drowned:(g,p,M)=>[M*.05*p*p,p<.3&&(g-.5)*M>0?.04*(1-p/.3):-.018*p],watch:(g,p,M)=>[M*.025*p,p<.28&&(g-.5)*M>0?.045*(1-p/.28):0],hanged:(g,p,M)=>[M*.08*p*p,p<.2&&(g-.5)*M>0?.02*(1-p/.2):-.01*p],cutter:(g,p,M)=>[M*.03*p,p<.28&&(g-.5)*M>0?.04*(1-p/.28):0],saltwight:(g,p,M)=>[M*.045*p*p,p<.3&&(g-.5)*M>0?.03*(1-p/.3):-.02*p],overseer:(g,p,M)=>[M*.05*p*p-M*.01,p<.3&&(g-.5)*M>0?.03*(1-p/.3):-.01*p]},gn={zombie:1.6,skeleton:1,cultist:1.3,rats:.55,prisoner:1.7,guard:1.2,warden:1.9,drowned:1.7,watch:1.1,hanged:2,cutter:1.2,saltwight:1.8,overseer:1.9};function mi(g,p){let M=g.lastStep!==g.step;g.lastStep=g.step,M||(g.idle+=1/60);for(let R of g.mesh.children){let P=R.geometry,V=P.userData.base;if(!V)continue;let Q=R.userData.kind,[ct,ft]=R.userData.size,Tt=P.attributes.position.array;if(Q==="abbess"){let ee=p/1e3+R.userData.slot;for(let _e=0;_e<Tt.length;_e+=3){let Ie=V[_e]/ct+.5,Kt=V[_e+1]/ft;Tt[_e]=V[_e]+(Kt<.35?Math.sin(ee*2.6+Ie*7)*.035*(1-Kt/.35)*ct:0),Tt[_e+1]=V[_e+1]+(.06+Math.sin(ee*1.4)*.05)*ft*.4}P.attributes.position.needsUpdate=!0;continue}let Pt=Ee[Q];if(!Pt)continue;let st=M?g.step/(gn[Q]||1.2):g.idle/.75,$=(Math.floor(st)+R.userData.slot)%2,pt=M?1:.35,Ct=$*2+(M?1:0);if(R.userData.frameKey===Ct)continue;R.userData.frameKey=Ct;let zt=($?1:-1)*pt;for(let ee=0;ee<Tt.length;ee+=3){let _e=V[ee]/ct+.5,Ie=V[ee+1]/ft,[Kt,te]=Pt(_e,Ie,zt);Tt[ee]=V[ee]+Kt*ct,Tt[ee+1]=V[ee+1]+te*ft}P.attributes.position.needsUpdate=!0}}let Pe=document.createElement("div");Pe.className="hands",Pe.innerHTML='<div class="hand hand-left"><span class="torch-glow"></span><img alt="" draggable="false"><canvas class="flame" width="128" height="256"></canvas></div><div class="hand hand-right"><img alt="" draggable="false"></div>',e.domElement.after(Pe);let Ke=Pe.querySelector(".hand-left"),Qe=Pe.querySelector(".hand-right"),gi=Ke.querySelector("img"),ks=Qe.querySelector("img"),Hs=Ke.querySelector(".flame"),Jr=Wc(Hs);Jr||Hs.remove();let $r=Ke.querySelector(".torch-glow"),ms={x:.5,y:.08};gi.addEventListener("load",()=>{try{let g=document.createElement("canvas");g.width=96,g.height=128;let p=g.getContext("2d");p.drawImage(gi,0,0,g.width,g.height);let M=p.getImageData(0,0,g.width,g.height).data,R=Q=>{let ct=0,ft=0;for(let Tt=0;Tt<g.width;Tt++)M[(Q*g.width+Tt)*4+3]>140&&(ct+=Tt,ft++);return ft>=3?ct/ft:-1},P=0;for(;P<g.height&&R(P)<0;)P++;let V=Math.min(g.height-1,P+Math.round(g.height*.12));P<g.height&&R(V)>=0&&(ms={x:R(V)/g.width,y:V/g.height})}catch{}Hs.style.left=ms.x*100+"%",Hs.style.top=ms.y*100+"%",$r.style.left=ms.x*100+"%",$r.style.top=ms.y*100+"%"}),gi.onerror=()=>{Ke.classList.add("no-art")},ks.onerror=()=>{Qe.classList.add("no-art")},gi.src=Yn.assetUrl("held-torch");let $n=0,rl=0,Kr=0;function Gc(g,p){if(xt&&!Pe.classList.contains("shown"))return;let M=C.moving;$n+=(Math.max(-3,Math.min(3,Zn))-$n)*.12;let R=Math.sin(C.phase*.5)*14*M,P=Math.abs(Math.cos(C.phase*.5))*12*M;Ke.style.transform=`translate(${(R-$n*10).toFixed(1)}px, ${(P+4).toFixed(1)}px) rotate(${(-4+$n*1.2).toFixed(2)}deg)`,Qe.style.transform=`translate(${(R*.9-$n*14).toFixed(1)}px, ${(12-P*.9).toFixed(1)}px) rotate(${(5+$n*1.5).toFixed(2)}deg)`,$r.style.opacity=(.45+p*.45).toFixed(2);let V=R-$n*10;Kr+=((V-rl)*.12-Kr)*.15,rl=V,Jr&&Jr.draw(g/1e3,p,Math.max(-1,Math.min(1,-$n*.22-Kr)),M)}function Wc(g){let p=null;try{p=g.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1})}catch{}if(!p)return null;let M="attribute vec2 aPos; varying vec2 vUv; void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }",R=`
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
      #else
      precision mediump float;
      #endif
      varying vec2 vUv;
      uniform float uTime, uFlick, uLean, uStir, uAspect;
      float hash(vec2 p) { p = fract(p * vec2(234.34, 435.345)); p += dot(p, p + 34.23); return fract(p.x * p.y); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
        return v;
      }
      // burning pitch: a dull red edge, orange, yellow, a white heart
      vec3 fire(float k) {
        vec3 c = mix(vec3(0.3, 0.03, 0.0), vec3(0.86, 0.2, 0.02), smoothstep(0.0, 0.3, k));
        c = mix(c, vec3(1.0, 0.52, 0.08), smoothstep(0.25, 0.55, k));
        c = mix(c, vec3(1.0, 0.83, 0.4), smoothstep(0.5, 0.8, k));
        return mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.88, 1.0, k));
      }
      const float BASE = 0.2; // the torch head, up from the canvas' bottom edge
      void main() {
        float t = uTime;
        vec2 p = vec2(vUv.x * 2.0 - 1.0, (vUv.y - BASE) / (1.0 - BASE));
        float h = 0.66 + 0.22 * uFlick;
        float yy = p.y / h;
        float up = max(yy, 0.0);
        p.x -= uLean * 0.6 * up * up;
        float rise = t * (1.9 + uStir * 0.9);
        float n1 = fbm(vec2(p.x * 1.8, p.y * 2.0 - rise));
        float n2 = fbm(vec2(p.x * 4.2 + 3.0, p.y * 4.0 - rise * 1.7));
        // the noise pushes the flame about, more toward its top
        float x = p.x + (n1 - 0.5) * 0.9 * up + (n2 - 0.5) * 0.24 * (0.3 + up);
        // a bushy body, round-bottomed where the whole top of the rag head burns, broadest a third of the way up
        float w = 0.56 * sqrt(clamp((yy + 0.24) / 0.27, 0.0, 1.0)) * pow(clamp(1.0 - yy, 0.0, 1.0), 0.62) * (0.8 + 0.2 * smoothstep(0.0, 0.3, yy));
        float body = clamp(1.0 - pow(abs(x) / max(w, 0.001), 1.6), 0.0, 1.0);
        // and the noise eats it from above, so it splits into tongues that tear loose
        float heat = body * (1.0 - 0.3 * smoothstep(0.0, 1.0, yy)) - max(0.0, n1 * 0.95 + n2 * 0.5 - 0.58) * smoothstep(0.0, 0.85, yy) * 1.9;
        // nothing reaches the canvas' edges, so no tongue is ever cut off square
        heat *= smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x) * smoothstep(1.0, 0.9, vUv.y) * smoothstep(0.02, 0.16, vUv.y);
        heat = clamp(heat, 0.0, 1.0);
        // brighter and darker streaks rising inside it
        vec3 col = fire(clamp(heat * (0.72 + 0.45 * n2 + 0.15 * uFlick), 0.0, 1.0));
        float a = smoothstep(0.02, 0.4, heat);
        float sp = 0.0;
        for (int i = 0; i < 7; i++) {
          float fi = float(i);
          float c = t * (0.45 + hash(vec2(fi, 1.3)) * 0.5) + hash(vec2(fi, 7.1));
          float life = fract(c), seed = hash(vec2(fi, floor(c)));
          vec2 s = vec2((seed - 0.5) * 0.5 + sin(t * 2.3 + fi * 1.7) * 0.08 * life - uLean * 0.55 * life * life, 0.25 + life * 0.85);
          vec2 d = (p - s) * vec2(uAspect, 1.0);
          d.y *= 0.55; // drawn out a little as they rise
          sp += (1.0 - life) * step(0.25, seed) * smoothstep(0.022, 0.004, length(d));
        }
        sp = clamp(sp, 0.0, 1.0);
        col = mix(col, vec3(1.0, 0.72, 0.28), sp);
        a = max(a, sp);
        col *= 0.94 + 0.12 * hash(gl_FragCoord.xy + fract(t) * 91.0); // a whisper of the zine's grain
        gl_FragColor = vec4(col * a, a);
      }`,P=(ft,Tt)=>{let Pt=p.createShader(ft);return p.shaderSource(Pt,Tt),p.compileShader(Pt),Pt},V=p.createProgram();if(p.attachShader(V,P(p.VERTEX_SHADER,M)),p.attachShader(V,P(p.FRAGMENT_SHADER,R)),p.linkProgram(V),!p.getProgramParameter(V,p.LINK_STATUS))return null;p.useProgram(V),p.bindBuffer(p.ARRAY_BUFFER,p.createBuffer()),p.bufferData(p.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),p.STATIC_DRAW);let Q=p.getAttribLocation(V,"aPos");p.enableVertexAttribArray(Q),p.vertexAttribPointer(Q,2,p.FLOAT,!1,0,0);let ct={};for(let ft of["uTime","uFlick","uLean","uStir","uAspect"])ct[ft]=p.getUniformLocation(V,ft);return{draw(ft,Tt,Pt,st){if(p.isContextLost())return;let $=Math.min(window.devicePixelRatio||1,2),pt=Math.max(16,Math.round(g.clientWidth*$)),Ct=Math.max(32,Math.round(g.clientHeight*$));(g.width!==pt||g.height!==Ct)&&(g.width=pt,g.height=Ct),p.viewport(0,0,pt,Ct),p.uniform1f(ct.uTime,ft%2e3),p.uniform1f(ct.uFlick,Tt),p.uniform1f(ct.uLean,Pt),p.uniform1f(ct.uStir,st),p.uniform1f(ct.uAspect,pt/(2*Ct*.8)),p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT),p.drawArrays(p.TRIANGLE_STRIP,0,4)}}}function Xc(g){for(let p of N.doors.values())!p.opening||p.open>=1||(p.open=Math.min(1,p.open+g*1.4),p.mesh.position.y=p.base+p.open*p.height*.95,Ut=!0)}function qc(){let g=t.explored&&t.explored();if(!g)return;let p=q(C.x),M=q(C.z);for(let R=M-5;R<=M+5;R++)for(let P=p-5;P<=p+5;P++)!g[R]||g[R][P]===void 0||g[R][P]||Math.hypot(P-p,R-M)>5.5||(ye(C.x,C.z,(P+.5)*Mt,(R+.5)*Mt)||Math.abs(P-p)+Math.abs(R-M)<=1)&&(g[R][P]=!0)}function ol(g){requestAnimationFrame(ol);let p=Math.min(.05,(g-pe)/1e3);pe=g,!(!N||!i.isConnected||i.offsetParent===null)&&(Yc(),xt||(Dt(p),ce(p),Nt(p,g),it-=p,it<=0&&(it=.25,qc(),t.onTick&&t.onTick())),Xc(p),mn(g),B(p),x(p),Z(p),Oe(p),e.render(n,s))}let al=0,ll=0;function Yc(){let g=i.clientWidth,p=i.clientHeight;if(!(g===al&&p===ll)){if(al=g,ll=p,e.setSize(g,p,!1),mt){let M=new ae;e.getDrawingBufferSize(M),mt.mesh.getRenderTarget().setSize(Math.max(256,Math.round(M.x*.5)),Math.max(256,Math.round(M.y*.5)))}s.aspect=g/Math.max(1,p),s.fov=s.aspect<1?82:68,s.updateProjectionMatrix()}}window.addEventListener("keydown",g=>{if(xt||g.metaKey||g.ctrlKey||g.altKey)return;let p=g.key.toLowerCase();["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(p)&&($e==="grid"&&!g.repeat&&!le.has(p)&&pn.length<2&&pn.push({w:"f",arrowup:"f",s:"b",arrowdown:"b",a:"l",d:"r",q:"tl",arrowleft:"tl",e:"tr",arrowright:"tr"}[p]),le.add(p),g.preventDefault())}),window.addEventListener("keyup",g=>le.delete(g.key.toLowerCase())),window.addEventListener("blur",()=>le.clear());let cn=document.createElement("div");cn.className="stick",cn.innerHTML="<i></i>",cn.hidden=!0,i.appendChild(cn);let Fi=new Map,In=e.domElement;In.style.touchAction="none";for(let g of["touchstart","touchmove"])In.addEventListener(g,p=>{p.cancelable&&p.preventDefault()},{passive:!1});In.addEventListener("pointerdown",g=>{if(xt||$e==="grid")return;In.setPointerCapture(g.pointerId);let p=In.getBoundingClientRect(),M=g.pointerType==="mouse"?"look":g.clientX-p.left<p.width/2?"move":"look";M==="move"&&[...Fi.values()].some(R=>R.role==="move")||(Fi.set(g.pointerId,{role:M,x0:g.clientX,y0:g.clientY,x:g.clientX,y:g.clientY}),M==="move"&&(cn.hidden=!1,cn.style.left=g.clientX-p.left+"px",cn.style.top=g.clientY-p.top+"px",cn.firstChild.style.transform="translate(-50%, -50%)"))}),In.addEventListener("pointermove",g=>{let p=Fi.get(g.pointerId);if(p){if(p.role==="move"){let R=g.clientX-p.x0,P=g.clientY-p.y0,V=Math.hypot(R,P);if(V>46){R*=46/V,P*=46/V,p.x0=g.clientX-R,p.y0=g.clientY-P;let Q=In.getBoundingClientRect();cn.style.left=p.x0-Q.left+"px",cn.style.top=p.y0-Q.top+"px"}dn.x=Math.abs(R)<8?0:R/46,dn.y=Math.abs(P)<8?0:-P/46,cn.firstChild.style.transform=`translate(calc(-50% + ${R}px), calc(-50% + ${P}px))`}else xt||(fn.dx+=(g.clientX-p.x)*(g.pointerType==="mouse"?.005:.0075),fn.dy+=(g.clientY-p.y)*.004);p.x=g.clientX,p.y=g.clientY}});let Vs=g=>{let p=Fi.get(g.pointerId);p&&(Fi.delete(g.pointerId),p.role==="move"&&(dn.x=0,dn.y=0,cn.hidden=!0))};In.addEventListener("pointerup",Vs),In.addEventListener("pointercancel",Vs),In.addEventListener("lostpointercapture",Vs);for(let g of["pointerup","pointercancel"])window.addEventListener(g,p=>{Vs(p),Lt(p)});function Zc(){le.clear(),dn.x=0,dn.y=0,cn.hidden=!0,Fi.clear();for(let g of _t.values())clearInterval(g);_t.clear()}return requestAnimationFrame(ol),{load(g){Re(g);for(let p of g.opened||[]){let M=N.doors.get(p);M&&(M.open=1,M.opening=!0,M.locked=!1,M.mesh.position.y=M.base+M.height*.95)}for(let p of g.groups)p.def=Yn.MONSTERS[p.members[0].key],ps(p)},addGroup(g){g.def=Yn.MONSTERS[g.members[0].key],ps(g)},removeGroup(g){let p=N.groups.findIndex(M=>M.group===g);p<0||(N.root.remove(N.groups[p].mesh),N.groups.splice(p,1))},setDaylight(g,p){F=g,p&&N&&Z(0,!0)},place(g){C.x=g.x,C.z=g.z,C.a=g.a,C.pitch=0,C.y=at(q(g.x),q(g.z))+Bs,C.vy=0,C.cell=q(g.x)+","+q(g.z),C.safe={x:g.x,z:g.z},Jt=!1,le.clear(),$e==="grid"&&Ni()},setMode(g){$e=g==="grid"?"grid":"free",ht.hidden=$e!=="grid",i.classList.toggle("step-mode",$e==="grid"),$e==="grid"&&N&&Ni()},get mode(){return $e},setWater(g){tt=!!g},get water(){return tt},cellPose(g,p){let M=0;for(let[R,P,V]of[[0,-1,-Math.PI/2],[1,0,0],[0,1,Math.PI/2],[-1,0,Math.PI]])if(!kt(g+R,p+P)){M=V;break}return{x:(g+.5)*Mt,z:(p+.5)*Mt,a:M}},pose:()=>({x:C.x,z:C.z,a:C.a}),facing(){if(!N)return null;for(let g of[.7,1.2]){let p=q(C.x+Math.cos(C.a)*Mt*g),M=q(C.z+Math.sin(C.a)*Mt*g),R=Et(p,M),P=ot(R);if(P&&P.name)return{x:p,y:M,t:R};if(kt(p,M))return null}return null},mapPose:()=>({x:C.x/Mt-.5,y:C.z/Mt-.5,a:C.a}),pause(){xt=!0,C.moving=0,Zn=0,pn.length=0,re.active&&(C.x=re.x1,C.z=re.z1,C.a=re.a1,re.active=!1)},resume(){xt=!1,pe=performance.now()},get paused(){return xt},refreshTile(g,p){fs(g,p)},openDoor(g,p){let M=Gt(g,p);M&&(M.locked=!1,M.opening=!0)},inPit(){return!!N&&X(q(C.x),q(C.z))&&C.y<fi+Bs+.1},haulBack(){C.x=C.safe.x,C.z=C.safe.z,C.y=at(q(C.x),q(C.z))+Bs,C.vy=0,Jt=!1,$e==="grid"&&Ni()},stepBack(g){let p=C.x-g.x,M=C.z-g.z,R=Math.hypot(p,M)||1;for(let P=2.2;P>.4;P-=.3){let V=C.x+p/R*P,Q=C.z+M/R*P;if(!Jn(V,Q,at(q(C.x),q(C.z))+Ui)){C.x=V,C.z=Q;break}}$e==="grid"&&Ni()},monsterPos:g=>({x:g.x/Mt-.5,y:g.z/Mt-.5}),setWeapon(g){let p=String(g||"").normalize("NFD").replace(/[^A-Za-z]/g,"").toLowerCase();Qe.classList.toggle("no-art",!p),p&&ks.dataset.slug!==p&&(ks.dataset.slug=p,Qe.classList.remove("no-art"),ks.src=Yn.assetUrl("held-"+p))},showHands(g){Pe.classList.toggle("shown",!!g),g||Zc()},cellSize:Mt,render(){mn(performance.now()),e.render(n,s)}}}Yn.createWorld=Jm;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
