(()=>{var Ka="170";var nh=0,ml=1,ih=2;var bc=1,sh=2,Gn=3,ci=0,Ve=1,En=2,ai=0,Qi=1,gl=2,_l=3,xl=4,rh=5,Ei=100,oh=101,ah=102,lh=103,ch=104,hh=200,uh=201,dh=202,fh=203,Fo=204,Oo=205,ph=206,mh=207,gh=208,_h=209,xh=210,vh=211,yh=212,Mh=213,Sh=214,Bo=0,zo=1,ko=2,ns=3,Ho=4,Vo=5,Go=6,Wo=7,Qa=0,bh=1,Eh=2,li=0,wh=1,Th=2,Ah=3,Rh=4,Ch=5,Ih=6,Ph=7;var Ec=300,is=301,ss=302,Xo=303,qo=304,qr=306,rs=1e3,Ai=1001,Yo=1002,Tn=1003,Lh=1004;var qs=1005;var Un=1006,no=1007;var Ri=1008;var Yn=1009,wc=1010,Tc=1011,Is=1012,ja=1013,Ci=1014,Wn=1015,Di=1016,tl=1017,el=1018,os=1020,Ac=35902,Rc=1021,Cc=1022,wn=1023,Ic=1024,Pc=1025,ji=1026,as=1027,Lc=1028,nl=1029,Dc=1030,il=1031;var sl=1033,gr=33776,_r=33777,xr=33778,vr=33779,Zo=35840,Jo=35841,$o=35842,Ko=35843,Qo=36196,jo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,yr=36492,ma=36494,ga=36495,Uc=36283,_a=36284,xa=36285,va=36286;var Mr=2300,ya=2301,io=2302,vl=2400,yl=2401,Ml=2402;var Dh=3200,Uh=3201;var Nc=0,Nh=1,oi="",Ue="srgb",us="srgb-linear",Yr="linear",Se="srgb";var Oi=7680;var Sl=519,Fh=512,Oh=513,Bh=514,Fc=515,zh=516,kh=517,Hh=518,Vh=519,bl=35044;var El="300 es",Xn=2e3,Sr=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var so=Math.PI/180,Ma=180/Math.PI;function Os(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Gh(i,t){return(i%t+t)%t}function ro(i,t,e){return(1-e)*i+e*t}function ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ae=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],_=n[5],v=n[8],S=s[0],g=s[3],u=s[6],I=s[1],R=s[4],E=s[7],O=s[2],D=s[5],F=s[8];return r[0]=o*S+a*I+l*O,r[3]=o*g+a*R+l*D,r[6]=o*u+a*E+l*F,r[1]=c*S+h*I+d*O,r[4]=c*g+h*R+d*D,r[7]=c*u+h*E+d*F,r[2]=f*S+_*I+v*O,r[5]=f*g+_*R+v*D,r[8]=f*u+_*E+v*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,_=c*r-o*l,v=e*d+n*f+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=_*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oo=new Qt;function Oc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=Ps("canvas");return i.style.display="block",i}var wl={};function As(i){i in wl||(wl[i]=!0,console.warn(i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?Yr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tl=[.64,.33,.3,.6,.15,.06],Al=[.2126,.7152,.0722],Rl=[.3127,.329],Cl=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[us]:{primaries:Tl,whitePoint:Rl,transfer:Yr,toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:Al,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:Tl,whitePoint:Rl,transfer:Se,toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:Al,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var Bi,Sa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Ps("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zh=0,br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ao(s[o].image)):r.push(ao(s[o]))}else r=ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ao(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jh=0,rn=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=Un,o=Ri,a=wn,l=Yn,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Os(),this.name="",this.source=new br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ec;rn.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],_=l[5],v=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,E=(_+1)/2,O=(u+1)/2,D=(h+f)/4,F=(d+S)/4,N=(v+g)/4;return R>E&&R>O?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=D/n,r=F/n):E>O?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=N/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=F/r,s=N/r),this.set(n,s,r,e),this}let I=Math.sqrt((g-v)*(g-v)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(I)<.001&&(I=1),this.x=(g-v)/I,this.y=(d-S)/I,this.z=(f-h)/I,this.w=Math.acos((c+_+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ba=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],_=r[o+1],v=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=_,t[e+2]=v,t[e+3]=S;return}if(d!==S||l!==f||c!==_||h!==v){let g=1-a,u=l*f+c*_+h*v+d*S,I=u>=0?1:-1,R=1-u*u;if(R>Number.EPSILON){let O=Math.sqrt(R),D=Math.atan2(O,u*I);g=Math.sin(g*D)/O,a=Math.sin(a*D)/O}let E=a*I;if(l=l*g+f*E,c=c*g+_*E,h=h*g+v*E,d=d*g+S*E,g===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],_=r[o+2],v=r[o+3];return t[e]=a*v+h*d+l*_-c*f,t[e+1]=l*v+h*f+c*d-a*_,t[e+2]=c*v+h*_+a*f-l*d,t[e+3]=h*v-a*d-l*f-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),_=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*_*v,this._y=c*_*d-f*h*v,this._z=c*h*v+f*_*d,this._w=c*h*d-f*_*v;break;case"YXZ":this._x=f*h*d+c*_*v,this._y=c*_*d-f*h*v,this._z=c*h*v-f*_*d,this._w=c*h*d+f*_*v;break;case"ZXY":this._x=f*h*d-c*_*v,this._y=c*_*d+f*h*v,this._z=c*h*v+f*_*d,this._w=c*h*d-f*_*v;break;case"ZYX":this._x=f*h*d-c*_*v,this._y=c*_*d+f*h*v,this._z=c*h*v-f*_*d,this._w=c*h*d+f*_*v;break;case"YZX":this._x=f*h*d+c*_*v,this._y=c*_*d+f*h*v,this._z=c*h*v-f*_*d,this._w=c*h*d-f*_*v;break;case"XZY":this._x=f*h*d-c*_*v,this._y=c*_*d-f*h*v,this._z=c*h*v+f*_*d,this._w=c*h*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-c)*_,this._z=(o-s)*_}else if(n>a&&n>d){let _=2*Math.sqrt(1+n-a-d);this._w=(h-l)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+c)/_}else if(a>d){let _=2*Math.sqrt(1+a-n-d);this._w=(r-c)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(l+h)/_}else{let _=2*Math.sqrt(1+d-n-a);this._w=(o-s)/_,this._x=(r+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo=new V,Pl=new ui,Ii=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Zs.subVectors(this.max,Ms),zi.subVectors(t.a,Ms),ki.subVectors(t.b,Ms),Hi.subVectors(t.c,Ms),ti.subVectors(ki,zi),ei.subVectors(Hi,ki),_i.subVectors(zi,Hi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-_i.z,_i.y,ti.z,0,-ti.x,ei.z,0,-ei.x,_i.z,0,-_i.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-_i.y,_i.x,0];return!co(e,zi,ki,Hi,Zs)||(e=[1,0,0,0,1,0,0,0,1],!co(e,zi,ki,Hi,Zs))?!1:(Js.crossVectors(ti,ei),e=[Js.x,Js.y,Js.z],co(e,zi,ki,Hi,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new V,new V,new V,new V,new V,new V,new V,new V],yn=new V,Ys=new Ii,zi=new V,ki=new V,Hi=new V,ti=new V,ei=new V,_i=new V,Ms=new V,Zs=new V,Js=new V,xi=new V;function co(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $h=new Ii,Ss=new V,ho=new V,ls=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);let e=Ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(ho)),this.expandByPoint(Ss.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new V,uo=new V,$s=new V,ni=new V,fo=new V,Ks=new V,po=new V,wr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uo.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(uo);let r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=ni.dot(this.direction),l=-ni.dot($s),c=ni.lengthSq(),h=Math.abs(1-o*o),d,f,_,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){let S=1/h;d*=S,f*=S,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),_=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(uo).addScaledVector($s,f),_}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){fo.subVectors(e,t),Ks.subVectors(n,t),po.crossVectors(fo,Ks);let o=this.direction.dot(po),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);let l=a*this.direction.dot(Ks.crossVectors(ni,Ks));if(l<0)return null;let c=a*this.direction.dot(fo.cross(ni));if(c<0||l+c>o)return null;let h=-a*ni.dot(po);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,_,v,S,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,_,v,S,g)}set(t,e,n,s,r,o,a,l,c,h,d,f,_,v,S,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=_,u[7]=v,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,_=o*d,v=a*h,S=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=_+v*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=v+_*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,_=l*d,v=c*h,S=c*d;e[0]=f+S*a,e[4]=v*a-_,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=_*a-v,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,_=l*d,v=c*h,S=c*d;e[0]=f-S*a,e[4]=-o*d,e[8]=v+_*a,e[1]=_+v*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,_=o*d,v=a*h,S=a*d;e[0]=l*h,e[4]=v*c-_,e[8]=f*c+S,e[1]=l*d,e[5]=S*c+f,e[9]=_*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,_=o*c,v=a*l,S=a*c;e[0]=l*h,e[4]=S-f*d,e[8]=v*d+_,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=_*d+v,e[10]=f-S*d}else if(t.order==="XZY"){let f=o*l,_=o*c,v=a*l,S=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+S,e[5]=o*h,e[9]=_*d-v,e[2]=v*d-_,e[6]=a*h,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Qh)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ii.crossVectors(n,hn),ii.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ii.crossVectors(n,hn)),ii.normalize(),Qs.crossVectors(hn,ii),s[0]=ii.x,s[4]=Qs.x,s[8]=hn.x,s[1]=ii.y,s[5]=Qs.y,s[9]=hn.y,s[2]=ii.z,s[6]=Qs.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],_=n[13],v=n[2],S=n[6],g=n[10],u=n[14],I=n[3],R=n[7],E=n[11],O=n[15],D=s[0],F=s[4],N=s[8],w=s[12],b=s[1],L=s[5],tt=s[9],Z=s[13],K=s[2],ot=s[6],j=s[10],ut=s[14],U=s[3],C=s[7],xt=s[11],Ut=s[15];return r[0]=o*D+a*b+l*K+c*U,r[4]=o*F+a*L+l*ot+c*C,r[8]=o*N+a*tt+l*j+c*xt,r[12]=o*w+a*Z+l*ut+c*Ut,r[1]=h*D+d*b+f*K+_*U,r[5]=h*F+d*L+f*ot+_*C,r[9]=h*N+d*tt+f*j+_*xt,r[13]=h*w+d*Z+f*ut+_*Ut,r[2]=v*D+S*b+g*K+u*U,r[6]=v*F+S*L+g*ot+u*C,r[10]=v*N+S*tt+g*j+u*xt,r[14]=v*w+S*Z+g*ut+u*Ut,r[3]=I*D+R*b+E*K+O*U,r[7]=I*F+R*L+E*ot+O*C,r[11]=I*N+R*tt+E*j+O*xt,r[15]=I*w+R*Z+E*ut+O*Ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],_=t[14],v=t[3],S=t[7],g=t[11],u=t[15];return v*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*_-n*l*_)+S*(+e*l*_-e*c*f+r*o*f-s*o*_+s*c*h-r*l*h)+g*(+e*c*d-e*a*_-r*o*d+n*o*_+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],_=t[11],v=t[12],S=t[13],g=t[14],u=t[15],I=d*g*c-S*f*c+S*l*_-a*g*_-d*l*u+a*f*u,R=v*f*c-h*g*c-v*l*_+o*g*_+h*l*u-o*f*u,E=h*S*c-v*d*c+v*a*_-o*S*_-h*a*u+o*d*u,O=v*d*l-h*S*l-v*a*f+o*S*f+h*a*g-o*d*g,D=e*I+n*R+s*E+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=I*F,t[1]=(S*f*r-d*g*r-S*s*_+n*g*_+d*s*u-n*f*u)*F,t[2]=(a*g*r-S*l*r+S*s*c-n*g*c-a*s*u+n*l*u)*F,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*_-n*l*_)*F,t[4]=R*F,t[5]=(h*g*r-v*f*r+v*s*_-e*g*_-h*s*u+e*f*u)*F,t[6]=(v*l*r-o*g*r-v*s*c+e*g*c+o*s*u-e*l*u)*F,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*_+e*l*_)*F,t[8]=E*F,t[9]=(v*d*r-h*S*r-v*n*_+e*S*_+h*n*u-e*d*u)*F,t[10]=(o*S*r-v*a*r+v*n*c-e*S*c-o*n*u+e*a*u)*F,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*_-e*a*_)*F,t[12]=O*F,t[13]=(h*S*s-v*d*s+v*n*f-e*S*f-h*n*g+e*d*g)*F,t[14]=(v*a*s-o*S*s-v*n*l+e*S*l+o*n*g-e*a*g)*F,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,_=r*h,v=r*d,S=o*h,g=o*d,u=a*d,I=l*c,R=l*h,E=l*d,O=n.x,D=n.y,F=n.z;return s[0]=(1-(S+u))*O,s[1]=(_+E)*O,s[2]=(v-R)*O,s[3]=0,s[4]=(_-E)*D,s[5]=(1-(f+u))*D,s[6]=(g+I)*D,s[7]=0,s[8]=(v+R)*F,s[9]=(g-I)*F,s[10]=(1-(f+S))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/o,d=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Xn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),_,v;if(a===Xn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Sr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,_=(n+s)*h,v,S;if(a===Xn)v=(o+r)*d,S=-2*d;else if(a===Sr)v=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new V,Mn=new Te,Kh=new V(0,0,0),Qh=new V(1,1,1),ii=new V,Qs=new V,hn=new V,Ll=new Te,Dl=new ui,Nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jh=0,Ul=new V,Gi=new ui,kn=new Te,js=new V,bs=new V,tu=new V,eu=new ui,Nl=new V(1,0,0),Fl=new V(0,1,0),Ol=new V(0,0,1),Bl={type:"added"},nu={type:"removed"},Wi={type:"childadded",child:null},mo={type:"childremoved",child:null},Ye=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Nn,n=new ui,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Qt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(bs,js,this.up):kn.lookAt(js,bs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(kn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),mo.child=t,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),_=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new V(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new V,Hn=new V,go=new V,Vn=new V,Xi=new V,qi=new V,zl=new V,_o=new V,xo=new V,vo=new V,yo=new ue,Mo=new ue,So=new ue,wi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Hn.subVectors(n,e),go.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(Hn),l=Sn.dot(go),c=Hn.dot(Hn),h=Hn.dot(go),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,_=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-_-v,v,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yo.setScalar(0),Mo.setScalar(0),So.setScalar(0),yo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),So.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yo,r.x),o.addScaledVector(Mo,r.y),o.addScaledVector(So,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Hn.subVectors(t,e),Sn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Xi.subVectors(s,n),qi.subVectors(r,n),_o.subVectors(t,n);let l=Xi.dot(_o),c=qi.dot(_o);if(l<=0&&c<=0)return e.copy(n);xo.subVectors(t,s);let h=Xi.dot(xo),d=qi.dot(xo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xi,o);vo.subVectors(t,r);let _=Xi.dot(vo),v=qi.dot(vo);if(v>=0&&_<=v)return e.copy(r);let S=_*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(qi,a);let g=h*v-_*d;if(g<=0&&d-h>=0&&_-v>=0)return zl.subVectors(r,s),a=(d-h)/(d-h+(_-v)),e.copy(s).addScaledVector(zl,a);let u=1/(g+S+f);return o=S*u,a=f*u,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},tr={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Gh(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return he.fromWorkingColorSpace(qe.copy(this),t),Math.round(en(qe.r*255,0,255))*65536+Math.round(en(qe.g*255,0,255))*256+Math.round(en(qe.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ue){he.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(tr);let n=ro(si.h,tr.h,e),s=ro(si.s,tr.s,e),r=ro(si.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new qt;qt.NAMES=Bc;var iu=0,di=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Os(),this.name="",this.blending=Qi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rn=class extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new V,er=new ae,sn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}};var Ar=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},su=0,pn=new Te,Eo=new Ye,Yi=new V,un=new Ii,Es=new Ii,Be=new V,on=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oc(t)?Rr:Ar)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(un.min,Es.min),un.expandByPoint(Be),Be.addVectors(un.max,Es.max),un.expandByPoint(Be)):(un.expandByPoint(Es.min),un.expandByPoint(Es.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(t,c),Be.add(Yi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new V,l[N]=new V;let c=new V,h=new V,d=new V,f=new ae,_=new ae,v=new ae,S=new V,g=new V;function u(N,w,b){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,N),_.fromBufferAttribute(r,w),v.fromBufferAttribute(r,b),h.sub(c),d.sub(c),_.sub(f),v.sub(f);let L=1/(_.x*v.y-v.x*_.y);isFinite(L)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(L),g.copy(d).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(L),a[N].add(S),a[w].add(S),a[b].add(S),l[N].add(g),l[w].add(g),l[b].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let N=0,w=I.length;N<w;++N){let b=I[N],L=b.start,tt=b.count;for(let Z=L,K=L+tt;Z<K;Z+=3)u(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let R=new V,E=new V,O=new V,D=new V;function F(N){O.fromBufferAttribute(s,N),D.copy(O);let w=a[N];R.copy(w),R.sub(O.multiplyScalar(O.dot(w))).normalize(),E.crossVectors(D,w);let L=E.dot(l[N])<0?-1:1;o.setXYZW(N,R.x,R.y,R.z,L)}for(let N=0,w=I.length;N<w;++N){let b=I[N],L=b.start,tt=b.count;for(let Z=L,K=L+tt;Z<K;Z+=3)F(t.getX(Z+0)),F(t.getX(Z+1)),F(t.getX(Z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,_=t.count;f<_;f+=3){let v=t.getX(f+0),S=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,_=e.count;f<_;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),_=0,v=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?_=l[S]*a.data.stride+a.offset:_=l[S]*h;for(let u=0;u<h;u++)f[v++]=c[_++]}return new sn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],_=t(f,n);l.push(_)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let _=c[d];h.push(_.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kl=new Te,vi=new wr,nr=new ls,Hl=new V,ir=new V,sr=new V,rr=new V,wo=new V,or=new V,Vl=new V,ar=new V,_e=class extends Ye{constructor(t=new on,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(wo.fromBufferAttribute(d,t),o?or.addScaledVector(wo,h):or.addScaledVector(wo.sub(e),h))}e.add(or)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(nr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(nr,Hl)===null||vi.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),vi.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){let g=f[v],u=o[g.materialIndex],I=Math.max(g.start,_.start),R=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let E=I,O=R;E<O;E+=3){let D=a.getX(E),F=a.getX(E+1),N=a.getX(E+2);s=lr(this,u,t,n,c,h,d,D,F,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),S=Math.min(a.count,_.start+_.count);for(let g=v,u=S;g<u;g+=3){let I=a.getX(g),R=a.getX(g+1),E=a.getX(g+2);s=lr(this,o,t,n,c,h,d,I,R,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){let g=f[v],u=o[g.materialIndex],I=Math.max(g.start,_.start),R=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let E=I,O=R;E<O;E+=3){let D=E,F=E+1,N=E+2;s=lr(this,u,t,n,c,h,d,D,F,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let g=v,u=S;g<u;g+=3){let I=g,R=g+1,E=g+2;s=lr(this,o,t,n,c,h,d,I,R,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ru(i,t,e,n,s,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ci,a),l===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);let h=ru(i,t,e,n,ir,sr,rr,Vl);if(h){let d=new V;wi.getBarycoord(Vl,ir,sr,rr,d),s&&(h.uv=wi.getInterpolatedAttribute(s,a,l,c,d,new ae)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,d,new ae)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};wi.getNormal(ir,sr,rr,f.normal),h.face=f,h.barycoord=d}return h}var Je=class i extends on{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,_=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function v(S,g,u,I,R,E,O,D,F,N,w){let b=E/F,L=O/N,tt=E/2,Z=O/2,K=D/2,ot=F+1,j=N+1,ut=0,U=0,C=new V;for(let xt=0;xt<j;xt++){let Ut=xt*L-Z;for(let Zt=0;Zt<ot;Zt++){let pe=Zt*b-tt;C[S]=pe*I,C[g]=Ut*R,C[u]=K,c.push(C.x,C.y,C.z),C[S]=0,C[g]=0,C[u]=D>0?1:-1,h.push(C.x,C.y,C.z),d.push(Zt/F),d.push(1-xt/N),ut+=1}}for(let xt=0;xt<N;xt++)for(let Ut=0;Ut<F;Ut++){let Zt=f+Ut+ot*xt,pe=f+Ut+ot*(xt+1),et=f+(Ut+1)+ot*(xt+1),X=f+(Ut+1)+ot*xt;l.push(Zt,pe,X),l.push(pe,et,X),U+=6}a.addGroup(_,U,w),_+=U,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function ou(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var rl={clone:cs,merge:Ze},au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new V,Gl=new ae,Wl=new ae,ze=class extends Cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Wl),e.subVectors(Wl,Gl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(so*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,wa=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new ze(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let o=new ze(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let a=new ze(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let l=new ze(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new ze(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,_),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ir=class extends rn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ta=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ai});r.uniforms.tEquirect.value=e;let o=new _e(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Un),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},To=new V,cu=new V,hu=new Qt,bn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=To.subVectors(n,e).cross(cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(To),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hu.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new ls,cr=new V,Ls=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],_=s[8],v=s[9],S=s[10],g=s[11],u=s[12],I=s[13],R=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,g-_,E-u).normalize(),n[1].setComponents(l+r,f+c,g+_,E+u).normalize(),n[2].setComponents(l+o,f+h,g+v,E+I).normalize(),n[3].setComponents(l-o,f-h,g-v,E-I).normalize(),n[4].setComponents(l-a,f-d,g-S,E-R).normalize(),e===Xn)n[5].setComponents(l+a,f+d,g+S,E+R).normalize();else if(e===Sr)n[5].setComponents(a,d,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((_,v)=>_.start-v.start);let f=0;for(let _=1;_<d.length;_++){let v=d[f],S=d[_];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,d[f]=S)}d.length=f+1;for(let _=0,v=d.length;_<v;_++){let S=d[_];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zn=class i extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,_=[],v=[],S=[],g=[];for(let u=0;u<h;u++){let I=u*f-o;for(let R=0;R<c;R++){let E=R*d-r;v.push(E,-I,0),S.push(0,0,1),g.push(R/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let I=0;I<a;I++){let R=I+c*u,E=I+c*(u+1),O=I+1+c*(u+1),D=I+1+c*u;_.push(R,E,D),_.push(E,O,D)}this.setIndex(_),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(S,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fu=`#ifdef USE_ALPHAHASH
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
#endif`,pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
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
#endif`,vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yu=`#ifdef USE_BATCHING
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
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Tu=`#ifdef USE_BUMPMAP
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
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nu=`#define PI 3.141592653589793
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
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ou=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ju=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
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
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
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
#endif`,hd=`struct PhysicalMaterial {
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
}`,ud=`
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`float getShadowMask() {
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
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,yf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#define LAMBERT
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
}`,Cf=`#define LAMBERT
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
}`,If=`#define MATCAP
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Df=`#define NORMAL
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
}`,Uf=`#define PHONG
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
}`,Nf=`#define PHONG
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,zf=`#define TOON
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
}`,kf=`uniform float size;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:du,alphahash_pars_fragment:fu,alphamap_fragment:pu,alphamap_pars_fragment:mu,alphatest_fragment:gu,alphatest_pars_fragment:_u,aomap_fragment:xu,aomap_pars_fragment:vu,batching_pars_vertex:yu,batching_vertex:Mu,begin_vertex:Su,beginnormal_vertex:bu,bsdfs:Eu,iridescence_fragment:wu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:Au,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:Iu,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Uu,common:Nu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Bu,displacementmap_vertex:zu,emissivemap_fragment:ku,emissivemap_pars_fragment:Hu,colorspace_fragment:Vu,colorspace_pars_fragment:Gu,envmap_fragment:Wu,envmap_common_pars_fragment:Xu,envmap_pars_fragment:qu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:sd,envmap_vertex:Zu,fog_vertex:Ju,fog_pars_vertex:$u,fog_fragment:Ku,fog_pars_fragment:Qu,gradientmap_pars_fragment:ju,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:rd,lights_toon_pars_fragment:od,lights_phong_fragment:ad,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:hd,lights_fragment_begin:ud,lights_fragment_maps:dd,lights_fragment_end:fd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:yd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:bd,morphinstance_vertex:Ed,morphcolor_vertex:wd,morphnormal_vertex:Td,morphtarget_pars_vertex:Ad,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:Id,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:zd,packing:kd,premultiplied_alpha_fragment:Hd,project_vertex:Vd,dithering_fragment:Gd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:$d,skinbase_vertex:Kd,skinning_pars_vertex:Qd,skinning_vertex:jd,skinnormal_vertex:tf,specularmap_fragment:ef,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:of,transmission_pars_fragment:af,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:uf,background_vert:df,background_frag:ff,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:gf,cube_frag:_f,depth_vert:xf,depth_frag:vf,distanceRGBA_vert:yf,distanceRGBA_frag:Mf,equirect_vert:Sf,equirect_frag:bf,linedashed_vert:Ef,linedashed_frag:wf,meshbasic_vert:Tf,meshbasic_frag:Af,meshlambert_vert:Rf,meshlambert_frag:Cf,meshmatcap_vert:If,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:Uf,meshphong_frag:Nf,meshphysical_vert:Ff,meshphysical_frag:Of,meshtoon_vert:Bf,meshtoon_frag:zf,points_vert:kf,points_frag:Hf,shadow_vert:Vf,shadow_frag:Gf,sprite_vert:Wf,sprite_frag:Xf},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ze([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ze([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ze([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ze([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ze([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ze([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ze([vt.common,vt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ze([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Dn.physical={uniforms:Ze([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var hr={r:0,b:0,g:0},Mi=new Nn,qf=new Te;function Yf(i,t,e,n,s,r,o){let a=new qt(0),l=r===!0?0:1,c,h,d=null,f=0,_=null;function v(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?e:t).get(R)),R}function S(I){let R=!1,E=v(I);E===null?u(a,l):E&&E.isColor&&(u(E,1),R=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(I,R){let E=v(R);E&&(E.isCubeTexture||E.mapping===qr)?(h===void 0&&(h=new _e(new Je(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:cs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(R.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(Mi)),h.material.toneMapped=he.getTransfer(E.colorSpace)!==Se,(d!==E||f!==E.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,_=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new _e(new Zn(2,2),new mn({name:"BackgroundMaterial",uniforms:cs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=he.getTransfer(E.colorSpace)!==Se,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,_=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null))}function u(I,R){I.getRGB(hr,zc(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,R,o)}return{getClearColor:function(){return a},setClearColor:function(I,R=1){a.set(I),l=R,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(I){l=I,u(a,l)},render:S,addToRenderList:g}}function Zf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,L,tt,Z,K){let ot=!1,j=d(Z,tt,L);r!==j&&(r=j,c(r.object)),ot=_(b,Z,tt,K),ot&&v(b,Z,tt,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,E(b,L,tt,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,L,tt){let Z=tt.wireframe===!0,K=n[b.id];K===void 0&&(K={},n[b.id]=K);let ot=K[L.id];ot===void 0&&(ot={},K[L.id]=ot);let j=ot[Z];return j===void 0&&(j=f(l()),ot[Z]=j),j}function f(b){let L=[],tt=[],Z=[];for(let K=0;K<e;K++)L[K]=0,tt[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:tt,attributeDivisors:Z,object:b,attributes:{},index:null}}function _(b,L,tt,Z){let K=r.attributes,ot=L.attributes,j=0,ut=tt.getAttributes();for(let U in ut)if(ut[U].location>=0){let xt=K[U],Ut=ot[U];if(Ut===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Ut=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Ut=b.instanceColor)),xt===void 0||xt.attribute!==Ut||Ut&&xt.data!==Ut.data)return!0;j++}return r.attributesNum!==j||r.index!==Z}function v(b,L,tt,Z){let K={},ot=L.attributes,j=0,ut=tt.getAttributes();for(let U in ut)if(ut[U].location>=0){let xt=ot[U];xt===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));let Ut={};Ut.attribute=xt,xt&&xt.data&&(Ut.data=xt.data),K[U]=Ut,j++}r.attributes=K,r.attributesNum=j,r.index=Z}function S(){let b=r.newAttributes;for(let L=0,tt=b.length;L<tt;L++)b[L]=0}function g(b){u(b,0)}function u(b,L){let tt=r.newAttributes,Z=r.enabledAttributes,K=r.attributeDivisors;tt[b]=1,Z[b]===0&&(i.enableVertexAttribArray(b),Z[b]=1),K[b]!==L&&(i.vertexAttribDivisor(b,L),K[b]=L)}function I(){let b=r.newAttributes,L=r.enabledAttributes;for(let tt=0,Z=L.length;tt<Z;tt++)L[tt]!==b[tt]&&(i.disableVertexAttribArray(tt),L[tt]=0)}function R(b,L,tt,Z,K,ot,j){j===!0?i.vertexAttribIPointer(b,L,tt,K,ot):i.vertexAttribPointer(b,L,tt,Z,K,ot)}function E(b,L,tt,Z){S();let K=Z.attributes,ot=tt.getAttributes(),j=L.defaultAttributeValues;for(let ut in ot){let U=ot[ut];if(U.location>=0){let C=K[ut];if(C===void 0&&(ut==="instanceMatrix"&&b.instanceMatrix&&(C=b.instanceMatrix),ut==="instanceColor"&&b.instanceColor&&(C=b.instanceColor)),C!==void 0){let xt=C.normalized,Ut=C.itemSize,Zt=t.get(C);if(Zt===void 0)continue;let pe=Zt.buffer,et=Zt.type,X=Zt.bytesPerElement,wt=et===i.INT||et===i.UNSIGNED_INT||C.gpuType===ja;if(C.isInterleavedBufferAttribute){let at=C.data,Vt=at.stride,Gt=C.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<U.locationSize;Bt++)u(U.location+Bt,at.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<U.locationSize;Bt++)g(U.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Bt=0;Bt<U.locationSize;Bt++)R(U.location+Bt,Ut/U.locationSize,et,xt,Vt*X,(Gt+Ut/U.locationSize*Bt)*X,wt)}else{if(C.isInstancedBufferAttribute){for(let at=0;at<U.locationSize;at++)u(U.location+at,C.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let at=0;at<U.locationSize;at++)g(U.location+at);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let at=0;at<U.locationSize;at++)R(U.location+at,Ut/U.locationSize,et,xt,Ut*X,Ut/U.locationSize*at*X,wt)}}else if(j!==void 0){let xt=j[ut];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(U.location,xt);break;case 3:i.vertexAttrib3fv(U.location,xt);break;case 4:i.vertexAttrib4fv(U.location,xt);break;default:i.vertexAttrib1fv(U.location,xt)}}}}I()}function O(){N();for(let b in n){let L=n[b];for(let tt in L){let Z=L[tt];for(let K in Z)h(Z[K].object),delete Z[K];delete L[tt]}delete n[b]}}function D(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let tt in L){let Z=L[tt];for(let K in Z)h(Z[K].object),delete Z[K];delete L[tt]}delete n[b.id]}function F(b){for(let L in n){let tt=n[L];if(tt[b.id]===void 0)continue;let Z=tt[b.id];for(let K in Z)h(Z[K].object),delete Z[K];delete tt[b.id]}}function N(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:g,disableUnusedAttributes:I}}function Jf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v];e.update(_,n,1)}function l(c,h,d,f){if(d===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let v=0;for(let S=0;S<d;S++)v+=h[S]*f[S];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $f(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==wn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let N=F===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Yn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wn&&!N)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:I,maxVaryings:R,maxFragmentUniforms:E,vertexTextures:O,maxSamples:D}}function Kf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new bn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let _=d.length!==0||f||n!==0||s;return s=f,n=d.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,_){let v=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,u=i.get(d);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{let I=r?0:n,R=I*4,E=u.clippingState||null;l.value=E,E=h(v,f,R,_);for(let O=0;O!==R;++O)E[O]=e[O];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,_,v){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=l.value,v!==!0||g===null){let u=_+S*4,I=f.matrixWorldInverse;a.getNormalMatrix(I),(g===null||g.length<u)&&(g=new Float32Array(u));for(let R=0,E=_;R!==S;++R,E+=4)o.copy(d[R]).applyMatrix4(I,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}function Qf(i){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=is:a===qo&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xo||a===qo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ta(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Pr=class extends Cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ki=4,Xl=[.125,.215,.35,.446,.526,.582],Ti=20,Ao=new Pr,ql=new qt,Ro=null,Co=0,Io=0,Po=!1,bi=(1+Math.sqrt(5))/2,$i=1/bi,Yl=[new V(-bi,$i,0),new V(bi,$i,0),new V(-$i,0,bi),new V($i,0,bi),new V(0,bi,-$i),new V(0,bi,$i),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Io),this._renderer.xr.enabled=Po,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Di,format:wn,colorSpace:us,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(r)),this._blurMaterial=tp(r,t,e)}return s}_compileMaterial(t){let e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,n,s){let a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ql),h.toneMapping=li,h.autoClear=!1;let _=new Rn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),v=new _e(new Je,_),S=!1,g=t.background;g?g.isColor&&(_.color.copy(g),t.background=null,S=!0):(_.color.copy(ql),S=!0);for(let u=0;u<6;u++){let I=u%3;I===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):I===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let R=this._cubeSize;ur(s,I*R,u>2?R:0,R,R),h.setRenderTarget(s),S&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ao)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new _e(this._lodPlanes[s],c),f=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Ti-1),S=r/v,g=isFinite(r)?1+Math.floor(h*S):Ti;g>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);let u=[],I=0;for(let F=0;F<Ti;++F){let N=F/S,w=Math.exp(-N*N/2);u.push(w),F===0?I+=w:F<g&&(I+=2*w)}for(let F=0;F<u.length;F++)u[F]=u[F]/I;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-n;let E=this._sizeLods[s],O=3*E*(s>R-Ki?s-R+Ki:0),D=4*(this._cubeSize-E);ur(e,O,D,3*E,2*E),l.setRenderTarget(e),l.render(d,Ao)}};function jf(i){let t=[],e=[],n=[],s=i,r=i-Ki+1+Xl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ki?l=Xl[o-i+Ki-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,v=6,S=3,g=2,u=1,I=new Float32Array(S*v*_),R=new Float32Array(g*v*_),E=new Float32Array(u*v*_);for(let D=0;D<_;D++){let F=D%3*2/3-1,N=D>2?0:-1,w=[F,N,0,F+2/3,N,0,F+2/3,N+1,0,F,N,0,F+2/3,N+1,0,F,N+1,0];I.set(w,S*v*D),R.set(f,g*v*D);let b=[D,D,D,D,D,D];E.set(b,u*v*D)}let O=new on;O.setAttribute("position",new sn(I,S)),O.setAttribute("uv",new sn(R,g)),O.setAttribute("faceIndex",new sn(E,u)),t.push(O),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){let n=new An(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tp(i,t,e){let n=new Float32Array(Ti),s=new V(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Jl(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function $l(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function ep(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xo||l===qo,h=l===is||l===ss;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Lr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let _=a.image;return c&&_&&_.height>0||h&&_&&s(_)?(e===null&&(e=new Lr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function np(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ip(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);for(let v in f.morphAttributes){let S=f.morphAttributes[v];for(let g=0,u=S.length;g<u;g++)t.remove(S[g])}f.removeEventListener("dispose",o),delete s[f.id];let _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let v in f)t.update(f[v],i.ARRAY_BUFFER);let _=d.morphAttributes;for(let v in _){let S=_[v];for(let g=0,u=S.length;g<u;g++)t.update(S[g],i.ARRAY_BUFFER)}}function c(d){let f=[],_=d.index,v=d.attributes.position,S=0;if(_!==null){let I=_.array;S=_.version;for(let R=0,E=I.length;R<E;R+=3){let O=I[R+0],D=I[R+1],F=I[R+2];f.push(O,D,D,F,F,O)}}else if(v!==void 0){let I=v.array;S=v.version;for(let R=0,E=I.length/3-1;R<E;R+=3){let O=R+0,D=R+1,F=R+2;f.push(O,D,D,F,F,O)}}else return;let g=new(Oc(f)?Rr:Ar)(f,1);g.version=S;let u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let _=d.index;_!==null&&f.version<_.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function sp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,_){i.drawElements(n,_,r,f*o),e.update(_,n,1)}function c(f,_,v){v!==0&&(i.drawElementsInstanced(n,_,r,f*o,v),e.update(_,n,v))}function h(f,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,r,f,0,v);let g=0;for(let u=0;u<v;u++)g+=_[u];e.update(g,n,1)}function d(f,_,v,S){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/o,_[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,r,f,0,S,0,v);let u=0;for(let I=0;I<v;I++)u+=_[I]*S[I];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function rp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function op(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let w=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],I=a.morphAttributes.color||[],R=0;_===!0&&(R=1),v===!0&&(R=2),S===!0&&(R=3);let E=a.attributes.position.count*R,O=1;E>t.maxTextureSize&&(O=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*O*4*d),F=new Er(D,E,O,d);F.type=Wn,F.needsUpdate=!0;let N=R*4;for(let b=0;b<d;b++){let L=g[b],tt=u[b],Z=I[b],K=E*O*4*b;for(let ot=0;ot<L.count;ot++){let j=ot*N;_===!0&&(s.fromBufferAttribute(L,ot),D[K+j+0]=s.x,D[K+j+1]=s.y,D[K+j+2]=s.z,D[K+j+3]=0),v===!0&&(s.fromBufferAttribute(tt,ot),D[K+j+4]=s.x,D[K+j+5]=s.y,D[K+j+6]=s.z,D[K+j+7]=0),S===!0&&(s.fromBufferAttribute(Z,ot),D[K+j+8]=s.x,D[K+j+9]=s.y,D[K+j+10]=s.z,D[K+j+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new ae(E,O)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let S=0;S<c.length;S++)_+=c[S];let v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ap(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Dr=class extends rn{constructor(t,e,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=Ci),n===void 0&&h===as&&(n=os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hc=new rn,Kl=new Dr(1,1),Vc=new Er,Gc=new Ea,Wc=new Ir,Ql=[],jl=[],tc=new Float32Array(16),ec=new Float32Array(9),nc=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;nc.set(n),i.uniformMatrix2fv(this.addr,!1,nc),Oe(e,n)}}function fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),Oe(e,n)}}function pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;tc.set(n),i.uniformMatrix4fv(this.addr,!1,tc),Oe(e,n)}}function mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=Fc,r=Kl):r=Hc,e.setTexture2D(t||r,s)}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gc,s)}function wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wc,s)}function Tp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vc,s)}function Ap(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return yp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Cp(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function Ip(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Pp(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Lp(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dp(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Up(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Np(i,t){i.uniform1iv(this.addr,t)}function Fp(i,t){i.uniform2iv(this.addr,t)}function Op(i,t){i.uniform3iv(this.addr,t)}function Bp(i,t){i.uniform4iv(this.addr,t)}function zp(i,t){i.uniform1uiv(this.addr,t)}function kp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Vp(i,t){i.uniform4uiv(this.addr,t)}function Gp(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hc,r[o])}function Wp(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gc,r[o])}function Xp(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wc,r[o])}function qp(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vc,r[o])}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Cp;case 35665:return Ip;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return kp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}var Aa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ap(e.type)}},Ra=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yp(e.type)}},Ca=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function ic(i,t){i.seq.push(t),i.map[t.id]=t}function Zp(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),o=Lo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ic(e,c===void 0?new Aa(a,i,t):new Ra(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ca(a),ic(e,d)),e=d}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function sc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jp=37297,$p=0;function Kp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var rc=new Qt;function Qp(i){he._getMatrix(rc,he.workingColorSpace,i);let t=`mat3( ${rc.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function oc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kp(i.getShaderSource(t),o)}else return s}function jp(i,t){let e=Qp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tm(i,t){let e;switch(t){case wh:e="Linear";break;case Th:e="Reinhard";break;case Ah:e="Cineon";break;case Rh:e="ACESFilmic";break;case Ih:e="AgX";break;case Ph:e="Neutral";break;case Ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dr=new V;function em(){he.getLuminanceCoefficients(dr);let i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function im(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function ac(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(rm,am)}var om=new Map;function am(i,t){let e=jt[t];if(e===void 0){let n=om.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}var lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(i){return i.replace(lm,cm)}function cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function um(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qa:t="ENVMAP_BLENDING_MULTIPLY";break;case bh:t="ENVMAP_BLENDING_MIX";break;case Eh:t="ENVMAP_BLENDING_ADD";break}return t}function pm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hm(e),c=um(e),h=dm(e),d=fm(e),f=pm(e),_=nm(e),v=im(r),S=s.createProgram(),g,u,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rs).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rs).join(`
`),u.length>0&&(u+=`
`)):(g=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),u=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?jt.tonemapping_pars_fragment:"",e.toneMapping!==li?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,jp("linearToOutputTexel",e.outputColorSpace),em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Ia(o),o=ac(o,e),o=lc(o,e),a=Ia(a),a=ac(a,e),a=lc(a,e),o=cc(o),a=cc(a),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let R=I+g+o,E=I+u+a,O=sc(s,s.VERTEX_SHADER,R),D=sc(s,s.FRAGMENT_SHADER,E);s.attachShader(S,O),s.attachShader(S,D),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function F(L){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(S).trim(),Z=s.getShaderInfoLog(O).trim(),K=s.getShaderInfoLog(D).trim(),ot=!0,j=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,O,D);else{let ut=oc(s,O,"vertex"),U=oc(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+tt+`
`+ut+`
`+U)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(Z===""||K==="")&&(j=!1);j&&(L.diagnostics={runnable:ot,programLog:tt,vertexShader:{log:Z,prefix:g},fragmentShader:{log:K,prefix:u}})}s.deleteShader(O),s.deleteShader(D),N=new es(s,S),w=sm(s,S)}let N;this.getUniforms=function(){return N===void 0&&F(this),N};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,Jp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$p++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=D,this}var gm=0,Pa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new La(t),e.set(t,n)),n}},La=class{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}};function _m(i,t,e,n,s,r,o){let a=new Tr,l=new Pa,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,_=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,L,tt,Z){let K=tt.fog,ot=Z.geometry,j=w.isMeshStandardMaterial?tt.environment:null,ut=(w.isMeshStandardMaterial?e:t).get(w.envMap||j),U=ut&&ut.mapping===qr?ut.image.height:null,C=v[w.type];w.precision!==null&&(_=s.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));let xt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ut=xt!==void 0?xt.length:0,Zt=0;ot.morphAttributes.position!==void 0&&(Zt=1),ot.morphAttributes.normal!==void 0&&(Zt=2),ot.morphAttributes.color!==void 0&&(Zt=3);let pe,et,X,wt;if(C){let me=Dn[C];pe=me.vertexShader,et=me.fragmentShader}else pe=w.vertexShader,et=w.fragmentShader,l.update(w),X=l.getVertexShaderID(w),wt=l.getFragmentShaderID(w);let at=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),Gt=Z.isInstancedMesh===!0,Bt=Z.isBatchedMesh===!0,we=!!w.map,ie=!!w.matcap,ye=!!ut,G=!!w.aoMap,Ce=!!w.lightMap,se=!!w.bumpMap,Wt=!!w.normalMap,zt=!!w.displacementMap,be=!!w.emissiveMap,Ft=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,W=w.clearcoat>0,st=w.dispersion>0,lt=w.iridescence>0,nt=w.sheen>0,Pt=w.transmission>0,ht=x&&!!w.anisotropyMap,Et=W&&!!w.clearcoatMap,re=W&&!!w.clearcoatNormalMap,dt=W&&!!w.clearcoatRoughnessMap,Rt=lt&&!!w.iridescenceMap,kt=lt&&!!w.iridescenceThicknessMap,Ht=nt&&!!w.sheenColorMap,bt=nt&&!!w.sheenRoughnessMap,oe=!!w.specularMap,$t=!!w.specularColorMap,de=!!w.specularIntensityMap,B=Pt&&!!w.transmissionMap,Mt=Pt&&!!w.thicknessMap,J=!!w.gradientMap,rt=!!w.alphaMap,mt=w.alphaTest>0,St=!!w.alphaHash,Jt=!!w.extensions,Ae=li;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Pe={shaderID:C,shaderType:w.type,shaderName:w.name,vertexShader:pe,fragmentShader:et,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:wt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Bt,batchingColor:Bt&&Z._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Z.instanceColor!==null,instancingMorph:Gt&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:us,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:ie,envMap:ye,envMapMode:ye&&ut.mapping,envMapCubeUVHeight:U,aoMap:G,lightMap:Ce,bumpMap:se,normalMap:Wt,displacementMap:f&&zt,emissiveMap:be,normalMapObjectSpace:Wt&&w.normalMapType===Nh,normalMapTangentSpace:Wt&&w.normalMapType===Nc,metalnessMap:Ft,roughnessMap:T,anisotropy:x,anisotropyMap:ht,clearcoat:W,clearcoatMap:Et,clearcoatNormalMap:re,clearcoatRoughnessMap:dt,dispersion:st,iridescence:lt,iridescenceMap:Rt,iridescenceThicknessMap:kt,sheen:nt,sheenColorMap:Ht,sheenRoughnessMap:bt,specularMap:oe,specularColorMap:$t,specularIntensityMap:de,transmission:Pt,transmissionMap:B,thicknessMap:Mt,gradientMap:J,opaque:w.transparent===!1&&w.blending===Qi&&w.alphaToCoverage===!1,alphaMap:rt,alphaTest:mt,alphaHash:St,combine:w.combine,mapUv:we&&S(w.map.channel),aoMapUv:G&&S(w.aoMap.channel),lightMapUv:Ce&&S(w.lightMap.channel),bumpMapUv:se&&S(w.bumpMap.channel),normalMapUv:Wt&&S(w.normalMap.channel),displacementMapUv:zt&&S(w.displacementMap.channel),emissiveMapUv:be&&S(w.emissiveMap.channel),metalnessMapUv:Ft&&S(w.metalnessMap.channel),roughnessMapUv:T&&S(w.roughnessMap.channel),anisotropyMapUv:ht&&S(w.anisotropyMap.channel),clearcoatMapUv:Et&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:re&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&S(w.sheenRoughnessMap.channel),specularMapUv:oe&&S(w.specularMap.channel),specularColorMapUv:$t&&S(w.specularColorMap.channel),specularIntensityMapUv:de&&S(w.specularIntensityMap.channel),transmissionMapUv:B&&S(w.transmissionMap.channel),thicknessMapUv:Mt&&S(w.thicknessMap.channel),alphaMapUv:rt&&S(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Wt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ot.attributes.uv&&(we||rt),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Vt,skinning:Z.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Zt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&he.getTransfer(w.map.colorSpace)===Se,decodeVideoTextureEmissive:be&&w.emissiveMap.isVideoTexture===!0&&he.getTransfer(w.emissiveMap.colorSpace)===Se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===Ve,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function u(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(I(b,w),R(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function I(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function R(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function E(w){let b=v[w.type],L;if(b){let tt=Dn[b];L=rl.clone(tt.uniforms)}else L=w.uniforms;return L}function O(w,b){let L;for(let tt=0,Z=h.length;tt<Z;tt++){let K=h[tt];if(K.cacheKey===b){L=K,++L.usedTimes;break}}return L===void 0&&(L=new mm(i,b,w,r),h.push(L)),L}function D(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function F(w){l.remove(w)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:E,acquireProgram:O,releaseProgram:D,releaseShaderCache:F,programs:h,dispose:N}}function xm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,_,v,S,g){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:S,group:g},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=_,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=S,u.group=g),t++,u}function a(d,f,_,v,S,g){let u=o(d,f,_,v,S,g);_.transmission>0?n.push(u):_.transparent===!0?s.push(u):e.push(u)}function l(d,f,_,v,S,g){let u=o(d,f,_,v,S,g);_.transmission>0?n.unshift(u):_.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||vm),n.length>1&&n.sort(f||uc),s.length>1&&s.sort(f||uc)}function h(){for(let d=t,f=i.length;d<f;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ym(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new dc,i.set(n,[o])):s>=r.length?(o=new dc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new qt};break;case"SpotLight":e={position:new V,direction:new V,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Sm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var bm=0;function Em(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wm(i){let t=new Mm,e=Sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new Te,o=new Te;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let _=0,v=0,S=0,g=0,u=0,I=0,R=0,E=0,O=0,D=0,F=0;c.sort(Em);for(let w=0,b=c.length;w<b;w++){let L=c[w],tt=L.color,Z=L.intensity,K=L.distance,ot=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=tt.r*Z,d+=tt.g*Z,f+=tt.b*Z;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],Z);F++}else if(L.isDirectionalLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ut=L.shadow,U=e.get(L);U.shadowIntensity=ut.intensity,U.shadowBias=ut.bias,U.shadowNormalBias=ut.normalBias,U.shadowRadius=ut.radius,U.shadowMapSize=ut.mapSize,n.directionalShadow[_]=U,n.directionalShadowMap[_]=ot,n.directionalShadowMatrix[_]=L.shadow.matrix,I++}n.directional[_]=j,_++}else if(L.isSpotLight){let j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(tt).multiplyScalar(Z),j.distance=K,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[S]=j;let ut=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,ut.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[S]=ut.matrix,L.castShadow){let U=e.get(L);U.shadowIntensity=ut.intensity,U.shadowBias=ut.bias,U.shadowNormalBias=ut.normalBias,U.shadowRadius=ut.radius,U.shadowMapSize=ut.mapSize,n.spotShadow[S]=U,n.spotShadowMap[S]=ot,E++}S++}else if(L.isRectAreaLight){let j=t.get(L);j.color.copy(tt).multiplyScalar(Z),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=j,g++}else if(L.isPointLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){let ut=L.shadow,U=e.get(L);U.shadowIntensity=ut.intensity,U.shadowBias=ut.bias,U.shadowNormalBias=ut.normalBias,U.shadowRadius=ut.radius,U.shadowMapSize=ut.mapSize,U.shadowCameraNear=ut.camera.near,U.shadowCameraFar=ut.camera.far,n.pointShadow[v]=U,n.pointShadowMap[v]=ot,n.pointShadowMatrix[v]=L.shadow.matrix,R++}n.point[v]=j,v++}else if(L.isHemisphereLight){let j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(Z),j.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[u]=j,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==_||N.pointLength!==v||N.spotLength!==S||N.rectAreaLength!==g||N.hemiLength!==u||N.numDirectionalShadows!==I||N.numPointShadows!==R||N.numSpotShadows!==E||N.numSpotMaps!==O||N.numLightProbes!==F)&&(n.directional.length=_,n.spot.length=S,n.rectArea.length=g,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=E+O-D,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=F,N.directionalLength=_,N.pointLength=v,N.spotLength=S,N.rectAreaLength=g,N.hemiLength=u,N.numDirectionalShadows=I,N.numPointShadows=R,N.numSpotShadows=E,N.numSpotMaps=O,N.numLightProbes=F,n.version=bm++)}function l(c,h){let d=0,f=0,_=0,v=0,S=0,g=h.matrixWorldInverse;for(let u=0,I=c.length;u<I;u++){let R=c[u];if(R.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(R.isSpotLight){let E=n.spot[_];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),_++}else if(R.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(R.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(g),f++}else if(R.isHemisphereLight){let E=n.hemi[S];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:n}}function fc(i){let t=new wm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new fc(i),t.set(s,[a])):r>=o.length?(a=new fc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Da=class extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
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
}`;function Cm(i,t,e){let n=new Ls,s=new ae,r=new ae,o=new ue,a=new Da({depthPacking:Uh}),l=new Ua,c={},h=e.maxTextureSize,d={[ci]:Ve,[Ve]:ci,[En]:En},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),_=f.clone();_.defines.HORIZONTAL_PASS=1;let v=new on;v.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new _e(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let u=this.type;this.render=function(D,F,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(ai),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let Z=u!==Gn&&this.type===Gn,K=u===Gn&&this.type!==Gn;for(let ot=0,j=D.length;ot<j;ot++){let ut=D[ot],U=ut.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let C=U.getFrameExtents();if(s.multiply(C),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/C.x),s.x=r.x*C.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/C.y),s.y=r.y*C.y,U.mapSize.y=r.y)),U.map===null||Z===!0||K===!0){let Ut=this.type!==Gn?{minFilter:Tn,magFilter:Tn}:{};U.map!==null&&U.map.dispose(),U.map=new An(s.x,s.y,Ut),U.map.texture.name=ut.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let xt=U.getViewportCount();for(let Ut=0;Ut<xt;Ut++){let Zt=U.getViewport(Ut);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),tt.viewport(o),U.updateMatrices(ut,Ut),n=U.getFrustum(),E(F,N,U.camera,ut,this.type)}U.isPointLightShadow!==!0&&this.type===Gn&&I(U,N),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,L)};function I(D,F){let N=t.update(S);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(F,null,N,f,S,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(F,null,N,_,S,null)}function R(D,F,N,w){let b=null,L=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)b=L;else if(b=N.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let tt=b.uuid,Z=F.uuid,K=c[tt];K===void 0&&(K={},c[tt]=K);let ot=K[Z];ot===void 0&&(ot=b.clone(),K[Z]=ot,F.addEventListener("dispose",O)),b=ot}if(b.visible=F.visible,b.wireframe=F.wireframe,w===Gn?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:d[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let tt=i.properties.get(b);tt.light=N}return b}function E(D,F,N,w,b){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Gn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);let Z=t.update(D),K=D.material;if(Array.isArray(K)){let ot=Z.groups;for(let j=0,ut=ot.length;j<ut;j++){let U=ot[j],C=K[U.materialIndex];if(C&&C.visible){let xt=R(D,C,w,b);D.onBeforeShadow(i,D,F,N,Z,xt,U),i.renderBufferDirect(N,null,Z,xt,D,U),D.onAfterShadow(i,D,F,N,Z,xt,U)}}}else if(K.visible){let ot=R(D,K,w,b);D.onBeforeShadow(i,D,F,N,Z,ot,null),i.renderBufferDirect(N,null,Z,ot,D,null),D.onAfterShadow(i,D,F,N,Z,ot,null)}}let tt=D.children;for(let Z=0,K=tt.length;Z<K;Z++)E(tt[Z],F,N,w,b)}function O(D){D.target.removeEventListener("dispose",O);for(let N in c){let w=c[N],b=D.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var Im={[Bo]:zo,[ko]:Go,[Ho]:Wo,[ns]:Vo,[zo]:Bo,[Go]:ko,[Wo]:Ho,[Vo]:ns};function Pm(i,t){function e(){let B=!1,Mt=new ue,J=null,rt=new ue(0,0,0,0);return{setMask:function(mt){J!==mt&&!B&&(i.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){B=mt},setClear:function(mt,St,Jt,Ae,Pe){Pe===!0&&(mt*=Ae,St*=Ae,Jt*=Ae),Mt.set(mt,St,Jt,Ae),rt.equals(Mt)===!1&&(i.clearColor(mt,St,Jt,Ae),rt.copy(Mt))},reset:function(){B=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let B=!1,Mt=!1,J=null,rt=null,mt=null;return{setReversed:function(St){if(Mt!==St){let Jt=t.get("EXT_clip_control");Mt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=mt;mt=null,this.setClear(Ae)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?at(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(St){J!==St&&!B&&(i.depthMask(St),J=St)},setFunc:function(St){if(Mt&&(St=Im[St]),rt!==St){switch(St){case Bo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=St}},setLocked:function(St){B=St},setClear:function(St){mt!==St&&(Mt&&(St=1-St),i.clearDepth(St),mt=St)},reset:function(){B=!1,J=null,rt=null,mt=null,Mt=!1}}}function s(){let B=!1,Mt=null,J=null,rt=null,mt=null,St=null,Jt=null,Ae=null,Pe=null;return{setTest:function(me){B||(me?at(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(me){Mt!==me&&!B&&(i.stencilMask(me),Mt=me)},setFunc:function(me,an,gn){(J!==me||rt!==an||mt!==gn)&&(i.stencilFunc(me,an,gn),J=me,rt=an,mt=gn)},setOp:function(me,an,gn){(St!==me||Jt!==an||Ae!==gn)&&(i.stencilOp(me,an,gn),St=me,Jt=an,Ae=gn)},setLocked:function(me){B=me},setClear:function(me){Pe!==me&&(i.clearStencil(me),Pe=me)},reset:function(){B=!1,Mt=null,J=null,rt=null,mt=null,St=null,Jt=null,Ae=null,Pe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,_=[],v=null,S=!1,g=null,u=null,I=null,R=null,E=null,O=null,D=null,F=new qt(0,0,0),N=0,w=!1,b=null,L=null,tt=null,Z=null,K=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ut=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(U)[1]),j=ut>=1):U.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),j=ut>=2);let C=null,xt={},Ut=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),pe=new ue().fromArray(Ut),et=new ue().fromArray(Zt);function X(B,Mt,J,rt){let mt=new Uint8Array(4),St=i.createTexture();i.bindTexture(B,St),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<J;Jt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(Mt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return St}let wt={};wt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ns),se(!1),Wt(ml),at(i.CULL_FACE),G(ai);function at(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Vt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Gt(B,Mt){return d[B]!==Mt?(i.bindFramebuffer(B,Mt),d[B]=Mt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Mt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Bt(B,Mt){let J=_,rt=!1;if(B){J=f.get(Mt),J===void 0&&(J=[],f.set(Mt,J));let mt=B.textures;if(J.length!==mt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Jt=mt.length;St<Jt;St++)J[St]=i.COLOR_ATTACHMENT0+St;J.length=mt.length,rt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,rt=!0);rt&&i.drawBuffers(J)}function we(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let ie={[Ei]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[ah]:i.FUNC_REVERSE_SUBTRACT};ie[lh]=i.MIN,ie[ch]=i.MAX;let ye={[hh]:i.ZERO,[uh]:i.ONE,[dh]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function G(B,Mt,J,rt,mt,St,Jt,Ae,Pe,me){if(B===ai){S===!0&&(Vt(i.BLEND),S=!1);return}if(S===!1&&(at(i.BLEND),S=!0),B!==rh){if(B!==g||me!==w){if((u!==Ei||E!==Ei)&&(i.blendEquation(i.FUNC_ADD),u=Ei,E=Ei),me)switch(B){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}I=null,R=null,O=null,D=null,F.set(0,0,0),N=0,g=B,w=me}return}mt=mt||Mt,St=St||J,Jt=Jt||rt,(Mt!==u||mt!==E)&&(i.blendEquationSeparate(ie[Mt],ie[mt]),u=Mt,E=mt),(J!==I||rt!==R||St!==O||Jt!==D)&&(i.blendFuncSeparate(ye[J],ye[rt],ye[St],ye[Jt]),I=J,R=rt,O=St,D=Jt),(Ae.equals(F)===!1||Pe!==N)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Pe),F.copy(Ae),N=Pe),g=B,w=!1}function Ce(B,Mt){B.side===En?Vt(i.CULL_FACE):at(i.CULL_FACE);let J=B.side===Ve;Mt&&(J=!J),se(J),B.blending===Qi&&B.transparent===!1?G(ai):G(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let rt=B.stencilWrite;a.setTest(rt),rt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function Wt(B){B!==nh?(at(i.CULL_FACE),B!==L&&(B===ml?i.cullFace(i.BACK):B===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),L=B}function zt(B){B!==tt&&(j&&i.lineWidth(B),tt=B)}function be(B,Mt,J){B?(at(i.POLYGON_OFFSET_FILL),(Z!==Mt||K!==J)&&(i.polygonOffset(Mt,J),Z=Mt,K=J)):Vt(i.POLYGON_OFFSET_FILL)}function Ft(B){B?at(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function T(B){B===void 0&&(B=i.TEXTURE0+ot-1),C!==B&&(i.activeTexture(B),C=B)}function x(B,Mt,J){J===void 0&&(C===null?J=i.TEXTURE0+ot-1:J=C);let rt=xt[J];rt===void 0&&(rt={type:void 0,texture:void 0},xt[J]=rt),(rt.type!==B||rt.texture!==Mt)&&(C!==J&&(i.activeTexture(J),C=J),i.bindTexture(B,Mt||wt[B]),rt.type=B,rt.texture=Mt)}function W(){let B=xt[C];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(B){pe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),pe.copy(B))}function bt(B){et.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),et.copy(B))}function oe(B,Mt){let J=c.get(Mt);J===void 0&&(J=new WeakMap,c.set(Mt,J));let rt=J.get(B);rt===void 0&&(rt=i.getUniformBlockIndex(Mt,B.name),J.set(B,rt))}function $t(B,Mt){let rt=c.get(Mt).get(B);l.get(Mt)!==rt&&(i.uniformBlockBinding(Mt,rt,B.__bindingPointIndex),l.set(Mt,rt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},C=null,xt={},d={},f=new WeakMap,_=[],v=null,S=!1,g=null,u=null,I=null,R=null,E=null,O=null,D=null,F=new qt(0,0,0),N=0,w=!1,b=null,L=null,tt=null,Z=null,K=null,pe.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Vt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:we,setBlending:G,setMaterial:Ce,setFlipSided:se,setCullFace:Wt,setLineWidth:zt,setPolygonOffset:be,setScissorTest:Ft,activeTexture:T,bindTexture:x,unbindTexture:W,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:Rt,texImage3D:kt,updateUBOMapping:oe,uniformBlockBinding:$t,texStorage2D:re,texStorage3D:dt,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Et,scissor:Ht,viewport:bt,reset:de}}function pc(i,t,e,n){let s=Lm(n);switch(e){case Rc:return i*t;case Ic:return i*t;case Pc:return i*t*2;case Lc:return i*t/s.components*s.byteLength;case nl:return i*t/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case sl:return i*t*4/s.components*s.byteLength;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case Qo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uc:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(i){switch(i){case Yn:case wc:return{byteLength:1,components:1};case Is:case Tc:case Di:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case Ci:case ja:case Wn:return{byteLength:4,components:1};case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,d,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return _?new OffscreenCanvas(T,x):Ps("canvas")}function S(T,x,W){let st=1,lt=Ft(T);if((lt.width>W||lt.height>W)&&(st=W/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let nt=Math.floor(st*lt.width),Pt=Math.floor(st*lt.height);d===void 0&&(d=v(nt,Pt));let ht=x?v(nt,Pt):d;return ht.width=nt,ht.height=Pt,ht.getContext("2d").drawImage(T,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+Pt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(T,x,W,st,lt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let nt=x;if(x===i.RED&&(W===i.FLOAT&&(nt=i.R32F),W===i.HALF_FLOAT&&(nt=i.R16F),W===i.UNSIGNED_BYTE&&(nt=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.R8UI),W===i.UNSIGNED_SHORT&&(nt=i.R16UI),W===i.UNSIGNED_INT&&(nt=i.R32UI),W===i.BYTE&&(nt=i.R8I),W===i.SHORT&&(nt=i.R16I),W===i.INT&&(nt=i.R32I)),x===i.RG&&(W===i.FLOAT&&(nt=i.RG32F),W===i.HALF_FLOAT&&(nt=i.RG16F),W===i.UNSIGNED_BYTE&&(nt=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RG8UI),W===i.UNSIGNED_SHORT&&(nt=i.RG16UI),W===i.UNSIGNED_INT&&(nt=i.RG32UI),W===i.BYTE&&(nt=i.RG8I),W===i.SHORT&&(nt=i.RG16I),W===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),W===i.UNSIGNED_INT&&(nt=i.RGB32UI),W===i.BYTE&&(nt=i.RGB8I),W===i.SHORT&&(nt=i.RGB16I),W===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),W===i.UNSIGNED_INT&&(nt=i.RGBA32UI),W===i.BYTE&&(nt=i.RGBA8I),W===i.SHORT&&(nt=i.RGBA16I),W===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),x===i.RGBA){let Pt=lt?Yr:he.getTransfer(st);W===i.FLOAT&&(nt=i.RGBA32F),W===i.HALF_FLOAT&&(nt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(nt=Pt===Se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function E(T,x){let W;return T?x===null||x===Ci||x===os?W=i.DEPTH24_STENCIL8:x===Wn?W=i.DEPTH32F_STENCIL8:x===Is&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ci||x===os?W=i.DEPTH_COMPONENT24:x===Wn?W=i.DEPTH_COMPONENT32F:x===Is&&(W=i.DEPTH_COMPONENT16),W}function O(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function D(T){let x=T.target;x.removeEventListener("dispose",D),N(x),x.isVideoTexture&&h.delete(x)}function F(T){let x=T.target;x.removeEventListener("dispose",F),b(x)}function N(T){let x=n.get(T);if(x.__webglInit===void 0)return;let W=T.source,st=f.get(W);if(st){let lt=st[x.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(T),Object.keys(st).length===0&&f.delete(W)}n.remove(T)}function w(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let W=T.source,st=f.get(W);delete st[x.__cacheKey],o.memory.textures--}function b(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(x.__webglFramebuffer[st]))for(let lt=0;lt<x.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(x.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(x.__webglFramebuffer[st]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[st])}else{if(Array.isArray(x.__webglFramebuffer))for(let st=0;st<x.__webglFramebuffer.length;st++)i.deleteFramebuffer(x.__webglFramebuffer[st]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let st=0;st<x.__webglColorRenderbuffer.length;st++)x.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[st]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let W=T.textures;for(let st=0,lt=W.length;st<lt;st++){let nt=n.get(W[st]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(W[st])}n.remove(T)}let L=0;function tt(){L=0}function Z(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ot(T,x){let W=n.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let st=T.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,T,x);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function j(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){et(W,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function ut(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){et(W,T,x);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function U(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){X(W,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}let C={[rs]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},xt={[Tn]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Ut={[Fh]:i.NEVER,[Vh]:i.ALWAYS,[Oh]:i.LESS,[Fc]:i.LEQUAL,[Bh]:i.EQUAL,[Hh]:i.GEQUAL,[zh]:i.GREATER,[kh]:i.NOTEQUAL};function Zt(T,x){if(x.type===Wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===no||x.magFilter===qs||x.magFilter===Ri||x.minFilter===Un||x.minFilter===no||x.minFilter===qs||x.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,C[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,C[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,C[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,xt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tn||x.minFilter!==qs&&x.minFilter!==Ri||x.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pe(T,x){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",D));let st=x.source,lt=f.get(st);lt===void 0&&(lt={},f.set(st,lt));let nt=K(x);if(nt!==T.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),lt[nt].usedTimes++;let Pt=lt[T.__cacheKey];Pt!==void 0&&(lt[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(x)),T.__cacheKey=nt,T.__webglTexture=lt[nt].texture}return W}function et(T,x,W){let st=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=i.TEXTURE_3D);let lt=pe(T,x),nt=x.source;e.bindTexture(st,T.__webglTexture,i.TEXTURE0+W);let Pt=n.get(nt);if(nt.version!==Pt.__version||lt===!0){e.activeTexture(i.TEXTURE0+W);let ht=he.getPrimaries(he.workingColorSpace),Et=x.colorSpace===oi?null:he.getPrimaries(x.colorSpace),re=x.colorSpace===oi||ht===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let dt=S(x.image,!1,s.maxTextureSize);dt=be(x,dt);let Rt=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),Ht=R(x.internalFormat,Rt,kt,x.colorSpace,x.isVideoTexture);Zt(st,x);let bt,oe=x.mipmaps,$t=x.isVideoTexture!==!0,de=Pt.__version===void 0||lt===!0,B=nt.dataReady,Mt=O(x,dt);if(x.isDepthTexture)Ht=E(x.format===as,x.type),de&&($t?e.texStorage2D(i.TEXTURE_2D,1,Ht,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,dt.width,dt.height,0,Rt,kt,null));else if(x.isDataTexture)if(oe.length>0){$t&&de&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,oe[0].width,oe[0].height);for(let J=0,rt=oe.length;J<rt;J++)bt=oe[J],$t?B&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,bt.width,bt.height,Rt,kt,bt.data):e.texImage2D(i.TEXTURE_2D,J,Ht,bt.width,bt.height,0,Rt,kt,bt.data);x.generateMipmaps=!1}else $t?(de&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,dt.width,dt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Rt,kt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,dt.width,dt.height,0,Rt,kt,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ht,oe[0].width,oe[0].height,dt.depth);for(let J=0,rt=oe.length;J<rt;J++)if(bt=oe[J],x.format!==wn)if(Rt!==null)if($t){if(B)if(x.layerUpdates.size>0){let mt=pc(bt.width,bt.height,x.format,x.type);for(let St of x.layerUpdates){let Jt=bt.data.subarray(St*mt/bt.data.BYTES_PER_ELEMENT,(St+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,St,bt.width,bt.height,1,Rt,Jt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,bt.width,bt.height,dt.depth,Rt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ht,bt.width,bt.height,dt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,bt.width,bt.height,dt.depth,Rt,kt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ht,bt.width,bt.height,dt.depth,0,Rt,kt,bt.data)}else{$t&&de&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,oe[0].width,oe[0].height);for(let J=0,rt=oe.length;J<rt;J++)bt=oe[J],x.format!==wn?Rt!==null?$t?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ht,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?B&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,bt.width,bt.height,Rt,kt,bt.data):e.texImage2D(i.TEXTURE_2D,J,Ht,bt.width,bt.height,0,Rt,kt,bt.data)}else if(x.isDataArrayTexture)if($t){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ht,dt.width,dt.height,dt.depth),B)if(x.layerUpdates.size>0){let J=pc(dt.width,dt.height,x.format,x.type);for(let rt of x.layerUpdates){let mt=dt.data.subarray(rt*J/dt.data.BYTES_PER_ELEMENT,(rt+1)*J/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,Rt,kt,mt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Rt,kt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,dt.width,dt.height,dt.depth,0,Rt,kt,dt.data);else if(x.isData3DTexture)$t?(de&&e.texStorage3D(i.TEXTURE_3D,Mt,Ht,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Rt,kt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,dt.width,dt.height,dt.depth,0,Rt,kt,dt.data);else if(x.isFramebufferTexture){if(de)if($t)e.texStorage2D(i.TEXTURE_2D,Mt,Ht,dt.width,dt.height);else{let J=dt.width,rt=dt.height;for(let mt=0;mt<Mt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ht,J,rt,0,Rt,kt,null),J>>=1,rt>>=1}}else if(oe.length>0){if($t&&de){let J=Ft(oe[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ht,J.width,J.height)}for(let J=0,rt=oe.length;J<rt;J++)bt=oe[J],$t?B&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt,kt,bt):e.texImage2D(i.TEXTURE_2D,J,Ht,Rt,kt,bt);x.generateMipmaps=!1}else if($t){if(de){let J=Ft(dt);e.texStorage2D(i.TEXTURE_2D,Mt,Ht,J.width,J.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,kt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Rt,kt,dt);g(x)&&u(st),Pt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function X(T,x,W){if(x.image.length!==6)return;let st=pe(T,x),lt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let nt=n.get(lt);if(lt.version!==nt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);let Pt=he.getPrimaries(he.workingColorSpace),ht=x.colorSpace===oi?null:he.getPrimaries(x.colorSpace),Et=x.colorSpace===oi||Pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let re=x.isCompressedTexture||x.image[0].isCompressedTexture,dt=x.image[0]&&x.image[0].isDataTexture,Rt=[];for(let rt=0;rt<6;rt++)!re&&!dt?Rt[rt]=S(x.image[rt],!0,s.maxCubemapSize):Rt[rt]=dt?x.image[rt].image:x.image[rt],Rt[rt]=be(x,Rt[rt]);let kt=Rt[0],Ht=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),oe=R(x.internalFormat,Ht,bt,x.colorSpace),$t=x.isVideoTexture!==!0,de=nt.__version===void 0||st===!0,B=lt.dataReady,Mt=O(x,kt);Zt(i.TEXTURE_CUBE_MAP,x);let J;if(re){$t&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,oe,kt.width,kt.height);for(let rt=0;rt<6;rt++){J=Rt[rt].mipmaps;for(let mt=0;mt<J.length;mt++){let St=J[mt];x.format!==wn?Ht!==null?$t?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,St.width,St.height,Ht,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,oe,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,St.width,St.height,Ht,bt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,oe,St.width,St.height,0,Ht,bt,St.data)}}}else{if(J=x.mipmaps,$t&&de){J.length>0&&Mt++;let rt=Ft(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,oe,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){$t?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Rt[rt].width,Rt[rt].height,Ht,bt,Rt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,oe,Rt[rt].width,Rt[rt].height,0,Ht,bt,Rt[rt].data);for(let mt=0;mt<J.length;mt++){let Jt=J[mt].image[rt].image;$t?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,Jt.width,Jt.height,Ht,bt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,oe,Jt.width,Jt.height,0,Ht,bt,Jt.data)}}else{$t?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ht,bt,Rt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,oe,Ht,bt,Rt[rt]);for(let mt=0;mt<J.length;mt++){let St=J[mt];$t?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,Ht,bt,St.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,oe,Ht,bt,St.image[rt])}}}g(x)&&u(i.TEXTURE_CUBE_MAP),nt.__version=lt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function wt(T,x,W,st,lt,nt){let Pt=r.convert(W.format,W.colorSpace),ht=r.convert(W.type),Et=R(W.internalFormat,Pt,ht,W.colorSpace),re=n.get(x),dt=n.get(W);if(dt.__renderTarget=x,!re.__hasExternalTextures){let Rt=Math.max(1,x.width>>nt),kt=Math.max(1,x.height>>nt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,Et,Rt,kt,x.depth,0,Pt,ht,null):e.texImage2D(lt,nt,Et,Rt,kt,0,Pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,lt,dt.__webglTexture,0,se(x)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,lt,dt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let st=x.depthTexture,lt=st&&st.isDepthTexture?st.type:null,nt=E(x.stencilBuffer,lt),Pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=se(x);Wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,nt,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,nt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{let st=x.textures;for(let lt=0;lt<st.length;lt++){let nt=st[lt],Pt=r.convert(nt.format,nt.colorSpace),ht=r.convert(nt.type),Et=R(nt.internalFormat,Pt,ht,nt.colorSpace),re=se(x);W&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Et,x.width,x.height):Wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(x.depthTexture);st.__renderTarget=x,(!st.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ot(x.depthTexture,0);let lt=st.__webglTexture,nt=se(x);if(x.depthTexture.format===ji)Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(x.depthTexture.format===as)Wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Gt(T){let x=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let st=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),st){let lt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),x.__depthDisposeCallback=lt}x.__boundDepthTexture=st}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Vt(x.__webglFramebuffer,T)}else if(W){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]===void 0)x.__webglDepthbuffer[st]=i.createRenderbuffer(),at(x.__webglDepthbuffer[st],T,!1);else{let lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,T,!1);else{let st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(T,x,W){let st=n.get(T);x!==void 0&&wt(st.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Gt(T)}function we(T){let x=T.texture,W=n.get(T),st=n.get(x);T.addEventListener("dispose",F);let lt=T.textures,nt=T.isWebGLCubeRenderTarget===!0,Pt=lt.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=x.version,o.memory.textures++),nt){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let Et=0;Et<x.mipmaps.length;Et++)W.__webglFramebuffer[ht][Et]=i.createFramebuffer()}else W.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)W.__webglFramebuffer[ht]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ht=0,Et=lt.length;ht<Et;ht++){let re=n.get(lt[ht]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Wt(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<lt.length;ht++){let Et=lt[ht];W.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);let re=r.convert(Et.format,Et.colorSpace),dt=r.convert(Et.type),Rt=R(Et.internalFormat,re,dt,Et.colorSpace,T.isXRRenderTarget===!0),kt=se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),at(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)wt(W.__webglFramebuffer[ht][Et],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et);else wt(W.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ht=0,Et=lt.length;ht<Et;ht++){let re=lt[ht],dt=n.get(re);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Zt(i.TEXTURE_2D,re),wt(W.__webglFramebuffer,T,re,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(re)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,st.__webglTexture),Zt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)wt(W.__webglFramebuffer[Et],T,x,i.COLOR_ATTACHMENT0,ht,Et);else wt(W.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ht,0);g(x)&&u(ht),e.unbindTexture()}T.depthBuffer&&Gt(T)}function ie(T){let x=T.textures;for(let W=0,st=x.length;W<st;W++){let lt=x[W];if(g(lt)){let nt=I(T),Pt=n.get(lt).__webglTexture;e.bindTexture(nt,Pt),u(nt),e.unbindTexture()}}}let ye=[],G=[];function Ce(T){if(T.samples>0){if(Wt(T)===!1){let x=T.textures,W=T.width,st=T.height,lt=i.COLOR_BUFFER_BIT,nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),ht=x.length>1;if(ht)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);let re=n.get(x[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,W,st,0,0,W,st,lt,i.NEAREST),l===!0&&(ye.length=0,G.length=0,ye.push(i.COLOR_ATTACHMENT0+Et),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ye.push(nt),G.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);let re=n.get(x[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function se(T){return Math.min(s.maxSamples,T.samples)}function Wt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function be(T,x){let W=T.colorSpace,st=T.format,lt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==us&&W!==oi&&(he.getTransfer(W)===Se?(st!==wn||lt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Ft(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=tt,this.setTexture2D=ot,this.setTexture2DArray=j,this.setTexture3D=ut,this.setTextureCube=U,this.rebindTextures=Bt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Wt}function Um(i,t){function e(n,s=oi){let r,o=he.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===el)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===wn)return i.RGBA;if(n===Ic)return i.LUMINANCE;if(n===Pc)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Lc)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Dc)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===vr)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===$o||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===jo||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qo||n===jo)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===_a||n===xa||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Na=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},nn=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,n),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Om=`
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

}`,Fa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:Fm,fragmentShader:Om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oa=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,_=null,v=null,S=new Fa,g=e.getContextAttributes(),u=null,I=null,R=[],E=[],O=new ae,D=null,F=new ze;F.viewport=new ue;let N=new ze;N.viewport=new ue;let w=[F,N],b=new Na,L=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let X=R[et];return X===void 0&&(X=new Cs,R[et]=X),X.getTargetRaySpace()},this.getControllerGrip=function(et){let X=R[et];return X===void 0&&(X=new Cs,R[et]=X),X.getGripSpace()},this.getHand=function(et){let X=R[et];return X===void 0&&(X=new Cs,R[et]=X),X.getHandSpace()};function Z(et){let X=E.indexOf(et.inputSource);if(X===-1)return;let wt=R[X];wt!==void 0&&(wt.update(et.inputSource,et.frame,c||o),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ot);for(let et=0;et<R.length;et++){let X=E[et];X!==null&&(E[et]=null,R[et].disconnect(X))}L=null,tt=null,S.reset(),t.setRenderTarget(u),_=null,f=null,d=null,s=null,I=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ot),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let X={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),I=new An(_.framebufferWidth,_.framebufferHeight,{format:wn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,wt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=g.stencil?as:ji,wt=g.stencil?os:Ci);let Vt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),I=new An(f.textureWidth,f.textureHeight,{format:wn,type:Yn,depthTexture:new Dr(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ot(et){for(let X=0;X<et.removed.length;X++){let wt=et.removed[X],at=E.indexOf(wt);at>=0&&(E[at]=null,R[at].disconnect(wt))}for(let X=0;X<et.added.length;X++){let wt=et.added[X],at=E.indexOf(wt);if(at===-1){for(let Gt=0;Gt<R.length;Gt++)if(Gt>=E.length){E.push(wt),at=Gt;break}else if(E[Gt]===null){E[Gt]=wt,at=Gt;break}if(at===-1)break}let Vt=R[at];Vt&&Vt.connect(wt)}}let j=new V,ut=new V;function U(et,X,wt){j.setFromMatrixPosition(X.matrixWorld),ut.setFromMatrixPosition(wt.matrixWorld);let at=j.distanceTo(ut),Vt=X.projectionMatrix.elements,Gt=wt.projectionMatrix.elements,Bt=Vt[14]/(Vt[10]-1),we=Vt[14]/(Vt[10]+1),ie=(Vt[9]+1)/Vt[5],ye=(Vt[9]-1)/Vt[5],G=(Vt[8]-1)/Vt[0],Ce=(Gt[8]+1)/Gt[0],se=Bt*G,Wt=Bt*Ce,zt=at/(-G+Ce),be=zt*-G;if(X.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(be),et.translateZ(zt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Vt[10]===-1)et.projectionMatrix.copy(X.projectionMatrix),et.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Ft=Bt+zt,T=we+zt,x=se-be,W=Wt+(at-be),st=ie*we/T*Ft,lt=ye*we/T*Ft;et.projectionMatrix.makePerspective(x,W,st,lt,Ft,T),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function C(et,X){X===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(X.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let X=et.near,wt=et.far;S.texture!==null&&(S.depthNear>0&&(X=S.depthNear),S.depthFar>0&&(wt=S.depthFar)),b.near=N.near=F.near=X,b.far=N.far=F.far=wt,(L!==b.near||tt!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,tt=b.far),F.layers.mask=et.layers.mask|2,N.layers.mask=et.layers.mask|4,b.layers.mask=F.layers.mask|N.layers.mask;let at=et.parent,Vt=b.cameras;C(b,at);for(let Gt=0;Gt<Vt.length;Gt++)C(Vt[Gt],at);Vt.length===2?U(b,F,N):b.projectionMatrix.copy(F.projectionMatrix),xt(et,b,at)};function xt(et,X,wt){wt===null?et.matrix.copy(X.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(X.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(X.projectionMatrix),et.projectionMatrixInverse.copy(X.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ma*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(b)};let Ut=null;function Zt(et,X){if(h=X.getViewerPose(c||o),v=X,h!==null){let wt=h.views;_!==null&&(t.setRenderTargetFramebuffer(I,_.framebuffer),t.setRenderTarget(I));let at=!1;wt.length!==b.cameras.length&&(b.cameras.length=0,at=!0);for(let Gt=0;Gt<wt.length;Gt++){let Bt=wt[Gt],we=null;if(_!==null)we=_.getViewport(Bt);else{let ye=d.getViewSubImage(f,Bt);we=ye.viewport,Gt===0&&(t.setRenderTargetTextures(I,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(I))}let ie=w[Gt];ie===void 0&&(ie=new ze,ie.layers.enable(Gt),ie.viewport=new ue,w[Gt]=ie),ie.matrix.fromArray(Bt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Bt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(we.x,we.y,we.width,we.height),Gt===0&&(b.matrix.copy(ie.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),at===!0&&b.cameras.push(ie)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let Gt=d.getDepthInformation(wt[0]);Gt&&Gt.isValid&&Gt.texture&&S.init(t,Gt,s.renderState)}}for(let wt=0;wt<R.length;wt++){let at=E[wt],Vt=R[wt];at!==null&&Vt!==void 0&&Vt.update(at,X,c||o)}Ut&&Ut(et,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),v=null}let pe=new kc;pe.setAnimationLoop(Zt),this.setAnimationLoop=function(et){Ut=et},this.dispose=function(){}}},Si=new Nn,Bm=new Te;function zm(i,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,zc(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,I,R,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&_(g,u,E)):u.isMeshMatcapMaterial?(r(g,u),v(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),S(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,I,R):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Ve&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Ve&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let I=t.get(u),R=I.envMap,E=I.envMapRotation;R&&(g.envMap.value=R,Si.copy(E),Si.x*=-1,Si.y*=-1,Si.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Si)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,I,R){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*I,g.scale.value=R*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function _(g,u,I){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ve&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){let I=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function km(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(I,R){let E=R.program;n.uniformBlockBinding(I,E)}function c(I,R){let E=s[I.id];E===void 0&&(v(I),E=h(I),s[I.id]=E,I.addEventListener("dispose",g));let O=R.program;n.updateUBOMapping(I,O);let D=t.render.frame;r[I.id]!==D&&(f(I),r[I.id]=D)}function h(I){let R=d();I.__bindingPointIndex=R;let E=i.createBuffer(),O=I.__size,D=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,E),E}function d(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(I){let R=s[I.id],E=I.uniforms,O=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let D=0,F=E.length;D<F;D++){let N=Array.isArray(E[D])?E[D]:[E[D]];for(let w=0,b=N.length;w<b;w++){let L=N[w];if(_(L,D,w,O)===!0){let tt=L.__offset,Z=Array.isArray(L.value)?L.value:[L.value],K=0;for(let ot=0;ot<Z.length;ot++){let j=Z[ot],ut=S(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,tt+K,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,K),K+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(I,R,E,O){let D=I.value,F=R+"_"+E;if(O[F]===void 0)return typeof D=="number"||typeof D=="boolean"?O[F]=D:O[F]=D.clone(),!0;{let N=O[F];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return O[F]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function v(I){let R=I.uniforms,E=0,O=16;for(let F=0,N=R.length;F<N;F++){let w=Array.isArray(R[F])?R[F]:[R[F]];for(let b=0,L=w.length;b<L;b++){let tt=w[b],Z=Array.isArray(tt.value)?tt.value:[tt.value];for(let K=0,ot=Z.length;K<ot;K++){let j=Z[K],ut=S(j),U=E%O,C=U%ut.boundary,xt=U+C;E+=C,xt!==0&&O-xt<ut.storage&&(E+=O-xt),tt.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=E,E+=ut.storage}}}let D=E%O;return D>0&&(E+=O-D),I.__size=E,I.__cache={},this}function S(I){let R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function g(I){let R=I.target;R.removeEventListener("dispose",g);let E=o.indexOf(R.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function u(){for(let I in s)i.deleteBuffer(s[I]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Ur=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=new Uint32Array(4),S=new Int32Array(4),g=null,u=null,I=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=li,this.toneMappingExposure=1;let E=this,O=!1,D=0,F=0,N=null,w=-1,b=null,L=new ue,tt=new ue,Z=null,K=new qt(0),ot=0,j=e.width,ut=e.height,U=1,C=null,xt=null,Ut=new ue(0,0,j,ut),Zt=new ue(0,0,j,ut),pe=!1,et=new Ls,X=!1,wt=!1,at=new Te,Vt=new Te,Gt=new V,Bt=new ue,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ye(){return N===null?U:1}let G=n;function Ce(M,z){return e.getContext(M,z)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",St,!1),G===null){let z="webgl2";if(G=Ce(z,M),G===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let se,Wt,zt,be,Ft,T,x,W,st,lt,nt,Pt,ht,Et,re,dt,Rt,kt,Ht,bt,oe,$t,de,B;function Mt(){se=new np(G),se.init(),$t=new Um(G,se),Wt=new $f(G,se,t,$t),zt=new Pm(G,se),Wt.reverseDepthBuffer&&f&&zt.buffers.depth.setReversed(!0),be=new rp(G),Ft=new xm,T=new Dm(G,se,zt,Ft,Wt,$t,be),x=new Qf(E),W=new ep(E),st=new uu(G),de=new Zf(G,st),lt=new ip(G,st,be,de),nt=new ap(G,lt,st,be),Ht=new op(G,Wt,T),dt=new Kf(Ft),Pt=new _m(E,x,W,se,Wt,de,dt),ht=new zm(E,Ft),Et=new ym,re=new Tm(se),kt=new Yf(E,x,W,zt,nt,_,l),Rt=new Cm(E,nt,Wt),B=new km(G,be,Wt,zt),bt=new Jf(G,se,be),oe=new sp(G,se,be),be.programs=Pt.programs,E.capabilities=Wt,E.extensions=se,E.properties=Ft,E.renderLists=Et,E.shadowMap=Rt,E.state=zt,E.info=be}Mt();let J=new Oa(E,G);this.xr=J,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let M=se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(M){M!==void 0&&(U=M,this.setSize(j,ut,!1))},this.getSize=function(M){return M.set(j,ut)},this.setSize=function(M,z,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ut=z,e.width=Math.floor(M*U),e.height=Math.floor(z*U),Y===!0&&(e.style.width=M+"px",e.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(j*U,ut*U).floor()},this.setDrawingBufferSize=function(M,z,Y){j=M,ut=z,U=Y,e.width=Math.floor(M*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ut)},this.setViewport=function(M,z,Y,q){M.isVector4?Ut.set(M.x,M.y,M.z,M.w):Ut.set(M,z,Y,q),zt.viewport(L.copy(Ut).multiplyScalar(U).round())},this.getScissor=function(M){return M.copy(Zt)},this.setScissor=function(M,z,Y,q){M.isVector4?Zt.set(M.x,M.y,M.z,M.w):Zt.set(M,z,Y,q),zt.scissor(tt.copy(Zt).multiplyScalar(U).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){zt.setScissorTest(pe=M)},this.setOpaqueSort=function(M){C=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(M=!0,z=!0,Y=!0){let q=0;if(M){let H=!1;if(N!==null){let ft=N.texture.format;H=ft===sl||ft===il||ft===nl}if(H){let ft=N.texture.type,_t=ft===Yn||ft===Ci||ft===Is||ft===os||ft===tl||ft===el,Ct=kt.getClearColor(),Lt=kt.getClearAlpha(),Xt=Ct.r,Yt=Ct.g,Dt=Ct.b;_t?(v[0]=Xt,v[1]=Yt,v[2]=Dt,v[3]=Lt,G.clearBufferuiv(G.COLOR,0,v)):(S[0]=Xt,S[1]=Yt,S[2]=Dt,S[3]=Lt,G.clearBufferiv(G.COLOR,0,S))}else q|=G.COLOR_BUFFER_BIT}z&&(q|=G.DEPTH_BUFFER_BIT),Y&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),re.dispose(),Ft.dispose(),x.dispose(),W.dispose(),nt.dispose(),de.dispose(),B.dispose(),Pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",ks),J.removeEventListener("sessionend",fs),In.stop()};function rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let M=be.autoReset,z=Rt.enabled,Y=Rt.autoUpdate,q=Rt.needsUpdate,H=Rt.type;Mt(),be.autoReset=M,Rt.enabled=z,Rt.autoUpdate=Y,Rt.needsUpdate=q,Rt.type=H}function St(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Jt(M){let z=M.target;z.removeEventListener("dispose",Jt),Ae(z)}function Ae(M){Pe(M),Ft.remove(M)}function Pe(M){let z=Ft.get(M).programs;z!==void 0&&(z.forEach(function(Y){Pt.releaseProgram(Y)}),M.isShaderMaterial&&Pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,Y,q,H,ft){z===null&&(z=we);let _t=H.isMesh&&H.matrixWorld.determinant()<0,Ct=$r(M,z,Y,q,H);zt.setMaterial(q,_t);let Lt=Y.index,Xt=1;if(q.wireframe===!0){if(Lt=lt.getWireframeAttribute(Y),Lt===void 0)return;Xt=2}let Yt=Y.drawRange,Dt=Y.attributes.position,ee=Yt.start*Xt,ve=(Yt.start+Yt.count)*Xt;ft!==null&&(ee=Math.max(ee,ft.start*Xt),ve=Math.min(ve,(ft.start+ft.count)*Xt)),Lt!==null?(ee=Math.max(ee,0),ve=Math.min(ve,Lt.count)):Dt!=null&&(ee=Math.max(ee,0),ve=Math.min(ve,Dt.count));let Me=ve-ee;if(Me<0||Me===1/0)return;de.setup(H,q,Ct,Y,Lt);let ke,ce=bt;if(Lt!==null&&(ke=st.get(Lt),ce=oe,ce.setIndex(ke)),H.isMesh)q.wireframe===!0?(zt.setLineWidth(q.wireframeLinewidth*ye()),ce.setMode(G.LINES)):ce.setMode(G.TRIANGLES);else if(H.isLine){let Nt=q.linewidth;Nt===void 0&&(Nt=1),zt.setLineWidth(Nt*ye()),H.isLineSegments?ce.setMode(G.LINES):H.isLineLoop?ce.setMode(G.LINE_LOOP):ce.setMode(G.LINE_STRIP)}else H.isPoints?ce.setMode(G.POINTS):H.isSprite&&ce.setMode(G.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ce.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Nt=H._multiDrawStarts,$e=H._multiDrawCounts,fe=H._multiDrawCount,Ke=Lt?st.get(Lt).bytesPerElement:1,$n=Ft.get(q).currentProgram.getUniforms();for(let He=0;He<fe;He++)$n.setValue(G,"_gl_DrawID",He),ce.render(Nt[He]/Ke,$e[He])}else if(H.isInstancedMesh)ce.renderInstances(ee,Me,H.count);else if(Y.isInstancedBufferGeometry){let Nt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,$e=Math.min(Y.instanceCount,Nt);ce.renderInstances(ee,Me,$e)}else ce.render(ee,Me)};function me(M,z,Y){M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=Ve,M.needsUpdate=!0,Ge(M,z,Y),M.side=ci,M.needsUpdate=!0,Ge(M,z,Y),M.side=En):Ge(M,z,Y)}this.compile=function(M,z,Y=null){Y===null&&(Y=M),u=re.get(Y),u.init(z),R.push(u),Y.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),M!==Y&&M.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();let q=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ft=H.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){let Ct=ft[_t];me(Ct,Y,H),q.add(Ct)}else me(ft,Y,H),q.add(ft)}),R.pop(),u=null,q},this.compileAsync=function(M,z,Y=null){let q=this.compile(M,z,Y);return new Promise(H=>{function ft(){if(q.forEach(function(_t){Ft.get(_t).currentProgram.isReady()&&q.delete(_t)}),q.size===0){H(M);return}setTimeout(ft,10)}se.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let an=null;function gn(M){an&&an(M)}function ks(){In.stop()}function fs(){In.start()}let In=new kc;In.setAnimationLoop(gn),typeof self!="undefined"&&In.setContext(self),this.setAnimationLoop=function(M){an=M,J.setAnimationLoop(M),M===null?In.stop():In.start()},J.addEventListener("sessionstart",ks),J.addEventListener("sessionend",fs),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,z,N),u=re.get(M,R.length),u.init(z),R.push(u),Vt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(Vt),wt=this.localClippingEnabled,X=dt.init(this.clippingPlanes,wt),g=Et.get(M,I.length),g.init(),I.push(g),J.enabled===!0&&J.isPresenting===!0){let ft=E.xr.getDepthSensingMesh();ft!==null&&xe(ft,z,-1/0,E.sortObjects)}xe(M,z,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(C,xt),ie=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ie&&kt.addToRenderList(g,M),this.info.render.frame++,X===!0&&dt.beginShadows();let Y=u.state.shadowsArray;Rt.render(Y,M,z),X===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,H=g.transmissive;if(u.setupLights(),z.isArrayCamera){let ft=z.cameras;if(H.length>0)for(let _t=0,Ct=ft.length;_t<Ct;_t++){let Lt=ft[_t];dn(q,H,M,Lt)}ie&&kt.render(M);for(let _t=0,Ct=ft.length;_t<Ct;_t++){let Lt=ft[_t];_n(g,M,Lt,Lt.viewport)}}else H.length>0&&dn(q,H,M,z),ie&&kt.render(M),_n(g,M,z);N!==null&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(E,M,z),de.resetDefaultState(),w=-1,b=null,R.pop(),R.length>0?(u=R[R.length-1],X===!0&&dt.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,I.pop(),I.length>0?g=I[I.length-1]:g=null};function xe(M,z,Y,q){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||et.intersectsSprite(M)){q&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Vt);let _t=nt.update(M),Ct=M.material;Ct.visible&&g.push(M,_t,Ct,Y,Bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||et.intersectsObject(M))){let _t=nt.update(M),Ct=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Bt.copy(_t.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4(Vt)),Array.isArray(Ct)){let Lt=_t.groups;for(let Xt=0,Yt=Lt.length;Xt<Yt;Xt++){let Dt=Lt[Xt],ee=Ct[Dt.materialIndex];ee&&ee.visible&&g.push(M,_t,ee,Y,Bt.z,Dt)}}else Ct.visible&&g.push(M,_t,Ct,Y,Bt.z,null)}}let ft=M.children;for(let _t=0,Ct=ft.length;_t<Ct;_t++)xe(ft[_t],z,Y,q)}function _n(M,z,Y,q){let H=M.opaque,ft=M.transmissive,_t=M.transparent;u.setupLightsView(Y),X===!0&&dt.setGlobalState(E.clippingPlanes,Y),q&&zt.viewport(L.copy(q)),H.length>0&&Pn(H,z,Y),ft.length>0&&Pn(ft,z,Y),_t.length>0&&Pn(_t,z,Y),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function dn(M,z,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new An(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Di:Yn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let ft=u.state.transmissionRenderTarget[q.id],_t=q.viewport||L;ft.setSize(_t.z,_t.w);let Ct=E.getRenderTarget();E.setRenderTarget(ft),E.getClearColor(K),ot=E.getClearAlpha(),ot<1&&E.setClearColor(16777215,.5),E.clear(),ie&&kt.render(Y);let Lt=E.toneMapping;E.toneMapping=li;let Xt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),X===!0&&dt.setGlobalState(E.clippingPlanes,q),Pn(M,Y,q),T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft),se.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Dt=0,ee=z.length;Dt<ee;Dt++){let ve=z[Dt],Me=ve.object,ke=ve.geometry,ce=ve.material,Nt=ve.group;if(ce.side===En&&Me.layers.test(q.layers)){let $e=ce.side;ce.side=Ve,ce.needsUpdate=!0,Ni(Me,Y,q,ke,ce,Nt),ce.side=$e,ce.needsUpdate=!0,Yt=!0}}Yt===!0&&(T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft))}E.setRenderTarget(Ct),E.setClearColor(K,ot),Xt!==void 0&&(q.viewport=Xt),E.toneMapping=Lt}function Pn(M,z,Y){let q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ft=M.length;H<ft;H++){let _t=M[H],Ct=_t.object,Lt=_t.geometry,Xt=q===null?_t.material:q,Yt=_t.group;Ct.layers.test(Y.layers)&&Ni(Ct,z,Y,Lt,Xt,Yt)}}function Ni(M,z,Y,q,H,ft){M.onBeforeRender(E,z,Y,q,H,ft),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(E,z,Y,q,M,ft),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,E.renderBufferDirect(Y,z,q,H,M,ft),H.side=ci,H.needsUpdate=!0,E.renderBufferDirect(Y,z,q,H,M,ft),H.side=En):E.renderBufferDirect(Y,z,q,H,M,ft),M.onAfterRender(E,z,Y,q,H,ft)}function Ge(M,z,Y){z.isScene!==!0&&(z=we);let q=Ft.get(M),H=u.state.lights,ft=u.state.shadowsArray,_t=H.state.version,Ct=Pt.getParameters(M,H.state,ft,z,Y),Lt=Pt.getProgramCacheKey(Ct),Xt=q.programs;q.environment=M.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(M.isMeshStandardMaterial?W:x).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Xt===void 0&&(M.addEventListener("dispose",Jt),Xt=new Map,q.programs=Xt);let Yt=Xt.get(Lt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===_t)return fn(M,Ct),Yt}else Ct.uniforms=Pt.getUniforms(M),M.onBeforeCompile(Ct,E),Yt=Pt.acquireProgram(Ct,Lt),Xt.set(Lt,Yt),q.uniforms=Ct.uniforms;let Dt=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=dt.uniform),fn(M,Ct),q.needsLights=Qr(M),q.lightsStateVersion=_t,q.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.directionalShadowMap.value=H.state.directionalShadowMap,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotShadowMap.value=H.state.spotShadowMap,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMap.value=H.state.pointShadowMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function le(M){if(M.uniformsList===null){let z=M.currentProgram.getUniforms();M.uniformsList=es.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function fn(M,z){let Y=Ft.get(M);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function $r(M,z,Y,q,H){z.isScene!==!0&&(z=we),T.resetTextureUnits();let ft=z.fog,_t=q.isMeshStandardMaterial?z.environment:null,Ct=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:us,Lt=(q.isMeshStandardMaterial?W:x).get(q.envMap||_t),Xt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Yt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Dt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,ve=!!Y.morphAttributes.color,Me=li;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Me=E.toneMapping);let ke=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=ke!==void 0?ke.length:0,Nt=Ft.get(q),$e=u.state.lights;if(X===!0&&(wt===!0||M!==b)){let We=M===b&&q.id===w;dt.setState(q,M,We)}let fe=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==$e.state.version||Nt.outputColorSpace!==Ct||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==Lt||q.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==Xt||Nt.vertexTangents!==Yt||Nt.morphTargets!==Dt||Nt.morphNormals!==ee||Nt.morphColors!==ve||Nt.toneMapping!==Me||Nt.morphTargetsCount!==ce)&&(fe=!0):(fe=!0,Nt.__version=q.version);let Ke=Nt.currentProgram;fe===!0&&(Ke=Ge(q,z,H));let $n=!1,He=!1,Kn=!1,Ee=Ke.getUniforms(),ln=Nt.uniforms;if(zt.useProgram(Ke.program)&&($n=!0,He=!0,Kn=!0),q.id!==w&&(w=q.id,He=!0),$n||b!==M){zt.buffers.depth.getReversed()?(at.copy(M.projectionMatrix),qh(at),Yh(at),Ee.setValue(G,"projectionMatrix",at)):Ee.setValue(G,"projectionMatrix",M.projectionMatrix),Ee.setValue(G,"viewMatrix",M.matrixWorldInverse);let xn=Ee.map.cameraPosition;xn!==void 0&&xn.setValue(G,Gt.setFromMatrixPosition(M.matrixWorld)),Wt.logarithmicDepthBuffer&&Ee.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ee.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,He=!0,Kn=!0)}if(H.isSkinnedMesh){Ee.setOptional(G,H,"bindMatrix"),Ee.setOptional(G,H,"bindMatrixInverse");let We=H.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ee.setValue(G,"boneTexture",We.boneTexture,T))}H.isBatchedMesh&&(Ee.setOptional(G,H,"batchingTexture"),Ee.setValue(G,"batchingTexture",H._matricesTexture,T),Ee.setOptional(G,H,"batchingIdTexture"),Ee.setValue(G,"batchingIdTexture",H._indirectTexture,T),Ee.setOptional(G,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(G,"batchingColorTexture",H._colorsTexture,T));let On=Y.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ht.update(H,Y,Ke),(He||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,Ee.setValue(G,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ln.envMap.value=Lt,ln.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),He&&(Ee.setValue(G,"toneMappingExposure",E.toneMappingExposure),Nt.needsLights&&Kr(ln,Kn),ft&&q.fog===!0&&ht.refreshFogUniforms(ln,ft),ht.refreshMaterialUniforms(ln,q,U,ut,u.state.transmissionRenderTarget[M.id]),es.upload(G,le(Nt),ln,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(es.upload(G,le(Nt),ln,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ee.setValue(G,"center",H.center),Ee.setValue(G,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(G,"normalMatrix",H.normalMatrix),Ee.setValue(G,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let We=q.uniformsGroups;for(let xn=0,vn=We.length;xn<vn;xn++){let Hs=We[xn];B.update(Hs,Ke),B.bind(Hs,Ke)}}return Ke}function Kr(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Qr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,z,Y){Ft.get(M.texture).__webglTexture=z,Ft.get(M.depthTexture).__webglTexture=Y;let q=Ft.get(M);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,z){let Y=Ft.get(M);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,Y=0){N=M,D=z,F=Y;let q=!0,H=null,ft=!1,_t=!1;if(M){let Lt=Ft.get(M);if(Lt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(G.FRAMEBUFFER,null),q=!1;else if(Lt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Lt.__hasExternalTextures)T.rebindTextures(M,Ft.get(M.texture).__webglTexture,Ft.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Dt=M.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&Ft.has(Dt)&&(M.width!==Dt.image.width||M.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}let Xt=M.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(_t=!0);let Yt=Ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?H=Yt[z][Y]:H=Yt[z],ft=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?H=Ft.get(M).__webglMultisampledFramebuffer:Array.isArray(Yt)?H=Yt[Y]:H=Yt,L.copy(M.viewport),tt.copy(M.scissor),Z=M.scissorTest}else L.copy(Ut).multiplyScalar(U).floor(),tt.copy(Zt).multiplyScalar(U).floor(),Z=pe;if(zt.bindFramebuffer(G.FRAMEBUFFER,H)&&q&&zt.drawBuffers(M,H),zt.viewport(L),zt.scissor(tt),zt.setScissorTest(Z),ft){let Lt=Ft.get(M.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Lt.__webglTexture,Y)}else if(_t){let Lt=Ft.get(M.texture),Xt=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.__webglTexture,Y||0,Xt)}w=-1},this.readRenderTargetPixels=function(M,z,Y,q,H,ft,_t){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){zt.bindFramebuffer(G.FRAMEBUFFER,Ct);try{let Lt=M.texture,Xt=Lt.format,Yt=Lt.type;if(!Wt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-q&&Y>=0&&Y<=M.height-H&&G.readPixels(z,Y,q,H,$t.convert(Xt),$t.convert(Yt),ft)}finally{let Lt=N!==null?Ft.get(N).__webglFramebuffer:null;zt.bindFramebuffer(G.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(M,z,Y,q,H,ft,_t){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){let Lt=M.texture,Xt=Lt.format,Yt=Lt.type;if(!Wt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=M.width-q&&Y>=0&&Y<=M.height-H){zt.bindFramebuffer(G.FRAMEBUFFER,Ct);let Dt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Dt),G.bufferData(G.PIXEL_PACK_BUFFER,ft.byteLength,G.STREAM_READ),G.readPixels(z,Y,q,H,$t.convert(Xt),$t.convert(Yt),0);let ee=N!==null?Ft.get(N).__webglFramebuffer:null;zt.bindFramebuffer(G.FRAMEBUFFER,ee);let ve=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Xh(G,ve,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Dt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ft),G.deleteBuffer(Dt),G.deleteSync(ve),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,z=null,Y=0){M.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1]);let q=Math.pow(2,-Y),H=Math.floor(M.image.width*q),ft=Math.floor(M.image.height*q),_t=z!==null?z.x:0,Ct=z!==null?z.y:0;T.setTexture2D(M,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,_t,Ct,H,ft),zt.unbindTexture()},this.copyTextureToTexture=function(M,z,Y=null,q=null,H=0){M.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,M=arguments[1],z=arguments[2],H=arguments[3]||0,Y=null);let ft,_t,Ct,Lt,Xt,Yt,Dt,ee,ve,Me=M.isCompressedTexture?M.mipmaps[H]:M.image;Y!==null?(ft=Y.max.x-Y.min.x,_t=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Xt=Y.min.y,Yt=Y.isBox3?Y.min.z:0):(ft=Me.width,_t=Me.height,Ct=Me.depth||1,Lt=0,Xt=0,Yt=0),q!==null?(Dt=q.x,ee=q.y,ve=q.z):(Dt=0,ee=0,ve=0);let ke=$t.convert(z.format),ce=$t.convert(z.type),Nt;z.isData3DTexture?(T.setTexture3D(z,0),Nt=G.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Nt=G.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Nt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);let $e=G.getParameter(G.UNPACK_ROW_LENGTH),fe=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ke=G.getParameter(G.UNPACK_SKIP_PIXELS),$n=G.getParameter(G.UNPACK_SKIP_ROWS),He=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Me.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Me.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Lt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt);let Kn=M.isDataArrayTexture||M.isData3DTexture,Ee=z.isDataArrayTexture||z.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let ln=Ft.get(M),On=Ft.get(z),We=Ft.get(ln.__renderTarget),xn=Ft.get(On.__renderTarget);zt.bindFramebuffer(G.READ_FRAMEBUFFER,We.__webglFramebuffer),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let vn=0;vn<Ct;vn++)Kn&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(M).__webglTexture,H,Yt+vn),M.isDepthTexture?(Ee&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(z).__webglTexture,H,ve+vn),G.blitFramebuffer(Lt,Xt,ft,_t,Dt,ee,ft,_t,G.DEPTH_BUFFER_BIT,G.NEAREST)):Ee?G.copyTexSubImage3D(Nt,H,Dt,ee,ve+vn,Lt,Xt,ft,_t):G.copyTexSubImage2D(Nt,H,Dt,ee,ve+vn,Lt,Xt,ft,_t);zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ee?M.isDataTexture||M.isData3DTexture?G.texSubImage3D(Nt,H,Dt,ee,ve,ft,_t,Ct,ke,ce,Me.data):z.isCompressedArrayTexture?G.compressedTexSubImage3D(Nt,H,Dt,ee,ve,ft,_t,Ct,ke,Me.data):G.texSubImage3D(Nt,H,Dt,ee,ve,ft,_t,Ct,ke,ce,Me):M.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,H,Dt,ee,ft,_t,ke,ce,Me.data):M.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,H,Dt,ee,Me.width,Me.height,ke,Me.data):G.texSubImage2D(G.TEXTURE_2D,H,Dt,ee,ft,_t,ke,ce,Me);G.pixelStorei(G.UNPACK_ROW_LENGTH,$e),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,fe),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,$n),G.pixelStorei(G.UNPACK_SKIP_IMAGES,He),H===0&&z.generateMipmaps&&G.generateMipmap(Nt),zt.unbindTexture()},this.copyTextureToTexture3D=function(M,z,Y=null,q=null,H=0){return M.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,M=arguments[2],z=arguments[3],H=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,z,Y,q,H)},this.initRenderTarget=function(M){Ft.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),zt.unbindTexture()},this.resetState=function(){D=0,F=0,N=null,zt.reset(),de.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Nr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ds=class extends di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Or=new V,Br=new V,mc=new Te,ws=new wr,fr=new ls,Do=new V,gc=new V,Ba=class extends Ye{constructor(t=new on,e=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Or.fromBufferAttribute(e,s-1),Br.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Br);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;mc.copy(s).invert(),ws.copy(t.ray).applyMatrix4(mc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let _=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let S=_,g=v-1;S<g;S+=c){let u=h.getX(S),I=h.getX(S+1),R=pr(this,t,ws,l,u,I);R&&e.push(R)}if(this.isLineLoop){let S=h.getX(v-1),g=h.getX(_),u=pr(this,t,ws,l,S,g);u&&e.push(u)}}else{let _=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let S=_,g=v-1;S<g;S+=c){let u=pr(this,t,ws,l,S,S+1);u&&e.push(u)}if(this.isLineLoop){let S=pr(this,t,ws,l,v-1,_);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Or.fromBufferAttribute(o,s),Br.fromBufferAttribute(o,r),e.distanceSqToSegment(Or,Br,Do,gc)>n)return;Do.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Do);if(!(l<t.near||l>t.far))return{distance:l,point:gc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var _c=new V,xc=new V,zr=class extends Ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_c.fromBufferAttribute(e,s),xc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_c.distanceTo(xc);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fi=class extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kr=class i extends on{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new V,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let _=n+d/e*s;c.x=t*Math.cos(_),c.y=t*Math.sin(_),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Us=class i extends on{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,f=new V,_=[],v=[],S=[],g=[];for(let u=0;u<=n;u++){let I=[],R=u/n,E=0;u===0&&o===0?E=.5/e:u===n&&l===Math.PI&&(E=-.5/e);for(let O=0;O<=e;O++){let D=O/e;d.x=-t*Math.cos(s+D*r)*Math.sin(o+R*a),d.y=t*Math.cos(o+R*a),d.z=t*Math.sin(s+D*r)*Math.sin(o+R*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),g.push(D+E,1-R),I.push(c++)}h.push(I)}for(let u=0;u<n;u++)for(let I=0;I<e;I++){let R=h[u][I+1],E=h[u][I],O=h[u+1][I],D=h[u+1][I+1];(u!==0||o>0)&&_.push(R,E,D),(u!==n-1||l<Math.PI)&&_.push(E,O,D)}this.setIndex(_),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(S,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fn=class extends di{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function mr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},za=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yl:r=t,a=2*e-n;break;case Ml:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yl:o=t,l=2*n-e;break;case Ml:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,_=this._weightNext,v=(n-e)/(s-e),S=v*v,g=S*v,u=-f*g+2*f*S-f*v,I=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*v+1,R=(-1-_)*g+(1.5+_)*S+.5*v,E=_*g-_*S;for(let O=0;O!==a;++O)r[O]=u*o[h+O]+I*o[c+O]+R*o[l+O]+E*o[d+O];return r}},ka=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ha=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Hm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,_=d+n;for(let v=0;v!==n;++v){let S=e[d+v];if(S!==e[f+v]||S!==e[_+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let _=0;_!==n;++_)e[f+_]=e[d+_]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ya;var Pi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Mr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Cn{};Va.prototype.ValueTypeName="color";var Ga=class extends Cn{};Ga.prototype.ValueTypeName="number";var Wa=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}},Hr=class extends Cn{InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Cn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Mr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Cn{};Xa.prototype.ValueTypeName="vector";var vc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},qa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let _=c[d],v=c[d+1];if(_.global&&(_.lastIndex=0),_.test(h))return v}return null}}},Vm=new qa,Ns=class{constructor(t){this.manager=t!==void 0?t:Vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ya=class extends Ns{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=vc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ps("img");function l(){h(),vc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Vr=class extends Ns{constructor(t){super(t)}load(t,e,n,s){let r=new rn,o=new Ya(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Fs=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Gr=class extends Fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Uo=new Te,yc=new V,Mc=new V,Wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sc=new Te,Ts=new V,No=new V,Za=class extends Wr{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ts),No.copy(n.position),No.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(No),n.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}},pi=class extends Fs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Za}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ja=class extends Wr{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Ja}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var al="\\[\\]\\.:\\/",Gm=new RegExp("["+al+"]","g"),ll="[^"+al+"]",Wm="[^"+al.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",ll),qm=/(WCOD+)?/.source.replace("WCOD",Wm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),Jm=new RegExp("^"+Xm+qm+Ym+Zm+"$"),$m=["material","materials","bones","map"],$a=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(t){let e=Jm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=$a;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ig=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);var Bs=class i extends _e{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new ze;let n=this,s=e.color!==void 0?new qt(e.color):new qt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new bn,d=new V,f=new V,_=new V,v=new Te,S=new V(0,0,-1),g=new ue,u=new V,I=new V,R=new ue,E=new Te,O=this.camera,D=new An(r,o,{samples:c,type:Di}),F=new mn({name:l.name!==void 0?l.name:"unspecified",uniforms:rl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});F.uniforms.tDiffuse.value=D.texture,F.uniforms.color.value=s,F.uniforms.textureMatrix.value=E,this.material=F,this.onBeforeRender=function(N,w,b){if(f.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(b.matrixWorld),v.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(v),u.subVectors(f,_),u.dot(d)>0)return;u.reflect(d).negate(),u.add(f),v.extractRotation(b.matrixWorld),S.set(0,0,-1),S.applyMatrix4(v),S.add(_),I.subVectors(f,S),I.reflect(d).negate(),I.add(f),O.position.copy(u),O.up.set(0,1,0),O.up.applyMatrix4(v),O.up.reflect(d),O.lookAt(I),O.far=b.far,O.updateMatrixWorld(),O.projectionMatrix.copy(b.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(O.projectionMatrix),E.multiply(O.matrixWorldInverse),E.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,f),h.applyMatrix4(O.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=O.projectionMatrix;R.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],R.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],R.z=-1,R.w=(1+L.elements[10])/L.elements[14],g.multiplyScalar(2/g.dot(R)),L.elements[2]=g.x,L.elements[6]=g.y,L.elements[10]=g.z+1-a,L.elements[14]=g.w,n.visible=!1;let tt=N.getRenderTarget(),Z=N.xr.enabled,K=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(D),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(w,O),N.xr.enabled=Z,N.shadowMap.autoUpdate=K,N.setRenderTarget(tt);let ot=b.viewport;ot!==void 0&&N.state.viewport(ot),n.visible=!0},this.getRenderTarget=function(){return D},this.dispose=function(){D.dispose(),n.material.dispose()}}};Bs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Jn=window.Q||(window.Q={}),yt=2,zs=1.45,Jr=.36,Ui=.55,Xc=3.4,qc=2.3,Qm={".":3.2,H:5.6,L:2.6},mi=-2.4,jm=1.3;function tg(i){return!i||i==="."?0:i>="0"&&i<="9"?(i.charCodeAt(0)-48)*.25:i==="x"?mi:-(i.charCodeAt(0)-96)*.25}var eg={rats:.62,zombie:1.85,skeleton:1.9,cultist:1.9,abbess:2.5,guard:1.95,prisoner:1.8,warden:2.4,drowned:1.9,watch:1.95,hanged:1.85,cutter:1.85,saltwight:1.9,overseer:2.35};function ng(i,t){let e=new Ur({antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.outputColorSpace=Ue,e.setClearColor(0),i.prepend(e.domElement),e.domElement.className="world",e.domElement.addEventListener("webglcontextlost",m=>{m.preventDefault()}),e.domElement.addEventListener("webglcontextrestored",()=>{t.onContextRestored&&t.onContextRestored()});let n=new Fr;n.fog=new Nr(0,2,16);let s=new ze(70,4/3,.05,60);s.rotation.order="YXZ",n.add(s);let r=new Gr(5919558,657414,.5);n.add(r);let o=new Xr(14471851,0);o.position.set(0,16.8,24.9),n.add(o);let a=new pi(16771010,13,18,1.15);a.position.set(.2,.25,.9),s.add(a);let l=new Vr,c={},h=new Map;function d(){for(let[m,p]of h){let y=new Image;y.onload=()=>{h.has(m)&&(h.delete(m),m.image=y,m.needsUpdate=!0,Ut=!0)},y.src=p}}window.addEventListener("online",d),document.addEventListener("visibilitychange",()=>{document.hidden||d()}),setInterval(()=>{h.size&&d()},5e3);function f(m,p=!0){if(c[m])return c[m];let y=Jn.assetUrl(m),A=l.load(y,()=>{Ut=!0},void 0,()=>h.set(A,y));return A.colorSpace=Ue,p&&(A.wrapS=rs,A.wrapT=rs),A.anisotropy=e.capabilities.getMaxAnisotropy(),c[m]=A,A}function _(m,p,y){if(c[m])return c[m];let A=document.createElement("canvas"),P=new fi(A);P.colorSpace=Ue;let k=new Image;k.onload=()=>{A.width=k.naturalWidth,A.height=k.naturalHeight;let ct=A.getContext("2d");ct.drawImage(k,0,0),y(ct,A.width,A.height),P.needsUpdate=!0,Ut=!0};let Q=0;return k.onerror=()=>{Q+=1,setTimeout(()=>{k.src=Jn.assetUrl(p)},Math.min(3e4,2e3*Q))},k.src=Jn.assetUrl(p),c[m]=P,P}let v=(m,p={})=>new Fn({map:m,...p}),S={pit:new Rn({color:0}),abyss:new Rn({color:2754324,fog:!1})},g={value:-99};function u(m){return m.onBeforeCompile=p=>{p.uniforms.waterY=g,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying float vWorldY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
uniform float waterY;
varying float vWorldY;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
          float above = vWorldY - waterY;
          float wet = 1.0 - smoothstep(0.0, 0.32, above);
          gl_FragColor.rgb *= 1.0 - 0.5 * wet * step(-0.02, above);
          gl_FragColor.rgb += vec3(0.5, 0.47, 0.4) * exp(-pow(above / 0.018, 2.0)) * 0.35;`)},m}let I=m=>/^(facade|front)-/.test(m);function R(m,p){if(!S[m]){let y=I(m);S[m]=u(v(f(m,!/door/.test(m)&&!y),y?{...p,alphaTest:.5}:p))}return S[m]}let E={walls:[["wall-stone",6],["wall-ossuary",3],["wall-relief",1]],riser:"wall-stone",floor:"floor",ceiling:"ceiling",door:"door",sky:5919558,ground:657414,fog:0,ceilingTint:9076848,water:.32,waterTint:723206},O=E,D={dawn:{fog:6048589,sky:13808298,ground:3024416,hemi:1.45,moon:.5,near:9,far:56,lamps:.4,torch:.75,dome:.85,tint:16038310},day:{fog:6711920,sky:13685464,ground:3880751,hemi:1.75,moon:.45,near:10,far:62,lamps:0,torch:.5,dome:1,tint:16777215},dusk:{fog:4862249,sky:12618354,ground:2431765,hemi:1.3,moon:.55,near:8,far:50,lamps:.9,torch:1,dome:.78,tint:15043160}},F="night",N={};function w(){let m={fog:O.fog,sky:O.sky,ground:O.ground,hemi:O.hemi||.5,moon:O.outdoor?O.moon||.7:0,near:O.fogNear||2,far:O.fogFar||16,lamps:1,torch:1,dome:0,tint:16777215};return O.outdoor&&D[F]?D[F]:m}let b=["fog","sky","ground","tint"],L={},tt=m=>L[m]||(L[m]=new qt(m));function Z(m,p){let y=w(),A=p?1:Math.min(1,m*.7);for(let[P,k]of Object.entries(y))b.includes(P)?!N[P]||p?N[P]=tt(k).clone():N[P].lerp(tt(k),A):N[P]=N[P]===void 0||p?k:N[P]+(k-N[P])*A;n.fog.color.copy(N.fog),e.setClearColor(N.fog),r.color.copy(N.sky),r.groundColor.copy(N.ground),r.intensity=N.hemi,o.intensity=N.moon,On||(n.fog.near=N.near,n.fog.far=N.far),Wt&&(Wt.material.opacity=N.dome,Wt.material.color.copy(N.tint),Wt.visible=N.dome>.01),mt.glass&&mt.glass.color.setHex(4866612).lerp(St,Math.min(1,N.lamps*1.4))}let K={},ot=m=>K[m]||null,j=m=>m==="#"||!!(K[m]&&(K[m].front||K[m].prop)),ut=new Proxy({},{get(m,p){return p in S?S[p]:p==="floor"?R(O.floor):p==="ceiling"?R(O.ceiling,{color:O.ceilingTint}):p==="door"?R(O.door):p==="riser"?R(O.riser,O.wallTint?{color:O.wallTint}:void 0):R(p,O.wallTint?{color:O.wallTint}:void 0)}}),U=null,C={x:0,z:0,a:0,pitch:0,y:zs,vy:0,phase:0,moving:0,safe:{x:0,z:0},cell:null},xt=!0,Ut=!0,Zt=!1,pe=performance.now(),et=0,X=m=>Math.floor(m/yt),wt=(m,p)=>U.grid[p]&&U.grid[p][m]||"#",at=(m,p)=>U.h[p]&&U.h[p][m]!==void 0?U.h[p][m]:0,Vt=(m,p)=>U.c[p]&&U.c[p][m]!==void 0?U.c[p][m]:3.2,Gt=(m,p)=>U.doors.get(m+","+p);function Bt(m,p){let y=wt(m,p);if(j(y))return!0;let A=Gt(m,p);return!!A&&A.open<.8}let we=(m,p)=>(O.zones||[]).find(y=>y.rect?m>=y.rect[0]&&m<=y.rect[2]&&p>=y.rect[1]&&p<=y.rect[3]:p>=y.rows[0]&&p<=y.rows[1]);function ie(m,p){let y=we(m,p),A=y&&y.walls?y.walls:O.walls,P=A.reduce((Q,[,ct])=>Q+ct,0),k=((m*7+p*13)%P+P)%P;for(let[Q,ct]of A){if(k<ct)return Q;k-=ct}return A[0][0]}function ye(m){let p=new Set([...Object.values(S),...Object.values(mt)]);m.traverse(y=>{if(y.geometry&&y.geometry.dispose(),y.material)for(let A of[].concat(y.material))p.has(A)||A.dispose()})}function G(m){U&&n.remove(U.root),ht&&(ht.mesh.dispose(),ht=null),U&&ye(U.root),O={...E,...m.theme||{}},K=m.uses||{};let p=!!O.outdoor,y=m.grid,A=y.length,P=y[0].length,k=m.heights.map(it=>[...it].map(tg)),Q=m.ceil.map((it,$)=>[...it].map((gt,At)=>p?k[$][At]+(gt==="L"?1.1:(O.wallHeight||5.2)*(gt==="H"?1.35:1)):Math.max(Qm[gt]||3.2,k[$][At]+2.4)));U={grid:y,h:k,c:Q,W:P,H:A,root:new nn,doors:new Map,items:new Map,groups:[],lights:[],lamps:[],lampLights:null},n.add(U.root);let ct={},pt=(it,$,gt,At,Ot,ne)=>{let ge=ct[it]||(ct[it]={pos:[],uv:[],idx:[]}),Le=ge.pos.length/3;ge.pos.push(...$,...gt,...At,...Ot),ge.uv.push(...ne),ge.idx.push(Le,Le+1,Le+2,Le,Le+2,Le+3)},Tt=[{dx:0,dy:-1,p:(it,$)=>[[it,$],[it+1,$]]},{dx:1,dy:0,p:(it,$)=>[[it+1,$],[it+1,$+1]]},{dx:0,dy:1,p:(it,$)=>[[it+1,$+1],[it,$+1]]},{dx:-1,dy:0,p:(it,$)=>[[it,$+1],[it,$]]}],It=(it,$,gt,At,Ot,ne,ge)=>{if(ne-Ot<.01)return;let[[Le,Kt],[te,Ne]]=$.p(gt,At),Qe=[Le*yt,Ot,Kt*yt],je=[te*yt,Ot,Ne*yt],jn=[te*yt,ne,Ne*yt],_s=[Le*yt,ne,Kt*yt],xs=ge?0:Ot/2,vs=ge?1:ne/2;pt(it,Qe,je,jn,_s,[0,xs,1,xs,1,vs,0,vs])};for(let it=0;it<A;it++)for(let $=0;$<P;$++){let gt=y[it][$];if(gt==="#"||K[gt]&&K[gt].front)continue;let At=k[it][$],Ot=Q[it][$],ne=$*yt,ge=($+1)*yt,Le=it*yt,Kt=(it+1)*yt,te=we($,it);gt===">"?lt($,it,At):pt(At<=mi+.01?"abyss":te&&te.floor||"floor",[ne,At,Kt],[ge,At,Kt],[ge,At,Le],[ne,At,Le],[$,-(it+1),$+1,-(it+1),$+1,-it,$,-it]),p||pt(te&&te.ceiling||"ceiling",[ne,Ot,Le],[ge,Ot,Le],[ge,Ot,Kt],[ne,Ot,Kt],[$,it,$+1,it,$+1,it+1,$,it+1]);for(let Ne of Tt){let Qe=$+Ne.dx,je=it+Ne.dy,jn=y[je]&&y[je][Qe]||"#",_s=K[jn]&&K[jn].front;if(jn==="#"||_s){let pl=_s||ie(Qe,je);p&&Ot-At>2?It(pl,Ne,$,it,At,Ot,I(pl)):It(p?"riser":_s||ie(Qe,je),Ne,$,it,At,Ot);continue}let xs=k[je][Qe],vs=Q[je][Qe],fl=te&&te.riser||"riser";xs>At&&It(fl,Ne,$,it,At,xs),!p&&vs<Ot&&It(fl,Ne,$,it,vs,Ot)}(gt==="D"||gt==="C"||gt==="J")&&st($,it,At,Ot,gt!=="D"),(gt==="G"&&!p||gt==="<")&&nt($,it,At)}for(let[it,$]of Object.entries(ct)){let gt=new on;gt.setAttribute("position",new Ie($.pos,3)),gt.setAttribute("uv",new Ie($.uv,2)),gt.setIndex($.idx),gt.computeVertexNormals(),U.root.add(new _e(gt,ut[it]))}for(let it=0;it<A;it++)for(let $=0;$<P;$++)fs($,it);H(),$t(),be(),x(),Z(0,!0),Ut=!0}let Ce=null;function se(){let m="sky:"+O.fog;if(c[m])return c[m];let p=2048,y=1024,A=document.createElement("canvas");A.width=p,A.height=y;let P=A.getContext("2d"),k="#"+new qt(O.fog).getHexString(),Q=P.createLinearGradient(0,0,0,y/2);Q.addColorStop(0,"#030406"),Q.addColorStop(.6,"#0a0c0f"),Q.addColorStop(1,k),P.fillStyle=Q,P.fillRect(0,0,p,y/2),Q=P.createLinearGradient(0,y/2,0,y),Q.addColorStop(0,k),Q.addColorStop(.06,"#0a0c0d"),Q.addColorStop(1,"#020303"),P.fillStyle=Q,P.fillRect(0,y/2,p,y/2);for(let $=0;$<1500;$++){let gt=Math.pow(Math.random(),1.5)*y*.45,At=(1-gt/(y*.45))*(.2+Math.random()*.8);P.fillStyle=`rgba(235,228,208,${At.toFixed(2)})`;let Ot=Math.random()<.04?2:1;P.fillRect(Math.random()*p,gt,Ot,Ot)}for(let $=0;$<80;$++){let gt=Math.random()*p,At=y*(.28+Math.random()*.2),Ot=60+Math.random()*170,ne=P.createRadialGradient(gt,At,0,gt,At,Ot);ne.addColorStop(0,"rgba(5,6,8,0.6)"),ne.addColorStop(1,"rgba(5,6,8,0)"),P.fillStyle=ne,P.beginPath(),P.ellipse(gt,At,Ot*1.9,Ot*.42,0,0,Math.PI*2),P.fill()}let ct=p*.25,pt=y*.31;P.save(),P.translate(ct,pt),P.rotate(-.42),P.globalCompositeOperation="lighter";let Tt=P.createLinearGradient(0,0,-520,0);Tt.addColorStop(0,"rgba(255,236,140,0.32)"),Tt.addColorStop(.25,"rgba(255,225,26,0.12)"),Tt.addColorStop(.65,"rgba(255,61,139,0.05)"),Tt.addColorStop(1,"rgba(255,61,139,0)"),P.fillStyle=Tt,P.filter="blur(10px)",P.beginPath(),P.moveTo(6,0),P.quadraticCurveTo(-240,-14,-520,-110),P.lineTo(-520,60),P.quadraticCurveTo(-240,22,6,0),P.fill(),P.filter="none";for(let $=0;$<26;$++){let gt=200+Math.random()*300,At=-100+Math.random()*150,Ot=P.createLinearGradient(0,0,-gt,At*(gt/520));Ot.addColorStop(0,"rgba(255,240,170,0.06)"),Ot.addColorStop(1,"rgba(255,61,139,0)"),P.strokeStyle=Ot,P.lineWidth=1+Math.random()*2,P.beginPath(),P.moveTo(0,0),P.quadraticCurveTo(-gt*.5,At*.1,-gt,At*(gt/520)),P.stroke()}P.restore();let It=P.createRadialGradient(ct,pt,0,ct,pt,40);It.addColorStop(0,"rgba(255,255,240,1)"),It.addColorStop(.12,"rgba(255,242,150,0.9)"),It.addColorStop(.4,"rgba(255,225,26,0.18)"),It.addColorStop(1,"rgba(255,225,26,0)"),P.fillStyle=It,P.fillRect(ct-40,pt-40,80,80);for(let $=0;$<110;$++){let gt=y/2+3+Math.pow(Math.random(),2)*y*.2,At=ct+(Math.random()-.5)*(16+(gt-y/2)*.6);P.fillStyle=`rgba(255,225,26,${(.55*Math.random()*(1-(gt-y/2)/(y*.2))).toFixed(2)})`,P.fillRect(At,gt,6+Math.random()*16,1.5)}let it=new fi(A);return it.colorSpace=Ue,c[m]=it,it}let Wt=null;function zt(){if(c.daySky)return c.daySky;let m=1024,p=512,y=document.createElement("canvas");y.width=m,y.height=p;let A=y.getContext("2d"),P=A.createLinearGradient(0,0,0,p/2);P.addColorStop(0,"#3e4146"),P.addColorStop(.55,"#5c6066"),P.addColorStop(1,"#6a6e74"),A.fillStyle=P,A.fillRect(0,0,m,p/2),P=A.createLinearGradient(0,p/2,0,p),P.addColorStop(0,"#6a6e74"),P.addColorStop(.05,"#3c4044"),P.addColorStop(1,"#22252a"),A.fillStyle=P,A.fillRect(0,p/2,m,p/2);for(let It=0;It<140;It++){let it=Math.random()*m,$=p*(.05+Math.pow(Math.random(),.7)*.42),gt=30+Math.random()*110,At=Math.random()<.55,Ot=A.createRadialGradient(it,$,0,it,$,gt);Ot.addColorStop(0,At?"rgba(40,42,46,0.35)":"rgba(140,144,150,0.22)"),Ot.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=Ot,A.beginPath(),A.ellipse(it,$,gt*2.2,gt*.45,0,0,Math.PI*2),A.fill()}let k=m*.25,Q=p*.31;A.save(),A.translate(k,Q),A.rotate(-.42),A.filter="blur(6px)";let ct=A.createLinearGradient(0,0,-260,0);ct.addColorStop(0,"rgba(230,226,200,0.32)"),ct.addColorStop(1,"rgba(230,226,200,0)"),A.fillStyle=ct,A.beginPath(),A.moveTo(3,0),A.quadraticCurveTo(-120,-7,-260,-55),A.lineTo(-260,30),A.quadraticCurveTo(-120,11,3,0),A.fill(),A.restore();let pt=A.createRadialGradient(k,Q,0,k,Q,14);pt.addColorStop(0,"rgba(245,242,225,0.8)"),pt.addColorStop(1,"rgba(245,242,225,0)"),A.fillStyle=pt,A.fillRect(k-14,Q-14,28,28);let Tt=new fi(y);return Tt.colorSpace=Ue,c.daySky=Tt,Tt}function be(){Ce&&(n.remove(Ce),ye(Ce),Ce=null),Wt&&(n.remove(Wt),ye(Wt),Wt=null),O.outdoor&&(Ce=new _e(new Us(45,48,24),new Rn({map:se(),side:Ve,fog:!1,depthWrite:!1})),Ce.renderOrder=-2,n.add(Ce),Wt=new _e(new Us(44,48,24),new Rn({map:zt(),side:Ve,fog:!1,depthWrite:!1,transparent:!0,opacity:0})),Wt.renderOrder=-1,n.add(Wt))}let Ft=null;function T(m,p){m.x=C.x+(Math.random()-.5)*26,m.z=C.z+(Math.random()-.5)*26,m.y=C.y+(p?Math.random()*11-3:6+Math.random()*4)}function x(){if(Ft=null,!O.rain)return;let m=1100,p=new Float32Array(m*6),y=Array.from({length:m},()=>({x:0,y:0,z:0,v:9+Math.random()*4}));y.forEach(k=>T(k,!0));let A=new on;A.setAttribute("position",new sn(p,3));let P=new zr(A,new Ds({color:10725549,transparent:!0,opacity:.3,depthWrite:!1}));P.frustumCulled=!1,U.root.add(P),Ft={mesh:P,drops:y,pos:p}}function W(m){if(!Ft)return;let{drops:p,pos:y}=Ft,A=1.3,P=ht?ht.y:-99;for(let k=0;k<p.length;k++){let Q=p[k];Q.y-=Q.v*m,Q.x+=A*m,(Q.y<Math.max(at(X(Q.x),X(Q.z)),P)||Math.abs(Q.x-C.x)>13||Math.abs(Q.z-C.z)>13)&&T(Q,!1);let ct=k*6;y[ct]=Q.x,y[ct+1]=Q.y,y[ct+2]=Q.z,y[ct+3]=Q.x-A*.05,y[ct+4]=Q.y+.36,y[ct+5]=Q.z}Ft.mesh.geometry.attributes.position.needsUpdate=!0}function st(m,p,y,A,P){let k=Bt(m-1,p)&&Bt(m+1,p),Q=Math.min(A-y,3),ct=new Je(yt,Q,.22),pt=new _e(ct,ut.door);pt.position.set((m+.5)*yt,y+Q/2,(p+.5)*yt),k||(pt.rotation.y=Math.PI/2),U.root.add(pt),U.doors.set(m+","+p,{mesh:pt,open:0,opening:!1,base:y+Q/2,height:Q,locked:!!P,tile:wt(m,p),asked:0})}function lt(m,p,y){let A=new nn,P=6;for(let Q=0;Q<P;Q++){let ct=yt/P,pt=new _e(new Je(yt*.8,.22,ct),ut.riser);pt.position.set((m+.5)*yt,y-.11-Q*.28,p*yt+ct*(Q+.5)),A.add(pt)}let k=new _e(new Zn(yt,yt),ut.pit);k.rotation.x=-Math.PI/2,k.position.set((m+.5)*yt,y-1.9,(p+.5)*yt),A.add(k),U.root.add(A)}function nt(m,p,y){let A=new pi(16769306,5,7,1.2);A.position.set((m+.5)*yt,y+2.4,(p+.5)*yt),U.root.add(A);let P=new _e(new kr(yt*.42,24),new Rn({color:16769306,transparent:!0,opacity:.18,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.set((m+.5)*yt,Math.max(y,Pt?O.water||0:-99)+.03,(p+.5)*yt),U.root.add(P)}let Pt=!0,ht=null,Et=12,re=Array.from({length:Et},()=>new ue(0,0,-100,0)),dt=0,Rt=performance.now(),kt=()=>(performance.now()-Rt)/1e3;function Ht(m,p,y=1){ht&&re[dt++%Et].set(m,p,kt(),y)}let bt=(m,p)=>ht?Math.max(0,ht.y-at(m,p)):0,oe={name:"FloodShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},time:{value:0},lightPos:{value:new V},lightPower:{value:1},fogColor:{value:new qt},fogNear:{value:2},fogFar:{value:16},tint:{value:new qt},ripples:{value:[]}},vertexShader:`
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
      uniform vec4 ripples[${Et}];
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
        for (int i = 0; i < ${Et}; i++) {
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
      }`};function $t(){ht&&(ht.mesh.dispose(),U.root.remove(ht.mesh),ye(ht.mesh),ht=null),g.value=-99;let m=O.water||0;if(!Pt||m<=-10)return;let{W:p,H:y,grid:A,h:P}=U,k=O.sea?26:0,Q=(Kt,te)=>k&&te>=y-1&&(te>=y||Kt<0||Kt>=p||A[te][Kt]==="#"),ct=Kt=>Kt==="#"||!!(K[Kt]&&K[Kt].front),pt=(Kt,te)=>Q(Kt,te)||A[te]&&A[te][Kt]&&!ct(A[te][Kt])&&P[te][Kt]<m,Tt=(Kt,te)=>{let Ne=0;for(let[Qe,je]of[[Kt-1,te-1],[Kt,te-1],[Kt-1,te],[Kt,te]])pt(Qe,je)&&(Ne=Math.max(Ne,Q(Qe,je)?3:m-P[je][Qe]));return Ne},It=[],it=[],$=[],gt=new Map,At=(Kt,te)=>{let Ne=Kt+","+te;return gt.has(Ne)||(gt.set(Ne,It.length/3),It.push(Kt*yt,-te*yt,0),it.push(Tt(Kt,te))),gt.get(Ne)};for(let Kt=0;Kt<y+k;Kt++)for(let te=-k;te<p+k;te++){if(!pt(te,Kt))continue;let Ne=At(te,Kt),Qe=At(te+1,Kt),je=At(te+1,Kt+1),jn=At(te,Kt+1);$.push(Ne,jn,Qe,Qe,jn,je)}if(!$.length)return;let Ot=new on;Ot.setAttribute("position",new Ie(It,3)),Ot.setAttribute("depth",new Ie(it,1)),Ot.setIndex($);let ne=new ae;e.getDrawingBufferSize(ne);let ge=new Bs(Ot,{shader:oe,clipBias:.003,multisample:0,textureWidth:Math.max(256,Math.round(ne.x*.5)),textureHeight:Math.max(256,Math.round(ne.y*.5))});ge.rotation.x=-Math.PI/2,ge.position.y=m,g.value=m,ge.material.transparent=!0,ge.material.depthWrite=!1;let Le=ge.material.uniforms;Le.ripples.value=re,Le.tint.value.setHex(O.waterTint||723206),U.root.add(ge),ht={mesh:ge,y:m}}let de=1,B=new V;function Mt(m){if(!ht)return;let p=ht.mesh.material.uniforms;if(p.time.value=kt(),a.getWorldPosition(B),p.lightPos.value.copy(B),p.lightPower.value=a.intensity/13,p.fogColor.value.copy(n.fog.color),p.fogNear.value=n.fog.near,p.fogFar.value=n.fog.far,de-=m,de<=0&&O.rain){de=.04+Math.random()*.08;let y=C.x+(Math.random()-.5)*10,A=C.z+(Math.random()-.5)*10;bt(X(y),X(A))>0&&!Bt(X(y),X(A))&&Ht(y,A,.3)}else if(de<=0){de=.7+Math.random()*2.2;for(let y=0;y<6;y++){let A=C.x+(Math.random()-.5)*9,P=C.z+(Math.random()-.5)*9;if(bt(X(A),X(P))>0&&!Bt(X(A),X(P))){Ht(A,P,.55);let k=A-C.x,Q=P-C.z,ct=Math.hypot(k,Q)||1;t.onDrip&&t.onDrip((k*-Math.sin(C.a)+Q*Math.cos(C.a))/ct,ct/yt);break}}}}function J(m,p,y,A=1){let P=new Zn(p,y,A,A>1?6:1);P.translate(0,y/2,0),A>1&&(P.userData.base=P.attributes.position.array.slice());let k=new Fn({map:m,transparent:!0,alphaTest:.4,side:En,emissive:7235160,emissiveMap:m}),Q=new _e(P,k);return Q.userData.billboard=!0,Q}function rt(m){let p=K[m];return p&&p.prop&&p.prop.art&&!p.prop.posts?[f(p.prop.art,!1),p.prop.h*(p.prop.aspect||2/3),p.prop.h]:p?null:m==="L"?[f("remains",!1),1.3,.98]:m==="S"?[_("remains+scroll","remains-scroll",(y,A,P)=>{y.save(),y.translate(A*.66,P*.72),y.rotate(-.3),y.fillStyle="#ffe11a",y.strokeStyle="#0a0a08",y.lineWidth=5,y.fillRect(-A*.12,-P*.05,A*.24,P*.1),y.strokeRect(-A*.12,-P*.05,A*.24,P*.1),y.restore()}),1.3,.98]:m==="F"?[_("font+water","font",(y,A,P)=>{y.globalCompositeOperation="source-atop",y.fillStyle="rgba(255,61,139,0.75)",y.beginPath(),y.ellipse(A/2,P*.14,A*.34,P*.07,0,0,Math.PI*2),y.fill()}),.9,1.2]:m==="f"?[f("font",!1),.9,1.2]:m==="R"?[f("relic",!1),.8,1.1]:m==="K"?[f("remains",!1),.9,.68]:null}let mt={},St=new qt(16765770);function Jt(m,p){mt.post||(mt.post=new Fn({color:1841686}),mt.glass=new Rn({color:St.clone()}));let y=new nn,A=new _e(new Je(.12,3.1,.12),mt.post);A.position.y=1.55;let P=new _e(new Je(.5,.08,.08),mt.post);P.position.set(.22,3.05,0);let k=new _e(new Je(.26,.36,.26),mt.glass);return k.position.set(.42,2.8,0),y.add(A,P,k),U.lamps.push(new V((m+.5)*yt+.42,at(m,p)+2.7,(p+.5)*yt)),y}let Ae=5,Pe=0;function me(m){if(!U.lamps.length||(U.lampLights||(U.lampLights=Array.from({length:Ae},()=>{let y=new pi(16763242,0,9,1.25);return U.root.add(y),y}),Pe=0),Pe-=m,Pe>0&&Math.abs((N.lamps||0)-(U.lampsAt||0))<.02))return;U.lampsAt=N.lamps,Pe=.3;let p=U.lamps.map(y=>[y,Math.hypot(y.x-C.x,y.z-C.z)]).sort((y,A)=>y[1]-A[1]);U.lampLights.forEach((y,A)=>{let P=p[A];if(!P){y.intensity=0;return}y.position.copy(P[0]),y.intensity=7*(N.lamps===void 0?1:N.lamps)})}function an(m){mt.wood||(mt.wood=new Fn({color:3813671}));let p=new nn,y=m.prop.h*(m.prop.aspect||.75);for(let k of[-y/2-.05,y/2+.05]){let Q=new _e(new Je(.12,2.5,.12),mt.wood);Q.position.set(k,1.25,-.06),p.add(Q)}let A=new _e(new Je(y+.22,m.prop.h+.2,.08),mt.wood);A.position.set(0,.9+m.prop.h/2,-.06),p.add(A);let P=new _e(new Zn(y,m.prop.h),new Fn({map:f(m.prop.art,!1),transparent:!0,alphaTest:.4,emissive:3814700,emissiveMap:f(m.prop.art,!1)}));return P.position.set(0,.9+m.prop.h/2,0),p.add(P),p.rotation.y=m.prop.face||0,p}function gn(){if(c.__rags)return c.__rags;let m=document.createElement("canvas");m.width=m.height=128;let p=m.getContext("2d");for(let A=0;A<26;A++){let P=30+Math.random()*68,k=30+Math.random()*68,Q=8+Math.random()*18;p.fillStyle=["#2a241d","#3b3329","#1a1612","#4a4034"][A%4],p.beginPath(),p.ellipse(P,k,Q,Q*.6,Math.random()*3,0,Math.PI*2),p.fill()}let y=new fi(m);return y.colorSpace=Ue,c.__rags=y,y}function ks(){if(c.__grate)return c.__grate;let m=document.createElement("canvas");m.width=m.height=128;let p=m.getContext("2d");p.fillStyle="#2b2722",p.beginPath(),p.arc(64,64,60,0,Math.PI*2),p.fill(),p.fillStyle="#050505",p.beginPath(),p.arc(64,64,50,0,Math.PI*2),p.fill(),p.fillStyle="#3d3830";for(let A=-4;A<=4;A++)p.fillRect(64+A*11-3,16,6,96);p.fillRect(16,61,96,6);let y=new fi(m);return y.colorSpace=Ue,c.__grate=y,y}function fs(m,p){let y=m+","+p,A=U.items.get(y);A&&(U.root.remove(A),ye(A),U.items.delete(y));let P=wt(m,p),k=K[P];if(k&&(k.decal||k.prop&&(k.prop.lamp||k.prop.posts))){let $;k.prop&&k.prop.posts?($=an(k),$.position.set((m+.5)*yt,at(m,p),(p+.5)*yt)):k.decal?($=new _e(new Zn(yt*.82,yt*.82),new Fn({map:k.decal==="rags"?gn():ks(),transparent:!0,alphaTest:.1})),$.rotation.x=-Math.PI/2,$.position.set((m+.5)*yt,at(m,p)+.02,(p+.5)*yt)):($=Jt(m,p),$.position.set((m+.5)*yt,at(m,p),(p+.5)*yt)),U.root.add($),U.items.set(y,$);return}let Q=rt(P);if(!Q)return;let[ct,pt,Tt]=Q,It=new nn,it=J(ct,pt,Tt);if(It.add(it),It.position.set((m+.5)*yt,at(m,p),(p+.5)*yt),P==="F"||P==="R"){let $=new pi(P==="F"?16727435:16769306,3.5,6,1.3);$.position.y=1.1,It.add($)}if(k&&k.prop&&k.prop.glow&&it.material.emissive.setHex(k.prop.glow),k&&k.prop&&k.prop.light){let $=k.prop.light,gt=new pi($.color,$.power||4,$.range||9,1.2);gt.position.set(0,Tt*($.at||.5),.6),It.add(gt)}U.root.add(It),U.items.set(y,It)}function In(m){let p=new nn;m.members.forEach((y,A)=>{let P=Jn.MONSTERS[y.key],k=P.kind,Q=eg[k]||1.9,ct=f(P.art||k,!1),pt=k==="rats"?4/3:2/3,Tt=J(ct,Q*pt,Q,4);Tt.userData.slot=A,Tt.userData.kind=k,Tt.userData.size=[Q*pt,Q],p.add(Tt)}),p.position.set(m.x,0,m.z),U.root.add(p),U.groups.push({group:m,mesh:p,wander:null,path:null,think:0,step:Math.random()*6,idle:Math.random()*2,frame:-1,voice:2+Math.random()*3})}let xe=new Set,_n={x:0,y:0},dn={dx:0,dy:0,dxLast:0},Pn=0;function Ni(m,p,y){let A=X(m-Jr),P=X(m+Jr),k=X(p-Jr),Q=X(p+Jr);for(let ct=k;ct<=Q;ct++)for(let pt=A;pt<=P;pt++){if(Bt(pt,ct))return{cx:pt,cy:ct,door:!!Gt(pt,ct),use:!!ot(wt(pt,ct))};if(at(pt,ct)-y>Ui&&!ft(X(C.x),X(C.z),pt,ct))return{cx:pt,cy:ct,ledge:!0}}return null}let Ge="free",le={active:!1},fn=[],$r=.3,Kr=.22,Qr=m=>m*m*(3-2*m);function M(){C.x=(X(C.x)+.5)*yt,C.z=(X(C.z)+.5)*yt,C.a=Math.round(C.a/(Math.PI/2))*(Math.PI/2),C.pitch=0,le.active=!1,fn.length=0}function z(){return xe.has("w")||xe.has("arrowup")?"f":xe.has("s")||xe.has("arrowdown")?"b":xe.has("a")?"l":xe.has("d")?"r":xe.has("q")||xe.has("arrowleft")?"tl":xe.has("e")||xe.has("arrowright")?"tr":null}function Y(m){if(le.active){le.t=Math.min(1,le.t+m/le.dur);let it=Qr(le.t);if(C.x=le.x0+(le.x1-le.x0)*it,C.z=le.z0+(le.z1-le.z0)*it,C.a=le.a0+(le.a1-le.a0)*it,le.walk){let $=Math.floor(C.phase/Math.PI);C.phase=le.phase0+Math.PI*it,Math.floor(C.phase/Math.PI)!==$&&Yt()}C.moving=le.walk?1:0,Pn=le.walk?0:(le.a1-le.a0)/le.dur,le.t>=1&&(le.active=!1);return}C.moving=0,Pn=0;let p=fn.shift()||z();if(!p)return;let y=(it,$,gt,At)=>Object.assign(le,{active:!0,t:0,dur:At?$r*(bt(X(C.x),X(C.z))>.15?1.2:1):Kr,walk:At,x0:C.x,z0:C.z,a0:C.a,x1:it,z1:$,a1:gt,phase0:Math.round(C.phase/Math.PI)*Math.PI+.01});if(p==="tl"||p==="tr"){y(C.x,C.z,C.a+(p==="tl"?-1:1)*Math.PI/2,!1);return}let A=Math.round(Math.cos(C.a)),P=Math.round(Math.sin(C.a)),[k,Q]={f:[A,P],b:[-A,-P],r:[-P,A],l:[P,-A]}[p],ct=X(C.x),pt=X(C.z),Tt=ct+k,It=pt+Q;if(Bt(Tt,It)){Gt(Tt,It)?$e({cx:Tt,cy:It,door:!0},p==="f"):ot(wt(Tt,It))?$e({cx:Tt,cy:It,use:!0},p==="f"):t.onBump&&t.onBump();return}if(at(Tt,It)-at(ct,pt)>Ui&&!ft(ct,pt,Tt,It)){t.onBump&&t.onBump();return}y((Tt+.5)*yt,(It+.5)*yt,C.a,!0)}let q=(m,p)=>U.h[p]!==void 0&&U.h[p][m]!==void 0&&U.h[p][m]<=mi+.01;function H(){U.ladders=new Map;let m=new Set,p=new Fn({color:3878692});for(let y=0;y<U.H;y++)for(let A=0;A<U.W;A++){if(!q(A,y)||m.has(A+","+y))continue;let P=[[A,y]];m.add(A+","+y);for(let it=0;it<P.length;it++)for(let[$,gt]of[[1,0],[-1,0],[0,1],[0,-1]]){let At=P[it][0]+$,Ot=P[it][1]+gt;q(At,Ot)&&!m.has(At+","+Ot)&&(m.add(At+","+Ot),P.push([At,Ot]))}let k=null;for(let[it,$]of P)for(let[gt,At]of[[0,-1],[-1,0],[1,0],[0,1]]){let Ot=it+gt,ne=$+At;!k&&Ot>=0&&ne>=0&&Ot<U.W&&ne<U.H&&!Bt(Ot,ne)&&!q(Ot,ne)&&(k={px:it,py:$,tx:Ot,ty:ne,dx:gt,dy:At})}if(!k)continue;U.ladders.set(k.px+","+k.py,[k.tx,k.ty]);let Q=new nn,ct=mi,pt=at(k.tx,k.ty)+.35,Tt=pt-ct,It=new V(-k.dy,0,k.dx);for(let it of[-.32,.32]){let $=new _e(new Je(.07,Tt,.07),p);$.position.set(It.x*it,ct+Tt/2,It.z*it),Q.add($)}for(let it=ct+.3;it<pt-.1;it+=.34){let $=new _e(new Je(Math.abs(It.x)*.64+.05,.05,Math.abs(It.z)*.64+.05),p);$.position.set(0,it,0),Q.add($)}Q.position.set((k.px+.5+k.dx*.45)*yt,0,(k.py+.5+k.dy*.45)*yt),U.root.add(Q)}}let ft=(m,p,y,A)=>{let P=U.ladders&&U.ladders.get(m+","+p);return!!P&&P[0]===y&&P[1]===A},_t=document.createElement("div");_t.className="step-pad",_t.hidden=!0,_t.innerHTML=[["tl","\u21B6","Turn left"],["f","\u25B2","Step forward"],["tr","\u21B7","Turn right"],["l","\u25C0","Step left"],["b","\u25BC","Step back"],["r","\u25B6","Step right"]].map(([m,p,y])=>`<button type="button" data-k="${m}" aria-label="${y}">${p}</button>`).join(""),i.appendChild(_t);let Ct=new Map;_t.addEventListener("pointerdown",m=>{let p=m.target.closest("button");!p||xt||(m.preventDefault(),fn.length<2&&fn.push(p.dataset.k),Ct.set(m.pointerId,setInterval(()=>{!xt&&!le.active&&!fn.length&&fn.push(p.dataset.k)},60)))});let Lt=m=>{clearInterval(Ct.get(m.pointerId)),Ct.delete(m.pointerId)};["pointerup","pointercancel","pointerleave"].forEach(m=>_t.addEventListener(m,Lt));function Xt(m){if(ee++,Ge==="grid")return Y(m);let p=_n.y,y=_n.x;(xe.has("w")||xe.has("arrowup"))&&(p+=1),(xe.has("s")||xe.has("arrowdown"))&&(p-=1),xe.has("d")&&(y+=1),xe.has("a")&&(y-=1);let A=0;(xe.has("arrowleft")||xe.has("q"))&&(A-=1),(xe.has("arrowright")||xe.has("e"))&&(A+=1),C.a+=A*qc*m+dn.dx,dn.dxLast=m>0?dn.dx/m:0,Pn=A*qc+dn.dxLast,C.pitch=Math.max(-.55,Math.min(.55,C.pitch-dn.dy)),dn.dx=0,dn.dy=0;let P=Math.hypot(p,y);P>1&&(p/=P,y/=P);let k=Math.cos(C.a),Q=Math.sin(C.a),ct=-Q,pt=k,Tt=bt(X(C.x),X(C.z))>.15?.82:1,It=(k*p+ct*y)*Xc*Tt*m,it=(Q*p+pt*y)*Xc*Tt*m;if(C.moving=Math.min(1,Math.hypot(p,y)),It===0&&it===0)return;let $=at(X(C.x),X(C.z)),gt=Ni(C.x+It,C.z,$);gt?$e(gt,p>0&&Nt(gt)):C.x+=It;let At=Ni(C.x,C.z+it,$);At?$e(At,p>0&&Nt(At)):C.z+=it;let Ot=Math.floor(C.phase/(2*Math.PI));C.phase+=Math.hypot(It,it)*3.2,Math.floor(C.phase/(2*Math.PI))!==Ot&&Yt()}function Yt(){let m=bt(X(C.x),X(C.z));m>0&&Ht(C.x+Math.cos(C.a)*.5,C.z+Math.sin(C.a)*.5,.9),t.onStep&&t.onStep(m)}let Dt=new Map,ee=0,ve=-2,Me=0;function ke(m){ve<ee-1&&(Me=m),ve=ee}let ce=m=>Me>m;function Nt(m){let p=(m.cx+.5)*yt-C.x,y=(m.cy+.5)*yt-C.z,A=Math.atan2(y,p)-C.a;return Math.cos(A)>Math.cos(.87)}function $e(m,p){if(m.use){if(!p)return;let A=m.cx+","+m.cy,P=performance.now();ke(P),ce(Dt.get(A)||0)&&(Dt.set(A,P),t.onLocked&&t.onLocked(m.cx,m.cy,wt(m.cx,m.cy)));return}if(!m.door)return;let y=Gt(m.cx,m.cy);if(y&&y.locked&&!y.opening){if(!p)return;let A=performance.now();ke(A),ce(y.asked||0)&&(y.asked=A,t.onLocked&&t.onLocked(m.cx,m.cy,y.tile));return}y&&!y.opening&&(y.opening=!0,t.onDoor&&t.onDoor(m.cx,m.cy))}function fe(m){let p=X(C.x),y=X(C.z),A=at(p,y)+zs;if(C.y>A+.02){if(C.vy-=14*m,C.y=Math.max(A,C.y+C.vy*m),C.y===A){let k=C.vy;C.vy=0,at(p,y)<=mi+.01&&!Zt&&(Zt=!0,t.onFall&&t.onFall(-k))}}else C.y+=(A-C.y)*Math.min(1,m*(A-C.y>Ui?3.5:14)),C.vy=0;at(p,y)>mi+.01&&Math.abs(C.y-A)<.05&&(C.safe={x:C.x,z:C.z}),at(p,y)>mi+.01&&(Zt=!1);let P=p+","+y;P!==C.cell&&(C.cell=P,t.onEnterCell&&t.onEnterCell(p,y,wt(p,y)))}function Ke(m,p,y,A){let P=Math.hypot(y-m,A-p),k=Math.ceil(P/(yt*.25));for(let Q=1;Q<k;Q++){let ct=Q/k;if(Bt(X(m+(y-m)*ct),X(p+(A-p)*ct)))return!1}return!0}function $n(m,p,y,A){let P=(ct,pt)=>ct+","+pt,k=new Set([P(y,A)]),Q=[[y,A]];for(;Q.length&&k.size<500;){let[ct,pt]=Q.shift();for(let[Tt,It]of[[1,0],[-1,0],[0,1],[0,-1]]){let it=ct+Tt,$=pt+It;if(!(Math.abs(at(it,$)-at(ct,pt))>Ui)){if(it===m&&$===p)return[ct,pt];k.has(P(it,$))||Bt(it,$)||"G<>".includes(wt(it,$))||(k.add(P(it,$)),Q.push([it,$]))}}}return null}function He(m,p,y,A,P){let k=m.group,Q=p-k.x,ct=y-k.z,pt=Math.hypot(Q,ct);if(pt<.05)return!0;let Tt=Math.min(pt,A*P),It=k.x+Q/pt*Tt,it=k.z+ct/pt*Tt,$=at(X(k.x),X(k.z)),gt=X(It),At=X(it);return Bt(gt,At)||Math.abs(at(gt,At)-$)>Ui?!0:(k.x=It,k.z=it,m.step+=Tt*2.6,m.wake=(m.wake||0)-Tt,m.wake<=0&&bt(gt,At)>0&&(m.wake=.8,Ht(It,it,.8)),pt-Tt<.05)}function Kn(m){let p=m.x-C.x,y=m.z-C.z,A=Math.hypot(p,y)||1;return Math.max(-1,Math.min(1,(p*-Math.sin(C.a)+y*Math.cos(C.a))/A))}function Ee(m,p){for(let y of U.groups){let A=y.group;if(!A.alive)continue;let P=A.def,k=Math.hypot(C.x-A.x,C.z-A.z);if(A.stunUntil&&p<A.stunUntil||A.dormant)continue;let Q=k<P.sight*yt&&Ke(A.x,A.z,C.x,C.z);if(Q&&!A.alert&&t.onAlert&&t.onAlert(P.kind,k/yt,Kn(A)),Q&&(A.alert=!0),y.voice-=m,A.alert&&y.voice<=0&&k<7*yt?(y.voice=2.5+Math.random()*3.5,t.onVoice&&t.onVoice(P.kind,k/yt,Kn(A))):k>P.sight*yt*2&&(A.alert=!1),k<jm&&Math.abs(at(X(A.x),X(A.z))-at(X(C.x),X(C.z)))<1.2){t.onContact&&t.onContact(A);return}let ct=P.speed;if(A.alert&&!(P.boss&&k>3*yt))if(Q&&k<yt*1.6)He(y,C.x,C.z,ct,m);else{if(y.think-=m,!y.path||y.think<=0){y.think=.4;let pt=$n(X(A.x),X(A.z),X(C.x),X(C.z));y.path=pt?[(pt[0]+.5)*yt,(pt[1]+.5)*yt]:null}y.path&&He(y,y.path[0],y.path[1],ct,m)&&(y.path=null)}else if(!P.boss){if(y.think-=m,!y.wander&&y.think<=0){y.think=1.5+Math.random()*3;let pt=X(A.x),Tt=X(A.z),[It,it]=[[1,0],[-1,0],[0,1],[0,-1]][Math.floor(Math.random()*4)],$=pt+It,gt=Tt+it;!Bt($,gt)&&!"G<>RLSFfK".includes(wt($,gt))&&Math.abs(at($,gt)-at(pt,Tt))<=Ui&&(y.wander=[($+.5)*yt,(gt+.5)*yt])}y.wander&&He(y,y.wander[0],y.wander[1],ct*.45,m)&&(y.wander=null)}}}function ln(m){let p=Math.sin(C.phase)*.045*C.moving;s.position.set(C.x,C.y+p,C.z),s.rotation.y=-(C.a+Math.PI/2),s.rotation.x=C.pitch;let y=!!ht&&s.position.y<ht.y;y!==On&&(On=y,i.classList.toggle("underwater",y),y?(Ht(C.x,C.z,2),n.fog.near=.1,n.fog.far=3.5):(n.fog.near=N.near,n.fog.far=N.far)),Ce&&Ce.position.copy(s.position),Wt&&Wt.position.copy(s.position);let A=Hs(m);a.intensity=(12.2+A*2.4)*(N.torch===void 0?1:N.torch),a.position.x=.2+(A-.5)*.08,$c(m,A);let P=new V(-Math.sin(C.a),0,Math.cos(C.a));for(let k of U.groups){let Q=k.group;if(k.mesh.visible=Q.alive,!Q.alive)continue;k.mesh.position.set(Q.x,at(X(Q.x),X(Q.z)),Q.z);let ct=k.mesh.children.length;k.mesh.children.forEach((pt,Tt)=>{let It=(Tt-(ct-1)/2)*.75,it=Tt===Math.floor((ct-1)/2)&&ct>1?-.25:.15*Math.abs(Tt-(ct-1)/2);pt.position.set(P.x*It-Math.cos(C.a)*it,0,P.z*It-Math.sin(C.a)*it)}),Jc(k,m)}U.root.traverse(k=>{if(!k.userData.billboard)return;let Q=k.getWorldPosition(new V);k.rotation.y=Math.atan2(s.position.x-Q.x,s.position.z-Q.z)})}let On=!1,We=.5,xn=.5,vn=0;function Hs(m){m>vn&&(xn=.25+Math.random()*.75,vn=m+50+Math.random()*110),We+=(xn-We)*.35;let p=We*.6+(.5+.5*Math.sin(m*.0063))*.25+(.5+.5*Math.sin(m*.0171))*.15;return Math.max(0,Math.min(1,p))}let Yc={zombie:(m,p,y)=>[y*.06*p*p,p<.3&&(m-.5)*y>0?.045*(1-p/.3):-.012*p],prisoner:(m,p,y)=>[y*.07*p*p,p<.25&&(m-.5)*y>0?.03*(1-p/.25):-.015*p],guard:(m,p,y)=>[y*.03*p,p<.28&&(m-.5)*y>0?.04*(1-p/.28):0],warden:(m,p,y)=>[y*.05*p*p-y*.01,p<.3&&(m-.5)*y>0?.03*(1-p/.3):-.01*p],skeleton:(m,p,y)=>[y*.025*p+(p>.78?y*.025:0),p<.28&&(m-.5)*y>0?.035*(1-p/.28):0],cultist:(m,p,y)=>[p<.42?y*.045*(1-p/.42):-y*.012*p,y>0?-.01*p:0],rats:(m,p,y)=>[(m-.5)*(y>0?.12:-.08),(y>0?-.1:.08)*p],drowned:(m,p,y)=>[y*.05*p*p,p<.3&&(m-.5)*y>0?.04*(1-p/.3):-.018*p],watch:(m,p,y)=>[y*.025*p,p<.28&&(m-.5)*y>0?.045*(1-p/.28):0],hanged:(m,p,y)=>[y*.08*p*p,p<.2&&(m-.5)*y>0?.02*(1-p/.2):-.01*p],cutter:(m,p,y)=>[y*.03*p,p<.28&&(m-.5)*y>0?.04*(1-p/.28):0],saltwight:(m,p,y)=>[y*.045*p*p,p<.3&&(m-.5)*y>0?.03*(1-p/.3):-.02*p],overseer:(m,p,y)=>[y*.05*p*p-y*.01,p<.3&&(m-.5)*y>0?.03*(1-p/.3):-.01*p]},Zc={zombie:1.6,skeleton:1,cultist:1.3,rats:.55,prisoner:1.7,guard:1.2,warden:1.9,drowned:1.7,watch:1.1,hanged:2,cutter:1.2,saltwight:1.8,overseer:1.9};function Jc(m,p){let y=m.lastStep!==m.step;m.lastStep=m.step,y||(m.idle+=1/60);for(let A of m.mesh.children){let P=A.geometry,k=P.userData.base;if(!k)continue;let Q=A.userData.kind,[ct,pt]=A.userData.size,Tt=P.attributes.position.array;if(Q==="abbess"){let ne=p/1e3+A.userData.slot;for(let ge=0;ge<Tt.length;ge+=3){let Le=k[ge]/ct+.5,Kt=k[ge+1]/pt;Tt[ge]=k[ge]+(Kt<.35?Math.sin(ne*2.6+Le*7)*.035*(1-Kt/.35)*ct:0),Tt[ge+1]=k[ge+1]+(.06+Math.sin(ne*1.4)*.05)*pt*.4}P.attributes.position.needsUpdate=!0;continue}let It=Yc[Q];if(!It)continue;let it=y?m.step/(Zc[Q]||1.2):m.idle/.75,$=(Math.floor(it)+A.userData.slot)%2,gt=y?1:.35,At=$*2+(y?1:0);if(A.userData.frameKey===At)continue;A.userData.frameKey=At;let Ot=($?1:-1)*gt;for(let ne=0;ne<Tt.length;ne+=3){let ge=k[ne]/ct+.5,Le=k[ne+1]/pt,[Kt,te]=It(ge,Le,Ot);Tt[ne]=k[ne]+Kt*ct,Tt[ne+1]=k[ne+1]+te*pt}P.attributes.position.needsUpdate=!0}}let gi=document.createElement("div");gi.className="hands",gi.innerHTML='<div class="hand hand-left"><span class="torch-glow"></span><img alt="" draggable="false"><canvas class="flame" width="128" height="256"></canvas></div><div class="hand hand-right"><img alt="" draggable="false"></div>',e.domElement.after(gi);let ps=gi.querySelector(".hand-left"),ms=gi.querySelector(".hand-right"),Vs=ps.querySelector("img"),Gs=ms.querySelector("img"),Ws=ps.querySelector(".flame"),jr=Kc(Ws);jr||Ws.remove();let to=ps.querySelector(".torch-glow"),gs={x:.5,y:.08};Vs.addEventListener("load",()=>{try{let m=document.createElement("canvas");m.width=96,m.height=128;let p=m.getContext("2d");p.drawImage(Vs,0,0,m.width,m.height);let y=p.getImageData(0,0,m.width,m.height).data,A=Q=>{let ct=0,pt=0;for(let Tt=0;Tt<m.width;Tt++)y[(Q*m.width+Tt)*4+3]>140&&(ct+=Tt,pt++);return pt>=3?ct/pt:-1},P=0;for(;P<m.height&&A(P)<0;)P++;let k=Math.min(m.height-1,P+Math.round(m.height*.12));P<m.height&&A(k)>=0&&(gs={x:A(k)/m.width,y:k/m.height})}catch{}Ws.style.left=gs.x*100+"%",Ws.style.top=gs.y*100+"%",to.style.left=gs.x*100+"%",to.style.top=gs.y*100+"%"}),Vs.onerror=()=>{ps.classList.add("no-art")},Gs.onerror=()=>{ms.classList.add("no-art")},Vs.src=Jn.assetUrl("held-torch");let Qn=0,cl=0,eo=0;function $c(m,p){if(xt&&!gi.classList.contains("shown"))return;let y=C.moving;Qn+=(Math.max(-3,Math.min(3,Pn))-Qn)*.12;let A=Math.sin(C.phase*.5)*14*y,P=Math.abs(Math.cos(C.phase*.5))*12*y;ps.style.transform=`translate(${(A-Qn*10).toFixed(1)}px, ${(P+4).toFixed(1)}px) rotate(${(-4+Qn*1.2).toFixed(2)}deg)`,ms.style.transform=`translate(${(A*.9-Qn*14).toFixed(1)}px, ${(12-P*.9).toFixed(1)}px) rotate(${(5+Qn*1.5).toFixed(2)}deg)`,to.style.opacity=(.45+p*.45).toFixed(2);let k=A-Qn*10;eo+=((k-cl)*.12-eo)*.15,cl=k,jr&&jr.draw(m/1e3,p,Math.max(-1,Math.min(1,-Qn*.22-eo)),y)}function Kc(m){let p=null;try{p=m.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1})}catch{}if(!p)return null;let y="attribute vec2 aPos; varying vec2 vUv; void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }",A=`
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
      }`,P=(pt,Tt)=>{let It=p.createShader(pt);return p.shaderSource(It,Tt),p.compileShader(It),It},k=p.createProgram();if(p.attachShader(k,P(p.VERTEX_SHADER,y)),p.attachShader(k,P(p.FRAGMENT_SHADER,A)),p.linkProgram(k),!p.getProgramParameter(k,p.LINK_STATUS))return null;p.useProgram(k),p.bindBuffer(p.ARRAY_BUFFER,p.createBuffer()),p.bufferData(p.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),p.STATIC_DRAW);let Q=p.getAttribLocation(k,"aPos");p.enableVertexAttribArray(Q),p.vertexAttribPointer(Q,2,p.FLOAT,!1,0,0);let ct={};for(let pt of["uTime","uFlick","uLean","uStir","uAspect"])ct[pt]=p.getUniformLocation(k,pt);return{draw(pt,Tt,It,it){if(p.isContextLost())return;let $=Math.min(window.devicePixelRatio||1,2),gt=Math.max(16,Math.round(m.clientWidth*$)),At=Math.max(32,Math.round(m.clientHeight*$));(m.width!==gt||m.height!==At)&&(m.width=gt,m.height=At),p.viewport(0,0,gt,At),p.uniform1f(ct.uTime,pt%2e3),p.uniform1f(ct.uFlick,Tt),p.uniform1f(ct.uLean,It),p.uniform1f(ct.uStir,it),p.uniform1f(ct.uAspect,gt/(2*At*.8)),p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT),p.drawArrays(p.TRIANGLE_STRIP,0,4)}}}function Qc(m){for(let p of U.doors.values())!p.opening||p.open>=1||(p.open=Math.min(1,p.open+m*1.4),p.mesh.position.y=p.base+p.open*p.height*.95,Ut=!0)}function jc(){let m=t.explored&&t.explored();if(!m)return;let p=X(C.x),y=X(C.z);for(let A=y-5;A<=y+5;A++)for(let P=p-5;P<=p+5;P++)!m[A]||m[A][P]===void 0||m[A][P]||Math.hypot(P-p,A-y)>5.5||(Ke(C.x,C.z,(P+.5)*yt,(A+.5)*yt)||Math.abs(P-p)+Math.abs(A-y)<=1)&&(m[A][P]=!0)}function hl(m){requestAnimationFrame(hl);let p=Math.min(.05,(m-pe)/1e3);pe=m,!(!U||!i.isConnected||i.offsetParent===null)&&(th(),xt||(Xt(p),fe(p),Ee(p,m),et-=p,et<=0&&(et=.25,jc(),t.onTick&&t.onTick())),Qc(p),ln(m),Mt(p),W(p),Z(p),me(p),e.render(n,s))}let ul=0,dl=0;function th(){let m=i.clientWidth,p=i.clientHeight;if(!(m===ul&&p===dl)){if(ul=m,dl=p,e.setSize(m,p,!1),ht){let y=new ae;e.getDrawingBufferSize(y),ht.mesh.getRenderTarget().setSize(Math.max(256,Math.round(y.x*.5)),Math.max(256,Math.round(y.y*.5)))}s.aspect=m/Math.max(1,p),s.fov=s.aspect<1?82:68,s.updateProjectionMatrix()}}window.addEventListener("keydown",m=>{if(xt||m.metaKey||m.ctrlKey||m.altKey)return;let p=m.key.toLowerCase();["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(p)&&(Ge==="grid"&&!m.repeat&&!xe.has(p)&&fn.length<2&&fn.push({w:"f",arrowup:"f",s:"b",arrowdown:"b",a:"l",d:"r",q:"tl",arrowleft:"tl",e:"tr",arrowright:"tr"}[p]),xe.add(p),m.preventDefault())}),window.addEventListener("keyup",m=>xe.delete(m.key.toLowerCase())),window.addEventListener("blur",()=>xe.clear());let cn=document.createElement("div");cn.className="stick",cn.innerHTML="<i></i>",cn.hidden=!0,i.appendChild(cn);let Fi=new Map,Ln=e.domElement;Ln.style.touchAction="none";for(let m of["touchstart","touchmove"])Ln.addEventListener(m,p=>{p.cancelable&&p.preventDefault()},{passive:!1});Ln.addEventListener("pointerdown",m=>{if(xt||Ge==="grid")return;Ln.setPointerCapture(m.pointerId);let p=Ln.getBoundingClientRect(),y=m.pointerType==="mouse"?"look":m.clientX-p.left<p.width/2?"move":"look";y==="move"&&[...Fi.values()].some(A=>A.role==="move")||(Fi.set(m.pointerId,{role:y,x0:m.clientX,y0:m.clientY,x:m.clientX,y:m.clientY}),y==="move"&&(cn.hidden=!1,cn.style.left=m.clientX-p.left+"px",cn.style.top=m.clientY-p.top+"px",cn.firstChild.style.transform="translate(-50%, -50%)"))}),Ln.addEventListener("pointermove",m=>{let p=Fi.get(m.pointerId);if(p){if(p.role==="move"){let A=m.clientX-p.x0,P=m.clientY-p.y0,k=Math.hypot(A,P);if(k>46){A*=46/k,P*=46/k,p.x0=m.clientX-A,p.y0=m.clientY-P;let Q=Ln.getBoundingClientRect();cn.style.left=p.x0-Q.left+"px",cn.style.top=p.y0-Q.top+"px"}_n.x=Math.abs(A)<8?0:A/46,_n.y=Math.abs(P)<8?0:-P/46,cn.firstChild.style.transform=`translate(calc(-50% + ${A}px), calc(-50% + ${P}px))`}else xt||(dn.dx+=(m.clientX-p.x)*(m.pointerType==="mouse"?.005:.0075),dn.dy+=(m.clientY-p.y)*.004);p.x=m.clientX,p.y=m.clientY}});let Xs=m=>{let p=Fi.get(m.pointerId);p&&(Fi.delete(m.pointerId),p.role==="move"&&(_n.x=0,_n.y=0,cn.hidden=!0))};Ln.addEventListener("pointerup",Xs),Ln.addEventListener("pointercancel",Xs),Ln.addEventListener("lostpointercapture",Xs);for(let m of["pointerup","pointercancel"])window.addEventListener(m,p=>{Xs(p),Lt(p)});function eh(){xe.clear(),_n.x=0,_n.y=0,cn.hidden=!0,Fi.clear();for(let m of Ct.values())clearInterval(m);Ct.clear()}return requestAnimationFrame(hl),{load(m){G(m);for(let p of m.opened||[]){let y=U.doors.get(p);y&&(y.open=1,y.opening=!0,y.locked=!1,y.mesh.position.y=y.base+y.height*.95)}for(let p of m.groups)p.def=Jn.MONSTERS[p.members[0].key],In(p)},addGroup(m){m.def=Jn.MONSTERS[m.members[0].key],In(m)},removeGroup(m){let p=U.groups.findIndex(y=>y.group===m);p<0||(U.root.remove(U.groups[p].mesh),ye(U.groups[p].mesh),U.groups.splice(p,1))},setDaylight(m,p){F=m,p&&U&&Z(0,!0)},place(m){C.x=m.x,C.z=m.z,C.a=m.a,C.pitch=0,C.y=at(X(m.x),X(m.z))+zs,C.vy=0,C.cell=X(m.x)+","+X(m.z),C.safe={x:m.x,z:m.z},Zt=!1,xe.clear(),Ge==="grid"&&M()},setMode(m){Ge=m==="grid"?"grid":"free",_t.hidden=Ge!=="grid",i.classList.toggle("step-mode",Ge==="grid"),Ge==="grid"&&U&&M()},get mode(){return Ge},setWater(m){Pt=!!m},get water(){return Pt},cellPose(m,p){let y=0;for(let[A,P,k]of[[0,-1,-Math.PI/2],[1,0,0],[0,1,Math.PI/2],[-1,0,Math.PI]])if(!Bt(m+A,p+P)){y=k;break}return{x:(m+.5)*yt,z:(p+.5)*yt,a:y}},pose:()=>({x:C.x,z:C.z,a:C.a}),facing(){if(!U)return null;for(let m of[.7,1.2]){let p=X(C.x+Math.cos(C.a)*yt*m),y=X(C.z+Math.sin(C.a)*yt*m),A=wt(p,y),P=ot(A);if(P&&P.name)return{x:p,y,t:A};if(Bt(p,y))return null}return null},mapPose:()=>({x:C.x/yt-.5,y:C.z/yt-.5,a:C.a}),pause(){xt=!0,C.moving=0,Pn=0,fn.length=0,le.active&&(C.x=le.x1,C.z=le.z1,C.a=le.a1,le.active=!1)},resume(){xt=!1,pe=performance.now()},boxClosed(){ve=ee},get paused(){return xt},refreshTile(m,p){fs(m,p)},openDoor(m,p){let y=Gt(m,p);y&&(y.locked=!1,y.opening=!0)},inPit(){return!!U&&q(X(C.x),X(C.z))&&C.y<mi+zs+.1},haulBack(){C.x=C.safe.x,C.z=C.safe.z,C.y=at(X(C.x),X(C.z))+zs,C.vy=0,Zt=!1,Ge==="grid"&&M()},stepBack(m){let p=C.x-m.x,y=C.z-m.z,A=Math.hypot(p,y)||1;for(let P=2.2;P>.4;P-=.3){let k=C.x+p/A*P,Q=C.z+y/A*P;if(!Ni(k,Q,at(X(C.x),X(C.z))+Ui)){C.x=k,C.z=Q;break}}Ge==="grid"&&M()},monsterPos:m=>({x:m.x/yt-.5,y:m.z/yt-.5}),setWeapon(m){let p=String(m||"").normalize("NFD").replace(/[^A-Za-z]/g,"").toLowerCase();ms.classList.toggle("no-art",!p),p&&Gs.dataset.slug!==p&&(Gs.dataset.slug=p,ms.classList.remove("no-art"),Gs.src=Jn.assetUrl("held-"+p))},showHands(m){gi.classList.toggle("shown",!!m),m||eh()},cellSize:yt,render(){ln(performance.now()),e.render(n,s)}}}Jn.createWorld=ng;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
