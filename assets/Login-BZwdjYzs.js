import{R as U,j as Q}from"./index-BWFfRtmP.js";var fe=e=>e.type==="checkbox",ie=e=>e instanceof Date,L=e=>e==null;const Ze=e=>typeof e=="object";var E=e=>!L(e)&&!Array.isArray(e)&&Ze(e)&&!ie(e),gr=e=>E(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vr=(e,s)=>e.has(hr(s)),br=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function C(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(t||E(e)))if(s=t?[]:{},!t&&!br(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=C(e[a]));else return e;return s}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],A=e=>e===void 0,d=(e,s,t)=>{if(!s||!E(e))return t;const a=ce(s.split(/[,[\].]+?/)).reduce((u,n)=>L(u)?u:u[n],e);return A(a)||a===e?A(e[s])?t:e[s]:a},K=e=>typeof e=="boolean";const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};U.createContext(null);var _r=(e,s,t,a=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const g=n;return s._proxyFormState[g]!==P.all&&(s._proxyFormState[g]=!a||P.all),t&&(t[g]=!0),e[g]}});return u},M=e=>E(e)&&!Object.keys(e).length,xr=(e,s,t,a)=>{t(e);const{name:u,...n}=e;return M(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(g=>s[g]===(!a||P.all))},Ee=e=>Array.isArray(e)?e:[e];function Vr(e){const s=U.useRef(e);s.current=e,U.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var j=e=>typeof e=="string",wr=(e,s,t,a,u)=>j(e)?(a&&s.watch.add(e),d(t,e,u)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),d(t,n))):(a&&(s.watchAll=!0),t),Te=e=>/^\w*$/.test(e),er=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,s,t)=>{let a=-1;const u=Te(s)?[s]:er(s),n=u.length,g=n-1;for(;++a<n;){const h=u[a];let B=t;if(a!==g){const q=e[h];B=E(q)||Array.isArray(q)?q:isNaN(+u[a+1])?{}:[]}e[h]=B,e=e[h]}return e},Ar=(e,s,t,a,u)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:u||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const oe=(e,s,t,a)=>{for(const u of t||Object.keys(e)){const n=d(e,u);if(n){const{_f:g,...h}=n;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],u)&&!a)break;if(g.ref&&s(g.ref,g.name)&&!a)break;oe(h,s)}else E(h)&&oe(h,s)}}};var Fr=(e,s,t)=>{const a=ce(d(e,t));return w(a,"root",s[t]),w(e,t,a),e},Ne=e=>e.type==="file",X=e=>typeof e=="function",be=e=>{if(!Le)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>j(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:ze}return ze};const Je={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||K(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var se=e=>E(e)&&!_e(e)?e:{value:e,message:""},Xe=async(e,s,t,a,u)=>{const{ref:n,refs:g,required:h,maxLength:B,minLength:q,min:F,max:b,pattern:de,validate:z,name:T,valueAsNumber:we,mount:G,disabled:J}=e._f,_=d(s,T);if(!G||J)return{};const W=g?g[0]:n,H=v=>{a&&W.reportValidity&&(W.setCustomValidity(K(v)?"":v||""),W.reportValidity())},m={},ee=Oe(n),ye=fe(n),Y=ee||ye,re=(we||Ne(n))&&A(n.value)&&A(_)||be(n)&&n.value===""||_===""||Array.isArray(_)&&!_.length,O=Ar.bind(null,T,t,m),ge=(v,x,D,p=$.maxLength,I=$.minLength)=>{const R=v?x:D;m[T]={type:v?p:I,message:R,ref:n,...O(v?p:I,R)}};if(u?!Array.isArray(_)||!_.length:h&&(!Y&&(re||L(_))||K(_)&&!_||ye&&!rr(g).isValid||ee&&!tr(g).isValid)){const{value:v,message:x}=ve(h)?{value:!!h,message:h}:se(h);if(v&&(m[T]={type:$.required,message:x,ref:W,...O($.required,x)},!t))return H(x),m}if(!re&&(!L(F)||!L(b))){let v,x;const D=se(b),p=se(F);if(!L(_)&&!isNaN(_)){const I=n.valueAsNumber||_&&+_;L(D.value)||(v=I>D.value),L(p.value)||(x=I<p.value)}else{const I=n.valueAsDate||new Date(_),R=ne=>new Date(new Date().toDateString()+" "+ne),le=n.type=="time",ae=n.type=="week";j(D.value)&&_&&(v=le?R(_)>R(D.value):ae?_>D.value:I>new Date(D.value)),j(p.value)&&_&&(x=le?R(_)<R(p.value):ae?_<p.value:I<new Date(p.value))}if((v||x)&&(ge(!!v,D.message,p.message,$.max,$.min),!t))return H(m[T].message),m}if((B||q)&&!re&&(j(_)||u&&Array.isArray(_))){const v=se(B),x=se(q),D=!L(v.value)&&_.length>+v.value,p=!L(x.value)&&_.length<+x.value;if((D||p)&&(ge(D,v.message,x.message),!t))return H(m[T].message),m}if(de&&!re&&j(_)){const{value:v,message:x}=se(de);if(_e(v)&&!_.match(v)&&(m[T]={type:$.pattern,message:x,ref:n,...O($.pattern,x)},!t))return H(x),m}if(z){if(X(z)){const v=await z(_,s),x=Qe(v,W);if(x&&(m[T]={...x,...O($.validate,x.message)},!t))return H(x.message),m}else if(E(z)){let v={};for(const x in z){if(!M(v)&&!t)break;const D=Qe(await z[x](_,s),W,x);D&&(v={...D,...O(x,D.message)},H(D.message),t&&(m[T]=v))}if(!M(v)&&(m[T]={ref:W,...v},!t))return m}}return H(!0),m};function mr(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=A(e)?a++:e[s[a++]];return e}function Dr(e){for(const s in e)if(e.hasOwnProperty(s)&&!A(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:er(s),a=t.length===1?e:mr(e,t),u=t.length-1,n=t[u];return a&&delete a[n],u!==0&&(E(a)&&M(a)||Array.isArray(a)&&Dr(a))&&S(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},xe=e=>L(e)||!Ze(e);function Z(e,s){if(xe(e)||xe(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const u of t){const n=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const g=s[u];if(ie(n)&&ie(g)||E(n)&&E(g)||Array.isArray(n)&&Array.isArray(g)?!Z(n,g):n!==g)return!1}}return!0}var sr=e=>e.type==="select-multiple",Er=e=>Oe(e)||fe(e),Se=e=>be(e)&&e.isConnected,ir=e=>{for(const s in e)if(X(e[s]))return!0;return!1};function Ve(e,s={}){const t=Array.isArray(e);if(E(e)||t)for(const a in e)Array.isArray(e[a])||E(e[a])&&!ir(e[a])?(s[a]=Array.isArray(e[a])?[]:{},Ve(e[a],s[a])):L(e[a])||(s[a]=!0);return s}function lr(e,s,t){const a=Array.isArray(e);if(E(e)||a)for(const u in e)Array.isArray(e[u])||E(e[u])&&!ir(e[u])?A(s)||xe(t[u])?t[u]=Array.isArray(e[u])?Ve(e[u],[]):{...Ve(e[u])}:lr(e[u],L(s)?{}:s[u],t[u]):t[u]=!Z(e[u],s[u]);return t}var he=(e,s)=>lr(e,s,Ve(s)),ar=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>A(e)?e:s?e===""?NaN:e&&+e:t&&j(e)?new Date(e):a?a(e):e;function pe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ne(s)?s.files:Oe(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?rr(e.refs).value:ar(A(s.value)?e.ref.value:s.value,e)}var kr=(e,s,t,a)=>{const u={};for(const n of e){const g=d(s,n);g&&w(u,n,g._f)}return{criteriaMode:t,names:[...e],fields:u,shouldUseNativeValidation:a}},ue=e=>A(e)?e:_e(e)?e.source:E(e)?_e(e.value)?e.value.source:e.value:e,Sr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,s,t){const a=d(e,t);if(a||Te(t))return{error:a,name:t};const u=t.split(".");for(;u.length;){const n=u.join("."),g=d(s,n),h=d(e,n);if(g&&!Array.isArray(g)&&t!==n)return{name:t};if(h&&h.type)return{name:n,error:h};u.pop()}return{name:t}}var pr=(e,s,t,a,u)=>u.isOnAll?!1:!t&&u.isOnTouch?!(s||e):(t?a.isOnBlur:u.isOnBlur)?!e:(t?a.isOnChange:u.isOnChange)?e:!0,Lr=(e,s)=>!ce(d(e,s)).length&&S(e,s);const Tr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Nr(e={}){let s={...Tr,...e},t={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},u=E(s.defaultValues)||E(s.values)?C(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:C(u),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},B,q=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:ke(),array:ke(),state:ke()},de=$e(s.mode),z=$e(s.reValidateMode),T=s.criteriaMode===P.all,we=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},G=async r=>{if(F.isValid||r){const i=s.resolver?M((await Y()).errors):await O(a,!0);i!==t.isValid&&b.state.next({isValid:i})}},J=(r,i)=>{(F.isValidating||F.validatingFields)&&((r||Array.from(h.mount)).forEach(l=>l&&w(t.validatingFields,l,!!i)),t.isValidating=Object.values(t.validatingFields).some(l=>l),b.state.next({validatingFields:t.validatingFields,isValidating:t.isValidating}))},_=(r,i=[],l,c,f=!0,o=!0)=>{if(c&&l){if(g.action=!0,o&&Array.isArray(d(a,r))){const y=l(d(a,r),c.argA,c.argB);f&&w(a,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=l(d(t.errors,r),c.argA,c.argB);f&&w(t.errors,r,y),Lr(t.errors,r)}if(F.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=l(d(t.touchedFields,r),c.argA,c.argB);f&&w(t.touchedFields,r,y)}F.dirtyFields&&(t.dirtyFields=he(u,n)),b.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else w(n,r,i)},W=(r,i)=>{w(t.errors,r,i),b.state.next({errors:t.errors})},H=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},m=(r,i,l,c)=>{const f=d(a,r);if(f){const o=d(n,r,A(l)?d(u,r):l);A(o)||c&&c.defaultChecked||i?w(n,r,i?o:pe(f._f)):p(r,o),g.mount&&G()}},ee=(r,i,l,c,f)=>{let o=!1,y=!1;const V={name:r},k=!!(d(a,r)&&d(a,r)._f.disabled);if(!l||c){F.isDirty&&(y=t.isDirty,t.isDirty=V.isDirty=v(),o=y!==V.isDirty);const N=k||Z(d(u,r),i);y=!!(!k&&d(t.dirtyFields,r)),N||k?S(t.dirtyFields,r):w(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,o=o||F.dirtyFields&&y!==!N}if(l){const N=d(t.touchedFields,r);N||(w(t.touchedFields,r,l),V.touchedFields=t.touchedFields,o=o||F.touchedFields&&N!==l)}return o&&f&&b.state.next(V),o?V:{}},ye=(r,i,l,c)=>{const f=d(t.errors,r),o=F.isValid&&K(i)&&t.isValid!==i;if(e.delayError&&l?(B=we(()=>W(r,l)),B(e.delayError)):(clearTimeout(q),B=null,l?w(t.errors,r,l):S(t.errors,r)),(l?!Z(f,l):f)||!M(c)||o){const y={...c,...o&&K(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},b.state.next(y)}},Y=async r=>{J(r,!0);const i=await s.resolver(n,s.context,kr(r||h.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return J(r),i},re=async r=>{const{errors:i}=await Y(r);if(r)for(const l of r){const c=d(i,l);c?w(t.errors,l,c):S(t.errors,l)}else t.errors=i;return i},O=async(r,i,l={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const V=h.array.has(o.name);J([c],!0);const k=await Xe(f,n,T,s.shouldUseNativeValidation&&!i,V);if(J([c]),k[o.name]&&(l.valid=!1,i))break;!i&&(d(k,o.name)?V?Fr(t.errors,k,o.name):w(t.errors,o.name,k[o.name]):S(t.errors,o.name))}y&&await O(y,i,l)}}return l.valid},ge=()=>{for(const r of h.unMount){const i=d(a,r);i&&(i._f.refs?i._f.refs.every(l=>!Se(l)):!Se(i._f.ref))&&Ae(r)}h.unMount=new Set},v=(r,i)=>(r&&i&&w(n,r,i),!Z(Re(),u)),x=(r,i,l)=>wr(r,h,{...g.mount?n:A(i)?u:j(r)?{[r]:i}:i},l,i),D=r=>ce(d(g.mount?n:u,r,e.shouldUnregister?d(u,r,[]):[])),p=(r,i,l={})=>{const c=d(a,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&w(n,r,ar(i,o)),f=be(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Ne(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...n}})))}(l.shouldDirty||l.shouldTouch)&&ee(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ne(r)},I=(r,i,l)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(a,o);(h.array.has(r)||!xe(f)||y&&!y._f)&&!ie(f)?I(o,f,l):p(o,f,l)}},R=(r,i,l={})=>{const c=d(a,r),f=h.array.has(r),o=C(i);w(n,r,o),f?(b.array.next({name:r,values:{...n}}),(F.isDirty||F.dirtyFields)&&l.shouldDirty&&b.state.next({name:r,dirtyFields:he(u,n),isDirty:v(r,o)})):c&&!c._f&&!L(o)?I(r,o,l):p(r,o,l),Ke(r,h)&&b.state.next({...t}),b.values.next({name:g.mount?r:void 0,values:{...n}})},le=async r=>{const i=r.target;let l=i.name,c=!0;const f=d(a,l),o=()=>i.type?pe(f._f):gr(r),y=V=>{c=Number.isNaN(V)||V===d(n,l,V)};if(f){let V,k;const N=o(),te=r.type===He.BLUR||r.type===He.FOCUS_OUT,cr=!Sr(f._f)&&!s.resolver&&!d(t.errors,l)&&!f._f.deps||pr(te,d(t.touchedFields,l),t.isSubmitted,z,de),me=Ke(l,h,te);w(n,l,N),te?(f._f.onBlur&&f._f.onBlur(r),B&&B(0)):f._f.onChange&&f._f.onChange(r);const De=ee(l,N,te,!1),dr=!M(De)||me;if(!te&&b.values.next({name:l,type:r.type,values:{...n}}),cr)return F.isValid&&G(),dr&&b.state.next({name:l,...me?{}:De});if(!te&&me&&b.state.next({...t}),s.resolver){const{errors:je}=await Y([l]);if(y(N),c){const yr=Ye(t.errors,a,l),We=Ye(je,a,yr.name||l);V=We.error,l=We.name,k=M(je)}}else J([l],!0),V=(await Xe(f,n,T,s.shouldUseNativeValidation))[l],J([l]),y(N),c&&(V?k=!1:F.isValid&&(k=await O(a,!0)));c&&(f._f.deps&&ne(f._f.deps),ye(l,k,V,De))}},ae=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ne=async(r,i={})=>{let l,c;const f=Ee(r);if(s.resolver){const o=await re(A(r)?r:f);l=M(o),c=r?!f.some(y=>d(o,y)):l}else r?(c=(await Promise.all(f.map(async o=>{const y=d(a,o);return await O(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&G()):c=l=await O(a);return b.state.next({...!j(r)||F.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors}),i.shouldFocus&&!c&&oe(a,ae,r?f:h.mount),c},Re=r=>{const i={...u,...g.mount?n:{}};return A(r)?i:j(r)?d(i,r):r.map(l=>d(i,l))},Ce=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),isTouched:!!d((i||t).touchedFields,r),isValidating:!!d((i||t).validatingFields,r),error:d((i||t).errors,r)}),nr=r=>{r&&Ee(r).forEach(i=>S(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ue=(r,i,l)=>{const c=(d(a,r,{_f:{}})._f||{}).ref;w(t.errors,r,{...i,ref:c}),b.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&c&&c.focus&&c.focus()},ur=(r,i)=>X(r)?b.values.subscribe({next:l=>r(x(void 0,i),l)}):x(r,i,!0),Ae=(r,i={})=>{for(const l of r?Ee(r):h.mount)h.mount.delete(l),h.array.delete(l),i.keepValue||(S(a,l),S(n,l)),!i.keepError&&S(t.errors,l),!i.keepDirty&&S(t.dirtyFields,l),!i.keepTouched&&S(t.touchedFields,l),!i.keepIsValidating&&S(t.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&S(u,l);b.values.next({values:{...n}}),b.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&G()},Me=({disabled:r,name:i,field:l,fields:c,value:f})=>{if(K(r)){const o=r?void 0:A(f)?pe(l?l._f:d(c,i)._f):f;w(n,i,o),ee(i,o,!1,!1,!0)}},Fe=(r,i={})=>{let l=d(a,r);const c=K(i.disabled);return w(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),l?Me({field:l,disabled:i.disabled,name:r,value:i.value}):m(r,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:le,onBlur:le,ref:f=>{if(f){Fe(r,i),l=d(a,r);const o=A(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=Er(o),V=l._f.refs||[];if(y?V.find(k=>k===o):o===l._f.ref)return;w(a,r,{_f:{...l._f,...y?{refs:[...V.filter(Se),o,...Array.isArray(d(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),m(r,!1,void 0,o)}else l=d(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vr(h.array,r)&&g.action)&&h.unMount.add(r)}}},Be=()=>s.shouldFocusError&&oe(a,ae,h.mount),or=r=>{K(r)&&(b.state.next({disabled:r}),oe(a,(i,l)=>{let c=r;const f=d(a,l);f&&K(f._f.disabled)&&(c||(c=f._f.disabled)),i.disabled=c},0,!1))},Ie=(r,i)=>async l=>{let c;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let f=C(n);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await Y();t.errors=o,f=y}else await O(a);if(S(t.errors,"root"),M(t.errors)){b.state.next({errors:{}});try{await r(f,l)}catch(o){c=o}}else i&&await i({...t.errors},l),Be(),setTimeout(Be);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(a,r)&&(A(i.defaultValue)?R(r,C(d(u,r))):(R(r,i.defaultValue),w(u,r,C(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,C(d(u,r))):v()),i.keepError||(S(t.errors,r),F.isValid&&G()),b.state.next({...t}))},Pe=(r,i={})=>{const l=r?C(r):u,c=C(l),f=M(r),o=f?u:c;if(i.keepDefaultValues||(u=l),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(t.dirtyFields,y)?w(o,y,d(n,y)):R(y,d(o,y));else{if(Le&&A(r))for(const y of h.mount){const V=d(a,y);if(V&&V._f){const k=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(be(k)){const N=k.closest("form");if(N){N.reset();break}}}}a={}}n=e.shouldUnregister?i.keepDefaultValues?C(u):{}:C(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Z(r,u)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&n?he(u,n):t.dirtyFields:i.keepDefaultValues&&r?he(u,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(r,i)=>Pe(X(r)?r(n):r,i);return{control:{register:Fe,unregister:Ae,getFieldState:Ce,handleSubmit:Ie,setError:Ue,_executeSchema:Y,_getWatch:x,_getDirty:v,_updateValid:G,_removeUnmounted:ge,_updateFieldArray:_,_updateDisabledField:Me,_getFieldArray:D,_reset:Pe,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then(r=>{qe(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:b,_proxyFormState:F,_setErrors:H,get _fields(){return a},get _formValues(){return n},get _state(){return g},set _state(r){g=r},get _defaultValues(){return u},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ne,register:Fe,handleSubmit:Ie,watch:ur,setValue:R,getValues:Re,reset:qe,resetField:fr,clearErrors:nr,unregister:Ae,setError:Ue,setFocus:(r,i={})=>{const l=d(a,r),c=l&&l._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ce}}function Or(e={}){const s=U.useRef(),t=U.useRef(),[a,u]=U.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Nr(e),formState:a});const n=s.current.control;return n._options=e,Vr({subject:n._subjects.state,next:g=>{xr(g,n._proxyFormState,n._updateFormState,!0)&&u({...n._formState})}}),U.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),U.useEffect(()=>{if(n._proxyFormState.isDirty){const g=n._getDirty();g!==a.isDirty&&n._subjects.state.next({isDirty:g})}},[n,a.isDirty]),U.useEffect(()=>{e.values&&!Z(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,u(g=>({...g}))):n._resetDefaultValues()},[e.values,n]),U.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),U.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),U.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=_r(a,n),s.current}const Br=()=>{const{register:e,handleSubmit:s,formState:{errors:t}}=Or(),a=u=>{console.log(u)};return Q.jsx("div",{className:"flex justify-center items-center h-screen",children:Q.jsxs("form",{onSubmit:s(a),className:"w-96 bg-gray-800 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105",children:[Q.jsx("h1",{className:"text-3xl text-white mb-6",children:"Login"}),Q.jsx("input",{...e("email",{required:!0}),className:`w-full py-3 px-4 mb-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none transition-shadow duration-300 ease-in-out ${t.email?"border-red-500":""}`,type:"text",placeholder:"Email",id:"email",name:"email"}),t.email&&Q.jsx("p",{className:"text-red-500",children:"Email is required"}),Q.jsx("input",{...e("password",{required:!0}),className:`w-full py-3 px-4 mb-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none transition-shadow duration-300 ease-in-out ${t.password?"border-red-500":""}`,type:"password",placeholder:"Password",id:"password",name:"password"}),t.password&&Q.jsx("p",{className:"text-red-500",children:"Password is required"}),Q.jsx("input",{className:"w-full py-3 px-4 mb-4 rounded-full bg-green-500 text-white font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none",type:"submit",value:"Login"})]})})};export{Br as default};