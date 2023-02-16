/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/account/settings/deactivate-account.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/account/settings/deactivate-account.js ***!
  \********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSettingsDeactivateAccount = function () {\n  // Private variables\n  var form;\n  var validation;\n  var submitButton; // Private functions\n\n  var initValidation = function initValidation() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validation = FormValidation.formValidation(form, {\n      fields: {\n        deactivate: {\n          validators: {\n            notEmpty: {\n              message: 'Please check the box to deactivate your account'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Are you sure you would like to deactivate your account?\",\n            icon: \"warning\",\n            buttonsStyling: false,\n            showDenyButton: true,\n            confirmButtonText: \"Yes\",\n            denyButtonText: 'No',\n            customClass: {\n              confirmButton: \"btn btn-light-primary\",\n              denyButton: \"btn btn-danger\"\n            }\n          }).then(function (result) {\n            if (result.isConfirmed) {\n              Swal.fire({\n                text: 'Your account has been deactivated.',\n                icon: 'success',\n                confirmButtonText: \"Ok\",\n                buttonsStyling: false,\n                customClass: {\n                  confirmButton: \"btn btn-light-primary\"\n                }\n              });\n            } else if (result.isDenied) {\n              Swal.fire({\n                text: 'Account not deactivated.',\n                icon: 'info',\n                confirmButtonText: \"Ok\",\n                buttonsStyling: false,\n                customClass: {\n                  confirmButton: \"btn btn-light-primary\"\n                }\n              });\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      form = document.querySelector('#kt_account_deactivate_form');\n\n      if (!form) {\n        return;\n      }\n\n      submitButton = document.querySelector('#kt_account_deactivate_account_submit');\n      initValidation();\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsDeactivateAccount.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FjY291bnQvc2V0dGluZ3MvZGVhY3RpdmF0ZS1hY2NvdW50LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtDQUFrQyxHQUFHLFlBQVk7RUFDakQ7RUFDQSxJQUFJQyxJQUFKO0VBQ0EsSUFBSUMsVUFBSjtFQUNBLElBQUlDLFlBQUosQ0FKaUQsQ0FNakQ7O0VBQ0EsSUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0lBQzdCO0lBQ0FGLFVBQVUsR0FBR0csY0FBYyxDQUFDQyxjQUFmLENBQ1RMLElBRFMsRUFFVDtNQUNJTSxNQUFNLEVBQUU7UUFDSkMsVUFBVSxFQUFFO1VBQ1JDLFVBQVUsRUFBRTtZQUNSQyxRQUFRLEVBQUU7Y0FDTkMsT0FBTyxFQUFFO1lBREg7VUFERjtRQURKO01BRFIsQ0FEWjtNQVVJQyxPQUFPLEVBQUU7UUFDTEMsT0FBTyxFQUFFLElBQUlSLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkUsT0FBM0IsRUFESjtRQUVMWCxZQUFZLEVBQUUsSUFBSUUsY0FBYyxDQUFDTyxPQUFmLENBQXVCRyxZQUEzQixFQUZUO1FBR0w7UUFDQUMsU0FBUyxFQUFFLElBQUlYLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkssVUFBM0IsQ0FBc0M7VUFDN0NDLFdBQVcsRUFBRSxTQURnQztVQUU3Q0MsZUFBZSxFQUFFLEVBRjRCO1VBRzdDQyxhQUFhLEVBQUU7UUFIOEIsQ0FBdEM7TUFKTjtJQVZiLENBRlMsQ0FBYjtFQXdCSCxDQTFCRDs7RUE0QkEsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtJQUN6QmxCLFlBQVksQ0FBQ21CLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVVDLENBQVYsRUFBYTtNQUNoREEsQ0FBQyxDQUFDQyxjQUFGO01BRUF0QixVQUFVLENBQUN1QixRQUFYLEdBQXNCQyxJQUF0QixDQUEyQixVQUFVQyxNQUFWLEVBQWtCO1FBQ3pDLElBQUlBLE1BQU0sSUFBSSxPQUFkLEVBQXVCO1VBRW5CQyxJQUFJLENBQUNDLElBQUwsQ0FBVTtZQUNOQyxJQUFJLEVBQUUseURBREE7WUFFTkMsSUFBSSxFQUFFLFNBRkE7WUFHTkMsY0FBYyxFQUFFLEtBSFY7WUFJTkMsY0FBYyxFQUFFLElBSlY7WUFLTkMsaUJBQWlCLEVBQUUsS0FMYjtZQU1OQyxjQUFjLEVBQUUsSUFOVjtZQU9OQyxXQUFXLEVBQUU7Y0FDVEMsYUFBYSxFQUFFLHVCQUROO2NBRVRDLFVBQVUsRUFBRTtZQUZIO1VBUFAsQ0FBVixFQVdHWixJQVhILENBV1EsVUFBQ2EsTUFBRCxFQUFZO1lBQ2hCLElBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtjQUNwQkMsSUFBSSxDQUFDWixJQUFMLENBQVU7Z0JBQ05DLElBQUksRUFBRSxvQ0FEQTtnQkFFTkMsSUFBSSxFQUFFLFNBRkE7Z0JBR05HLGlCQUFpQixFQUFFLElBSGI7Z0JBSU5GLGNBQWMsRUFBRSxLQUpWO2dCQUtOSSxXQUFXLEVBQUU7a0JBQ1RDLGFBQWEsRUFBRTtnQkFETjtjQUxQLENBQVY7WUFTSCxDQVZELE1BVU8sSUFBSUUsTUFBTSxDQUFDRyxRQUFYLEVBQXFCO2NBQ3hCRCxJQUFJLENBQUNaLElBQUwsQ0FBVTtnQkFDTkMsSUFBSSxFQUFFLDBCQURBO2dCQUVOQyxJQUFJLEVBQUUsTUFGQTtnQkFHTkcsaUJBQWlCLEVBQUUsSUFIYjtnQkFJTkYsY0FBYyxFQUFFLEtBSlY7Z0JBS05JLFdBQVcsRUFBRTtrQkFDVEMsYUFBYSxFQUFFO2dCQUROO2NBTFAsQ0FBVjtZQVNIO1VBQ0osQ0FqQ0Q7UUFtQ0gsQ0FyQ0QsTUFxQ087VUFDSFQsSUFBSSxDQUFDQyxJQUFMLENBQVU7WUFDTkMsSUFBSSxFQUFFLHFFQURBO1lBRU5DLElBQUksRUFBRSxPQUZBO1lBR05DLGNBQWMsRUFBRSxLQUhWO1lBSU5FLGlCQUFpQixFQUFFLGFBSmI7WUFLTkUsV0FBVyxFQUFFO2NBQ1RDLGFBQWEsRUFBRTtZQUROO1VBTFAsQ0FBVjtRQVNIO01BQ0osQ0FqREQ7SUFrREgsQ0FyREQ7RUFzREgsQ0F2REQsQ0FuQ2lELENBNEZqRDs7O0VBQ0EsT0FBTztJQUNITSxJQUFJLEVBQUUsZ0JBQVk7TUFDZDFDLElBQUksR0FBRzJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBUDs7TUFFQSxJQUFJLENBQUM1QyxJQUFMLEVBQVc7UUFDUDtNQUNIOztNQUVERSxZQUFZLEdBQUd5QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUNBQXZCLENBQWY7TUFFQXpDLGNBQWM7TUFDZGlCLFVBQVU7SUFDYjtFQVpFLENBQVA7QUFjSCxDQTNHd0MsRUFBekMsQyxDQTZHQTs7O0FBQ0F5QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7RUFDakMvQyxrQ0FBa0MsQ0FBQzJDLElBQW5DO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vYWNjb3VudC9zZXR0aW5ncy9kZWFjdGl2YXRlLWFjY291bnQuanM/YTBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQWNjb3VudFNldHRpbmdzRGVhY3RpdmF0ZUFjY291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xyXG4gICAgdmFyIGZvcm07XHJcbiAgICB2YXIgdmFsaWRhdGlvbjtcclxuICAgIHZhciBzdWJtaXRCdXR0b247XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xyXG4gICAgICAgIHZhbGlkYXRpb24gPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgZm9ybSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGJveCB0byBkZWFjdGl2YXRlIHlvdXIgYWNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuU3VibWl0QnV0dG9uKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kZWZhdWx0U3VibWl0OiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5EZWZhdWx0U3VibWl0KCksIC8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gZW5hYmxlIG5vcm1hbCBidXR0b24gc3VibWl0IGFmdGVyIGZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlYWN0aXZhdGUgeW91ciBhY2NvdW50P1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVueUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnlCdXR0b246IFwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBkZWFjdGl2YXRlZC4nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmlzRGVuaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBY2NvdW50IG5vdCBkZWFjdGl2YXRlZC4nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfYWNjb3VudF9kZWFjdGl2YXRlX2Zvcm0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfYWNjb3VudF9kZWFjdGl2YXRlX2FjY291bnRfc3VibWl0Jyk7XHJcblxyXG4gICAgICAgICAgICBpbml0VmFsaWRhdGlvbigpO1xyXG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RBY2NvdW50U2V0dGluZ3NEZWFjdGl2YXRlQWNjb3VudC5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RBY2NvdW50U2V0dGluZ3NEZWFjdGl2YXRlQWNjb3VudCIsImZvcm0iLCJ2YWxpZGF0aW9uIiwic3VibWl0QnV0dG9uIiwiaW5pdFZhbGlkYXRpb24iLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwiZGVhY3RpdmF0ZSIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJTdWJtaXRCdXR0b24iLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiaGFuZGxlRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJzaG93RGVueUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiZGVueUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJkZW55QnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJTd2FsIiwiaXNEZW5pZWQiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/account/settings/deactivate-account.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/account/settings/deactivate-account.js"]();
/******/ 	
/******/ })()
;