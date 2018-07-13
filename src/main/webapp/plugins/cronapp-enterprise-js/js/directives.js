(function($app) {
  app.directive('cronSelect', function ($compile) {
    return {
      restrict: 'E',
      replace: true,
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        if (attrs.required != undefined || attrs.ngRequired === 'true') {
          var select = {};
          try {
            var json = window.buildElementOptions(element);
            select = JSON.parse(json);
          } catch(err) {
            console.log('ComboBox invalid configuration! ' + err);
          }
          
          var options = app.kendoHelper.getConfigCombobox(select);
          
          var parent = element.parent();
          $(parent).append('<input style="width: 100%;" class="cronSelect" ng-model="' + attrs.ngModel + '"/>');
          var $element = $(parent).find('input.cronSelect');
        
          var combobox = $element.kendoComboBox(options).data('kendoComboBox');
          $(element).remove();
          
          var _scope = scope;
          var _ngModelCtrl = ngModelCtrl;
          $element.on('change', function (event) {
            _scope.$apply(function () {
              _ngModelCtrl.$setViewValue(this.value());
            }.bind(combobox));
          });

          if (ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (value) {
              var result = '';
              
              if (value) {
                result = value;
              }
              
              combobox.value(result);
              
              return result;
            });
  
            ngModelCtrl.$parsers.push(function (value) {
              if (value) {
                return value;
              }
              
              return null;
            });
          }
        }
      }
    };
  })
  
  app.directive('cronDynamicSelect', function ($compile) {
    return {
      restrict: 'E',
      replace: true,
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        if (attrs.required != undefined || attrs.ngRequired === 'true') {
          var select = {};
          try {
            var json = window.buildElementOptions(element);
            select = JSON.parse(json);
          } catch(err) {
            console.log('DynamicComboBox invalid configuration! ' + err);
          }
          
          var options = app.kendoHelper.getConfigCombobox(select);
          if ((options) && (options.dataSource) && (options.dataSource.schema) && 
              (options.dataSource.schema.model) && (options.dataSource.schema.model.id)) {
            delete options.dataSource.schema.model.id;
          }
          
          var parent = element.parent();
          $(parent).append('<input style="width: 100%;" class="cronDynamicSelect" ng-model="' + attrs.ngModel + '"/>');
          var $element = $(parent).find('input.cronDynamicSelect');
          
          var combobox = $element.kendoDropDownList(options).data('kendoDropDownList');
          var _scope = scope;
          var _ngModelCtrl = ngModelCtrl;
          $(element).remove();
          
          $element.on('change', function (event) {
            _scope.$apply(function () {
              _ngModelCtrl.$setViewValue(this.dataItem());
            }.bind(combobox));
          });
          
          if (ngModelCtrl) {
            /**
             * Formatters change how model values will appear in the view.
             * For display component.
             */
            ngModelCtrl.$formatters.push(function (value) {
              var result = '';
              
              if (value) {
                if (combobox.options.valuePrimitive == "false") {
                  if (value && value[select.dataValueField]) {
                    result = value[select.dataValueField];
                  }
                } else {
                  result = value  
                }
                
              }
              
              combobox.value(result);
            
              return result;
            });
  
            /**
             * Parsers change how view values will be saved in the model.
             * for storage
             */
            ngModelCtrl.$parsers.push(function (value) {
              if (value) {
                if (combobox.options.valuePrimitive === "true") {  
                  if (typeof value == 'string') {
                    return value;
                  } else if (value[select.dataValueField]) {
                    return value[select.dataValueField];
                  }
                } else {
                  try {
                    return value;
                    //return objectClone(value, this.dataSource.options.schema.model.fields);
                  } catch(e){}
                }
              }
  
              return null;
            }.bind(combobox));
          }
        }
      }
    };
  })
  
  .directive('cronMultiSelect', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        if (attrs.required != undefined || attrs.ngRequired === 'true') {
          var _self = this;
          var select = {};
          try {
            var json = window.buildElementOptions(element);
            select = JSON.parse(json);
          } catch(err) {
            console.log('MultiSelect invalid configuration! ' + err);
          }
          
          var _scope = scope;
          var _ngModelCtrl = ngModelCtrl;
          var options = app.kendoHelper.getConfigCombobox(select);
          if ((options) && (options.dataSource) && (options.dataSource.schema) && 
              (options.dataSource.schema.model) && (options.dataSource.schema.model.id)) {
            delete options.dataSource.schema.model.id;
          }
          var combobox = $(element).kendoMultiSelect(options).data('kendoMultiSelect');
          
          $(element).on('change', function (event) {
            _scope.$apply(function () {
              _ngModelCtrl.$setViewValue(this.dataItems());
            }.bind(combobox));
          });
          
          scope.$watchCollection(function(){return ngModelCtrl.$modelValue}, function(value, old){
            if (JSON.stringify(value) !== JSON.stringify(old)) {
              combobox.value(JSON.parse(JSON.stringify(value)));
            }
          });
          
          if (ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (value) {
              if (value) {
                return value;
              }
            
              return null;
            });
  
            ngModelCtrl.$parsers.push(function (value) {
              if (value && Array.isArray(value)) {
                if (this.dataSource) {
                  var result = [];
                  
                  try {
                    for (var item in value) {
                      result.push(objectClone(value[item], this.dataSource.options.schema.model.fields));
                    }
                  } catch (e){}
                  
                  return result;
                }
              }
              
              return null;
            }.bind(combobox));
          }
        }
      }
    };
  })  
  
  .directive('cronAutoComplete', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var select = {};
        try {
          var json = window.buildElementOptions(element);
          select = JSON.parse(json);
        } catch(err) {
          console.log('AutoComplete invalid configuration! ' + err);
        }
        
        var options = app.kendoHelper.getConfigCombobox(select);
        if ((options) && (options.dataSource) && (options.dataSource.schema) && 
            (options.dataSource.schema.model) && (options.dataSource.schema.model.id)) {
          delete options.dataSource.schema.model.id;
        }
        var parent = element.parent();
        $(parent).append('<input style="width: 100%;" class="cronAutoComplete" ng-model="' + attrs.ngModel + '"/>');
        var $element = $(parent).find('input.cronAutoComplete');
        
        options['change'] = function(e) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue($element.val());
          });
        }  

        var autoComplete = $element.kendoAutoComplete(options).data('kendoAutoComplete');
        $(element).remove();

        if (ngModelCtrl) {
          ngModelCtrl.$formatters.push(function (value) {
            var result = '';
            
            if (value) {
              if (typeof value == 'string') {
                result = value;
              } else if (value[select.dataTextField]) {
                result = value[select.dataTextField];
              }
            }
            
            autoComplete.value(result);

            return result;
          });

          ngModelCtrl.$parsers.push(function (value) {
            if (value) {
              if (typeof value == 'string') {
                return value;
              } else if (value[select.dataTextField]) {
                return value[select.dataTextField];
              }
            }

            return null;
          });
        }
      
      }
    }
  })

  .directive('cronDate', ['$compile', '$translate', '$window', function ($compile, $translate, $window) {
    return {
      restrict: 'AE',
      require: '^ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var options = {};
        var cronDate = {};
        
        try {
          if (attrs.options)
            cronDate =  JSON.parse(attrs.options);
          else {
            var json = window.buildElementOptions(element);
            cronDate = JSON.parse(json);
          }
          if (!cronDate.format) {
            cronDate.format = parseMaskType(cronDate.type, $translate)
          }
          options = app.kendoHelper.getConfigDate($translate, cronDate);
        } catch(err) {
          console.log('AutoComplete invalid configuration! ' + err);
        }
        
        var useUTC = options.type == 'date' || options.type == 'datetime' || options.type == 'time';


        var $element;
        if (attrs.fromGrid) {
          $element = $(element);
        }
        else {
          var parent = element.parent();
          var $input = $('<input style="width: 100%;" class="cronDate" ng-model="' + attrs.ngModel + '"/>');
          $(parent).append($input);
          $element = $(parent).find('input.cronDate');
          $element.data("type", options.type);
          $element.attr("type", "date");
        }
        
        var datePicker = app.kendoHelper.buildKendoMomentPicker($element, options, scope, ngModelCtrl); 
        
        if (attrs.fromGrid) {
          var unmaskedvalue = function() {
            var momentDate = null;
           
            var valueDate =  $(this).val();
            if ($(this).data('initial-date')) {
              valueDate = $(this).data('initial-date');
              $(this).data('initial-date', null);
            }
            
            if (useUTC) {
              momentDate = moment.utc(valueDate, options.momentFormat);
            } else {
              momentDate = moment(valueDate, options.momentFormat);
            }
            
            datePicker.value(momentDate.format());
            $(this).data('rawvalue', momentDate.toDate());
          }
          $(element).on('keydown', unmaskedvalue).on('keyup', unmaskedvalue).on('change', unmaskedvalue);
          unmaskedvalue.bind($element)();
        }
        else {
          if (ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (value) {
              var selDate = null;
              
              if (value) {
                var momentDate = null;
  
                if (useUTC) {
                  momentDate = moment.utc(value);
                } else {
                  momentDate = moment(value);
                }
  
                selDate = momentDate.format(options.momentFormat);
              }
              
              datePicker.value(selDate);
  
              return selDate;
            });
  
            ngModelCtrl.$parsers.push(function (value) {
              if (value) {
                var momentDate = null;
                if (useUTC) {
                  momentDate = moment.utc(value, options.momentFormat);
                } else {
                  momentDate = moment(value, options.momentFormat);
                }
                return momentDate.toDate();
              }
  
              return null;
            });
          }
          
          $(element).remove();
        }
      }
    }
  }])
  
  .directive('cronSlider', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var slider = {};
        
        try {
          var json = window.buildElementOptions(element);
          slider = JSON.parse(json);
        } catch(err) {
          console.log('Slider invalid configuration! ' + err);
        }
        
        var onChange = function(event) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(parseInt($(element).val()));
          });
        }
        
        var sliderOnChange = function(event) {
          onChange(event);
        }
        
        var sliderOnSlide = function(event) {
          onChange(event);
        }
              
        var config = app.kendoHelper.getConfigSlider(slider);
        config['change'] = sliderOnChange;
        config['slide'] = sliderOnSlide;
        
        $(element).empty();
        var slider = $(element).kendoSlider(config).data("kendoSlider");
        
        scope.$watch(function(){return ngModelCtrl.$modelValue}, function(value, old){
          if (value !== old) { 
            if (!value) {
              slider.value(slider.min());
            } else {
              slider.value(value);
            }
          }
        });
        
        if (ngModelCtrl) {
          ngModelCtrl.$formatters.push(function (value) {
            var result = null;
            
            if (!value && slider.min) {
              result = slider.min;
            } else if (value) {
              result = value;
            }
            
            slider.value(result);
            
            return result;
          });

          ngModelCtrl.$parsers.push(function (value) {
            if (value) {
              return value;
            }

            return null;
          });
        }
      }
    }
  })
  
  .directive('cronSwitch', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var cronSwitch = {};
        
        try {  
          var json = window.buildElementOptions(element);
          cronSwitch = JSON.parse(json);
        } catch(err) {
          console.log('Switch invalid configuration! ' + err);
        }
        
        var options = app.kendoHelper.getConfigSwitch(cronSwitch);
        var parent = element.parent();
        $(parent).append('<input style="width: 100%;" class="cronSwitch" ng-model="' + attrs.ngModel + '"/>');
        var $element = $(parent).find('input.cronSwitch');
        
        var change = function(e) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(this.value());
          }.bind(this));
        } 
        options['change'] = change;
        
        var mobSwitch = $element.kendoMobileSwitch(options).data('kendoMobileSwitch');
        $(element).remove();
        
        if (ngModelCtrl) {
          ngModelCtrl.$formatters.push(function (value) {
            var result = false;
            
            if (value != undefined) {
              result = value;
            }
            
            mobSwitch.value(result);
            
            return result;
          });

          ngModelCtrl.$parsers.push(function (value) {
            if (value != undefined) {
              return value;
            }
            
            return false;
          });
        }
      }
    }
  })
  
  .directive('cronBarcode', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var cronBarcode = {};
        
        try {  
          var json = window.buildElementOptions(element);
          cronBarcode = JSON.parse(json);
        } catch(err) {
          console.log('Barcode invalid configuration! ' + err);
        }
        
        var options = app.kendoHelper.getConfigBarcode(cronBarcode);
        var parent = element.parent();
        $(parent).append('<span class="cronBarcode" ng-model="' + attrs.ngModel + '"></span>');
        var $element = $(parent).find('span.cronBarcode');
        
        var kendoBarcode = $element.kendoBarcode(options).data('kendoBarcode');
        $(element).remove();
        
        scope.$watch(function(){return ngModel.$modelValue}, function(value, old){
          var result = '';
          
          if (value !== old) {
            result = value;
          }
          
          options['value'] = result;
          kendoBarcode.setOptions(options);
        });
      }
    }
  })  
  
  .directive('cronQrcode', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var cronQrcode = {};
        
        try {  
          var json = window.buildElementOptions(element);
          cronQrcode = JSON.parse(json);
        } catch(err) {
          console.log('Qrcode invalid configuration! ' + err);
        }
        
        var options = app.kendoHelper.getConfigQrcode(cronQrcode);
        var parent = element.parent();
        $(parent).append('<span class="cronQrcode" ng-model="' + attrs.ngModel + '"></span>');
        var $element = $(parent).find('span.cronQrcode');
        
        var kendoQRCode = $element.kendoQRCode().data('kendoQRCode');
        $(element).remove();
        
        scope.$watch(function(){return ngModel.$modelValue}, function(value, old){
          var result = '';
          
          if (value !== old) {
            result = value;
          }
          
          options['value'] = result;
          kendoQRCode.setOptions(options);
        });
      }
    }
  })  
  
  .directive('cronMasktext', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var cronMasktext = {};
        
        try {  
          var json = window.buildElementOptions(element);
          cronMasktext = JSON.parse(json);
        } catch(err) {
          console.log('Masktext invalid configuration! ' + err);
        }
        
        var options = app.kendoHelper.getConfigMasktext(cronMasktext);
        var parent = element.parent();
        $(parent).append('<input style="width: 100%;" class="cronMasktext" ng-model="' + attrs.ngModel + '">');
        var $element = $(parent).find('input.cronMasktext');
        
        $element.kendoMaskedTextBox(options).data('kendoMaskedTextBox');
        $compile($element)(element.scope());
        $(element).remove();
      }
    }
  }) 
  
  .directive('cronNumerictext', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var cronNumerictext = {};
        
        try {  
          var json = window.buildElementOptions(element);
          cronNumerictext = JSON.parse(json);
        } catch(err) {
          console.log('Numerictext invalid configuration! ' + err);
        }
        
        var options = app.kendoHelper.getConfigNumerictext(cronNumerictext);
        var parent = element.parent();
        $(parent).append('<input style="width: 100%;" class="cronNumerictext" ng-model="' + attrs.ngModel + '">');
        var $element = $(parent).find('input.cronNumerictext');
        
        $element.kendoNumericTextBox(options).data('kendoNumericTextBox');
        $compile($element)(element.scope());
        $(element).remove();
      }
    }
  }) 
}(app));