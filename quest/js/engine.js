(()=>{var eo="170";var Wl=0,go=1,Xl=2;var yl=1,ql=2,xn=3,Un=0,Fe=1,Ke=2,Ln=0,wi=1,_o=2,xo=3,vo=4,Yl=5,Zn=100,Zl=101,Jl=102,$l=103,Kl=104,Ql=200,jl=201,tc=202,ec=203,zr=204,kr=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,cc=213,hc=214,Vr=0,Hr=1,Gr=2,Ri=3,Wr=4,Xr=5,qr=6,Yr=7,no=0,uc=1,dc=2,Dn=0,fc=1,pc=2,mc=3,gc=4,_c=5,xc=6,vc=7;var Ml=300,Ci=301,Ii=302,Zr=303,Jr=304,er=306,Pi=1e3,Kn=1001,$r=1002,tn=1003,yc=1004;var ls=1005;var ln=1006,or=1007;var Qn=1008;var Sn=1009,Sl=1010,bl=1011,$i=1012,io=1013,jn=1014,vn=1015,ri=1016,so=1017,ro=1018,Li=1020,wl=35902,El=1021,Tl=1022,Qe=1023,Al=1024,Rl=1025,Ei=1026,Di=1027,Cl=1028,ao=1029,Il=1030,oo=1031;var lo=1033,Is=33776,Ps=33777,Ls=33778,Ds=33779,Kr=35840,Qr=35841,jr=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,aa=37810,oa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,Us=36492,xa=36494,va=36495,Pl=36283,ya=36284,Ma=36285,Sa=36286;var Ns=2300,ba=2301,lr=2302,yo=2400,Mo=2401,So=2402;var Mc=3200,Sc=3201;var Ll=0,bc=1,Pn="",Ie="srgb",Oi="srgb-linear",nr="linear",ue="srgb";var ci=7680;var bo=519,wc=512,Ec=513,Tc=514,Dl=515,Ac=516,Rc=517,Cc=518,Ic=519,wo=35044;var Eo="300 es",yn=2e3,Fs=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cr=Math.PI/180,wa=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Pc(i,t){return(i%t+t)%t}function hr(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var re=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],g=n[5],y=n[8],b=s[0],p=s[3],h=s[6],A=s[1],E=s[4],m=s[7],k=s[2],P=s[5],I=s[8];return r[0]=a*b+o*A+l*k,r[3]=a*p+o*E+l*P,r[6]=a*h+o*m+l*I,r[1]=c*b+u*A+d*k,r[4]=c*p+u*E+d*P,r[7]=c*h+u*m+d*I,r[2]=f*b+g*A+y*k,r[5]=f*p+g*E+y*P,r[8]=f*h+g*m+y*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,g=c*r-a*l,y=e*d+n*f+s*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=d*b,t[1]=(s*c-u*n)*b,t[2]=(o*n-s*a)*b,t[3]=f*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=g*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ur=new Jt;function Ul(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){let i=Ki("canvas");return i.style.display="block",i}var To={};function Yi(i){i in To||(To[i]=!0,console.warn(i))}function Dc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uc(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nc(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?nr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ao=[.64,.33,.3,.6,.15,.06],Ro=[.2126,.7152,.0722],Co=[.3127,.329],Io=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Oi]:{primaries:Ao,whitePoint:Co,transfer:nr,toXYZ:Io,fromXYZ:Po,luminanceCoefficients:Ro,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Ao,whitePoint:Co,transfer:ue,toXYZ:Io,fromXYZ:Po,luminanceCoefficients:Ro,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var hi,Ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=Ki("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ki("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fc=0,Os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dr(s[a].image)):r.push(dr(s[a]))}else r=dr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oc=0,Oe=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=ln,a=Qn,o=Qe,l=Sn,c=i.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=ns(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ml;Oe.DEFAULT_ANISOTROPY=1;var oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],g=l[5],y=l[9],b=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-b)<.01&&Math.abs(y-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+b)<.1&&Math.abs(y+p)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,m=(g+1)/2,k=(h+1)/2,P=(u+f)/4,I=(d+b)/4,B=(y+p)/4;return E>m&&E>k?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=P/n,r=I/n):m>k?m<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),n=P/s,r=B/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=I/r,s=B/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-y)*(p-y)+(d-b)*(d-b)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-y)/A,this.y=(d-b)/A,this.z=(f-u)/A,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends Nn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Os(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bs=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],g=r[a+1],y=r[a+2],b=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=g,t[e+2]=y,t[e+3]=b;return}if(d!==b||l!==f||c!==g||u!==y){let p=1-o,h=l*f+c*g+u*y+d*b,A=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let k=Math.sqrt(E),P=Math.atan2(k,h*A);p=Math.sin(p*P)/k,o=Math.sin(o*P)/k}let m=o*A;if(l=l*p+f*m,c=c*p+g*m,u=u*p+y*m,d=d*p+b*m,p===1-o){let k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],g=r[a+2],y=r[a+3];return t[e]=o*y+u*d+l*g-c*f,t[e+1]=l*y+u*f+c*d-o*g,t[e+2]=c*y+u*g+o*f-l*d,t[e+3]=u*y-o*d-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),g=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*g*y,this._y=c*g*d-f*u*y,this._z=c*u*y+f*g*d,this._w=c*u*d-f*g*y;break;case"YXZ":this._x=f*u*d+c*g*y,this._y=c*g*d-f*u*y,this._z=c*u*y-f*g*d,this._w=c*u*d+f*g*y;break;case"ZXY":this._x=f*u*d-c*g*y,this._y=c*g*d+f*u*y,this._z=c*u*y+f*g*d,this._w=c*u*d-f*g*y;break;case"ZYX":this._x=f*u*d-c*g*y,this._y=c*g*d+f*u*y,this._z=c*u*y-f*g*d,this._w=c*u*d+f*g*y;break;case"YZX":this._x=f*u*d+c*g*y,this._y=c*g*d+f*u*y,this._z=c*u*y-f*g*d,this._w=c*u*d-f*g*y;break;case"XZY":this._x=f*u*d-c*g*y,this._y=c*g*d-f*u*y,this._z=c*u*y+f*g*d,this._w=c*u*d+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>d){let g=2*Math.sqrt(1+n-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>d){let g=2*Math.sqrt(1+o-n-d);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+d-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fr=new z,Lo=new Fn,ti=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),hs.subVectors(this.max,Hi),ui.subVectors(t.a,Hi),di.subVectors(t.b,Hi),fi.subVectors(t.c,Hi),En.subVectors(di,ui),Tn.subVectors(fi,di),Vn.subVectors(ui,fi);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Vn.y,Vn.x,0];return!pr(e,ui,di,fi,hs)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,ui,di,fi,hs))?!1:(us.crossVectors(En,Tn),e=[us.x,us.y,us.z],pr(e,ui,di,fi,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fn=[new z,new z,new z,new z,new z,new z,new z,new z],Ye=new z,cs=new ti,ui=new z,di=new z,fi=new z,En=new z,Tn=new z,Vn=new z,Hi=new z,hs=new z,us=new z,Hn=new z;function pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);let o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Bc=new ti,Gi=new z,mr=new z,Qi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);let e=Gi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(mr)),this.expandByPoint(Gi.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pn=new z,gr=new z,ds=new z,An=new z,_r=new z,fs=new z,xr=new z,Ra=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),An.copy(this.origin).sub(gr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ds),o=An.dot(this.direction),l=-An.dot(ds),c=An.lengthSq(),u=Math.abs(1-a*a),d,f,g,y;if(u>0)if(d=a*l-o,f=a*o-l,y=r*u,d>=0)if(f>=-y)if(f<=y){let b=1/u;d*=b,f*=b,g=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gr).addScaledVector(ds,f),g}intersectSphere(t,e){pn.subVectors(t.center,this.origin);let n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){_r.subVectors(e,t),fs.subVectors(n,t),xr.crossVectors(_r,fs);let a=this.direction.dot(xr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);let l=o*this.direction.dot(fs.crossVectors(An,fs));if(l<0)return null;let c=o*this.direction.dot(_r.cross(An));if(c<0||l+c>a)return null;let u=-o*An.dot(xr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,a,o,l,c,u,d,f,g,y,b,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,g,y,b,p)}set(t,e,n,s,r,a,o,l,c,u,d,f,g,y,b,p){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=g,h[7]=y,h[11]=b,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,g=a*d,y=o*u,b=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=g+y*c,e[5]=f-b*c,e[9]=-o*l,e[2]=b-f*c,e[6]=y+g*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,g=l*d,y=c*u,b=c*d;e[0]=f+b*o,e[4]=y*o-g,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=g*o-y,e[6]=b+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,g=l*d,y=c*u,b=c*d;e[0]=f-b*o,e[4]=-a*d,e[8]=y+g*o,e[1]=g+y*o,e[5]=a*u,e[9]=b-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,g=a*d,y=o*u,b=o*d;e[0]=l*u,e[4]=y*c-g,e[8]=f*c+b,e[1]=l*d,e[5]=b*c+f,e[9]=g*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,g=a*c,y=o*l,b=o*c;e[0]=l*u,e[4]=b-f*d,e[8]=y*d+g,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=g*d+y,e[10]=f-b*d}else if(t.order==="XZY"){let f=a*l,g=a*c,y=o*l,b=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+b,e[5]=a*u,e[9]=g*d-y,e[2]=y*d-g,e[6]=o*u,e[10]=b*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zc,t,kc)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Rn.crossVectors(n,ze),Rn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Rn.crossVectors(n,ze)),Rn.normalize(),ps.crossVectors(ze,Rn),s[0]=Rn.x,s[4]=ps.x,s[8]=ze.x,s[1]=Rn.y,s[5]=ps.y,s[9]=ze.y,s[2]=Rn.z,s[6]=ps.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],g=n[13],y=n[2],b=n[6],p=n[10],h=n[14],A=n[3],E=n[7],m=n[11],k=n[15],P=s[0],I=s[4],B=s[8],T=s[12],_=s[1],C=s[5],W=s[9],X=s[13],K=s[2],it=s[6],j=s[10],lt=s[14],Z=s[3],mt=s[7],Mt=s[11],Lt=s[15];return r[0]=a*P+o*_+l*K+c*Z,r[4]=a*I+o*C+l*it+c*mt,r[8]=a*B+o*W+l*j+c*Mt,r[12]=a*T+o*X+l*lt+c*Lt,r[1]=u*P+d*_+f*K+g*Z,r[5]=u*I+d*C+f*it+g*mt,r[9]=u*B+d*W+f*j+g*Mt,r[13]=u*T+d*X+f*lt+g*Lt,r[2]=y*P+b*_+p*K+h*Z,r[6]=y*I+b*C+p*it+h*mt,r[10]=y*B+b*W+p*j+h*Mt,r[14]=y*T+b*X+p*lt+h*Lt,r[3]=A*P+E*_+m*K+k*Z,r[7]=A*I+E*C+m*it+k*mt,r[11]=A*B+E*W+m*j+k*Mt,r[15]=A*T+E*X+m*lt+k*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],g=t[14],y=t[3],b=t[7],p=t[11],h=t[15];return y*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*g-n*l*g)+b*(+e*l*g-e*c*f+r*a*f-s*a*g+s*c*u-r*l*u)+p*(+e*c*d-e*o*g-r*a*d+n*a*g+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],g=t[11],y=t[12],b=t[13],p=t[14],h=t[15],A=d*p*c-b*f*c+b*l*g-o*p*g-d*l*h+o*f*h,E=y*f*c-u*p*c-y*l*g+a*p*g+u*l*h-a*f*h,m=u*b*c-y*d*c+y*o*g-a*b*g-u*o*h+a*d*h,k=y*d*l-u*b*l-y*o*f+a*b*f+u*o*p-a*d*p,P=e*A+n*E+s*m+r*k;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return t[0]=A*I,t[1]=(b*f*r-d*p*r-b*s*g+n*p*g+d*s*h-n*f*h)*I,t[2]=(o*p*r-b*l*r+b*s*c-n*p*c-o*s*h+n*l*h)*I,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*g-n*l*g)*I,t[4]=E*I,t[5]=(u*p*r-y*f*r+y*s*g-e*p*g-u*s*h+e*f*h)*I,t[6]=(y*l*r-a*p*r-y*s*c+e*p*c+a*s*h-e*l*h)*I,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*g+e*l*g)*I,t[8]=m*I,t[9]=(y*d*r-u*b*r-y*n*g+e*b*g+u*n*h-e*d*h)*I,t[10]=(a*b*r-y*o*r+y*n*c-e*b*c-a*n*h+e*o*h)*I,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*g-e*o*g)*I,t[12]=k*I,t[13]=(u*b*s-y*d*s+y*n*f-e*b*f-u*n*p+e*d*p)*I,t[14]=(y*o*s-a*b*s-y*n*l+e*b*l+a*n*p-e*o*p)*I,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,g=r*u,y=r*d,b=a*u,p=a*d,h=o*d,A=l*c,E=l*u,m=l*d,k=n.x,P=n.y,I=n.z;return s[0]=(1-(b+h))*k,s[1]=(g+m)*k,s[2]=(y-E)*k,s[3]=0,s[4]=(g-m)*P,s[5]=(1-(f+h))*P,s[6]=(p+A)*P,s[7]=0,s[8]=(y+E)*I,s[9]=(p-A)*I,s[10]=(1-(f+b))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let c=1/r,u=1/a,d=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(o===yn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Fs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){let l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(a-r),f=(e+t)*c,g=(n+s)*u,y,b;if(o===yn)y=(a+r)*d,b=-2*d;else if(o===Fs)y=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new z,Ze=new me,zc=new z(0,0,0),kc=new z(1,1,1),Rn=new z,ps=new z,ze=new z,Do=new me,Uo=new Fn,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vc=0,No=new z,mi=new Fn,mn=new me,ms=new z,Wi=new z,Hc=new z,Gc=new Fn,Fo=new z(1,0,0),Oo=new z(0,1,0),Bo=new z(0,0,1),zo={type:"added"},Wc={type:"removed"},gi={type:"childadded",child:null},vr={type:"childremoved",child:null},Ve=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new cn,n=new Fn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Wi,ms,this.up):mn.lookAt(ms,Wi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(mn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zo),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wc),vr.child=t,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zo),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),g=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new z(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new z,gn=new z,yr=new z,_n=new z,_i=new z,xi=new z,ko=new z,Mr=new z,Sr=new z,br=new z,wr=new oe,Er=new oe,Tr=new oe,Jn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),gn.subVectors(n,e),yr.subVectors(t,e);let a=Je.dot(Je),o=Je.dot(gn),l=Je.dot(yr),c=gn.dot(gn),u=gn.dot(yr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,g=(c*l-o*u)*f,y=(a*u-o*l)*f;return r.set(1-g-y,y,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return wr.setScalar(0),Er.setScalar(0),Tr.setScalar(0),wr.fromBufferAttribute(t,e),Er.fromBufferAttribute(t,n),Tr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(wr,r.x),a.addScaledVector(Er,r.y),a.addScaledVector(Tr,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),gn.subVectors(t,e),Je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_i.subVectors(s,n),xi.subVectors(r,n),Mr.subVectors(t,n);let l=_i.dot(Mr),c=xi.dot(Mr);if(l<=0&&c<=0)return e.copy(n);Sr.subVectors(t,s);let u=_i.dot(Sr),d=xi.dot(Sr);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(_i,a);br.subVectors(t,r);let g=_i.dot(br),y=xi.dot(br);if(y>=0&&g<=y)return e.copy(r);let b=g*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(n).addScaledVector(xi,o);let p=u*y-g*d;if(p<=0&&d-u>=0&&g-y>=0)return ko.subVectors(r,s),o=(d-u)/(d-u+(g-y)),e.copy(s).addScaledVector(ko,o);let h=1/(p+b+f);return a=b*h,o=f*h,e.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Ar(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Pc(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ar(a,r,t+1/3),this.g=Ar(a,r,t),this.b=Ar(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ae.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ne(Ce.r*255,0,255))*65536+Math.round(Ne(Ce.g*255,0,255))*256+Math.round(Ne(Ce.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ie){ae.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(gs);let n=hr(Cn.h,gs.h,e),s=hr(Cn.s,gs.s,e),r=hr(Cn.l,gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new $t;$t.NAMES=Nl;var Xc=0,ei=class extends Nn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=ns(),this.name="",this.blending=wi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zr,this.blendDst=kr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zr&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},On=class extends ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new z,_s=new re,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wo,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wo&&(t.usage=this.usage),t}};var ks=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vs=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},qc=0,He=new me,Rr=new Ve,vi=new z,ke=new ti,Xi=new ti,Ee=new z,nn=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ul(t)?Vs:ks)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(ke.min,Xi.min),ke.expandByPoint(Ee),Ee.addVectors(ke.max,Xi.max),ke.expandByPoint(Ee)):(ke.expandByPoint(Xi.min),ke.expandByPoint(Xi.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),Ee.add(vi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new z,l[B]=new z;let c=new z,u=new z,d=new z,f=new re,g=new re,y=new re,b=new z,p=new z;function h(B,T,_){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,_),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,T),y.fromBufferAttribute(r,_),u.sub(c),d.sub(c),g.sub(f),y.sub(f);let C=1/(g.x*y.y-y.x*g.y);isFinite(C)&&(b.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(C),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(C),o[B].add(b),o[T].add(b),o[_].add(b),l[B].add(p),l[T].add(p),l[_].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let B=0,T=A.length;B<T;++B){let _=A[B],C=_.start,W=_.count;for(let X=C,K=C+W;X<K;X+=3)h(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let E=new z,m=new z,k=new z,P=new z;function I(B){k.fromBufferAttribute(s,B),P.copy(k);let T=o[B];E.copy(T),E.sub(k.multiplyScalar(k.dot(T))).normalize(),m.crossVectors(P,T);let C=m.dot(l[B])<0?-1:1;a.setXYZW(B,E.x,E.y,E.z,C)}for(let B=0,T=A.length;B<T;++B){let _=A[B],C=_.start,W=_.count;for(let X=C,K=C+W;X<K;X+=3)I(t.getX(X+0)),I(t.getX(X+1)),I(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let f=0,g=t.count;f<g;f+=3){let y=t.getX(f+0),b=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),g=0,y=0;for(let b=0,p=l.length;b<p;b++){o.isInterleavedBufferAttribute?g=l[b]*o.data.stride+o.offset:g=l[b]*u;for(let h=0;h<u;h++)f[y++]=c[g++]}return new Ge(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],g=t(f,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let g=c[d];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vo=new me,Gn=new Ra,xs=new Qi,Ho=new z,vs=new z,ys=new z,Ms=new z,Cr=new z,Ss=new z,Go=new z,bs=new z,Me=class extends Ve{constructor(t=new nn,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Cr.fromBufferAttribute(d,t),a?Ss.addScaledVector(Cr,u):Ss.addScaledVector(Cr.sub(e),u))}e.add(Ss)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(xs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(xs,Ho)===null||Gn.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Vo.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=f.length;y<b;y++){let p=f[y],h=a[p.materialIndex],A=Math.max(p.start,g.start),E=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let m=A,k=E;m<k;m+=3){let P=o.getX(m),I=o.getX(m+1),B=o.getX(m+2);s=ws(this,h,t,n,c,u,d,P,I,B),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,g.start),b=Math.min(o.count,g.start+g.count);for(let p=y,h=b;p<h;p+=3){let A=o.getX(p),E=o.getX(p+1),m=o.getX(p+2);s=ws(this,a,t,n,c,u,d,A,E,m),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=f.length;y<b;y++){let p=f[y],h=a[p.materialIndex],A=Math.max(p.start,g.start),E=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let m=A,k=E;m<k;m+=3){let P=m,I=m+1,B=m+2;s=ws(this,h,t,n,c,u,d,P,I,B),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let p=y,h=b;p<h;p+=3){let A=p,E=p+1,m=p+2;s=ws(this,a,t,n,c,u,d,A,E,m),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Yc(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Un,o),l===null)return null;bs.copy(o),bs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:i}}function ws(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vs),i.getVertexPosition(l,ys),i.getVertexPosition(c,Ms);let u=Yc(i,t,e,n,vs,ys,Ms,Go);if(u){let d=new z;Jn.getBarycoord(Go,vs,ys,Ms,d),s&&(u.uv=Jn.getInterpolatedAttribute(s,o,l,c,d,new re)),r&&(u.uv1=Jn.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(u.normal=Jn.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new z,materialIndex:0};Jn.getNormal(vs,ys,Ms,f.normal),u.face=f,u.barycoord=d}return u}var Bn=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,g=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function y(b,p,h,A,E,m,k,P,I,B,T){let _=m/I,C=k/B,W=m/2,X=k/2,K=P/2,it=I+1,j=B+1,lt=0,Z=0,mt=new z;for(let Mt=0;Mt<j;Mt++){let Lt=Mt*C-X;for(let Ft=0;Ft<it;Ft++){let le=Ft*_-W;mt[b]=le*A,mt[p]=Lt*E,mt[h]=K,c.push(mt.x,mt.y,mt.z),mt[b]=0,mt[p]=0,mt[h]=P>0?1:-1,u.push(mt.x,mt.y,mt.z),d.push(Ft/I),d.push(1-Mt/B),lt+=1}}for(let Mt=0;Mt<B;Mt++)for(let Lt=0;Lt<I;Lt++){let Ft=f+Lt+it*Mt,le=f+Lt+it*(Mt+1),et=f+(Lt+1)+it*(Mt+1),ct=f+(Lt+1)+it*Mt;l.push(Ft,le,ct),l.push(le,et,ct),Z+=6}o.addGroup(g,Z,T),g+=Z,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){let t={};for(let e=0;e<i.length;e++){let n=Ui(i[e]);for(let s in n)t[s]=n[s]}return t}function Zc(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var co={clone:Ui,merge:Le},Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Zc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Hs=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new z,Wo=new re,Xo=new re,Te=class extends Hs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Wo,Xo),e.subVectors(Xo,Wo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yi=-90,Mi=1,Ca=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(yi,Mi,t,e);s.layers=this.layers,this.add(s);let r=new Te(yi,Mi,t,e);r.layers=this.layers,this.add(r);let a=new Te(yi,Mi,t,e);a.layers=this.layers,this.add(a);let o=new Te(yi,Mi,t,e);o.layers=this.layers,this.add(o);let l=new Te(yi,Mi,t,e);l.layers=this.layers,this.add(l);let c=new Te(yi,Mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Gs=class extends Oe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ia=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Ln});r.uniforms.tEquirect.value=e;let a=new Me(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=ln),new Ca(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ir=new z,Kc=new z,Qc=new Jt,$e=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ir.subVectors(n,e).cross(Kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qc.getNormalMatrix(t),s=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Qi,Es=new z,ji=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,a=new $e){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],g=s[8],y=s[9],b=s[10],p=s[11],h=s[12],A=s[13],E=s[14],m=s[15];if(n[0].setComponents(l-r,f-c,p-g,m-h).normalize(),n[1].setComponents(l+r,f+c,p+g,m+h).normalize(),n[2].setComponents(l+a,f+u,p+y,m+A).normalize(),n[3].setComponents(l-a,f-u,p-y,m-A).normalize(),n[4].setComponents(l-o,f-d,p-b,m-E).normalize(),e===yn)n[5].setComponents(l+o,f+d,p+b,m+E).normalize();else if(e===Fs)n[5].setComponents(o,d,b,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Es.x=s.normal.x>0?t.max.x:t.min.x,Es.y=s.normal.y>0?t.max.y:t.min.y,Es.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ol(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jc(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((g,y)=>g.start-y.start);let f=0;for(let g=1;g<d.length;g++){let y=d[f],b=d[g];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++f,d[f]=b)}d.length=f+1;for(let g=0,y=d.length;g<y;g++){let b=d[g];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ni=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,g=[],y=[],b=[],p=[];for(let h=0;h<u;h++){let A=h*f-a;for(let E=0;E<c;E++){let m=E*d-r;y.push(m,-A,0),b.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){let E=A+c*h,m=A+c*(h+1),k=A+1+c*(h+1),P=A+1+c*h;g.push(E,m,P),g.push(m,k,P)}this.setIndex(g),this.setAttribute("position",new Ae(y,3)),this.setAttribute("normal",new Ae(b,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
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
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh=`#ifdef USE_BATCHING
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
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,ph=`#ifdef USE_BUMPMAP
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
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
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
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
#endif`,Qh=`struct PhysicalMaterial {
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
}`,jh=`
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
#endif`,tu=`#if defined( RE_IndirectDiffuse )
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
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cu=`#if defined( USE_POINTS_UV )
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
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
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
#endif`,gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
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
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ru=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bu=`float getShadowMask() {
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
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
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
#endif`,Gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yu=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
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
}`,ad=`#if DEPTH_PACKING == 3200
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
}`,od=`#define DISTANCE
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
}`,ld=`#define DISTANCE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`uniform float scale;
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
}`,dd=`uniform vec3 diffuse;
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
}`,fd=`#include <common>
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#define LAMBERT
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
}`,gd=`#define LAMBERT
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
}`,_d=`#define MATCAP
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
}`,xd=`#define MATCAP
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
}`,vd=`#define NORMAL
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
}`,yd=`#define NORMAL
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
}`,Md=`#define PHONG
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
}`,Sd=`#define PHONG
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
}`,bd=`#define STANDARD
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
}`,wd=`#define STANDARD
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
}`,Ed=`#define TOON
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
}`,Td=`#define TOON
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
}`,Ad=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Cd=`#include <common>
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
}`,Id=`uniform vec3 color;
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
}`,Pd=`uniform float rotation;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:th,alphahash_pars_fragment:eh,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:sh,alphatest_pars_fragment:rh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:lh,batching_vertex:ch,begin_vertex:hh,beginnormal_vertex:uh,bsdfs:dh,iridescence_fragment:fh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:_h,clipping_planes_vertex:xh,color_fragment:vh,color_pars_fragment:yh,color_pars_vertex:Mh,color_vertex:Sh,common:bh,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:Ah,emissivemap_fragment:Rh,emissivemap_pars_fragment:Ch,colorspace_fragment:Ih,colorspace_pars_fragment:Ph,envmap_fragment:Lh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Uh,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:qh,envmap_vertex:Fh,fog_vertex:Oh,fog_pars_vertex:Bh,fog_fragment:zh,fog_pars_fragment:kh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Hh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:Yh,lights_toon_pars_fragment:Zh,lights_phong_fragment:Jh,lights_phong_pars_fragment:$h,lights_physical_fragment:Kh,lights_physical_pars_fragment:Qh,lights_fragment_begin:jh,lights_fragment_maps:tu,lights_fragment_end:eu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:iu,logdepthbuf_pars_vertex:su,logdepthbuf_vertex:ru,map_fragment:au,map_pars_fragment:ou,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphinstance_vertex:du,morphcolor_vertex:fu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:gu,normal_fragment_begin:_u,normal_fragment_maps:xu,normal_pars_fragment:vu,normal_pars_vertex:yu,normal_vertex:Mu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:Tu,opaque_fragment:Au,packing:Ru,premultiplied_alpha_fragment:Cu,project_vertex:Iu,dithering_fragment:Pu,dithering_pars_fragment:Lu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Uu,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Fu,shadowmap_vertex:Ou,shadowmask_pars_fragment:Bu,skinbase_vertex:zu,skinning_pars_vertex:ku,skinning_vertex:Vu,skinnormal_vertex:Hu,specularmap_fragment:Gu,specularmap_pars_fragment:Wu,tonemapping_fragment:Xu,tonemapping_pars_fragment:qu,transmission_fragment:Yu,transmission_pars_fragment:Zu,uv_pars_fragment:Ju,uv_pars_vertex:$u,uv_vertex:Ku,worldpos_vertex:Qu,background_vert:ju,background_frag:td,backgroundCube_vert:ed,backgroundCube_frag:nd,cube_vert:id,cube_frag:sd,depth_vert:rd,depth_frag:ad,distanceRGBA_vert:od,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:hd,linedashed_vert:ud,linedashed_frag:dd,meshbasic_vert:fd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:_d,meshmatcap_frag:xd,meshnormal_vert:vd,meshnormal_frag:yd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:bd,meshphysical_frag:wd,meshtoon_vert:Ed,meshtoon_frag:Td,points_vert:Ad,points_frag:Rd,shadow_vert:Cd,shadow_frag:Id,sprite_vert:Pd,sprite_frag:Ld},ft={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},on={basic:{uniforms:Le([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Le([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new $t(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Le([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Le([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Le([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new $t(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Le([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Le([ft.points,ft.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Le([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Le([ft.common,ft.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Le([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Le([ft.sprite,ft.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Le([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Le([ft.lights,ft.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};on.physical={uniforms:Le([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Ts={r:0,b:0,g:0},Xn=new cn,Dd=new me;function Ud(i,t,e,n,s,r,a){let o=new $t(0),l=r===!0?0:1,c,u,d=null,f=0,g=null;function y(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function b(A){let E=!1,m=y(A);m===null?h(o,l):m&&m.isColor&&(h(m,1),E=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,E){let m=y(E);m&&(m.isCubeTexture||m.mapping===er)?(u===void 0&&(u=new Me(new Bn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ui(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xn.copy(E.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(Xn)),u.material.toneMapped=ae.getTransfer(m.colorSpace)!==ue,(d!==m||f!==m.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=m,f=m.version,g=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Me(new ni(2,2),new We({name:"BackgroundMaterial",uniforms:Ui(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ae.getTransfer(m.colorSpace)!==ue,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||f!==m.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=m,f=m.version,g=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,E){A.getRGB(Ts,Fl(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:b,addToRenderList:p}}function Nd(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(_,C,W,X,K){let it=!1,j=d(X,W,C);r!==j&&(r=j,c(r.object)),it=g(_,X,W,K),it&&y(_,X,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,m(_,C,W,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,C,W){let X=W.wireframe===!0,K=n[_.id];K===void 0&&(K={},n[_.id]=K);let it=K[C.id];it===void 0&&(it={},K[C.id]=it);let j=it[X];return j===void 0&&(j=f(l()),it[X]=j),j}function f(_){let C=[],W=[],X=[];for(let K=0;K<e;K++)C[K]=0,W[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:X,object:_,attributes:{},index:null}}function g(_,C,W,X){let K=r.attributes,it=C.attributes,j=0,lt=W.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let Mt=K[Z],Lt=it[Z];if(Lt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(Lt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(Lt=_.instanceColor)),Mt===void 0||Mt.attribute!==Lt||Lt&&Mt.data!==Lt.data)return!0;j++}return r.attributesNum!==j||r.index!==X}function y(_,C,W,X){let K={},it=C.attributes,j=0,lt=W.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let Mt=it[Z];Mt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor));let Lt={};Lt.attribute=Mt,Mt&&Mt.data&&(Lt.data=Mt.data),K[Z]=Lt,j++}r.attributes=K,r.attributesNum=j,r.index=X}function b(){let _=r.newAttributes;for(let C=0,W=_.length;C<W;C++)_[C]=0}function p(_){h(_,0)}function h(_,C){let W=r.newAttributes,X=r.enabledAttributes,K=r.attributeDivisors;W[_]=1,X[_]===0&&(i.enableVertexAttribArray(_),X[_]=1),K[_]!==C&&(i.vertexAttribDivisor(_,C),K[_]=C)}function A(){let _=r.newAttributes,C=r.enabledAttributes;for(let W=0,X=C.length;W<X;W++)C[W]!==_[W]&&(i.disableVertexAttribArray(W),C[W]=0)}function E(_,C,W,X,K,it,j){j===!0?i.vertexAttribIPointer(_,C,W,K,it):i.vertexAttribPointer(_,C,W,X,K,it)}function m(_,C,W,X){b();let K=X.attributes,it=W.getAttributes(),j=C.defaultAttributeValues;for(let lt in it){let Z=it[lt];if(Z.location>=0){let mt=K[lt];if(mt===void 0&&(lt==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),lt==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),mt!==void 0){let Mt=mt.normalized,Lt=mt.itemSize,Ft=t.get(mt);if(Ft===void 0)continue;let le=Ft.buffer,et=Ft.type,ct=Ft.bytesPerElement,Ct=et===i.INT||et===i.UNSIGNED_INT||mt.gpuType===io;if(mt.isInterleavedBufferAttribute){let pt=mt.data,zt=pt.stride,Wt=mt.offset;if(pt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Z.locationSize;Qt++)h(Z.location+Qt,pt.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Qt=0;Qt<Z.locationSize;Qt++)p(Z.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Qt=0;Qt<Z.locationSize;Qt++)E(Z.location+Qt,Lt/Z.locationSize,et,Mt,zt*ct,(Wt+Lt/Z.locationSize*Qt)*ct,Ct)}else{if(mt.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)h(Z.location+pt,mt.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let pt=0;pt<Z.locationSize;pt++)p(Z.location+pt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let pt=0;pt<Z.locationSize;pt++)E(Z.location+pt,Lt/Z.locationSize,et,Mt,Lt*ct,Lt/Z.locationSize*pt*ct,Ct)}}else if(j!==void 0){let Mt=j[lt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(Z.location,Mt);break;case 3:i.vertexAttrib3fv(Z.location,Mt);break;case 4:i.vertexAttrib4fv(Z.location,Mt);break;default:i.vertexAttrib1fv(Z.location,Mt)}}}}A()}function k(){B();for(let _ in n){let C=n[_];for(let W in C){let X=C[W];for(let K in X)u(X[K].object),delete X[K];delete C[W]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let C=n[_.id];for(let W in C){let X=C[W];for(let K in X)u(X[K].object),delete X[K];delete C[W]}delete n[_.id]}function I(_){for(let C in n){let W=n[C];if(W[_.id]===void 0)continue;let X=W[_.id];for(let K in X)u(X[K].object),delete X[K];delete W[_.id]}}function B(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:T,dispose:k,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:p,disableUnusedAttributes:A}}function Fd(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,n,1)}function l(c,u,d,f){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)a(c[y],u[y],f[y]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let y=0;for(let b=0;b<d;b++)y+=u[b]*f[b];e.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Od(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Qe&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let B=I===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==vn&&!B)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=y>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:m,vertexTextures:k,maxSamples:P}}function Bd(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $e,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let g=d.length!==0||f||n!==0||s;return s=f,n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,g){let y=d.clippingPlanes,b=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||y===null||y.length===0||r&&!p)r?u(null):c();else{let A=r?0:n,E=A*4,m=h.clippingState||null;l.value=m,m=u(y,f,E,g);for(let k=0;k!==E;++k)m[k]=e[k];h.clippingState=m,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,g,y){let b=d!==null?d.length:0,p=null;if(b!==0){if(p=l.value,y!==!0||p===null){let h=g+b*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,m=g;E!==b;++E,m+=4)a.copy(d[E]).applyMatrix4(A,o),a.normal.toArray(p,m),p[m+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}function zd(i){let t=new WeakMap;function e(a,o){return o===Zr?a.mapping=Ci:o===Jr&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zr||o===Jr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ia(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Pa=class extends Hs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bi=4,qo=[.125,.215,.35,.446,.526,.582],$n=20,Pr=new Pa,Yo=new $t,Lr=null,Dr=0,Ur=0,Nr=!1,Yn=(1+Math.sqrt(5))/2,Si=1/Yn,Zo=[new z(-Yn,Si,0),new z(Yn,Si,0),new z(-Si,0,Yn),new z(Si,0,Yn),new z(0,Yn,-Si),new z(0,Yn,Si),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lr,Dr,Ur),this._renderer.xr.enabled=Nr,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ri,format:Qe,colorSpace:Oi,depthBuffer:!1},s=Jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kd(r)),this._blurMaterial=Vd(r,t,e)}return s}_compileMaterial(t){let e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,s){let o=new Te(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Yo),u.toneMapping=Dn,u.autoClear=!1;let g=new On({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),y=new Me(new Bn,g),b=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,b=!0):(g.color.copy(Yo),b=!0);for(let h=0;h<6;h++){let A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let E=this._cubeSize;As(s,A*E,h>2?E:0,E,E),u.setRenderTarget(s),b&&u.render(y,o),u.render(t,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ci||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zo[(s-r-1)%Zo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Me(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*$n-1),b=r/y,p=isFinite(r)?1+Math.floor(u*b):$n;p>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);let h=[],A=0;for(let I=0;I<$n;++I){let B=I/b,T=Math.exp(-B*B/2);h.push(T),I===0?A+=T:I<p&&(A+=2*T)}for(let I=0;I<h.length;I++)h[I]=h[I]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=y,f.mipInt.value=E-n;let m=this._sizeLods[s],k=3*m*(s>E-bi?s-E+bi:0),P=4*(this._cubeSize-m);As(e,k,P,3*m,2*m),l.setRenderTarget(e),l.render(d,Pr)}};function kd(i){let t=[],e=[],n=[],s=i,r=i-bi+1+qo.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bi?l=qo[a-i+bi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,y=6,b=3,p=2,h=1,A=new Float32Array(b*y*g),E=new Float32Array(p*y*g),m=new Float32Array(h*y*g);for(let P=0;P<g;P++){let I=P%3*2/3-1,B=P>2?0:-1,T=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];A.set(T,b*y*P),E.set(f,p*y*P);let _=[P,P,P,P,P,P];m.set(_,h*y*P)}let k=new nn;k.setAttribute("position",new Ge(A,b)),k.setAttribute("uv",new Ge(E,p)),k.setAttribute("faceIndex",new Ge(m,h)),t.push(k),s>bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jo(i,t,e){let n=new en(i,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vd(i,t,e){let n=new Float32Array($n),s=new z(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $o(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ko(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function Hd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Zr||l===Jr,u=l===Ci||l===Ii;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ws(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let g=o.image;return c&&g&&g.height>0||u&&g&&s(g)?(e===null&&(e=new Ws(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Gd(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wd(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let y in f.attributes)t.remove(f.attributes[y]);for(let y in f.morphAttributes){let b=f.morphAttributes[y];for(let p=0,h=b.length;p<h;p++)t.remove(b[p])}f.removeEventListener("dispose",a),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let y in g){let b=g[y];for(let p=0,h=b.length;p<h;p++)t.update(b[p],i.ARRAY_BUFFER)}}function c(d){let f=[],g=d.index,y=d.attributes.position,b=0;if(g!==null){let A=g.array;b=g.version;for(let E=0,m=A.length;E<m;E+=3){let k=A[E+0],P=A[E+1],I=A[E+2];f.push(k,P,P,I,I,k)}}else if(y!==void 0){let A=y.array;b=y.version;for(let E=0,m=A.length/3-1;E<m;E+=3){let k=E+0,P=E+1,I=E+2;f.push(k,P,P,I,I,k)}}else return;let p=new(Ul(f)?Vs:ks)(f,1);p.version=b;let h=r.get(d);h&&t.remove(h),r.set(d,p)}function u(d){let f=r.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Xd(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*a),e.update(g,n,1)}function c(f,g,y){y!==0&&(i.drawElementsInstanced(n,g,r,f*a,y),e.update(g,n,y))}function u(f,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,y);let p=0;for(let h=0;h<y;h++)p+=g[h];e.update(p,n,1)}function d(f,g,y,b){if(y===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,g[h],b[h]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,b,0,y);let h=0;for(let A=0;A<y;A++)h+=g[A]*b[A];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qd(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yd(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let T=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),b===!0&&(E=3);let m=o.attributes.position.count*E,k=1;m>t.maxTextureSize&&(k=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let P=new Float32Array(m*k*4*d),I=new Bs(P,m,k,d);I.type=vn,I.needsUpdate=!0;let B=E*4;for(let _=0;_<d;_++){let C=p[_],W=h[_],X=A[_],K=m*k*4*_;for(let it=0;it<C.count;it++){let j=it*B;g===!0&&(s.fromBufferAttribute(C,it),P[K+j+0]=s.x,P[K+j+1]=s.y,P[K+j+2]=s.z,P[K+j+3]=0),y===!0&&(s.fromBufferAttribute(W,it),P[K+j+4]=s.x,P[K+j+5]=s.y,P[K+j+6]=s.z,P[K+j+7]=0),b===!0&&(s.fromBufferAttribute(X,it),P[K+j+8]=s.x,P[K+j+9]=s.y,P[K+j+10]=s.z,P[K+j+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new re(m,k)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let b=0;b<c.length;b++)g+=c[b];let y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zd(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Xs=class extends Oe{constructor(t,e,n,s,r,a,o,l,c,u=Ei){if(u!==Ei&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=jn),n===void 0&&u===Di&&(n=Li),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bl=new Oe,Qo=new Xs(1,1),zl=new Bs,kl=new Aa,Vl=new Gs,jo=[],tl=[],el=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function Bi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jo[s];if(r===void 0&&(r=new Float32Array(s),jo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ir(i,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $d(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Kd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Qd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function jd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;il.set(n),i.uniformMatrix2fv(this.addr,!1,il),we(e,n)}}function tf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;nl.set(n),i.uniformMatrix3fv(this.addr,!1,nl),we(e,n)}}function ef(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;el.set(n),i.uniformMatrix4fv(this.addr,!1,el),we(e,n)}}function nf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function rf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function af(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function of(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function cf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function uf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qo.compareFunction=Dl,r=Qo):r=Bl,e.setTexture2D(t||r,s)}function df(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kl,s)}function ff(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vl,s)}function pf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zl,s)}function mf(i){switch(i){case 5126:return Jd;case 35664:return $d;case 35665:return Kd;case 35666:return Qd;case 35674:return jd;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return af;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(i,t){i.uniform1fv(this.addr,t)}function _f(i,t){let e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function xf(i,t){let e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function vf(i,t){let e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function yf(i,t){let e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mf(i,t){let e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sf(i,t){let e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bf(i,t){i.uniform1iv(this.addr,t)}function wf(i,t){i.uniform2iv(this.addr,t)}function Ef(i,t){i.uniform3iv(this.addr,t)}function Tf(i,t){i.uniform4iv(this.addr,t)}function Af(i,t){i.uniform1uiv(this.addr,t)}function Rf(i,t){i.uniform2uiv(this.addr,t)}function Cf(i,t){i.uniform3uiv(this.addr,t)}function If(i,t){i.uniform4uiv(this.addr,t)}function Pf(i,t,e){let n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bl,r[a])}function Lf(i,t,e){let n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kl,r[a])}function Df(i,t,e){let n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vl,r[a])}function Uf(i,t,e){let n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zl,r[a])}function Nf(i){switch(i){case 5126:return gf;case 35664:return _f;case 35665:return xf;case 35666:return vf;case 35674:return yf;case 35675:return Mf;case 35676:return Sf;case 5124:case 35670:return bf;case 35667:case 35671:return wf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return Af;case 36294:return Rf;case 36295:return Cf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Uf}}var La=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mf(e.type)}},Da=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nf(e.type)}},Ua=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fr=/(\w+)(\])?(\[|\.)?/g;function sl(i,t){i.seq.push(t),i.map[t.id]=t}function Ff(i,t,e){let n=i.name,s=n.length;for(Fr.lastIndex=0;;){let r=Fr.exec(n),a=Fr.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sl(e,c===void 0?new La(o,i,t):new Da(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ua(o),sl(e,d)),e=d}}}var Ai=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ff(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function rl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Of=37297,Bf=0;function zf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var al=new Jt;function kf(i){ae._getMatrix(al,ae.workingColorSpace,i);let t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case nr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ol(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zf(i.getShaderSource(t),a)}else return s}function Vf(i,t){let e=kf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hf(i,t){let e;switch(t){case fc:e="Linear";break;case pc:e="Reinhard";break;case mc:e="Cineon";break;case gc:e="ACESFilmic";break;case xc:e="AgX";break;case vc:e="Neutral";break;case _c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rs=new z;function Gf(){ae.getLuminanceCoefficients(Rs);let i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function Xf(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qf(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zi(i){return i!==""}function ll(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(Yf,Jf)}var Zf=new Map;function Jf(i,t){let e=Kt[t];if(e===void 0){let n=Zf.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}var $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(i){return i.replace($f,Kf)}function Kf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ul(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Ii:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function ep(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case no:t="ENVMAP_BLENDING_MULTIPLY";break;case uc:t="ENVMAP_BLENDING_MIX";break;case dc:t="ENVMAP_BLENDING_ADD";break}return t}function np(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ip(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Qf(e),c=jf(e),u=tp(e),d=ep(e),f=np(e),g=Wf(e),y=Xf(r),b=s.createProgram(),p,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Zi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Zi).join(`
`),h.length>0&&(h+=`
`)):(p=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),h=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Hf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Vf("linearToOutputTexel",e.outputColorSpace),Gf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Na(a),a=ll(a,e),a=cl(a,e),o=Na(o),o=ll(o,e),o=cl(o,e),a=hl(a),o=hl(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=A+p+a,m=A+h+o,k=rl(s,s.VERTEX_SHADER,E),P=rl(s,s.FRAGMENT_SHADER,m);s.attachShader(b,k),s.attachShader(b,P),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(C){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(b).trim(),X=s.getShaderInfoLog(k).trim(),K=s.getShaderInfoLog(P).trim(),it=!0,j=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,k,P);else{let lt=ol(s,k,"vertex"),Z=ol(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+lt+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||K==="")&&(j=!1);j&&(C.diagnostics={runnable:it,programLog:W,vertexShader:{log:X,prefix:p},fragmentShader:{log:K,prefix:h}})}s.deleteShader(k),s.deleteShader(P),B=new Ai(s,b),T=qf(s,b)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(b,Of)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bf++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=P,this}var sp=0,Fa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oa(t),e.set(t,n)),n}},Oa=class{constructor(t){this.id=sp++,this.code=t,this.usedTimes=0}};function rp(i,t,e,n,s,r,a){let o=new zs,l=new Fa,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,_,C,W,X){let K=W.fog,it=X.geometry,j=T.isMeshStandardMaterial?W.environment:null,lt=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),Z=lt&&lt.mapping===er?lt.image.height:null,mt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));let Mt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Lt=Mt!==void 0?Mt.length:0,Ft=0;it.morphAttributes.position!==void 0&&(Ft=1),it.morphAttributes.normal!==void 0&&(Ft=2),it.morphAttributes.color!==void 0&&(Ft=3);let le,et,ct,Ct;if(mt){let ce=on[mt];le=ce.vertexShader,et=ce.fragmentShader}else le=T.vertexShader,et=T.fragmentShader,l.update(T),ct=l.getVertexShaderID(T),Ct=l.getFragmentShaderID(T);let pt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Wt=X.isInstancedMesh===!0,Qt=X.isBatchedMesh===!0,fe=!!T.map,te=!!T.matcap,ge=!!lt,F=!!T.aoMap,Pe=!!T.lightMap,ne=!!T.bumpMap,ee=!!T.normalMap,Vt=!!T.displacementMap,kt=!!T.emissiveMap,It=!!T.metalnessMap,w=!!T.roughnessMap,x=T.anisotropy>0,V=T.clearcoat>0,Q=T.dispersion>0,q=T.iridescence>0,$=T.sheen>0,Dt=T.transmission>0,gt=x&&!!T.anisotropyMap,St=V&&!!T.clearcoatMap,jt=V&&!!T.clearcoatNormalMap,at=V&&!!T.clearcoatRoughnessMap,wt=q&&!!T.iridescenceMap,Ut=q&&!!T.iridescenceThicknessMap,Ht=$&&!!T.sheenColorMap,Et=$&&!!T.sheenRoughnessMap,ie=!!T.specularMap,Zt=!!T.specularColorMap,he=!!T.specularIntensityMap,L=Dt&&!!T.transmissionMap,dt=Dt&&!!T.thicknessMap,Y=!!T.gradientMap,nt=!!T.alphaMap,xt=T.alphaTest>0,vt=!!T.alphaHash,Yt=!!T.extensions,pe=Dn;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(pe=i.toneMapping);let ve={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:et,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:Ct,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&X._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&X.instanceColor!==null,instancingMorph:Wt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Oi,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:te,envMap:ge,envMapMode:ge&&lt.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:Pe,bumpMap:ne,normalMap:ee,displacementMap:f&&Vt,emissiveMap:kt,normalMapObjectSpace:ee&&T.normalMapType===bc,normalMapTangentSpace:ee&&T.normalMapType===Ll,metalnessMap:It,roughnessMap:w,anisotropy:x,anisotropyMap:gt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:jt,clearcoatRoughnessMap:at,dispersion:Q,iridescence:q,iridescenceMap:wt,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:ie,specularColorMap:Zt,specularIntensityMap:he,transmission:Dt,transmissionMap:L,thicknessMap:dt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===wi&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:vt,combine:T.combine,mapUv:fe&&b(T.map.channel),aoMapUv:F&&b(T.aoMap.channel),lightMapUv:Pe&&b(T.lightMap.channel),bumpMapUv:ne&&b(T.bumpMap.channel),normalMapUv:ee&&b(T.normalMap.channel),displacementMapUv:Vt&&b(T.displacementMap.channel),emissiveMapUv:kt&&b(T.emissiveMap.channel),metalnessMapUv:It&&b(T.metalnessMap.channel),roughnessMapUv:w&&b(T.roughnessMap.channel),anisotropyMapUv:gt&&b(T.anisotropyMap.channel),clearcoatMapUv:St&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:jt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Et&&b(T.sheenRoughnessMap.channel),specularMapUv:ie&&b(T.specularMap.channel),specularColorMapUv:Zt&&b(T.specularColorMap.channel),specularIntensityMapUv:he&&b(T.specularIntensityMap.channel),transmissionMapUv:L&&b(T.transmissionMap.channel),thicknessMapUv:dt&&b(T.thicknessMap.channel),alphaMapUv:nt&&b(T.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(ee||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!it.attributes.uv&&(fe||nt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:X.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&ae.getTransfer(T.map.colorSpace)===ue,decodeVideoTextureEmissive:kt&&T.emissiveMap.isVideoTexture===!0&&ae.getTransfer(T.emissiveMap.colorSpace)===ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ke,flipSided:T.side===Fe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function h(T){let _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(let C in T.defines)_.push(C),_.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(A(_,T),E(_,T),_.push(i.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function A(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function E(T,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),T.push(o.mask)}function m(T){let _=y[T.type],C;if(_){let W=on[_];C=co.clone(W.uniforms)}else C=T.uniforms;return C}function k(T,_){let C;for(let W=0,X=u.length;W<X;W++){let K=u[W];if(K.cacheKey===_){C=K,++C.usedTimes;break}}return C===void 0&&(C=new ip(i,_,T,r),u.push(C)),C}function P(T){if(--T.usedTimes===0){let _=u.indexOf(T);u[_]=u[u.length-1],u.pop(),T.destroy()}}function I(T){l.remove(T)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:m,acquireProgram:k,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:B}}function ap(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,g,y,b,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:g,groupOrder:y,renderOrder:d.renderOrder,z:b,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=g,h.groupOrder=y,h.renderOrder=d.renderOrder,h.z=b,h.group=p),t++,h}function o(d,f,g,y,b,p){let h=a(d,f,g,y,b,p);g.transmission>0?n.push(h):g.transparent===!0?s.push(h):e.push(h)}function l(d,f,g,y,b,p){let h=a(d,f,g,y,b,p);g.transmission>0?n.unshift(h):g.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||op),n.length>1&&n.sort(f||dl),s.length>1&&s.sort(f||dl)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function lp(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new fl,i.set(n,[a])):s>=r.length?(a=new fl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new $t};break;case"SpotLight":e={position:new z,direction:new z,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function hp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var up=0;function dp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fp(i){let t=new cp,e=hp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new me,a=new me;function o(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,y=0,b=0,p=0,h=0,A=0,E=0,m=0,k=0,P=0,I=0;c.sort(dp);for(let T=0,_=c.length;T<_;T++){let C=c[T],W=C.color,X=C.intensity,K=C.distance,it=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=W.r*X,d+=W.g*X,f+=W.b*X;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],X);I++}else if(C.isDirectionalLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let lt=C.shadow,Z=e.get(C);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=C.shadow.matrix,A++}n.directional[g]=j,g++}else if(C.isSpotLight){let j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(W).multiplyScalar(X),j.distance=K,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[b]=j;let lt=C.shadow;if(C.map&&(n.spotLightMap[k]=C.map,k++,lt.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[b]=lt.matrix,C.castShadow){let Z=e.get(C);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,n.spotShadow[b]=Z,n.spotShadowMap[b]=it,m++}b++}else if(C.isRectAreaLight){let j=t.get(C);j.color.copy(W).multiplyScalar(X),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=j,p++}else if(C.isPointLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){let lt=C.shadow,Z=e.get(C);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,Z.shadowCameraNear=lt.camera.near,Z.shadowCameraFar=lt.camera.far,n.pointShadow[y]=Z,n.pointShadowMap[y]=it,n.pointShadowMatrix[y]=C.shadow.matrix,E++}n.point[y]=j,y++}else if(C.isHemisphereLight){let j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(X),j.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[h]=j,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let B=n.hash;(B.directionalLength!==g||B.pointLength!==y||B.spotLength!==b||B.rectAreaLength!==p||B.hemiLength!==h||B.numDirectionalShadows!==A||B.numPointShadows!==E||B.numSpotShadows!==m||B.numSpotMaps!==k||B.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=p,n.point.length=y,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=m+k-P,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,B.directionalLength=g,B.pointLength=y,B.spotLength=b,B.rectAreaLength=p,B.hemiLength=h,B.numDirectionalShadows=A,B.numPointShadows=E,B.numSpotShadows=m,B.numSpotMaps=k,B.numLightProbes=I,n.version=up++)}function l(c,u){let d=0,f=0,g=0,y=0,b=0,p=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){let E=c[h];if(E.isDirectionalLight){let m=n.directional[d];m.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(p),d++}else if(E.isSpotLight){let m=n.spot[g];m.position.setFromMatrixPosition(E.matrixWorld),m.position.applyMatrix4(p),m.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let m=n.rectArea[y];m.position.setFromMatrixPosition(E.matrixWorld),m.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),m.halfWidth.set(E.width*.5,0,0),m.halfHeight.set(0,E.height*.5,0),m.halfWidth.applyMatrix4(a),m.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let m=n.point[f];m.position.setFromMatrixPosition(E.matrixWorld),m.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let m=n.hemi[b];m.direction.setFromMatrixPosition(E.matrixWorld),m.direction.transformDirection(p),b++}}}return{setup:o,setupView:l,state:n}}function pl(i){let t=new fp(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pp(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new pl(i),t.set(s,[o])):r>=a.length?(o=new pl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ba=class extends ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gp=`uniform sampler2D shadow_pass;
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
}`;function _p(i,t,e){let n=new ji,s=new re,r=new re,a=new oe,o=new Ba({depthPacking:Sc}),l=new za,c={},u=e.maxTextureSize,d={[Un]:Fe,[Fe]:Un,[Ke]:Ke},f=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:mp,fragmentShader:gp}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let y=new nn;y.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Me(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let h=this.type;this.render=function(P,I,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Ln),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let X=h!==xn&&this.type===xn,K=h===xn&&this.type!==xn;for(let it=0,j=P.length;it<j;it++){let lt=P[it],Z=lt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let mt=Z.getFrameExtents();if(s.multiply(mt),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,Z.mapSize.y=r.y)),Z.map===null||X===!0||K===!0){let Lt=this.type!==xn?{minFilter:tn,magFilter:tn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new en(s.x,s.y,Lt),Z.map.texture.name=lt.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let Mt=Z.getViewportCount();for(let Lt=0;Lt<Mt;Lt++){let Ft=Z.getViewport(Lt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),W.viewport(a),Z.updateMatrices(lt,Lt),n=Z.getFrustum(),m(I,B,Z.camera,lt,this.type)}Z.isPointLightShadow!==!0&&this.type===xn&&A(Z,B),Z.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(T,_,C)};function A(P,I){let B=t.update(b);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,B,f,b,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,B,g,b,null)}function E(P,I,B,T){let _=null,C=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)_=C;else if(_=B.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let W=_.uuid,X=I.uuid,K=c[W];K===void 0&&(K={},c[W]=K);let it=K[X];it===void 0&&(it=_.clone(),K[X]=it,I.addEventListener("dispose",k)),_=it}if(_.visible=I.visible,_.wireframe=I.wireframe,T===xn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:d[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let W=i.properties.get(_);W.light=B}return _}function m(P,I,B,T,_){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===xn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);let X=t.update(P),K=P.material;if(Array.isArray(K)){let it=X.groups;for(let j=0,lt=it.length;j<lt;j++){let Z=it[j],mt=K[Z.materialIndex];if(mt&&mt.visible){let Mt=E(P,mt,T,_);P.onBeforeShadow(i,P,I,B,X,Mt,Z),i.renderBufferDirect(B,null,X,Mt,P,Z),P.onAfterShadow(i,P,I,B,X,Mt,Z)}}}else if(K.visible){let it=E(P,K,T,_);P.onBeforeShadow(i,P,I,B,X,it,null),i.renderBufferDirect(B,null,X,it,P,null),P.onAfterShadow(i,P,I,B,X,it,null)}}let W=P.children;for(let X=0,K=W.length;X<K;X++)m(W[X],I,B,T,_)}function k(P){P.target.removeEventListener("dispose",k);for(let B in c){let T=c[B],_=P.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}var xp={[Vr]:Hr,[Gr]:qr,[Wr]:Yr,[Ri]:Xr,[Hr]:Vr,[qr]:Gr,[Yr]:Wr,[Xr]:Ri};function vp(i,t){function e(){let L=!1,dt=new oe,Y=null,nt=new oe(0,0,0,0);return{setMask:function(xt){Y!==xt&&!L&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){L=xt},setClear:function(xt,vt,Yt,pe,ve){ve===!0&&(xt*=pe,vt*=pe,Yt*=pe),dt.set(xt,vt,Yt,pe),nt.equals(dt)===!1&&(i.clearColor(xt,vt,Yt,pe),nt.copy(dt))},reset:function(){L=!1,Y=null,nt.set(-1,0,0,0)}}}function n(){let L=!1,dt=!1,Y=null,nt=null,xt=null;return{setReversed:function(vt){if(dt!==vt){let Yt=t.get("EXT_clip_control");dt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let pe=xt;xt=null,this.setClear(pe)}dt=vt},getReversed:function(){return dt},setTest:function(vt){vt?pt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!L&&(i.depthMask(vt),Y=vt)},setFunc:function(vt){if(dt&&(vt=xp[vt]),nt!==vt){switch(vt){case Vr:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case qr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=vt}},setLocked:function(vt){L=vt},setClear:function(vt){xt!==vt&&(dt&&(vt=1-vt),i.clearDepth(vt),xt=vt)},reset:function(){L=!1,Y=null,nt=null,xt=null,dt=!1}}}function s(){let L=!1,dt=null,Y=null,nt=null,xt=null,vt=null,Yt=null,pe=null,ve=null;return{setTest:function(ce){L||(ce?pt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ce){dt!==ce&&!L&&(i.stencilMask(ce),dt=ce)},setFunc:function(ce,De,Xe){(Y!==ce||nt!==De||xt!==Xe)&&(i.stencilFunc(ce,De,Xe),Y=ce,nt=De,xt=Xe)},setOp:function(ce,De,Xe){(vt!==ce||Yt!==De||pe!==Xe)&&(i.stencilOp(ce,De,Xe),vt=ce,Yt=De,pe=Xe)},setLocked:function(ce){L=ce},setClear:function(ce){ve!==ce&&(i.clearStencil(ce),ve=ce)},reset:function(){L=!1,dt=null,Y=null,nt=null,xt=null,vt=null,Yt=null,pe=null,ve=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,g=[],y=null,b=!1,p=null,h=null,A=null,E=null,m=null,k=null,P=null,I=new $t(0,0,0),B=0,T=!1,_=null,C=null,W=null,X=null,K=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,lt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=lt>=1):Z.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=lt>=2);let mt=null,Mt={},Lt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),le=new oe().fromArray(Lt),et=new oe().fromArray(Ft);function ct(L,dt,Y,nt){let xt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(L,vt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Y;Yt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(dt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return vt}let Ct={};Ct[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(Ri),ne(!1),ee(go),pt(i.CULL_FACE),F(Ln);function pt(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function zt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Wt(L,dt){return d[L]!==dt?(i.bindFramebuffer(L,dt),d[L]=dt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Qt(L,dt){let Y=g,nt=!1;if(L){Y=f.get(dt),Y===void 0&&(Y=[],f.set(dt,Y));let xt=L.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Yt=xt.length;vt<Yt;vt++)Y[vt]=i.COLOR_ATTACHMENT0+vt;Y.length=xt.length,nt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Y)}function fe(L){return y!==L?(i.useProgram(L),y=L,!0):!1}let te={[Zn]:i.FUNC_ADD,[Zl]:i.FUNC_SUBTRACT,[Jl]:i.FUNC_REVERSE_SUBTRACT};te[$l]=i.MIN,te[Kl]=i.MAX;let ge={[Ql]:i.ZERO,[jl]:i.ONE,[tc]:i.SRC_COLOR,[zr]:i.SRC_ALPHA,[ac]:i.SRC_ALPHA_SATURATE,[sc]:i.DST_COLOR,[nc]:i.DST_ALPHA,[ec]:i.ONE_MINUS_SRC_COLOR,[kr]:i.ONE_MINUS_SRC_ALPHA,[rc]:i.ONE_MINUS_DST_COLOR,[ic]:i.ONE_MINUS_DST_ALPHA,[oc]:i.CONSTANT_COLOR,[lc]:i.ONE_MINUS_CONSTANT_COLOR,[cc]:i.CONSTANT_ALPHA,[hc]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,dt,Y,nt,xt,vt,Yt,pe,ve,ce){if(L===Ln){b===!0&&(zt(i.BLEND),b=!1);return}if(b===!1&&(pt(i.BLEND),b=!0),L!==Yl){if(L!==p||ce!==T){if((h!==Zn||m!==Zn)&&(i.blendEquation(i.FUNC_ADD),h=Zn,m=Zn),ce)switch(L){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _o:i.blendFunc(i.ONE,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,E=null,k=null,P=null,I.set(0,0,0),B=0,p=L,T=ce}return}xt=xt||dt,vt=vt||Y,Yt=Yt||nt,(dt!==h||xt!==m)&&(i.blendEquationSeparate(te[dt],te[xt]),h=dt,m=xt),(Y!==A||nt!==E||vt!==k||Yt!==P)&&(i.blendFuncSeparate(ge[Y],ge[nt],ge[vt],ge[Yt]),A=Y,E=nt,k=vt,P=Yt),(pe.equals(I)===!1||ve!==B)&&(i.blendColor(pe.r,pe.g,pe.b,ve),I.copy(pe),B=ve),p=L,T=!1}function Pe(L,dt){L.side===Ke?zt(i.CULL_FACE):pt(i.CULL_FACE);let Y=L.side===Fe;dt&&(Y=!Y),ne(Y),L.blending===wi&&L.transparent===!1?F(Ln):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let nt=L.stencilWrite;o.setTest(nt),nt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function ee(L){L!==Wl?(pt(i.CULL_FACE),L!==C&&(L===go?i.cullFace(i.BACK):L===Xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),C=L}function Vt(L){L!==W&&(j&&i.lineWidth(L),W=L)}function kt(L,dt,Y){L?(pt(i.POLYGON_OFFSET_FILL),(X!==dt||K!==Y)&&(i.polygonOffset(dt,Y),X=dt,K=Y)):zt(i.POLYGON_OFFSET_FILL)}function It(L){L?pt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+it-1),mt!==L&&(i.activeTexture(L),mt=L)}function x(L,dt,Y){Y===void 0&&(mt===null?Y=i.TEXTURE0+it-1:Y=mt);let nt=Mt[Y];nt===void 0&&(nt={type:void 0,texture:void 0},Mt[Y]=nt),(nt.type!==L||nt.texture!==dt)&&(mt!==Y&&(i.activeTexture(Y),mt=Y),i.bindTexture(L,dt||Ct[L]),nt.type=L,nt.texture=dt)}function V(){let L=Mt[mt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(L){le.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function Et(L){et.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),et.copy(L))}function ie(L,dt){let Y=c.get(dt);Y===void 0&&(Y=new WeakMap,c.set(dt,Y));let nt=Y.get(L);nt===void 0&&(nt=i.getUniformBlockIndex(dt,L.name),Y.set(L,nt))}function Zt(L,dt){let nt=c.get(dt).get(L);l.get(dt)!==nt&&(i.uniformBlockBinding(dt,nt,L.__bindingPointIndex),l.set(dt,nt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,Mt={},d={},f=new WeakMap,g=[],y=null,b=!1,p=null,h=null,A=null,E=null,m=null,k=null,P=null,I=new $t(0,0,0),B=0,T=!1,_=null,C=null,W=null,X=null,K=null,le.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:zt,bindFramebuffer:Wt,drawBuffers:Qt,useProgram:fe,setBlending:F,setMaterial:Pe,setFlipSided:ne,setCullFace:ee,setLineWidth:Vt,setPolygonOffset:kt,setScissorTest:It,activeTexture:w,bindTexture:x,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:q,texImage2D:wt,texImage3D:Ut,updateUBOMapping:ie,uniformBlockBinding:Zt,texStorage2D:jt,texStorage3D:at,texSubImage2D:$,texSubImage3D:Dt,compressedTexSubImage2D:gt,compressedTexSubImage3D:St,scissor:Ht,viewport:Et,reset:he}}function ml(i,t,e,n){let s=yp(n);switch(e){case El:return i*t;case Al:return i*t;case Rl:return i*t*2;case Cl:return i*t/s.components*s.byteLength;case ao:return i*t/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case oo:return i*t*2/s.components*s.byteLength;case Tl:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:case ta:return Math.max(i,16)*Math.max(t,8)/4;case Kr:case jr:return Math.max(i,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Us:case xa:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(i){switch(i){case Sn:case Sl:return{byteLength:1,components:1};case $i:case bl:case ri:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case jn:case io:case vn:return{byteLength:4,components:1};case wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,x){return g?new OffscreenCanvas(w,x):Ki("canvas")}function b(w,x,V){let Q=1,q=It(w);if((q.width>V||q.height>V)&&(Q=V/Math.max(q.width,q.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let $=Math.floor(Q*q.width),Dt=Math.floor(Q*q.height);d===void 0&&(d=y($,Dt));let gt=x?y($,Dt):d;return gt.width=$,gt.height=Dt,gt.getContext("2d").drawImage(w,0,0,$,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+$+"x"+Dt+")."),gt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function p(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,V,Q,q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),x===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){let Dt=q?nr:ae.getTransfer(Q);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=Dt===ue?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function m(w,x){let V;return w?x===null||x===jn||x===Li?V=i.DEPTH24_STENCIL8:x===vn?V=i.DEPTH32F_STENCIL8:x===$i&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===jn||x===Li?V=i.DEPTH_COMPONENT24:x===vn?V=i.DEPTH_COMPONENT32F:x===$i&&(V=i.DEPTH_COMPONENT16),V}function k(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){let x=w.target;x.removeEventListener("dispose",P),B(x),x.isVideoTexture&&u.delete(x)}function I(w){let x=w.target;x.removeEventListener("dispose",I),_(x)}function B(w){let x=n.get(w);if(x.__webglInit===void 0)return;let V=w.source,Q=f.get(V);if(Q){let q=Q[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&T(w),Object.keys(Q).length===0&&f.delete(V)}n.remove(w)}function T(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let V=w.source,Q=f.get(V);delete Q[x.__cacheKey],a.memory.textures--}function _(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let q=0;q<x.__webglFramebuffer[Q].length;q++)i.deleteFramebuffer(x.__webglFramebuffer[Q][q]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=w.textures;for(let Q=0,q=V.length;Q<q;Q++){let $=n.get(V[Q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[Q])}n.remove(w)}let C=0;function W(){C=0}function X(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function K(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function it(w,x){let V=n.get(w);if(w.isVideoTexture&&Vt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(V,w,x);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function j(w,x){let V=n.get(w);if(w.version>0&&V.__version!==w.version){et(V,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function lt(w,x){let V=n.get(w);if(w.version>0&&V.__version!==w.version){et(V,w,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function Z(w,x){let V=n.get(w);if(w.version>0&&V.__version!==w.version){ct(V,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let mt={[Pi]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},Mt={[tn]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Lt={[wc]:i.NEVER,[Ic]:i.ALWAYS,[Ec]:i.LESS,[Dl]:i.LEQUAL,[Tc]:i.EQUAL,[Cc]:i.GEQUAL,[Ac]:i.GREATER,[Rc]:i.NOTEQUAL};function Ft(w,x){if(x.type===vn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===or||x.magFilter===ls||x.magFilter===Qn||x.minFilter===ln||x.minFilter===or||x.minFilter===ls||x.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,mt[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,mt[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,mt[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Mt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==ls&&x.minFilter!==Qn||x.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(w,x){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",P));let Q=x.source,q=f.get(Q);q===void 0&&(q={},f.set(Q,q));let $=K(x);if($!==w.__cacheKey){q[$]===void 0&&(q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),q[$].usedTimes++;let Dt=q[w.__cacheKey];Dt!==void 0&&(q[w.__cacheKey].usedTimes--,Dt.usedTimes===0&&T(x)),w.__cacheKey=$,w.__webglTexture=q[$].texture}return V}function et(w,x,V){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let q=le(w,x),$=x.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+V);let Dt=n.get($);if($.version!==Dt.__version||q===!0){e.activeTexture(i.TEXTURE0+V);let gt=ae.getPrimaries(ae.workingColorSpace),St=x.colorSpace===Pn?null:ae.getPrimaries(x.colorSpace),jt=x.colorSpace===Pn||gt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let at=b(x.image,!1,s.maxTextureSize);at=kt(x,at);let wt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),Ht=E(x.internalFormat,wt,Ut,x.colorSpace,x.isVideoTexture);Ft(Q,x);let Et,ie=x.mipmaps,Zt=x.isVideoTexture!==!0,he=Dt.__version===void 0||q===!0,L=$.dataReady,dt=k(x,at);if(x.isDepthTexture)Ht=m(x.format===Di,x.type),he&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,wt,Ut,null));else if(x.isDataTexture)if(ie.length>0){Zt&&he&&e.texStorage2D(i.TEXTURE_2D,dt,Ht,ie[0].width,ie[0].height);for(let Y=0,nt=ie.length;Y<nt;Y++)Et=ie[Y],Zt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,wt,Ut,Et.data);x.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(i.TEXTURE_2D,dt,Ht,at.width,at.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,wt,Ut,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,wt,Ut,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ht,ie[0].width,ie[0].height,at.depth);for(let Y=0,nt=ie.length;Y<nt;Y++)if(Et=ie[Y],x.format!==Qe)if(wt!==null)if(Zt){if(L)if(x.layerUpdates.size>0){let xt=ml(Et.width,Et.height,x.format,x.type);for(let vt of x.layerUpdates){let Yt=Et.data.subarray(vt*xt/Et.data.BYTES_PER_ELEMENT,(vt+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,vt,Et.width,Et.height,1,wt,Yt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,at.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ht,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,at.depth,wt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ht,Et.width,Et.height,at.depth,0,wt,Ut,Et.data)}else{Zt&&he&&e.texStorage2D(i.TEXTURE_2D,dt,Ht,ie[0].width,ie[0].height);for(let Y=0,nt=ie.length;Y<nt;Y++)Et=ie[Y],x.format!==Qe?wt!==null?Zt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,wt,Ut,Et.data)}else if(x.isDataArrayTexture)if(Zt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ht,at.width,at.height,at.depth),L)if(x.layerUpdates.size>0){let Y=ml(at.width,at.height,x.format,x.type);for(let nt of x.layerUpdates){let xt=at.data.subarray(nt*Y/at.data.BYTES_PER_ELEMENT,(nt+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,wt,Ut,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Ut,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,wt,Ut,at.data);else if(x.isData3DTexture)Zt?(he&&e.texStorage3D(i.TEXTURE_3D,dt,Ht,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Ut,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,wt,Ut,at.data);else if(x.isFramebufferTexture){if(he)if(Zt)e.texStorage2D(i.TEXTURE_2D,dt,Ht,at.width,at.height);else{let Y=at.width,nt=at.height;for(let xt=0;xt<dt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ht,Y,nt,0,wt,Ut,null),Y>>=1,nt>>=1}}else if(ie.length>0){if(Zt&&he){let Y=It(ie[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ht,Y.width,Y.height)}for(let Y=0,nt=ie.length;Y<nt;Y++)Et=ie[Y],Zt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,wt,Ut,Et):e.texImage2D(i.TEXTURE_2D,Y,Ht,wt,Ut,Et);x.generateMipmaps=!1}else if(Zt){if(he){let Y=It(at);e.texStorage2D(i.TEXTURE_2D,dt,Ht,Y.width,Y.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ut,at)}else e.texImage2D(i.TEXTURE_2D,0,Ht,wt,Ut,at);p(x)&&h(Q),Dt.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ct(w,x,V){if(x.image.length!==6)return;let Q=le(w,x),q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);let $=n.get(q);if(q.version!==$.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);let Dt=ae.getPrimaries(ae.workingColorSpace),gt=x.colorSpace===Pn?null:ae.getPrimaries(x.colorSpace),St=x.colorSpace===Pn||Dt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let jt=x.isCompressedTexture||x.image[0].isCompressedTexture,at=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let nt=0;nt<6;nt++)!jt&&!at?wt[nt]=b(x.image[nt],!0,s.maxCubemapSize):wt[nt]=at?x.image[nt].image:x.image[nt],wt[nt]=kt(x,wt[nt]);let Ut=wt[0],Ht=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),ie=E(x.internalFormat,Ht,Et,x.colorSpace),Zt=x.isVideoTexture!==!0,he=$.__version===void 0||Q===!0,L=q.dataReady,dt=k(x,Ut);Ft(i.TEXTURE_CUBE_MAP,x);let Y;if(jt){Zt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ie,Ut.width,Ut.height);for(let nt=0;nt<6;nt++){Y=wt[nt].mipmaps;for(let xt=0;xt<Y.length;xt++){let vt=Y[xt];x.format!==Qe?Ht!==null?Zt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,vt.width,vt.height,Ht,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,ie,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,vt.width,vt.height,Ht,Et,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,ie,vt.width,vt.height,0,Ht,Et,vt.data)}}}else{if(Y=x.mipmaps,Zt&&he){Y.length>0&&dt++;let nt=It(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ie,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt[nt].width,wt[nt].height,Ht,Et,wt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ie,wt[nt].width,wt[nt].height,0,Ht,Et,wt[nt].data);for(let xt=0;xt<Y.length;xt++){let Yt=Y[xt].image[nt].image;Zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Yt.width,Yt.height,Ht,Et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,ie,Yt.width,Yt.height,0,Ht,Et,Yt.data)}}else{Zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ht,Et,wt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ie,Ht,Et,wt[nt]);for(let xt=0;xt<Y.length;xt++){let vt=Y[xt];Zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Ht,Et,vt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,ie,Ht,Et,vt.image[nt])}}}p(x)&&h(i.TEXTURE_CUBE_MAP),$.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ct(w,x,V,Q,q,$){let Dt=r.convert(V.format,V.colorSpace),gt=r.convert(V.type),St=E(V.internalFormat,Dt,gt,V.colorSpace),jt=n.get(x),at=n.get(V);if(at.__renderTarget=x,!jt.__hasExternalTextures){let wt=Math.max(1,x.width>>$),Ut=Math.max(1,x.height>>$);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,$,St,wt,Ut,x.depth,0,Dt,gt,null):e.texImage2D(q,$,St,wt,Ut,0,Dt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ee(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,q,at.__webglTexture,0,ne(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,q,at.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(w,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let Q=x.depthTexture,q=Q&&Q.isDepthTexture?Q.type:null,$=m(x.stencilBuffer,q),Dt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ne(x);ee(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,$,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,w)}else{let Q=x.textures;for(let q=0;q<Q.length;q++){let $=Q[q],Dt=r.convert($.format,$.colorSpace),gt=r.convert($.type),St=E($.internalFormat,Dt,gt,$.colorSpace),jt=ne(x);V&&ee(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,St,x.width,x.height):ee(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,St,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,St,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),it(x.depthTexture,0);let q=Q.__webglTexture,$=ne(x);if(x.depthTexture.format===Ei)ee(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===Di)ee(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Wt(w){let x=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",q)};Q.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=Q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(x.__webglFramebuffer,w)}else if(V){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),pt(x.__webglDepthbuffer[Q],w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pt(x.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(w,x,V){let Q=n.get(w);x!==void 0&&Ct(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Wt(w)}function fe(w){let x=w.texture,V=n.get(w),Q=n.get(x);w.addEventListener("dispose",I);let q=w.textures,$=w.isWebGLCubeRenderTarget===!0,Dt=q.length>1;if(Dt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let St=0;St<x.mipmaps.length;St++)V.__webglFramebuffer[gt][St]=i.createFramebuffer()}else V.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<x.mipmaps.length;gt++)V.__webglFramebuffer[gt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let gt=0,St=q.length;gt<St;gt++){let jt=n.get(q[gt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ee(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<q.length;gt++){let St=q[gt];V.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);let jt=r.convert(St.format,St.colorSpace),at=r.convert(St.type),wt=E(St.internalFormat,jt,at,St.colorSpace,w.isXRRenderTarget===!0),Ut=ne(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,wt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)Ct(V.__webglFramebuffer[gt][St],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else Ct(V.__webglFramebuffer[gt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let gt=0,St=q.length;gt<St;gt++){let jt=q[gt],at=n.get(jt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Ft(i.TEXTURE_2D,jt),Ct(V.__webglFramebuffer,w,jt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),p(jt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(gt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Q.__webglTexture),Ft(gt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)Ct(V.__webglFramebuffer[St],w,x,i.COLOR_ATTACHMENT0,gt,St);else Ct(V.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,gt,0);p(x)&&h(gt),e.unbindTexture()}w.depthBuffer&&Wt(w)}function te(w){let x=w.textures;for(let V=0,Q=x.length;V<Q;V++){let q=x[V];if(p(q)){let $=A(w),Dt=n.get(q).__webglTexture;e.bindTexture($,Dt),h($),e.unbindTexture()}}}let ge=[],F=[];function Pe(w){if(w.samples>0){if(ee(w)===!1){let x=w.textures,V=w.width,Q=w.height,q=i.COLOR_BUFFER_BIT,$=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(w),gt=x.length>1;if(gt)for(let St=0;St<x.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[St]);let jt=n.get(x[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,q,i.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+St),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ge.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<x.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[St]);let jt=n.get(x[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ne(w){return Math.min(s.maxSamples,w.samples)}function ee(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Vt(w){let x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function kt(w,x){let V=w.colorSpace,Q=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Oi&&V!==Pn&&(ae.getTransfer(V)===ue?(Q!==Qe||q!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function It(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=it,this.setTexture2DArray=j,this.setTexture3D=lt,this.setTextureCube=Z,this.rebindTextures=Qt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ee}function Sp(i,t){function e(n,s=Pn){let r,a=ae.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.BYTE;if(n===bl)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===Tl)return i.RGB;if(n===Qe)return i.RGBA;if(n===Al)return i.LUMINANCE;if(n===Rl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===Il)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Is||n===Ps||n===Ls||n===Ds)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kr||n===Qr||n===jr||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===xa||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===ya||n===Ma||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ka=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},je=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let p=e.getJointPose(b,n),h=this._getHandJoint(c,b);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ep=`
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

}`,Va=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:wp,fragmentShader:Ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ha=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,g=null,y=null,b=new Va,p=e.getContextAttributes(),h=null,A=null,E=[],m=[],k=new re,P=null,I=new Te;I.viewport=new oe;let B=new Te;B.viewport=new oe;let T=[I,B],_=new ka,C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=E[et];return ct===void 0&&(ct=new Ji,E[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=E[et];return ct===void 0&&(ct=new Ji,E[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=E[et];return ct===void 0&&(ct=new Ji,E[et]=ct),ct.getHandSpace()};function X(et){let ct=m.indexOf(et.inputSource);if(ct===-1)return;let Ct=E[ct];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,c||a),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",it);for(let et=0;et<E.length;et++){let ct=m[et];ct!==null&&(m[et]=null,E[et].disconnect(ct))}C=null,W=null,b.reset(),t.setRenderTarget(h),g=null,f=null,d=null,s=null,A=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",it),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let ct={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new en(g.framebufferWidth,g.framebufferHeight,{format:Qe,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ct=null,Ct=null,pt=null;p.depth&&(pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=p.stencil?Di:Ei,Ct=p.stencil?Li:jn);let zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new en(f.textureWidth,f.textureHeight,{format:Qe,type:Sn,depthTexture:new Xs(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function it(et){for(let ct=0;ct<et.removed.length;ct++){let Ct=et.removed[ct],pt=m.indexOf(Ct);pt>=0&&(m[pt]=null,E[pt].disconnect(Ct))}for(let ct=0;ct<et.added.length;ct++){let Ct=et.added[ct],pt=m.indexOf(Ct);if(pt===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=m.length){m.push(Ct),pt=Wt;break}else if(m[Wt]===null){m[Wt]=Ct,pt=Wt;break}if(pt===-1)break}let zt=E[pt];zt&&zt.connect(Ct)}}let j=new z,lt=new z;function Z(et,ct,Ct){j.setFromMatrixPosition(ct.matrixWorld),lt.setFromMatrixPosition(Ct.matrixWorld);let pt=j.distanceTo(lt),zt=ct.projectionMatrix.elements,Wt=Ct.projectionMatrix.elements,Qt=zt[14]/(zt[10]-1),fe=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],ge=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],Pe=(Wt[8]+1)/Wt[0],ne=Qt*F,ee=Qt*Pe,Vt=pt/(-F+Pe),kt=Vt*-F;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(kt),et.translateZ(Vt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let It=Qt+Vt,w=fe+Vt,x=ne-kt,V=ee+(pt-kt),Q=te*fe/w*It,q=ge*fe/w*It;et.projectionMatrix.makePerspective(x,V,Q,q,It,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function mt(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ct=et.near,Ct=et.far;b.texture!==null&&(b.depthNear>0&&(ct=b.depthNear),b.depthFar>0&&(Ct=b.depthFar)),_.near=B.near=I.near=ct,_.far=B.far=I.far=Ct,(C!==_.near||W!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,W=_.far),I.layers.mask=et.layers.mask|2,B.layers.mask=et.layers.mask|4,_.layers.mask=I.layers.mask|B.layers.mask;let pt=et.parent,zt=_.cameras;mt(_,pt);for(let Wt=0;Wt<zt.length;Wt++)mt(zt[Wt],pt);zt.length===2?Z(_,I,B):_.projectionMatrix.copy(I.projectionMatrix),Mt(et,_,pt)};function Mt(et,ct,Ct){Ct===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=wa*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=et)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(_)};let Lt=null;function Ft(et,ct){if(u=ct.getViewerPose(c||a),y=ct,u!==null){let Ct=u.views;g!==null&&(t.setRenderTargetFramebuffer(A,g.framebuffer),t.setRenderTarget(A));let pt=!1;Ct.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let Wt=0;Wt<Ct.length;Wt++){let Qt=Ct[Wt],fe=null;if(g!==null)fe=g.getViewport(Qt);else{let ge=d.getViewSubImage(f,Qt);fe=ge.viewport,Wt===0&&(t.setRenderTargetTextures(A,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(A))}let te=T[Wt];te===void 0&&(te=new Te,te.layers.enable(Wt),te.viewport=new oe,T[Wt]=te),te.matrix.fromArray(Qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(fe.x,fe.y,fe.width,fe.height),Wt===0&&(_.matrix.copy(te.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(te)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Wt=d.getDepthInformation(Ct[0]);Wt&&Wt.isValid&&Wt.texture&&b.init(t,Wt,s.renderState)}}for(let Ct=0;Ct<E.length;Ct++){let pt=m[Ct],zt=E[Ct];pt!==null&&zt!==void 0&&zt.update(pt,ct,c||a)}Lt&&Lt(et,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),y=null}let le=new Ol;le.setAnimationLoop(Ft),this.setAnimationLoop=function(et){Lt=et},this.dispose=function(){}}},qn=new cn,Tp=new me;function Ap(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Fl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,A,E,m){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&g(p,h,m)):h.isMeshMatcapMaterial?(r(p,h),y(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),b(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,A,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Fe&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Fe&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let A=t.get(h),E=A.envMap,m=A.envMapRotation;E&&(p.envMap.value=E,qn.copy(m),qn.x*=-1,qn.y*=-1,qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),p.envMapRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(qn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,A,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=E*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function g(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fe&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,h){h.matcap&&(p.matcap.value=h.matcap)}function b(p,h){let A=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rp(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){let m=E.program;n.uniformBlockBinding(A,m)}function c(A,E){let m=s[A.id];m===void 0&&(y(A),m=u(A),s[A.id]=m,A.addEventListener("dispose",p));let k=E.program;n.updateUBOMapping(A,k);let P=t.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function u(A){let E=d();A.__bindingPointIndex=E;let m=i.createBuffer(),k=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,m),i.bufferData(i.UNIFORM_BUFFER,k,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,m),m}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let E=s[A.id],m=A.uniforms,k=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,I=m.length;P<I;P++){let B=Array.isArray(m[P])?m[P]:[m[P]];for(let T=0,_=B.length;T<_;T++){let C=B[T];if(g(C,P,T,k)===!0){let W=C.__offset,X=Array.isArray(C.value)?C.value:[C.value],K=0;for(let it=0;it<X.length;it++){let j=X[it],lt=b(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,W+K,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,K),K+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,E,m,k){let P=A.value,I=E+"_"+m;if(k[I]===void 0)return typeof P=="number"||typeof P=="boolean"?k[I]=P:k[I]=P.clone(),!0;{let B=k[I];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return k[I]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function y(A){let E=A.uniforms,m=0,k=16;for(let I=0,B=E.length;I<B;I++){let T=Array.isArray(E[I])?E[I]:[E[I]];for(let _=0,C=T.length;_<C;_++){let W=T[_],X=Array.isArray(W.value)?W.value:[W.value];for(let K=0,it=X.length;K<it;K++){let j=X[K],lt=b(j),Z=m%k,mt=Z%lt.boundary,Mt=Z+mt;m+=mt,Mt!==0&&k-Mt<lt.storage&&(m+=k-Mt),W.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=m,m+=lt.storage}}}let P=m%k;return P>0&&(m+=k-P),A.__size=m,A.__cache={},this}function b(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function p(A){let E=A.target;E.removeEventListener("dispose",p);let m=a.indexOf(E.__bindingPointIndex);a.splice(m,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var qs=class{constructor(t={}){let{canvas:e=Lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=new Uint32Array(4),b=new Int32Array(4),p=null,h=null,A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Dn,this.toneMappingExposure=1;let m=this,k=!1,P=0,I=0,B=null,T=-1,_=null,C=new oe,W=new oe,X=null,K=new $t(0),it=0,j=e.width,lt=e.height,Z=1,mt=null,Mt=null,Lt=new oe(0,0,j,lt),Ft=new oe(0,0,j,lt),le=!1,et=new ji,ct=!1,Ct=!1,pt=new me,zt=new me,Wt=new z,Qt=new oe,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ge(){return B===null?Z:1}let F=n;function Pe(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),F===null){let U="webgl2";if(F=Pe(U,S),F===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ne,ee,Vt,kt,It,w,x,V,Q,q,$,Dt,gt,St,jt,at,wt,Ut,Ht,Et,ie,Zt,he,L;function dt(){ne=new Gd(F),ne.init(),Zt=new Sp(F,ne),ee=new Od(F,ne,t,Zt),Vt=new vp(F,ne),ee.reverseDepthBuffer&&f&&Vt.buffers.depth.setReversed(!0),kt=new qd(F),It=new ap,w=new Mp(F,ne,Vt,It,ee,Zt,kt),x=new zd(m),V=new Hd(m),Q=new jc(F),he=new Nd(F,Q),q=new Wd(F,Q,kt,he),$=new Zd(F,q,Q,kt),Ht=new Yd(F,ee,w),at=new Bd(It),Dt=new rp(m,x,V,ne,ee,he,at),gt=new Ap(m,It),St=new lp,jt=new pp(ne),Ut=new Ud(m,x,V,Vt,$,g,l),wt=new _p(m,$,ee),L=new Rp(F,kt,ee,Vt),Et=new Fd(F,ne,kt),ie=new Xd(F,ne,kt),kt.programs=Dt.programs,m.capabilities=ee,m.extensions=ne,m.properties=It,m.renderLists=St,m.shadowMap=wt,m.state=Vt,m.info=kt}dt();let Y=new Ha(m,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(j,lt,!1))},this.getSize=function(S){return S.set(j,lt)},this.setSize=function(S,U,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,lt=U,e.width=Math.floor(S*Z),e.height=Math.floor(U*Z),H===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(j*Z,lt*Z).floor()},this.setDrawingBufferSize=function(S,U,H){j=S,lt=U,Z=H,e.width=Math.floor(S*H),e.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(Lt)},this.setViewport=function(S,U,H,G){S.isVector4?Lt.set(S.x,S.y,S.z,S.w):Lt.set(S,U,H,G),Vt.viewport(C.copy(Lt).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,U,H,G){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,U,H,G),Vt.scissor(W.copy(Ft).multiplyScalar(Z).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){Vt.setScissorTest(le=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){Mt=S},this.getClearColor=function(S){return S.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(S=!0,U=!0,H=!0){let G=0;if(S){let N=!1;if(B!==null){let ot=B.texture.format;N=ot===lo||ot===oo||ot===ao}if(N){let ot=B.texture.type,_t=ot===Sn||ot===jn||ot===$i||ot===Li||ot===so||ot===ro,At=Ut.getClearColor(),Rt=Ut.getClearAlpha(),Nt=At.r,Xt=At.g,bt=At.b;_t?(y[0]=Nt,y[1]=Xt,y[2]=bt,y[3]=Rt,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=Nt,b[1]=Xt,b[2]=bt,b[3]=Rt,F.clearBufferiv(F.COLOR,0,b))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),St.dispose(),jt.dispose(),It.dispose(),x.dispose(),V.dispose(),$.dispose(),he.dispose(),L.dispose(),Dt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ss),Y.removeEventListener("sessionend",rs),hn.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let S=kt.autoReset,U=wt.enabled,H=wt.autoUpdate,G=wt.needsUpdate,N=wt.type;dt(),kt.autoReset=S,wt.enabled=U,wt.autoUpdate=H,wt.needsUpdate=G,wt.type=N}function vt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Yt(S){let U=S.target;U.removeEventListener("dispose",Yt),pe(U)}function pe(S){ve(S),It.remove(S)}function ve(S){let U=It.get(S).programs;U!==void 0&&(U.forEach(function(H){Dt.releaseProgram(H)}),S.isShaderMaterial&&Dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,G,N,ot){U===null&&(U=fe);let _t=N.isMesh&&N.matrixWorld.determinant()<0,At=kn(S,U,H,G,N);Vt.setMaterial(G,_t);let Rt=H.index,Nt=1;if(G.wireframe===!0){if(Rt=q.getWireframeAttribute(H),Rt===void 0)return;Nt=2}let Xt=H.drawRange,bt=H.attributes.position,se=Xt.start*Nt,M=(Xt.start+Xt.count)*Nt;ot!==null&&(se=Math.max(se,ot.start*Nt),M=Math.min(M,(ot.start+ot.count)*Nt)),Rt!==null?(se=Math.max(se,0),M=Math.min(M,Rt.count)):bt!=null&&(se=Math.max(se,0),M=Math.min(M,bt.count));let v=M-se;if(v<0||v===1/0)return;he.setup(N,G,At,H,Rt);let R,D=Et;if(Rt!==null&&(R=Q.get(Rt),D=ie,D.setIndex(R)),N.isMesh)G.wireframe===!0?(Vt.setLineWidth(G.wireframeLinewidth*ge()),D.setMode(F.LINES)):D.setMode(F.TRIANGLES);else if(N.isLine){let O=G.linewidth;O===void 0&&(O=1),Vt.setLineWidth(O*ge()),N.isLineSegments?D.setMode(F.LINES):N.isLineLoop?D.setMode(F.LINE_LOOP):D.setMode(F.LINE_STRIP)}else N.isPoints?D.setMode(F.POINTS):N.isSprite&&D.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)D.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))D.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let O=N._multiDrawStarts,J=N._multiDrawCounts,st=N._multiDrawCount,ht=Rt?Q.get(Rt).bytesPerElement:1,ut=It.get(G).currentProgram.getUniforms();for(let yt=0;yt<st;yt++)ut.setValue(F,"_gl_DrawID",yt),D.render(O[yt]/ht,J[yt])}else if(N.isInstancedMesh)D.renderInstances(se,v,N.count);else if(H.isInstancedBufferGeometry){let O=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,J=Math.min(H.instanceCount,O);D.renderInstances(se,v,J)}else D.render(se,v)};function ce(S,U,H){S.transparent===!0&&S.side===Ke&&S.forceSinglePass===!1?(S.side=Fe,S.needsUpdate=!0,dn(S,U,H),S.side=Un,S.needsUpdate=!0,dn(S,U,H),S.side=Ke):dn(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),h=jt.get(H),h.init(U),E.push(h),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();let G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){let At=ot[_t];ce(At,H,N),G.add(At)}else ce(ot,H,N),G.add(ot)}),E.pop(),h=null,G},this.compileAsync=function(S,U,H=null){let G=this.compile(S,U,H);return new Promise(N=>{function ot(){if(G.forEach(function(_t){It.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){N(S);return}setTimeout(ot,10)}ne.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let De=null;function Xe(S){De&&De(S)}function ss(){hn.stop()}function rs(){hn.start()}let hn=new Ol;hn.setAnimationLoop(Xe),typeof self!="undefined"&&hn.setContext(self),this.setAnimationLoop=function(S){De=S,Y.setAnimationLoop(S),S===null?hn.stop():hn.start()},Y.addEventListener("sessionstart",ss),Y.addEventListener("sessionend",rs),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,U,B),h=jt.get(S,E.length),h.init(U),E.push(h),zt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(zt),Ct=this.localClippingEnabled,ct=at.init(this.clippingPlanes,Ct),p=St.get(S,A.length),p.init(),A.push(p),Y.enabled===!0&&Y.isPresenting===!0){let ot=m.xr.getDepthSensingMesh();ot!==null&&qe(ot,U,-1/0,m.sortObjects)}qe(S,U,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort(mt,Mt),te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,te&&Ut.addToRenderList(p,S),this.info.render.frame++,ct===!0&&at.beginShadows();let H=h.state.shadowsArray;wt.render(H,S,U),ct===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=p.opaque,N=p.transmissive;if(h.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let _t=0,At=ot.length;_t<At;_t++){let Rt=ot[_t];wn(G,N,S,Rt)}te&&Ut.render(S);for(let _t=0,At=ot.length;_t<At;_t++){let Rt=ot[_t];bn(p,S,Rt,Rt.viewport)}}else N.length>0&&wn(G,N,S,U),te&&Ut.render(S),bn(p,S,U);B!==null&&(w.updateMultisampleRenderTarget(B),w.updateRenderTargetMipmap(B)),S.isScene===!0&&S.onAfterRender(m,S,U),he.resetDefaultState(),T=-1,_=null,E.pop(),E.length>0?(h=E[E.length-1],ct===!0&&at.setGlobalState(m.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function qe(S,U,H,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){G&&Qt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(zt);let _t=$.update(S),At=S.material;At.visible&&p.push(S,_t,At,H,Qt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){let _t=$.update(S),At=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Qt.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Qt.copy(_t.boundingSphere.center)),Qt.applyMatrix4(S.matrixWorld).applyMatrix4(zt)),Array.isArray(At)){let Rt=_t.groups;for(let Nt=0,Xt=Rt.length;Nt<Xt;Nt++){let bt=Rt[Nt],se=At[bt.materialIndex];se&&se.visible&&p.push(S,_t,se,H,Qt.z,bt)}}else At.visible&&p.push(S,_t,At,H,Qt.z,null)}}let ot=S.children;for(let _t=0,At=ot.length;_t<At;_t++)qe(ot[_t],U,H,G)}function bn(S,U,H,G){let N=S.opaque,ot=S.transmissive,_t=S.transparent;h.setupLightsView(H),ct===!0&&at.setGlobalState(m.clippingPlanes,H),G&&Vt.viewport(C.copy(G)),N.length>0&&un(N,U,H),ot.length>0&&un(ot,U,H),_t.length>0&&un(_t,U,H),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function wn(S,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new en(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ri:Sn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ot=h.state.transmissionRenderTarget[G.id],_t=G.viewport||C;ot.setSize(_t.z,_t.w);let At=m.getRenderTarget();m.setRenderTarget(ot),m.getClearColor(K),it=m.getClearAlpha(),it<1&&m.setClearColor(16777215,.5),m.clear(),te&&Ut.render(H);let Rt=m.toneMapping;m.toneMapping=Dn;let Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),ct===!0&&at.setGlobalState(m.clippingPlanes,G),un(S,H,G),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let bt=0,se=U.length;bt<se;bt++){let M=U[bt],v=M.object,R=M.geometry,D=M.material,O=M.group;if(D.side===Ke&&v.layers.test(G.layers)){let J=D.side;D.side=Fe,D.needsUpdate=!0,zn(v,H,G,R,D,O),D.side=J,D.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot))}m.setRenderTarget(At),m.setClearColor(K,it),Nt!==void 0&&(G.viewport=Nt),m.toneMapping=Rt}function un(S,U,H){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=S.length;N<ot;N++){let _t=S[N],At=_t.object,Rt=_t.geometry,Nt=G===null?_t.material:G,Xt=_t.group;At.layers.test(H.layers)&&zn(At,U,H,Rt,Nt,Xt)}}function zn(S,U,H,G,N,ot){S.onBeforeRender(m,U,H,G,N,ot),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(m,U,H,G,S,ot),N.transparent===!0&&N.side===Ke&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,m.renderBufferDirect(H,U,G,N,S,ot),N.side=Un,N.needsUpdate=!0,m.renderBufferDirect(H,U,G,N,S,ot),N.side=Ke):m.renderBufferDirect(H,U,G,N,S,ot),S.onAfterRender(m,U,H,G,N,ot)}function dn(S,U,H){U.isScene!==!0&&(U=fe);let G=It.get(S),N=h.state.lights,ot=h.state.shadowsArray,_t=N.state.version,At=Dt.getParameters(S,N.state,ot,U,H),Rt=Dt.getProgramCacheKey(At),Nt=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?V:x).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",Yt),Nt=new Map,G.programs=Nt);let Xt=Nt.get(Rt);if(Xt!==void 0){if(G.currentProgram===Xt&&G.lightsStateVersion===_t)return li(S,At),Xt}else At.uniforms=Dt.getUniforms(S),S.onBeforeCompile(At,m),Xt=Dt.acquireProgram(At,Rt),Nt.set(Rt,Xt),G.uniforms=At.uniforms;let bt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=at.uniform),li(S,At),G.needsLights=as(S),G.lightsStateVersion=_t,G.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Xt,G.uniformsList=null,Xt}function oi(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Ai.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function li(S,U){let H=It.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function kn(S,U,H,G,N){U.isScene!==!0&&(U=fe),w.resetTextureUnits();let ot=U.fog,_t=G.isMeshStandardMaterial?U.environment:null,At=B===null?m.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Oi,Rt=(G.isMeshStandardMaterial?V:x).get(G.envMap||_t),Nt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,M=!!H.morphAttributes.color,v=Dn;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(v=m.toneMapping);let R=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=R!==void 0?R.length:0,O=It.get(G),J=h.state.lights;if(ct===!0&&(Ct===!0||S!==_)){let Ot=S===_&&G.id===T;at.setState(G,S,Ot)}let st=!1;G.version===O.__version?(O.needsLights&&O.lightsStateVersion!==J.state.version||O.outputColorSpace!==At||N.isBatchedMesh&&O.batching===!1||!N.isBatchedMesh&&O.batching===!0||N.isBatchedMesh&&O.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&O.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&O.instancing===!1||!N.isInstancedMesh&&O.instancing===!0||N.isSkinnedMesh&&O.skinning===!1||!N.isSkinnedMesh&&O.skinning===!0||N.isInstancedMesh&&O.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&O.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&O.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&O.instancingMorph===!1&&N.morphTexture!==null||O.envMap!==Rt||G.fog===!0&&O.fog!==ot||O.numClippingPlanes!==void 0&&(O.numClippingPlanes!==at.numPlanes||O.numIntersection!==at.numIntersection)||O.vertexAlphas!==Nt||O.vertexTangents!==Xt||O.morphTargets!==bt||O.morphNormals!==se||O.morphColors!==M||O.toneMapping!==v||O.morphTargetsCount!==D)&&(st=!0):(st=!0,O.__version=G.version);let ht=O.currentProgram;st===!0&&(ht=dn(G,U,N));let ut=!1,yt=!1,rt=!1,tt=ht.getUniforms(),Tt=O.uniforms;if(Vt.useProgram(ht.program)&&(ut=!0,yt=!0,rt=!0),G.id!==T&&(T=G.id,yt=!0),ut||_!==S){Vt.buffers.depth.getReversed()?(pt.copy(S.projectionMatrix),Uc(pt),Nc(pt),tt.setValue(F,"projectionMatrix",pt)):tt.setValue(F,"projectionMatrix",S.projectionMatrix),tt.setValue(F,"viewMatrix",S.matrixWorldInverse);let de=tt.map.cameraPosition;de!==void 0&&de.setValue(F,Wt.setFromMatrixPosition(S.matrixWorld)),ee.logarithmicDepthBuffer&&tt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&tt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,yt=!0,rt=!0)}if(N.isSkinnedMesh){tt.setOptional(F,N,"bindMatrix"),tt.setOptional(F,N,"bindMatrixInverse");let Ot=N.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),tt.setValue(F,"boneTexture",Ot.boneTexture,w))}N.isBatchedMesh&&(tt.setOptional(F,N,"batchingTexture"),tt.setValue(F,"batchingTexture",N._matricesTexture,w),tt.setOptional(F,N,"batchingIdTexture"),tt.setValue(F,"batchingIdTexture",N._indirectTexture,w),tt.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&tt.setValue(F,"batchingColorTexture",N._colorsTexture,w));let qt=H.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&Ht.update(N,H,ht),(yt||O.receiveShadow!==N.receiveShadow)&&(O.receiveShadow=N.receiveShadow,tt.setValue(F,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Tt.envMap.value=Rt,Tt.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),yt&&(tt.setValue(F,"toneMappingExposure",m.toneMappingExposure),O.needsLights&&rn(Tt,rt),ot&&G.fog===!0&&gt.refreshFogUniforms(Tt,ot),gt.refreshMaterialUniforms(Tt,G,Z,lt,h.state.transmissionRenderTarget[S.id]),Ai.upload(F,oi(O),Tt,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ai.upload(F,oi(O),Tt,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&tt.setValue(F,"center",N.center),tt.setValue(F,"modelViewMatrix",N.modelViewMatrix),tt.setValue(F,"normalMatrix",N.normalMatrix),tt.setValue(F,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ot=G.uniformsGroups;for(let de=0,Bt=Ot.length;de<Bt;de++){let Gt=Ot[de];L.update(Gt,ht),L.bind(Gt,ht)}}return ht}function rn(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function as(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,U,H){It.get(S.texture).__webglTexture=U,It.get(S.depthTexture).__webglTexture=H;let G=It.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let H=It.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){B=S,P=U,I=H;let G=!0,N=null,ot=!1,_t=!1;if(S){let Rt=It.get(S);if(Rt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(Rt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Rt.__hasExternalTextures)w.rebindTextures(S,It.get(S.texture).__webglTexture,It.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let bt=S.depthTexture;if(Rt.__boundDepthTexture!==bt){if(bt!==null&&It.has(bt)&&(S.width!==bt.image.width||S.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}let Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(_t=!0);let Xt=It.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][H]:N=Xt[U],ot=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=It.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[H]:N=Xt,C.copy(S.viewport),W.copy(S.scissor),X=S.scissorTest}else C.copy(Lt).multiplyScalar(Z).floor(),W.copy(Ft).multiplyScalar(Z).floor(),X=le;if(Vt.bindFramebuffer(F.FRAMEBUFFER,N)&&G&&Vt.drawBuffers(S,N),Vt.viewport(C),Vt.scissor(W),Vt.setScissorTest(X),ot){let Rt=It.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,H)}else if(_t){let Rt=It.get(S.texture),Nt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,H||0,Nt)}T=-1},this.readRenderTargetPixels=function(S,U,H,G,N,ot,_t){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(At=At[_t]),At){Vt.bindFramebuffer(F.FRAMEBUFFER,At);try{let Rt=S.texture,Nt=Rt.format,Xt=Rt.type;if(!ee.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&H>=0&&H<=S.height-N&&F.readPixels(U,H,G,N,Zt.convert(Nt),Zt.convert(Xt),ot)}finally{let Rt=B!==null?It.get(B).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,G,N,ot,_t){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(At=At[_t]),At){let Rt=S.texture,Nt=Rt.format,Xt=Rt.type;if(!ee.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-G&&H>=0&&H<=S.height-N){Vt.bindFramebuffer(F.FRAMEBUFFER,At);let bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(U,H,G,N,Zt.convert(Nt),Zt.convert(Xt),0);let se=B!==null?It.get(B).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,se);let M=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Dc(F,M,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(bt),F.deleteSync(M),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,H=0){S.isTexture!==!0&&(Yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-H),N=Math.floor(S.image.width*G),ot=Math.floor(S.image.height*G),_t=U!==null?U.x:0,At=U!==null?U.y:0;w.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,_t,At,N,ot),Vt.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,G=null,N=0){S.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let ot,_t,At,Rt,Nt,Xt,bt,se,M,v=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(ot=H.max.x-H.min.x,_t=H.max.y-H.min.y,At=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Nt=H.min.y,Xt=H.isBox3?H.min.z:0):(ot=v.width,_t=v.height,At=v.depth||1,Rt=0,Nt=0,Xt=0),G!==null?(bt=G.x,se=G.y,M=G.z):(bt=0,se=0,M=0);let R=Zt.convert(U.format),D=Zt.convert(U.type),O;U.isData3DTexture?(w.setTexture3D(U,0),O=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),O=F.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),O=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let J=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ht=F.getParameter(F.UNPACK_SKIP_PIXELS),ut=F.getParameter(F.UNPACK_SKIP_ROWS),yt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,v.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,v.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);let rt=S.isDataArrayTexture||S.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Tt=It.get(S),qt=It.get(U),Ot=It.get(Tt.__renderTarget),de=It.get(qt.__renderTarget);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Bt=0;Bt<At;Bt++)rt&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(S).__webglTexture,N,Xt+Bt),S.isDepthTexture?(tt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(U).__webglTexture,N,M+Bt),F.blitFramebuffer(Rt,Nt,ot,_t,bt,se,ot,_t,F.DEPTH_BUFFER_BIT,F.NEAREST)):tt?F.copyTexSubImage3D(O,N,bt,se,M+Bt,Rt,Nt,ot,_t):F.copyTexSubImage2D(O,N,bt,se,M+Bt,Rt,Nt,ot,_t);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else tt?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(O,N,bt,se,M,ot,_t,At,R,D,v.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(O,N,bt,se,M,ot,_t,At,R,v.data):F.texSubImage3D(O,N,bt,se,M,ot,_t,At,R,D,v):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,bt,se,ot,_t,R,D,v.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,bt,se,v.width,v.height,R,v.data):F.texSubImage2D(F.TEXTURE_2D,N,bt,se,ot,_t,R,D,v);F.pixelStorei(F.UNPACK_ROW_LENGTH,J),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yt),N===0&&U.generateMipmaps&&F.generateMipmap(O),Vt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H=null,G=null,N=0){return S.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,H,G,N)},this.initRenderTarget=function(S){It.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Vt.unbindTexture()},this.resetState=function(){P=0,I=0,B=null,Vt.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Ys=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zs=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Js=class extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $s=class i extends nn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new z,u=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let g=n+d/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var ts=class extends ei{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Cs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ni=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ga=class extends Ni{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yo,endingEnd:yo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mo:r=t,o=2*e-n;break;case So:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mo:a=t,l=2*n-e;break;case So:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,y=(n-e)/(s-e),b=y*y,p=b*y,h=-f*p+2*f*b-f*y,A=(1+f)*p+(-1.5-2*f)*b+(-.5+f)*y+1,E=(-1-g)*p+(1.5+g)*b+.5*y,m=g*p-g*b;for(let k=0;k!==o;++k)r[k]=h*a[u+k]+A*a[c+k]+E*a[l+k]+m*a[d+k];return r}},Wa=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Xa=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cs(e,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Cs(t.times,Array),values:Cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ga(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case ba:e=this.InterpolantFactoryMethodLinear;break;case lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,g=d+n;for(let y=0;y!==n;++y){let b=e[d+y];if(b!==e[f+y]||b!==e[g+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let g=0;g!==n;++g)e[f+g]=e[d+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=ba;var ii=class extends sn{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ns;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends sn{};qa.prototype.ValueTypeName="color";var Ya=class extends sn{};Ya.prototype.ValueTypeName="number";var Za=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ks=class extends sn{InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends sn{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Ns;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends sn{};Ja.prototype.ValueTypeName="vector";var gl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$a=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let g=c[d],y=c[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return y}return null}}},Ip=new $a,es=class{constructor(t){this.manager=t!==void 0?t:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ka=class extends es{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=gl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ki("img");function l(){u(),gl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Qs=class extends es{constructor(t){super(t)}load(t,e,n,s){let r=new Oe,a=new Ka(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},js=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},tr=class extends js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Or=new me,_l=new z,xl=new z,Qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_l.setFromMatrixPosition(t.matrixWorld),e.position.copy(_l),xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vl=new me,qi=new z,Br=new z,ja=class extends Qa{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(qi),Br.copy(n.position),Br.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Br),n.updateMatrixWorld(),s.makeTranslation(-qi.x,-qi.y,-qi.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl)}},Fi=class extends js{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ja}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var uo="\\[\\]\\.:\\/",Pp=new RegExp("["+uo+"]","g"),fo="[^"+uo+"]",Lp="[^"+uo.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",fo),Up=/(WCOD+)?/.source.replace("WCOD",Lp),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),Fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),Op=new RegExp("^"+Dp+Up+Np+Fp+"$"),Bp=["material","materials","bones","map"],to=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(t){let e=Op.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=to;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xp=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);var is=class i extends Me{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Te;let n=this,s=e.color!==void 0?new $t(e.color):new $t(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new $e,d=new z,f=new z,g=new z,y=new me,b=new z(0,0,-1),p=new oe,h=new z,A=new z,E=new oe,m=new me,k=this.camera,P=new en(r,a,{samples:c,type:ri}),I=new We({name:l.name!==void 0?l.name:"unspecified",uniforms:co.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});I.uniforms.tDiffuse.value=P.texture,I.uniforms.color.value=s,I.uniforms.textureMatrix.value=m,this.material=I,this.onBeforeRender=function(B,T,_){if(f.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(_.matrixWorld),y.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(y),h.subVectors(f,g),h.dot(d)>0)return;h.reflect(d).negate(),h.add(f),y.extractRotation(_.matrixWorld),b.set(0,0,-1),b.applyMatrix4(y),b.add(g),A.subVectors(f,b),A.reflect(d).negate(),A.add(f),k.position.copy(h),k.up.set(0,1,0),k.up.applyMatrix4(y),k.up.reflect(d),k.lookAt(A),k.far=_.far,k.updateMatrixWorld(),k.projectionMatrix.copy(_.projectionMatrix),m.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),m.multiply(k.projectionMatrix),m.multiply(k.matrixWorldInverse),m.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(k.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let C=k.projectionMatrix;E.x=(Math.sign(p.x)+C.elements[8])/C.elements[0],E.y=(Math.sign(p.y)+C.elements[9])/C.elements[5],E.z=-1,E.w=(1+C.elements[10])/C.elements[14],p.multiplyScalar(2/p.dot(E)),C.elements[2]=p.x,C.elements[6]=p.y,C.elements[10]=p.z+1-o,C.elements[14]=p.w,n.visible=!1;let W=B.getRenderTarget(),X=B.xr.enabled,K=B.shadowMap.autoUpdate;B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(P),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(T,k),B.xr.enabled=X,B.shadowMap.autoUpdate=K,B.setRenderTarget(W);let it=_.viewport;it!==void 0&&B.state.viewport(it),n.visible=!0},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),n.material.dispose()}}};is.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var ai=window.Q||(window.Q={}),Pt=2,sr=1.45,rr=.36,zi=.55,Hl=3.4,Gl=2.3,kp={".":3.2,H:5.6,L:2.6},ar=-2.4,Vp=1.3;function Hp(i){return!i||i==="."?0:i>="0"&&i<="9"?(i.charCodeAt(0)-48)*.25:i==="x"?ar:-(i.charCodeAt(0)-96)*.25}var Gp={rats:.62,zombie:1.85,skeleton:1.9,cultist:1.9,abbess:2.5,guard:1.95,prisoner:1.8,warden:2.4};function Wp(i,t){let e=new qs({antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.outputColorSpace=Ie,e.setClearColor(0),i.prepend(e.domElement),e.domElement.className="world";let n=new Zs;n.fog=new Ys(0,2,16);let s=new Te(70,4/3,.05,60);s.rotation.order="YXZ",n.add(s);let r=new tr(5919558,657414,.5);n.add(r);let a=new Fi(16771010,13,18,1.15);a.position.set(.2,.25,.9),s.add(a);let o=new Qs,l={};function c(M,v=!0){if(l[M])return l[M];let R=o.load(ai.assetUrl(M),()=>{P=!0});return R.colorSpace=Ie,v&&(R.wrapS=Pi,R.wrapT=Pi),R.anisotropy=e.capabilities.getMaxAnisotropy(),l[M]=R,R}function u(M,v,R){if(l[M])return l[M];let D=document.createElement("canvas"),O=new Js(D);O.colorSpace=Ie;let J=new Image;return J.onload=()=>{D.width=J.naturalWidth,D.height=J.naturalHeight;let st=D.getContext("2d");st.drawImage(J,0,0),R(st,D.width,D.height),O.needsUpdate=!0,P=!0},J.src=ai.assetUrl(v),l[M]=O,O}let d=(M,v={})=>new ts({map:M,...v}),f={pit:new On({color:0}),abyss:new On({color:2754324,fog:!1})},g={value:-99};function y(M){return M.onBeforeCompile=v=>{v.uniforms.waterY=g,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying float vWorldY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform float waterY;
varying float vWorldY;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
          float above = vWorldY - waterY;
          float wet = 1.0 - smoothstep(0.0, 0.32, above);
          gl_FragColor.rgb *= 1.0 - 0.5 * wet * step(-0.02, above);
          gl_FragColor.rgb += vec3(0.5, 0.47, 0.4) * exp(-pow(above / 0.018, 2.0)) * 0.35;`)},M}function b(M,v){return f[M]||(f[M]=y(d(c(M,!/door/.test(M)),v))),f[M]}let p={walls:[["wall-stone",6],["wall-ossuary",3],["wall-relief",1]],riser:"wall-stone",floor:"floor",ceiling:"ceiling",door:"door",sky:5919558,ground:657414,fog:0,ceilingTint:9076848,water:.32,waterTint:723206},h=p,A=new Proxy({},{get(M,v){return v in f?f[v]:v==="floor"?b(h.floor):v==="ceiling"?b(h.ceiling,{color:h.ceilingTint}):v==="door"?b(h.door):v==="riser"?b(h.riser,h.wallTint?{color:h.wallTint}:void 0):b(v,h.wallTint?{color:h.wallTint}:void 0)}}),E=null,m={x:0,z:0,a:0,pitch:0,y:sr,vy:0,phase:0,moving:0,safe:{x:0,z:0},cell:null},k=!0,P=!0,I=!1,B=performance.now(),T=0,_=M=>Math.floor(M/Pt),C=(M,v)=>E.grid[v]&&E.grid[v][M]||"#",W=(M,v)=>E.h[v]&&E.h[v][M]!==void 0?E.h[v][M]:0,X=(M,v)=>E.c[v]&&E.c[v][M]!==void 0?E.c[v][M]:3.2,K=(M,v)=>E.doors.get(M+","+v);function it(M,v){if(C(M,v)==="#")return!0;let D=K(M,v);return!!D&&D.open<.8}function j(M,v){let R=h.walls.reduce((O,[,J])=>O+J,0),D=((M*7+v*13)%R+R)%R;for(let[O,J]of h.walls){if(D<J)return O;D-=J}return h.walls[0][0]}function lt(M){E&&n.remove(E.root),Ft&&(Ft.mesh.dispose(),Ft=null),h={...p,...M.theme||{}},n.fog.color.setHex(h.fog),e.setClearColor(h.fog),r.color.setHex(h.sky),r.groundColor.setHex(h.ground);let v=M.grid,R=v.length,D=v[0].length,O=M.heights.map(rt=>[...rt].map(Hp)),J=M.ceil.map((rt,tt)=>[...rt].map((Tt,qt)=>Math.max(kp[Tt]||3.2,O[tt][qt]+2.4)));E={grid:v,h:O,c:J,W:D,H:R,root:new je,doors:new Map,items:new Map,groups:[],lights:[]},n.add(E.root);let st={},ht=(rt,tt,Tt,qt,Ot,de)=>{let Bt=st[rt]||(st[rt]={pos:[],uv:[],idx:[]}),Gt=Bt.pos.length/3;Bt.pos.push(...tt,...Tt,...qt,...Ot),Bt.uv.push(...de),Bt.idx.push(Gt,Gt+1,Gt+2,Gt,Gt+2,Gt+3)},ut=[{dx:0,dy:-1,p:(rt,tt)=>[[rt,tt],[rt+1,tt]]},{dx:1,dy:0,p:(rt,tt)=>[[rt+1,tt],[rt+1,tt+1]]},{dx:0,dy:1,p:(rt,tt)=>[[rt+1,tt+1],[rt,tt+1]]},{dx:-1,dy:0,p:(rt,tt)=>[[rt,tt+1],[rt,tt]]}],yt=(rt,tt,Tt,qt,Ot,de)=>{if(de-Ot<.01)return;let[[Bt,Gt],[xe,Se]]=tt.p(Tt,qt),Be=[Bt*Pt,Ot,Gt*Pt],an=[xe*Pt,Ot,Se*Pt],po=[xe*Pt,de,Se*Pt],os=[Bt*Pt,de,Gt*Pt],ki=Ot/2,mo=de/2;ht(rt,Be,an,po,os,[0,ki,1,ki,1,mo,0,mo])};for(let rt=0;rt<R;rt++)for(let tt=0;tt<D;tt++){let Tt=v[rt][tt];if(Tt==="#")continue;let qt=O[rt][tt],Ot=J[rt][tt],de=tt*Pt,Bt=(tt+1)*Pt,Gt=rt*Pt,xe=(rt+1)*Pt;Tt===">"?mt(tt,rt,qt):ht(qt<=ar+.01?"abyss":"floor",[de,qt,xe],[Bt,qt,xe],[Bt,qt,Gt],[de,qt,Gt],[tt,-(rt+1),tt+1,-(rt+1),tt+1,-rt,tt,-rt]),ht("ceiling",[de,Ot,Gt],[Bt,Ot,Gt],[Bt,Ot,xe],[de,Ot,xe],[tt,rt,tt+1,rt,tt+1,rt+1,tt,rt+1]);for(let Se of ut){let Be=tt+Se.dx,an=rt+Se.dy;if((v[an]&&v[an][Be]||"#")==="#"){yt(j(Be,an),Se,tt,rt,qt,Ot);continue}let os=O[an][Be],ki=J[an][Be];os>qt&&yt("riser",Se,tt,rt,qt,os),ki<Ot&&yt("riser",Se,tt,rt,ki,Ot)}(Tt==="D"||Tt==="C"||Tt==="J")&&Z(tt,rt,qt,Ot,Tt!=="D"),(Tt==="G"||Tt==="<")&&Mt(tt,rt,qt)}for(let[rt,tt]of Object.entries(st)){let Tt=new nn;Tt.setAttribute("position",new Ae(tt.pos,3)),Tt.setAttribute("uv",new Ae(tt.uv,2)),Tt.setIndex(tt.idx),Tt.computeVertexNormals(),E.root.add(new Me(Tt,A[rt]))}for(let rt=0;rt<R;rt++)for(let tt=0;tt<D;tt++)ee(tt,rt);fe(),P=!0}function Z(M,v,R,D,O){let J=it(M-1,v)&&it(M+1,v),st=Math.min(D-R,3),ht=new Bn(Pt,st,.22),ut=new Me(ht,A.door);ut.position.set((M+.5)*Pt,R+st/2,(v+.5)*Pt),J||(ut.rotation.y=Math.PI/2),E.root.add(ut),E.doors.set(M+","+v,{mesh:ut,open:0,opening:!1,base:R+st/2,height:st,locked:!!O,tile:C(M,v),asked:0})}function mt(M,v,R){let D=new je,O=6;for(let st=0;st<O;st++){let ht=Pt/O,ut=new Me(new Bn(Pt*.8,.22,ht),A.riser);ut.position.set((M+.5)*Pt,R-.11-st*.28,v*Pt+ht*(st+.5)),D.add(ut)}let J=new Me(new ni(Pt,Pt),A.pit);J.rotation.x=-Math.PI/2,J.position.set((M+.5)*Pt,R-1.9,(v+.5)*Pt),D.add(J),E.root.add(D)}function Mt(M,v,R){let D=new Fi(16769306,5,7,1.2);D.position.set((M+.5)*Pt,R+2.4,(v+.5)*Pt),E.root.add(D);let O=new Me(new $s(Pt*.42,24),new On({color:16769306,transparent:!0,opacity:.18,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.set((M+.5)*Pt,Math.max(R,Lt?h.water||0:-99)+.03,(v+.5)*Pt),E.root.add(O)}let Lt=!0,Ft=null,le=12,et=Array.from({length:le},()=>new oe(0,0,-100,0)),ct=0,Ct=performance.now(),pt=()=>(performance.now()-Ct)/1e3;function zt(M,v,R=1){Ft&&et[ct++%le].set(M,v,pt(),R)}let Wt=(M,v)=>Ft?Math.max(0,Ft.y-W(M,v)):0,Qt={name:"FloodShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},time:{value:0},lightPos:{value:new z},lightPower:{value:1},fogColor:{value:new $t},fogNear:{value:2},fogFar:{value:16},tint:{value:new $t},ripples:{value:[]}},vertexShader:`
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
      uniform vec4 ripples[${le}];
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
        for (int i = 0; i < ${le}; i++) {
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
      }`};function fe(){Ft&&(Ft.mesh.dispose(),E.root.remove(Ft.mesh),Ft=null),g.value=-99;let M=h.water||0;if(!Lt||M<=-10)return;let{W:v,H:R,grid:D,h:O}=E,J=(Bt,Gt)=>D[Gt]&&D[Gt][Bt]&&D[Gt][Bt]!=="#"&&O[Gt][Bt]<M,st=(Bt,Gt)=>{let xe=0;for(let[Se,Be]of[[Bt-1,Gt-1],[Bt,Gt-1],[Bt-1,Gt],[Bt,Gt]])J(Se,Be)&&(xe=Math.max(xe,M-O[Be][Se]));return xe},ht=[],ut=[],yt=[],rt=new Map,tt=(Bt,Gt)=>{let xe=Bt+","+Gt;return rt.has(xe)||(rt.set(xe,ht.length/3),ht.push(Bt*Pt,-Gt*Pt,0),ut.push(st(Bt,Gt))),rt.get(xe)};for(let Bt=0;Bt<R;Bt++)for(let Gt=0;Gt<v;Gt++){if(!J(Gt,Bt))continue;let xe=tt(Gt,Bt),Se=tt(Gt+1,Bt),Be=tt(Gt+1,Bt+1),an=tt(Gt,Bt+1);yt.push(xe,an,Se,Se,an,Be)}if(!yt.length)return;let Tt=new nn;Tt.setAttribute("position",new Ae(ht,3)),Tt.setAttribute("depth",new Ae(ut,1)),Tt.setIndex(yt);let qt=new re;e.getDrawingBufferSize(qt);let Ot=new is(Tt,{shader:Qt,clipBias:.003,multisample:0,textureWidth:Math.max(256,Math.round(qt.x*.5)),textureHeight:Math.max(256,Math.round(qt.y*.5))});Ot.rotation.x=-Math.PI/2,Ot.position.y=M,g.value=M,Ot.material.transparent=!0,Ot.material.depthWrite=!1;let de=Ot.material.uniforms;de.ripples.value=et,de.tint.value.setHex(h.waterTint||723206),E.root.add(Ot),Ft={mesh:Ot,y:M}}let te=1,ge=new z;function F(M){if(!Ft)return;let v=Ft.mesh.material.uniforms;if(v.time.value=pt(),a.getWorldPosition(ge),v.lightPos.value.copy(ge),v.lightPower.value=a.intensity/13,v.fogColor.value.copy(n.fog.color),v.fogNear.value=n.fog.near,v.fogFar.value=n.fog.far,te-=M,te<=0){te=.7+Math.random()*2.2;for(let R=0;R<6;R++){let D=m.x+(Math.random()-.5)*9,O=m.z+(Math.random()-.5)*9;if(Wt(_(D),_(O))>0&&!it(_(D),_(O))){zt(D,O,.55);let J=D-m.x,st=O-m.z,ht=Math.hypot(J,st)||1;t.onDrip&&t.onDrip((J*-Math.sin(m.a)+st*Math.cos(m.a))/ht,ht/Pt);break}}}}function Pe(M,v,R,D=1){let O=new ni(v,R,D,D>1?6:1);O.translate(0,R/2,0),D>1&&(O.userData.base=O.attributes.position.array.slice());let J=new ts({map:M,transparent:!0,alphaTest:.4,side:Ke,emissive:7235160,emissiveMap:M}),st=new Me(O,J);return st.userData.billboard=!0,st}function ne(M){return M==="L"?[c("remains",!1),1.3,.98]:M==="S"?[u("remains+scroll","remains-scroll",(v,R,D)=>{v.save(),v.translate(R*.66,D*.72),v.rotate(-.3),v.fillStyle="#ffe11a",v.strokeStyle="#0a0a08",v.lineWidth=5,v.fillRect(-R*.12,-D*.05,R*.24,D*.1),v.strokeRect(-R*.12,-D*.05,R*.24,D*.1),v.restore()}),1.3,.98]:M==="F"?[u("font+water","font",(v,R,D)=>{v.globalCompositeOperation="source-atop",v.fillStyle="rgba(255,61,139,0.75)",v.beginPath(),v.ellipse(R/2,D*.14,R*.34,D*.07,0,0,Math.PI*2),v.fill()}),.9,1.2]:M==="f"?[c("font",!1),.9,1.2]:M==="R"?[c("relic",!1),.8,1.1]:M==="K"?[c("remains",!1),.9,.68]:null}function ee(M,v){let R=M+","+v,D=E.items.get(R);D&&(E.root.remove(D),E.items.delete(R));let O=C(M,v),J=ne(O);if(!J)return;let[st,ht,ut]=J,yt=new je,rt=Pe(st,ht,ut);if(yt.add(rt),yt.position.set((M+.5)*Pt,W(M,v),(v+.5)*Pt),O==="F"||O==="R"){let tt=new Fi(O==="F"?16727435:16769306,3.5,6,1.3);tt.position.y=1.1,yt.add(tt)}E.root.add(yt),E.items.set(R,yt)}function Vt(M){let v=new je;M.members.forEach((R,D)=>{let O=ai.MONSTERS[R.key].kind,J=Gp[O]||1.9,st=c(O,!1),ht=O==="rats"?4/3:2/3,ut=Pe(st,J*ht,J,4);ut.userData.slot=D,ut.userData.kind=O,ut.userData.size=[J*ht,J],v.add(ut)}),v.position.set(M.x,0,M.z),E.root.add(v),E.groups.push({group:M,mesh:v,wander:null,path:null,think:0,step:Math.random()*6,idle:Math.random()*2,frame:-1,voice:2+Math.random()*3})}let kt=new Set,It={x:0,y:0},w={dx:0,dy:0,dxLast:0},x=0;function V(M,v,R){let D=_(M-rr),O=_(M+rr),J=_(v-rr),st=_(v+rr);for(let ht=J;ht<=st;ht++)for(let ut=D;ut<=O;ut++){if(it(ut,ht))return{cx:ut,cy:ht,door:!!K(ut,ht)};if(W(ut,ht)-R>zi)return{cx:ut,cy:ht,ledge:!0}}return null}let Q="free",q={active:!1},$=[],Dt=.3,gt=.22,St=M=>M*M*(3-2*M);function jt(){m.x=(_(m.x)+.5)*Pt,m.z=(_(m.z)+.5)*Pt,m.a=Math.round(m.a/(Math.PI/2))*(Math.PI/2),m.pitch=0,q.active=!1,$.length=0}function at(){return kt.has("w")||kt.has("arrowup")?"f":kt.has("s")||kt.has("arrowdown")?"b":kt.has("a")?"l":kt.has("d")?"r":kt.has("q")||kt.has("arrowleft")?"tl":kt.has("e")||kt.has("arrowright")?"tr":null}function wt(M){if(q.active){q.t=Math.min(1,q.t+M/q.dur);let tt=St(q.t);if(m.x=q.x0+(q.x1-q.x0)*tt,m.z=q.z0+(q.z1-q.z0)*tt,m.a=q.a0+(q.a1-q.a0)*tt,q.walk){let Tt=Math.floor(m.phase/Math.PI);m.phase=q.phase0+Math.PI*tt,Math.floor(m.phase/Math.PI)!==Tt&&Zt()}m.moving=q.walk?1:0,x=q.walk?0:(q.a1-q.a0)/q.dur,q.t>=1&&(q.active=!1);return}m.moving=0,x=0;let v=$.shift()||at();if(!v)return;let R=(tt,Tt,qt,Ot)=>Object.assign(q,{active:!0,t:0,dur:Ot?Dt*(Wt(_(m.x),_(m.z))>.15?1.2:1):gt,walk:Ot,x0:m.x,z0:m.z,a0:m.a,x1:tt,z1:Tt,a1:qt,phase0:Math.round(m.phase/Math.PI)*Math.PI+.01});if(v==="tl"||v==="tr"){R(m.x,m.z,m.a+(v==="tl"?-1:1)*Math.PI/2,!1);return}let D=Math.round(Math.cos(m.a)),O=Math.round(Math.sin(m.a)),[J,st]={f:[D,O],b:[-D,-O],r:[-O,D],l:[O,-D]}[v],ht=_(m.x),ut=_(m.z),yt=ht+J,rt=ut+st;if(it(yt,rt)){K(yt,rt)?he({cx:yt,cy:rt,door:!0}):t.onBump&&t.onBump();return}if(W(yt,rt)-W(ht,ut)>zi){t.onBump&&t.onBump();return}R((yt+.5)*Pt,(rt+.5)*Pt,m.a,!0)}let Ut=document.createElement("div");Ut.className="step-pad",Ut.hidden=!0,Ut.innerHTML=[["tl","\u21B6","Turn left"],["f","\u25B2","Step forward"],["tr","\u21B7","Turn right"],["l","\u25C0","Step left"],["b","\u25BC","Step back"],["r","\u25B6","Step right"]].map(([M,v,R])=>`<button type="button" data-k="${M}" aria-label="${R}">${v}</button>`).join(""),i.appendChild(Ut);let Ht=new Map;Ut.addEventListener("pointerdown",M=>{let v=M.target.closest("button");!v||k||(M.preventDefault(),$.length<2&&$.push(v.dataset.k),Ht.set(M.pointerId,setInterval(()=>{!k&&!q.active&&!$.length&&$.push(v.dataset.k)},60)))});let Et=M=>{clearInterval(Ht.get(M.pointerId)),Ht.delete(M.pointerId)};["pointerup","pointercancel","pointerleave"].forEach(M=>Ut.addEventListener(M,Et));function ie(M){if(Q==="grid")return wt(M);let v=It.y,R=It.x;(kt.has("w")||kt.has("arrowup"))&&(v+=1),(kt.has("s")||kt.has("arrowdown"))&&(v-=1),kt.has("d")&&(R+=1),kt.has("a")&&(R-=1);let D=0;(kt.has("arrowleft")||kt.has("q"))&&(D-=1),(kt.has("arrowright")||kt.has("e"))&&(D+=1),m.a+=D*Gl*M+w.dx,w.dxLast=M>0?w.dx/M:0,x=D*Gl+w.dxLast,m.pitch=Math.max(-.55,Math.min(.55,m.pitch-w.dy)),w.dx=0,w.dy=0;let O=Math.hypot(v,R);O>1&&(v/=O,R/=O);let J=Math.cos(m.a),st=Math.sin(m.a),ht=-st,ut=J,yt=Wt(_(m.x),_(m.z))>.15?.82:1,rt=(J*v+ht*R)*Hl*yt*M,tt=(st*v+ut*R)*Hl*yt*M;if(m.moving=Math.min(1,Math.hypot(v,R)),rt===0&&tt===0)return;let Tt=W(_(m.x),_(m.z)),qt=V(m.x+rt,m.z,Tt);qt?he(qt):m.x+=rt;let Ot=V(m.x,m.z+tt,Tt);Ot?he(Ot):m.z+=tt;let de=Math.floor(m.phase/Math.PI);m.phase+=Math.hypot(rt,tt)*3.2,Math.floor(m.phase/Math.PI)!==de&&Zt()}function Zt(){let M=Wt(_(m.x),_(m.z));M>0&&zt(m.x+Math.cos(m.a)*.5,m.z+Math.sin(m.a)*.5,.9),t.onStep&&t.onStep(M)}function he(M){if(!M.door)return;let v=K(M.cx,M.cy);if(v&&v.locked&&!v.opening){let R=performance.now();R-v.asked>1800&&(v.asked=R,t.onLocked&&t.onLocked(M.cx,M.cy,v.tile));return}v&&!v.opening&&(v.opening=!0,t.onDoor&&t.onDoor(M.cx,M.cy))}function L(M){let v=_(m.x),R=_(m.z),D=W(v,R)+sr;if(m.y>D+.02){if(m.vy-=14*M,m.y=Math.max(D,m.y+m.vy*M),m.y===D){let J=m.vy;m.vy=0,W(v,R)<=ar+.01&&!I&&(I=!0,t.onFall&&t.onFall(-J))}}else m.y+=(D-m.y)*Math.min(1,M*14),m.vy=0;W(v,R)>ar+.01&&Math.abs(m.y-D)<.05&&(m.safe={x:m.x,z:m.z});let O=v+","+R;O!==m.cell&&(m.cell=O,t.onEnterCell&&t.onEnterCell(v,R,C(v,R)))}function dt(M,v,R,D){let O=Math.hypot(R-M,D-v),J=Math.ceil(O/(Pt*.25));for(let st=1;st<J;st++){let ht=st/J;if(it(_(M+(R-M)*ht),_(v+(D-v)*ht)))return!1}return!0}function Y(M,v,R,D){let O=(ht,ut)=>ht+","+ut,J=new Set([O(R,D)]),st=[[R,D]];for(;st.length&&J.size<500;){let[ht,ut]=st.shift();for(let[yt,rt]of[[1,0],[-1,0],[0,1],[0,-1]]){let tt=ht+yt,Tt=ut+rt;if(!(Math.abs(W(tt,Tt)-W(ht,ut))>zi)){if(tt===M&&Tt===v)return[ht,ut];J.has(O(tt,Tt))||it(tt,Tt)||"G<>".includes(C(tt,Tt))||(J.add(O(tt,Tt)),st.push([tt,Tt]))}}}return null}function nt(M,v,R,D,O){let J=M.group,st=v-J.x,ht=R-J.z,ut=Math.hypot(st,ht);if(ut<.05)return!0;let yt=Math.min(ut,D*O),rt=J.x+st/ut*yt,tt=J.z+ht/ut*yt,Tt=W(_(J.x),_(J.z)),qt=_(rt),Ot=_(tt);return it(qt,Ot)||Math.abs(W(qt,Ot)-Tt)>zi?!0:(J.x=rt,J.z=tt,M.step+=yt*2.6,M.wake=(M.wake||0)-yt,M.wake<=0&&Wt(qt,Ot)>0&&(M.wake=.8,zt(rt,tt,.8)),ut-yt<.05)}function xt(M){let v=M.x-m.x,R=M.z-m.z,D=Math.hypot(v,R)||1;return Math.max(-1,Math.min(1,(v*-Math.sin(m.a)+R*Math.cos(m.a))/D))}function vt(M,v){for(let R of E.groups){let D=R.group;if(!D.alive)continue;let O=D.def,J=Math.hypot(m.x-D.x,m.z-D.z);if(D.stunUntil&&v<D.stunUntil||D.dormant)continue;let st=J<O.sight*Pt&&dt(D.x,D.z,m.x,m.z);if(st&&!D.alert&&t.onAlert&&t.onAlert(O.kind,J/Pt,xt(D)),st&&(D.alert=!0),R.voice-=M,D.alert&&R.voice<=0&&J<7*Pt?(R.voice=2.5+Math.random()*3.5,t.onVoice&&t.onVoice(O.kind,J/Pt,xt(D))):J>O.sight*Pt*2&&(D.alert=!1),J<Vp&&Math.abs(W(_(D.x),_(D.z))-W(_(m.x),_(m.z)))<1.2){t.onContact&&t.onContact(D);return}let ht=O.speed;if(D.alert&&!(O.boss&&J>3*Pt))if(st&&J<Pt*1.6)nt(R,m.x,m.z,ht,M);else{if(R.think-=M,!R.path||R.think<=0){R.think=.4;let ut=Y(_(D.x),_(D.z),_(m.x),_(m.z));R.path=ut?[(ut[0]+.5)*Pt,(ut[1]+.5)*Pt]:null}R.path&&nt(R,R.path[0],R.path[1],ht,M)&&(R.path=null)}else if(!O.boss){if(R.think-=M,!R.wander&&R.think<=0){R.think=1.5+Math.random()*3;let ut=_(D.x),yt=_(D.z),[rt,tt]=[[1,0],[-1,0],[0,1],[0,-1]][Math.floor(Math.random()*4)],Tt=ut+rt,qt=yt+tt;!it(Tt,qt)&&!"G<>RLSFfK".includes(C(Tt,qt))&&Math.abs(W(Tt,qt)-W(ut,yt))<=zi&&(R.wander=[(Tt+.5)*Pt,(qt+.5)*Pt])}R.wander&&nt(R,R.wander[0],R.wander[1],ht*.45,M)&&(R.wander=null)}}}function Yt(M){let v=Math.sin(m.phase)*.045*m.moving;s.position.set(m.x,m.y+v,m.z),s.rotation.y=-(m.a+Math.PI/2),s.rotation.x=m.pitch;let R=!!Ft&&s.position.y<Ft.y;R!==pe&&(pe=R,i.classList.toggle("underwater",R),R?(zt(m.x,m.z,2),n.fog.near=.1,n.fog.far=3.5):(n.fog.near=2,n.fog.far=16));let D=Xe(M);a.intensity=12.2+D*2.4,a.position.x=.2+(D-.5)*.08,U(M,D);let O=new z(-Math.sin(m.a),0,Math.cos(m.a));for(let J of E.groups){let st=J.group;if(J.mesh.visible=st.alive,!st.alive)continue;J.mesh.position.set(st.x,W(_(st.x),_(st.z)),st.z);let ht=J.mesh.children.length;J.mesh.children.forEach((ut,yt)=>{let rt=(yt-(ht-1)/2)*.75,tt=yt===Math.floor((ht-1)/2)&&ht>1?-.25:.15*Math.abs(yt-(ht-1)/2);ut.position.set(O.x*rt-Math.cos(m.a)*tt,0,O.z*rt-Math.sin(m.a)*tt)}),hn(J,M)}E.root.traverse(J=>{if(!J.userData.billboard)return;let st=J.getWorldPosition(new z);J.rotation.y=Math.atan2(s.position.x-st.x,s.position.z-st.z)})}let pe=!1,ve=.5,ce=.5,De=0;function Xe(M){M>De&&(ce=.25+Math.random()*.75,De=M+50+Math.random()*110),ve+=(ce-ve)*.35;let v=ve*.6+(.5+.5*Math.sin(M*.0063))*.25+(.5+.5*Math.sin(M*.0171))*.15;return Math.max(0,Math.min(1,v))}let ss={zombie:(M,v,R)=>[R*.06*v*v,v<.3&&(M-.5)*R>0?.045*(1-v/.3):-.012*v],prisoner:(M,v,R)=>[R*.07*v*v,v<.25&&(M-.5)*R>0?.03*(1-v/.25):-.015*v],guard:(M,v,R)=>[R*.03*v,v<.28&&(M-.5)*R>0?.04*(1-v/.28):0],warden:(M,v,R)=>[R*.05*v*v-R*.01,v<.3&&(M-.5)*R>0?.03*(1-v/.3):-.01*v],skeleton:(M,v,R)=>[R*.025*v+(v>.78?R*.025:0),v<.28&&(M-.5)*R>0?.035*(1-v/.28):0],cultist:(M,v,R)=>[v<.42?R*.045*(1-v/.42):-R*.012*v,R>0?-.01*v:0],rats:(M,v,R)=>[(M-.5)*(R>0?.12:-.08),(R>0?-.1:.08)*v]},rs={zombie:1.6,skeleton:1,cultist:1.3,rats:.55,prisoner:1.7,guard:1.2,warden:1.9};function hn(M,v){let R=M.lastStep!==M.step;M.lastStep=M.step,R||(M.idle+=1/60);for(let D of M.mesh.children){let O=D.geometry,J=O.userData.base;if(!J)continue;let st=D.userData.kind,[ht,ut]=D.userData.size,yt=O.attributes.position.array;if(st==="abbess"){let Bt=v/1e3+D.userData.slot;for(let Gt=0;Gt<yt.length;Gt+=3){let xe=J[Gt]/ht+.5,Se=J[Gt+1]/ut;yt[Gt]=J[Gt]+(Se<.35?Math.sin(Bt*2.6+xe*7)*.035*(1-Se/.35)*ht:0),yt[Gt+1]=J[Gt+1]+(.06+Math.sin(Bt*1.4)*.05)*ut*.4}O.attributes.position.needsUpdate=!0;continue}let rt=ss[st];if(!rt)continue;let tt=R?M.step/(rs[st]||1.2):M.idle/.75,Tt=(Math.floor(tt)+D.userData.slot)%2,qt=R?1:.35,Ot=Tt*2+(R?1:0);if(D.userData.frameKey===Ot)continue;D.userData.frameKey=Ot;let de=(Tt?1:-1)*qt;for(let Bt=0;Bt<yt.length;Bt+=3){let Gt=J[Bt]/ht+.5,xe=J[Bt+1]/ut,[Se,Be]=rt(Gt,xe,de);yt[Bt]=J[Bt]+Se*ht,yt[Bt+1]=J[Bt+1]+Be*ut}O.attributes.position.needsUpdate=!0}}let qe=document.createElement("div");qe.className="hands",qe.innerHTML='<div class="hand hand-left"><span class="torch-glow"></span><img alt="" draggable="false"><canvas class="flame" width="128" height="256"></canvas></div><div class="hand hand-right"><img alt="" draggable="false"></div>',e.domElement.after(qe);let bn=qe.querySelector(".hand-left"),wn=qe.querySelector(".hand-right"),un=bn.querySelector("img"),zn=wn.querySelector("img"),dn=bn.querySelector(".flame"),oi=H(dn);oi||dn.remove();let li=bn.querySelector(".torch-glow"),kn={x:.5,y:.08};un.addEventListener("load",()=>{try{let M=document.createElement("canvas");M.width=96,M.height=128;let v=M.getContext("2d");v.drawImage(un,0,0,M.width,M.height);let R=v.getImageData(0,0,M.width,M.height).data,D=st=>{let ht=0,ut=0;for(let yt=0;yt<M.width;yt++)R[(st*M.width+yt)*4+3]>140&&(ht+=yt,ut++);return ut>=3?ht/ut:-1},O=0;for(;O<M.height&&D(O)<0;)O++;let J=Math.min(M.height-1,O+Math.round(M.height*.12));O<M.height&&D(J)>=0&&(kn={x:D(J)/M.width,y:J/M.height})}catch{}dn.style.left=kn.x*100+"%",dn.style.top=kn.y*100+"%",li.style.left=kn.x*100+"%",li.style.top=kn.y*100+"%"}),un.onerror=()=>{bn.classList.add("no-art")},zn.onerror=()=>{wn.classList.add("no-art")},un.src=ai.assetUrl("held-torch");let rn=0,as=0,S=0;function U(M,v){if(k&&!qe.classList.contains("shown"))return;let R=m.moving;rn+=(Math.max(-3,Math.min(3,x))-rn)*.12;let D=Math.sin(m.phase*.5)*14*R,O=Math.abs(Math.cos(m.phase*.5))*12*R;bn.style.transform=`translate(${(D-rn*10).toFixed(1)}px, ${(O+4).toFixed(1)}px) rotate(${(-4+rn*1.2).toFixed(2)}deg)`,wn.style.transform=`translate(${(D*.9-rn*14).toFixed(1)}px, ${(12-O*.9).toFixed(1)}px) rotate(${(5+rn*1.5).toFixed(2)}deg)`,li.style.opacity=(.45+v*.45).toFixed(2);let J=D-rn*10;S+=((J-as)*.12-S)*.15,as=J,oi&&oi.draw(M/1e3,v,Math.max(-1,Math.min(1,-rn*.22-S)),R)}function H(M){let v=null;try{v=M.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1})}catch{}if(!v)return null;let R="attribute vec2 aPos; varying vec2 vUv; void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }",D=`
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
      }`,O=(ut,yt)=>{let rt=v.createShader(ut);return v.shaderSource(rt,yt),v.compileShader(rt),rt},J=v.createProgram();if(v.attachShader(J,O(v.VERTEX_SHADER,R)),v.attachShader(J,O(v.FRAGMENT_SHADER,D)),v.linkProgram(J),!v.getProgramParameter(J,v.LINK_STATUS))return null;v.useProgram(J),v.bindBuffer(v.ARRAY_BUFFER,v.createBuffer()),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),v.STATIC_DRAW);let st=v.getAttribLocation(J,"aPos");v.enableVertexAttribArray(st),v.vertexAttribPointer(st,2,v.FLOAT,!1,0,0);let ht={};for(let ut of["uTime","uFlick","uLean","uStir","uAspect"])ht[ut]=v.getUniformLocation(J,ut);return{draw(ut,yt,rt,tt){if(v.isContextLost())return;let Tt=Math.min(window.devicePixelRatio||1,2),qt=Math.max(16,Math.round(M.clientWidth*Tt)),Ot=Math.max(32,Math.round(M.clientHeight*Tt));(M.width!==qt||M.height!==Ot)&&(M.width=qt,M.height=Ot),v.viewport(0,0,qt,Ot),v.uniform1f(ht.uTime,ut%2e3),v.uniform1f(ht.uFlick,yt),v.uniform1f(ht.uLean,rt),v.uniform1f(ht.uStir,tt),v.uniform1f(ht.uAspect,qt/(2*Ot*.8)),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.drawArrays(v.TRIANGLE_STRIP,0,4)}}}function G(M){for(let v of E.doors.values())!v.opening||v.open>=1||(v.open=Math.min(1,v.open+M*1.4),v.mesh.position.y=v.base+v.open*v.height*.95,P=!0)}function N(){let M=t.explored&&t.explored();if(!M)return;let v=_(m.x),R=_(m.z);for(let D=R-5;D<=R+5;D++)for(let O=v-5;O<=v+5;O++)!M[D]||M[D][O]===void 0||M[D][O]||Math.hypot(O-v,D-R)>5.5||(dt(m.x,m.z,(O+.5)*Pt,(D+.5)*Pt)||Math.abs(O-v)+Math.abs(D-R)<=1)&&(M[D][O]=!0)}function ot(M){requestAnimationFrame(ot);let v=Math.min(.05,(M-B)/1e3);B=M,!(!E||!i.isConnected||i.offsetParent===null)&&(Rt(),k||(ie(v),L(v),vt(v,M),T-=v,T<=0&&(T=.25,N(),t.onTick&&t.onTick())),G(v),Yt(M),F(v),e.render(n,s))}let _t=0,At=0;function Rt(){let M=i.clientWidth,v=i.clientHeight;if(!(M===_t&&v===At)){if(_t=M,At=v,e.setSize(M,v,!1),Ft){let R=new re;e.getDrawingBufferSize(R),Ft.mesh.getRenderTarget().setSize(Math.max(256,Math.round(R.x*.5)),Math.max(256,Math.round(R.y*.5)))}s.aspect=M/Math.max(1,v),s.fov=s.aspect<1?82:68,s.updateProjectionMatrix()}}window.addEventListener("keydown",M=>{if(k||M.metaKey||M.ctrlKey||M.altKey)return;let v=M.key.toLowerCase();["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(v)&&(Q==="grid"&&!M.repeat&&!kt.has(v)&&$.length<2&&$.push({w:"f",arrowup:"f",s:"b",arrowdown:"b",a:"l",d:"r",q:"tl",arrowleft:"tl",e:"tr",arrowright:"tr"}[v]),kt.add(v),M.preventDefault())}),window.addEventListener("keyup",M=>kt.delete(M.key.toLowerCase())),window.addEventListener("blur",()=>kt.clear());let Nt=document.createElement("div");Nt.className="stick",Nt.innerHTML="<i></i>",Nt.hidden=!0,i.appendChild(Nt);let Xt=new Map,bt=e.domElement;bt.style.touchAction="none",bt.addEventListener("pointerdown",M=>{if(k||Q==="grid")return;bt.setPointerCapture(M.pointerId);let v=bt.getBoundingClientRect(),R=M.pointerType==="mouse"?"look":M.clientX-v.left<v.width/2?"move":"look";R==="move"&&[...Xt.values()].some(D=>D.role==="move")||(Xt.set(M.pointerId,{role:R,x0:M.clientX,y0:M.clientY,x:M.clientX,y:M.clientY}),R==="move"&&(Nt.hidden=!1,Nt.style.left=M.clientX-v.left+"px",Nt.style.top=M.clientY-v.top+"px",Nt.firstChild.style.transform="translate(-50%, -50%)"))}),bt.addEventListener("pointermove",M=>{let v=Xt.get(M.pointerId);if(v){if(v.role==="move"){let D=M.clientX-v.x0,O=M.clientY-v.y0,J=Math.hypot(D,O);J>46&&(D*=46/J,O*=46/J),It.x=Math.abs(D)<8?0:D/46,It.y=Math.abs(O)<8?0:-O/46,Nt.firstChild.style.transform=`translate(calc(-50% + ${D}px), calc(-50% + ${O}px))`}else w.dx+=(M.clientX-v.x)*(M.pointerType==="mouse"?.005:.0075),w.dy+=(M.clientY-v.y)*.004;v.x=M.clientX,v.y=M.clientY}});let se=M=>{let v=Xt.get(M.pointerId);v&&(Xt.delete(M.pointerId),v.role==="move"&&(It.x=0,It.y=0,Nt.hidden=!0))};return bt.addEventListener("pointerup",se),bt.addEventListener("pointercancel",se),requestAnimationFrame(ot),{load(M){lt(M);for(let v of M.opened||[]){let R=E.doors.get(v);R&&(R.open=1,R.opening=!0,R.locked=!1,R.mesh.position.y=R.base+R.height*.95)}for(let v of M.groups)v.def=ai.MONSTERS[v.members[0].key],Vt(v)},place(M){m.x=M.x,m.z=M.z,m.a=M.a,m.pitch=0,m.y=W(_(M.x),_(M.z))+sr,m.vy=0,m.cell=_(M.x)+","+_(M.z),m.safe={x:M.x,z:M.z},I=!1,kt.clear(),Q==="grid"&&jt()},setMode(M){Q=M==="grid"?"grid":"free",Ut.hidden=Q!=="grid",i.classList.toggle("step-mode",Q==="grid"),Q==="grid"&&E&&jt()},get mode(){return Q},setWater(M){Lt=!!M},get water(){return Lt},cellPose(M,v){let R=0;for(let[D,O,J]of[[0,-1,-Math.PI/2],[1,0,0],[0,1,Math.PI/2],[-1,0,Math.PI]])if(!it(M+D,v+O)){R=J;break}return{x:(M+.5)*Pt,z:(v+.5)*Pt,a:R}},pose:()=>({x:m.x,z:m.z,a:m.a}),mapPose:()=>({x:m.x/Pt-.5,y:m.z/Pt-.5,a:m.a}),pause(){k=!0,kt.clear(),It.x=0,It.y=0,Nt.hidden=!0,Xt.clear(),m.moving=0,x=0,$.length=0;for(let M of Ht.values())clearInterval(M);Ht.clear(),q.active&&(m.x=q.x1,m.z=q.z1,m.a=q.a1,q.active=!1)},resume(){k=!1,B=performance.now()},get paused(){return k},refreshTile(M,v){ee(M,v)},openDoor(M,v){let R=K(M,v);R&&(R.locked=!1,R.opening=!0)},haulBack(){m.x=m.safe.x,m.z=m.safe.z,m.y=W(_(m.x),_(m.z))+sr,m.vy=0,I=!1,Q==="grid"&&jt()},stepBack(M){let v=m.x-M.x,R=m.z-M.z,D=Math.hypot(v,R)||1;for(let O=2.2;O>.4;O-=.3){let J=m.x+v/D*O,st=m.z+R/D*O;if(!V(J,st,W(_(m.x),_(m.z))+zi)){m.x=J,m.z=st;break}}Q==="grid"&&jt()},monsterPos:M=>({x:M.x/Pt-.5,y:M.z/Pt-.5}),setWeapon(M){let v=String(M||"").normalize("NFD").replace(/[^A-Za-z]/g,"").toLowerCase();wn.classList.toggle("no-art",!v),v&&zn.dataset.slug!==v&&(zn.dataset.slug=v,wn.classList.remove("no-art"),zn.src=ai.assetUrl("held-"+v))},showHands(M){qe.classList.toggle("shown",!!M)},cellSize:Pt,render(){Yt(performance.now()),e.render(n,s)}}}ai.createWorld=Wp;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
