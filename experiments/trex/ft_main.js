require.config({
        baseUrl: "js/",
        paths: {
          jquery: 'libs/jquery-1.10.2.min',
          underscore: 'libs/underscore-min',
          backbone: 'libs/backbone-min',
          templates: 'goatApp/templates'
        }
      ,
        shim: {
          underscore: {
            exports: "_"
          },
          backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
          }
        }
      });
      
      require(['jquery','underscore','backbone','goatApp/goatApp'], function($,_,Backbone,Goat){
        Goat.initApp();
      });