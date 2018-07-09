function maskDirectiveAsDate(e,t){return maskDirective(e,t,"as-date")}function maskDirectiveMask(e,t){return maskDirective(e,t,"mask")}function maskDirective(e,t,n){return{restrict:"A",require:"?ngModel",link:function(e,i,a,r){if("as-date"!=n||void 0===a.mask){var l=$(i),o=l.attr("type");if("checkbox"!=o&&"password"!=o){l.data("type",o),l.attr("type","text"),r&&(r.$formatters=[],r.$parsers=[]),void 0!==a.asDate&&"text"==o&&(o="date");var s=!1,c=a.mask||a.format;c=c?parseMaskType(c,t):parseMaskType(o,t),c.endsWith(";0")&&(s=!0);var d=c.replace(";1","").replace(";0","").trim();if(void 0!=d&&0!=d.length)if("date"==o||"datetime"==o||"datetime-local"==o||"month"==o||"time"==o||"time-local"==o||"week"==o){var u={format:d,locale:t.use(),showTodayButton:!0,useStrict:!0,tooltips:{today:t.instant("DatePicker.today"),clear:t.instant("DatePicker.clear"),close:t.instant("DatePicker.close"),selectMonth:t.instant("DatePicker.selectMonth"),prevMonth:t.instant("DatePicker.prevMonth"),nextMonth:t.instant("DatePicker.nextMonth"),selectYear:t.instant("DatePicker.selectYear"),prevYear:t.instant("DatePicker.prevYear"),nextYear:t.instant("DatePicker.nextYear"),selectDecade:t.instant("DatePicker.selectDecade"),prevDecade:t.instant("DatePicker.prevDecade"),nextDecade:t.instant("DatePicker.nextDecade"),prevCentury:t.instant("DatePicker.prevCentury"),nextCentury:t.instant("DatePicker.nextCentury")}};"DD/MM/YYYY"!=d&&"MM/DD/YYYY"!=d&&(u.sideBySide=!0),l.wrap('<div style="position:relative"></div>'),l.datetimepicker(u);var p="date"==o||"datetime"==o||"time"==o;l.on("dp.change",function(){$(this).is(":visible")&&($(this).trigger("change"),e.$apply(function(){var e=l.val(),t=null;t=p?moment.utc(e,d):moment(e,d),t.isValid()&&r&&r.$setViewValue(t.toDate())}))}),r&&(r.$formatters.push(function(e){if(e){var t=null;return t=p?moment.utc(e):moment(e),t.format(d)}return null}),r.$parsers.push(function(e){if(e){var t=null;return t=p?moment.utc(e,d):moment(e,d),t.toDate()}return null}))}else if("number"==o||"money"==o||"integer"==o){s=!0,!1;var g=d.trim().replace(/\./g,"").replace(/\,/g,"").replace(/#/g,"").replace(/0/g,"").replace(/9/g,""),m="",f="",v="",h=",",b=0;d.startsWith(g)?m=g:d.endsWith(g)&&(f=g);var y=d.trim().replace(m,"").replace(f,"").trim();y.startsWith("#.")?v=".":y.startsWith("#,")&&(v=",");var k=null;if(-1!=y.indexOf(",0")?(h=",",k=",0"):-1!=y.indexOf(".0")&&(h=".",k=".0"),null!=k){var M=y.substring(y.indexOf(k)+1);b=M.length}var D="numeric";0==b&&(D="integer");var w={rightAlign:"money"==o,unmaskAsNumber:!0,allowMinus:!0,prefix:m,suffix:f,radixPoint:h,digits:b};v&&(w.autoGroup=!0,w.groupSeparator=v),$(i).inputmask(D,w),r&&(r.$formatters.push(function(e){return void 0!=e&&null!=e&&""!=e?format(d,e):null}),r.$parsers.push(function(e){if(void 0!=e&&null!=e&&""!=e){var t=l.inputmask("unmaskedvalue");if(""!=t)return t}return null}))}else if("text"==o||"tel"==o){var u={};a.maskPlaceholder&&(u.placeholder=a.maskPlaceholder),l.mask(d,u),s&&r&&(r.$formatters.push(function(e){return e?l.masked(e):null}),r.$parsers.push(function(e){return e?l.cleanVal():null}))}}}}}}function parseMaskType(e,t){return"datetime"==e||"datetime-local"==e?"Format.DateTime"==(e=t.instant("Format.DateTime"))&&(e="DD/MM/YYYY HH:mm:ss"):"date"==e?"Format.Date"==(e=t.instant("Format.Date"))&&(e="DD/MM/YYYY"):"time"==e||"time-local"==e?"Format.Hour"==(e=t.instant("Format.Hour"))&&(e="HH:mm:ss"):"month"==e?e="MMMM":"number"==e?"Format.Decimal"==(e=t.instant("Format.Decimal"))&&(e="0,00"):"money"==e?"Format.Money"==(e=t.instant("Format.Money"))&&(e="#.#00,00"):"integer"==e?e="0":"week"==e?e="dddd":"tel"==e?e="(00) 00000-0000;0":"text"==e&&(e=""),e}maskDirectiveAsDate.$inject=["$compile","$translate"],maskDirectiveMask.$inject=["$compile","$translate"],function($app){var isoDate=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,patternFormat=function(e){return e?$(e).attr("format")||"DD/MM/YYYY":"DD/MM/YYYY"},parsePermission=function(e){var t={visible:{public:!0},enabled:{public:!0}};if(e)for(var n=e.toLowerCase().trim().split(","),i=0;i<n.length;i++){var a=n[i].trim();if(a){var r=a.split(":");if(2==r.length){var l=r[0].trim(),o=r[1].trim();if(o){for(var s=o.split(";"),c={},d=0;d<s.length;d++){var u=s[d].trim();u&&(c[u]=!0)}t[l]=c}}}}return t};app.directive("asDate",maskDirectiveAsDate).directive("ngDestroy",function(){return{restrict:"A",link:function(scope,element,attrs,ctrl){element.on("$destroy",function(){attrs.ngDestroy&&attrs.ngDestroy.length>0&&(attrs.ngDestroy.indexOf("app.")>-1||attrs.ngDestroy.indexOf("blockly.")>-1?scope.$eval(attrs.ngDestroy):eval(attrs.ngDestroy))})}}}).directive("dynamicImage",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@",width:"@",height:"@",style:"@",class:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel=""),e.width||(e.width="128"),e.height||(e.height="128"),e.style||(e.style=""),e.class||(e.class=""),this.containsLetter(e.width)||(e.width+="px"),this.containsLetter(e.height)||(e.height+="px")},containsLetter:function(e){for(var t,n=0;n<e.length;n++){t=!0;for(var i=0;i<10;i++)parseInt(e[n])==i&&(t=!1);if(t)break}return t},link:function(t,n,i){this.init(t);var a=t,r=i.ngRequired&&"true"==i.ngRequired?"required":"";n.append('<div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectImg.svg" class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" accept="image/*;capture=camera">                                  <div class="remove btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                                    <span class="glyphicon glyphicon-remove"></span>                                  </div>                                  <div class="btn btn-info btn-xs start-camera-button" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                                    <span class="glyphicon glyphicon-facetime-video"></span>                                  </div>                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important; margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                </div>'.split("$height$").join(a.height).split("$width$").join(a.width).split("$ngModel$").join(a.ngModel).split("$style$").join(a.style).split("$class$").join(a.class).split("$required$").join(r)),e(n)(n.scope())}}}]).directive("dynamicImage",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,n,i){var a=i.ngRequired&&"true"==i.ngRequired?"required":"",r=n.html(),l='<div ngf-drop="" ngf-drag-over-class="dragover">                   <img style="width: 100%;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                   <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important; margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                   <div class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" ngf-pattern="\'image/*\'" ngf-max-size="$maxFileSize$">                     $userHtml$                   </div>                   <div class="remove-image-button btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                     <span class="glyphicon glyphicon-remove"></span>                   </div>                   <div class="btn btn-info btn-xs start-camera-button-attribute" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                     <span class="glyphicon glyphicon-facetime-video"></span>                   </div>                 </div>',o="";i.maxFileSize&&(o=i.maxFileSize),l=$(l.split("$ngModel$").join(i.ngModel).split("$required$").join(a).split("$userHtml$").join(r).split("$maxFileSize$").join(o)),n.html(l),e(l)(n.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,n,i){var a=i.ngRequired&&"true"==i.ngRequired?"required":"",r=i.ngModel.split("."),l=r[0],o=r[r.length-1],s=Math.floor(1e3*Math.random()+20),c=n.html(),d="";i.maxFileSize&&(d=i.maxFileSize);var u='                                <div ng-show="!$ngModel$" ngf-drop="" ngf-drag-over-class="dragover">                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important;margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                  <div class="btn" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" ngf-max-size="$maxFileSize$">                                    $userHtml$                                  </div>                                  <div class="progress" data-type="bootstrapProgress" id="uploadprogress$number$" style="display:none">                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">                                      <span class="sr-only"></span>                                    </div>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="upload-image-component-attribute">                                   <div class="btn btn-danger btn-xs ng-scope" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="glyphicon glyphicon-remove"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntity($datasource$,\'$field$\')">download</a>                                   </div>                                 </div>                                 ';u=$(u.split("$ngModel$").join(i.ngModel).split("$datasource$").join(l).split("$field$").join(o).split("$number$").join(s).split("$required$").join(a).split("$userHtml$").join(c).split("$maxFileSize$").join(d)),n.html(u),e(u)(n.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel="")},link:function(t,n,i){this.init(t);var a=t,r=i.ngRequired&&"true"==i.ngRequired?"required":"",l=a.ngModel.split("."),o=l[0],s=l[l.length-1],c=Math.floor(1e3*Math.random()+20);n.append('                                <div ng-show="!$ngModel$">                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important;margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                  <div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                     <img class="ng-scope" style="height: 128px; width: 128px;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectFile.png" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" accept="*">                                    <progress id="uploadprogress$number$" max="100" value="0" style="position: absolute; width: 128px; margin-top: -134px;">0</progress>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="form-group upload-image-component">                                   <div class="btn btn-danger btn-xs ng-scope" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="glyphicon glyphicon-remove"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntity($datasource$,\'$field$\')">download</a>                                   </div>                                 </div>                                 '.split("$ngModel$").join(a.ngModel).split("$datasource$").join(o).split("$field$").join(s).split("$number$").join(c).split("$required$").join(r)),e(n)(n.scope())}}}]).directive("pwCheck",[function(){"use strict";return{require:"ngModel",link:function(e,t,n,i){var a="#"+n.pwCheck;t.add(a).on("keyup",function(){e.$apply(function(){var e=t.val()===$(a).val();i.$setValidity("pwmatch",e)})})}}}]).directive("ngClick",[function(){"use strict";return{link:function(scope,elem,attrs,ctrl){if(scope.rowData){var crnDatasource=elem.closest("[crn-datasource]");crnDatasource.length>0&&elem.on("click",function(){scope.$apply(function(){var datasource=eval(crnDatasource.attr("crn-datasource"));datasource.active=scope.rowData})})}}}}]).directive("valid",function(){return{require:"^ngModel",restrict:"A",link:function(e,t,n,i){var a={cpf:CPF,cnpj:CNPJ};i.$validators[n.valid]=function(e,i){var r=e||i,l=a[n.valid].isValid(r);return l?t[0].setCustomValidity(""):t.scope().$applyAsync(function(){t[0].setCustomValidity(t[0].dataset.errorMessage)}),l||!r}}}}).directive("cronappSecurity",function(){return{restrict:"A",link:function(e,t,n){var i=[];e.session&&e.session.roles&&(i=e.session.roles.toLowerCase().split(","));for(var a=parsePermission(n.cronappSecurity),r=!1,l=!1,o=0;o<i.length;o++){var s=i[o].trim();s&&(a.visible[s]&&(r=!0),a.enabled[s]&&(l=!0))}r||$(t).hide(),l||$(t).find("*").addBack().attr("disabled",!0)}}}).directive("qr",["$window",function(e){return{restrict:"A",require:"^ngModel",template:'<canvas ng-hide="image"></canvas><img ng-if="image" ng-src="{{canvasImage}}"/>',link:function(t,n,i,a){void 0===t.size&&i.size&&(t.text=i.size);var r=function(){return a.$modelValue||""},l=function(e){return/^[0-9]*$/.test(e)},o=function(e){return/^[0-9A-Z $%*+\-.\/:]*$/.test(e)},s=function(e){for(var t=0;t<e.length;t++){if(e.charCodeAt(t)>255)return!1}return!0},c=function(e,t){if("NUMBER"===e&&!l(t))throw new Error("The `NUMBER` input mode is invalid for text.");if("ALPHA_NUM"===e&&!o(t))throw new Error("The `ALPHA_NUM` input mode is invalid for text.");if("8bit"===e&&!s(t))throw new Error("The `8bit` input mode is invalid for text.");if(!s(t))throw new Error("Input mode is invalid for text.");return!0},d=function(e){var n=t.inputMode;return n=n||(l(e)?"NUMBER":void 0),n=n||(o(e)?"ALPHA_NUM":void 0),n=n||(s(e)?"8bit":""),c(n,e)?n:""},u=n.find("canvas")[0],p=!!e.CanvasRenderingContext2D;t.TYPE_NUMBER=function(){return t.typeNumber||0}(),t.TEXT=r(),t.CORRECTION=function(){return{L:1,M:0,Q:3,H:2}[t.correctionLevel||0]||0}(),t.SIZE=function(){return t.size||$(n).outerWidth()}(),t.INPUT_MODE=d(t.TEXT),t.canvasImage="";var g=function(e,t,n,i){for(var a=0;a<n;a++)for(var r=0;r<n;r++){var l=Math.ceil((r+1)*i)-Math.floor(r*i),o=Math.ceil((a+1)*i)-Math.floor(a*i);e.fillStyle=t.isDark(a,r)?"#000":"#fff",e.fillRect(Math.round(r*i),Math.round(a*i),l,o)}},m=function(e,n,i,a,r,l){var o=/^\s+|\s+$/g,s=n.replace(o,""),c=new QRCode(i,a,l);c.addData(s),c.make();var d=e.getContext("2d"),u=c.getModuleCount(),m=r/u;e.width=e.height=r,p&&(g(d,c,u,m),t.canvasImage=e.toDataURL()||"")};t.$watch(function(){return a.$modelValue},function(e,n){e!==n&&(t.text=a.$modelValue,t.TEXT=r(),t.INPUT_MODE=d(t.TEXT),m(u,t.TEXT,t.TYPE_NUMBER,t.CORRECTION,t.SIZE,t.INPUT_MODE))}),m(u,t.TEXT,t.TYPE_NUMBER,t.CORRECTION,t.SIZE,t.INPUT_MODE)}}}]).directive("uiSelect",["$compile",function(e){return{restrict:"E",require:"ngModel",link:function(t,n,i,a){if(void 0!=i.required||"true"===i.ngRequired){$(n).append('<input autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="left: 50%!important; top: 100%!important;" type=text ng-model="'+i.ngModel+'" required>');var r=$(n).find("input.uiSelectRequired");e(r)(n.scope())}}}}]).filter("mask",["$translate",function(e){return function(t,n){if(!(n=parseMaskType(n,e)))return t;if(n=n.replace(";1","").replace(";0","").trim(),"string"==typeof t&&t.match(isoDate))return moment.utc(t).format(n);if(t instanceof Date)return moment.utc(t).format(n);if("number"==typeof t)return format(n,t);if(void 0!=t&&null!=t&&""!=t){var i=$('<input type="text">');return i.mask(n),i.masked(t)}return t}}]).directive("mask",maskDirectiveMask).directive("cronappFilter",["$compile",function($compile){return{restrict:"A",require:"?ngModel",setFilterInButton:function(e,t,n){var i=e.closest("fieldset");if(i){var a=i.find("button[cronapp-filter]");if(a){var r=a.data("filters");r||(r=[]);var l=-1,o=e.attr("ng-model");if($(r).each(function(e){this.ngModel==o&&(l=e)}),l>-1&&r.splice(l,1),t.length>0){var s={ngModel:o,bindedFilter:t};r.push(s)}a.data("filters",r)}}},makeAutoPostSearch:function(e,t,n,i){var a=e.closest("fieldset");if(a&&a.length>0){var r=a.find("button[cronapp-filter]");if(r&&r.length>0){var l=r.data("filters");l&&l.length>0&&(t="",$(l).each(function(){t+=this.bindedFilter+";"}))}}n.search(t,"true"==i.cronappFilterCaseinsensitive)},inputBehavior:function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){var filterTemplate="",filtersSplited=attrs.cronappFilter.split(";");$(filtersSplited).each(function(){this.length>0&&(filterTemplate+="text"==typeElement?this+"@"+operator+"%{value}%;":this+operator+"{value};")}),filterTemplate=filterTemplate.length>0?filterTemplate.substr(0,filterTemplate.length-1):"%{value}%";var selfDirective=this;ngModelCtrl?scope.$watch(attrs.ngModel,function(newVal,oldVal){if(!angular.equals(newVal,oldVal)){var eType=$element.data("type")||$element.attr("type"),value=ngModelCtrl.$modelValue,datasource=eval(attrs.crnDatasource);value instanceof Date?(value=value.toISOString(),value+="date"==eType?"@@date":"time"==eType||"time-local"==eType?"@@time":"@@datetime"):"number"==typeof value?value+="@@number":"boolean"==typeof value&&(value+="@@boolean");var bindedFilter=filterTemplate.split("{value}").join(value);0==ngModelCtrl.$viewValue.length&&(bindedFilter=""),selfDirective.setFilterInButton($element,bindedFilter,operator),autopost&&selfDirective.makeAutoPostSearch($element,bindedFilter,datasource,attrs)}}):"text"==typeElement?$element.on("keyup",function(){var datasource=eval(attrs.crnDatasource),value=void 0;value=ngModelCtrl&&void 0!=ngModelCtrl?ngModelCtrl.$viewValue:this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==this.value.length&&(bindedFilter=""),selfDirective.setFilterInButton($element,bindedFilter,operator),autopost&&selfDirective.makeAutoPostSearch($element,bindedFilter,datasource,attrs)}):$element.on("change",function(){var datasource=eval(attrs.crnDatasource),value=void 0,typeElement=$(this).attr("type");if(void 0!=attrs.asDate&&(typeElement="date"),ngModelCtrl&&void 0!=ngModelCtrl)value=ngModelCtrl.$viewValue;else if("checkbox"==typeElement)value=$(this).is(":checked");else if("date"==typeElement){if(value=this.value,this.value.length>0){var momentDate=moment(this.value,patternFormat(this));value=momentDate.toDate().toISOString()}}else value=this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==value.toString().length&&(bindedFilter=""),selfDirective.setFilterInButton($element,bindedFilter,operator),autopost&&selfDirective.makeAutoPostSearch($element,bindedFilter,datasource,attrs)})},forceDisableDatasource:function(datasourceName,scope){var disableDatasource=setInterval(function(){try{var datasourceInstance=eval(datasourceName);datasourceInstance&&($(document).ready(function(){var e=0,t=setInterval(function(){e<10?(scope.$apply(function(){datasourceInstance.enabled=!1,datasourceInstance.data=[]}),e++):clearInterval(t)},20)}),clearInterval(disableDatasource))}catch(e){}},10)},buttonBehavior:function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){var datasourceName="";datasourceName=attrs.crnDatasource?attrs.crnDatasource:$element.parent().attr("crn-datasource");var requiredFilter=attrs.requiredFilter&&"true"==attrs.requiredFilter.toString();requiredFilter&&this.forceDisableDatasource(datasourceName,scope),$element.on("click",function(){var $this=$(this),filters=$this.data("filters");if(datasourceName&&datasourceName.length>0&&filters){var bindedFilter="";$(filters).each(function(){bindedFilter+=this.bindedFilter+";"});var datasourceToFilter=eval(datasourceName);requiredFilter?(datasourceToFilter.enabled=bindedFilter.length>0,datasourceToFilter.enabled?datasourceToFilter.search(bindedFilter,"true"==attrs.cronappFilterCaseinsensitive):scope.$apply(function(){datasourceToFilter.data=[]})):datasourceToFilter.search(bindedFilter,"true"==attrs.cronappFilterCaseinsensitive)}})},link:function(e,t,n,i){var a=$(t),r=a.data("type")||a.attr("type");void 0!=n.asDate&&(r="date");var l="=";n.cronappFilterOperator&&n.cronappFilterOperator.length>0&&(l=n.cronappFilterOperator);var o=!0;n.cronappFilterAutopost&&"false"==n.cronappFilterAutopost&&(o=!1),"INPUT"==a[0].tagName?this.inputBehavior(e,t,n,i,a,r,l,o):this.buttonBehavior(e,t,n,i,a,r,l,o)}}}]).directive("cronRichEditor",["$compile",function(e){return{restrict:"E",replace:!0,require:"ngModel",parseToTinyMCEOptions:function(e){var t={};t.allowFullScreen="fullscreen |",t.allowPage="fullpage newdocument code pagebreak |",t.allowPrint="preview print |",t.allowTransferArea="cut copy paste |",t.allowDoUndo="undo redo |",t.allowSymbol="charmap |",t.allowEmbeddedImage="bdesk_photo |",t.allowFont="formatselect fontselect fontsizeselect strikethrough bold italic underline removeformat |",t.allowLinks="link unlink anchor |",t.allowParagraph="alignleft aligncenter alignright alignjustify numlist bullist outdent indent blockquote hr |",t.allowFormulas="tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry tiny_mce_wiris_CAS |";var n={menubar:!1,statusbar:!1,plugins:"bdesk_photo advlist anchor autolink autoresize autosave charmap code colorpicker contextmenu directionality emoticons fullpage fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus table template toc visualblocks visualchars wordcount tiny_mce_wiris",toolbar:"",content_style:""};for(var i in e)i.startsWith("allow")&&e[i]&&(n.toolbar+=" "+t[i]);return n.menubar=e.showMenuBar,n.statusbar=e.showStatusBar,n.content_style=e.contentStyle,JSON.stringify(n)},link:function(t,n,i,a){var r=JSON.parse(i.options),l=this.parseToTinyMCEOptions(r),o='                  <textarea                     ui-tinymce="$options$"                     ng-model="$ngModel$">                   </textarea>                 ';o=$(o.split("$ngModel$").join(i.ngModel).split("$options$").join(escape(l)));var s=angular.element(o);n.html(""),n.append(s),e(s)(t)}}}]).directive("cronGrid",["$compile","$translate",function($compile,$translate){return{restrict:"E",replace:!0,require:"ngModel",generateId:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},generateBlocklyCall:function(e){var t;if("client"==e.type){var n=e.blocklyClass.split("/"),i=n[n.length-1];t="blockly.js.blockly."+i,t+="."+e.blocklyMethod;var a="()";e.blocklyParams.length>0&&(a="(",e.blocklyParams.forEach(function(e){a+=this.encodeHTML(e.value)+","}.bind(this)),a=a.substr(0,a.length-1),a+=")"),t+=a}else if("server"==e.type){var i=e.blocklyClass+":"+e.blocklyMethod;t="cronapi.util.makeCallServerBlocklyAsync('"+i+"',null,null,",e.blocklyParams.length>0&&e.blocklyParams.forEach(function(e){t+=this.encodeHTML(e.value)+","}.bind(this)),t=t.substr(0,t.length-1),t+=")"}return t},generateToolbarButtonBlockly:function(e,t){var n=function(e,n,i){var a='<a class="k-button" id="#BUTTONID#" href="javascript:void(0)" ng-click="#FUNCTIONCALL#">#TITLE#</a>';a=a.split("#BUTTONID#").join(e).split("#FUNCTIONCALL#").join(n).split("#TITLE#").join(i);var r=setInterval(function(){if($("#"+e).length>0){var n=angular.element($("#"+e));$compile(n)(t),clearInterval(r)}},200);return a};return function(e,t){return{template:function(){var i=this.generateId();return n(i,e,t)}.bind(this)}}.bind(this)(this.generateBlocklyCall(e.blocklyInfo),e.title)},getObjectId:function(e){if(e||(e=""),"object"==typeof e)if(e.id)e=e.id;else for(var t in e){e=e[t];break}return e},updateFiltersFromAngular:function(e,t){e.dataSource.options.filter.forEach(function(n){"screen"==n.linkParentType&&t.$watch(n.linkParentField,function(t,i){e.dataSource.options.filter.forEach(function(e){"screen"==n.linkParentType&&n.linkParentField==e.linkParentField&&(t=this.getObjectId(t),e.value=t)}.bind(this)),e.dataSource.read(),e.refresh(),e.trigger("change")}.bind(this))}.bind(this))},setFiltersFromLinkColumns:function(e,t,n){e.filter=[],t.columns.forEach(function(t){if(t.linkParentField&&t.linkParentField.length>0&&t.linkParentType&&t.linkParentType.length>0){var i={field:t.field,operator:"eq",value:"",linkParentField:t.linkParentField,linkParentType:t.linkParentType};if("screen"==i.linkParentType){var a=n[i.linkParentField];a=this.getObjectId(a),i.value=a}e.filter.push(i)}}.bind(this))},encodeHTML:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},decodeHTML:function(e){return e.replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")},getColumns:function(options,scope){function categoryDropDownEditor(e,t){$('<input required name="'+t.field+'"/>').appendTo(e).kendoDropDownList({autoBind:!1,dataTextField:"CategoryName",dataValueField:"CategoryID",dataSource:{type:"odata",transport:{read:"https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"}}})}var columns=[];return options.columns&&options.columns.forEach(function(column){if(column.visible)if("Database"==column.dataType){var addColumn={field:column.field,title:column.headerText,type:column.type,width:column.width,sortable:column.sortable,filterable:column.filterable};column.format&&(addColumn.format=column.format),columns.push(addColumn)}else if("Command"==column.dataType){if("no"!=options.editable){var command=column.command.split("|"),addColumn={command:command,title:column.headerText,width:column.width};columns.push(addColumn)}}else if("Blockly"==column.dataType){var directiveContext=this,addColumn={command:[{name:this.generateId(),text:column.headerText,click:function(e){e.preventDefault();var tr=$(e.target).closest("tr"),grid=tr.closest("table"),item=this.dataItem(tr),index=$(grid.find("tbody")[0]).children().index(tr),consolidated={item:item,index:index},call="scope."+directiveContext.generateBlocklyCall(column.blocklyInfo);eval(call)}}],width:column.width};columns.push(addColumn)}}.bind(this)),columns},getPageAble:function(e){var t={refresh:e.allowRefreshGrid,pageSizes:e.allowSelectionTotalPageToShow,buttonCount:5};return e.allowPaging||(t=e.allowPaging),t},getToolbar:function(e,t){var n=[];return e.toolBarButtons.forEach(function(i){if("Native"==i.type)"no"!=e.editable?"save"==i.title||"cancel"==i.title?"batch"==e.editable&&n.push(i.title):n.push(i.title):"pdf"!=i.title&&"excel"!=i.title||n.push(i.title);else if("Blockly"==i.type){var a=this.generateToolbarButtonBlockly(i,t);n.push(a)}else if("Template"==i.type){var r={template:i.template};n.push(r)}}.bind(this)),0==n.length&&(n=void 0),n},getEditable:function(e){var t=e.editable;return"batch"==e.editable?t=!0:"no"==e.editable&&(t=!1),t},generateKendoGridInit:function(e,t){function n(e){e.sender.options.listCurrentOptions.forEach(function(n){var a=i.generateKendoGridInit(n,t);a.dataSource.filter.forEach(function(t){"hierarchy"==t.linkParentType&&(t.value=e.data[t.linkParentField])});var r=$("<div/>").appendTo(e.detailCell).kendoGrid(a).data("kendoGrid");r.dataSource.transport.options.grid=r,i.updateFiltersFromAngular(r,t)})}var i=this,a=app.kendoHelper.getDataSource(e.dataSource,e.allowPaging,e.pageCount),r=this.getColumns(e,t),l=this.getPageAble(e),o=this.getToolbar(e,t),s=this.getEditable(e);return this.setFiltersFromLinkColumns(a,e,t),{toolbar:o,pdf:{allPages:!0,avoidLinks:!0,paperSize:"A4",margin:{top:"2cm",left:"1cm",right:"1cm",bottom:"1cm"},landscape:!0,repeatHeaders:!0,scale:.8},dataSource:a,editable:s,height:e.height,groupable:e.allowGrouping,sortable:e.allowSorting,filterable:!0,pageable:l,columns:r,selectable:e.allowSelectionRow,detailInit:e.details&&e.details.length>0?n:void 0,listCurrentOptions:e.details&&e.details.length>0?e.details:void 0}},link:function(scope,element,attrs,ngModelCtrl){var $templateDyn=$("<div></div>"),baseUrl="plugins/cronapp-framework-js/dist/js/kendo-ui/js/messages/kendo.messages.";"pt_br"==$translate.use()?baseUrl+="pt-BR.min.js":baseUrl+="en-US.min.js";var helperDirective=this;$.getScript(baseUrl,function(){console.log("loaded language");var options=JSON.parse(attrs.options||"{}"),kendoGridInit=helperDirective.generateKendoGridInit(options,scope);kendoGridInit.change=function(e){var item=this.dataItem(this.select()),fcChangeValue=eval("scope.cronapi.screen.changeValueOfField");fcChangeValue(attrs.ngModel,item)};var grid=$templateDyn.kendoGrid(kendoGridInit).data("kendoGrid");grid.dataSource.transport.options.grid=grid,helperDirective.updateFiltersFromAngular(grid,scope)}),element.html($templateDyn),$compile($templateDyn)(element.scope())}}}])}(app);